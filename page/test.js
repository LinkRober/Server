// const { use } = require("../routes");

// 'use strict';
// var request = new XMLHttpRequest();
  // function(window,undefined){

  // })
// window.onload = funtion() {
//   function changeValue(value) {
//     console.log(value);
//     var p = document.getElementById('content');
//     p.innerHTML = value;
//   }
//   changeValue("我是结果");
// }

// (window.onload() = function(){
//     function changeValue(value) {
//     console.log(value);
//     var p = document.getElementById('content');
//     p.innerHTML = value;
//   }
//   changeValue("我是结果");
// })
(function(window, doc){
  function changeValue(value) {
    console.log(value);
    var p = document.getElementById('content');
    p.innerHTML = value;
  }
  changeValue("我是结果");
})(window, document);