const ServerDetails = require('./endpoints/server_details');
const MyCharacters = require('./endpoints/my_characters');
const Achievements = require('./endpoints/achievements');
const Maps = require('./endpoints/maps');

async function main() {
    // let server_details = await ServerDetails.GetServerDetails();
    // console.log(server_details);

    // let characters = await MyCharacters.GetMyCharacters();
    // console.log(characters[0]);

    // let achievements = await Achievements.GetAchievements({ size: 10000 });
    // console.log(achievements);
    // let achievement = await Achievements.GetAchievement('professional_lumberjack');
    // console.log(achievement);

    // let maps = await Maps.GetAllMaps({ hide_blocked_maps: true, size: 10000 });
    // console.log(maps);
    // let maps = await Maps.GetLayerMaps('interior', { hide_blocked_maps: true, size: 10000 });
    // console.log(maps);
    // let map = await Maps.GetMapByPosition('interior', -2, 19);
    // console.log(map);
    let map = await Maps.GetMapById(1236);
    console.log(map);
}

main();