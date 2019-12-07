import {Component, OnInit} from '@angular/core';
import {WasabiService} from '../../Services/wasabi.service';
import {Observable} from 'rxjs';
import {Album} from '../../model/album.model';
import {Artist} from '../../model/artist.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  artists: Artist[] = [];
  page = 1;
  pageSize = 10;

  constructor(private wasabiService: WasabiService) {
  }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.wasabiService.getArtists().subscribe((result: Artist[]) => this.artists = result);
  }

}
