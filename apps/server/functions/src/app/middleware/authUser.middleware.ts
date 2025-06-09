import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthUserMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.header("authorization") && req.header("authorization").split(' ')[1] || '';
    
    if(token) {
      console.log("Add user to request object");
      console.log(token);
    } else {
      console.log('No User');
    }
    
    next();
    console.log(res.getHeaders());
  }

}