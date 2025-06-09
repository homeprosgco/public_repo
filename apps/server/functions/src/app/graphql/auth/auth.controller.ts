/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, HttpCode, Post } from '@nestjs/common';

@Controller()
export class AuthController {

  @HttpCode(201)
  @Post('register-auth-user')
  registerAuthUser(@Body() { email, password }: { email: string, password: string }) {
    console.log(`Server: email: ${email} password: ${password}`);
    return { status: 'ok', operationType: 'register-auth-user', operationResult: 'successful', statusCode: 200 };
  }
  @HttpCode(201)
  @Post('signin-auth-user')
  signinAuthUser(@Body() { email, password }: { email: string, password: string }) {
    console.log(`Server: email: ${email} password: ${password}`);
    return { status: 'ok', operationType: 'auth-signin', operationResult: 'successful', statusCode: 200 };
  }

}
