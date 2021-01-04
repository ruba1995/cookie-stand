'use strict';

function salmonCookies(name, minCustomerPerHour, maxCustomersPerHour, avgCookiePerSale) {
  
  this.name = name;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiePerSale = avgCookiePerSale;
  // this.sales = [];
  // this.storeName = [];
}


// var Seattle = new.salmonCookies("seattle" , 23 , 65 ,6.3)
// var Tokyo = new.salmonCookies("Tokyo" , 3 , 24 ,1.2)
// var Dubai = new.salmonCookies("Dubai" , 11 , 38 ,3.7)
// var Paris = new.salmonCookies("Paris" , 20 , 38 ,2.3)
// var Lima = new.salmonCookies("Lima" , 2 , 16 , 4.6)


var workTime =["6am", " " ,"7 am "," ", "8 am "," ","9 am ","  ", "10 am "," " ,"11 am "," ", "12 pm "," ", "1 pm"," " , "2 pm"," " ," 3 pm "," ","4 pm "," " , "5 pm "," ","6 pm "," ", "7 pm" ," ", "Daily Location Total"]

 
     var container = document.getElementById("Sales")
     var table = document.createElement("table");
     container.appendChild(table);

     var row=document.createElement('tr')
     table.appendChild(row) ;

     var header =document.createElement('th')
     header.textContent=[workTime]
     table.appendChild(header);
     
     var column = document.createElement("td")
     table.appendChild(column)




     salmonCookies.prototype.generateRandomCustomers = function() {
      var result = Math.floor(Math.random() * this.maxCustomersPerHour) + this.minCustomerPerHour; //Generate random numbers betn: MIN & MAX
     return result;
     }
 


     var container = document.getElementById("Sales")
     var table = document.createElement("table");
     container.appendChild(table);

     var row=document.createElement('tr')
     table.appendChild(row) ;

     var header =document.createElement('th')
     
     table.appendChild(header);
     
     var column = document.createElement("td")
     table.appendChild(column)











// /* Generates total sales and puts into results of each stores  for the time */
// salmonCookies.prototype.generateSalesForecast = function() {
//   var calculation; 
//   // var startTime = 6; 
//   // var endTime = 19; 
//   var workTime =["6am","7 am ", "8 am ","9 am ", "10 am " ,"11 am ", "12 pm ", "1 pm" , "2 pm" ," 3 pm ","4 pm " , "5 pm ","6 pm ", "7 pm"]
//   var totalSales = 0; //Sum of total cookies from start to end time
//   for (var j = workTime; j <= workTime.length ; j++) {
//     calculation = Math.round (this.avgCookiePerSale * this.generateRandomNumber()); //Calculates and round to nearest integer
//     totalSales += calculation;
//     this.salmonCookies.push(calculation);
//   }
//   this.salmonCookies.push(totalSales); //Make a final push of total cookies
// };
// /*  Rendering function for the store object */
// salmonCookies.prototype.generateRendering = function() {
//   var tableElement = document.getElementById('sales-forecast');
//   var trElement = document.createElement('tr');
//   var tdNameEl = document.createElement('td');
//   tdNameEl.textContent = this.name;
//   trElement.appendChild(tdNameEl);
//   tableElement.appendChild(trEl);
//   var tdEl = [];
//   for (var i = 0; i < this.salmonCookies.length; i++) {
//     tdEl[i] = document.createElement('td');
//     tdEl[i].textContent = this.sales[i];
//     trEl.appendChild(tdEl[i]);
//     tableEl.appendChild(trEl);
//   }
// };
// function generateStoreData() {
// //Create Objects and store in array of stores
//   var arrayOfStores = [];
//   var totalOfColumns = []; //Stores total of the column
//   arrayOfStores.push(new Stores('Seattle', 23, 65, 6.3));
//   arrayOfStores.push(new Stores('Tokyo', 3, 24, 1.2));
//   arrayOfStores.push(new Stores('Dubai', 11, 38, 3.7));
//   arrayOfStores.push(new Stores('Paris', 20, 38, 2.3));
//   arrayOfStores.push(new Stores('Lima', 2, 16, 4.6));
//   /* Generate Sales Forecast and display elements on table for each stores  */
//   for (var i = 0; i < arrayOfStores.length; i++) {
//     arrayOfStores[i].generateSalesForecast();
//     arrayOfStores[i].generateRendering();
//   }
//   /* Generates total of the columns in the display and store in the array*/
//   for (i = 0; i < arrayOfStores[0].sales.length; i++) {
//     var total = 0;
//     for (var j = 0; j < arrayOfStores.length; j++) {
//       total += arrayOfStores[j].sales[i];
//     }
//     console.log(total);
//     totalOfColumns.push(total);
//   }
//   /* Final Rendering for the 'Totals' row */
//   var tableEl = document.getElementById('sales-forecast');
//   var trEl = document.createElement('tr');
//   var tdNameEl = document.createElement('td');

//   tdNameEl.textContent = 'Totals';
//   trEl.appendChild(tdNameEl);
//   tableEl.appendChild(trEl);
//   var tdEl = [];
//   for (i = 0; i < totalOfColumns.length; i++) {
//     tdEl[i] = document.createElement('td');
//     tdEl[i].textContent = totalOfColumns[i];
//     trEl.appendChild(tdEl[i]);
//     tableEl.appendChild(trEl);
//   }
//   //test to validate data in console
//   for (i = 0; i < arrayOfStores.length; i++) {
//     console.log(arrayOfStores[i].name);
//     for (j = 0; j < 16; j++) {
//       console.log(arrayOfStores[i].sales[j]);
//     }
//   }
// }
// var form = document.getElementById('store-name');
// var handleFormSubmit = function (event){
//   var location = event.target['location'].value;
//   var minCustomer = event.target['min-customer'].value;
//   var maxCustomer = event.target['max-customer'].value;
//   var avgCookies = event.target['avg-cookies'].value;
//   form.addEventListener('submit', handleFormSubmit);
//   console.log(event.target['location']);
// }
// generateStoreData();





