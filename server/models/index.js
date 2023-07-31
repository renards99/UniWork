"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.job_types = require('./job_types')(sequelize, Sequelize);
db.bill = require('./bill')(sequelize, Sequelize);
db.experience_detail = require('./experience_detail')(sequelize, Sequelize);
db.job_location = require('./job_location')(sequelize, Sequelize);
db.job_post_application = require('./job_post_application')(sequelize, Sequelize);
db.job_post = require('./job_post')(sequelize, Sequelize);
db.service = require('./service')(sequelize, Sequelize);
db.company = require('./company')(sequelize, Sequelize);
db.educational_detail = require("./educational_detail")(sequelize, Sequelize);
db.request = require("./request")(sequelize, Sequelize);
db.student_profile = require("./student_profile")(sequelize, Sequelize);
db.user_account = require("./user_account")(sequelize, Sequelize);
db.user_log = require("./user_log")(sequelize, Sequelize);
db.role = require("./role")(sequelize, Sequelize);

module.exports = db;
