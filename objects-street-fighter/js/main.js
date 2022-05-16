//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function Fighter (name,health,stamina,superMove){
this.name = name
this.health = health
this.stamina=stamina
this.superMove = superMove

this.punch = function(){
    console.log('HAAADOUKEN')
}
this.kick = function(){
    console.log('KEEEEEYAAAAA')
}
this.fatality = function(){
    console.log('FINISH HIM/HER!!')
}
}

let chunLi = new Fighter('Chun Li',100,100,'Spinning Bird Kick')