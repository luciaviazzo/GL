window.addEventListener('DOMContentLoaded', () => {
    //Captura los imputs
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const form = document.querySelector('form')

    form.addEventListener('submit', (event) => {

        //Previene comportamiento por defecto
        event.preventDefault()

        //Captura los valores de email y password
        const data = {
            email: email.value,
            password: password.value
        }

        //Manda la peticion a la url
        //Manda el header y el body con la data (email y password)
        fetch('http://localhost:3000/api/paintings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then((data) => {
                if (data.message == 'Invalid credentials') {
                    return alert(data.message)
                }
                window.localStorage.setItem('token', data.token)
                window.location.href = '/pages/admin.html'
            })
            .catch(error => console.log(error))
    })
})