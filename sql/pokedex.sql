

CREATE TABLE pokedex (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    primary_type VARCHAR(50) NOT NULL,
    secondary_type VARCHAR(50) NULL,
    evolution_stage INTEGER,
    region_of_origin VARCHAR(50) NOT NULL,
    height VARCHAR(10) NOT NULL,
    weight_lbs NUMERIC(5,1) NOT NULL,
    bst INTEGER NOT NULL);



INSERT INTO pokedex (name, primary_type, secondary_type, evolution_stage, region_of_origin, height, weight_lbs, bst)
VALUES ('Stufful', 'normal', 'fighting', 1, 'Alola', '1''08"', 15, 340),
    ('Bounsweet', 'grass', NULL, 1, 'Alola', '1''00"', 7.1, 210),
    ('Comfey', 'fairy', NULL, NULL, 'Alola', '0''04"', 0.7, 485),
    ('Kommo-o', 'dragon', 'fighting', 3, 'Alola', '5''3"', 172.4, 600),
    ('Lunala', 'psychic', 'ghost', 3, 'Alola', '13''01"', 264.6, 680),
    ('Raboot', 'fire', NULL, 2, 'Galar', '2''00"', 19.8, 420),
    ('Corviknight', 'flying', 'steel', 3, 'Galar', '7''03"', 165.3, 495),
    ('Coalossal', 'rock', 'fire', 3, 'Galar', '9''02"', 684.5, 510),
    ('Basculegion', 'water', 'ghost', 2, 'Hisui', '9''10"', 242.5, 530),
    ('Meowscarada', 'grass', 'dark', 3, 'Paldea', '4''11"', 68.8, 530),
    ('Crocalor', 'fire', NULL, 2, 'Paldea', '3''03"', 67.7, 411),
    ('Quaxly', 'water', NULL, 1, 'Paldea', '1''08"', 13.4, 310),
    ('Lokix', 'bug', 'dark', 2, 'Paldea', '3''03"', 38.6, 450),
    ('Wattrel', 'electric', 'flying', 1, 'Paldea', '1''04"', 7.9, 280),
    ('Tinkaton', 'fairy', 'steel', 3, 'Paldea', '2''04"', 248.7, 506),
    ('Cetitan', 'ice', NULL, 2, 'Paldea', '14''09"', 1543.2, 521),
    ('Tatsugiri', 'dragon', 'water', NULL, 'Paldea', '1''00"', 17.6, 475),
    ('Clodsire', 'poison', 'ground', 2, 'Paldea', '5''11"', 491.6, 430),
    ('Great_Tusk', 'ground', 'fighting', NULL, 'Paldea', '7''03"', 705.5, 570),
    ('Chien_Pao', 'dark', 'ice', NULL, 'Paldea', '6''03"', 335.5, 570),
    ('Iron_Valiant', 'fairy', 'fighting', NULL, 'Paldea', '4''07"', 77.2, 590),
    ('Poltchageist', 'grass', 'ghost', 1, 'Kitakami', '0''04"', 2.4, 308),
    ('Hydrapple', 'grass', 'dragon', 3, 'Kitakami', '5''11"', 205, 540),
    ('Raging_Bolt', 'electric', 'dragon', NULL, 'Paldea', '17''01"', 1058.2, 590),
    ('Pecharunt', 'poison', 'ghost', NULL, 'Kitakami', '1''00"', 0.7, 600)
RETURNING *;
