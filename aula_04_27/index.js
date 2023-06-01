function obterDadosAssincronos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dados = 'Dados obtidos assincronamente';
        resolve(dados);
      }, 2000);
    });
  }
  
  async function executar() {
    console.log('Início da execução assíncrona');
  
    try {
      const resultado = await obterDadosAssincronos();
      console.log(resultado);
      console.log('Fim da execução assíncrona');
    } catch (erro) {
      console.error('Erro:', erro);
    }
  }
  
  executar();
  console.log("executando o dado depois");

   //---------
  
   async function executarMultiplasOperacoes() {
    const resultado1 = await obterDadosAssincronos1();
    const resultado2 = await obterDadosAssincronos2();
    
    console.log(resultado1);
    console.log(resultado2);
  }

  //----
  async function executarOperacoesSimultaneas() {
    const [resultado1, resultado2] = await Promise.all([
      obterDadosAssincronos1(),
      obterDadosAssincronos2()
    ]);
    
    console.log(resultado1);
    console.log(resultado2);
  }
  

// o tpusa tem como valor 
// 0 - para visitante
// 1 - para administrador

/*
let usuario = [
    {
        email: 'jose@gomes.com.br',
        senha: '123456',
        tpusa: 1
    },
    {
        email: 'maria@gomes.com.br',
        senha: '123456',
        tpusa: 0
    },
];

const REQ1 = "Consultar receitas"
const REQ2 = "Manter tipos de comida"
const REQ3 = "Manter receitas"

function autenticacao(email, senha){
    let meuusario = usuario.find( u => u.email === email && u.senha === senha);
    if(meuusario){
        if(meuusario.tpusa == 1 ){
            console.log("O administrador pode acessar ", REQ1, REQ2, REQ3)
        } else {
            console.log("O visitante pode acessar somente,", REQ1)
        }
    } else {
        console.log("usuario ou senha invalido");
    }
}

autenticacao('jose@gomes.com.br', '123456');
autenticacao('jose@gomes.com.br', '123457');
*/