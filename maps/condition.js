class Condition {
    code;
    operator;
    value;

    constructor({
        code,
        operator,
        value,
    }) {
        this.code = code;
        this.operator = operator;
        this.value = value;
    }

    isValidOperator() {
        const valid = [ 'eq', 'ne', 'gt', 'lt', 'cost', 'has_item', 'achievement_unlocked' ];

        return valid.includes(this.operator);
    }
}

module.exports = Condition;