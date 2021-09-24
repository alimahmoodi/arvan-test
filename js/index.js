function initAcc(elem, option) {
  document.addEventListener("click", function(e) {
    const clicked = e.target.closest(".accordion__button");
    if (!clicked) return;
    const prevSibling = clicked.parentElement.previousElementSibling;
    if (!clicked.parentElement.classList.contains("active")) {
      if (option === true) {
        var elementList = document.querySelectorAll(
          elem + " .accordion__container"
        );
        elementList.forEach(item => {
          item.classList.remove("active");
        });
      }
      clicked.parentElement.classList.add("active");

      if (prevSibling) {
        prevSibling.classList.remove("border");
      }
    } else {
      clicked.parentElement.classList.remove("active");
      if (prevSibling) {
        prevSibling.classList.add("border");
      }
    }
  });
}

function Tabs(tabClass) {
  const tabContainer = document.querySelector(`#${tabClass}`);

  const tabs = tabContainer.querySelectorAll(`.${tabClass}__tab`);

  const tabContent = tabContainer.querySelectorAll(`.${tabClass}__content`);

  tabContainer.addEventListener("click", function(e) {
    const clicked = e.target.closest(`.${tabClass}__tab`);

    if (!clicked) return;
    tabs.forEach(item => {
      item.classList.remove(`${tabClass}__tab--active`);
    });

    tabContent.forEach(item => {
      item.classList.remove(`${tabClass}__content--active`);
    });
    clicked.classList.add(`${tabClass}__tab--active`);
    console.log(clicked);
    tabContainer
      .querySelector(`.${tabClass}__content--${clicked.dataset.tab}`)
      .classList.add(`${tabClass}__content--active`);
  });
}

Tabs("project-tabs");
Tabs("tabs-line");
initAcc(".accordion", true);
