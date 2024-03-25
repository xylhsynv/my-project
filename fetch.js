// const request = () => {
//   fetch("https://simple-grocery-store-api.glitch.me")
//     .then((res) => res.json())
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
// };
// request();

// const request = async () => {
//   try {
//     const getRequest = await fetch(
//       "https://simple-grocery-store-api.glitch.me"
//     );
//   } catch {
//     console.log("error");
//   }
// };
// request();

const postRequest = () => {
  fetch("https://simple-grocery-store-api.glitch.me/", {
    method: "POST",
    headers: {
      "Content-Type": "application.json",
    },
    body: JSON.stringify({
      created: "",
    }),
  })
    .then((data) => console.log(data))
    .then((response) => console.log(response.json()))
    .catch((error) => console.log(error));
};
postRequest();
