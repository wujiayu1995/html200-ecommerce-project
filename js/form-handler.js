function capture() {
    event. preventDefault()
    console. log ("form submitted")
    
    var theEmail = document.custInfo.email.value
    console.log ("thank you for signing up as" + theEmail)
    alert ("Thank you for signing up as" + theEmail)
}

