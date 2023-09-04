const container = document.querySelector(".container"),
  qrInput = container.querySelector(".fm input"),
  generate = container.querySelector(".fm button"),
  qrImage = container.querySelector(".qr img");
let preVal;

generate.addEventListener("click", () => {
  let qrval = qrInput.value.trim();

  if (!qrval || preVal === qrval) {
    return;
  }
  
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrval}`;
  qrImage.addEventListener("load", () => {
    container.classList.add("active");
    generate.innerText = "Generating QR..";
  });
});

qrInput.addEventListener("keyup", ()=> {
    if(!qrInput.value.trim()) {
        container.classList.remove("active");
        generate.innerText = "Generate QR";
        preVal = "";
    }
})

