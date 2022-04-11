import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // gologin(){
  //   this.router.navigate(['/login']);
  // }
}
