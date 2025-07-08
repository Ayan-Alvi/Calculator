var display = document.getElementById("display");

document.getElementById("zero").addEventListener("click", function() {
  display.value += "0";
});
document.getElementById("one").addEventListener("click", function() {
  display.value += "1";
});
document.getElementById("two").addEventListener("click", function() {
  display.value += "2";
});
document.getElementById("three").addEventListener("click", function() {
  display.value += "3";
});
document.getElementById("four").addEventListener("click", function() {
  display.value += "4";
});
document.getElementById("five").addEventListener("click", function() {
  display.value += "5";
});
document.getElementById("six").addEventListener("click", function() {
  display.value += "6";
});
document.getElementById("seven").addEventListener("click", function() {
  display.value += "7";
});
document.getElementById("eight").addEventListener("click", function() {
  display.value += "8";
});
document.getElementById("nine").addEventListener("click", function() {
  display.value += "9";
});

document.getElementById("add").addEventListener("click", function() {
  display.value += "+";
});
document.getElementById("subtract").addEventListener("click", function() {
  display.value += "-";
});
document.getElementById("multiply").addEventListener("click", function() {
  display.value += "*";
});
document.getElementById("divide").addEventListener("click", function() {
  display.value += "/";
});
document.getElementById("dot").addEventListener("click", function() {
  display.value += ".";
});

document.getElementById("clear").addEventListener("click", function() {
  display.value = "";
});

document.getElementById("backspace").addEventListener("click", function() {
  display.value = display.value.slice(0, -1);
});

document.getElementById("equal").addEventListener("click", function() {
  
  display.value = eval(display.value);
  
});
