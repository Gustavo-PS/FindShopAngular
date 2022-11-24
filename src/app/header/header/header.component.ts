import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token: any
  hide: boolean = false

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    if(!this.token){
      this.hide = true
    }
  }

  sair(){
    localStorage.clear()
    this.token = undefined
    this.router.navigate(['/login']);
  }

}
