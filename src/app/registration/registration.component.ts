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
    

    
    
  }
  onSubmit(f: NgForm){
    console.log(JSON.stringify(f.value));
    if(f.valid){
      this.registerUser(f.value);
    }
  }

  registerUser(user){
    this.http.post("http://localhost:8080/Stogging-BackEnd/api/cliente",
    {
      "email": user.email,
      "endereco": {
          "cidade": user.cidade,
          "estado": user.estado,
      },
      "login": {
          "username": user.username,
          "senha": user.password1
      },
      "nome": user.nome
    })
    .subscribe(
      res =>{
        console.log("Fez o post", res);
      },
      error => {
        console.log("Deu rum", error);
      }
    );
  }

}
