/*Versione aciclica 

let num1 = prompt("Inserisci il primo numero");
let num2 = prompt("Inserisci il secondo numero");
let num2;

if (num1 == num2)
    console.log("I due numeri sono uguali");
else if(num1>num2)
    console.log(num1);
else
    console.log(num2);
*/

/*Versione con ciclo */

/*Da fare con WHILE tutti I prossimi snacks
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

let num1;
let num2;
let flag = false;
while(flag==false)
{
    num1 = prompt("Inserisci il primo numero");
    num2 = prompt("Inserisci il secondo numero");
    flag = confirm("Premi OK per stampare il risultato, oppure ANNULLA per ripetere l'inserimento");
}

if (num1 == num2)
    console.log("I due numeri sono uguali");
else if(num1>num2)
    console.log(num1);
else
    console.log(num2);