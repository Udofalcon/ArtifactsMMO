class InventorySlot {
    slot;
    code;
    quantity;

    constructor({ slot, code, quantity }) {
        this.slot = slot;
        this.code = code;
        this.quantity = quantity;
    }
}

module.exports = InventorySlot;