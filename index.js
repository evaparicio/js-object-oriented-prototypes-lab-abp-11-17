

function BoardMember(name, homestate, training) {
  this.name=name;
  this.homestate=homestate;
  this.training=training;
}

  let polishedBoardMember= new BoardMember("Mr. Polished", "New York", "law");
  let backSlappingGene= new BoardMember("Mr. Gene", "Delaware", "business");

BoardMember.prototype.veto = function () {
  return "No, I must disagree"
};

BoardMember.prototype.approve = function () {
  return "You can do that!"
};

BoardMember.prototype.doCharity = function () {
  return "I like to help people."
};

BoardMember.prototype.releasePressStatement = function () {
  return "You will see great things from Scuber."
};

debugger

BoardMember.prototype.sayHi = function () {
  return `Hi, my name is ${name}. I am from ${homestate}, and I was trained in ${training}.`
};
