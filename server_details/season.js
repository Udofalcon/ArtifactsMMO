const StatusSeasonReward = require('./status_season_reward');

class Season {
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
            return new StatusSeasonReward(x);
        });
    }
}

module.exports = Season;