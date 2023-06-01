function minhaCallBack() {
    console.log('esta é minha call back');
}

function Primeiro( minhaCallBack ) {
    console.log("Esta é minha função prinmeiro")
}

console.log( 'este é o conole', Primeiro());

setTimeout(minhaCallBack, 2000); 
console.log('este é o console do Marcus'); 



