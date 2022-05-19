const productos = [
    {id: 1, nombre: 'Escuadra', precio: 323.45},
    {id: 2, nombre: 'Calculadora', precio: 234.56},
    {id: 3, nombre: 'Globo Terráqueo', precio: 45.67},
    {id: 4, nombre: 'Paleta Pintura', precio: 456.78},
    {id: 5, nombre: 'Reloj', precio: 67.89},
    {id: 6, nombre: 'Agenda', precio: 78.90},
];

function ejercicio2() {
    const arrayDeNombres = productos.map(e => e.nombre);
    // console.log("Array de nombres : " , arrayDeNombres);
    const arrayDePrecios = productos.map(e => e.precio);
    const precioTotal = (productos.map(e => e.precio)).reduce((prev, curr) => prev + curr).toFixed(2);
    // console.log('Precio total: ', precioTotal);
    const precioPromedio = (precioTotal / arrayDePrecios.length).toFixed(2);
    // console.log('Precio promedio: ', precioPromedio);
    const productoMin = Math.min(...arrayDePrecios);
    // console.log('Producto min: ', productoMin);
    const productoMax = Math.max(...arrayDePrecios);
    // console.log('Producto max: ', productoMax);

    const data = [
        arrayDeNombres,
        arrayDePrecios,
        precioTotal,
        precioPromedio,
        productoMin,
        productoMax
    ];

    console.log(`This is the final data: ${data}`)
}

ejercicio2();