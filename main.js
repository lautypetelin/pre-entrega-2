let flag = true;
let saldo = 0;

do{
  let opcion = parseInt(prompt('¡Bienvenido a Banco Coderhouse!\n' +
    'Seleccione una opción:\n\n' + 
    '1. Consultar saldo:\n' + 
    '2. Depositar\n' + 
    '3. Extraer.\n' + 
    '4. Salir.'
  ));

  switch(opcion) {
    case 1:
      alert('Saldo actual: $' + saldo);
      break;
    case 2:
      let deposito = parseFloat(prompt('¿Cuánto desea depositar?'));
      
      while(deposito < 0 || isNaN(deposito)){
        deposito = parseFloat(prompt('El monto a ingresar debe ser positivo\n' +
          'Ingrese un monto nuevamente:'
        ));
      }
      saldo += deposito;
      alert('Deposito exitoso.');
      break;
    case 3:
      let extraccion = parseFloat(prompt('¿Cuánto desea extraer?'));

      while(extraccion < 0 || isNaN(extraccion)){
        extraccion = parseFloat(prompt('El monto a extraer debe ser positivo\n' +
          'Ingrese un monto nuevamente:'
        ));
      }

      if((saldo - extraccion) < 0){
        alert('Saldo insuficiente.')
        break;
      }else{
        saldo -= extraccion;
        alert('Extracción exitosa.');
      }
      break;
    case 4:
      flag = false;
      alert('¡Hasta pronto!');
      break;
    default:
      alert('Opción inválida.');
  }

}while(flag);