//? Fifo en js
//! 1-Intente hacer una mezcla entre el de Jose y el de usted Profe, pero no me deja correr la funciones como funciones flecha ()=>{} me da un error de propiedad
//! 2 - El codigo de Jose, que utilize como base le quite algunas cosas que considere no necesarias para la tarea, aunque esteticamente se veria "bonito" no creo 
//! que sea practico, aparte intente hacer unos trow errorException pero me daba fallas igual, así que lo deje así, creo que mas nada que decir.
let Queue = { 
    items: [],
    limit: 10,

    add: function (e) {
        if (this.items.length < this.limit) {
            this.items.push(e);
        } else return false;
    },
    offer1: function (index) {
        this.items.push(index);
        return true;
    },
    offer2: function (index) {
        if (this.items.length >= this.limit) {
            this.items.pop();
            this.items.push(index);
            return true;
        } else return false;
    },
    element: function () {
        return this.items[0];
    },
    peek: function () {
        if (this.items.length === 0) {
            return null;
        } else return this.items[0];
    },
    poll: function () {
        if (this.items.length === 0) {
            return null;
        }
        let rtn = this.items[0];
        this.items.shift();
        return rtn;
    },
    remove: function () {
        let rtn = this.items[0];
        this.items.shift();
        return rtn;
    },
    size: function () {
        return this.items.length;
    },
    is_empty: function () {
        return this.items.length === 0;
    },
};

let Q = Queue;
Q.add(1);
Q.add(2);
Q.add(3);
Q.add(4);
Q.add(5);
console.log(Q.peek());
console.log(Q.offer1(2));
console.log(Q.offer2(3));
console.log(Q.element());
console.log(Q.is_empty());
console.log(Q.size());
console.log(Q.peek());
console.log(Q.element());
console.log(Q.poll());
console.log(Q.element());
console.log(Q.remove());
console.log(Q.size());
console.log(Q.is_empty());
