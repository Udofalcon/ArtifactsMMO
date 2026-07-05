const Condition = require('./condition');

class Access {
    type;
    conditions;

    constructor({
        type,
        conditions,
    }) {
        this.type = type;
        this.conditions = conditions?.map(x => {
            return new Condition(x)
        }) || null;
    }

    isValidType() {
        const valid = [ 'standard', 'restricted', 'conditional', 'blocked' ];

        return valid.includes(this.type);
    }
}

module.exports = Access;