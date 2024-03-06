

class Rectangle{
    constructor(width, hight){
        this.width = width;
        this.hight = hight;
    }

    set width(newWidth){
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Width must be a positive number");
        }
    }

    set hight(newHight){
        if (newHight > 0) {
            this._hight = newHight;
        }
        else {
            console.error("Hight must be a positive number");
        }
    }

    get width(){
        return this._width.toFixed(1) + "cm";
    }

    get hight(){
        return this._hight.toFixed(1) + "cm";
    }

    get area(){
        return (this._width * this._hight).toFixed(1) + "cm^2";
    }
}

const rectangle = new Rectangle(3, 4);

rectangle.width = 5;
rectangle.hight =10;


console.log(rectangle.width);
console.log(rectangle.hight);
console.log(rectangle.area);