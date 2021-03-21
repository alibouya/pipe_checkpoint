import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipescheck';
  var1='C:/Users/hp/Desktop/im/'
  imgURL: any ='';

  imagename='';
  preview(value){

console.log(value)
   // this.imagename=this.var1.concat(value.substring(12));
    //.toString();
    var reader = new FileReader();
     this.imagename = value;
     reader.readAsDataURL(value[0]); 
     reader.onload = (_event) => { 
       this.imgURL = reader.result;
       console.log(this.imgURL)

    
   }
}}
