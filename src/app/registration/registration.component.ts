import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    /*
    this.http.post("http://localhost:8080/Stogging-BackEnd/api/cliente",
    {
      "email": "testeEEEEEE@teste.com",
      "endereco": {
          "cidade": "itajai",
          "estado": "sc",
      },
      "login": {
          "username": "rafael",
          "senha": "senha"
      },
      "nome": "TESTEZERA"
    })
    .subscribe(
      data =>{
        console.log("Fez o post", data);
      },
      error => {
        console.log("Deu rum", error);
      }
    );
    */
  }
  
  onSubmit(f: NgForm){
    console.log(f.getFormGroup);
    console.log(f.valid);
  }
}
