window.onload = function uphigh() {	
	document.getElementById("num1").innerHTML = parseInt(Math.floor((Math.random() * 3) + 1));
	document.getElementById("num2").innerHTML = parseInt(Math.floor((Math.random() * 3) + 1));
	
}
function uphigh() {	
	document.getElementById("num1").innerHTML = parseInt(Math.floor((Math.random() * 3) + 1));
	document.getElementById("num2").innerHTML = parseInt(Math.floor((Math.random() * 3) + 1));
	
}
function math1() {
	var num1=document.getElementById("num1").innerHTML;
	var num2=document.getElementById("num2").innerHTML;
	num1=parseInt(num1);
	num2=parseInt(num2);
	var num0 = num1 + num2;
	var answer=document.getElementById("answer").value;
	answer=parseFloat(answer);
	
	if (num0==answer){
		var things = ['Way to Go!!!', 'Congratulations!!!', 'Correct!!!','Your Doing Great!!!'];
		var thing = things[Math.floor(Math.random()*things.length)];
		alert(thing);
		uphigh();
		document.getElementById("answer").value="";
		}
	else{
		alert ("Incorrect answer!! \nPlease Try Again");
		document.getElementById("answer").value="";
	}
	
}