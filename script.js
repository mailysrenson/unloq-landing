
const scriptURL = 'https://script.google.com/macros/s/AKfycbxaXayx-k9wJ5WKYFfqNn8v2EXrsVzaBwAbNTqQYIpPyo0Akxg/exec'
const form = document.getElementById('test-form')

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    swal("Projet bien envoyé!", "Nous vous enverrons une offre dans les 48h", "success");
})