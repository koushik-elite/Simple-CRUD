import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.interface';
import { RegisterService } from '../services/register.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  public name:String;

  constructor(private _regService: RegisterService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      
		this._regService.getUser(2).subscribe(
		  data => {
			this.name = data.data.first_name;
		  },
		  err => console.error(err),
		  () => console.log('done')
		);
		})
	}
}