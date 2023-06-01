function obterDadosAssincronos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dados = 'Dados obtidos assincronamente';
        resolve(dados); // Resolve a Promise com os dados obtidos
        // Caso ocorra algum erro, podemos chamar reject(new Error('Mensagem de erro'));
      }, 2000); // Espera 2 segundos antes de resolver a Promise
    });
  }
  
  // Utilizando a Promise
  obterDadosAssincronos()
    .then((resultado) => {
      console.log(resultado); // Dados obtidos assincronamente
    })
    .catch((erro) => {
      console.error(erro); // Trata erros caso ocorram
    });
  