function initAcc(elem, option) {
  document.addEventListener("click", function(e) {
    if (!e.target.matches(elem + " .accordion__button")) {
      return;
    } else {
      const prevSibling = e.target.parentElement.previousElementSibling;
      if (!e.target.parentElement.classList.contains("active")) {
        if (option === true) {
          var elementList = document.querySelectorAll(
            elem + " .accordion__container"
          );
          Array.prototype.forEach.call(elementList, function(e) {
            e.classList.remove("active");
          });
        }
        e.target.parentElement.classList.add("active");

        if (prevSibling) {
          prevSibling.classList.remove("border");
        }
      } else {
        e.target.parentElement.classList.remove("active");
        if (prevSibling) {
          prevSibling.classList.add("border");
        }
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
