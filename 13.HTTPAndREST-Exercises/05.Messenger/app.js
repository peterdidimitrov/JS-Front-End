function attachEvents() {
  const BASE_MESSAGE_URL = "http://localhost:3030/jsonstore/messenger";
  const sendButton = document.getElementById("submit");
  const refreshButton = document.getElementById("refresh");
  const textAreaMessage = document.getElementById("messages");
  const name = document.querySelector(
    "#controls > div:nth-child(1) > input[type=text]"
  );
  const message = document.querySelector(
    "#controls > div:nth-child(2) > input[type=text]"
  );

  sendButton.addEventListener("click", sendMessage);
  refreshButton.addEventListener("click", refreshMessages);

  function sendMessage() {
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ author: name.value, content: message.value }),
    };
    name.value = "";
    message.value = "";

    fetch(BASE_MESSAGE_URL, httpHeaders)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }

  function refreshMessages() {
    fetch(BASE_MESSAGE_URL)
      .then((response) => response.json())
      .then((data) => {
        textAreaMessage.textContent = "";
        let newMessage = "";
        for (const key in data) {
          newMessage += `${data[key].author}: ${data[key].content}\n`;
        }
        textAreaMessage.textContent = newMessage.trim();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}

attachEvents();
