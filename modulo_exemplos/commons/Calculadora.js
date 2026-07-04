exports.soma = function(a, b){
    return a + b;
}

exports.subtracao = function(a, b){
    return a - b;
}

exports.multiplicacao = function(a, b){
    return a * b;
}

exports.divisao = function(a, b){

    if(b === 0){
        throw new Error("Não existe divisão por 0");
    }

    return a / b;
}