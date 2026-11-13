/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

const calculateScore = (answers: string[], correctAnswers: string[]): number => {
    return answers.reduce((score, answer, index) => {
        if (answer === correctAnswers[index]) {
            return score + 20;
        }
        return score;
    }, 0);
};

const studentsWithScores = students.map(student => ({
    ...student,
    score: calculateScore(student.answers, correctAnswers),
}));
const passingStudents = studentsWithScores.filter(student => student.score > 70);
const highestScoreStudent = studentsWithScores.reduce((highest, student) => {
    return student.score > highest.score ? student : highest;
}, studentsWithScores[0]);

const averageScore = studentsWithScores.reduce((sum, student) => sum + student.score, 0) / studentsWithScores.length;

console.log("Students with Scores:", studentsWithScores);
console.log("Passing Students:", passingStudents);
console.log("Highest Score Student:", highestScoreStudent);
console.log("Average Score:", averageScore);