function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students/';

  const tableBody = document.querySelector('tbody');

  const firstName = document.querySelector('input[name="firstName"]');
  const lastName = document.querySelector('input[name="lastName"]');
  const facultyNumber = document.querySelector('input[name="facultyNumber"]');
  const grade = document.querySelector('input[name="grade"]');

  const submitBtn = document.getElementById('submit');
  document.addEventListener('DOMContentLoaded', getTable);
  submitBtn.addEventListener('click', submit);

  async function submit() {
    if (!firstName.value || !lastName.value || !facultyNumber.value || !grade.value) {
      return;
    }
      
    let body = {
        firstName: firstName.value,
        lastName: lastName.value,
        facultyNumber: facultyNumber.value,
        grade: grade.value
      }
  
      await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(body)
      }) 
      
      firstName.value = "";
      lastName.value = "";
      facultyNumber.value = "";
      grade.value = "";

      await getTable();
    }

  async function getTable() {
    let res = await fetch(BASE_URL);
    let students = await res.json();

    tableBody.innerHTML = "";

    for (const studentId in students) {
      const student = students[studentId];
      const row = tableBody.insertRow();
      row.insertCell().textContent = student.firstName;
      row.insertCell().textContent = student.lastName;
      row.insertCell().textContent = student.facultyNumber;
      row.insertCell().textContent = student.grade;
    }
  }
}

attachEvents();