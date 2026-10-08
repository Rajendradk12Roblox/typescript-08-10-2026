/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */
const attendance1: { employeeID: string; employeeName: string; date: string; checkInTime: string; checkOutTime: string; totalWorkingHours: number; isPresent: boolean } = {
    employeeID: "EMP001",
    employeeName: "John Doe",
    date: "2024-06-01",
    checkInTime: "08:00",
    checkOutTime: "17:00",
    totalWorkingHours: 8,
    isPresent: true
};

const attendance2: { employeeID: string; employeeName: string; date: string; checkInTime: string; checkOutTime: string; totalWorkingHours: number; isPresent: boolean } = {
    employeeID: "EMP002",
    employeeName: "Jane Smith",
    date: "2024-06-01",
    checkInTime: "09:00",
    checkOutTime: "18:00",
    totalWorkingHours: 9,
    isPresent: true
};

const attendance3: { employeeID: string; employeeName: string; date: string; checkInTime: string; checkOutTime: string; totalWorkingHours: number; isPresent: boolean } = {
    employeeID: "EMP003",
    employeeName: "Bob Johnson",
    date: "2024-06-01",
    checkInTime: "10:00",
    checkOutTime: "19:00",
    totalWorkingHours: 9,
    isPresent: false
};

console.log("Attendance 1:", attendance1);
console.log("Attendance 2:", attendance2);
console.log("Attendance 3:", attendance3);