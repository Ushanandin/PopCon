import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movieBannerResult: any = [];
  trendingMovieResult: any = [];
  constructor(private service: MovieApiServiceService) {}
  ngOnInit(): void {
    this.movieBannerApiData();
    this.trendingMovieApiData();
  }
  movieBannerApiData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'BannerResult#');
      this.movieBannerResult = result.results;
      // console.log(this.movieBannerResult, 'results#');
    });
  }

  trendingMovieApiData() {
    this.service.trendingApiData().subscribe((result) => {
      console.log(result, 'trendingResult#');
      this.trendingMovieResult = result.results;
    });
  }
}
