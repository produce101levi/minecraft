db = require('../util/database');

module.exports = class Pregunta {
    constructor(mi_question, mi_answer){
        this.question = mi_question;
        this.answer = mi_answer
    }

    save() {
        preguntas.push({
            question: this.question,
            answer: this.answer,
        })
    }

    static fetchAll() {
        return db.execute('SELECT * FROM sitio_preguntas');
    }
}