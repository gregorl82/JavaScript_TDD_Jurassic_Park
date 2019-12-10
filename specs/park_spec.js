const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;

  beforeEach(function () {
    park = new Park("Jurassic Park", 33);
    dinosaur1 = new Dinosaur("Tyrannosaurus", "carnivore", 4500);
    dinosaur2 = new Dinosaur("Triceratops", "herbivore", 2800);
    dinosaur3 = new Dinosaur("Ornithomimus", "omnivore", 1200);
    dinosaur4 = new Dinosaur("Brachiosaurus", "herbivore", 5025);
    dinosaur5 = new Dinosaur("Tyrannosaurus", "carnivore", 4200);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 33);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur2);
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.mostVisitedDinosaur();
    assert.strictEqual(actual, dinosaur4);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const actual = park.findDinosaursBySpecies("Tyrannosaurus");
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur5]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.numberOfVisitorsPerDay();
    assert.strictEqual(actual, 13525);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.numberOfVisitorsPerYear();
    assert.strictEqual(actual, 4936625)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.annualRevenue()
    assert.strictEqual(actual, 162908625)
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.removeDinosaurBySpecies("Tyrannosaurus");
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3, dinosaur4]);
  });

  it('should be able to return the number of dinosaurs in the park of each diet type', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const actual = park.getNumbersByDiet()
    assert.deepStrictEqual(actual, {'carnivore': 2, 'herbivore': 2, 'omnivore': 1})
  })

});
