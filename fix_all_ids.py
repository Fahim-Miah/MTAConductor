#!/usr/bin/env python3
import re

# Read the file
with open('public/app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the OTHER_QUESTIONS array
start_marker = 'const OTHER_QUESTIONS = ['
end_marker = '];'

start_idx = content.find(start_marker)
if start_idx == -1:
    print("Could not find OTHER_QUESTIONS array")
    exit(1)

# Find the closing bracket
search_start = start_idx + len(start_marker)
end_idx = content.find(end_marker, search_start)
if end_idx == -1:
    print("Could not find end of OTHER_QUESTIONS array")
    exit(1)

# Extract the array content
array_content = content[search_start:end_idx]

# Find all question objects
question_pattern = r'\{ id: (\d+),[^}]+\}'
questions = list(re.finditer(question_pattern, array_content, re.DOTALL))

print(f"Found {len(questions)} questions in OTHER_QUESTIONS")

# Create new content with sequential IDs starting from 102
new_questions = []
for i, match in enumerate(questions):
    new_id = 102 + i
    question_text = match.group(0)
    # Replace the ID
    new_question = re.sub(r'id: \d+,', f'id: {new_id},', question_text)
    new_questions.append(new_question)

# Reconstruct the array
new_array_content = '\n  ' + ',\n  '.join(new_questions) + '\n'

# Replace in the original content
new_content = content[:start_idx + len(start_marker)] + new_array_content + content[end_idx:]

# Write back
with open('public/app.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Fixed IDs from 102 to {102 + len(questions) - 1}")
print(f"Total questions in OTHER_QUESTIONS: {len(questions)}")
