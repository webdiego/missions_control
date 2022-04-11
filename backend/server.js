const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const { errorHandler } = require('./middleware/errorMiddleware');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

//Overwrite default errorhandler
app.use(errorHandler);

//We use all the routes that we define for /api/goals & /api/users
app.use('/api/missions', require('./routes/missionRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => console.log(`Server run on ${port}`));
