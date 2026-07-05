const Status = require('./server_details/status');
const Characters = require('./my_characters/character');
const Achievements = require('./achievements/achievement');
const Maps = require('./maps/map');

async function main() {
    // let status = await new Status().GetServerDetails();
    // console.log(characters);

    // let characters = await new Characters().GetMyCharacters();
    // console.log(characters[0]);

    // let achievements = await new Achievements().GetAchievements({ size: 10000 });
    // console.log(achievements[0]);
    // let achievement = await new Achievements().GetAchievement({ code: 'professional_lumberjack' });
    // console.log(achievement);

    let maps = await new Maps().GetAllMaps();
    // console.log(maps.filter(x => x.access.type !== 'blocked'));
    // console.log(maps.filter(x => x.access.conditions.length > 0).map(x => x.access.conditions));
    // console.log(maps.filter(x => x.interactions.content).map(x => x.interactions.content));
    // console.log(maps.filter(x => x.interactions.transition).map(x => x.interactions.transition));
    console.log(maps.filter(x => x.interactions.transition?.conditions.length > 0).map(x => x.interactions.transition.conditions));
}

main();