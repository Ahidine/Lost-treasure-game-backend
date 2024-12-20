import { Reward } from "@/Domain/entities/Reward";
import { UserService } from "@/Domain/services/UserService";

export class GetUserRewards {
  constructor(private userService: UserService) {}

  async execute(userId: string): Promise<Reward[]> {
    const user = await this.userService.getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const userRewards = await this.userService.getRewardsByUserId(userId);
    return userRewards;
  }
}
