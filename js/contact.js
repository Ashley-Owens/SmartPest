function postForm() {
    // Performs API call to httpbin and displays information.
    document.getElementById('submitBtn').addEventListener('click', function(event) {
        var req = new XMLHttpRequest();
        var payload = {message:null};
        payload.name = document.getElementById('formInputName').value;
        payload.email = document.getElementById('formInputEmail').value;
        payload.subject = document.getElementById('formSubject').value;
        payload.message = document.getElementById('formTextarea').value;

        // Performs a POST request using form data.
        if (payload.message && payload.name && payload.email) {
            req.open('POST', `http://httpbin.org/post`, true);
            req.setRequestHeader('Content-Type', 'application/json');
        } else {
            let content = "Please complete all text fields prior to submitting form."
            return renderAlert('formAlert', 'alert-secondary', content);
        }

        // Performs error checking on asynchronous request and prints success message to the browser.
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                var response = JSON.parse(req.responseText);
                console.log(response);
                let contentSuccess = "Success! Your message was submitted successfully. Thank you!";
                renderAlert("formAlert", "alert-primary", contentSuccess);
                document.getElementById("emailForm").reset();
            } else {
                console.log("Error in network request: " + req.statusText);
            }});
        req.send(JSON.stringify(payload));
        event.preventDefault();
    })
}

// Renders success and error message to the browser.
function renderAlert(id, classes, content) {
    let formAlert = document.getElementById(id);
    formAlert.className = classes;
    formAlert.className += " alert container-sm text-center"
    formAlert.textContent = content;
    formAlert.style.visibility = "visible";
}

document.addEventListener('DOMContentLoaded', postForm);
