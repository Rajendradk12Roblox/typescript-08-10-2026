/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > scores[0]) {
    scores[0] = scores[i];
  }
}
return scores[0];
}

function findLowestScore(scores: number[]): number {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < scores[0]) {
      scores[0] = scores[i];
    }
  }
  return scores[0];
}

function calculateAverage(scores: number[]): number {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

function countPassedStudents(scores: number[]): number {
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 75) {
    scores[0]++;
  }
}
return scores[0];
}
const highestScore = findHighestScore(scores);
const lowestScore = findLowestScore(scores);
const averageScore = calculateAverage(scores);
const passedStudentsCount = countPassedStudents(scores);

console.log("Backend Development Scores Report:");
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Number of Students Passed: ${passedStudentsCount}`);