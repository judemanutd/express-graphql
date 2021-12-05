import Faker from "faker";
import { define } from "typeorm-seeding";
import BlogPosts from "../models/BlogPosts";
import { v4 } from "uuid";

define(BlogPosts, (faker: typeof Faker) => {
  const item = new BlogPosts();
  item.id = v4();
  item.summary = faker.lorem.sentences(3);
  item.description = faker.lorem.sentences(10);
  item.slug = faker.internet.url();

  return item;
});
