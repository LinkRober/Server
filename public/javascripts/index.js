import {proxy,unProxy} from "../../node_modules/ajax-hook/index"

(function(window, doc){
  var btn = document.getElementById('btn');
  var result = document.getElementById('result');
  btn.onclick = () => {
    // result.innerHTML = 'Jump';
    sendRequest();
  }

  function sendRequest() {
    var request = new XMLHttpRequest();
    request.responseType = 'json';
    request.open('POST','http://172.16.12.97:3000/users');
    var send_data = {'key':'value'};
    request.send(JSON.stringify(send_data));
    request.onload = function() {
      var name = request.response.name;
      result.innerHTML = name;
    }
  }

})(window, document);