import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'src/users/user.entity';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendUserWelcome(user: User): Promise<void>;
}
