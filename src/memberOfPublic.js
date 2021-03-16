class memberOfPublic {

    constructor(string){
        this.string = string;
        this.array = [];
    }
    
    add() {
       this.array.push(this.string);
       return this.array;
    }

    remove() {
        for(let i = 0; i < this.array.length; i++){ 
            if ( this.array[i] === this.string) { 
               this.array.splice(i, 1); 
            }
        }
        return this.array;
    }
}

module.exports = memberOfPublic;