async function signupFormHandler(event) {
    event.preventDefault();
  
    let username = document.querySelector('#username-signup').value.trim();
    let email = document.querySelector('#email-signup').value.trim();
    let password = document.querySelector('#password-signup').value.trim();

  
    if (username && email && password) {
      let response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
         password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);