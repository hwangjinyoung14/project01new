let contentDiv = document.querySelectorAll('.content > div');
contentDiv.forEach(function(div){
  div.style.display = 'none';
})
document.getElementById('tabmenu1').style.display = 'block';

let titleLink = document.querySelectorAll('.title a');
titleLink.forEach(function(link){
  link.addEventListener('click', function(e){
    let tab = this.getAttribute('href')
    contentDiv.forEach(function(div){
      div.style.display='none';
    });
    document.querySelector(tab).style.display='block';
    titleLink.forEach(function(link){
      link.classList.remove('on')
    });
      this.classList.add('on');
  })
})