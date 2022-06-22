import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.scss']
})
export class ImagenComponent implements OnInit {

  constructor() { }

  direccion: string= "https://historiadelavida.editorialaces.com/wp-content/uploads/2017/05/diseno-en-la-naturaleza-portada.jpg";

  ngOnInit(): void {
  }

}
