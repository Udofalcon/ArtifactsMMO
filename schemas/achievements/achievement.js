const AchievementObjectiveSchema = require('./achievement_objective');
const AchievementRewardsSchema = require('./achievement_rewards');

class AchievementSchema {
    name;
    code;
    description;
    points;
    objectives;
    rewards;

    constructor({
        name,
        code,
        description,
        points,
        objectives,
        rewards,
    }) {
        this.name = name;
        this.code = code;
        this.description = description;
        this.points = points;
        this.objectives = objectives.map(x => {
            return new AchievementObjectiveSchema(x);
        });
        this.rewards = new AchievementRewardsSchema(rewards);
    }
}

module.exports = AchievementSchema;