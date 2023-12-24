import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthDto } from './dto';
import { log } from 'console';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }
  @Post('signin')
  signin(@Req() req: Request, @Body('email') email: string) {
    console.log(req);
    console.log(email);
    //can also set the @Body() decorator if we use the req the pass req.body
    return this.authService.login(req.body);
  }
}
