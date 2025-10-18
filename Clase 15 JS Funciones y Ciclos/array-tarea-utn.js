/* array-tarea-utn */

/* 1. push() - Añadir al Final
Objetivo: Agregar un nuevo elemento al final de una lista.
Ejercicio: Tienes una lista de tareas: let tareas = ["Estudiar JS", "Hacer la compra"]. Usa el
método push() para añadir una nueva tarea al final: "Pasear al perro". Luego, imprime la
lista completa. */

let tareas = ["Estudiar JS", "Hacer la compra"]
 tareas.push("Pasear al perro")
// console.log(tareas)

/* 2. pop() - Eliminar el Último
Objetivo: Eliminar el último elemento de un array.
Ejercicio: Usando la lista de tareas del ejercicio anterior, usa pop() para simular que
terminaste la última tarea. Imprime el elemento que se eliminó y luego la lista fina */


tareas.pop()
// console.log(tareas)

/* 3. unshift() - Añadir al Principio
Objetivo: Agregar un nuevo elemento al principio de un array.
Ejercicio: Tienes una lista de invitados: let invitados = ["Ana", "Luis", "Carlos"]. Usa unshift()
para agregar a "María" como la primera invitada */

let invitados = ["Ana", "Luis", "Carlos"]
invitados.unshift("Maria")

/* 4. shift() - Eliminar el Primero
Objetivo: Eliminar el primer elemento de un array.
Ejercicio: De la lista de invitados, usa shift() para eliminar y mostrar quién fue el primer
invitado en irse.
Pista: shift() no necesita argumentos
*/

invitados.shift()

/* 5. splice() - Reemplazar en Medio
Objetivo: Reemplazar un elemento en una posición específica.
Ejercicio: Tienes una lista de colores: let colores = ["Rojo", "Verde", "Azul", "Amarillo"]. El
color "Verde" (índice 1) es incorrecto; debe ser "Naranja". Usa splice() para reemplazar
solo ese elemento. */

let colores = ["Rojo", "Verde", "Azul", "Amarillo"]
colores.splice(1,1,"Naranja")

/* 
6. sort() - Ordenar
Objetivo: Ordenar números de forma ascendente.
Ejercicio: Tienes un array de puntuaciones: let puntos = [40, 100, 1, 5, 25, 10]. Usa sort()
con una función de comparación para ordenarlos de forma ascendente (del menor al
mayor).
Pista: La función de comparación para números debe ser (a, b) => a - b. */

let puntos = [40, 100, 1, 5, 25, 10]
puntos.sort((a, b) => a - b)


/* 
7. forEach() - Iterar
Objetivo: Recorrer un array y ejecutar una acción por cada elemento.
Ejercicio: Tienes una lista de estudiantes: let alumnos = ["Elena", "David", "Sofia"]. Usa
forEach() para imprimir un saludo personalizado para cada uno en la consola: "¡Hola,
[Nombre]! Bienvenido/a."
Pista: La función callback de forEach() recibe el elemento como primer argumento
 */

let alumnos = ["Elena", "David", "Sofia"]

alumnos.forEach((item) => {
    // console.log(`Hola ${item}` )
})

/* 
8. map() - Transformar
Objetivo: Crear un nuevo array transformando cada elemento del original.
Ejercicio: Tienes un array de frutas en minúscula: let frutas = ["manzana", "banana", "uva"].
Usa map() para crear un nuevo array llamado frutasMayusculas donde todas las frutas
estén en MAYÚSCULAS. */

let frutas =["manzana", "banana", "uva"]

frutasMayusculas = frutas.map(item => item.toUpperCase())

const frutasMay = frutas.map(function(item){return item.toLocaleUpperCase()}
)

/* 
9. filter() - Filtrar
Objetivo: Crear un nuevo array solo con los elementos que cumplan una condición.
Ejercicio: Tienes una lista de notas: let notas = [4, 8, 3, 9, 6, 5]. Usa filter() para crear un
nuevo array llamado aprobados que contenga solo las notas que son mayores o iguales a
7.
Pista: La condición dentro del filter() debe devolver true o false (nota >= 7) */

let notas = [4, 8, 3, 9, 6, 5]
let aprobados = notas.filter(item => item >=7)
const aproba = notas.filter(function(item) { return item >=6})

/* 10. reduce() - Acumular
Objetivo: Sumar todos los valores de un array para obtener un único resultado.
Ejercicio: Tienes un array de precios: let precios = [25.50, 10.00, 5.25, 50.00]. Usa reduce()
para calcular el monto total de la factura.
Pista: La función callback de reduce() siempre debe devolver el acumulador actualizado */

let precios = [25.50, 10.00, 5.25, 50.00]
total = precios.reduce((a, b) => a + b)
maximo = precios.reduce( function(a, b){
    // console.log(a)
    // console.log(b)
   return Math.max(a*8, b+3)
})

/* 11. find() - Encontrar el Primer Elemento
Objetivo: Encontrar el primer objeto que cumple una condición específica.
Ejercicio: Tienes una lista de productos: let productos = [{id: 101, nombre: "Lápiz"}, {id: 102,
nombre: "Cuaderno"}]. Usa find() para obtener el objeto completo del producto cuyo id es
102.
Pista: La condición debe verificar si el producto.id es exactamente igual a 102. */

let productos = [{id: 101, nombre: "Lápiz"}, {id: 102, nombre: "Cuaderno"}]
let prod102 = productos.find(item => item.id === 102)
let produ102 = productos.find( function(item){
    return item.id === 101
})

/* 
12. findIndex() - Encontrar el Índice
Objetivo: Encontrar la posición (índice) de un elemento.
Ejercicio: Usando el array productos del ejercicio anterior, usa findIndex() para saber en
qué índice se encuentra el producto llamado "Lápiz".
Pista: La condición debe verificar si producto.nombre es igual a "Lápiz
 */


let lapizIndex = productos.findIndex(item => item.nombre === "Lápiz")
/* 
13. every() - Verificar Todos
Objetivo: Comprobar si todos los elementos cumplen una regla.
Ejercicio: Tienes una lista de edades: let edades = [22, 18, 30, 25]. Usa every() para
comprobar si TODOS los elementos son mayores o iguales a 18. Imprime el resultado (true
o false).
Pista: every() solo retorna true si la condición es cierta para todos los elementos sin
excepción */

let edades = [22, 18, 30, 25]

let mayor18 = edades.every (item => item >= 18) 
let mayor = edades.every (function(item) {return item > 18}) 
console.log(mayor)


