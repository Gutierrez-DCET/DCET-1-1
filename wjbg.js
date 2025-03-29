doocument.addEventListener("DOMContentLoaded", loadInventory)

function addItem(){
    let name= document.getElementById("ItemName").value;
    let details= document.getElementById("ItemDetails").value;
    let quantity= document.getElementById("ItemQuantity").value;
    let price= document.getElementById("ItemPrice").value;
    let date= document.getElementById("ItemDate").value;
    if (name && details && quantity && price && date) {
        let inventory = JSON.parse(localStorage.getItem("inventory")) ||[];
        inventory.push({name, details, quantity, price, date});
        localStorage.setItem("Inventory",JSON.stringify(inventory));
        loadInventory();
    }
}

function loadInventory(){
    let inventory = JSON.parse(localStorage.getItem(inventory))||[];
    let tableBody = document.getElementById("inventoryTable");
    tableBody.innerHTML = "";
    inventory.forEach((item, index) => {
        let row = `<tr>
            <td>${item.name}</td>
            <td>${item.details}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            <td>${item.date}</td>
            <td>
                <button onclick="deleteItem(${index})">Delete</button>
            </td>
        </tr>`
        tableBody.innerHTML += row;
    });
}

function deleteItem(index) {
    let inventory = JSON.parse(localStorage.getItem("inventory"));
    inventory.splice(index, 1);
    localStorage.setItem("inventory", JSON.stringify(inventory));
    loadInventory();
}