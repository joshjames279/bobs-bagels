const assertEquals = (num1, num2) => {
    if(num1 === num2){
    console.log('\x1b[32m%s\x1b[0m', num1 === num2);
    } else {
        console.log('\x1b[31m%s\x1b[0m', num1 === num2);
        console.log('Sorry the value is not as expected');
    }
}

module.exports = assertEquals;