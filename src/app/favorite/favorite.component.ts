import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent   {

isfavorite: boolean =true;

onFavoriteClick() {

  this.isfavorite = !this.isfavorite;
  console.log(this.isfavorite);
}

}

