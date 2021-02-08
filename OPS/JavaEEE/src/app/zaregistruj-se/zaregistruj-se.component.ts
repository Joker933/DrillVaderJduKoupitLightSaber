import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Uzivatel} from '../Uzivatel';

@Component({
  selector: 'app-zaregistruj-se',
  templateUrl: './zaregistruj-se.component.html',
  styleUrls: ['./zaregistruj-se.component.scss']
})
export class ZaregistrujSeComponent implements OnInit {

  prijmeni: string;
  prvniJmeno: string;
  jmeno: string;
  email: string;
  heslo: string;
  url = 'http://localhost:4200/EducanetWebik/api/User/register';

  constructor(private activatedRouter: ActivatedRoute, private http: HttpClient, private router: Router) { }

  posli() {
    const body: Uzivatel = {
      prijmeni: this.prijmeni,
      prvniJmeno: this.prvniJmeno,
      jmeno: this.jmeno,
      email: this.email,
      heslo: this.heslo
    };
  }

  ngOnInit() {
  }

}
