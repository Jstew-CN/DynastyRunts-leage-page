/*   STEP 1   */
export const leagueID = "1313256773909491712"; // your league ID
export const leagueName = "Dynasty Runts"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
 <p>Welcome to the Dynasty Runts Fantasy Dashboard you filthy animals.</p>
 <p>Congratulations to our Inargural league winner Christian 'VOODOOZ' Hayes! and a warm elcome our newest Runt Jordan 'CTE' Smith!<p>
 <p>May the best Runt win!<p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    // Me
    {
      "roster": 0,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "734099444080967680",
      "name": "Stewmakemecrazy",
      "tookOver": 2025, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Orleans", // (optional)
      "bio": "I came, I saw, I went to bed",
      "photo": "/managers/john.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2025, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "NOS", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //"rival": {
       // name: "Timbo", // Can be anything (usually your rival's name)
        //link: 12, // manager array number within this array, or null to link back to all managers page
       // image: "/managers/tim.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/questin.png'
      },
      "favoritePlayer": 5965, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Moneyball this shit with computers",
      "tradingScale": 6, // 1 - 10
      "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
    // Trent
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "735971119571537920",
      "name": "tkbredx",
      "tookOver": 2025, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Cleveland", // (optional)
      "bio": "Fuck Yall",
      "photo": "/managers/dicks.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2025, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "patriots", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //"rival": {
        //name: "Allan", // Can be anything (usually your rival's name)
        //link: 6, // manager array number within this array, or null to link back to all managers page
        //image: "/managers/allan.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Win",
      "tradingScale": 7, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    // Brian
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "735971976161705984",
      "name": "backwoodloading",
      "tookOver": 2025, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Chicago, IL", // (optional)
      "bio": "",
      "photo": "/managers/fonte.JPG", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2025, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "saints", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //"rival": {
        //name: "Napsmoranfan", // Can be anything (usually your rival's name)
        //link: 4, // manager array number within this array, or null to link back to all managers page
        //image: "/managers/greg.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 9493, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Do better than Thomas and Allan",
      "tradingScale": 8, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    // Beau
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1261719627310837760",
      "name": "chefboyrdeezbxsdumb",
      "tookOver": 2025, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Orleans, LA", // (optional)
      "bio": "Nickelback rockstars",
      "photo": "/managers/greg.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2025, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "chiefs", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //"rival": {
        //name: "Fonte", // Can be anything (usually your rival's name)
        //link: 2, // manager array number within this array, or null to link back to all managers page
        //image: "/managers/fonte.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4970, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Prison gates won’t open up for me",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    // Christian
    {
      "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "735985118111457280",
      "name": "Tcjhayes",
      "tookOver": 2025, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Hoboken, NJ", // (optional)
      "bio": "Dominate the regular season, collapse in the playoffs",
      "photo": "/managers/tyler.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2025, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "saints", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //"rival": {
        //name: "Fonte", // Can be anything (usually your rival's name)
        //link: 6, // manager array number within this array, or null to link back to all managers page
        //image: "/managers/fonte.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Give the ball to Tyreek",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    // Chris
    {
      "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1261411578222231552",
      "name": "504Gucci",
      "tookOver": 2025, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Orleans, LA", // (optional)
      "bio": "I’m your typical 6’4 redhead with fat a**, dad bod, looking to be scratch by 40, and always down for a good time with a dramatic need to improve my cardiovascular health. Lmk if you’re interested.",
      "photo": "/managers/allan.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2025, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "saints", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //"rival": {
        //name: "Mulch", // Can be anything (usually your rival's name)
        //link: 6, // manager array number within this array, or null to link back to all managers page
        //image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "My team’s philosophy is simple - Be everyone’s daddy. I want to make my opponents feel inferior, feel insecure, question their livelihoods….",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    // Jordan
    {
      "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1264320447369990144",
      "name": "jumpshotsmitty4",
      "tookOver": 2026, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "OG", // (optional)
      "bio": "If youre reading this...my team is better than yours",
      "photo": "/managers/ryan.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2025, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "saints", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //"rival": {
      //  name: "Whoever im playing", // Can be anything (usually your rival's name)
      //  link: 0, // manager array number within this array, or null to link back to all managers page
      //  image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 730, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "UAWSTH",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    // Jon
    {
      "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "735971360429486080",
      "name": "jongreenAKas41",
      "tookOver": 2025, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Orleans, LA", // (optional)
      "bio": "My name is mulch",
      "photo": "/managers/mulch.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2025, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "saints", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //"rival": {
      //  name: "Big Red", // Can be anything (usually your rival's name)
       // link: 6, // manager array number within this array, or null to link back to all managers page
       // image: "/managers/allan.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4932, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "If you ain\’t last, you\’re first",
      "tradingScale": 7, // 1 - 10
      "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    // B Nev
    {
      "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "735972111448985600", // Actual is 739602561295896576
      "name": "Yuroooo",
      "tookOver": 2025, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Orleans", // (optional)
      "bio": "I like long walks on the beach and the air raid offense. I scout players based on hand size and credit score.",
      "photo": "/managers/kyle.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2025, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "49ers", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //"rival": {
       // name: "Bott", // Can be anything (usually your rival's name)
        //link: 0, // manager array number within this array, or null to link back to all managers page
        //image: "/managers/ryan.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 730, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "I just hope everyone has fun",
      "tradingScale": 1, // 1 - 10
      "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    //Mike
    {
      "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "996162902086328320", // actual "managerID": "1235047431314358272",
      "name": "mikeaveli",
      "tookOver": 2025, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Orleans, LA", // (optional)
      "bio": "Faith, family, fantasy football",
      "photo": "/managers/melanson.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2025, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "eagles", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //"rival": {
      //  name: "Fonte", // Can be anything (usually your rival's name)
      //  link: 0, // manager array number within this array, or null to link back to all managers page
      //  image: "/managers/fonte.JPG", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6770, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Mobile, agile, hostile",
      "tradingScale": 6, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    // Bret
    {
      "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "725932286121439232",
      "name": "therealyoungswag",
      "tookOver": 2025, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York, NY", // (optional)
      "bio": "I have a bunch of kids and stuff",
      "photo": "/managers/mikey.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2025, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "patriots", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //"rival": {
      //  name: "Whoever im playing", // Can be anything (usually your rival's name)
      //  link: 7, // manager array number within this array, or null to link back to all managers page
      //  image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 188, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "k", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "I love my wife",
      "tradingScale": 1, // 1 - 10
      "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    // Josh
    {
      "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "871832829498167296",
      "name": "jbarney24",
      "tookOver": 2025, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Orleans, LA", // (optional)
      "bio": "I used to suck eggs in high school",
      "photo": "/managers/paul.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2025, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "saints", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     // "rival": {
      //  name: "John", // Can be anything (usually your rival's name)
     //   link: 0, // manager array number within this array, or null to link back to all managers page
     //   image: "/managers/john.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 142, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "I love football",
      "tradingScale": 1, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
