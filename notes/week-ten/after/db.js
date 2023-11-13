const Sequelize = require("sequelize");

const PGHOST = "ep-broken-paper-18793388.us-east-2.aws.neon.tech";
const PGDATABASE = "neondb";
const PGUSER = "bqchristie";
const PGPASSWORD = "3scCbnf5KyZG";
const PGPORT = "5432";
const ENDPOINT_ID = "ep-broken-paper-18793388";

// set up sequelize to point to our postgres database
let sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: "postgres",
  port: 5432,
  dialectOptions: {
    ssl: { rejectUnauthorized: false },
  },
});

const User = sequelize.define("users", {
  firstName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  lastName: Sequelize.TEXT,
  email: Sequelize.TEXT,
  password: Sequelize.TEXT,
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.log("Unable to connect to the database:", err);
  }
}

async function sync() {
  await sequelize.sync({ alter: true });
}

module.exports = {
  connect,
  sync,
  models: {
    User,
  },
};
