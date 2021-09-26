var Amount = document.querySelector("#Amount");
var Cash = document.querySelector("#Cash");
var checkButton = document.querySelector("#Button");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".Notes");

var noteDatabase = [2000, 500, 100, 20, 10, 5, 1];

function Checker(){
      if (Cash.value >= Amount.value) {
        hideMessage();
        var amountleft = Cash.value - Amount.value;
        returnamount(amountleft);
      }
        else {
        showMessage("Plese Check Your Bill Again !!");
      }

}
checkButton.addEventListener("click", Checker);

function returnamount(amountleft) {

  for (let i = 0; i <noteDatabase.length; i++) {
    var numberOfNotes = Math.trunc(amountleft / noteDatabase[i]);
    amountleft = amountleft % noteDatabase[i];
    noOfNotes[i].innerText = numberOfNotes;
}
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
