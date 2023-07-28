const Food=require('../index.js');

class minfood extends Food{
    constructor(vag1,vag2,vag3,vag4,vag5,vag6,vag7,vag8){
        super(vag1,vag2,vag3,vag4,vag5)
        this.vag6=vag6;
        this.vag7=vag7;
        this.vag8=vag8;
    }
    ingredient(){
        return `${this.vag4},${this.vag2},${this.vag5},${this.vag7},${this.vag1}`;
        }
}

let sup = new minfood("tovuq","sabzi","piyoz","kartoshka","tuz","zira","baliq","yog")

console.log(sup.ingredient())