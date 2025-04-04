document.getElementById("addProductBtn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("saveProduct").addEventListener("click", function() {
    let name = document.getElementById("productName").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;
    
    if (name && quantity && price) {
        let table = document.getElementById("productTable");
        let row = table.insertRow();
        row.innerHTML = `<td>${name}</td><td>${quantity}</td><td>${price}</td>
                         <td><button class="edit">Edit</button>
                             <button class="delete">Delete</button></td>`;
        document.getElementById("modal").style.display = "none";
        document.getElementById("productName").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("price").value = "";
    } else {
        alert("Please fill in all fields");
    }
});

document.getElementById("productTable").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.parentElement.remove();
    }
});

document.getElementById("search").addEventListener("input", function() {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll("#productTable tr");
    rows.forEach(row => {
        let productName = row.cells[0].innerText.toLowerCase();
        row.style.display = productName.includes(filter) ? "" : "none";
    });
});

document.getElementById("filterOption").addEventListener("change", function() {
    let rows = Array.from(document.querySelectorAll("#productTable tr"));
    let type = this.value;
    rows.sort((a, b) => {
        let valA = a.cells[type === "name" ? 0 : type === "quantity" ? 1 : 2].innerText.toLowerCase();
        let valB = b.cells[type === "name" ? 0 : type === "quantity" ? 1 : 2].innerText.toLowerCase();
        return type === "name" ? valA.localeCompare(valB) : valA - valB;
    });
    rows.forEach(row => document.getElementById("productTable").appendChild(row));
});