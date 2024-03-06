

//stampare numeri d 1 a 100 usando ciclo for
let n = 100
for (i = 0; i < n; i++) {
    let num = 1 + i
    
    //SE i numeri che sono sia multipli di 3 che di 5 stampare "FizzBuzz" al posto di numero
    if (num % 3 === 0 && num % 5 === 0){
        console.log('FizzBuzz')
    //ALTRIMENTI SE i multipli di 5 stampare "Buzz" al posto di numero
    } else if (num % 5 === 0) {
        console.log('Buzz')
    //ALTRIMENTI SE  i numeri multipli di 3 stampare "Fizz" al posto di numero
    } else if (num % 3 === 0) {
        console.log('Fizz')
    // ALTRIMENTI stamapre numero
    } else {
        console.log(num)
    } 
}
    
    
    
    





