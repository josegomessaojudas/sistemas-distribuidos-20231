function obterDadosAssincronos(){
    return new Promise((resolve, reject) => {
        for( a=0; a<=5; a = a +1 ){
            console.log('estou no obterDadosAssincronos');
        }
        setTimeout( () => {
            const dados = {
                "nome" : 'jose carmino',
                "end" : 'rua sem nome sem numero'
            }
            resolve(dados);
        }, 2000);
    })
}

obterDadosAssincronos()
.then((resultado) => {
    for( a=0; a<=5; a = a +1 ){
        console.log('estou dentro da promessa')
    }
    console.log(resultado);
})
.catch((erro) => {
    console.error(erro); 
})

for( a=0; a<=5; a = a +1 ){
    console.log('esta é alinha 18 do código')
}

