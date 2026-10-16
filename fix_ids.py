#!/usr/bin/env python3
import re

# Read the file
with open('public/app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find OTHER_QUESTIONS array
match = re.search(r'const OTHER_QUESTIONS = \[(.*?)\];', content, re.DOTALL)
if not match:
    print("Could not find OTHER_QUESTIONS")
    exit(1)

questions_text = match.group(1)

# Find all question objects
question_pattern = r'\{ id: (\d+), category: "([^"]+)", topics: \[([^\]]+)\], q: "([^"]+)", choices: \[([^\]]+)\], correct: (\d+), explanation: "([^"]+)" \}'
questions = list(re.finditer(question_pattern, questions_text))

print(f"Found {len(questions)} questions in OTHER_QUESTIONS")

# Renumber starting from 102
new_questions = []
for i, q in enumerate(questions):
    new_id = 102 + i
    # Replace the ID
    new_q = re.sub(r'id: \d+,', f'id: {new_id},', q.group(0))
    new_questions.append(new_q)

# Reconstruct the array
new_questions_text = ',\n  '.join(new_questions)

# Replace in content
new_content = content[:match.start(1)] + '\n  ' + new_questions_text + '\n' + content[match.end(1):]

# Write back
with open('public/app.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Fixed IDs from 102 to {102 + len(questions) - 1}")
