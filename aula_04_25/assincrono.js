function obterDadosAssincronos(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const dados = {
                "nome" : 'jose carmino',
                "end" : 'rua sem nome sem numero'
            }
            resolve(dados);
        }, 2000);
    })
}

async function executar(){
    console.log('inicio da execução da função'); 
    try {
        const resultado = await obterDadosAssincronos();
        const resultado1 = await obterDadosAssincronos();
        const [res1, res2, res3] = await Promise.all([
            obterDadosAssincronos(),
            obterDadosAssincronos(),
            obterDadosAssincronos()
        ]);
        console.log(resultado, resultado1); 
        console.log('final da função executar');
    } catch (erro) {
        console.error( erro ); 
    }
}

executar(); 
console.log('está é alinha 25'); 
