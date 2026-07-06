const RewardItemSchema = require('./reward_item');

class AchievementRewardsSchema {
    gold;
    items;

    constructor({
        gold = 0,
        items,
    }) {
        this.gold = gold;
        this.items = items?.map(x => {
            return new RewardItemSchema(x);
        }) || null;
    }
}

module.exports = AchievementRewardsSchema;