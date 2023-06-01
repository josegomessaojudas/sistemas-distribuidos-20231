function minhaCallback() {
    console.log('O callback foi executado!');
  }
  
  setTimeout(minhaCallback, 2000);


  setTimeout(() => {
    console.log('O callback anônimo foi executado!');
  }, 2000);
  