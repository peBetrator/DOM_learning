var budgetController = (function() {})();

var UIController = (function() {})();

var appController = (function(budgetCtrl, UICtrl) {
  document.querySelector(".add__btn").addEventListener("click", function() {
    console.log("button was clicked");
  });

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) { //which property for older browsers
      console.log("ENTER was pressed");
    }
  });
})(budgetController, UIController);
