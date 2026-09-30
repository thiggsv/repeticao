function contaImparesMultiplosDe3() {
    let contador = 0;

    for (let n = 1; n <= 500; n++) {
        if (n % 2 !== 0 && n % 3 === 0) {
            contador++;
            console.log(n);
        }
    }

    console.log("Total: " + contador);
}

contaImparesMultiplosDe3();