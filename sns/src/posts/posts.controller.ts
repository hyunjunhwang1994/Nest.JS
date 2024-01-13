import {Controller, Get} from '@nestjs/common';
import { PostsService } from './posts.service';

/**
 *  author: string;
 *  title: string;
 *  content: string;
 *  likeCount: number;
 *  commentCount: number;
 */

interface Post{
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPost(): Post {
    return {
      author: "test author",
      title: "test title",
      content: "test content",
      likeCount: 10,
      commentCount: 10
    };
  }
}
