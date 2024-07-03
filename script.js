let ImgBox = document.getElementById("img-box");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
const generateButton = document.querySelector(".container button");
generateButton.addEventListener("click", GenerateQR);
function GenerateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    ImgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");

    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
