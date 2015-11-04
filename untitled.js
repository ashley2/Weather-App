var students = []; // the variable students is being defined into an array

document.getElementById('addButton').addEventListener('click', addStudent); //the document wants to define an element of a button that when is clicked it runs addStudent

var studentNameInput = document.getElementById('studentName'); // the variable studentNameInput is defined by the element studentName
studentNameInput.addEventListener('keypress', keyPressed) // the event keypress is being  as an event
studentNameInput.focus();  // the method is focusing on the key press


function keyPressed(event) {
  if (event.charCode === 13) {
    addStudent();
  }
}

function addStudent() {
  var inputStr = studentNameInput.value;
  if(inputStr){

    var names = inputStr.split(',');
    names = names.map(function(name){
      return name.trim();
    }).filter(function(name){
      return name;
    });

    students = students.concat(names);

    studentNameInput.value = '';
    studentNameInput.focus();
    console.log('students:', students);
  }
}