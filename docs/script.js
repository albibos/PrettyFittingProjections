const dropdown = document.getElementById('dropdown');
const dropdownbtns = document.getElementsByClassName('dropdown-items');
const sideBtns = document.getElementsByClassName('side-btn');
const angle = document.getElementById('angle-right')

dropdown.onclick = function() {
  for (let i = 0; i < dropdownbtns.length; i++) {
    if (dropdownbtns[i].classList.contains('hidden')) {
      dropdownbtns[i].classList.remove('hidden');
      angle.style.transform='rotate(90deg)';
    } else {
      dropdownbtns[i].classList.add('hidden');
      angle.style.transform='rotate(0deg)';
    }
  }
}

const sidebtnActive = (event) => {
  if (!event.target.classList.contains('active')) {
    for (let btn of sideBtns) {
      btn.classList.remove('active');
      
    }
    event.target.classList.add('active');
    location.href = "#" + event.target.dataset.page;
  }
};

for (let btn of sideBtns) {
  btn.addEventListener('click', sidebtnActive);
}