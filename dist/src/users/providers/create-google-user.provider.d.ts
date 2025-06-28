import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { GoogleUser } from '../interfaces/google-user.interface';
export declare class CreateGoogleUserProvider {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createGoogleUser(googleUser: GoogleUser): Promise<User>;
}
