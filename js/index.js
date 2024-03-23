// Pizza Class
class Pizza {
    fName;
    lName;
    address;
    city;
    province;
    postal;

    // Define Contructor
    constructor(fName, lName, phone, address, city, province, postal, pizzaType, extras, size, payment) {
        this.fName = fName;
        this.lName = lName;
        this.phone = phone;
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
        return `Hello ${this.fName} ${this.lName}! Your order for: ${this.pizzaType} ${this.size} Pizza has been placed. ${this.extras} It will be delivered to ${this.address} ${this.city} ${this.province} ${this.postal} in aprox. 30 mins. Your preffered payment method is: ${this.payment}. We will call ${this.phone} when the order is ready.`;
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
    let phone = document.querySelector("#inputPhone").value;
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
    extrasSelected = Array.from(extrasSelected).filter(checkbox => checkbox.checked);

    let extras = extrasSelected.length > 0 ? "Your Extras: " : "No Extras. ";

    extrasSelected.forEach((element, index) => {
        extras += "1x " + element.value + " ";
        if (index > extrasSelected.length - 1) {
            extras += ", ";
        }
    });

    // check that all fields are filled out
    if (!fName || !lName || !phone || !address || !city || !province || !postal || !size || !payment || !pizzaType) {
        alert("Please fill out all fields.");
        return;
    }

    // Get p tag from the modal to display our output
    let showOrder = document.querySelector("#showOrder");
    // Get p for student number to display student ID and name
    let studentNum = document.querySelector("#student");
    studentNum.textContent = "Kevin Rivas - Student ID: 200555784"

    // Create a new Pizza Object
    let myOrder = new Pizza(fName, lName, phone, address, city, province, postal, pizzaType, extras, size.value, payment.value);

    // Invoke class method
    showOrder.textContent = myOrder.showMsg();
});




