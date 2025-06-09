import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private userSvc: UserService) { }

  async permission(key: string): Promise<boolean> {
    const userClaims = await this.userSvc.claims;
    return true;
  }

}
