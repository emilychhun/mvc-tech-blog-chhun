let express = require('express');
let routes = require('./controllers');
let sequelize = require('./config/connection');
let path = require('path');


let helpers = require('./utils/helpers');



let exphbs = require('express-handlebars');
let hbs = exphbs.create({ helpers });


let session = require('express-session');

let app = express();
let PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let SequelizeStore = require('connect-session-sequelize')(session.Store);

let sess = {
  secret: 'bigbluedog',
  cookie: {
        // Session will automatically expire in 10 minutes
        expires: 10 * 60 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes

app.use(routes);
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
    });