var idade=25;
if(idade>65 || idade==65)
{
    console.log("Com essa idade ai, ce já pode ganhar a pensão");
}
else if (idade<65 && idade>=18)
{console.log("ce ainda é trabalhador meu fi, vai ganhar salário todo mes ainda");}
else if(idade<18){
    console.log("ce é criança cara, pode trabalhar nao");
}
else{
    console.log("Valor inválido,tente novamente");
}