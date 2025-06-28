import { AuthType } from '../enum/auth-type.enum';
export declare const Auth: (...authTypes: AuthType[]) => import("@nestjs/common").CustomDecorator<string>;
