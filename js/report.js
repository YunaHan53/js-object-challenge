let html = ''
let student

function print(message) {
  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (let i = 0; i < students.length; i++) {
  student = students[i]
  html += `<h2>Name: ${student.name}</h2>`
  html += `<ul>`
  html += `<li>Track: ${student.track}</li>`
  html += `<li>Achievements: ${student.achievements}</li>`
  html += `<li>Points: ${student.points}</li>`
  html += `</ul>`
}

print(html)
