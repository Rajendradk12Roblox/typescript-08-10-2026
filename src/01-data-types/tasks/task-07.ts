/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

const registration1: { studentId: string; fullName: string; gradeLevel: string; courseId: string; courseTitle: string; instructorName: string; totalLearningHours: number; registrationDate: string; isPaymentCompleted: boolean } = {
    studentId: "STU001",
    fullName: "Alice Johnson",
    gradeLevel: "Sophomore",
    courseId: "CS101",
    courseTitle: "Introduction to Programming",
    instructorName: "Dr. Smith",
    totalLearningHours: 40,
    registrationDate: "2023-10-01",
    isPaymentCompleted: true
};
const registration2: { studentId: string; fullName: string; gradeLevel: string; courseId: string; courseTitle: string; instructorName: string; totalLearningHours: number; registrationDate: string; isPaymentCompleted: boolean } = {
    studentId: "STU002",
    fullName: "Bob Williams",
    gradeLevel: "Junior",
    courseId: "CS201",
    courseTitle: "Data Structures and Algorithms"
    instructorName: "Prof. Johnson",
    totalLearningHours: 60,
    registrationDate: "2023-10-05",
    isPaymentCompleted: false
};
const registration3: { studentId: string; fullName: string; gradeLevel: string; courseId: string; courseTitle: string; instructorName: string; totalLearningHours: number; registrationDate: string; isPaymentCompleted: boolean } = {
    studentId: "STU003",
    fullName: "Charlie Brown",
    gradeLevel: "Senior",
    courseId: "CS301", 
    courseTitle: "Advanced Programming Concepts",
    instructorName: "Dr. Lee",
    totalLearningHours: 80,
    registrationDate: "2023-10-10",
    isPaymentCompleted: true
};

console.log(registration1);
console.log(registration2);
console.log(registration3);