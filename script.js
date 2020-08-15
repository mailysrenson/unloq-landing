const scriptURL = 'https://script.google.com/macros/s/AKfycbxaXayx-k9wJ5WKYFfqNn8v2EXrsVzaBwAbNTqQYIpPyo0Akxg/exec'
const form = document.getElementById('test-form')

form.addEventListener('submit', e => {
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    alert("Merci de nous avoir envoyé votre projet! Nous vous enverrons une offre dans les 48h");
})