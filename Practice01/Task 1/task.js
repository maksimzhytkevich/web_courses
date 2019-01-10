function goleverx() {
    window.open('https://leverx.ru/', '_self');
}


for (var i = 0; i < 11; i++) {
    var el = document.createElement("div");
    el.classList.add("card");
    el.innerHTML = '<div class="card-head"><img src="res/img.jpg"><div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<div class="small-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, odio. Repudiandae dolores fuga praesentium quos, eligendi excepturi nobis rem ratione odit blanditiis unde, doloremque commodi illum atque ipsa accusantium adipisci.</div></div></div><button class="card-button">Try</button>';
    var cont = document.getElementById("main");
    cont.appendChild(el);
}