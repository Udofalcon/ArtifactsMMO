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
        if (!this.#isValidLayer(layer)) throw Error('Layer Error');

        this.map_id = map_id;
        this.name = name;
        this.skin = skin;
        this.x = x;
        this.y = y;
        this.layer = layer;
        this.access = new AccessSchema(access);
        this.interactions = new InteractionSchema(interactions);
    }

    #isValidLayer(layer) {
        const valid = [ 'interior', 'overworld', 'underground' ];

        return valid.includes(layer);
    }
}

module.exports = MapSchema;