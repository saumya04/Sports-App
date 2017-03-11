import { Injectable } from '@angular/core';
import { Storage } from '../utilities/storage';

@Injectable()
export class AppService {
	private players;
	
	constructor(private storage: Storage) {
		this.players = this.storage.get('players');
	}

	addNewPlayer(obj: Object) {
		if(!this.players) {
			this.players = [];
		}

		this.players.push(obj);
		this.updatePlayers();
	}

	updatePlayers() {
		this.storage.set('players', this.players);
	}

	getPlayers() {
		return this.players;
	}

	deletePlayer(id: string) {
		this.players = this.players.filter(
			(element, index) => {
				if(element.id == id) {
					return false;
				}
				return true;
			}
		);

		this.updatePlayers();
	}

}