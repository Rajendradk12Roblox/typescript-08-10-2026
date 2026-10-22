/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countTotalPatients(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number; }[]): number {
    let count = 0;
    for (let i = 0; i < patients.length; i++) {
        count++;
    }
    return count;
}
function countAdmittedPatients(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number; }[]): number {
    let count = 0;
    for (let i = 0; i < patients.length; i++) {
        if (patients[i].admitted) {
            count++;
        }
    }
    return count;
}
function countDischargedPatients(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number; }[]): number {
    let count = 0;
    for (let i = 0; i < patients.length; i++) {
        if (!patients[i].admitted) {
            count++;
        }
    }
    return count;
}
function countPatientsByDepartment(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number; }[]): { [department: string]: number } {
    const departmentCounts: { [department: string]: number } = {};
    for (let i = 0; i < patients.length; i++) {
        const department = patients[i].department;
        departmentCounts[department] = (departmentCounts[department] || 0) + 1;
    }
    return departmentCounts;
}
function findHighestBill(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number; }[]): number {
    let highest = patients[0].bill;
    for (let i = 1; i < patients.length; i++) {
        if (patients[i].bill > highest) {
            highest = patients[i].bill;
        }
    }
    return highest;
}
function findLowestBill(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number; }[]): number {
    let lowest = patients[0].bill;
    for (let i = 1; i < patients.length; i++) {
        if (patients[i].bill < lowest) {
            lowest = patients[i].bill;
        }
    }
    return lowest;
}
function calculateAverageBill(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number; }[]): number {
    let totalBill = 0;
    for (let i = 0; i < patients.length; i++) {
        totalBill += patients[i].bill;
    }
    return totalBill / patients.length;
}
function calculateTotalRevenue(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number; }[]): number {
    let totalRevenue = 0; 
    for (let i = 0; i < patients.length; i++) {
        totalRevenue += patients[i].bill;
    }
    return totalRevenue;
}
function getAdmittedPatientNames(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number; }[]): string[] {
    const admittedNames: string[] = [];
    for (let i = 0; i < patients.length; i++) {
        if (patients[i].admitted) {
            admittedNames.push(patients[i].name);
        }
    }
    return admittedNames;
}
function printHospitalReport(patients: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number; }[]): void {
    console.log("Hospital Report");
    console.log(`Total Patients: ${countTotalPatients(patients)}`);
    console.log(`Total Admitted Patients: ${countAdmittedPatients(patients)}`);
    console.log(`Total Discharged Patients: ${countDischargedPatients(patients)}`);
    const departmentCounts = countPatientsByDepartment(patients);
    console.log("Patients by Department:");
    for (const department in departmentCounts) {
        console.log(`- ${department}: ${departmentCounts[department]}`);
    }
    console.log(`Highest Hospital Bill: ${findHighestBill(patients)}`);
    console.log(`Lowest Hospital Bill: ${findLowestBill(patients)}`);
    console.log(`Average Hospital Bill: ${calculateAverageBill(patients)}`);
    console.log(`Total Hospital Revenue: ${calculateTotalRevenue(patients)}`);
    console.log("Admitted Patients:");
    const admittedNames = getAdmittedPatientNames(patients);
    for (let i = 0; i < admittedNames.length; i++) {
        console.log(`- ${admittedNames[i]}`);
    }
}
printHospitalReport(patients);