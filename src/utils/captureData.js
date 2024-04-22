import { compareNumbers } from "../index.js"
import handleError from "./handlerError.js"

const form = document.getElementById('form')

const captureData = (e) => {
    e.preventDefault()
    const n1 = parseInt(document.getElementById('n1').value)
    const n2 = parseInt(document.getElementById('n2').value)
    const n3 = parseInt(document.getElementById('n3').value)
    
    handleError(n1, n2, n3)
    compareNumbers(n1, n2, n3)
}

form.addEventListener('submit', captureData)