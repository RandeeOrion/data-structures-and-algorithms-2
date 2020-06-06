'use strict';

const Animal = require('./animal.js');


class AnimalShelter {
  constructor(kind) {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    if(animal.toLowerCase() !== 'cat' && animal.toLowerCase() !== 'dog') {
      throw Error('Only cats or dogs allowed here, bub. Take your parrot and keep on walkin\'.');
    }
    let newAnimal = new Animal(animal);

    if(!this.front){
      this.front = newAnimal;
      this.rear = newAnimal;
    }

    this.rear.next = newAnimal;
    this.rear = newAnimal;

    return;
  }

  dequeue(animal){
    if(!this.front){
      return 'Woop! No creatures needing hope at this time. Check back soon, though.'
    }
    if (animal.toLowerCase() !== 'cat' ||  animal.toLowerCase() !== 'dog'){
      return null
    } 
    let currentAnimal = this.front
    let prevAnimal = null;
    while(currentAnimal){
      if (currentAnimal.species === animal.toLowerCase()){
      dequeueAnimal = currentAnimal;
      break;
      } else {
        prevAnimal = currentAnimal;
        currentAnimal = currentAnimal.next;
      }
    }
    if(animal.toLowerCase() === cat){
    return `Shootskies! No ${animal}s in this shelter right now. Can we interest you in pup?`
    } else {
      return `Shootskies! No ${animal}s in this shelter right now. Can we interest you in cat?`
    }
  }

}

