function send_email()
{
    var name =
        document.querySelector("#contact_form [name='fullName']");
    var name = name.value;
    console.log(name)
    var email =
        document.querySelector("#contact_form [name='email']");
    var email = email.value;
    var email =
        document.querySelector("#contact_form [name='email']");
    var email = email.value;
    var phone =
        document.querySelector("#contact_form [name='phone']");
    var phone = phone.value;
    var message =
        document.querySelector("#contact_form [name='message']");
    var message = message.value;

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(message)

    fetch('https://4jq8k99ik2.execute-api.us-east-1.amazonaws.com/Stage/send-email', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': 'localhost'
        },
        body: JSON.stringify({ "name": name , "email": email, "phone": phone, "message": message})
    })
       .then(response => response.json())
       .then(response => console.log(JSON.stringify(response)))
    alert('E-Mail Sent');
}