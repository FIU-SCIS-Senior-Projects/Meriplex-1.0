import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mplx-login',
  templateUrl: './mplx-login.component.html',
  styleUrls: ['./mplx-login.component.css']
})
export class MplxLoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(e) {

    e.preventDefault();
    var email = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    alert("Ready to POST:\n" + email + "\n" + password);
  }

  // const req = this.http.post('http://www.mocky.io/v2/59adf9a42d000015109b7edb', {
  //     email: e.target.elements[0].value,
  //     password: e.target.elements[1].value,
  //     userId: 1
  //   })
  //     .subscribe(
  //       res => {
  //         alert(res);
  //       },
  //       err => {
  //         alert("Error occured");
  //       }
  //     );

  // }

}
