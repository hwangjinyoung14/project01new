let $List = document.getElementById('list');
let listItems = $List.getElementsByTagName('li');
console.log($List, listItems); 

for(let i=0; i<listItems.length; i++){
  listItems[i].addEventListener('mouseenter', function(){
    let subMenu = this.querySelector('.sub_menu');
    let subMenu2 = this.querySelector('.line');
    if(subMenu){subMenu.style.display='block';}
    if(subMenu2){subMenu2.style.display='block';}
  });
  
  listItems[i].addEventListener('mouseleave', function(){
    let subMenu = this.querySelector('.sub_menu');
    let subMenu2 = this.querySelector('.line');
    if(subMenu){subMenu.style.display='none';}
    if(subMenu2){subMenu2.style.display='none';}
  });
}