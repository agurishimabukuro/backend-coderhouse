class usuario {
    constructor(nombre, apellido, libros, mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
    }
    
    getFullName(){
        return console.log(
            `El nombre del usuario es ${this.nombre} ${this.apellido}`
        )
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    countMascotas(){
        return console.log(this.mascotas.length)
    }

    addBook(libro, autor){
        this.libros.push({libro: libro, autor:autor});
    }

    getBooks(){
        let arrayLibro=[];
        for (let i=0;i<this.libros.length;i++){
            arrayLibro.push(this.libros[i].libro);
        }
        return arrayLibro;
    }

}

const Aguri = new usuario ("Aguri" , "Shimabukuro" , [{libro: "el corazon delator" , autor: "Edgar Allan Poe"}] , ["Gato","Perro"] );

Aguri.getFullName();
console.log(`Mascota = ${Aguri.mascotas}`)

console.log(Aguri)

Aguri.countMascotas()

Aguri.addMascota("Pájaro");

console.log(Aguri)

Aguri.addBook("Spider man", "Stan Lee");


console.log(Aguri.getBooks())

console.log(Aguri)