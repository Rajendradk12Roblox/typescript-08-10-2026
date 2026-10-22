/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

type Enrollment = {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
};


function getTotalEnrollments(enrollments: Enrollment[]): number {
    return enrollments.length;
}
function getCompletedEnrollments(enrollments: Enrollment[]): number {
    return enrollments.filter(enrollment => enrollment.completed).length;
}
function getIncompleteEnrollments(enrollments: Enrollment[]): number {
    return enrollments.filter(enrollment => !enrollment.completed).length;
}
function getCompletionPercentage(enrollments: Enrollment[]): number {
    const total = getTotalEnrollments(enrollments);
    const completed = getCompletedEnrollments(enrollments);
    return (completed / total) * 100;
}
function getHighestScore(enrollments: Enrollment[]): number {
    return Math.max(...enrollments.map(enrollment => enrollment.score));
}
function getLowestScore(enrollments: Enrollment[]): number {
    return Math.min(...enrollments.map(enrollment => enrollment.score));
}
function getAverageScore(enrollments: Enrollment[]): number {
    const total = enrollments.reduce((sum, enrollment) => sum + enrollment.score, 0);
    return total / enrollments.length;
}
function getPassingStudents(enrollments: Enrollment[]): number {
    return enrollments.filter(enrollment => enrollment.score >= 75).length;
}
function getStudentsPerCourse(enrollments: Enrollment[]): Record<string, number> {
    const courseCounts: Record<string, number> = {};
    enrollments.forEach(enrollment => {
        courseCounts[enrollment.course] = (courseCounts[enrollment.course] || 0) + 1;
    });
    return courseCounts;
}
function getAverageScorePerCourse(enrollments: Enrollment[]): Record<string, number> {
    const courseScores: Record<string, number[]> = {};
    enrollments.forEach(enrollment => {
        if (!courseScores[enrollment.course]) {
            courseScores[enrollment.course] = [];
        }
        courseScores[enrollment.course].push(enrollment.score);
    });
    const averageScores: Record<string, number> = {};
    for (const [course, scores] of Object.entries(courseScores)) {
        averageScores[course] = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    }
    return averageScores;
}
function getTotalLearningHours(enrollments: Enrollment[]): number {
    return enrollments.reduce((sum, enrollment) => sum + enrollment.duration, 0);
}
function getAverageLearningDuration(enrollments: Enrollment[]): number {
    const total = getTotalLearningHours(enrollments);
    return total / enrollments.length;
}
function printCompletionStatistics(enrollments: Enrollment[]): void {
    console.log("Completion Statistics:");
    console.log("Total enrollments:", getTotalEnrollments(enrollments));
    console.log("Completed enrollments:", getCompletedEnrollments(enrollments));
    console.log("Incomplete enrollments:", getIncompleteEnrollments(enrollments));
    console.log("Completion percentage:", getCompletionPercentage(enrollments).toFixed(2) + "%");
    console.log("=====================================================");
}
function printAcademicStatistics(enrollments: Enrollment[]): void {
    console.log("Academic Statistics:");
    console.log("Highest score:", getHighestScore(enrollments));
    console.log("Lowest score:", getLowestScore(enrollments));
    console.log("Average score:", getAverageScore(enrollments).toFixed(2));
    console.log("Students with passing scores (≥ 75):", getPassingStudents(enrollments));
}
printCompletionStatistics(enrollments);
printAcademicStatistics(enrollments);
