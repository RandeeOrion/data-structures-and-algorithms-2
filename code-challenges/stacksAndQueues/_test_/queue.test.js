'use strict';

let Queue = require('../queue.js')


describe('Testing the Queue', () => {
  it('Can successfully enqueue into a queue', () => {
    let myQueue = new Queue();
    myQueue.enqueue('Blah');
    expect(myQueue.peek()).toBe('Blah');
  });

  it('Can successfully enqueue Multiple values into a queue', () => {
    let myQueue = new Queue;
    myQueue.enqueue('Blah');
    myQueue.enqueue('Stuff');
    expect(myQueue.peek()).toBe('Blah');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let myQueue = new Queue;
    myQueue.enqueue('Blah');
    myQueue.enqueue('Stuff');
    myQueue.enqueue('KindOf');
    expect(myQueue.dequeue().val).toBe('Blah')
  });

  it('Can successfully peek into a queue, seeing the expected value',() => {
    let myQueue = new Queue;
    myQueue.enqueue('Blah');
    myQueue.enqueue('Stuff');
    myQueue.enqueue('KindOf');
    expect(myQueue.peek()).toBe('Blah');
  });

  it('Can successfully empty a queue after multiple dequeues',() => {
    let myQueue = new Queue;
    myQueue.enqueue('Blah');
    myQueue.dequeue();
    expect(myQueue.isEmpty()).toBe();
  });

  it('Can successfully instantiate an empty queue',() => {
    let myQueue = new Queue;
    myQueue.enqueue('Nope, Not EMPTY!');
    expect(myQueue.isEmpty()).toBe();
  });

  it('Calling dequeue or peek on empty queue raises exception',() => {
    let myQueue = new Queue;
    expect(myQueue.peek()).toThrow('NullReferenceException');
  });

})