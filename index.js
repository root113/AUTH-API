const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const dotenv = require(`dotenv`);
//Import routes
const authRoute = require(`./routes/auth`);
const postRoute = require(`./routes/posts`);

dotenv.config();

//?DB Connection
mongoose.connect(
  //!connection script saved in .env file
  //!which is not pushed to github repo
  //!to hide username and password
  process.env.DB_CONNECT,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => {
    console.log(`Connection to MongoDB Atlas servers is succesful`);
  }
);

//Middleware
app.use(express.json());
//Route Middlewares
app.use(`/api/user`, authRoute);
app.use(`/api/posts`, postRoute);

app.listen(3000, () =>
  console.log(`Server is up and running. Listening to port 3000`)
);
