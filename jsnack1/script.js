/*Versione aciclica 



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
let flag = true;
while(flag)
{
    num1 = prompt("Inserisci il primo numero");
    num2 = prompt("Inserisci il secondo numero");
    flag = false;
}

if (num1 == num2)
    console.log("I due numeri sono uguali");
else if(num1>num2)
    console.log(num1);
else
    console.log(num2);




