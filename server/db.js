const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "",
    host: "localhost",
    port: 5432,
    database: "postgres"
    // connectionString: "postgres://bzmwhixr:RnyTrl9uL4hGFfIRvxuoFJ9_6bhskFGk@ruby.db.elephantsql.com/bzmwhixr"
});

module.exports = pool;