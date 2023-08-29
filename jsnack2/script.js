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
    