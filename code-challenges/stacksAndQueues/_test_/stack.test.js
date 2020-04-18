'use strict';

const Stack = require('../stack.js');

describe('stack operations', () => {
  it('can successfully push onto a stack', () => {
    let myStack = new Stack();
    myStack.push('red');
    expect(myStack.isEmpty()).toBe(false);
    expect(myStack.peek()).toBe('red');
  });

  it('can successfully push multiple nodes onto a stack', () => {
    let myStack = new Stack();
    myStack.push('red');
    myStack.push('yellow');
    myStack.push('purple');
    myStack.push('green');
    expect(myStack.isEmpty()).toBe(false);
    expect(myStack.peek()).toBe('green');
  });

  it('can Successfully pop from a stack', () => {
    let myStack = new Stack();
    myStack.push('red');
    myStack.push('yellow');
    myStack.push('purple');
    expect(myStack.isEmpty()).toBe(false);
    expect(myStack.peek()).toBe('purple');
    let poppedNode = myStack.pop();
    expect(poppedNode.val).toBe('purple');
  });

  it('can successfully peek at the top node of the stack', () => {
    let myStack = new Stack();
    myStack.push('red');

    expect(myStack.peek()).toBe('red');
  });

  it('can successfully instantiate an empty stack', () => {
    let myStack = new Stack();
    expect(myStack.isEmpty()).toBe(true);
    expect(myStack.top).toBe(null);

    expect(() => {
      myStack.peek();
    }).toThrow();
    expect(() => {
      myStack.pop();
    }).toThrow();
  });
});