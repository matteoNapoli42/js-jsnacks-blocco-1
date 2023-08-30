
/*Versione aciclica 
let word1 = prompt("Inserisci la prima parola");
let word2 = prompt("Inserisci la seconda parola");

if(word1.length<word2.length)
{
    console.log(word1);
    console.log(word2);
}
else if(word1.length==word2.length)
    console.log("Le due parole sono ugualmente lunghe");
else
{
    console.log(word2);
    console.log(word1);
}
*/

/*Versione con ciclo

(con while) Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let word1;
let word2;
let flag=false;

while(flag==false)
{
    word1 = prompt("Inserisci la prima parola");
    word2 =prompt("Inserisci la seconda parola");
    flag = confirm("Premi OK per stampare o Annulla per reinserire");
}

if(word1.length<word2.length)
{
    console.log(word1);
    console.log(word2);
}
else if(word1.length==word2.length)
    console.log("Le due parole sono ugualmente lunghe");
else
{
    console.log(word2);
    console.log(word1);
}
