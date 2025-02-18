let header = document.querySelector('#header');
let footer = document.querySelector('#footer');

function injectHTML(url, element){
   let xhr = new XMLHttpRequest();

   
   xhr.responseType = 'document';
   xhr.open('get', url);
   xhr.onload = function(){
    let content = xhr.response.body.innerHTML;

    element.innerHTML = content;
   }

   xhr.send();
   
}

document.addEventListener('DOMContentLoaded', ()=> {
   
});

injectHTML('../templates/header.html', header);
injectHTML('../templates/footer.html', footer);