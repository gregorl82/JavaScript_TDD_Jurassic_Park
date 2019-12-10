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

Park.prototype.mostVisitedDinosaur = function(){
  let mostVisited = this.dinosaurCollection[0];
  for (dinosaur of this.dinosaurCollection) {
    if (dinosaur.guestsAttractedPerDay > mostVisited.guestsAttractedPerDay) {
      mostVisited = dinosaur;
    }
  }
  return mostVisited;
}

Park.prototype.findDinosaursBySpecies = function(species){
  let foundDinosaurs = []
  for (dinosaur of this.dinosaurCollection) {
    if (dinosaur.species === species){
      foundDinosaurs.push(dinosaur);
    }
  }
  return foundDinosaurs;
}

module.exports = Park
