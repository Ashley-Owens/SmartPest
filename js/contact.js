function postForm() {
    // Performs API call to httpbin.
    document.getElementById('submitBtn').addEventListener('click', function(event) {
        var req = new XMLHttpRequest();
        var payload = {};
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
            return renderAlert('formAlert', content, 'error');
        }

        // Performs error checking on asynchronous request and prints success message to the browser.
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                var response = JSON.parse(req.responseText);
                console.log(response);
                let contentSuccess = "Success. We will contact you within 1-2 business days. Thank you!";
                renderAlert("formAlert", contentSuccess, 'success');
                document.getElementById("emailForm").reset();
            } else {
                console.log("Error in network request: " + req.statusText);
                let error = 'Unable to submit, please try again later.'
                renderAlert("formAlert", error, 'success');
            }});
        req.send(JSON.stringify(payload));
        event.preventDefault();
    })
}

// Renders success and error messages to the browser.
function renderAlert(id, content, bannerType) {
    let formAlert = document.getElementById(id);
    formAlert.textContent = content;
    
    // Changes background color depending on banner type.
    if (bannerType === 'success') {
        formAlert.style.color = "#adcd2d";
        formAlert.style.fontWeight = '250';
    } else {
        formAlert.style.color = "#bd1b56";
    }
    formAlert.style.visibility = "visible";
}

document.addEventListener('DOMContentLoaded', postForm);
