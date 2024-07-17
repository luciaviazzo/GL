window.addEventListener('DOMContentLoaded', () => {
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const form = document.querySelector('form')

    form.addEventListener('submit', (event) => {

        event.preventDefault()

        const data = {
            email: email.value,
            password: password.value
        }

        fetch('http://localhost:3000/api/paintings')
    })
})