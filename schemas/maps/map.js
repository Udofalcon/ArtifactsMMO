const AccessSchema = require('./access');
const InteractionSchema = require('./interaction');

class MapSchema {
    map_id;
    name;
    skin;
    x;
    y;
    layer;
    access;
    interactions;

    constructor({
        map_id,
        name,
        skin,
        x,
        y,
        layer,
        access,
        interactions,
    }) {
        this.map_id = map_id;
        this.name = name;
        this.skin = skin;
        this.x = x;
        this.y = y;
        this.layer = layer;
        this.access = new AccessSchema(access);
        this.interactions = new InteractionSchema(interactions);
    }

    isValidLayer() {
        const valid = [ 'interior', 'overworld', 'underground' ];

        return valid.includes(this.layer);
    }
}

module.exports = MapSchema;