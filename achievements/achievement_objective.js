class AchievementObjective {
    type;
    target;
    total;

    constructor({
        type,
        target,
        total
    }) {
        this.type = type;
        this.target = target || null;
        this.total = total;
    }

    isValidType() {
        const valid = [ 'combat_kill', 'combat_drop', 'combat_level', 'gathering', 'crafting', 'recycling', 'task', 'other', 'use', 'npc_buy', 'npc_sell' ];

        return valid.includes(this.type);
    }
}

module.exports = AchievementObjective;