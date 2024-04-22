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
        && numberArr[number] > numeroBajo)
        || numberArr[number] === numeroAlto
        || numberArr[number] === numeroBajo)
        numeroMedio = numberArr[number]
   }



   
    return {
        numeroAlto,
        numeroBajo,
        numeroMedio,
        sortHig,
        sortlow,
        valorRepetido
    }
}


compareNumbers(3, 1, 2)