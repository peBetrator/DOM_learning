var budgetController = (function() {
  var Expence = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allExpences: {
      expences: [],
      incomes: []
    },
    totals: {
      expences: 0,
      incomes: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;
      //create new ID
      if (data.allExpences[type].length > 0) {
        ID = data.allExpences[type][data.allExpences[type].length - 1].id + 1;
      } else ID = 0;

      //create new item based on 'inc' or 'exp' type
      if (type === "inc") {
        newItem = new Income(ID, des, val);
      } else if (type === "exp") {
        newItem = new Expence(ID, des, val);
      }

      //push new item to data structure
      data.allExpences[type].push(newItem);
      return newItem;
    }
  };
})();

var UIController = (function() {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",

    addButtom: ".add__btn"
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

var appController = (function(budgetCtrl, UICtrl) {
  var setUpEventListener = function() {
    var DOM = UICtrl.getDOMstrings();

    document
      .querySelector(DOM.addButtom)
      .addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        //which property for older browsers
        console.log("ENTER was pressed");
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    var input, newItem;
    // 1. Get the field input data
    input = UICtrl.getInput();

    // 2. Add the item to the budget controller
    newItem = budgetController.addItem(
      input.type,
      input.description,
      input.value
    );
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  };

  return {
    init: function() {
      setUpEventListener();
    }
  };
})(budgetController, UIController);

appController.init();
