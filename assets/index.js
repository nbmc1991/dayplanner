$(document).ready(function () {


    //get times from moment
    let now = moment().format("MMMM Do YYYY");
    let nowDisplay = moment().format(' dddd, MMMM/Do/YYYY ')
    //assigning where timewill be dislayed
    let currentDate = $("#currentDay");
    currentDate.text(nowDisplay)
    console.log(currentDate)
    // console.log(test)

    
    // function to change color based on what time it is
    function changeColor() {
        var currentHour = moment().hours();
       

        $(".time-block").each(function () {
            var timeBlockh = parseInt($(this).attr("id"));
            if (timeBlockh < currentHour) {
                $(this).addClass("past")
            } else if (timeBlockh === currentHour) {
                $(this).removeClass("past")
                $(this).addClass("present")
            } else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }

        });
    }
    changeColor();

    $(".saveBtn").on("click",function(){
        var todo = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, todo);

    });

    //target each time block item and save value to local storage
    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))




    



});
























