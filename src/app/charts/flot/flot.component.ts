import { Component, OnInit } from '@angular/core';
import { FlotInit } from './FlotInit';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {

  type: string = 'N/A';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    FlotInit();

    // Method 1
    this.route.params.subscribe(param => {
      this.type = param['type'];
    })

    // Method 2
    // this.type = this.route.snapshot.params['type']

  }
}

