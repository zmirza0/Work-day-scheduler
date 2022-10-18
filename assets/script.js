var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss")
$("#currentDay").text(today);


const saveBtn = $("#save");

document.getElementById("textBox").value = localStorage.getItem("9AM");