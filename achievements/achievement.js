const AchievementObjective = require('./achievement_objective');
const AchievementRewards = require('./achievement_rewards');

class Achievements {
    achievements;
    total;
    page;
    size;
    pages;

    async GetAchievements(args) { // { page, size, type }
        const url = `https://api.artifactsmmo.com/achievements`;
        const headers = {
            Accept: 'application/json',
        };

        try {
            const response = await fetch(url, { method: 'GET', headers });
            const { data } = await response.json();

            this.achievements = [];

            for (let i = 0; i < data.length; i++) {
                this.achievements[i] = new Achievement(data[i]);
            }

            return this.achievements;
        } catch (error) {
            console.error('Get Achievements', error);
        }
    }

    isValidTotal() {
        return this.total >= 0;
    }

    isValidPage() {
        return this.page >= 1;
    }

    isValidSize() {
        return this.size >= 1;
    }

    isValidPages() {
        return this.pages >= 1;
    }
}

class Achievement {
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
        rewards
    }) {
        this.name = name;
        this.code = code;
        this.description = description;
        this.points = points;
        this.objectives = objectives.map(x => {
            return new AchievementObjective(x);
        });
        this.rewards = new AchievementRewards(rewards);
    }

    async GetAchievement(code) {

    }
}

module.exports = { Achievements, Achievement };