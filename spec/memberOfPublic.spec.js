//Write a program that you can run in your node that allows toy to add and remove a bagel from a basket

assertEquals = require('./test-framework');

const logic = () => {
    //case 1
    console.log('Testing that you can add a bagel to your basket');

    //1.Setup
    let checkAdd = new memberOfPublic('bagel');
    //2.Execute
    let result1 = checkAdd.add();
    //3.Verify
    assertEquals(JSON.stringify(result1), JSON.stringify(['bagel']));

    
    //case2
    console.log('Testing that you can remove a bagel from your basket');

    //1.Setup
    let checkRemove = new memberOfPublic('bagel');
    //2.Execute
    let result2 = checkRemove.remove();
    //3.Verify
    assertEquals(JSON.stringify(result2), JSON.stringify([]));
}

module.exports = logic;