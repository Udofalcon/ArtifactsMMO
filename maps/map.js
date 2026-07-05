const Access = require('./access');
const Interaction = require('./interaction');

class Maps {
    maps;

    async GetAllMaps() {
        const url = `https://api.artifactsmmo.com/maps?size=10000`;
        const headers = {
            Accept: 'application/json',
        };

        try {
            const response = await fetch(url, { method: 'GET', headers });
            const { data } = await response.json();

            this.maps = [];

            for (let i = 0; i < data.length; i++) {
                this.maps[i] = new Map(data[i]);
            }

            return this.maps;
        } catch (error) {
            console.error('Get All Maps', error);
        }
    }
}

class Map {
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
        this.access = new Access(access);
        this.interactions = new Interaction(interactions);
    }

    isValidLayer() {
        const valid = [ 'interior', 'overworld', 'underground' ];

        return valid.includes(this.layer);
    }
}

module.exports = Maps;