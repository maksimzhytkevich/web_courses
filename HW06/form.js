var url_str = document.location.href;
var url = new URL(url_str);
var mode = url.searchParams.get('mode');

var bt = document.getElementById('do');

if (mode == 'post'){
    bt.setAttribute('onclick', 'postRequest()');
} else if (mode == 'put'){
    var id = url.searchParams.get('id');
    bt.id = id;
    bt.setAttribute('onclick', 'putRequest(this)');
}

function postRequest() {

    var xhr = new XMLHttpRequest();
  
    var json = JSON.stringify(createPost());
  
    xhr.open('POST', 'http://localhost:3000/posts');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
  
    xhr.onload = function () {
      if (xhr.readyState == 4 && xhr.status == "201") {
        window.history.back();
      }
    }
  
    xhr.onerror = function () {
      alert('Ошибка ' + xhr.status);
    }
  }

  function putRequest(obj) {

    var xhr = new XMLHttpRequest();
  
    var json = JSON.stringify(createPost());
  
    var id = obj.id;    
    
    xhr.open('PUT', 'http://localhost:3000/posts/' + id);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
  
    xhr.onload = function () {
      if (xhr.readyState == 4 && xhr.status == "200") {
        window.history.back();
      }
    }
  
    xhr.onerror = function () {
      alert('Ошибка ' + xhr.status);
    }
  }

  function createPost() {
    var post = {};
    post.userId = document.getElementById('userId').value;
    post.title = document.getElementById('title').value;
    post.body = document.getElementById('body').value;
    return post;
  }  