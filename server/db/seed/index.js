var sql = require('sql.js');
// or sql = window.SQL if you are in a browser
const fs = require('fs');
const databaseFileName = '../react-web-store-db.sqlite';
var db;

if( fs.existsSync(databaseFileName) ) {
    // Database already exists, nothing to seed.
    console.error("Database file " + databaseFileName + " already exists");
    console.error("Nothing to seed. To seed a new database please delete file manually");
    // Lets test that we can load database by the way
    const filebuffer = fs.readFileSync(databaseFileName);
    const db = new sql.Database(filebuffer);
    testdatabase(db);
    process.exit();
} else {
    console.log ("Database file does not exist ... Perfect !!! Lets create DB and seed it with test data");
}

// Instanciates a fresh a new database and create db schema
var db = new sql.Database();
createDBSchema(db);
testdatabase(db);

// Export the database to an Uint8Array containing the SQLite database file
var data = db.export();
var buffer = new Buffer(data);
fs.writeFileSync(databaseFileName, buffer);

function createDBSchema (db) {
    // Execute some sql
    sqlstr = "CREATE TABLE products (a int, b char);";
    sqlstr += "INSERT INTO products VALUES (0, 'Product 1');"
    sqlstr += "INSERT INTO products VALUES (1, 'Product 2');"
    db.run(sqlstr); // Run the query without returning anything

    // var res = db.exec("SELECT * FROM hello");
    /*
    [
        {columns:['a','b'], values:[[0,'hello'],[1,'world']]}
    ]
    */
};

function testdatabase (db) {
    // Prepare an sql test statement
    var stmt = db.prepare("SELECT * FROM products WHERE a=:aval AND b=:bval");

    // Bind values to the parameters and fetch the results of the query
    var result = stmt.getAsObject({':aval' : 1, ':bval' : 'Product 2'});
    console.log(result); 

    // Prepare an sql test statement
    var stmt2 = db.prepare("SELECT * FROM products");
    console.log("Products in the database are:");
    while(stmt2.step()) {
        const result2 = stmt.getAsObject();
        console.log(result2); 
    }
    console.log("Done.");
    stmt2.free();

    // Bind other values
    stmt.bind([0, 'Product 1']);
    while (stmt.step()) console.log(stmt.getAsObject()); 

    // You can also use javascript functions inside your SQL code
    // Create the js function you need
    function add(a, b) {return a+b;}
    // Specifies the SQL function's name, the number of it's arguments, and the js function to use
    db.create_function("add_js", add);
    // Run a query in which the function is used
    db.run("INSERT INTO products VALUES (add_js(7, 3), add_js('Product 1 ', 'Product 2'));"); // Inserts 10 and 'Hello world'

    // free the memory used by the statement
    stmt.free();
    // You can not use your statement anymore once it has been freed.
    // But not freeing your statements causes memory leaks. You don't want that.
}

