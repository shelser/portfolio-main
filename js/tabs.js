const tabButtons = document.querySelectorAll(".design-list__item");
const tabDescription = document.querySelectorAll(".design__descr");
const tabImages = document.querySelectorAll(".design-images");
const titleImages = document.querySelectorAll(".feature__img");
const tabTitles = document.querySelectorAll(".design__title");

const changeContent = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove("hidden");
    } else {
      elem.classList.add("hidden");
    }
  });
};

tabButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.classList.contains("design-list__item_active")) {
      return;
    }

    const dataValue = button.dataset.tabsHandler;

    changeContent(tabDescription, dataValue);
    changeContent(titleImages, dataValue);
    changeContent(tabImages, dataValue);

    tabButtons.forEach((btn) => {
      if (btn === e.target) {
        btn.classList.add("design-list__item_active");
      } else {
        btn.classList.remove("design-list__item_active");
      }
    });

    tabTitles.forEach((title) => {
      if (title.classList.contains("hidden")) {
        title.classList.remove("hidden");
        document.title = title.textContent;
      } else {
        title.classList.add("hidden");
      }
    });
  });
});
