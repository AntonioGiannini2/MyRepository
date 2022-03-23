import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string = '';
  public games: Array<Game> = [];
  private routeSub: Subscription = new Subscription();
  private gameSub: Subscription = new Subscription();

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search'])
      } else {
        this.searchGames('metacrit')
      }
    });
  }

  onSelectChange(event$: any): void {
    this.searchGames(event$.target.value);
  }

  searchGames(sort: string, search?: string): void {
    this.gameSub = this.httpService
    .getGameList(sort, search)
    .subscribe((gameListResponse: APIResponse<Game>) => {
      this.games = gameListResponse.results;
      console.log(gameListResponse);
    });
  }

  ngOnDestroy(): void {

  }
}
