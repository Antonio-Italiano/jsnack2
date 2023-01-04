/* 
A partire da un array di stringhe, crea un secondo array formattando le
stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] 
*/

//CREO UNA FUNZIONE CHE FORMATTA LE PAROLE RENDENDO SOLO LA PRIMA LETTERA MAIUSCOLA
const capitalFirstLetter = (word) => {

    // CREO UNA VARIABILE CHE RENDE LA PRIMA LETTERA MAIUSCOLA
    const toUp = word.charAt(0).toUpperCase();
    // console.log(toUp);
    
    // CREO UNA VARIABILE CHE MONTA LA LETTERA MAIUSCOLA CON IL RESTO DELLA PAROLA  
    let sumCharat = toUp + '';
    for(let i = 1; i < word.length; i++){
    
        // RENDO IL RESTO DELLE LETTERE MINUSCOLE
        sumCharat += word.charAt(i).toLowerCase();
    }
    
    // AGGIUNGO NELLA NEWLIST LE PAROLE MONTATE
    newList.push(sumCharat);
}

// ARRAY INIZIALE
const listBrands = ['samsung', 'INTEL', 'euRotech', 'optomA'];

// ARRAY CON LE PAROLE FORMATTATE
const newList = [];

// CREO UN CICLO CHE GIRA DENTRO L'ARRAY INIZIALE
listBrands.forEach(brand => {
    capitalFirstLetter(brand);
})

// STAMPO IN CONSOLE IL CONTENUTO DELLA NEW LIST IN CONSOLE
console.log(newList);