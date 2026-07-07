const MapSchema = require('../schemas/maps/map');

class Maps {
    // https://api.artifactsmmo.com/docs/#/operations/get_all_maps_maps_get
    static async GetAllMaps({
        content_code,
        content_type,
        hide_blocked_maps = false,
        hide_event = false,
        layer,
        page = 1,
        size = 50,
        transition,
    }) {
        try {
            if (!this.#isValidContentCode(content_code)) throw Error('Content Code Error');
            if (!this.#isValidContentType(content_code)) throw Error('Content Type Error');
            if (!this.#isValidLayer(layer)) throw Error('Layer Error');
            if (!this.#isValidPage(page)) throw Error('Page Error');
            if (!this.#isValidSize(size)) throw Error('Size Error');

            const args = [
                content_code !== undefined ? `content_code=${content_code}` : '',
                content_type !== undefined ? `content_type=${content_type}` : '',
                `hide_blocked_maps=${hide_blocked_maps}`,
                `hide_event=${hide_event}`,
                layer !== undefined ? `layer=${layer}` : '',
                `page=${page}`,
                `size=${size}`,
                transition !== undefined ? `transition=${transition}` : '',
            ].filter(x => x);
            const url = `https://api.artifactsmmo.com/maps?${args.join('&')}`;
            const headers = {
                Accept: 'application/json',
            };

            const response = await fetch(url, { method: 'GET', headers });
            const { data } = await response.json();

            const maps = [];

            for (let i = 0; i < data.length; i++) {
                maps[i] = new MapSchema(data[i]);
            }

            return maps;
        } catch (error) {
            console.error('Get All Maps', error);
        }
    }

    // https://api.artifactsmmo.com/docs/#/operations/get_layer_maps_maps__layer__get
    static async GetLayerMaps(layer,
    {
        content_code,
        content_type,
        hide_blocked_maps = false,
        hide_event = false,
        page = 1,
        size = 50,
    }) {
        try {
            if (layer === undefined || !this.#isValidLayer(layer)) throw Error('Layer Error');
            if (!this.#isValidContentCode(content_code)) throw Error('Content Code Error');
            if (!this.#isValidContentType(content_code)) throw Error('Content Type Error');
            if (!this.#isValidPage(page)) throw Error('Page Error');
            if (!this.#isValidSize(size)) throw Error('Size Error');

            const args = [
                content_code !== undefined ? `content_code=${content_code}` : '',
                content_type !== undefined ? `content_type=${content_type}` : '',
                `hide_blocked_maps=${hide_blocked_maps}`,
                `hide_event=${hide_event}`,
                `page=${page}`,
                `size=${size}`,
            ].filter(x => x);
            const url = `https://api.artifactsmmo.com/maps/${layer}?${args.join('&')}`;
            const headers = {
                Accept: 'application/json',
            };

            const response = await fetch(url, { method: 'GET', headers });
            const { data } = await response.json();

            const maps = [];

            for (let i = 0; i < data.length; i++) {
                maps[i] = new MapSchema(data[i]);
            }

            return maps;
        } catch (error) {
            console.error('Get All Maps', error);
        }
    }

    // https://api.artifactsmmo.com/docs/#/operations/get_map_by_position_maps__layer___x___y__get
    static async GetMapByPosition(layer, x, y) {
        try {
            if (layer === undefined || !this.#isValidLayer(layer)) throw Error('Layer Error');
            if (x === undefined) throw Error('X Error');
            if (y === undefined) throw Error('Y Error');

            const url = `https://api.artifactsmmo.com/maps/${layer}/${x}/${y}`;
            const headers = {
                Accept: 'application/json',
            };

            const response = await fetch(url, { method: 'GET', headers });
            const { data } = await response.json();

            return new MapSchema(data);
        } catch (error) {
            console.error('Get All Maps', error);
        }
    }

    // https://api.artifactsmmo.com/docs/#/operations/get_map_by_id_maps_id__map_id__get
    static async GetMapById(map_id) {
        try {
            if (map_id === undefined) throw Error('Map Id Error');

            const url = `https://api.artifactsmmo.com/maps/id/${map_id}`;
            const headers = {
                Accept: 'application/json',
            };

            const response = await fetch(url, { method: 'GET', headers });
            const { data } = await response.json();

            return new MapSchema(data);
        } catch (error) {
            console.error('Get All Maps', error);
        }
    }

    static #isValidContentCode(content_code) {
        return content_code === undefined || content_code.match(/^[a-zA-Z0-9_-]+$/);
    }

    static #isValidContentType(content_type) {
        const valid = [
            'monster',
            'resource',
            'workshop',
            'bank',
            'grand_exchange',
            'tasks_master',
            'npc',
            'raid',
        ];

        return content_type === undefined || valid.includes(content_type);
    }

    static #isValidLayer(layer) {
        const valid = [
            'interior',
            'overworld',
            'underground',
        ];

        return layer === undefined || valid.includes(layer);
    }

    static #isValidPage(page) {
        return page >= 1;
    }

    static #isValidSize(size) {
        return size >= 1 && size <= 10000;
    }
}

module.exports = Maps;