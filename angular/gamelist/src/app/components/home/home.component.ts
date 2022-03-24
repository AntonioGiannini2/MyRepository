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
  private sort: string = 'metacrit';
  public games: Array<Game> = [];
  private search?: string;
  private routeSub: Subscription = new Subscription();
  private gameSub: Subscription = new Subscription();

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.search = params['game-search'];
      if (this.search) {
        this.searchGames(this.sort, this.search)
      } else {
        this.searchGames(this.sort)
      }
    });
  }

  onSelectChange(event$: any): void {
    this.sort= event$.target.value;
    this.searchGames(this.sort, this.search);
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
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }
    if(this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
