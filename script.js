let ItemSelected = null;
let colorSelected = null;
let Cost = null;
let firstName = null;
let lastName = null;
function checkout(item) {
    switch (item) {
        case 1:
            ItemSelected = "Fidget Joystick";
            Cost = "$0.50";
            hideContent();
        break;
        case 2:
            ItemSelected = "Propeller Launcher";
            Cost = "$1.00";
            hideContent();
        break;
        case 3:
            ItemSelected = "Dummy 13";
            Cost = "$2.50";
            hideContent();
        break;
        case 4:
            ItemSelected = "Turbine Whistle";
            Cost = "$2.00";
            hideContent();
        break;
    }
}

function hideContent() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';
    document.getElementById('itemName').innerHTML = ItemSelected;
    document.getElementById('itemPrice').innerHTML = Cost;
}



function init() {
    try {
        emailjs.init('C1BlBKjVX-rkLsRcM');
    } catch (error) {
        console.error('Error occurred while sending email:', error);
    }
}
init();
function send() {
    const randomNumber = btoa(Math.floor(Math.random() * 1000000));
    if (prompt(`CAPTCHA\nEnter to verify : ${randomNumber}`) == randomNumber) {
        colorSelected = document.getElementById('color').value;
        firstName = document.getElementById('firstName').value;
        lastName = document.getElementById('lastName').value;
        emailjs.send('service_qqf5p4q', 'template_ttckj0c', {
        sender: `${firstName} ${lastName}`,
        note: document.getElementById('additionalInfo').value,
        item: ItemSelected,
        color: colorSelected,
    })
    .then(function(response) {
       console.log('Email Sent!', response.status, response.text);
    }, function(error) {
       console.log('Email failed to send : ', error);
    });
    } else {
        alert("Verification Failed")
    }


    
}