import { PostService } from './05-dependency-b';
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebApiDataBaseService,
} from './05-dependency-c';

// Main
(async () => {
  // const postProvider = new JsonDataBaseService();
  // const postProvider = new LocalDataBaseService();
  const postProvider = new WebApiDataBaseService();
  const postService = new PostService(postProvider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
