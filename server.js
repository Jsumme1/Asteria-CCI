const path = require("path");
const express = require("express");
const session = require("express-session");

const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const helpers = require("./utils/helpers");

const hbs = exphbs.create({ helpers });
// Set Handlebars as the default template engine.
console.log("Setting Handlebars as default")
app.engine("handlebars", hbs.engine);


app.set("view engine", "handlebars");

app.use(session(sess));



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

console.log("About to sync sequelize.")

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
/*
//Sets a basic route
app.get('/', (req, res) => res.send('Hello World !'));

//Makes the app listen to port 3000
app.listen(PORT, () => console.log(`App listening to port ${PORT}`));*/
