class Shape {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('move');
    }
}

export class Circle extends Shape {
    constructor(color) {
        super(color);
        this.size = 10;
    }
    draw() {
        console.log('draw');
    }
}
