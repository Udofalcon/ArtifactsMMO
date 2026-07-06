const ConditionSchema = require('./condition');

class TransitionSchema {
    map_id;
    x;
    y;
    layer;
    conditions;

    constructor({
        map_id,
        x,
        y,
        layer,
        conditions,
    }) {
        this.map_id = map_id;
        this.x = x;
        this.y = y;
        this.layer = layer;
        this.conditions = conditions?.map(x => {
            return new ConditionSchema(x);
        }) || null;
    }

    isValidLayer() {
        const valid = [ 'interior', 'overworld', 'underground' ];

        return valid.includes(this.layer);
    }
}

module.exports = TransitionSchema;