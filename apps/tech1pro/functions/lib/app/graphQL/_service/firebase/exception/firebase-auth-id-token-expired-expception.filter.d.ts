import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
export declare class FirebaseAuthIDTokenExpiredExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
