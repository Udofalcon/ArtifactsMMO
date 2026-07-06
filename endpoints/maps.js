const MapSchema = require('../schemas/maps/map');

class Maps {
    // https://api.artifactsmmo.com/docs/#/operations/get_all_maps_maps_get
    async GetAllMaps({
        content_code,
        content_type,
        hide_blocked_maps = false,
        hide_event = false,
        layer,
        page = 1,
        size = 50,
    }) {
        try {
            const args = [
                content_code !== undefined ? `content_code=${content_code}` : '',
                content_type !== undefined ? `content_type=${content_type}` : '',
                `hide_blocked_maps=${hide_blocked_maps}`,
                `hide_event=${hide_event}`,
                layer !== undefined ? `layer=${layer}` : '',
                `page=${page}`,
                `size=${size}`,
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

    isValidContentCode(content_code) {
        return content_code === undefined || content_code.match(/^[a-zA-Z0-9_-]+$/);
    }

    isValidContentType(content_type) {
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

    isValidLayer(layer) {
        const valid = [
            'interior',
            'overworld',
            'underground',
        ];

        return layer === undefined || valid.includes(layer);
    }

    isValidPage(page) {
        return page >= 1;
    }

    isValidSize(size) {
        return size >= 1 && size <= 10000;
    }
}

module.exports = Maps;