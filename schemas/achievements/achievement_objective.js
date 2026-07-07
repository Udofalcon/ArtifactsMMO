class AchievementObjectiveSchema {
    type;
    target;
    total;

    constructor({
        type,
        target,
        total
    }) {
        if (!this.#isValidType(type)) throw Error('Type Error');

        this.type = type;
        this.target = target || null;
        this.total = total;
    }

    #isValidType(type) {
        const valid = [ 'combat_kill', 'combat_drop', 'combat_level', 'gathering', 'crafting', 'recycling', 'task', 'other', 'use', 'npc_buy', 'npc_sell' ];

        return valid.includes(type);
    }
}

module.exports = AchievementObjectiveSchema;