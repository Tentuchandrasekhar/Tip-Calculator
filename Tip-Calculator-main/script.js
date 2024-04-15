function calculateTip() {
    var bill = document.getElementById("bill").value;
    var service = document.getElementById("service").value;
    var share = document.getElementById("share").value;
    if (bill == "") {
      alert("please enter bill amount");
    } else if (bill <= 10) {
      alert("please enter bill amount correctly");
    } else if (service == "") {
      alert("please select our service");
    } else if (share == "") {
      alert("please enter valide share");
    } else if (share == 0) {
      alert("Bill must be shared atleast 1");
    } else {
      var percent = (bill * service) / 100;
      percent = percent / share;
      document.getElementById("tip").innerHTML = "Rs " + percent;
    }
  }
  