export const printData = (data) => {
    const {numeroAlto, numeroBajo, numeroMedio, sortHig, sortlow, valorRepetido} = data

    document.getElementById('higher').innerHTML = numeroAlto
    document.getElementById('lower').innerHTML = numeroBajo
    document.getElementById('middle').innerHTML = numeroMedio
    document.getElementById('sortLower').innerHTML = sortlow
    document.getElementById('sortHigher').innerHTML = sortHig
    document.getElementById('repeat').innerHTML = valorRepetido
}