"use strict";
let data;
fetch("./stays.json")
    .then((res) => res.json())
    .then((data) => {
    for (let i = 0; i < data.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        searchResult === null || searchResult === void 0 ? void 0 : searchResult.appendChild(card);
        card.innerHTML =
            `<img
      src=${(data[i].photo)}
      class="img-fluid"
      alt=${(data[i].title)},${(data[i].type)}
    />
    <div class="card-discreption">
      <span superHost=${data[i].superHost}>Super Host</span
      ><span class='type'> ${(data[i].type)}.${(data[i].beds)}beds</span
      ><i class="fa-solid fa-star rating">${data[i].rating}</i>
    </div>
    <h1 class="card-title">${(data[i].title)}</h1>`;
    }
});
// data = (data)
console.log(data);
const searchResult = document.querySelector('.gallary');
const btnSearch = document.querySelector('.btn-search');
const collapseOne = document.querySelector('#collapseOne');
const accordionButton = document.querySelector('.accordion-button');
const accordionBody = document.querySelector('.accordion-body');
// const searchBar = document.querySelector('.search-bar');
const frameExtending = [
    { transform: 'scaleY(0)' },
    { transform: 'scaleY(1)' },
];
const frameTiming = {
    duration: 200,
    iterations: 1,
};
console.log();
function showResult() {
    accordionButton === null || accordionButton === void 0 ? void 0 : accordionButton.classList.toggle('collapsed');
    accordionBody === null || accordionBody === void 0 ? void 0 : accordionBody.animate(frameExtending, frameTiming);
    collapseOne === null || collapseOne === void 0 ? void 0 : collapseOne.classList.toggle('show');
    (accordionButton === null || accordionButton === void 0 ? void 0 : accordionButton.getAttribute('aria-expanded')) == 'true' ? accordionButton === null || accordionButton === void 0 ? void 0 : accordionButton.setAttribute('aria-expanded', 'false') : accordionButton === null || accordionButton === void 0 ? void 0 : accordionButton.setAttribute('aria-expanded', 'true');
}
btnSearch === null || btnSearch === void 0 ? void 0 : btnSearch.addEventListener('click', showResult);
