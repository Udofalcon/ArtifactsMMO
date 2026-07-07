const ConditionSchema = require('./condition');

class AccessSchema {
    type;
    conditions;

    constructor({
        type,
        conditions,
    }) {
        if (!this.#isValidType(type)) throw Error('Type Error');

        this.type = type;
        this.conditions = conditions?.map(x => {
            return new ConditionSchema(x)
        }) || null;
    }

    #isValidType(type) {
        const valid = [ 'standard', 'restricted', 'conditional', 'blocked' ];

        return valid.includes(type);
    }
}

module.exports = AccessSchema;