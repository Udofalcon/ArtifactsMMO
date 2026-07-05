const StorageEffect = require('./storage_effect');
const InventorySlot = require('./inventory_slot');

// https://api.artifactsmmo.com/docs/#/operations/get_my_characters_my_characters_get
class Characters {
    characters;

    async GetMyCharacters() {
        const url = `https://api.artifactsmmo.com/my/characters`;
        const headers = {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.API_TOKEN}`,
        };

        try {
            const response = await fetch(url, { method: 'GET', headers });
            const { data } = await response.json();

            this.characters = [];

            for (let i = 0; i < data.length; i++) {
                this.characters[i] = new Character(data[i]);
            }

            return this.characters;
        } catch (error) {
            console.error('Get My Characters', error);
        }
    }
}

class Character {
    name;
    account;
    skin;
    level;
    xp;
    max_xp;
    gold;
    speed;
    mining_level;
    mining_xp;
    mining_max_xp;
    woodcutting_level;
    woodcutting_xp;
    woodcutting_max_xp;
    fishing_level;
    fishing_xp;
    fishing_max_xp;
    weaponcrafting_level;
    weaponcrafting_xp;
    weaponcrafting_max_xp;
    gearcrafting_level;
    gearcrafting_xp;
    gearcrafting_max_xp;
    jewelrycrafting_level;
    jewelrycrafting_xp;
    jewelrycrafting_max_xp;
    cooking_level;
    cooking_xp;
    cooking_max_xp;
    alchemy_level;
    alchemy_xp;
    alchemy_max_xp;
    hp;
    max_hp;
    haste;
    critical_strike;
    wisdom;
    prospecting;
    initiative;
    threat;
    attack_fire;
    attack_earth;
    attack_water;
    attack_air;
    dmg;
    dmg_fire;
    dmg_earth;
    dmg_water;
    dmg_air;
    res_fire;
    res_earth;
    res_water;
    res_air;
    effects;
    x;
    y;
    layer;
    map_id;
    cooldown;
    cooldown_expiration;
    weapon_slot;
    rune_slot;
    shield_slot;
    helmet_slot;
    body_armor_slot;
    leg_armor_slot;
    boots_slot;
    ring1_slot;
    ring2_slot;
    amulet_slot;
    artifact1_slot;
    artifact2_slot;
    artifact3_slot;
    utility1_slot;
    utility1_slot_quantity;
    utility2_slot;
    utility2_slot_quantity;
    bag_slot;
    task;
    task_type;
    task_progress;
    task_total;
    inventory_max_items;
    inventory;

    constructor({
        name,
        account,
        skin,
        level,
        xp,
        max_xp,
        gold,
        speed,
        mining_level,
        mining_xp,
        mining_max_xp,
        woodcutting_level,
        woodcutting_xp,
        woodcutting_max_xp,
        fishing_level,
        fishing_xp,
        fishing_max_xp,
        weaponcrafting_level,
        weaponcrafting_xp,
        weaponcrafting_max_xp,
        gearcrafting_level,
        gearcrafting_xp,
        gearcrafting_max_xp,
        jewelrycrafting_level,
        jewelrycrafting_xp,
        jewelrycrafting_max_xp,
        cooking_level,
        cooking_xp,
        cooking_max_xp,
        alchemy_level,
        alchemy_xp,
        alchemy_max_xp,
        hp,
        max_hp,
        haste,
        critical_strike,
        wisdom,
        prospecting,
        initiative,
        threat,
        attack_fire,
        attack_earth,
        attack_water,
        attack_air,
        dmg,
        dmg_fire,
        dmg_earth,
        dmg_water,
        dmg_air,
        res_fire,
        res_earth,
        res_water,
        res_air,
        effects,
        x,
        y,
        layer,
        map_id,
        cooldown,
        cooldown_expiration,
        weapon_slot,
        rune_slot,
        shield_slot,
        helmet_slot,
        body_armor_slot,
        leg_armor_slot,
        boots_slot,
        ring1_slot,
        ring2_slot,
        amulet_slot,
        artifact1_slot,
        artifact2_slot,
        artifact3_slot,
        utility1_slot,
        utility1_slot_quantity,
        utility2_slot,
        utility2_slot_quantity,
        bag_slot,
        task,
        task_type,
        task_progress,
        task_total,
        inventory_max_items,
        inventory,
    }) {
        this.name = name;
        this.account = account;
        this.skin = skin;
        this.level = level;
        this.xp = xp;
        this.max_xp = max_xp;
        this.gold = gold;
        this.speed = speed;
        this.mining_level = mining_level;
        this.mining_xp = mining_xp;
        this.mining_max_xp = mining_max_xp;
        this.woodcutting_level = woodcutting_level;
        this.woodcutting_xp = woodcutting_xp;
        this.woodcutting_max_xp = woodcutting_max_xp;
        this.fishing_level = fishing_level;
        this.fishing_xp = fishing_xp;
        this.fishing_max_xp = fishing_max_xp;
        this.weaponcrafting_level = weaponcrafting_level;
        this.weaponcrafting_xp = weaponcrafting_xp;
        this.weaponcrafting_max_xp = weaponcrafting_max_xp;
        this.gearcrafting_level = gearcrafting_level;
        this.gearcrafting_xp = gearcrafting_xp;
        this.gearcrafting_max_xp = gearcrafting_max_xp;
        this.jewelrycrafting_level = jewelrycrafting_level;
        this.jewelrycrafting_xp = jewelrycrafting_xp;
        this.jewelrycrafting_max_xp = jewelrycrafting_max_xp;
        this.cooking_level = cooking_level;
        this.cooking_xp = cooking_xp;
        this.cooking_max_xp = cooking_max_xp;
        this.alchemy_level = alchemy_level;
        this.alchemy_xp = alchemy_xp;
        this.alchemy_max_xp = alchemy_max_xp;
        this.hp = hp;
        this.max_hp = max_hp;
        this.haste = haste;
        this.critical_strike = critical_strike;
        this.wisdom = wisdom;
        this.prospecting = prospecting;
        this.initiative = initiative;
        this.threat = threat;
        this.attack_fire = attack_fire;
        this.attack_earth = attack_earth;
        this.attack_water = attack_water;
        this.attack_air = attack_air;
        this.dmg = dmg;
        this.dmg_fire = dmg_fire;
        this.dmg_earth = dmg_earth;
        this.dmg_water = dmg_water;
        this.dmg_air = dmg_air;
        this.res_fire = res_fire;
        this.res_earth = res_earth;
        this.res_water = res_water;
        this.res_air = res_air;
        this.effects = effects.map(x => {
            return new StorageEffect(x);
        });
        this.x = x;
        this.y = y;
        this.layer = layer;
        this.map_id = map_id;
        this.cooldown = cooldown;
        this.cooldown_expiration = cooldown_expiration;
        this.weapon_slot = weapon_slot;
        this.rune_slot = rune_slot;
        this.shield_slot = shield_slot;
        this.helmet_slot = helmet_slot;
        this.body_armor_slot = body_armor_slot;
        this.leg_armor_slot = leg_armor_slot;
        this.boots_slot = boots_slot;
        this.ring1_slot = ring1_slot;
        this.ring2_slot = ring2_slot;
        this.amulet_slot = amulet_slot;
        this.artifact1_slot = artifact1_slot;
        this.artifact2_slot = artifact2_slot;
        this.artifact3_slot = artifact3_slot;
        this.utility1_slot = utility1_slot;
        this.utility1_slot_quantity = utility1_slot_quantity;
        this.utility2_slot = utility2_slot;
        this.utility2_slot_quantity = utility2_slot_quantity;
        this.bag_slot = bag_slot;
        this.task = task;
        this.task_type = task_type;
        this.task_progress = task_progress;
        this.task_total = task_total;
        this.inventory_max_items = inventory_max_items;
        this.inventory = inventory.map(x => {
            return new InventorySlot(x);
        });
    }
}

module.exports = Characters;