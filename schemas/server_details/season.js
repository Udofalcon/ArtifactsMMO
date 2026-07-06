const StatusSeasonRewardSchema = require('./status_season_reward');

class SeasonSchema {
    name; // Optional
    number; // Optional
    start_date; // Optional
    rewards;

    constructor({
        name,
        number,
        start_date,
        rewards,
    }) {
        this.name = name;
        this.number = number;
        this.start_date = start_date;
        this.rewards = rewards.map(x => {
            return new StatusSeasonRewardSchema(x);
        });
    }
}

module.exports = SeasonSchema;