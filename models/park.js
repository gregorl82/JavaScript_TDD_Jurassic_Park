const Park = function(name, ticketPrice){

  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = [];

}

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
  this.dinosaurCollection = this.dinosaurCollection.filter(element => element !== dinosaur);
}

module.exports = Park
