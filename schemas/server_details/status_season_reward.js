class StatusSeasonRewardSchema {
    code;
    type;
    description;
    required_points;
    quantity; // Optional
    member_required; // Optional
    first_only; // Optional

    constructor({
        code,
        type,
        description,
        required_points,
        quantity = 1,
        member_required = false,
        first_only = false,
    }) {
        if (!this.#isValidType(type)) throw Error('Type Error');

        this.code = code;
        this.type = type;
        this.description = description;
        this.required_points = required_points;
        this.quantity = quantity;
        this.member_required = member_required;
        this.first_only = first_only;
    }

    #isValidType(type) {
        const valid = [ 'badge', 'skin', 'gold', 'item' ];

        return valid.includes(type);
    }
}

module.exports = StatusSeasonRewardSchema;