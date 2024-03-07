const db = require('../util/database');


module.exports = class Construccion {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
            return db.execute('INSERT INTO construccion (nombre, imagen) VALUES (?, ?, "levi_.101")',
            [this.nombre, this.imagen]
    );
}

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM `construccion`');
        
    }

}