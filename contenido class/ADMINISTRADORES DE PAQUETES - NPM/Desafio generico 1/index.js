console.log();

(() => {

    const MAX_NUMEROS = 10000;
    const RANGO = 20;
    let json= {};
    
    for (let i=0; i<MAX_NUMEROS; i++) {
        const key = (Math.floor(Math.random() * RANGO + 1));
        json[key] ? json[key]++ : json[key] = 1; 

    } 
    console.log(json);

})()

