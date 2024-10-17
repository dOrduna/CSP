const añoNacimiento = process.argv[2]; 
console.log('contenido de argv:'+process.argv)
const añoActual = new Date().getFullYear();
const años = añoActual - añoNacimiento;

console.log(`Tienes ${años} años`);
