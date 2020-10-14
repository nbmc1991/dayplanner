//get times from moment
let now = moment().format("MMMM Do YYYY");
let nowDisplay=moment().format('MMMM Do YYYY')
//assigning where timewill be dislayed
let currentDate = $("#currentDay");
currentDate.text(nowDisplay)
console.log(currentDate)
    // console.log(test)

let storedTodos = JSON.parse(localStorage.getItem("storedTodos"));

















