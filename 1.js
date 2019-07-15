const inp = document.getElementsByTagName("input")[0];

let text = null;
inp.addEventListener("input", function ({
    target
}) {
    return text = target.value;
});


document.getElementById("bt").addEventListener("click", function () {
    const ul = document.getElementsByTagName('ul')[0];
    const remove = document.createElement('button');
    const change = document.createElement('button');
    const nLi = document.createElement('li');
    remove.innerText = 'Изменить';
    change.innerText = 'Удалить';
    ul.appendChild(nLi);
    nLi.innerText = text;
    nLi.appendChild(remove);
    nLi.appendChild(change);
    document.getElementById("txt").value = "";
    
    remove.addEventListener('click', function (e) {

        console.log('изменить');
        console.log(e.target.value);
        nLi.innerText = text;
        nLi.appendChild(remove);
        nLi.appendChild(change);

    });
    change.addEventListener('click', function () {
        console.log('удалить');
        ul.removeChild(nLi);
    });
});


//const inp= document.getElementById("txt").value;
//document.getElementById("bt").addEventListener("click", function(){
//  const ul = document.getElementsByTagName('ul')[0];
//  
//  const remove = document.createElement('button');
//  const change = document.createElement('button');
//  const nLi = document.createElement('li');
//  remove.innerText='Изменить';
//  change.innerText='Удалить';
//  ul.appendChild(nLi);
//  nLi.innerHTML = inp;
//  ul.appendChild(remove);
//  ul.appendChild(change);
//    remove.addEventListener('click',function(e){
//    console.log('изменить');
//    console.log(e.target.value);
//    
//  });
//  change.addEventListener('click', function(){
//    console.log('удалить');
//      const ul = document.getElementsByTagName('ul')[0];
//    ul.removeChild(li);
//      });
//   });
