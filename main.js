"use strict";
var b = document.querySelector("#btn");

var myClick = function(btn) {
  console.log(btn);
};

var data = [
  { name: "Home", link: "/" },
  { name: "About as", link: "page/about-as" },
  { name: "Contacts", link: "page/contacts" },
  { name: "Gallerey", link: "page/gallerey" },
  {
    name: "Catalog",
    link: "page/catalog",
    child: [
      { name: "Category-1", link: "category/1" },
      { name: "Category-2", link: "category/2" },
      { name: "Category-3", link: "category/3" }
    ]
  },
  { name: "Support", link: "page/support" }
];

function hover(x) {
  console.log(x);
}

var ul = document.querySelector("#menu");
var html = "";

data.forEach(function(item) {
  var childHtml = "";

  if (item.child) {
    childHtml += "<ul>";

    item.child.forEach(function(item) {
      childHtml += `<li><a href=${item.link}>${item.name}</a></li>`;
    });
    childHtml += "</ul>";
  }

  var event = item.child ? 'class="drop"' : "";

  html += `<li ${event}><a href=${item.link}>${item.name}</a>${childHtml}</li>`;
});

ul.innerHTML = html;

//console.log(html);

/*function renderMenu(item) {
  console.log(item);
}

var  myForeach = function(calback){
    for (var value of data) {
        calback(value);
    }
}


myForeach(renderMenu);*/

/*var btn = document.querySelector('#myBtn');


var show = function() {
    
    if(this.className === 'clicked') {
        this.className = 'unclicked';

    }
    else {
        this.className = 'clicked';
    }
    console.log(this);
}

btn.onclick = show;

console.dir(btn)*/

/*var btn = document.querySelector('#myBtn');
var cont = document.querySelector('#container');
var counter = 0;

btn.onclick = function() {
    counter ++;
    cont.innerHTML += `<p>${counter} Hello User</p>`
}*/
