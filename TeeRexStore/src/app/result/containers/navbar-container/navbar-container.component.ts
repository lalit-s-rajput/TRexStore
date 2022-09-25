import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.scss']
})
export class NavbarContainerComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  navigateToProducts(){
    this.router.navigate(['results',{relativeTo:this.route}]);
  }

  navigateToCart(){
    this.router.navigate(['cart',{relativeTo:this.route}]);
  }
}
