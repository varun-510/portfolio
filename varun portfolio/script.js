function openPopup(id){
  const popup = document.getElementById(id);
  popup.style.display = 'flex';

  setTimeout(()=>{
    popup.classList.add('show');
  },10);
}

function closePopup(id){
  const popup = document.getElementById(id);
  popup.classList.remove('show');

  setTimeout(()=>{
    popup.style.display = 'none';
  },200);
}

window.onclick = function(event){
  document.querySelectorAll('.popup').forEach(function(popup){
    if(event.target == popup){
      popup.classList.remove('show');
      setTimeout(()=>{
        popup.style.display = 'none';
      },200);
    }
  });
}