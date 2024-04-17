

CREATE TABLE pokedex (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    primary_type VARCHAR(50) NOT NULL,
    secondary_type VARCHAR(50) NULL,
    hp INTEGER NOT NULL,
    attack INTEGER NOT NULL,
    defense INTEGER NOT NULL,
    spatk INTEGER NOT NULL,
    spdef INTEGER NOT NULL,
    speed INTEGER NOT NULL,
    evolution_stage INTEGER,
    region_of_origin VARCHAR(50) NOT NULL,
    height VARCHAR(10) NOT NULL,
    weight_lbs NUMERIC(5,1) NOT NULL,
    bst INTEGER NOT NULL,
    image VARCHAR(500) NOT NULL
);

CREATE TABLE partyPokemon (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    primary_type VARCHAR(50) NOT NULL,
    secondary_type VARCHAR(50) NULL,
    hp INTEGER NOT NULL,
    attack INTEGER NOT NULL,
    defense INTEGER NOT NULL,
    spatk INTEGER NOT NULL,
    spdef INTEGER NOT NULL,
    speed INTEGER NOT NULL,
    image VARCHAR(500) NOT NULL,
    moves VARCHAR(500)[]
    -- abilities VARCHAR(500)[]
);


CREATE TABLE opponentPokemon (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    primary_type VARCHAR(50) NOT NULL,
    secondary_type VARCHAR(50) NULL,
    hp INTEGER NOT NULL,
    attack INTEGER NOT NULL,
    defense INTEGER NOT NULL,
    spatk INTEGER NOT NULL,
    spdef INTEGER NOT NULL,
    speed INTEGER NOT NULL,
    image VARCHAR(500) NOT NULL,
    moves VARCHAR(500)[]
    -- abilities VARCHAR(500)[]
);

CREATE TABLE moves (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    power INTEGER NULL,
    accuracy INTEGER NOT NULL
);

CREATE TABLE battle (
    id SERIAL PRIMARY KEY, 
    type VARCHAR(50) NOT NULL,
    strengths VARCHAR(50)[] NULL,
    weaknesses VARCHAR(50)[] NOT NULL,
    immunities VARCHAR(50)[] NULL,
    noeffect VARCHAR(50)[] NULL
);

CREATE TABLE stages (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    background VARCHAR(5000) NOT NULL,
    music  VARCHAR(500)NOT NULL
);



INSERT INTO pokedex (name, primary_type, secondary_type, hp, attack, defense, spatk, spdef, speed, evolution_stage, region_of_origin, height, weight_lbs, bst, image)
VALUES ('Stufful', 'normal', 'fighting', 70, 75, 50, 45, 50, 50, 1, 'Alola', '1''08"', 15, 340,'https://img.pokemondb.net/artwork/avif/stufful.avif'),
    ('Bounsweet', 'grass', NULL, 42, 30, 38, 30, 38, 32, 1, 'Alola', '1''00"', 7.1, 210,'https://img.pokemondb.net/artwork/avif/bounsweet.avif'),
    ('Comfey', 'fairy', NULL, 51, 52, 90, 82, 110, 100, NULL, 'Alola', '0''04"', 0.7, 485,'https://img.pokemondb.net/artwork/avif/comfey.avif'),
    ('Kommo-o', 'dragon', 'fighting', 75, 110, 125, 100, 105, 85, 3, 'Alola', '5''3"', 172.4, 600,'https://img.pokemondb.net/artwork/avif/kommo-o.avif'),
    ('Lunala', 'psychic', 'ghost', 137, 113, 89, 137, 107, 97, 3, 'Alola', '13''01"', 264.6, 680,'https://img.pokemondb.net/artwork/avif/lunala.avif'),
    ('Raboot', 'fire', NULL, 65, 86, 60, 55, 60, 94, 2, 'Galar', '2''00"', 19.8, 420,'https://img.pokemondb.net/artwork/avif/raboot.avif'),
    ('Corviknight', 'flying', 'steel', 98, 87, 105, 53, 85, 67, 3, 'Galar', '7''03"', 165.3, 495,'https://img.pokemondb.net/artwork/avif/corviknight.avif'),
    ('Coalossal', 'rock', 'fire', 110, 80, 120, 80, 90, 30, 3, 'Galar', '9''02"', 684.5, 510,'https://img.pokemondb.net/artwork/avif/coalossal.avif'),
    ('Basculegion', 'water', 'ghost', 120, 112, 65, 80, 75, 78, 2, 'Hisui', '9''10"', 242.5, 530,'https://img.pokemondb.net/artwork/avif/basculegion-male.avif'),
    ('Sprigatito', 'grass', NULL, 40, 61, 54, 45, 45, 65, 1, 'Paldea', '1''04"', 9.0, 310,'https://img.pokemondb.net/artwork/avif/sprigatito.avif'),
    ('Meowscarada', 'grass', 'dark', 76, 110, 70, 81, 70, 123, 3, 'Paldea', '4''11"', 68.8, 530,'https://img.pokemondb.net/artwork/avif/meowscarada.avif'),
    ('Fuecoco', 'fire', NULL, 67, 45, 59, 63, 40, 36, 1, 'Paldea', '1''04"', 21.6, 310,'https://img.pokemondb.net/artwork/avif/fuecoco.avif'),
    ('Crocalor', 'fire', NULL, 81, 55, 78, 90, 58, 49, 2, 'Paldea', '3''03"', 67.7, 411,'https://img.pokemondb.net/artwork/avif/crocalor.avif'),
    ('Quaxly', 'water', NULL, 55, 65, 45, 50, 45, 50, 1, 'Paldea', '1''08"', 13.4, 310,'https://img.pokemondb.net/artwork/avif/quaxly.avif'),
    ('Lokix', 'bug', 'dark', 71, 102, 78, 52, 55, 92, 2, 'Paldea', '3''03"', 38.6, 450,'https://img.pokemondb.net/artwork/avif/lokix.avif'),
    ('Wattrel', 'electric', 'flying', 40, 40, 35, 55, 40, 70, 1, 'Paldea', '1''04"', 7.9, 280,'https://img.pokemondb.net/artwork/avif/wattrel.avif'),
    ('Tinkaton', 'fairy', 'steel', 85, 75, 77, 70, 105, 94, 3, 'Paldea', '2''04"', 248.7, 506,'https://img.pokemondb.net/artwork/avif/tinkaton.avif'),
    ('Cetitan', 'ice', NULL, 170, 113, 65, 45, 55, 73, 2, 'Paldea', '14''09"', 1543.2, 521,'https://img.pokemondb.net/artwork/avif/cetitan.avif'),
    ('Tatsugiri', 'dragon', 'water', 68, 50, 60, 120, 95, 82, NULL, 'Paldea', '1''00"', 17.6, 475,'https://img.pokemondb.net/artwork/avif/tatsugiri-curly.avif'),
    ('Clodsire', 'poison', 'ground', 130, 75, 60, 45, 100, 20, 2, 'Paldea', '5''11"', 491.6, 430,'https://img.pokemondb.net/artwork/avif/clodsire.avif'),
    ('Great Tusk', 'ground', 'fighting', 115, 131, 131, 53, 53, 87, NULL, 'Paldea', '7''03"', 705.5, 570,'https://img.pokemondb.net/artwork/avif/great-tusk.avif'),
    ('Chien Pao', 'dark', 'ice', 80, 120, 80, 90, 65, 135, NULL, 'Paldea', '6''03"', 335.5, 570,'https://img.pokemondb.net/artwork/avif/chien-pao.avif'),
    ('Iron Valiant', 'fairy', 'fighting', 74, 130, 90, 120, 60, 116, NULL, 'Paldea', '4''07"', 77.2, 590,'https://img.pokemondb.net/artwork/avif/iron-valiant.avif'),
    ('Poltchageist', 'grass', 'ghost', 40, 45, 45, 74, 54, 50, 1, 'Kitakami', '0''04"', 2.4, 308,'https://img.pokemondb.net/artwork/avif/poltchageist.avif'),
    ('Hydrapple', 'grass', 'dragon', 106, 80, 110, 120, 80, 44, 3, 'Kitakami', '5''11"', 205, 540,'https://img.pokemondb.net/sprites/scarlet-violet/normal/hydrapple.png'),
    ('Raging Bolt', 'electric', 'dragon', 125, 73, 91, 137, 89, 75, NULL, 'Paldea', '17''01"', 1058.2, 590,'https://img.pokemondb.net/artwork/avif/raging-bolt.avif'),
    ('Pecharunt', 'poison', 'ghost', 88, 88, 160, 88, 88, 88, NULL, 'Kitakami', '1''00"', 0.7, 600,'https://img.pokemondb.net/artwork/avif/pecharunt.avif')
RETURNING *;



-- INSERT INTO partyPokemon (name, primary_type, secondary_type, hp, attack, defense, spatk, spdef, speed, image, moves, abilities)
-- VALUES ('Stufful', 'normal', 'fighting', 120, 75, 100, 80, 115, 50, 'https://img.pokemondb.net/artwork/avif/stufful.avif', '{}', '{Fluffy, Klutz}')
--     -- ('Bounsweet', 'grass', null, 120, 75, 100, 80, 115, 32, 'https://img.pokemondb.net/artwork/avif/bounsweet.avif', '{}', '{Leaf Guard, Oblivious}'),
--     -- ('Comfey', 'fairy', null, 120, 75, 100, 80, 115, 100, 'https://img.pokemondb.net/artwork/avif/comfey.avif', '{}', '{Flower Veil, Triage}'),
--     -- ('Kommo-o', 'dragon', 'fighting', 120, 75, 100, 80, 115, 85, 'https://img.pokemondb.net/artwork/avif/kommo-o.avif', '{}', '{Bulletproof, Soundproof}'),
--     -- ('Lunala', 'psychic', 'ghost', 120, 75, 100, 80, 115, 97, 'https://img.pokemondb.net/artwork/avif/lunala.avif', '{}', '{Shadow Shield}'),
--     -- ('Sprigatito', 'grass', null, 40, 61, 54, 45, 45, 65, 'https://img.pokemondb.net/artwork/avif/sprigatito.avif', '{}', '{Overgrow}'),
--     -- ('Fuecoco', 'fire', null, 67, 45, 59, 63, 40, 36, 'https://img.pokemondb.net/artwork/avif/fuecoco.avif', '{}', '{Blaze}'),
--     -- ('Quaxly', 'water', null, 55, 65, 45, 50, 45, 50, 'https://img.pokemondb.net/artwork/avif/quaxly.avif', '{}', '{Torrent}')
--     RETURNING *;


INSERT INTO moves (name, type, category, power, accuracy)
VALUES ('thunder shock', 'electric', 'special', 40, 100),
    ('thunderbolt', 'electric', 'special', 90, 100),
    ('tackle', 'normal', 'physical', 40, 100),
    ('ember', 'fire', 'special', 40, 100),
    ('water gun', 'water', 'special', 40, 100),
    ('liquidation', 'water', 'physical', 85, 100),
    ('flamethrower', 'fire', 'special', 90, 100),
    ('vine whip', 'grass', 'physical', 45, 100),
    ('growl', 'normal', 'status', null, 100),
    ('struggle bug', 'bug', 'special', 50, 100),
    ('bug bite', 'bug', 'physical', 60, 100),
    ('gust', 'flying', 'special', 40, 100),
    ('acrobatics', 'flying', 'physical', 55, 100),
    ('sludge bomb', 'poison', 'special', 90, 100),
    ('seed bomb', 'grass', 'physical', 80, 100),
    ('earthquake', 'ground', 'physical', 100, 100),
    ('throat chop', 'dark', 'physical', 80, 100),
    ('dark pulse', 'dark', 'special', 80, 100),
    ('ice fang', 'ice', 'physical', 65, 95),
    ('bite', 'dark', 'physical', 60, 100),
    ('power gem', 'rock', 'special', 80, 100),
    ('ice beam', 'ice', 'special', 90, 100),
    ('posion jab', 'poison', 'physical', 80, 100),
    ('ice spinner', 'ice', 'physical', 80, 100),
    ('bulldoze', 'ground', 'physical', 60, 100),
    ('fairy wind', 'fairy', 'special', 40, 100),
    ('play rough', 'fairy', 'physical', 90, 90),
    ('dragon pulse', 'dragon', 'special', 85, 100),
    ('dragon claw', 'dragon', 'physical', 80, 100),
    ('ancient power', 'rock', 'special', 60, 100),
    ('thief', 'dark', 'physical', 60, 100),
    ('psybeam', 'psychic', 'special', 65, 100),
    ('shadow ball', 'ghost', 'special', 80, 100),
    ('shadow claw', 'ghost', 'physical', 70, 100),
    ('low sweep', 'fighting', 'physical', 65, 100),
    ('brick break', 'fighting', 'physical', 75, 100),
    ('flash cannon', 'steel', 'special', 80, 100),
    ('metal claw', 'steel', 'physical', 50, 100),
    ('draining kiss', 'fairy', 'special', 50, 100),
    ('x-scissor', 'bug', 'physical', 80, 100),
    ('pollen puff', 'bug', 'special', 90, 100),
    ('wicked blow', 'dark', 'physical', 75, 100),
    ('night daze', 'dark', 'special', 85, 95),
    ('dragon hammer', 'dragon', 'physical', 90, 100),
    ('draco meteor', 'dragon', 'special', 130, 90),
    ('thunder punch', 'electric', 'physical', 75, 100),
    ('electro drift', 'electric', 'special', 100, 100),
    ('spirit break', 'fairy', 'physical', 75, 100),
    ('moonblast', 'fairy', 'special', 95, 100),
    ('dazzling gleam', 'fairy', 'special', 80, 100),
    ('sacred sword', 'fighting', 'physical', 90, 100),
    ('vacuum wave', 'fighting', 'special', 40, 100),
    ('torch song', 'fire', 'special', 80, 100),
    ('fire lash', 'fire', 'physical', 80, 100),
    ('drill peck', 'flying', 'physical', 80, 100),
    ('air slash', 'flying', 'special', 75, 95),
    ('spirit shackle', 'ghost', 'physical', 80, 100),
    ('bitter malice', 'ghost', 'special', 75, 100),
    ('moongeist beam', 'ghost', 'special', 100, 100),
    ('energy ball', 'grass', 'special', 90, 100),
    ('leaf blade', 'grass', 'physical', 90, 100),
    ('giga drain', 'grass', 'special', 75, 100),
    ('earth power', 'ground', 'special', 90, 100),
    ('scorching sands', 'ground', 'special', 70, 100),
    ('thousand arrows', 'ground', 'physical', 90, 100),
    ('glacial lance', 'ice', 'physical', 120, 100),
    ('freeze-dry', 'ice', 'special', 70, 100),
    ('extreme speed', 'normal', 'physical', 80, 100),
    ('tri attack', 'normal', 'special', 80, 100),
    ('cross poison', 'poison', 'physical', 70, 100),
    ('sludge wave', 'poison', 'special', 95, 100),
    ('psyblade', 'psychic', 'physical', 80, 100),
    ('psycho cut', 'psychic', 'physical', 70, 100),
    ('smach down', 'rock', 'physical', 50, 100),
    ('diamond storm', 'rock', 'physical', 100, 95),
    ('anchor shot', 'steel', 'physical', 80, 100),
    ('mirror shot', 'steel', 'special', 65, 85),
    ('surf', 'water', 'special', 90, 100),
    ('waterfall', 'water', 'physical', 80, 100),
    ('scald', 'water', 'special', 80, 100),
    ('fishious rend', 'water', 'physical', 85, 100),
    ('psychic', 'psychic', 'special', 90, 100)
    RETURNING *;


INSERT INTO battle (type, strengths, weaknesses, immunities, noeffect)
VALUES ('normal', null, '{rock, steel}', '{ghost}', '{ghost}'),
    ('fighting', '{normal, rock, steel, ice, dark}', '{flying, posion, psychic, bug, ghost, fairy}', null, '{ghost}'),
    ('flying', '{fighting, bug, grass}', '{rock, steel, electric}', '{ground}', null),
    ('poison', '{grass, fairy}', '{poison, ground, rock, ghost}', null, '{steel}'),
    ('ground', '{poison, rock, steel, fire, electric}', '{bug, grass}', '{electric}', '{flying}'),
    ('rock', '{flying, bug, fire, ice}', '{fighting, ground, steel}', null, null),
    ('bug', '{grass, psychic, dark}', '{fighting, flying, posion, ghost, steel, fire, fairy}', null, null),
    ('ghost', '{ghost, psychic}', '{dark}', '{normal, fighting}', '{normal}'),
    ('steel', '{rock, ice, fairy}', '{steel, fire, water, electric}', '{poison}', null),
    ('fire', '{bug, steel, grass, ice}', '{rock, fire, water, dragon}', null, null),
    ('water', '{ground, rock, fire}', '{water, grass, dragon}', null, null),
    ('grass', '{ground, rock, water}', '{flying, poison, bug, steel, fire, grass, dragon}', null, null),
    ('electric', '{flying, water}', '{grass, electric, dragon}', null, '{ground}'),
    ('psychic', '{fighting, poison}', '{steel, psychic}', null, '{dark}'),
    ('ice', '{flying, ground, grass, dragon}', '{steel, fire, water, ice}', null, null),
    ('dragon', '{dragon}', '{steel}', null, '{fairy}'),
    ('dark', '{ghost, psychic}', '{fighting, dark, fairy}', '{psychic}', null),
    ('fairy', '{fighting, dragon, dark}', '{poison, steel, fire}', '{dragon}', null),


INSERT INTO stages (name, background, music)
VALUES ('Viridian Forest', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0359f770-0e1b-4564-8d42-2f6de88fc7ae/dgxt9pf-1db5a4c6-1968-4381-82a0-71acd01f95c1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzNTlmNzcwLTBlMWItNDU2NC04ZDQyLTJmNmRlODhmYzdhZVwvZGd4dDlwZi0xZGI1YTRjNi0xOTY4LTQzODEtODJhMC03MWFjZDAxZjk1YzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pykcCmlCau3vhgaESE_Egr1pgtL1LLGIsed5JCBw3FI', '../audio/viridianForest.mp3'),
    ('Pokemon Gym', 'https://archives.bulbagarden.net/media/upload/5/50/Ballonlea_Stadium_battlefield.png', '../audio/gymLeader.mp3'),
    ('Wild', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80ff523f-ff84-457d-a547-464588d3a3d3/dfyt06i-a628cd42-5aa0-42c9-a428-bf68c7f42196.png/v1/fill/w_1095,h_730,q_70,strp/paldea_route_background_2_by_willdinomaster55_dfyt06i-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvODBmZjUyM2YtZmY4NC00NTdkLWE1NDctNDY0NTg4ZDNhM2QzXC9kZnl0MDZpLWE2MjhjZDQyLTVhYTAtNDJjOS1hNDI4LWJmNjhjN2Y0MjE5Ni5wbmciLCJ3aWR0aCI6Ijw9MTIwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.jAcpwRibX6GaqbPSe53SN3iS09DlTSWMyBs6z_h0vWQ', '../audio/wildPokemon.mp3'),
    ('Mt. Moon', 'https://i.ytimg.com/vi/84CTJXAz5FE/maxresdefault.jpg', '../audio/mtMoon.mp3'),
    ('Sea', 'https://www.videogameschronicle.com/files/2020/06/Pok%C3%A9mon-Sword-and-Shield-Isle-of-Armor-landscape.jpg', '../audio/seaAudio.mp3'),
    ('Champion Battle', 'https://media.licdn.com/dms/image/D4D10AQF-bVfKDXSxgA/image-shrink_800/0/1688322707028?e=2147483647&v=beta&t=vIc6IbbDYHVpcwYS6anlNNvBPMuulMsyG3VH_SO0WpU', '../audio/championBattle.mp3'),
    ('Pokemon Tower', 'https://i.ytimg.com/vi/pCucn1VDOME/maxresdefault.jpg', '../audio/pokemonTower.mp3')
    RETURNING *;
    


-- SELECT * FROM pokedex ORDER BY RANDOM() LIMIT 6;

-- SELECT * FROM moves WHERE type = 'electric' ORDER BY RANDOM() LIMIT 1;

-- SELECT partypokemon.id, partypokemon.name, partypokemon.primary_type, partypokemon.secondary_type, moves.name, moves.type from partypokemon INNER JOIN moves ON partypokemon.primary_type = moves.type OR partypokemon.secondary_type = moves.type WHERE partypokemon.id = 5 ORDER BY RANDOM() LIMIT 4;

SELECT partypokemon.attack, partypokemon.spatk, partypokemon.defense, partypokemon.spdef, partypokemon.primary_type, partypokemon.secondary_type, moves.power, moves.accuracy FROM partypokemon INNER JOIN moves ON partypokemon.primary_type = moves.type OR partypokemon.secondary_type = moves.type;

-- INSERT INTO partypokemon (name, primary_type, secondary_type, hp, attack, defense, spatk, spdef, speed, image) SELECT name, primary_type, secondary_type, hp, physical, defense, spatk, spdef, speed, image FROM pokedex ORDER BY RANDOM() LIMIT 6;



