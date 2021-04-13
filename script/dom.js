//change text in homepage
var family_gathering = document.querySelector("#section-four-first-link");
var special_events = document.querySelector("#section-four-second-link");
var social_events = document.querySelector("#section-four-third-link");
var enjoyable_place = document.querySelector("#enjoyable-place");
var locally_sourced = document.querySelector("#locally-sourced-img");
var salmon = document.querySelector("#salmon-fil-img");
var rosemary = document.querySelector("#rosemary-fil-img");
var summer = document.querySelector("#summer-fruit-img");
var section_four_img = document.querySelector("#section-four-image");
var section_four_link1 = document.querySelector("#section-four-first-link");
var section_four_link2 = document.querySelector("#section-four-second-link");
var section_four_link3 = document.querySelector("#section-four-third-link");

family_gathering.addEventListener("click", ()=>{
  let section_four_image = document.querySelector("#section-four-image");
  let section_four_text = document.querySelector("#section-four-text");
  let section_four_heading = document.querySelector("#section-four-heading");
  //media querrier will be considered later
  section_four_text.textContent = "We love catering for entire families. So please bring everyone along for a special meal with your"+
  "loved ones. We’ll provide a memorable experience for all.";
  section_four_image.setAttribute("src", "images/homepage/family-gathering-desktop.jpg");
  section_four_heading.textContent = "Family Gathering";
});

special_events.addEventListener("click", ()=>{
  let section_four_image = document.querySelector("#section-four-image");
  let section_four_text = document.querySelector("#section-four-text");
  let section_four_heading = document.querySelector("#section-four-heading");
  //media querrier will be considered later
  section_four_text.textContent = "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you."
        +"We’ll be sure to mark your special date with an unforgettable meal.";
  section_four_image.setAttribute("src", "images/homepage/special-events-desktop.jpg");
  section_four_heading.textContent = "Special Events";
});

social_events.addEventListener("click", ()=>{
  let section_four_image = document.querySelector("#section-four-image");
  let section_four_text = document.querySelector("#section-four-text");
  let section_four_heading = document.querySelector("#section-four-heading");
  //media querrier will be considered later
  section_four_text.textContent = "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big"+
  "parties. We’ll work with you to make your event a hit with everyone..";
  section_four_image.setAttribute("src", "images/homepage/social-events-desktop.jpg");
  section_four_heading.textContent = "Social Events";
});

// media querries
let heading = document.querySelector("#heading");

  function isTablet(tablet_size) {
    if (tablet_size.matches) { // If media query matches
      heading.style.backgroundImage = "url('images/homepage/hero-bg-tablet.jpg')";
      enjoyable_place.setAttribute("src", "images/homepage/enjoyable-place-tablet.jpg");
      locally_sourced.setAttribute("src", "images/homepage/locally-sourced-tablet.jpg");
      salmon.setAttribute("src", "images/homepage/salmon-desktop-tablet@2x.jpg");
      rosemary.setAttribute("src", "images/homepage/beef-desktop-tablet@2x.jpg");
      summer.setAttribute("src", "images/homepage/chocolate-desktop-tablet@2x.jpg");
      section_four_img.setAttribute("src", "images/homepage/family-gathering-tablet.jpg");
    }
  }
  function isMobile(phone_size){
      if(phone_size.matches){
      heading.style.backgroundImage = "url('images/homepage/hero-bg-mobile.jpg')";
      enjoyable_place.setAttribute("src", "images/homepage/enjoyable-place-mobile.jpg");
      locally_sourced.setAttribute("src", "images/homepage/locally-sourced-mobile.jpg");
      salmon.setAttribute("src", "images/homepage/salmon-mobile.jpg");
      rosemary.setAttribute("src", "images/homepage/beef-mobile.jpg");
      summer.setAttribute("src", "images/homepage/chocolate-mobile.jpg");
      section_four_img.setAttribute("src", "images/homepage/family-gathering-mobile.jpg");
    }
  }
  function isLabtop(laptop_size){
    if (laptop_size.matches) {
      heading.style.backgroundImage = "url('images/homepage/hero-bg-desktop.jpg')";
      enjoyable_place.setAttribute("src", "images/homepage/enjoyable-place-desktop.jpg");
      locally_sourced.setAttribute("src", "images/homepage/locally-sourced-desktop.jpg");
      salmon.setAttribute("src", "images/homepage/salmon-desktop-tablet@2x.jpg");
      rosemary.setAttribute("src", "images/homepage/beef-desktop-tablet@2x.jpg");
      summer.setAttribute("src", "images/homepage/chocolate-desktop-tablet@2x.jpg");
      section_four_img.setAttribute("src", "images/homepage/family-gathering-desktop.jpg");
    }
  }



var tablet_size = window.matchMedia("(max-width: 992px) and (min-width:768px)");
isTablet(tablet_size); // Call listener function at run time
tablet_size.addListener(isTablet);// Attach listener function on state changes

var phone_size = window.matchMedia("(max-width: 768px)");
isMobile(phone_size);
phone_size.addListener(isMobile);

var laptop_size = window.matchMedia("(min-width: 1000px)");
isLabtop(laptop_size);
laptop_size.addListener(isLabtop);
