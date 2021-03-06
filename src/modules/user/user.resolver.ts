import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

import { UserService } from "./user.service";
import { UserType } from "./user.dto";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [UserType])
  async user() {
    return this.userService.findAll();
  }

  @Mutation((returns) => UserType)
  async createUser(@Args("input") input: UserType) {
    return this.userService.create(input);
  }

  @Mutation((returns) => UserType)
  async updateUser(@Args("id") id: string, @Args("input") input: UserType) {
    return this.userService.update(id, input);
  }

  @Mutation((returns) => UserType)
  async deleteUser(@Args("id") id: string) {
    return this.userService.delete(id);
  }
}
