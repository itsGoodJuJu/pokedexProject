const nbaTeams = [
    // Atlanta Hawks
    ["Trae Young", "John Collins", "Clint Capela", "Bogdan Bogdanović", "Kevin Huerter"],
    
    // Boston Celtics
    ["Jayson Tatum", "Jaylen Brown", "Marcus Smart", "Al Horford", "Robert Williams III"],
    
    // Brooklyn Nets
    ["Kevin Durant", "Kyrie Irving", "James Harden", "Blake Griffin", "Joe Harris"],
    
    // Charlotte Hornets
    ["LaMelo Ball", "Terry Rozier", "Gordon Hayward", "Miles Bridges", "P.J. Washington"],
    
    // Chicago Bulls
    ["Zach LaVine", "DeMar DeRozan", "Nikola Vučević", "Lonzo Ball", "Alex Caruso"],
    
    // Cleveland Cavaliers
    ["Darius Garland", "Collin Sexton", "Evan Mobley", "Jarrett Allen", "Isaac Okoro"],
    
    // Dallas Mavericks
    ["Luka Dončić", "Kristaps Porziņģis", "Tim Hardaway Jr.", "Jalen Brunson", "Dwight Powell"],
    
    // Denver Nuggets
    ["Nikola Jokić", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Monte Morris"],
    
    // Detroit Pistons
    ["Cade Cunningham", "Jerami Grant", "Isaiah Stewart", "Kelly Olynyk", "Killian Hayes"],
    
    // Golden State Warriors
    ["Stephen Curry", "Klay Thompson", "Draymond Green", "Andrew Wiggins", "Kevon Looney"],
    
    // Houston Rockets
    ["Jalen Green", "Christian Wood", "Kevin Porter Jr.", "Jae'Sean Tate", "Alperen Şengün"],
    
    // Indiana Pacers
    ["Domantas Sabonis", "Myles Turner", "Caris LeVert", "Malcolm Brogdon", "Chris Duarte"],
    
    // LA Clippers
    ["Kawhi Leonard", "Paul George", "Reggie Jackson", "Ivica Zubac", "Nicolas Batum"],
    
    // Los Angeles Lakers
    ["LeBron James", "Anthony Davis", "Russell Westbrook", "Carmelo Anthony", "DeAndre Jordan"],
    
    // Memphis Grizzlies
    ["Ja Morant", "Jaren Jackson Jr.", "Dillon Brooks", "Steven Adams", "Desmond Bane"],
    
    // Miami Heat
    ["Jimmy Butler", "Bam Adebayo", "Kyle Lowry", "Tyler Herro", "Duncan Robinson"],
    
    // Milwaukee Bucks
    ["Giannis Antetokounmpo", "Khris Middleton", "Jrue Holiday", "Brook Lopez", "Bobby Portis"],
    
    // Minnesota Timberwolves
    ["Karl-Anthony Towns", "D'Angelo Russell", "Anthony Edwards", "Malik Beasley", "Jaden McDaniels"],
    
    // New Orleans Pelicans
    ["Zion Williamson", "Brandon Ingram", "Jonas Valančiūnas", "Devonte' Graham", "Josh Hart"],
    
    // New York Knicks
    ["Julius Randle", "RJ Barrett", "Mitchell Robinson", "Evan Fournier", "Derrick Rose"],
    
    // Oklahoma City Thunder
    ["Shai Gilgeous-Alexander", "Lu Dort", "Josh Giddey", "Darius Bazley", "Isaiah Roby"],
    
    // Orlando Magic
    ["Jalen Suggs", "Markelle Fultz", "Jonathan Isaac", "Chuma Okeke", "Mo Bamba"],
    
    // Philadelphia 76ers
    ["Joel Embiid", "James Harden", "Tobias Harris", "Seth Curry", "Andre Drummond"],
    
    // Phoenix Suns
    ["Devin Booker", "Chris Paul", "Deandre Ayton", "Mikal Bridges", "Cam Johnson"],
    
    // Portland Trail Blazers
    ["Damian Lillard", "CJ McCollum", "Norman Powell", "Jusuf Nurkić", "Robert Covington"],
    
    // Sacramento Kings
    ["De'Aaron Fox", "Tyrese Haliburton", "Buddy Hield", "Harrison Barnes", "Domantas Sabonis"],
    
    // San Antonio Spurs
    ["Dejounte Murray", "Keldon Johnson", "Derrick White", "Jakob Poeltl", "Doug McDermott"],
    
    // Toronto Raptors
    ["Pascal Siakam", "Fred VanVleet", "OG Anunoby", "Scottie Barnes", "Gary Trent Jr."],
    
    // Utah Jazz
    ["Donovan Mitchell", "Rudy Gobert", "Mike Conley", "Jordan Clarkson", "Bojan Bogdanović"],
    
    // Washington Wizards
    ["Bradley Beal", "Kristaps Porziņģis", "Spencer Dinwiddie", "Rui Hachimura", "Daniel Gafford"]
];

for(let i=0; i < nbaTeams.lengths; i++) {
   for(let j=0; j < nbaTeams.lengths; j++) {
    console.log(nbaTeams)
    // let lastName = nbaTeams[nbaTeams.length-1];
    // console.log(lastName)

let nbaTeams = nbaTeams.innerHTML
document.getElementById("demo").innerHTML = nbaTeams[13]
console.log(nbaTeams[13])

let team = document.getElementById("demo")

let selectedTeam = nbaTeams[team]

team.innerText = selectedTeam[nbaTeams]
console.log(selectedTeam)
   }
}
console.log(nbaTeams[5][3])
//   console.log(nbaTeams[13])
//   console.log(nbaTeams[14])
 
