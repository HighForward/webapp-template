import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            userId: 1,
            username: 'Max',
            password: 'admin'
        },
        {
            userId: 2,
            username: 'Johnny',
            password: 'admin'
        }
    ]

    async findOne(username: string): Promise<any | undefined> {
        return this.users.find(user => user.username === username);
    }

    async findOneById(id: number): Promise<any | undefined>
    {
        return this.users.find(user => user.userId === id);
    }

}
