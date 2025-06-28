import { HashingProvider } from './hashing.provider';
export declare class BcryptProvider implements HashingProvider {
    comparePassword(data: string | Buffer, encrypted: string): Promise<boolean>;
    hashPassword(data: string | Buffer): Promise<string>;
}
