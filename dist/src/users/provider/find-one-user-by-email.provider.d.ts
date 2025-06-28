import { User } from '../user.entity';
import { Repository } from 'typeorm';
export declare class FindOneUserByEmailProvider {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findUserByEmail(email: string): Promise<User>;
}
