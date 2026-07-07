class ConditionSchema {
    code;
    operator;
    value;

    constructor({
        code,
        operator,
        value,
    }) {
        if (!this.#isValidOperator(operator)) throw Error('Operator Error');

        this.code = code;
        this.operator = operator;
        this.value = value;
    }

    #isValidOperator(operator) {
        const valid = [ 'eq', 'ne', 'gt', 'lt', 'cost', 'has_item', 'achievement_unlocked' ];

        return valid.includes(operator);
    }
}

module.exports = ConditionSchema;