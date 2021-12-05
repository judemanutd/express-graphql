import { Resolver, Query } from "type-graphql";
import { getRepository } from "typeorm";

import BlogPosts from "../database/models/BlogPosts";

@Resolver(() => BlogPosts)
export default class BlogPostResolver {
  @Query(() => [BlogPosts], { description: "Get all blog posts" })
  async blogs(): Promise<BlogPosts[]> {
    const blogRepository = getRepository(BlogPosts);

    return blogRepository.find();
  }
}
