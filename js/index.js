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
        // Array.prototype.forEach.call(elementList, function(e) {
        //   e.classList.remove("active");
        // });
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
  const tabContainer = document.querySelector(tabClass);
  const tabs = document.querySelectorAll(".project-tabs__tab");
  const tabContent = document.querySelectorAll(".project-tabs__content");
  tabContainer.addEventListener("click", function(e) {
    const clicked = e.target.closest(".project-tabs__tab");
    if (!clicked) return;
    tabs.forEach(item => {
      item.classList.remove("project-tabs__tab--active");
    });

    tabContent.forEach(item => {
      item.classList.remove("project-tabs__content--active");
    });
    clicked.classList.add("project-tabs__tab--active");
    document
      .querySelector(`.project-tabs__content--${clicked.dataset.tab}`)
      .classList.add("project-tabs__content--active");
  });
}

Tabs(".project-tabs__container");
initAcc(".accordion", true);
