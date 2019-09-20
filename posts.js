var url = 'http://blog.api.axenov-it.com/posts';



    function format(reponce) {
        return reponce.json();
    }

    function render (data) {
        var container = document.querySelector('#list-posts');
        
       
        data.forEach(function (post) {
            var template = document.createElement('div');
            template.className = 'post';

            var h2 = document.createElement('h2');
            h2.innerHTML = post.title;

            var likes = document.createElement('i');
            likes.innerHTML = post.likes;
            
            var p = document.createElement('p');
            p.innerHTML = post.description;

            template.append(h2, p, likes)

            container.appendChild(template);
            
        })
    
    }

    function show () {
        alert(this.innerHTML)
    }


    fetch(url)
            .then(format)
           
            .then(render)


    /*function render (str) {
        var block = document.querySelector('#list-posts');
        block.innerHTML = str;
        }*/



        



 //var t = document.querySelector('#test');
//var res = 'click me';
//var container = document.querySelector('#test');

//var btn = document.createElement('button');
//btn.onclick = show;
//btn.innerHTML = 'click me';
/*t.onclick = function (){
    alert ('hi');
}

t.innerHTML = `<button onclick="show()">${res}</button>`;
var btn = document.querySelector('#test button');*/

//function show() {
 //   this.innerHTML = 'clicked';
//}

//container.appendChild(btn);