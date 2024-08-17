import CourseRoute from "../Routes/CourseRoute";
import UserRoutes from "../Routes/UserRoutes";

const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/crete-user', UserRoutes);
app.use('create-course', CourseRoute);



app.listen((PORT), () => {
    console.log("Server is running at port " + PORT);
})
