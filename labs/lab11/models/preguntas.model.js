const db = require('../util/database');

module.exports = class Pregunta {
    constructor(mi_question, mi_answer){
        this.question = mi_question;
        this.answer = mi_answer
    }

    save() {
        return db.execute(
            'INSERT INTO preguntas (Pregunta, respuesta, username) VALUES(?, ?, "levi_101")',
            [this.question, this.answer]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM preguntas');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM preguntas WHERE id=?',
        [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }
}