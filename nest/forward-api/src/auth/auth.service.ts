import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {UsersService} from "../users/users.service";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService,
                private usersService: UsersService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    login(user: any) : string
    {
        const data = {sub: user.userId, username: user.username}
        return this.jwtService.sign(data)
    }

    async fetchUser(user: any): Promise<object> {
        const tmp = await this.usersService.findOneById(user.userId)
        console.log(user)
        console.log(tmp)
        return {
            sub: tmp.userId,
            username: tmp.username
        }
    }
}