import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {Gamer} from '../models';
import {environment as env} from 'src/environments/environment';
import {shareReplay, skip, switchMap, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GamerFirebaseService {
  all$: Observable<Gamer[]>;
  current$: Observable<Gamer>;
  private currentSubject: BehaviorSubject<Gamer>;
  private refresh$: Subject<boolean>;

  constructor(private http: HttpClient) {
    this.refresh$ = new BehaviorSubject<boolean>(true);
    this.currentSubject = new BehaviorSubject<Gamer>({} as Gamer);

    this.current$ = this.currentSubject.asObservable();
    this.all$ = this.refresh$.pipe(
      switchMap(() => this.http.get<Record<string, Gamer>>(`${env.BASE_URL_FIREBASE}/gamers.json`)),
      switchMap(resData => {
        const gamerArray: Gamer[] = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            gamerArray.push({id: key, ...resData[key]});
          }
        }
        return of(gamerArray);
      }),
      tap(
        result => console.log('all$', result),
        err => console.error('all$ error', err),
      ),
      shareReplay(1),
    );
  }

  createAndStoreGamers(gamer: Gamer): Observable<Gamer[]> {
    return this.http
      .post<{ name: string }>(
        `${env.BASE_URL_FIREBASE}/gamers.json`,
        gamer,
        {
          observe: 'response',
        }
      )
      .pipe(
        take(1),
        switchMap(() => this.refresh())
      );
  }

  deleteGamer(gamerId: string): Observable<Gamer[]> {
    return this.http
      .delete(`${env.BASE_URL_FIREBASE}/gamers/${gamerId}.json`)
      .pipe(
        take(1),
        switchMap(() => this.refresh())
      );
  }

  setCurrent(gamer: Gamer): void {
    if (this.currentSubject.value.id !== gamer.id) {
      this.currentSubject.next(gamer);
      console.log('current$', gamer);
    }
  }

  refresh(): Observable<Gamer[]> {
    console.log('refresh gamers');
    this.refresh$.next(true);

    return this.all$.pipe(
      skip(1),
      take(1)
    );
  }
}
