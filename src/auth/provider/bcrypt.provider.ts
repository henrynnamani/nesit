import { Injectable } from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptProvider implements HashingProvider {
  comparePassword(data: string | Buffer, encrypted: string): Promise<boolean> {
    throw new Error('Method not implement');
  }

  hashPassword(data: string | Buffer): Promise<string> {
    throw new Error('Method not implement');
  }
}
