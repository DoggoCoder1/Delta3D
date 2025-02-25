let ItemSelected;
let colorSelected;
let Cost;
let firstName;
let lastName;
function checkout(item) {
    switch (item) {
        case 1:
            ItemSelected = "Fidget Joystick";
            Cost = "$1.00";
        break;
        case 2:
            ItemSelected = "Turbine Whistle";
            Cost = "$0.50";
        break;
        case 3:
            ItemSelected = "Desk Catapult";
            Cost = "$1.50";
        break;
        case 4:
            ItemSelected = "Dummy 13";
            Cost = "$2.50";
        break;
        case 5:
            ItemSelected = "Squish Fidget";
            Cost = "$1.25";
        break;
        case 6:
            ItemSelected = "Fidget Clicker";
            Cost = "$1.50";
        break;
        case 7:
            ItemSelected = "Custom Order";
            Cost = "None"
        break;
        case 8:
            ItemSelected = "Impossible Cone";
            Cost = "$1.25"
        break;
    }
    hideContent();
}

function hideContent() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';
    document.getElementById('itemName').innerHTML = ItemSelected;
    if (ItemSelected === "Custom Order") {
        document.getElementById('itemPrice').innerHTML = "Price may vary";
        document.getElementById('modelLink').style.display = "inline";
        document.getElementById('modelContainer').style.display = "block";
    } else {
        document.getElementById('itemPrice').innerHTML = Cost;
        document.getElementById('modelLink').style.display = "none";
        document.getElementById('modelContainer').style.display = "none";
    }
    
}



function init() {
    try {
        emailjs.init('drGjbjy37aAZ25Yu1');
    } catch (error) {
        console.error('Error occurred while sending email:', error);
    }
}
init();

function send() {
        colorSelected = document.getElementById('color').value;
        firstName = document.getElementById('firstName').value;
        lastName = document.getElementById('lastName').value;
        emailjs.send('service_iob9a3n', 'template_jzqsi9o', {
        sender: `${firstName} ${lastName}`,
        note: document.getElementById('additionalInfo').value,
        item: ItemSelected,
        color: colorSelected,
        model: document.getElementById('modelLink').value,
    })
    .then(function(response) {
       console.log('Email Sent!', response.status, response.text);
    }, function(error) {
       console.log('Email failed to send : ', error);
    });
    document.getElementById('placeorder').innerText = 'Order Placed!';
    setTimeout(() => {
        document.getElementById('placeorder').innerText = 'Place Order';
        window.location.reload();
    }, 1000);
}
