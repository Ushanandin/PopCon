import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  serachResults: any;
  constructor(
    private fb: FormBuilder,
    private service: MovieApiServiceService
  ) {}
  searchForm = this.fb.group({ search: [''] });
  serach() {
    console.log(this.searchForm.value);
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result, 'serachMoviedata#');
      this.serachResults = result.results;
    });
  }
}
