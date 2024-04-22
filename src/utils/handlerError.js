const err1 = document.getElementById('err1')
const err2 = document.getElementById('err2')
const err3 = document.getElementById('err3')

const errMsg = 'Hey! esto no es un número'

const handleError = (n1, n2, n3) => {
    isNaN(n1) ? err1.innerHTML = errMsg : err1.innerHTML = ''
    isNaN(n2) ? err2.innerHTML = errMsg : err2.innerHTML = ''
    isNaN(n3) ? err3.innerHTML = errMsg : err3.innerHTML = ''
}

export default handleError