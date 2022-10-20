//finding tags
const form = document.querySelector("form"),
  sDiamond = document.querySelector("#showDiamond"),
  sTaka = document.querySelector("#showTaka"),
  selectOffer = form.querySelectorAll(".selectBtn"),
  inputDiamond = form.querySelector("#diamond"),
  inputTaka = form.querySelector("#taka"),
  inputUid = form.querySelector("#uid"),
  inputName = form.querySelector("#inputName"),
  inputEmail = form.querySelector("#inputEmail"),
  inputtrxID = form.querySelector("#inputtrxID"),
  inputNumber = form.querySelector("#inputNumber"),
  message = document.getElementById("response");

for (var x = 0; x < selectOffer.length; x++) {
  selectOffer[x].addEventListener("click", function () {
    var text = this.value;
    sDiamond.innerHTML = `${text}`;
    inputDiamond.value = text;
    switch (inputDiamond.value) {
      case "115 Diamond":
        sTaka.innerHTML = " 90 Taka";
        getAmount(90);
        break;
      case "240 Diamond":
        sTaka.innerHTML = " 185 Taka";
        inputTaka.innerHTML = getAmount(185);
        break;
      case "355 Diamond":
        sTaka.innerHTML = " 275 Taka";
        inputTaka.innerHTML = getAmount(275);
        break;
      case "480 Diamond":
        sTaka.innerHTML = " 360 Taka";
        inputTaka.innerHTML = getAmount(360);
        break;
      case "610 Diamond":
        sTaka.innerHTML = " 460 Taka";
        inputTaka.innerHTML = getAmount(460);
        break;
      case "725 Diamond":
        sTaka.innerHTML = " 515 Taka";
        inputTaka.innerHTML = getAmount(515);
        break;
      case "1090 Diamond":
        sTaka.innerHTML = " 815 Taka";
        inputTaka.innerHTML = getAmount(815);
        break;
      case "1240 Diamond":
        sTaka.innerHTML = " 860 Taka";
        inputTaka.innerHTML = getAmount(860);
        break;
      case "2090 Diamond":
        sTaka.innerHTML = " 1485 Taka";
        inputTaka.innerHTML = getAmount(1485);
        break;
      case "2530 Diamond":
        sTaka.innerHTML = " 1830 Taka";
        inputTaka.innerHTML = getAmount(1830);
        break;
      case "Level Up Pass":
        sTaka.innerHTML = " 190 Taka";
        inputTaka.innerHTML = getAmount(190);
        break;
      case "Weekly Membership":
        sTaka.innerHTML = " 185 Taka";
        inputTaka.innerHTML = getAmount(185);
        break;
      case "Monthly Membership":
        sTaka.innerHTML = " 910 Taka";
        inputTaka.innerHTML = getAmount(910);
        break;
      default:
        sTaka.innerHTML = " 0 Taka";
        inputTaka.innerHTML = 'আমাদের "Bkash" এ "0TK" টাকা "send money" করুন';
    }

    function getAmount(amount) {
      return (inputTaka.innerHTML = ` আমাদের "Bkash Number : 01846485868 " এ "${amount}" টাকা "send money" করুন `);
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  fetch(
    "https://script.google.com/macros/s/AKfycbxkGEuAh_AKxkBsdXHr7P6EfYvtaAQgZfn3dIKkDh-6UPWJClcG7VnH3A1igpinWP9udw/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      message.innerHTML = data;
      setTimeout(() => {
        message.innerHTML = "";
      }, 10000);
    });
  inputDiamond.value = "";
  inputUid.value = "";
  inputName.value = "";
  inputEmail.value = "";
  inputtrxID.value = "";
  inputNumber.value = "";
});
