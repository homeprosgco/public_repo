import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class AuthUserMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
