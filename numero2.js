const numero = Number(prompt("Informe o número!"));

Fibonacci(numero);

function Fibonacci(num) {
  let anterior = 1;
  let soma = 1;
  // Variável abaixo irá guardar o número atual da soma antes
  let guardaNum = 0;
  if (num === 1 || num === 0) {
    alert(`O número ${num} pertence a sequência de Fibonacci!`);
  } else {
    while (soma < num) {
      guardaNum = soma;
      soma += anterior;
      anterior = guardaNum;
    }
    if (soma === num) {
      alert(`O número ${num} pertence a sequência de Fibonacci!`);
    } else {
      alert(`O número ${num} não pertence a sequência de Fibonacci!`);
    }
  }
}
