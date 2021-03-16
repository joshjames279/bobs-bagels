class memberOfPublic {

    constructor(){
        this.basket = [];
        this.maximumBasketSize = 5;
    }
    
    add(item) {
        if (this.basket.includes(item)) {
            console.log( "Sorry that item is already in your basket. Sometimes you can have too much of a good thing, stop being so needy.")
            return( "Sorry that item is already in your basket. Sometimes you can have too much of a good thing, stop being so needy.")
        } else {
            if (this.basket.length < this.maximumBasketSize) {
                this.basket.push(item);
                return this.basket;    
            } else {
                console.log('Sorry, there are too many items in your basket. Stop being so greedy.')
                return('Sorry, there are too many items in your basket. Stop being so greedy.')
            }
        }
       
    }

  

    remove(item) {
        if (this.basket.includes(item)) {
            for(let i = 0; i < this.basket.length; i++){ 
                if ( this.basket[i] === item) { 
                   this.basket.splice(i, 1); 
                } 
            }
            return this.basket;
        } else {
            console.log("You can't remove something that doesn't exist. A bit like your hopes and dreams.")
            return("You can't remove something that doesn't exist. A bit like your hopes and dreams.")
        }

    }

      


    checkPrice(item, menu) {
        if (item in menu) {
            console.log(`Your ${item} will cost ${menu[item]}`)
            return(`Your ${item} will cost ${menu[item]}`)
    } else {
        console.log(`${item} is not in our menu. We think a trip to Specsavers may be in order.`)
        return `${item} is not in our menu. We think a trip to Specsavers may be in order.`
    }
    }

    checkout() {
        let basketvalue = 0
        for (var i = 0; i<this.basket.length;i++) {
            let item = this.basket[i];
            basketvalue += menu[item];
        }
        console.log(`Your basket total is ${basketvalue}. Thank you for your money. We will put it to 'good' use.`)
        return(`Your basket total is ${basketvalue}. Thank you for your money. We will put it to 'good' use.`)
    }
}

module.exports = memberOfPublic;