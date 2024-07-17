window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button')
    const p = document.querySelector('p')

    button.addEventListener('click', () => {
        const token = window.localStorage.getItem('token')

        fetch('http://localhost:300/api/paintings', {
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
})