const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
function myFunction() {
    alert("Your information has been submitted")
  }

  function five() {
    alert("Coupon has been applied")
  }
  function submission() {
    alert("Your info has been sumbitted");
  }
  function login() {
    alert("Your info has been sumbitted");
  }

  function sub() {
    alert("You have subscribed");
  }