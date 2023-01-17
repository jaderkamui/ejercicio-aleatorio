let alumnos = [
    {
    id : "0001",
    rut :  11111111-1,
    nombre : "Juan",
    carrera : "Ing Administracion", 
    curso : 5
    },
    {
    id : "0002",
    rut :  12222222-1,
    nombre : "Diego",
    carrera : "Ing Electronica", 
    curso : 5
    },
    {
    id : "0003",
    rut :  133333333-1,
    nombre : "Pepe",
    carrera : "Ing Informatica", 
    curso : 5
    },
]

class Alumnos {
    constructor(id = "",rut = "" ,nombre = "",carrera = "", curso = 0){
        this.id = id;
        this.rut = rut;
        this.nombre = nombre;
        this.carrera = carrera;
        this.curso = curso;
    }


}
