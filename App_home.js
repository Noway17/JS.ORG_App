document.querySelector(`#textarea`).addEventListener(`keyup`, function () {

  document.querySelector(`#word-count`).textContent = `残り${30 - document.querySelector(`#textarea`).value.length}文字`;

})