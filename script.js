//--------- 01 ------//

function ola() {
    console.log("Olá mundo!");
}
ola();

//--------- 02 -----//

function oi(name) {
    console.log(`Olá ${name}, seja bem vindo(a)!`);
}
oi('Anderson');
oi('Ana Carolina');

//------- 03 -------//

function cliente(nome, idade, estiloMusical){
    console.log(`Olá ${nome}, sua idade é de ${idade} anos e seu estilo de musica é ${estiloMusical}.`);
}
cliente('Anderson', 27, 'rap');
cliente('Jonas', 30, 'pagode');

//-------- 04 -------//

function gostos(music, film){
    console.log(`Olá, sua musica preferida é ${music} e seu filme favorito é ${film}.`);
}
gostos('Vai malandra', 'As branquelas');

//-------- 05 ------//

function triplo(x){
    return x*3; 
}
console.log(triplo(2));