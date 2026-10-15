# Practice Test Feature - 80 Questions with 3-Hour Timer

## Overview
Replaced the "Quick Quiz" feature with a comprehensive **Practice Test** that mirrors the actual MTA Conductor exam format:
- **80 questions** (similar to actual exam length)
- **3-hour time limit** (matching real exam duration)
- **Countdown timer** with visual feedback
- **Auto-submit** when time expires

## Features

### 1. Practice Test Format
- **Question Count**: 80 randomly selected questions from the entire question bank
- **Time Limit**: 3 hours (180 minutes)
- **Question Mix**: Random selection from all categories
- **Exam-Like Experience**: Simulates actual MTA Conductor exam conditions

### 2. Timer Functionality
- **Countdown Display**: Shows remaining time in H:MM:SS format
- **Visual Location**: Prominently displayed in the quiz header
- **Color Warning**: Turns red when less than 10 minutes remain
- **Auto-Submit**: Automatically submits the test when time expires
- **Time Tracking**: Records actual time taken in results

### 3. User Interface Updates
- **Home Page**: "📝 Practice Test (80 questions, 3 hours)" button
- **Quiz Header**: Shows "Practice Test • 80 questions • 3 hour time limit"
- **Timer Display**: Blue background with countdown timer
- **Results Screen**: Shows time taken in H:MM:SS format

## Technical Implementation

### New Functions Added

#### `startPracticeTest()`
```javascript
function startPracticeTest() {
  // Selects 80 random questions
  // Sets up quiz state with isPracticeTest flag
  // Initializes 3-hour time limit
  // Starts the countdown timer
  // Switches to quiz view
}
```

#### `startTimer()`
```javascript
function startTimer() {
  // Shows timer display
  // Updates every second
  // Formats time as H:MM:SS
  // Changes color when < 10 minutes remain
  // Auto-submits when time expires
}
```

#### `stopTimer()`
```javascript
function stopTimer() {
  // Clears timer interval
  // Hides timer display
  // Called when quiz is completed or exited
}
```

### Modified Functions

#### `exitQuiz()`
- Now calls `stopTimer()` to clean up timer when exiting

#### `finishQuiz()`
- Calls `stopTimer()` when quiz is completed
- Formats time display differently for practice tests (H:MM:SS vs M:SS)

#### `renderQuizQuestion()`
- Updates subtitle to show "Practice Test" with time limit
- Displays appropriate subtitle based on quiz type

### State Management

Added to `quizState`:
```javascript
{
  isPracticeTest: true,
  timeLimit: 3 * 60 * 60 * 1000 // 3 hours in milliseconds
}
```

### Timer Logic

```javascript
// Updates every second
const elapsed = Date.now() - quizState.startTime;
const remaining = quizState.timeLimit - elapsed;

// Format as H:MM:SS
const hours = Math.floor(remaining / (1000 * 60 * 60));
const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

// Visual warning when < 10 minutes
if (remaining < 10 * 60 * 1000) {
  timeDisplay.classList.add('text-red-600');
}
```

## User Experience Flow

### Starting a Practice Test
1. User clicks "📝 Practice Test (80 questions, 3 hours)" on home page
2. 80 random questions are selected from the question bank
3. Quiz interface loads with timer visible
4. Subtitle shows "Practice Test • 80 questions • 3 hour time limit"
5. Timer starts counting down from 3:00:00

### During the Test
1. Timer counts down in real-time
2. Timer turns red when less than 10 minutes remain
3. User can navigate between questions freely
4. Timer continues running while navigating
5. User can exit early (timer stops)

### Completing the Test
**Option 1: Manual Submit**
- User clicks "View Results" after answering questions
- Timer stops
- Results show time taken in H:MM:SS format
- Practice recommendations generated

**Option 2: Time Expires**
- Timer reaches 0:00:00
- Alert appears: "Time is up! Your practice test will now be submitted."
- Test auto-submits
- Results show with time taken

### Results Display
- Score: X/80
- Accuracy: X%
- Time Taken: H:MM:SS (for practice tests)
- Practice recommendations based on performance

## Files Modified

### `index.html`
1. **Line 130**: Changed "Quick Quiz (10)" button to "📝 Practice Test (80 questions, 3 hours)"
2. **Line 145**: Changed "Quick Quiz — 10 Questions" to "📝 Practice Test — 80 Questions (3 hours)"
3. **Lines 158-164**: Added timer display element in quiz header

### `public/app.js`
1. **Lines 721-820**: Added `startPracticeTest()`, `startTimer()`, `stopTimer()` functions
2. **Line 821**: Modified `exitQuiz()` to call `stopTimer()`
3. **Lines 828-832**: Updated subtitle display for practice tests
4. **Lines 947-975**: Modified `finishQuiz()` to stop timer and format time display

## Benefits

### 1. Realistic Exam Simulation
- Matches actual MTA Conductor exam format
- Helps users practice time management
- Builds exam-taking stamina

### 2. Time Management Practice
- Visual timer helps users pace themselves
- Color warning alerts when time is running low
- Auto-submit simulates real exam conditions

### 3. Performance Tracking
- Records time taken for each practice test
- Helps users identify if they need to work on speed
- Shows improvement over time

### 4. Comprehensive Review
- 80 questions provide thorough coverage
- Random selection ensures variety
- Practice recommendations help focus study efforts

## Testing Scenarios

### Scenario 1: Starting a Practice Test
1. Click "📝 Practice Test (80 questions, 3 hours)"
2. Verify 80 questions are loaded
3. Verify timer shows 3:00:00
4. Verify subtitle shows "Practice Test • 80 questions • 3 hour time limit"

### Scenario 2: Timer Countdown
1. Start practice test
2. Wait 1 minute
3. Verify timer shows 2:59:00
4. Verify timer updates every second

### Scenario 3: Time Warning
1. Start practice test
2. Fast-forward time to 10 minutes remaining (or wait)
3. Verify timer turns red
4. Verify timer continues counting down

### Scenario 4: Auto-Submit
1. Start practice test
2. Let timer reach 0:00:00
3. Verify alert appears
4. Verify test auto-submits
5. Verify results show time taken

### Scenario 5: Manual Submit
1. Start practice test
2. Answer some questions
3. Click "View Results"
4. Verify timer stops
5. Verify results show time taken in H:MM:SS format

### Scenario 6: Early Exit
1. Start practice test
2. Click "← Exit"
3. Verify timer stops
4. Verify return to home page

## Comparison: Quick Quiz vs Practice Test

| Feature | Quick Quiz (Old) | Practice Test (New) |
|---------|------------------|---------------------|
| Questions | 10 | 80 |
| Time Limit | None | 3 hours |
| Timer | No | Yes (countdown) |
| Auto-Submit | No | Yes |
| Exam Simulation | No | Yes |
| Time Tracking | Minutes:Seconds | Hours:Minutes:Seconds |

## Future Enhancements (Optional)

1. **Pause Timer**: Allow users to pause the timer (with restrictions)
2. **Save Progress**: Auto-save answers so users can resume later
3. **Multiple Practice Tests**: Track performance across multiple attempts
4. **Difficulty Levels**: Easy (60 questions), Medium (80 questions), Hard (100 questions)
5. **Category-Focused Tests**: Practice tests focused on specific weak areas
6. **Detailed Analytics**: Time spent per question, questions flagged for review

## Deployment

The feature is ready to deploy:

```bash
git add .
git commit -m "Replace Quick Quiz with 80-question Practice Test with 3-hour timer"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy the updated site.

## Build Status
✅ Build successful - ready for deployment
