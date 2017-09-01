var today = new Date();
var time = today.getHours();
var greeting = '';

if (time > 24 && time < 12) {
    greeting = 'Good Morning';
} 
else if (time >= 12 && time < 18) {
    greeting = 'Good AfterNoon';    
}
else if (time >=18 && time < 24) {
    greeting = "Good Evening";
}

document.write('<h3>' + greeting + '</h3>');