document.getElementById("webUsb").addEventListener("click", (button) => {
  button.preventDefault();
  const but = navigator.usb.requestDevice()
});
