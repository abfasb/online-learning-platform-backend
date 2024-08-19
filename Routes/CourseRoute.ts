import CourseController from '../controllers/CourseController';
const express = require('express');

const router = express.Router();

router.post('/', CourseController.createCourse)

export default router;