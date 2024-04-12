

CREATE TABLE pokedex (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    primary_type VARCHAR(50) NOT NULL,
    secondary_type VARCHAR(50) NULL,
    evolution_stage INTEGER,
    region_of_origin VARCHAR(50) NOT NULL,
    height VARCHAR(10) NOT NULL,
    weight_lbs NUMERIC(5,1) NOT NULL,
    bst INTEGER NOT NULL,
    image VARCHAR(500) NOT NULL,
    moves VARCHAR(500)[]
    );



INSERT INTO pokedex (name, primary_type, secondary_type, evolution_stage, region_of_origin, height, weight_lbs, bst, image, moves)
VALUES ('Stufful', 'normal', 'fighting', 1, 'Alola', '1''08"', 15, 340,'https://img.pokemondb.net/artwork/avif/stufful.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    ('Bounsweet', 'grass', NULL, 1, 'Alola', '1''00"', 7.1, 210,'https://img.pokemondb.net/artwork/avif/bounsweet.avif', '{Razor Leaf, Draining Kiss, Swift, Zen Headbutt}'),
    ('Comfey', 'fairy', NULL, NULL, 'Alola', '0''04"', 0.7, 485,'https://img.pokemondb.net/artwork/avif/comfey.avif', '{Vine Whip, Magical Leaf, Acrobatics, Pollen Puff}'),
    ('Kommo-o', 'dragon', 'fighting', 3, 'Alola', '5''3"', 172.4, 600,'https://img.pokemondb.net/artwork/avif/kommo-o.avif', '{Dragon Claw, Metal Claw, Earthquake, Body Press}'),
    ('Lunala', 'psychic', 'ghost', 3, 'Alola', '13''01"', 264.6, 680,'https://img.pokemondb.net/artwork/avif/lunala.avif', '{Shadow Ball, Charge Beam, Psychic, Meteor Beam}')
    -- ('Raboot', 'fire', NULL, 2, 'Galar', '2''00"', 19.8, 420,'https://img.pokemondb.net/artwork/avif/raboot.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Corviknight', 'flying', 'steel', 3, 'Galar', '7''03"', 165.3, 495,'https://img.pokemondb.net/artwork/avif/corviknight.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Coalossal', 'rock', 'fire', 3, 'Galar', '9''02"', 684.5, 510,'https://img.pokemondb.net/artwork/avif/coalossal.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Basculegion', 'water', 'ghost', 2, 'Hisui', '9''10"', 242.5, 530,'https://img.pokemondb.net/artwork/avif/basculegion-male.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Meowscarada', 'grass', 'dark', 3, 'Paldea', '4''11"', 68.8, 530,'https://img.pokemondb.net/artwork/avif/meowscarada.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Crocalor', 'fire', NULL, 2, 'Paldea', '3''03"', 67.7, 411,'https://img.pokemondb.net/artwork/avif/crocalor.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Quaxly', 'water', NULL, 1, 'Paldea', '1''08"', 13.4, 310,'https://img.pokemondb.net/artwork/avif/quaxly.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Lokix', 'bug', 'dark', 2, 'Paldea', '3''03"', 38.6, 450,'https://img.pokemondb.net/artwork/avif/lokix.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Wattrel', 'electric', 'flying', 1, 'Paldea', '1''04"', 7.9, 280,'https://img.pokemondb.net/artwork/avif/wattrel.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Tinkaton', 'fairy', 'steel', 3, 'Paldea', '2''04"', 248.7, 506,'https://img.pokemondb.net/artwork/avif/tinkaton.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Cetitan', 'ice', NULL, 2, 'Paldea', '14''09"', 1543.2, 521,'https://img.pokemondb.net/artwork/avif/cetitan.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Tatsugiri', 'dragon', 'water', NULL, 'Paldea', '1''00"', 17.6, 475,'https://img.pokemondb.net/artwork/avif/tatsugiri-curly.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Clodsire', 'poison', 'ground', 2, 'Paldea', '5''11"', 491.6, 430,'https://img.pokemondb.net/artwork/avif/clodsire.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Great Tusk', 'ground', 'fighting', NULL, 'Paldea', '7''03"', 705.5, 570,'https://img.pokemondb.net/artwork/avif/great-tusk.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Chien Pao', 'dark', 'ice', NULL, 'Paldea', '6''03"', 335.5, 570,'https://img.pokemondb.net/artwork/avif/chien-pao.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Iron Valiant', 'fairy', 'fighting', NULL, 'Paldea', '4''07"', 77.2, 590,'https://img.pokemondb.net/artwork/avif/iron-valiant.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Poltchageist', 'grass', 'ghost', 1, 'Kitakami', '0''04"', 2.4, 308,'https://img.pokemondb.net/artwork/avif/poltchageist.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Hydrapple', 'grass', 'dragon', 3, 'Kitakami', '5''11"', 205, 540,'https://img.pokemondb.net/sprites/scarlet-violet/normal/hydrapple.png', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Raging Bolt', 'electric', 'dragon', NULL, 'Paldea', '17''01"', 1058.2, 590,'https://img.pokemondb.net/artwork/avif/raging-bolt.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Pecharunt', 'poison', 'ghost', NULL, 'Kitakami', '1''00"', 0.7, 600,'https://img.pokemondb.net/artwork/avif/pecharunt.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}')
RETURNING *;
