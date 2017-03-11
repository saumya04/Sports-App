import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router' ;

@Component({
	templateUrl: 'player-details.component.html'
})

export class PlayerDetailsComponent implements OnInit {

	constructor(
		private appService: AppService,
		private formBuilder: FormBuilder,
		private route: ActivatedRoute
	) { }
	
	ngOnInit() {
		this.subscribeRoute();
	}

	subscribeRoute() {
		this.route.params
			    .subscribe(
			    	(params) => {
			    		// console.log(params);
			    	}
		    	)
	}
	
}