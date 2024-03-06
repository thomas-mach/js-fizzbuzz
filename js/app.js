

//stampare numeri d 1 a 100 usando ciclo for
let n = 100
for (i = 0; i < n; i++) {
    let num = 1 + i
    
    
    // Crere un container nel DOM tramite HTML dare stile a container con CSS
    // aggiungere un elemento html con il numero e stringa coretta da mostrare
    let elemento = document.createElement("div")
    elemento.textContent = num
    elemento.style.backgroundColor = 'red'
    elemento.style.fontSize = '20px'
    let containerElement = document.getElementById("container")
    containerElement.appendChild(elemento)
    
    //SE i numeri che sono sia multipli di 3 che di 5 stampare "FizzBuzz" al posto di numero
    if (num % 3 === 0 && num % 5 === 0){
        elemento.textContent = ('FizzBuzz')
        elemento.style.backgroundColor = 'orange'
    //ALTRIMENTI SE i multipli di 5 stampare "Buzz" al posto di numero
    } else if (num % 5 === 0) {
        elemento.textContent = ('Buzz')
        elemento.style.backgroundColor = 'white'
    //ALTRIMENTI SE  i numeri multipli di 3 stampare "Fizz" al posto di numero
    } else if (num % 3 === 0) {
        elemento.textContent = ('Fizz')
        elemento.style.backgroundColor = 'green'
    // ALTRIMENTI stamapre numero
    } else {
        elemento.textContent = num
    } 
}
    
    
    
    





