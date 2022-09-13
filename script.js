let Number = 0;
function Up() {
  return (document.getElementById("Numbers").innerHTML = ++Number);
}

function Down() {
  return (document.getElementById("Numbers").innerHTML = --Number);
}

function Reset() {
  return (document.getElementById("Numbers").innerHTML = Number = 0);
}
