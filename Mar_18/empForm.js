var onButton = document.querySelector('button')
var tbl = document.querySelector('tbody')

var inputName = document.getElementById('vname')
var inputAge = document.getElementById('vage')
var inputPlace = document.getElementById('vplace')
var empDetails = []


onButton.addEventListener('click', function onBtn(event) {
    event.preventDefault()
    tbl.innerHTML = ""
    const newUser = {
        name: inputName.value,
        age: inputAge.value,
        place: inputPlace.value
    }
    empDetails.push(newUser)

    inputName.value = ""
    inputAge.value = ""
    inputPlace.value = ""
    createTables();
})




function createTables() {

    empDetails.forEach(ele => {
        var row = document.createElement("tr");
        for (var key in ele) {
            var td = document.createElement("td");
            td.innerText = ele[key];
            row.appendChild(td);
        }
        tbl.appendChild(row);
    });


}