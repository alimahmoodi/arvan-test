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

initAcc(".accordion.v1", true);
