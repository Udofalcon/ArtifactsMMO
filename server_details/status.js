const Season = require('./season');
const RateLimit = require('./rate_limit');

// https://api.artifactsmmo.com/docs/#/operations/get_server_details__get
class Status {
    version;
    server_time;
    max_level;
    max_skill_level;
    characters_online;
    season;

    async GetServerDetails() {
        const url = `https://api.artifactsmmo.com/`;
        const headers = {
            Accept: 'application/json',
        };

        try {
            const response = await fetch(url, { method: 'GET', headers });
            const { data } = await response.json();

            this.version = data.version;
            this.server_time = data.server_time;
            this.max_level = data.max_level;
            this.max_skill_level = data.max_skill_level;
            this.characters_online = data.characters_online;
            this.season = new Season(data.season);
            this.rate_limits = data.rate_limits.map(x => {
                return new RateLimit(x);
            });

            return this;
        } catch (error) {
            console.error('Get Server Details', error);
        }
    }
}

module.exports = Status;