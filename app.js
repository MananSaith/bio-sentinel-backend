//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
// %%%%%%%%%%%%%%%%%%% Routes %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import teacherRoutes from "./Routes/Teacher/teacher_info_route.js";
import teachingRoutes from "./Routes/Teacher/teaching_info_route.js"; 
import viewCourseRoutes from "./Routes/Teacher/view_course_record_route.js";
import addNewCourseRoutes from "./Routes/Teacher/add_new_course_route.js";
import createSessionRoutes from "./Routes/Teacher/create_session_route.js";
import markAttendanceRoutes from "./Routes/Teacher/mark_attendance_route.js";
import helpAndSupportRoutes from "./Routes/help_and_support_route/help_and_support_route.js";
import studentRoutes from "./Routes/Student/student_routes.js";
import enrollmentRoutes from "./Routes/Student/enrollment_routes.js";
// %%%%%%%%%%%%%%%%%%% Models %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import Teacher from "./models/Teacher_models/teacher_info_model.js";
import TeachingInfo from "./models/Teacher_models/teaching_info.js";
import ViewCourseRecord from "./models/Teacher_models/view_course_record_model.js";
import AddNewCourse from "./models/Teacher_models/add_new_course_model.js";
import CreateSession from "./models/Teacher_models/create_session_model.js";
import MarkAttendance from "./models/Teacher_models/mark_attendance_model.js";
import HelpAndSupport from "./models/help_support_model/help_and_support_model.js";
import Student from "./models/Student_models/student_model.js";
import Enrollment from "./models/Student_models/enrollment_model.js";

dotenv.config();
const app = express();

app.use(bodyParser.json());

//%%%%%%%%%%%%%%%%%%% Routes %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Teacher
app.use("/api", teacherRoutes);
app.use("/api", teachingRoutes);
app.use("/api", viewCourseRoutes);
app.use("/api", addNewCourseRoutes);
app.use("/api", createSessionRoutes);
app.use("/api", markAttendanceRoutes);

// Student
app.use("/api", studentRoutes);
app.use("/api", enrollmentRoutes);

// Help and Support
app.use("/api", helpAndSupportRoutes);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%% Create table on startup %%%%%%%%%%%%%%%%

//teacher
Teacher.createTable();
TeachingInfo.createTable();
ViewCourseRecord.createTable();
AddNewCourse.createTable();
CreateSession.createTable();
MarkAttendance.createTable();

// student
Student.createTable();
Enrollment.createTable();

//help and support
HelpAndSupport.createTable();


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Server %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




//     app.js--------->>>> routes --------->>> controller------------>> model
