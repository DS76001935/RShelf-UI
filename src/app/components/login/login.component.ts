import { Component, Input, OnInit, ViewChild } from "@angular/core";

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  signUpButton: any
  signInButton: any

  constructor(){}

  ngOnInit(): void {

  }
}
