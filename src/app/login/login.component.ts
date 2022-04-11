import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // router: any;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
  }

  // goregi(){
  //   this.router.navigate(['/regi']);
  // }
}
