import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class PostsModel {
    // PK, autoIncrement
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    author: string;
    @Column()
    title: string;
    @Column()
    content: string;
    @Column()
    likeCount: number;
    @Column()
    commentCount: number;
}