var button = document.querySelector("#ok-button");
button.addEventListener("click", ()=>{
  window.location.href = "index.html";
});

var heading = document.querySelector("#body");
function isTablet(tablet_size) {
  if (tablet_size.matches) { // If media query matches
    heading.style.backgroundImage = "url('images/booking/hero-bg-tablet.jpg')";
    // .src = "hero-bg-tablet.jpg";
  }
}
function isMobile(phone_size){
  if (phone_size.matches) { // If media query matches
    heading.style.backgroundImage = "url('images/booking/hero-bg-mobile.jpg')";
    // .src = "hero-bg-mobile.jpg";
  }
}
function isLabtop(laptop_size){
  if (laptop_size.matches) { // If media query matches
    heading.style.backgroundImage = "url('images/booking/hero-bg-desktop.jpg')";
  }
}

var tablet_size = window.matchMedia("(max-width: 992px) and (min-width:768px)");
isTablet(tablet_size); // Call listener function at run time
tablet_size.addListener(isTablet);// Attach listener function on state changes

var phone_size = window.matchMedia("(max-width: 768px)");
isMobile(phone_size);
phone_size.addListener(isMobile);

var laptop_size = window.matchMedia("(min-width: 1200px)");
isLabtop(laptop_size);
laptop_size.addListener(isLabtop);
