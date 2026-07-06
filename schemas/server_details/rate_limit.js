class RateLimitSchema {
    type;
    value;

    constructor({
        type,
        value,
    }) {
        this.type = type;
        this.value = value;
    }
}

module.exports = RateLimitSchema;