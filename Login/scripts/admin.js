window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button')
    const p = document.querySelector('p')

    const checkExpirationTime = () => {
        const token = window.localStorage.getItem('token')
        const playload = JSON.parse(atob(token.split(".")[1]))
        const expirationTime = playload.exp

        return expirationTime > Date.now() / 1000
    }


    button.addEventListener('click', () => {
        let token = window.localStorage.getItem('token')
        const isTokenValid = checkExpirationTime()

        if (!isTokenValid) {
            const refreshToken = window.localStorage.getItem('refreshToken')
            fetch('http://localhost:3000api/refresh-token', {
                method: 'POST',
                headers: {
                    'Content-Type': `application/json`
                },
                data: JSON.stringify({ refreshToken })
            })
                .then(response => response.json())
                .then(data => {
                    window.localStorage.setItem('token', data.token)
                    fetch('http://localhost:3000/api/paintings', {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            p.textContent = JSON.stringify(data)
                        })
                        .catch((error) => console.log(error))
                })
                .catch(error => console.log(error))
        } else {
            token = window.localStorage.getItem('token')
            fetch('http://localhost:3000/api/paintings', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${data.token}`
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    p.textContent = JSON.stringify(data)
                })
                .catch((error) => console.log(error))
        }
    })
})