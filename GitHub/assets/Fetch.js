let userInput = prompt("Enter your GitHub Username:");
const url = `https://api.github.com/users/${userInput}`;

function loadData() {
  const fetchData = fetch(url); // Storing the fetch promise in a variable

  fetchData
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json(); // Return a promise to parse JSON data
    })
    .then(data => {
      console.log(data);

      document.querySelector("#main").innerHTML = `<img src="${data.avatar_url}" alt="avatar">`;
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

loadData();