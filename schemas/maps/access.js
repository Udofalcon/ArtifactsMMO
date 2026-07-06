const ConditionSchema = require('./condition');

class AccessSchema {
    type;
    conditions;

    constructor({
        type,
        conditions,
    }) {
        this.type = type;
        this.conditions = conditions?.map(x => {
            return new ConditionSchema(x)
        }) || null;
    }

    isValidType() {
        const valid = [ 'standard', 'restricted', 'conditional', 'blocked' ];

        return valid.includes(this.type);
    }
}

module.exports = AccessSchema;