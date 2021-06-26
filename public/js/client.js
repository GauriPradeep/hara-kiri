const socket = io()

document.querySelector("#yay").addEventListener("click", ()=> {
    socket.emit("send-message");
});

socket.on("response", () => {
    console.log("Hey we got signal!!");
});