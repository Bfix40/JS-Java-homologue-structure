class Queue {
    constructor() {
        this.items = [];
        this.limit = 10;
    }

    add(item) {
        if (this.items.length < this.limit) {
            this.items.push(item);
            return true;
        }
        return false;
    }

    element() {
        return this.items[0];
    }

    offer1(items) {
        this.items.push(items);
        return true;
    }

    offer2(items) {
        if (this.items.length >= this.limit) {
            this.items.pop();
            this.items.push(items);
            return true;
        }
        return false;
    }

    peek() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[0];
    }

    poll() {
        if (this.items.length === 0) {
            return null;
        }
        let aux = this.items[0];
        this.items.shift();
        return aux;
    }

    remove() {
        let aux = this.items[0];
        this.items.shift();
        return aux;
    }

    is_empty() {
        return this.length === 0;
    }

    size() {
        return this.items.length;
    }
}

const queue = new Queue();

queue.add(10);
queue.add(11);
queue.add(12);
queue.add(13);
queue.add(14);
queue.add(15);
queue.add(16);
queue.add(17);
queue.add(18);
queue.add(19);
queue.add(20);

console.log(queue.add(21));
console.log(queue.offer1(22));
console.log(queue.offer2(23));
console.log(queue.items);
console.log(queue.peek());
console.log(queue.peek());
console.log(queue.poll());
console.log(queue.poll());
console.log(queue.size());
console.log(queue.is_empty());
