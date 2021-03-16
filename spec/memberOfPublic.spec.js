//Write a program that you can run in your node that allows toy to add and remove a bagel from a basket
const menu = require('../src/menu');
const Manager = require('../src/manager');
const memberOfPublic = require('../src/memberOfPublic');



assertEquals = require('./test-framework');

const logic = () => {

    //Part 1 

    //case 1
    console.log('Testing that you can add a bagel to your basket');

    //1.Setup
    let checkAdd = new memberOfPublic();
    //2.Execute
    let result1 = checkAdd.add('plain-bagel');
    //3.Verify
    assertEquals(JSON.stringify(result1), JSON.stringify(['plain-bagel']));

    
    //case2
    console.log('Testing that you can remove a bagel from your basket');

    //1.Setup
    let checkRemove = new memberOfPublic();
    checkRemove.add('plain-bagel');
    //2.Execute
    let result2 = checkRemove.remove('plain-bagel');
    //3.Verify
    assertEquals(JSON.stringify(result2), JSON.stringify([]));


    //Part 2

    //case 1
        console.log("Testing that you can't overfill a small basket");
        //1.Setup
        let checkOverfill = new memberOfPublic();

        checkOverfill.add('plain-bagel')
        checkOverfill.add('avocado-bagel')
        checkOverfill.add('cheese-bagel')
        checkOverfill.add('salmon-bagel')
        checkOverfill.add('ham-bagel')

        //2.Execute
        let result3 = checkOverfill.add('hommous-bagel')

        //3.Verify
        assertEquals(result3, 'Sorry, there are too many items in your basket. Stop being so greedy.');
    
    //case 2
    console.log("Testing that a manager can give a bigger basket");
        //1.Setup
        let bobsBagelsManager = new Manager;
        let checkLargerSize = new memberOfPublic();
        
        bobsBagelsManager.giveBiggerBasket(checkLargerSize, 10);

        //2.Execute
        let result4 = checkLargerSize.maximumBasketSize;

        //3.Verify
        assertEquals(result4, 10);


    //case 3
    console.log("Testing that I can't remove an item I don't have");
        //1.Setup
        let checkRemoveNonExistent = new memberOfPublic();
        checkRemoveNonExistent.add('plain-bagel')
        checkRemoveNonExistent.add('avocado-bagel')
        
        //2.Executes
        let result5 = checkRemoveNonExistent.remove('cheese-bagel');

        //3.Verify
        assertEquals(result5, "You can't remove something that doesn't exist. A bit like your hopes and dreams.");


    //case 4
    console.log("Testing that can't add an item we already have");
        //1.Setup
        let checkAddExtra = new memberOfPublic();
        checkAddExtra.add('plain-bagel')
        
        //2.Execute
        let result6 = checkAddExtra.add('plain-bagel');
        //3.Verify
        assertEquals(result6, "Sorry that item is already in your basket. Sometimes you can have too much of a good thing, stop being so needy.");


            


    //Part 3

    //case 1
    console.log("Testing the price is displayed every time before adding a bagel");
        //1.Setup
        let checkPriceDisplay = new memberOfPublic();
        
        //2.Execute
        let result7 = checkPriceDisplay.checkPrice('avocado-bagel', menu);
        //3.Verify
        assertEquals(result7, `Your avocado-bagel will cost 100`);


    //case 2
        console.log("Testing the total sum is calculated upon checkout");
        //1.Setup
        let checkCheckout = new memberOfPublic();
        checkCheckout.add('plain-bagel')
        checkCheckout.add('avocado-bagel')
        checkCheckout.add('cheese-bagel')
        checkCheckout.add('salmon-bagel')
        checkCheckout.add('hommous-bagel')


        //2.Execute
        let result8 =checkCheckout.checkout();
        //3.Verify
        assertEquals(result8, `Your basket total is 270. Thank you for your money. We will put it to 'good' use.`);


            










}

module.exports = logic;