$(document).ready(function () {


    //get times from moment
    let now = moment().format("MMMM Do YYYY");
    let nowDisplay = moment().format('MMMM Do YYYY')
    //assigning where timewill be dislayed
    let currentDate = $("#currentDay");
    currentDate.text(nowDisplay)
    console.log(currentDate)
    // console.log(test)

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

    $("#9 .description").val(localStorage.getItem("9"))
    $("#9 .description").val(localStorage.getItem("9"))
    $("#9 .description").val(localStorage.getItem("9"))
    $("#9 .description").val(localStorage.getItem("9"))
    $("#9 .description").val(localStorage.getItem("9"))
    $("#9 .description").val(localStorage.getItem("9"))



    // let test = false;

    // let plannerForm = $("#formPlanner");

    // plannerForm.empty();

    // let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

    // if (test) {console.log("storedPlans"); 
    // }






    // for (var time = 9; time < 18; time++)
    // console.log(time)

    // let rowDiv = $("<div>");



});
























