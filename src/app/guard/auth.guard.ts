import { AuthService } from 'src/app/services/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

    canLoad(
      route: Route,
      segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.getId().then(id => {
        console.log('auth guard checking id: ', id);
        if(id) return true;
        else {
          // redirect to login page
          this.router.navigateByUrl('/login');
          return false;
        }
      })
      .catch(e => {
        console.log(e);
        this.router.navigateByUrl('/login');
          return false;
      });
    }
}
