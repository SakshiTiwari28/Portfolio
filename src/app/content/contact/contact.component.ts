import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ContactService } from './contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit(){
  this.FormData = this.builder.group({
  Name: new FormControl('', [Validators.required]),
  Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
  Message: new FormControl('', [Validators.required])
  });
  }

  onSubmit(FormData) {
    console.log(FormData);
    this.contact.PostMessage(FormData)
    .subscribe(response => {
    location.href = 'https://mailthis.to/confirm';
    console.log(response);
    }, error => {
    console.warn(error.responseText);
    console.log({ error });
    });
  }
}
