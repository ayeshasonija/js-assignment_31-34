// ====================== 01 ==========================
// function updateDateTime() {
//     var now = new Date();
//     var options = {
//         weekday: 'long', 
//         year: 'numeric', 
//         month: 'long', 
//         day: 'numeric', 
//         hour: 'numeric', 
//         minute: 'numeric', 
//         second: 'numeric'
//     };
//     var dateTimeString = now.toLocaleDateString(undefined, options);
//     document.getElementById('datetime').textContent = dateTimeString;
// }

// setInterval(updateDateTime, 1000);
// updateDateTime();


// ====================== 02 ==========================
// function alertCurrentMonth() {
//     var now = new Date();
//     var options = { month: 'long' };
//     var currentMonth = now.toLocaleString('en-US', options);
//     alert("Current month: " + currentMonth);
// }

// alertCurrentMonth();


// ====================== 03 ==========================
// function alertCurrentDay() {
//     var now = new Date();
//     var options = { weekday: 'short' };
//     var currentDay = now.toLocaleString('en-US', options);
//     alert("Today is " + currentDay);
// }

// alertCurrentDay();


// ====================== 04 ==========================
// function displayDayMessage() {
//     var now = new Date();
//     var day = now.getDay(); // 0 is Sunday, 6 is Saturday
//     let message;

//     if (day === 0 || day === 6) {
//         message = "It’s Fun day";
//     } else {
//         message = "It's a working day";
//     }

//     document.body.textContent = message;
// }

// displayDayMessage();


// ====================== 05 ==========================
// function displayDateMessage() {
//     var now = new Date();
//     var date = now.getDate();
//     let message;

//     if (date < 16) {
//         message = "First fifteen days of the month";
//     } else {
//         message = "Last days of the month";
//     }

//     document.body.textContent = message;
// }

// displayDateMessage();


// ====================== 06 ==========================
// var currentDate = new Date();
// var millisecondsSince1970 = currentDate.getTime();
// var minutesSince1970 = Math.floor(millisecondsSince1970 / 60000);

// document.getElementById('current-date').innerHTML = "<strong>Current date:</strong> " + currentDate;
// document.getElementById('minutes-since-1970').textContent = "Minutes since midnight, Jan. 1, 1970: " + minutesSince1970;
// document.getElementById('milliseconds-since-1970').textContent = "Milliseconds since midnight, Jan. 1, 1970: " + millisecondsSince1970;


// ====================== 07 ==========================
// function checkTime() {
//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var period;

//     if (hours < 12) {
//         period = "AM";
//     } else {
//         period = "PM";
//     }

//     alert("It's " + period);
// }

// checkTime();


// ====================== 08 ==========================
// var laterDate = new Date(2020, 11, 31); 

// document.write("Later Date: ", laterDate);


// ====================== 09 ==========================
// var ramadanStartDate = new Date(2015, 5, 18); 

// var currentDate = new Date();

// var differenceInMs = currentDate - ramadanStartDate;

// var daysSinceRamadan = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

// alert(daysSinceRamadan + " days have passed since 1st Ramadan, 2015");


// ====================== 10 ==========================
// var referenceDate = new Date(2020, 0, 1); 

// var beginningOf2015 = new Date(2015, 0, 1); 

// var differenceInSeconds = (referenceDate.getTime() - beginningOf2015.getTime()) / 1000;

// document.write("Seconds elapsed since the beginning of 2015: " + differenceInSeconds);


// ====================== 11 ==========================
// var currentDate = new Date();

// var currentHours = currentDate.getHours();

// var oneHourAgo = new Date(currentDate);
// oneHourAgo.setHours(currentHours - 1);

// document.getElementById('current-time').textContent = "Current date: " + currentDate;

// document.getElementById('one-hour-ago').textContent = "1 hour ago, it was " + oneHourAgo;


// ====================== 12 ==========================
// var currentDate = new Date();

// var hundredYearsAgo = new Date(currentDate);
// hundredYearsAgo.setFullYear(currentDate.getFullYear() - 100);

// var message = "Current Date: " + currentDate + "\n";
// message += "Date 100 years back: " + hundredYearsAgo;

// alert(message);


// ====================== 13 ==========================
// var age = prompt("Please enter your age:");

// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;


// document.write("Your age is: " + age + "<br>" +"Your birth year is: " + birthYear );


// ====================== 14 ==========================
var customerName = "ABC";
var currentMonth = "July";
var numberOfUnits = 350;
var chargesPerUnit = 17.5; 
var latePaymentSurchargeRate = 0.1; 

var netAmountPayable = numberOfUnits * chargesPerUnit;
var latePaymentSurcharge = netAmountPayable * latePaymentSurchargeRate;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

netAmountPayable = netAmountPayable.toFixed(2);
latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);

var billDetails = "<strong>Customer Name:</strong> " + customerName + "<br>";
billDetails += "<strong>Current Month:</strong> " + currentMonth + "<br>";
billDetails += "<strong>Number of Units:</strong> " + numberOfUnits + "<br>";
billDetails += "<strong>Charges per Unit:</strong> Rs. " + chargesPerUnit.toFixed(2) + "<br>";
billDetails += "<strong>Net Amount Payable (within Due Date):</strong> Rs. " + netAmountPayable + "<br>";
billDetails += "<strong>Late Payment Surcharge:</strong> Rs. " + latePaymentSurcharge + "<br>";
billDetails += "<strong>Gross Amount Payable (after Due Date):</strong> Rs. " + grossAmountPayable;

document.getElementById('billDetails').innerHTML = billDetails;