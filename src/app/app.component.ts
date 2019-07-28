import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  //(ngFor Group By for Nested Array of Objects) //
  peopleByCountry : any [] =
  [

    {
      country : 'Egypt',
      'names' : [
          { name : 'ITShare',},
          { name : 'Training'}
      ]
    },
    {
      country : 'Turkey',
      names : [
        {name : 'dina'} , {name :'farouk'},
      ]
    }
  ]

}


//   title = "Below is a list of all Bootstrap Glyphicons";

//     //pip
//   employees=
//   {
//     fullName : "Dina Farouk",
//     ratingn  : 5.97 ,
//     salary   : 5000 ,
//     hirinDate: new Date(2019,3,5)
//   }


// }

