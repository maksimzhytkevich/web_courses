function getRequest() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://localhost:3000/posts');
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

function deleteRequest(obj) {
  
  var xhr = new XMLHttpRequest();
  
  var id = obj.id;
  id = id.substring(2);
  
  xhr.open('DELETE', 'http://localhost:3000/posts/' + id);
  xhr.send();

  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      getRequest();
    }
  }

  xhr.onerror = function () {
    alert('Ошибка ' + xhr.status);
  }
}

function createTable(xhr) {
  var array = JSON.parse(xhr.responseText);
  var myHTMLStr = '<table>';
  myHTMLStr += '<th>User ID</th><th>ID</th><th>Title</th><th>Body</th><th colspan="2">Edit/Delete</th>';
  if (Array.isArray(array)) {
    for (var i in array) {
      myHTMLStr += '<tr><td>' + array[i]['userId'] + '</td><td>' +
        array[i]['id'] + '</td><td>' +
        array[i]['title'] + '</td><td>' +
        array[i]['body'] + '</td><td class="bt">' +
        '<button id="bt' + array[i]['id'] + '" onclick="deleteRequest(this)">Delete</button></td><td class="bt">' +
        '<button id="ed' + array[i]['id'] + '" onclick="put(this)">Edit</button></td></tr>';
    }
  } else {
    myHTMLStr += '<tr><td>' + array.userId + '</td><td>' +
      array.id + '</td><td>' +
      array.title + '</td><td>' +
      array.body + '</td><td class="bt">' +
      '<button id="bt' + array.id + '" onclick="deleteRequest(this)">Delete</button></td><td class="bt">' +
      '<button id="ed' + array.id + '" onclick="put(this)">Edit</button></td></tr>';
  }
  myHTMLStr += '</table>';
  document.getElementById('table').innerHTML = myHTMLStr;
}

function post() {
  document.location.href = 'form.html?mode=post';
}

function put (obj) {
  var id = obj.id;
  id = id.substring(2);
  document.location.href = 'form.html?mode=put' + '&id=' + id;
}