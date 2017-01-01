function Player(name) {
	this.name  = name;
	this.hp    = 100;
	this.sp    = 100;

	this.heal = function( targetPlayer ) {
		if (this.sp >= 40) {
			this.sp -= 40;
			targetPlayer.hp += 20;	
		} else {
			console.info(this.name + " no tiene sp suficientes.")
		}
		this.status(targetPlayer);	
	}

	this.attack = function( targetPlayer ) {
		if ( targetPlayer.hp > 40 ) {
			targetPlayer.hp -= 40;
			this.status(targetPlayer);	
		} else {
			targetPlayer.hp = 0;
			console.error(targetPlayer.name + " ha muerto.")
		}

	}

	this.status = function( targetPlayer ) {
		console.info( this );
		console.info( targetPlayer );
	}
}

var gandalf = new Player('Gandalf');
var legolas = new Player('Legolas');	


