let views = ["10K", "50K", "100K", "500K", "1M"];
let prices = [8, 12, 16, 24, 36];
let outputViews = document.querySelector(".pricer__pageviews__num");
let sliderVal = document.querySelector(".slider");
let switcher = document.querySelector(".switcher");
let timing = document.querySelector(".pricer__timing");
let total = document.querySelector(".pricer__price");
var checked = false;

sliderVal.oninput = function () {
  outputViews.innerHTML = views[this.value];
  total.innerHTML = prices[this.value] * (checked ? 0.75 : 1);
};
sliderVal.oninput();

const timeChecker = (el) => {
  if (el.checked) {
    checked = true;
    total.innerHTML = prices[sliderVal.value] * 0.75;
  } else {
    checked = false;
    total.innerHTML = prices[sliderVal.value];
  }
};

const totalPrice = () => {
  total;
};
