class RewardItem {
    code;
    quantity;

    constructor({
        code,
        quantity,
    }) {
        this.code = code;
        this.quantity = quantity;
    }
}

module.exports = RewardItem;