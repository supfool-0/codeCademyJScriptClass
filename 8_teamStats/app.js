const team = {
  _players: [
    {
      firstName: 'Jeri',
      lastName: 'Dilts',
      age: 31
    },
    {
      firstName: 'Doug',
      lastName: 'Dilts',
      age: 56
    },
    {
      firstName: 'Guapo',
      lastName: 'Dilts',
      age: 5
    }
  ],
  _games: [
    {
      opponent: 'VCU',
      teamPoints: 106,
      opponentPoints: 108
    },
    {
      opponent: 'UVR',
      teamPoints: 108,
      opponentPoints: 106
    },
    {
      opponent: 'JMU',
      teamPoints: 110,
      opponentPoints: 104
    }
  ],
  
  // getters
  get players(){return (this._players);},
  get games(){return (this._games);},
  
  //methods
  addPlayer(firstName,lastName,age){
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this.players.push(player);
  },
  
  addGame(opponent, teamPoints, opponentPoints){
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this.games.push(game);
  }
}


//*********************************************************************
team.addPlayer('Step','Curry', 28);
team.addPlayer('Lisa','Leslie', 44);
team.addPlayer('Bugs','Bunny', 76);
team.addGame('GMU',1,99);
team.addGame('WVU',2,100);

// did they add? yep
console.log(team.players)
console.log(team.games)
