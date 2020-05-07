let html = ''
let student
let search

function print(html) {
  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML = html;
}

function getReport(student) {
  let report = `<h2>Name: ${student.name}</h2>`
  report += `<ul><li>Track: ${student.track}</li>`
  report += `<li>Achievements: ${student.achievements}</li>`
  report += `<li>Points: ${student.points}</li></ul>`
  return report
}

while (true) {
  search = prompt("Search student records: Type a name, or type 'quit' to end")
  if (search === null || search.toLowerCase() === 'quit') {
    break
  }
  for (let i = 0; i < students.length; i++) {
    student = students[i]
    if ( student.name === search ) {
      html = getReport( student )
      print(html)
    }
  }
}

print(html)
