const Status = require('./server_details/status');
const Characters = require('./my_characters/character');
const Achievements = require('./achievements/achievement');

async function main() {
    // let status = await new Status().GetServerDetails();
    // console.log(characters);

    // let characters = await new Characters().GetMyCharacters();
    // console.log(characters[0]);

    // let achievements = await new Achievements().GetAchievements({ size: 10000 });
    // console.log(achievements[0]);
    let achievement = await new Achievements().GetAchievement({ code: 'professional_lumberjack' });
    console.log(achievement);
}

main();