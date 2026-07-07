class MapContentSchema {
    type;
    code;

    constructor({
        type,
        code,
    }) {
        console.log(type, code);
        if (!this.#isValidType(type)) throw Error('Type Error');

        this.type = type;
        this.code = code;
    }

    #isValidType(type) {
        const valid = [ 'monster', 'resource', 'workshop', 'bank', 'grand_exchange', 'tasks_master', 'npc', 'raid' ];

        return valid.includes(type);
    }
}

module.exports = MapContentSchema;