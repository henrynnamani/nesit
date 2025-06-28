import { Repository } from 'typeorm';
import { User } from '../user.entity';
export declare class FindOneByGoogleIdProvider {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findOneByGoogleId(googleId: string): Promise<User | null>;
}
