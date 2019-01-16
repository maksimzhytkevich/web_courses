function getRequest() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://my-json-server.typicode.com/maksimzhytkevich/web_courses/posts');
  xhr.send();

  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      createTable(xhr);
    }
  }

  xhr.onerror = function () {
    alert('Ошибка ' + this.status);
  }
}

function postRequest() {

  var xhr = new XMLHttpRequest();

  var json = JSON.stringify(createPost());

  xhr.open('POST', 'https://my-json-server.typicode.com/maksimzhytkevich/web_courses/posts');
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(json);

  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == "201") {
      getRequest();
      alert(xhr.responseText);
    }
  }

  xhr.onerror = function () {
    alert('Ошибка ' + xhr.status);
  }  
}

function createTable(xhr) {
  var array = JSON.parse(xhr.responseText);
  var myHTMLStr = '<table>';
  myHTMLStr += '<th>User ID</th><th>ID</th><th>Title</th><th>Body</th>';
  for (var i in array) {
    myHTMLStr += '<tr><td>' + array[i]['userId'] + '</td><td>' +
      array[i]['id'] + '</td><td>' +
      array[i]['title'] + '</td><td>' +
      array[i]['body'] + '</td></tr>';
  }
  myHTMLStr += '</table>';
  document.getElementById('table').innerHTML = myHTMLStr;
}

function createPost (){
  var post = {};
  post.userId = document.getElementById('userId').value;
  post.title = document.getElementById('title').value;
  post.body = document.getElementById('body').value;
  return post;
}