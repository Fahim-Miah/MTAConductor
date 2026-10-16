// Script to fix question IDs
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public', 'app.js');
let content = fs.readFileSync(filePath, 'utf8');

// Extract OTHER_QUESTIONS array
const otherQuestionsMatch = content.match(/const OTHER_QUESTIONS = \[([\s\S]*?)\];/);
if (!otherQuestionsMatch) {
  console.error('Could not find OTHER_QUESTIONS array');
  process.exit(1);
}

const otherQuestionsText = otherQuestionsMatch[1];

// Parse individual questions
const questionRegex = /\{ id: \d+, category: "[^"]+", topics: \[[^\]]+\], q: "[^"]+", choices: \[[^\]]+\], correct: \d+, explanation: "[^"]+" \}/g;
const questions = [];
let match;

while ((match = questionRegex.exec(otherQuestionsText)) !== null) {
  questions.push(match[0]);
}

console.log(`Found ${questions.length} questions in OTHER_QUESTIONS`);

// Renumber questions starting from 102
const renumberedQuestions = questions.map((q, index) => {
  const newId = 102 + index;
  return q.replace(/id: \d+,/, `id: ${newId},`);
});

// Reconstruct the OTHER_QUESTIONS array
const newOtherQuestionsText = renumberedQuestions.join(',\n  ');

// Replace in content
const newContent = content.replace(
  /const OTHER_QUESTIONS = \[[\s\S]*?\];/,
  `const OTHER_QUESTIONS = [\n  ${newOtherQuestionsText}\n];`
);

// Write back
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Fixed question IDs successfully');
console.log(`Questions renumbered from 102 to ${102 + questions.length - 1}`);
