import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album} from '../model/album.model';

@Injectable({
  providedIn: 'root'
})
export class WasabiService {

  constructor(private http: HttpClient) {
  }

  getArtists() {
    return this.http.get('http://wasabi.i3s.unice.fr/api/v1/artist_all/15');
  }
}
