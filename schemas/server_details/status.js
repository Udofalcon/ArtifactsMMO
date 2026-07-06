const SeasonSchema = require('./season');
const RateLimitSchema = require('./rate_limit');

class StatusSchema {
    version;
    server_time;
    max_level;
    max_skill_level;
    characters_online;
    season;
    rate_limits;

    constructor({
        version,
        server_time,
        max_level,
        max_skill_level,
        characters_online,
        season,
        rate_limits,
    }) {
        this.version = version;
        this.server_time = server_time;
        this.max_level = max_level;
        this.max_skill_level = max_skill_level;
        this.characters_online = characters_online;
        this.season = new SeasonSchema(season);
        this.rate_limits = rate_limits.map(x => {
            return new RateLimitSchema(x);
        });
    }
}

module.exports = StatusSchema;