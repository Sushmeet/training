// Lets make a contrived example, where i have a funciton called student info.
// if an id is string, than it's a new Student
// if an id is number, then it's an old student

function StudentInfo(id: string, studentGrade: string);
function StudentInfo(id: number, studentGrade: number);

function StudentInfo(id: string | number, studentGrade: string | number) {
  console.log("id:", id, "studentgrade:", studentGrade);
}

StudentInfo(1234, 1);
StudentInfo("1234", "5");
