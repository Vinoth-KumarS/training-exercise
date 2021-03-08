 var data = ["Firstname", "Lastname", "Age"];
 var data1 = [
     { firstname: "Vinoth", lastname: "Kumar", age: 27 },
     { firstname: "Mohamed", lastname: "Umar", age: 26 },
     { firstname: "Saravana", lastname: "Kumar", age: 28 }
 ];

 function createTables() {


     var body = document.querySelector("body");
     var tbl = document.createElement("table");

     for (var i = 0; i <= 1; i++) {
         if (i === 0) {
             var row1 = document.createElement("tr");
             data.forEach(ele => {
                 var th = document.createElement("th");
                 th.innerText = ele;
                 row1.appendChild(th);
             });
             tbl.appendChild(row1);
             continue;
         }
         data1.forEach(ele => {
             var row = document.createElement("tr");
             for (var key in ele) {
                 var td = document.createElement("td");
                 td.innerText = ele[key];
                 row.appendChild(td);
             }
             tbl.appendChild(row);
         });
     }
     body.appendChild(tbl);
 }
 createTables();