import {Controller, Request, Get, Post, Req, UseGuards, Body} from '@nestjs/common';
import { AuthService } from './auth.service';
import {JwtAuthGuard} from "./jwt-auth.guard";
import {LocalAuthGuard} from "./local-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Req() req): Promise<object> {
        return {
            access_token: this.authService.login(req.user)
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('/user')
    async fetchUser(@Req() req): Promise<object>
    {
        return {
            user: await this.authService.fetchUser(req.user)
        }
    }
}
