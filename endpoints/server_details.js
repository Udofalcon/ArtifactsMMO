const StatusSchema = require('../schemas/server_details/status');

class ServerDetails {
    // https://api.artifactsmmo.com/docs/#/operations/get_server_details__get
    static async GetServerDetails() {
        const url = `https://api.artifactsmmo.com/`;
        const headers = {
            Accept: 'application/json',
        };

        try {
            const response = await fetch(url, { method: 'GET', headers });
            const { data } = await response.json();

            return new StatusSchema(data)
        } catch (error) {
            console.error('Get Server Details', error);
        }
    }
}

module.exports = ServerDetails;