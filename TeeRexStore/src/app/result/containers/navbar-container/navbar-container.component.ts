import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.scss'],
})
export class NavbarContainerComponent implements OnInit {
  cartDataCount:number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartArrayCount().subscribe((data:number)=>{
      this.cartDataCount = data;
    });
  }

  navigateToProducts() {
    this.router.navigate(['results', { relativeTo: this.route }]);
  }

  navigateToCart() {
    this.router.navigate(['cart', { relativeTo: this.route }]);
  }
}
