function createUser() {
  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "User 1",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById(
        "response"
      ).innerHTML = `<strong>ID:</strong> ${data.id} <br>
                     <strong>Name:</strong> ${data.name} <br>
                     <strong>Created At:</strong> ${data.createdAt}`;
    })
    .catch((error) => {
      document.getElementById("response").innerHTML = "Error occurred!";
      console.error(error);
    });
}
