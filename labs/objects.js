const course = {
    name: 'JavaScript Foundations',
    instructors: ['Brandon', 'Shane', 'Mike'],
    students: [
        {
            name: 'Donna',
            computer: {
                OS: 'Linux',
                type: 'laptop'
            }
        },
        {
            name: 'Alex',
            computer: {
                OS: 'macOS',
                type: 'iMac'
            }
        },
        {
            name: 'Linda',
            computer: {
                OS: 'unix',
                type: 'mainframe'
            }
        }
    ]
};

const name = course.name;          // TODO: replace null with the course name
const teacher = course.instructors[1];       // TODO: replace null with the second instructor
const student = course.students[0].name;       // TODO: replace null with the course first student's name
const computerType = course.students[1].computer.type;  // TODO: replace null with the second student's computer type

console.log('Course Name:', name);
console.log('Second teacher:', teacher);
console.log('First Student:', student);
console.log('Alex\'s computer type:', computerType);

// Bonus: An array of all the students that are using macOS.
// TODO: populate `coolStudents` with the names of the students that are using macOS.
const coolStudents = []
for (let i=0; i<course.students.length; i++) {
    // TODO: add code here
    if(course.students[i].computer.OS == "macOS")
    {
        coolStudents.push(course.students[i].name);
    }
}
console.log('Students using macOS:', coolStudents);