/* Gerador de Senhas: Crie um gerador de senhas que produza senhas seguras com base em critérios específicos, 
como comprimento e uso de caracteres especiais. */

/*Declaração de variaveis*/
var a, b = 0, qtde;
const letras_min = "abcdefghijklmnopqrstuvwxyz";
const letras_mai = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const carac = "@&#*$%¨<>";
const vetor_min = Array.from(letras_min);
const vetor_mai = Array.from(letras_mai);
const vetor_carac = Array.from(carac);
const senha = [];
    
/*Saída*/
alert("A senha irá conter: 9 digitos, letras maiusculas, letras minusculas, numeros e caracteres especiais.\n");
qtde = parseInt(prompt("Digite a quantidade de senhas que deseja gerar: "));
    
/*Gerador de senhas*/
do {
    for(a = 0; a < 9; a++){
        if(a == 0 || a == 4){
            senha[a] = Math.floor(Math.random() * 10); //Gera os numeros presentes nas senhas
        }
        else if(a == 1 || a == 5 || a == 8){ //Gera as letras minusculas
            var c = Math.floor(Math.random() * 26);
            senha[a] = vetor_min[c];
        }
        else if(a == 2 || a == 6){
            var d = Math.floor(Math.random() * 26); //Gera as letras maiusculas
            senha[a] = vetor_mai[d];
        }
        else{
            var e = Math.floor(Math.random() * 9); //Gera os caracteres especiais
            senha[a] = carac[e];
        }
    }
    var senha_string = senha.join("");
    alert("Senha " + (b+1) + ": " + senha_string); //Exibe as senhas
    b++;
     
} while(b < qtde);
