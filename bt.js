class Rectangle {
    width;
    height;
    constructor (width,height) {
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return (this.width + this.height) * 2;
    }

}
let myRectangle = new Rectangle(1150,150);
let width = myRectangle.getWidth();
let height = myRectangle.getHeight();

myRectangle.setWidth(1300);
myRectangle.getWidth();

document.write(myRectangle.getWidth());


let canvas = document.getElementById("name");
let ctx = canvas.getContext('2d');
ctx.fillStyle='#fa4b2a';
ctx.fillRect(10, 10, width, height)