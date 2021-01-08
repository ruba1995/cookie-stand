'use strict';

var workingHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm","3pm","4pm", "5pm","6pm", "7pm"]


// create objects 
var seattel = {
  name: "seattel",
  MinCust: 23,
  MaxCust: 65,
  AvgCookieSale: 6.3,
  custPerHour: [],
  sales: [],
  totalSales: 0,
  customer: function (MinCust, MaxCust) {
    for (var i = 0; i < 14 ; i++) {
      seattel.custPerHour[i] = Math.floor(Math.random() * (MaxCust - MinCust) + MinCust);
    }
  },

  sale: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      seattel.sales[i] = Math.floor(seattel.custPerHour[i] * this. AvgCookieSale);
    }

  },

  totalSalesSeattel: function () {
    for (var i = 0; i < this.sales.length; i++) {
      this.totalSales = this.totalSales + this.sales[i];

    }
  }
}

 seattel.customer(seattel.MinCust , seattel.MaxCust);
 seattel.sale();
 seattel.totalSalesSeattel();




var Tokyo = {
  name:"TOkyo",
  MinCust: 3,
  MaxCust: 24,
  AvgCookieSale: 1.2,
  custPerHour: [],
  sales: [],
  totalSales: 0,
  customer: function (MinCust, MaxCust) {
    for (var i = 0; i < 14; i++) {
      Tokyo.custPerHour[i] = Math.floor(Math.random() * (MaxCust - MinCust) + MinCust);
    }
  },

  sale: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      Tokyo.sales[i] = Math.floor(Tokyo.custPerHour[i] * this. AvgCookieSale);
    }

  },

  totalSalesTokyo: function () {
    for (var i = 0; i < this.sales.length; i++) {
      this.totalSales = this.totalSales + this.sales[i];

    }
  }

}

Tokyo.customer(Tokyo.MinCust , Tokyo.MaxCust);
Tokyo.sale();
Tokyo.totalSalesTokyo();

var Dubai = {
  name: "Dubai",
  MinCust: 11,
  MaxCust: 38,
  AvgCookieSale: 3.7,
  custPerHour: [],
  sales: [],
  totalSales: 0,
  customer: function (MinCust, MaxCust) {
    for (var i = 0; i < 14; i++) {
      this.custPerHour[i] = Math.floor(Math.random() * (MaxCust - MinCust) + MinCust);
    }
  },

  sale: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      // console.log(this.AvgCookieSale)
      this.sales[i] = Math.floor(this.custPerHour[i] * this. AvgCookieSale);
    }

  },

  totalSalesDubai: function () {
    for (var i = 0; i < this.sales.length; i++) {
      this.totalSales = this.totalSales + this.sales[i];

    }
  }
}
  

  Dubai.customer(Dubai.MinCust , Dubai.MaxCust);
  Dubai.sale();
  Dubai.totalSalesDubai();




var Paris = {
  name: "Paris",
  MinCust: 20,
  MaxCust: 38,
  AvgCookieSale: 2.3,
  custPerHour: [],
  sales: [],
  totalSales: 0,
  customer: function (MinCust, MaxCust) {
    for (var i = 0; i < 14; i++) {
      Paris.custPerHour[i] = Math.floor(Math.random() * (MaxCust - MinCust) + MinCust);
    }
  },

  sale: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      Paris.sales[i] = Math.floor(Paris.custPerHour[i] * this. AvgCookieSale);
    }

  },

  totalSalesParis: function () {
    for (var i = 0; i < this.sales.length; i++) {
      this.totalSales = this.totalSales + this.sales[i];

    }
  }

}

Paris.customer(Paris.MinCust , Paris.MaxCust);
Paris.sale();
Paris.totalSalesParis();



var Lima = {
  name: "Lima",
  MinCust: 2,
  MaxCust: 16,
  AvgCookieSale: 4.6,
  custPerHour: [],
  sales: [],
  totalSales: 0 ,
  customer: function (MinCust, MaxCust) {
    for (var i = 0; i < workingHours.length; i++) {
      Lima.custPerHour[i] = Math.floor(Math.random() * (MaxCust - MinCust) + MinCust);
    }
  },

  sale: function () {
    for (var i = 0; i < this.custPerHour.length; i++) {
      Lima.sales[i] = Math.floor(Lima.custPerHour[i] * this. AvgCookieSale);
    }

  },

  totalSalesCalculation: function () {
    console.log(this.totalSales);
    console.log(this.sales.length);
    for ( var i = 0; i < this.sales.length; i++) {
      console.log(workingHours.length);
      console.log(this.custPerHour.length);
      console.log(i,this.sales.length);
      console.log(this.sales.length);
      this.totalSales = this.totalSales + this.sales[i];

    }
  }



}

Lima.customer(Lima.MinCust , Lima.MaxCust);
Lima.sale();
Lima.totalSalesCalculation();


var locationsOfShops = [ seattel , Tokyo ,  Dubai ,  Paris ,  Lima ]

var parentElement = document.getElementById("list"); 
// var ulList = rt;
// var liList =[];

// for(var x=0 ; x<5 ; x++ ){
// ulList = document.createElement("ul");
// parentElement.appendChild(ulList);
// ulList.textContent=locationsOfShops[x].name;
// for(var j=0 ; j< 15 ; j++){
//   liList[j]=document.createElement("li");
//   liList[j].textContent=workingHours[j] + " " + locationsOfShops[x].sale[j];
//   liList[j].appendChild(ulList[x]);
//   if (j == 14 ){
//     liList[j].textContent=workingHours[j] +" " +locationsOfShops[x].totalSalesCalculation;
//     ulList[x].appendChild(liList[j]);
//   }
// }
// }
// console.log(ulList);


for (var j=0 ; j< locationsOfShops.length ;j++ ){

var ul = document.createElement("ul");
var li =document.createElement("li");

parentElement.appendChild(ul);
ul.appendChild(li);
li.textContent= locationsOfShops[j].name ;

for (var i=0 ; i< workingHours.length ;i++){

  var li = document.createElement("li");
ul.appendChild(li);
li.textContent=  workingHours[i]+ "......."  +locationsOfShops[j].sales[i] ;
}
 
var li = document.createElement("li");
ul.appendChild(li);
li.textContent= locationsOfShops[j].totalSales; 

}

