const RewardItem = require('./reward_item');

class AchievementRewards {
    gold;
    items;

    constructor({
        gold = 0,
        items,
    }) {
        this.gold = gold;
        this.items = items?.map(x => {
            return new RewardItem(x);
        }) || null;
    }
}

module.exports = AchievementRewards;