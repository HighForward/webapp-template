import {Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import {JwtAuthGuard} from "./jwt-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    login(): string {
        return this.authService.login()
    }

    @UseGuards(JwtAuthGuard)
    @Get('/user')
    fetchUser(@Req() request: Request): object
    {
        console.log(request.user)
        return this.authService.fetchUser()
    }
}
