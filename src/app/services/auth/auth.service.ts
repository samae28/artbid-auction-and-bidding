import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: any;

  constructor(private storage: StorageService) { }

  async login(email: string, password:string): Promise<any> {
    //call login api
    return await this.storage.setStorage('uid', 'HSAJDHGSJGDSJHADJS');
  }

  register() {

  }

  resetPassword(){

  }
  logout(){

  }
}
