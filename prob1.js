const studentsDatabase = ['John', 'Jane', 'Alice', 'Bob', 'Eve'];

const findStudent = (allStudent, studentName) => {
    
    for (let i = 0; i < allStudent.length; i++) {
        if (allStudent[i] === studentName) {
            console.log(`Found ${studentName} at index ${i}`);
        }
    }
}

findStudent(studentsDatabase, 'Bob');