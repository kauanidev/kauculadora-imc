function removerClasse() {
    document.getElementById("peso1").className = "";
    document.getElementById("peso2").className = "";
    document.getElementById("peso3").className = "";
    document.getElementById("peso4").className = "";
    document.getElementById("peso5").className = "";
}

function calculaIMC() {
    const pesoVal = document.getElementById("peso").value;
    const alturaVal = document.getElementById("altura").value;

    const peso = Number(pesoVal);
    const altura = Number(alturaVal);

    if (!peso || !altura) {
        alert("Insira um valor válido para peso e altura");
        return;
    }

    const alturaMetro = altura / 100;

    const imc = peso / (alturaMetro * alturaMetro);

    removerClasse();

    if(imc < 18.5) {
        document.getElementById("peso1").className = "selected";
    } else if (imc >= 18.5 && imc < 24.9) {
        document.getElementById("peso2").className = "selected";
    } else if (imc >= 25 && imc < 29.9) {
        document.getElementById("peso3").className = "selected";
    } else if (imc >= 30 && imc < 34.9) {
        document.getElementById("peso4").className = "selected";
    } else if (imc >= 35) {
        document.getElementById("peso5").className = "selected";
    }
}