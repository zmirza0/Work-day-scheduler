var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss")
$("#currentDay").text(today);


$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
})


$("#hour9 .description").val(localStorage.getItem("hour9"));