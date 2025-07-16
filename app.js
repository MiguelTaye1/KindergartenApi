//This is the entry point for the Kindergarten API application
const express = require('express');
const mongoose = require('mongoose');
//IMPORT dotenv to manage environment variables
require('dotenv').config();
//import corse so that the frontend can access the backend
const cors = require('cors');



//Create an app based on the express framework
const app = express();
//Use cors to allow cross-origin requests
app.use(cors());

//below we allow our api to parse incoming JSON requests
app.use(express.json());

//Import the login routes
const loginRoutes = require('./routes/login');
//Use the login routes
app.use('/api/login', loginRoutes);

//Import the classroom routes
const classroomRoutes = require('./routes/classroom');
//Use the classroom routes
app.use('/api/classrooms', classroomRoutes);

//Test/establish the connection to the database using the link from the .env file
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));


const port = process.env.PORT || 3000;//Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});