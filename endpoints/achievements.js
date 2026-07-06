const AchievementSchema = require('../schemas/achievements/achievement');

class Achievements {
    async GetAchievements(args) { // { page, size, type }
        const url = `https://api.artifactsmmo.com/achievements`;
        const headers = {
            Accept: 'application/json',
        };

        try {
            const response = await fetch(url, { method: 'GET', headers });
            const { data } = await response.json();

            const achievements = [];

            for (let i = 0; i < data.length; i++) {
                achievements[i] = new AchievementSchema(data[i]);
            }

            return achievements;
        } catch (error) {
            console.error('Get Achievements', error);
        }
    }

    async GetAchievement({ code }) {
        const url = `https://api.artifactsmmo.com/achievements/${code}`;
        const headers = {
            Accept: 'application/json',
        };

        try {
            const response = await fetch(url, { method: 'GET', headers });
            const { data } = await response.json();

            return new AchievementSchema(data);
        } catch (error) {
            console.error('Get Achievement', error);
        }
    }
}

module.exports = Achievements;