var ChinaBox = {
    price: 0,
    calories: 0,

    small: {
       price: 5,
    },

    large:{
        price: 7,
    },

    rice:{
        calories:110
    },

    noodles: {
        calories: 140
    },

    pork: {
        price: 3.50,
       calories: 150
    },

    beef:{
        price: 4.20,
       calories: 250
    },

    chicken: {
        price: 2.50,
       calories: 135
    },

    bread_crumbs:{
        price: 1.50,
       calories: 300
    },

    extra_souse:{
        price: 2.80,
       calories: 100
    },

    calculate: function(size, garnish){
      this.price = ChinaBox[size].price;
      this.calories = ChinaBox[garnish].calories;

      if (ChinaBox[size]=="small") {
        this.calories =this.calories * 1;
     }  else if(ChinaBox[size]=="large"){
           this.calories=this.calories * 2;
     }

      var checkboxArray = document.querySelectorAll('input[name="add"]:checked');

      for(var i = 0; i < checkboxArray.lenght; i++){
          var type = checkboxArray[i].id;

          this.price += ChinaBox[type].price;
          this.calories += ChinaBox[type].calories;
      }
      ChinaBox.result(this.price, this.calories);
    },

    result: function (price, calories){
        document.getElementById("price").innerHTML = price;
        document.getElementById("calories").innerHTML = calories;
    },
    result_all: function(){
        this.price = 0;
        this.calories = 0;
    }
    }
    document.getElementById("form").addEventListener('submit', (e) => {
        e.preventDefault();
        var size = (document.querySelector('input[name="size"]:checked').value);
        var garnish = (document.querySelector('input[name="garnish"]:checked').value);
          ChinaBox.calculate(size, garnish);
        
})