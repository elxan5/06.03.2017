var count=new Date("Su Mar 19 2017 00:00:00 GMT+0800 (Pacific Standard Time)").getTime();
var x=setInterval(function(){
	var now= new Date().getTime();
var distance =count-now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    document.getElementById("holiday").innerHTML = days + "day "+ " " + hours + " hours "
    + minutes + "min " + seconds + "sec ";
    
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementByTagName("holiday").innerHTML = "WELCOME";
    }
}, 1000);
