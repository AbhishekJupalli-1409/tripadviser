// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });


window.addEventListener("scroll", function navBorder() {
  const element1 = document.getElementById("nav-border-trigger");

  // Get the bottom position of element1
    const element1Bottom = element1.getBoundingClientRect().bottom;
    console.log(element1Bottom)

  // If the bottom of element1 is less than 0, make element2 fixed
//   if (element1Bottom < 0) {
    element1.classList.add("add-border");
    if (element1Bottom == 70) {
           window.removeEventListener('scroll',navBorder);
    }
 



//   } else {
//     element2.classList.remove("fixed");
//   }
});




window.addEventListener("scroll", function () {
  const elements1 = document.getElementById("trigger-card");
  const elements2 = document.getElementById("response-card");

  // Get the bottom position of element1
    const elements1Top = elements1.getBoundingClientRect().top;
    console.log(elements1Top)

  // If the bottom of element1 is less than 0, make element2 fixed
  if (elements1Top < 0) {
    elements2.classList.add("display-links");
  } else {
    elements2.classList.remove("display-links");
  }
});
  
