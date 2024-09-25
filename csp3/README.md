#CSP #3.1

## String

Es un tipo de dato usado para representar texto. También es conocido como character string o cadena de caracteres en Español.

En JavaScript un string se puede crear de las siguientes formas:

- `'Hello World!' // single quotes/comillas simples`
- `"Hello World!" // double quotes/comillas dobles`
- `` `Hello World!` // backtick/comillas invertidas``

### Operaciones

JavaScript nos permite realizar las siguientes operaciones con strings:

#### Comparación

- `"a" > "b" // false`
- `"a" < "b" // true`
- `"a" === "a" // true`

#### Concatenación

- `"ho" + "la" // da como resultado "hola"`

## Argumentos de linea de comandos

A la información que le pasamos a un programa o script, se le llama argumentos.
Al ejecutar un script con node, usamos la terminal, tambien conocida como linea de comandos. Y de ahi viene el nombre, argumentos de linea de comandos.
Es la informacion que le pasamos al script que vamos a correr, al ejecutarlo desde la terminal.

Para ver un ejemplo en accion, corre el script llamado argumentos, dentro de la carpeta ejemplo1.

`node ./csp3/ejemplo1/argumentos.js`

Al correrlo, deberias ver un mensaje que dice: 

`El contenido de process.argv es: ` 

Seguido de 2 argumentos separados por comas. 
- El primero es la ruta absoluta de node en tu computadora.
- El segundo es la ruta absoluta del script que ejecutaste, en este caso argumentos.js.

Vuelve a correr el script argumentos.js pero esta vez agrega tu nombre al final:

`node ./csp3/ejemplo1/argumentos.js Horacio`
 
Esta vez deberias ver tu nombre al final de la lista de argumentos separados por comas.

Ahora, ejecuta el script dentor de la carpeta ejemplo2 de la siguiente manera:

`node ./csp3/ejemplo2/argumentos.js Horacio`

Deberias ver un mensaje que dice: Hola, Horacio

Puedes cambiar el valor del argumento y ver los resultados:

- `node ./csp3/ejemplo2/argumentos.js Mundo`
- `node ./csp3/ejemplo2/argumentos.js 2024`

Abre el archivo /csp3/ejemplo2/argumentos.js para ver como leer el valor de nuestro argumento.

Por ahora, es suficiente con saber que para leer el argumento que nosotros especificamos al ejecutar nu script en node, lo hacemos usando la siguiente expresion: 
- `process.argv[2]`

Que pasa si queremos usar nuestro argumento para realizar una operacion aritmetica?

Ejecuta el script /csp3/ejemplo3/argumentos.js:

- `node ./csp3/ejemplo3/argumentos.js 2`

Notas algo raro? El resultado de la operacion es incorrecto.

Por que? 

