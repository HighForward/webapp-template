import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    login() : string
    {
        return this.jwtService.sign({sub: 0, username: 'Max'})
    }

    fetchUser() : object
    {
        return {
            user: {
                sub: 0,
                username: 'Max'
            }
        }
    }
}