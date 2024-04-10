

CREATE TABLE pokedex (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    primary_type VARCHAR(50) NOT NULL,
    secondary_type VARCHAR(50) NOT NULL,
    evolution_stage INTEGER,
    region_of_origin VARCHAR(50) NOT NULL,
    height VARCHAR(10) NOT NULL,
    weight INTEGER NOT NULL,
    bst INTEGER NOT NULL);



INSERT INTO pokedex (name, primary_type, secondary_type, evolution_stage, region_of_origin, height, weight, bst)
VALUES ('Stufful', 'normal', 'fighting', 1, 'Alola', '1''08"', 15, 340),
    ('Bounsweet', 'grass', 'Null', 1, 'Alola', '1''00"', 7.1, 210),
    ('Comfey', 'fairy', 'Null', 0, 'Alola', '0''04"', 0.7, 485),
    ('Kommo-o', 'dragon', 'fighting', 3, 'Alola', '5''3"', 172.4, 600),
    ('Lunala', 'psychic', 'ghost', 3, 'Alola', '13''01"', 264.6, 680),
    ('Raboot', 'fire', 'Null', 2, 'Galar', '2''00"', 19.8, 420),
    ('Corviknight', 'flying', 'steel', 3, 'Galar', '7''03"', 165.3, 495),
    ('Coalossal', 'rock', 'fire', 3, 'Galar', '9''02"', 684.5, 510),
    ('Basculegion', 'water', 'ghost', 2, 'Hisui', '9''10"', 242.5, 530),
    ('Meowscarada', 'grass', 'dark', 3, 'Paldea', '4''11"', 68.8, 530),
    ('Crocalor', 'fire', 'Null', 2, 'Paldea', '3''03"', 67.7, 411),
    ('Quaxly', 'water', 'Null', 1, 'Paldea', '1''08"', 13.4, 310),
    ('Lokix', 'bug', 'dark', 2, 'Paldea', '3''03"', 38.6, 450),
    ('Wattrel', 'electric', 'flying', 1, 'Paldea', '1''04"', 7.9, 280),
    ('Tinkaton', 'fairy', 'steel', 3, 'Paldea', '2''04"', 248.7, 506),
    ('Cetitan', 'ice', 'Null', 2, 'Paldea', '14''09"', 1543.2, 521),
    ('Tatsugiri', 'dragon', 'water', 0, 'Paldea', '1''00"', 17.6, 475),
    ('Clodsire', 'poison', 'ground', 2, 'Paldea', '5''11"', 491.6, 430),
    ('Great_Tusk', 'ground', 'fighting', 0, 'Paldea', '7''03"', 705.5, 570),
    ('Chien_Pao', 'dark', 'ice', 0, 'Paldea', '6''03"', 335.5, 570),
    ('Iron_Valiant', 'fairy', 'fighting', 0, 'Paldea', '4''07"', 77.2, 590),
    ('Poltchageist', 'grass', 'ghost', 1, 'Kitakami', '0''04"', 2.4, 308),
    ('Hydrapple', 'grass', 'dragon', 3, 'Kitakami', '5''11"', 205, 540),
    ('Raging_Bolt', 'electric', 'dragon', 0, 'Paldea', '17''01"', 1058.2, 590),
    ('Pecharunt', 'poison', 'ghost', 0, 'Kitakami', '1''00"', 0.7, 600)
RETURNING *;
