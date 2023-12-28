import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/gurard';
import { PrismaService } from 'src/prisma/prisma.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    constructor(config:ConfigService,prisma:PrismaService){}
    @Get('me')
    getMe(@GetUser() user:User){
        return user
    }
}
