import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year : string = "2023"

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.year = new Date().getFullYear().toString();
  }

  hasRoute( route : string ): boolean {
    return this.router.url === route
  }

}
