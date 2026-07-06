const AchievementSchema = require('../schemas/achievements/achievement');

class Achievements {
    async GetAchievements({
        page = 1,
        size = 50,
        type
    }) {
        try {
            if (!this.isValidPage(page)) throw Error(`Page Error`);
            if (!this.isValidSize(size)) throw Error(`Size Error`);
            if (!this.isValidType(type)) throw Error(`Type Error`);

            const args = [
                `page=${page}`,
                `size=${size}`,
                type !== undefined ? `type=${type}` : ''
            ];
            const url = `https://api.artifactsmmo.com/achievements?${args.join('&')}`;
            const headers = {
                Accept: 'application/json',
            };

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

    async GetAchievement({
        code
    }) {
        try {
            if (!this.isValidCode(code)) throw Error(`Code Error`);

            const url = `https://api.artifactsmmo.com/achievements/${code}`;
            const headers = {
                Accept: 'application/json',
            };

            const response = await fetch(url, { method: 'GET', headers });
            const { data } = await response.json();

            return new AchievementSchema(data);
        } catch (error) {
            console.error('Get Achievement', error);
        }
    }

    isValidPage(page) {
        return page >= 1;
    }

    isValidSize(size) {
        return size >= 1 && size <= 10000;
    }

    isValidType(type) {
        const valid = [
            'combat_kill',
            'combat_drop',
            'combat_level',
            'gathering',
            'crafting',
            'recycling',
            'task',
            'other',
            'use',
            'npc_buy',
            'npc_sell'
        ];

        return type === undefined || valid.includes(type);
    }

    isValidCode(code) {
        return code.match(/^[a-zA-Z0-9_-]+$/);
    }
}

module.exports = Achievements;