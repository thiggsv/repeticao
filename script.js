function somaImpares() {
    let soma = 0;

    for (let n = 1; n <= 500; n++) {
        if (n % 2 !== 0 && n % 3 === 0) {
            soma += n;
        }
    }

    alert(`A soma de todos os números são impares que também são múltiplos de 3 é: ${soma}`);
}

function menorEMaiorAltura() {
    let alturas = [
        1.75,
        1.80,
        1.65,
        1.90,
        1.70,
        1.73,
        1.68,
        1.85,
        1.77,
        1.82,
        1.35,
        1.95,
        1.60,
        1.88,
        1.72,
        1.78,
        1.69,
        1.83,
        1.76,
        1.81
    ];

    let menor = alturas[0];
    let maior = alturas[0];

    for (const altura of alturas) {
        if (altura > maior) {
            maior = altura;
            console.log(`incidências de maior: ${maior}`);
        }
        if (altura < menor) {
            menor = altura;
            console.log(`incidências de menor: ${menor}`);
        }
    }

    alert(`A menor altura é: ${menor} e a maior altura é: ${maior}`);
}



function mediaAritmetica() {
    let soma = 0;
    let positivos = 0;
    let negativos = 0;
    let quantidade = 0;
    let valor = 10;

    while (valor >= -7) {
        console.log(valor);
        soma += valor;
        quantidade++;
        
        if (valor > 0) {
            positivos++;
        } else if (valor < 0) {
            negativos++;
        }
        valor -= 1;
    }
    console.log(`
        Acumulado: ${soma}
        Média Aritmética: ${(soma / quantidade).toFixed(2)}
        Percentual Positivos: ${(positivos * 100 / quantidade).toFixed(2)}
        Percentual Negativos: ${(negativos * 100 / quantidade).toFixed(2)}
        `);
}