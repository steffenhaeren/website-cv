(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
      console.log("el.offsetH : " + el.offsetHeight);
      console.log("el.offsetE : " + el.offsetWidth);
      console.log("el.ddeH : " + document.documentElement.clientHeight);
      console.log("el.ddeW : " + document.documentElement.clientWidth);
      console.log("el.offsetH : " + window.innerHeight);
      console.log("el.offsetE : " + window.innerWidth);
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (el.offsetHeight || document.documentElement.clientHeight) &&
      rect.right <= (el.offsetWidth || document.documentElement.clientWidth));
      /*rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)*/
    
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();


/* SUPPORT FUNCTIONS */
function get(id){
  return document.querySelector(id);
}
function getAll(id){
  return document.querySelectorAll(id);
}

/* 
let box = document.querySelector('.box');
let width = box.offsetWidth;
let height = box.offsetHeight;
*/
