// scripts.js

// Dummy inventory data
let inventory = [
    { itemName: "Item 1", itemQuantity: 10 },
    { itemName: "Item 2", itemQuantity: 5 },
];

// Function to display inventory table
function displayInventory() {
    const itemTable = document.getElementById("itemTable");

    // Clear existing rows
    while (itemTable.rows.length > 1) {
        itemTable.deleteRow(1);
    }

    // Add rows for each inventory item
    inventory.forEach((item, index) => {
        const row = itemTable.insertRow(index + 1);
        const itemNameCell = row.insertCell(0);
        const itemQuantityCell = row.insertCell(1);
        const actionsCell = row.insertCell(2);

        itemNameCell.innerHTML = item.itemName;
        itemQuantityCell.innerHTML = item.itemQuantity;
        actionsCell.innerHTML = `<button type="button" class="deleteButton" onclick="deleteItem(${index})">Delete</button>`;
    });
}

// Function to add an item to the inventory
function addItem() {
    const itemName = document.getElementById("itemName").value;
    const itemQuantity = parseInt(document.getElementById("itemQuantity").value);

    if (!itemName || isNaN(itemQuantity)) {
        alert("Please enter valid item name and quantity.");
        return;
    }

    inventory.push({ itemName, itemQuantity });
    displayInventory();

    // Clear input fields
    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = "";
}

// Function to delete an item from the inventory
function deleteItem(index) {
    if (confirm("Are you sure you want to delete this item?")) {
        inventory.splice(index, 1);
        displayInventory();
    }
}

// Function to handle login form submission
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    // Dummy login logic (replace with your actual login authentication logic)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        alert("Login successful!");
        document.getElementById("login").style.display = "none";
        document.getElementById("inventory").style.display = "block";
        displayInventory();
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// Function to show the registration form on clicking the register button
document.getElementById("registerButton").addEventListener("click", () => {
    alert("Registration feature not implemented in this demo.");
});

// Function to handle adding an item
document.getElementById("addItemButton").addEventListener("click", addItem);
