onload = function () {

  // --------------------Кнопки языков-------------

  let languages__wrap = document.querySelector(".languages__wrap");
  languages__wrap.addEventListener("click", function (event) {
    if (event.target.className === 'languages__button') {
      let languages__button = document.querySelectorAll('.languages__button');
      for (let i = 0; i < languages__button.length; i++) {
        languages__button[i].classList.remove('languages__button--active');
      }
      event.target.classList.add('languages__button--active');
    }
  });

  // --------------------Табы----------------------

  let tabButton__wrap = document.querySelector(".tab_button__wrap");
  tabButton__wrap.addEventListener("click", function (event) {
    if (event.target.className === 'tab_button') {
      let tabButton = document.querySelectorAll('.tab_button');
      for (let i = 0; i < tabButton.length; i++) {
        tabButton[i].classList.remove('tab_button--active');
      }
      event.target.classList.add('tab_button--active');

      let tabBody = document.querySelectorAll('.tab_body');
      let dataTab = event.target.getAttribute('data-tab');
      for (let i = 0; i < tabBody.length; i++) {
        if (dataTab == i) {
          tabBody[i].classList.add('tab_body--active');
        } else {
          tabBody[i].classList.remove('tab_body--active');
        }
        if (dataTab == 1) {
          document.querySelector(".languages__wrap").classList.add("margin_top");
        }
        if (dataTab == 0) {
          document.querySelector(".languages__wrap").classList.remove("margin_top");
        }
      }
    }
  });



};
