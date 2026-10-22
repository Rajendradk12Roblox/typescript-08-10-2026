/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];
function countTotalsubmissions(submissions: ({ student: string; submitted: boolean; score: number; })[]): number {
    let count = 0;
    for (let i = 0; i < submissions.length; i++) {
        count++;
    }
    return count;
}
function countSubmittedAssignments(submissions: ({ student: string; submitted: boolean; score: number; })[]): number {
    let count = 0;
    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].submitted) {
            count++;
        }
    }
    return count;
}
function countMissingAssignments(submissions: ({ student: string; submitted: boolean; score: number; })[]): number {
    let count = 0;
    for (let i = 0; i < submissions.length; i++) {
        if (!submissions[i].submitted) {
            count++;
        }
    }
    return count;
}
function countStudentsAction(submissions: ({ student: string; submitted: boolean; score: number; })[]): { passed: number; revision: number } {
    let passed = 0;
    let revision = 0;
    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].score >= 75) {
            passed++;
        }
        else if (submissions[i].score < 75 && submissions[i].score > 0) {
            revision++;
        }
    }
    return { passed, revision };
}
function calculateScore(submissions: ({ student: string; submitted: boolean; score: number; })[]): { highest: number; average: number; lowest: number } {
    let totalScore = 0;
    let highest = submissions[0].score;
    let lowest = submissions[0].score;
    let average = 0;
    for (let i = 0; i < submissions.length; i++) {
        totalScore += submissions[i].score;
        if (submissions[i].score > highest) {
            highest = submissions[i].score;
        }
        if (submissions[i].score < lowest) {
            lowest = submissions[i].score;
        }
    }
    average = totalScore / submissions.length;
    return { highest, average, lowest };
}
function printReport(submissions: ({ student: string; submitted: boolean; score: number; })[]): void {
    console.log(`Total Students: ${countTotalsubmissions(submissions)}`);
    console.log(`Submitted Assignments: ${countSubmittedAssignments(submissions)}`);
    console.log(`Missing Assignments: ${countMissingAssignments(submissions)}`);
    const { passed, revision } = countStudentsAction(submissions);
    console.log(`Passed Students: ${passed}`);
    console.log(`Students Requiring Revision: ${revision}`);
    const { highest, average, lowest } = calculateScore(submissions);
    console.log(`Highest Score: ${highest}`);
    console.log(`Average Score: ${average}`);
    console.log(`Lowest Score: ${lowest}`);
}
printReport(submissions);