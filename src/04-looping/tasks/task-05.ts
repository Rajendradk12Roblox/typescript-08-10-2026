/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let goldMedalCount = 0;
let silverMedalCount = 0;
let bronzeMedalCount = 0;
let noMedalCount = 0;
let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
    if (scores[i] >= 95) {
        goldMedalCount++;
    } else if (scores[i] >= 85) {
        silverMedalCount++;
    } else if (scores[i] >= 75) {
        bronzeMedalCount++;
    } else {
        noMedalCount++;
    }
}
console.log("Gold Medal winners: " + goldMedalCount);
console.log("Silver Medal winners: " + silverMedalCount);
console.log("Bronze Medal winners: " + bronzeMedalCount);
console.log("Students without medals: " + noMedalCount);
console.log("Average competition score: " + (totalScore / scores.length));