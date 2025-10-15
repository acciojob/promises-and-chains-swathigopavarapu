//your JS code here. If required.
const form = document.getElementById("voteForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const btn = document.getElementById("btn");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent default form submission

  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  // Validation for empty inputs
  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  // Promise that resolves or rejects based on age
  const checkAge = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  // Handle promise result
  checkAge
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});

