const form = document.getElementById('form')

const captureData = (e) => {
    e.preventDefault()
    const n1 = document.getElementById('n1').value
    const n2 = document.getElementById('n2').value
    const n3 = document.getElementById('n3').value

compareNumbers(n1, n2, n3)

}

form.addEventListener('submit', captureData)

const {n1, n2, n3} = captureData


const compareNumbers = (n1, n2, n3) => {
    const numberArr = [n1, n2, n3]
    const cloneArr1 =  structuredClone(numberArr)
    const cloneArr2 = structuredClone(numberArr)
    const sortlow = cloneArr1.sort((a,b) => b-a)
    const sortHig = cloneArr2.sort((a,b) => a-b)
    
    let numeroAlto = 0
    let numeroBajo = numberArr[0]
    let numeroMedio
    let valorRepetido = 'No hay números repetidos'

   for(let i = 0; i < numberArr.length; i++) {
    if(numberArr[i] > numeroAlto) numeroAlto = numberArr[i]
    if(numberArr[i] < numeroBajo) numeroBajo = numberArr[i]
    for(let j = 0; j < numberArr.length; j++) {
        if(numberArr[i] === numberArr[j] && i !== j) valorRepetido = `El número ${numberArr[i]} está repetido`
    }
   }

   for(number in numberArr) {
    if((numberArr[number] < numeroAlto
        && numberArr[number] > numeroBajo))
        numeroMedio = numberArr[number]
   }
   
    const data = {
        numeroAlto,
        numeroBajo,
        numeroMedio,
        sortHig,
        sortlow,
        valorRepetido
    }

    printData(data)
}

const printData = (data) => {
const {numeroAlto, numeroBajo, numeroMedio, sortHig, sortlow, valorRepetido} = data

document.getElementById('higher').innerHTML = numeroAlto
document.getElementById('lower').innerHTML = numeroBajo
document.getElementById('middle').innerHTML = numeroMedio
document.getElementById('sortLower').innerHTML = sortlow
document.getElementById('sortHigher').innerHTML = sortHig
document.getElementById('repeat').innerHTML = valorRepetido
}

