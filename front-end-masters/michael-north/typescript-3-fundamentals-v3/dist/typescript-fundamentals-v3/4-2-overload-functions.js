// Lets make a contrived example, where i have a funciton called student info.
// if an id is string, than it's a new Student
// if an id is number, then it's an old student
function StudentInfo(id, studentGrade) {
    console.log("id:", id, "studentgrade:", studentGrade);
}
StudentInfo(1234, 1);
StudentInfo("1234", "5");
