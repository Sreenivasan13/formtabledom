var submit = document.getElementById("submit");
submit.addEventListener("click", displayDetails);

var row = 1;

function displayDetails(){
    var fname = document.getElementById("first-name").value;
    var lname = document.getElementById("last-name").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.getElementById("gender").value;
    var choiceoffood = document.getElementById("choiceoffood").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    
    if(!fname || !lname || !pincode){
        alert("Please Fill All The Boxes");
    }
    var table = document.getElementById("table");
    var newRow = table.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = choiceoffood;
    cell7.innerHTML = state;
    cell8.innerHTML = country;

    row++;
}

function multipleFunc() {
    document.getElementById("choiceoffood").multiple = true;
 }
document.body.appendChild(submit);
