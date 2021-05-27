var sidebarBox = document.querySelector('#box');
var sidebarBtn = document.querySelector('#btn');

sidebarBtn.addEventListener('click', function(event) {

  if (this.classList.contains('active')) {
      this.classList.remove('active');
      sidebarBox.classList.remove('active');
  } else {
      this.classList.add('active');
      sidebarBox.classList.add('active');
  }
});

