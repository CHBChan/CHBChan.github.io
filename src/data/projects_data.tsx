import vigilantes from '../assets/vigilantes.png';
import confessional from '../assets/confessional.png';

const GitList: GitProject[] = [
    {
        projectTitle: 'Vigilantes',
        gitLink: 'https://github.com/wassinkl/Vigilantes',
        projectImage: vigilantes,
        projectDesc1: 'This project was completed for my mobile development course in university with six other members. Vigilantes was coded in Kotlin for Android and targeted towards law enforcement officers to help them record automotive incidents through the usage of machine learning.',
        projectDesc2: 'My role in this project was the lead frontend developer. I worked on the data structures necessary for the project to succeed, in addition to contributing to the design of the application\'s UI. Beyond that, I also collaborated with other members to ensure that the backend connected to the frontend.'
    },
    {
        projectTitle: 'Confessional',
        gitLink: 'https://github.com/CHBChan/confessional-client',
        projectImage: confessional,
        projectDesc1: 'This was a personal fullstack project I completed to learn more about backend development. Users of this website are able to submit their own confessions to be stored in the backend. They are also given the option to view random confessions retrieved from the server.',
        projectDesc2: 'The frontend was developed using React and communicated with the server via the Axios library. The backend was developed using Node.js and Express. The user inputs are stored into a PostgreSQL database with the use of the Sequelize library.'
    }
];

const GameList: GameProject[] = [
    {
        projectTitle: 'The Legend of Zelda - The Eagle Dungeon Recreation',
        projectDesc: 'This project was a recreation of the first dungeon of The Legend of Zelda for the NES. It was co-developed with Ninad Chavan using the Unity Engine.',
        projectResources: [
            {
                resourceTitle: 'HUD',
                resourceURL: 'https://www.spriters-resource.com/nes/legendofzelda/sheet/119278/'
            },
            {
                resourceTitle: 'Dungeon Enemies',
                resourceURL: 'https://www.spriters-resource.com/nes/legendofzelda/sheet/31806/'
            },
            {
                resourceTitle: 'NPC',
                resourceURL: 'https://www.spriters-resource.com/nes/legendofzelda/sheet/21189/'
            },
            {
                resourceTitle: 'Link',
                resourceURL: 'https://www.spriters-resource.com/nes/legendofzelda/sheet/8366/'
            },
            {
                resourceTitle: 'Bow Room Tileset',
                resourceURL: 'https://www.spriters-resource.com/nes/legendofzelda/sheet/119164/'
            },
            {
                resourceTitle: 'NES Font',
                resourceURL: 'https://zeldauniverse.net/media/fonts/'
            }
        ],
        projectDL: {
            windowsDL: 'src/assets/zelda-windows.zip',
            macosDL: 'src/assets/zelda-macos.zip'
        }
    },
    {
        projectTitle: 'Insanity',
        projectDesc: 'This project was an individual project I developed using the Unity Engine. Insanity was intended to be a Roguelike Auto Battler, but unfortunately my game design skills were a little too inadequate in executing the game to a satisfactory state.',
        projectResources: [
            {
                resourceTitle: 'Battler Sprites: Ækashics Librarium',
                resourceURL: 'http://www.akashics.moe/'
            },
            {
                resourceTitle: 'Various game icons: game-icons.net',
                resourceURL: 'https://game-icons.net/'
            },
            {
                resourceTitle: 'Font: Prociono',
                resourceURL: 'https://fonts.google.com/specimen/Prociono'
            },
            {
                resourceTitle: 'Control prompt: Xelu\'s FREE Controllers & Keyboard PROMPTS',
                resourceURL: 'https://thoseawesomeguys.com/prompts/'
            },
            {
                resourceTitle: 'Regular Theme - Out of Shadows by Antti Luode',
                resourceURL: 'https://www.soundclick.com/artist/default.cfm?bandid=1277008&content=songs'
            },
            {
                resourceTitle: '1st boss theme - 絶望世界 by alaki paca',
                resourceURL: 'https://dova-s.jp/bgm/play15314.html'
            },
            {
                resourceTitle: '2nd boss theme - 暗がりから伸びる手 by 松浦洋介',
                resourceURL: 'https://dova-s.jp/bgm/play15508.html'
            },
            {
                resourceTitle: 'Final boss theme - A State of Despair by Mid-Air Machine',
                resourceURL: 'https://freemusicarchive.org/music/Ask%20Again/flailing-dirge-energy-emotion-1/a-state-of-despair'
            }
        ],
        projectDL: {
            windowsDL: 'src/assets/insanity-windows.zip',
            macosDL: 'src/assets/insanity-macos.zip'
        }
    },
    {
        projectTitle: 'Midnight Madness',
        projectDesc: 'This project was developed using the Unity Engine in collaboration with Robert Grasinki, Andrew Myers, and Ninad Chavan. Midnight Madness is a 2D horror-survival game that made use of light mechanics. I was responsible for the game\'s level design and enemy movement AI.',
        projectResources: [
            {
                resourceTitle: 'Player/Enemy Sprites',
                resourceURL: 'https://pipoya.net/sozai/'
            },
            {
                resourceTitle: 'Tileset',
                resourceURL: 'https://fawf-art.itch.io/16x16-forest-tileset'
            },
            {
                resourceTitle: 'NPC',
                resourceURL: 'https://www.spriters-resource.com/nes/legendofzelda/sheet/21189/'
            },
            {
                resourceTitle: 'ShadowCaster2DTileMap',
                resourceURL: 'https://github.com/SeksitSeeton/Auto-add-Shadow-Caster-2D-on-TileMap/blob/main/Assets/ShadowCaster2DTileMap.cs'
            },
            {
                resourceTitle: 'Control prompt: Xelu\'s FREE Controllers & Keyboard PROMPTS',
                resourceURL: 'https://thoseawesomeguys.com/prompts/'
            }
        ],
        projectDL: {
            windowsDL: 'src/assets/mm-windows.zip',
            macosDL: 'src/assets/mm-macos.zip'
        }
    }
];

export { GitList, GameList };