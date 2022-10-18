var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss")
$("#currentDay").text(today);

const saveBtn = $("#save");

document.getElementById("textbox9am").value = localStorage.getItem("9amnote");

saveBtn.on('click', function () {
    localStorage.setItem("9amnote", document.getElementById("textbox9am").value)
    console.log(document.getElementById("textbox9am").value)
  });