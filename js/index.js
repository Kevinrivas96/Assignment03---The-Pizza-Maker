// Pizza Class
class Pizza {
    fName;
    lName;
    address;
    city;
    province;
    postal;

    // Define Contructor
    constructor(fName, lName, address, city, province, postal, pizzaType, extras, size, payment) {
        this.fName = fName;
        this.lName = lName;
        this.address = address;
        this.city = city;
        this.province = province;
        this.postal = postal;
        this.pizzaType = pizzaType;
        this.extras = extras;
        this.size = size;
        this.payment = payment;
    }

    // Class Method, to dislpay outupt
    showMsg() {
        return `Hello ${this.fName} ${this.lName}! Your order for: ${this.pizzaType} ${this.size} Pizza has been placed. ${this.extras} It will be delivered to ${this.address} ${this.city} ${this.province} ${this.postal} in aprox. 30 mins. Your preffered payment method is: ${this.payment}.`;
    }
}

// Order button
let order = document.querySelector("#order");

// event listener when button is clicked
order.addEventListener('click', function (e) {

    e.preventDefault();

    // Retrieve all the values from the fields
    let fName = document.querySelector("#fName").value;
    let lName = document.querySelector("#lName").value;
    let address = document.querySelector("#inputAddress").value;
    let city = document.querySelector("#inputCity").value;
    let province = document.querySelector("#inputProvince").value;
    let postal = document.querySelector("#inputPostal").value;
    let size = document.querySelector('input[name="gridRadios"]:checked');
    let payment = document.querySelector('input[name="payment"]:checked');

    // Get all checked pizzas
    let selectedPizza = document.querySelectorAll('#gridCheck');
    let pizzaType = '';
    selectedPizza.forEach(element => {
        if (element.checked) {
            pizzaType += "1x " + element.value + ", ";
        }
    });

    // Remove comma
    pizzaType = pizzaType.slice(0, -2);

    // Get all extras if any
    let extrasSelected = document.querySelectorAll("#extras");
    let extras = "Your Extras: ";

    extrasSelected.forEach(element => {
        if (element.checked) {
            extras += "1x " + element.value + ", ";
        }
    });

    // Remove comma
    extras = extras.slice(0, -2);

    // check that all fields are filled out
    if (!fName || !lName || !address || !city || !province || !postal || !size || !payment || !pizzaType) {
        alert("Please fill out all fields.");
        return;
    }

    // Get p tag from the modal to display our output
    let showOrder = document.querySelector("#showOrder");
    // Get p for student number to display student ID and name
    let studentNum = document.querySelector("#student");
    studentNum.textContent = "Made by Kevin Rivas - Student ID: 200555784"

    // Create a new Pizza Object
    let myOrder = new Pizza(fName, lName, address, city, province, postal, pizzaType, extras, size.value, payment.value);

    // Invoke class method
    showOrder.textContent = myOrder.showMsg();
});




