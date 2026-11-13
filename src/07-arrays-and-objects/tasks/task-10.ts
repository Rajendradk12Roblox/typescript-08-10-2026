/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const calculateScore = (answers: { questionId: number; answer: string }[]): number => {
    return answers.reduce((score, answer) => {
        const question = questions.find(q => q.id === answer.questionId);
        if (question && question.correctAnswer === answer.answer) {
            return score + 25;
        }
        return score;
    }, 0);
};
const studentScores = submissions.map(submission => ({
    student: submission.student,
    score: calculateScore(submission.answers),
}));

const studentCorrectAnswers = submissions.map(submission => {
    const correctCount = submission.answers.reduce((count, answer) => {
        const question = questions.find(q => q.id === answer.questionId);
        if (question && question.correctAnswer === answer.answer) {
            return count + 1;
        }
        return count;
    }, 0);
    const wrongCount = submission.answers.length - correctCount;
    return { student: submission.student, correct: correctCount, wrong: wrongCount };
});

const averageScore = studentScores.reduce((total, student) => total + student.score, 0) / studentScores.length;
const highestScore = Math.max(...studentScores.map(student => student.score));
const lowestScore = Math.min(...studentScores.map(student => student.score));
const passedStudents = studentScores.filter(student => student.score >= 70).length;
const failedStudents = studentScores.length - passedStudents;
const passRate = (passedStudents / studentScores.length) * 100;

const examAnalytics = {
    totalStudents: studentScores.length,
    averageScore: parseFloat(averageScore.toFixed(2)),
    highestScore,
    lowestScore,
    passedStudents,
    failedStudents,
    passRate: parseFloat(passRate.toFixed(2)),
};

console.log(examAnalytics);