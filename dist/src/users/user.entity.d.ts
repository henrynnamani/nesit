import { Post } from 'src/posts/post.entity';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    googleId?: string;
    posts?: Post[];
}
