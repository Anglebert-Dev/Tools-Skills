let newWindow;

const openNewWindow = () => {
  const params = `scrollbars=no resizable= no , status=no , location = no , toolbar=no , menubar=no , width=300 , height=300`;
  newWindow = window.open("sub.html", "sub", params);
};

const sendMessage = () => {
  newWindow.postMessage({ foo: "bar" }, "*");
};

const response = document.getElementById("response");

window.addEventListener("message", (event) => {
  if (event.data?.foo) {
    response.innerText = event.data.foo;
  }
});

const closeWindow = (message) => {
  window.opener.postMessage({ msg: message }, "*");
  window.close();
};

window.addEventListener("message", (event) => {
  if (event.data?.foo) {
    response.innerText = event.data.foo;
  }
  if (event.data?.msg) {
    response.innerText = event.data.msg;
  }
});
