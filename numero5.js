const palavra = prompt("Informe a palavra!");
let i = palavra.length - 1;
let reverso = "";
for (i; i >= 0; i--) {
  reverso += palavra[i];
}
alert(reverso);
