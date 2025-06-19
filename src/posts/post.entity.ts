import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostType } from './enums/postType.enum';
import { PostStatus } from './enums/postStatus.enum';
import { MetaOption } from 'src/meta-options/meta-options.entity';
import { User } from 'src/users/user.entity';
import { Tag } from 'src/tags/tag.entity';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: PostType,
    nullable: false,
    default: PostType.POST,
  })
  postType: PostType;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.DRAFT,
    nullable: false,
  })
  status: PostStatus;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  content: string;

  @Column({
    type: 'varchar',
  })
  schema: string;

  @Column({
    nullable: true,
    type: 'varchar',
  })
  featuredImageUrl: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  publishOn: Date;

  @ManyToMany(() => Tag, (tag) => tag.posts)
  @JoinTable()
  tags?: Tag[];

  @ManyToOne(() => User, (user) => user.posts, {
    eager: true,
  })
  author: User;

  @OneToOne(() => MetaOption, (metaOption) => metaOption.post, {
    cascade: true,
    eager: true,
  })
  metaOptions: MetaOption;
}
