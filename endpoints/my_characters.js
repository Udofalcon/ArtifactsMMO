const CharacterSchema = require('../schemas/my_characters/character');

class MyCharacters {
    // https://api.artifactsmmo.com/docs/#/operations/get_my_characters_my_characters_get
    static async GetMyCharacters() {
        try {
            const url = `https://api.artifactsmmo.com/my/characters`;
            const headers = {
                Accept: 'application/json',
                Authorization: `Bearer ${process.env.API_TOKEN}`,
            };

            const response = await fetch(url, { method: 'GET', headers });
            const { data } = await response.json();

            const characters = [];

            for (let i = 0; i < data.length; i++) {
                characters[i] = new CharacterSchema(data[i]);
            }

            return characters;
        } catch (error) {
            console.error('Get My Characters', error);
        }
    }
}

module.exports = MyCharacters