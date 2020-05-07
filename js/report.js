let html = ''
let student
let search

// Print function that prints info to the webpage
function print(html) {
  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML = html;
}

// Get students report and print in this format
function getReport( student ) {
  let report = `<h2>Name: ${student.name}</h2>`
  report += `<ul><li>Track: ${student.track}</li>`
  report += `<li>Achievements: ${student.achievements}</li>`
  report += `<li>Points: ${student.points}</li></ul>`
  return report
}

// Search for student using prompt
while (true) {
  search = prompt("Search student records: Type a name, or type 'quit' to end")
  // If user types 'quit' or exits, the loop ends
  if (search === null || search.toLowerCase() === 'quit') {
    break
  }
  // Loops through the students array
  for (let i = 0; i < students.length; i++) {
    student = students[i]
    // If students name is found in search prompt, activate getReport function
    if ( student.name === search ) {
      html = getReport( student )
      print(html)
    } else if ( student.name !== search ) {
      html = `<h2> This student ${search} cannot be found.</h2>`
      print(html)
    }
  }
}

print(html)
