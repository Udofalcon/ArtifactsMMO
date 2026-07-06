class MapContentSchema {
    type;
    code;

    constructor({
        type,
        code,
    }) {
        this.type = type;
        this.code = code;
    }

    isValidType() {
        const valid = [ 'monster', 'resource', 'workshop', 'bank', 'grand_exchange', 'task_master', 'npc', 'raid' ];

        return valid.includes(this.type);
    }
}

module.exports = MapContentSchema;