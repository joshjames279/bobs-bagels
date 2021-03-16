class memberOfPublic {

    constructor(string){
        this.item = string;
        this.basket = [];
    }
    
    add() {
       this.basket.push(this.item);
       return this.basket;
    }

    remove() {
        for(let i = 0; i < this.basket.length; i++){ 
            if ( this.basket[i] === this.item) { 
               this.basket.splice(i, 1); 
            }
        }
        return this.basket;
    }
}

module.exports = memberOfPublic;