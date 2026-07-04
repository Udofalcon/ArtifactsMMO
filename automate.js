const Status = require('./server_details/status');
const Characters = require('./my_characters/characters');

async function main() {
    // let status = await new Status().GetServerDetails();
    let characters = await new Characters().GetMyCharacters();

    // console.log(characters);
    console.log(characters[0]);
}

main();