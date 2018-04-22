
// ###Unit Tests
//
// You need to write unit tests to ensure that the majority of functions in the calculator operate correctly. The test framework to be used is Mocha. The file to write in is in `/tests/unit/calculator_spec.js`.
//
// All of these functions should be tested thoroughly:

var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  //   - calculator.add()
  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  })

  it('can add - larger numbers', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(755555, calculator.runningTotal);
  })

  //   - calculator.subtract()
  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(2, calculator.runningTotal);
  })

  it('can subtract - resulting in negative number', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick("-");
    calculator.numberClick(9);
    calculator.operatorClick("=");
    assert.equal(-5, calculator.runningTotal);
  })

  //   - calculator.multiply()
  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick("*");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(8, calculator.runningTotal);
  })

  it('can multiply -bigger numbers', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.equal(80000000, calculator.runningTotal);
  })

  //   - calculator.divide()
  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(4, calculator.runningTotal);
  })

  it('can divide - and display a decimal result', function(){
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick("/");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(2.25, calculator.runningTotal);
  })

  //   - calculator.numberClick()
  it('can click on a number - 0', function(){
    calculator.clearClick();
    calculator.numberClick(0);
    assert.equal(0, calculator.runningTotal);
  })

  it('can click on a number - 1', function(){
    calculator.clearClick();
    calculator.numberClick(1);
    assert.equal(1, calculator.runningTotal);
  })

  it('can click on a number - 2', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    assert.equal(2, calculator.runningTotal);
  })

  it('can click on a number - 3', function(){
    calculator.clearClick();
    calculator.numberClick(3);
    assert.equal(3, calculator.runningTotal);
  })

  it('can click on a number - 4', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    assert.equal(4, calculator.runningTotal);
  })
  it('can click on a number - 5', function(){
    calculator.clearClick();
    calculator.numberClick(5);
    assert.equal(5, calculator.runningTotal);
  })
  it('can click on a number - 6', function(){
    calculator.clearClick();
    calculator.numberClick(6);
    assert.equal(6, calculator.runningTotal);
  })
  it('can click on a number - 7', function(){
    calculator.clearClick();
    calculator.numberClick(7);
    assert.equal(7, calculator.runningTotal);
  })

  it('can click on a number - 8', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    assert.equal(8, calculator.runningTotal);
  })

  it('can click on a number - 9', function(){
    calculator.clearClick();
    calculator.numberClick(9);
    assert.equal(9, calculator.runningTotal);
  })

  //   - calculator.operatorClick()
  it('can click on an operator - divide', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick("/");
    assert.equal(8, calculator.runningTotal);
    assert.equal("/", calculator.previousOperator);
  })

  it('can click on an operator - multiply', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick("*");
    assert.equal(8, calculator.runningTotal);
    assert.equal("*", calculator.previousOperator);
  })

  it('can click on an operator - add', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick("+");
    assert.equal(8, calculator.runningTotal);
    assert.equal("+", calculator.previousOperator);
  })

  it('can click on an operator - subtract', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick("-");
    assert.equal(8, calculator.runningTotal);
    assert.equal("-", calculator.previousOperator);
  })

  //   - calculator.clearClick()
  it('can click on clear button', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

});
