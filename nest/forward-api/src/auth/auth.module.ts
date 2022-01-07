import { Module } from '@nestjs/common';
import {JwtModule} from "@nestjs/jwt";
import {AuthService} from "./auth.service";
import {AuthController} from "./auth.controller";
import {JwtStrategy} from "./jwt.strategy";
import {UsersModule} from "../users/users.module";
import {LocalStrategy} from "./local.strategy";

@Module({
    imports: [UsersModule, JwtModule.register({ secret: process.env.JWT_SECRET, signOptions: { expiresIn: '1d' } })],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, LocalStrategy]
})
export class AuthModule {}
