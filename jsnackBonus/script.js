let sommatoria = [];
for(i=0; i<6; i++)
{
    let numero = prompt("Inserisci un numero");
    if(numero % 2 == 1)
        sommatoria.push(numero);
}

console.log(sommatoria);