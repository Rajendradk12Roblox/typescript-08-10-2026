/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

const presentStudentNames = attendance
    .filter(record => record.status === "present")
    .map(record => students.find(student => student.id === record.studentId)?.name);

const lateStudentNames = attendance
    .filter(record => record.status === "late")
    .map(record => students.find(student => student.id === record.studentId)?.name);

const studentStatusArray = students.map(student => {
    const record = attendance.find(att => att.studentId === student.id);
    return { name: student.name, status: record ? record.status : "unknown" };
});

console.log("Present Student Names:", presentStudentNames);
console.log("Late Student Names:", lateStudentNames);
console.log("Student Status Array:", studentStatusArray);