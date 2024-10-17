const numero = parseInt(process.argv[2], 10); 

if (isNaN(numero)) {
    console.log("Por favor, proporciona un número válido.");
} else {
    for (let factor = 1; factor <= 10; factor++) {
        console.log(`${numero} x ${factor} = ${numero * factor}`);
    }
}
