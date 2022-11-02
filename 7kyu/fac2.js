//solution
function constructionWorker(firstName, lastName, age, gender, married, boss) {
    var w = person(firstName, lastName, age, gender, true, 'construction worker', married);
    w.boss = boss;
    w.sayBossName = function() {
      return `My boss is called ${this.boss} and is a very nice person!`;
    };
    return w;
  }