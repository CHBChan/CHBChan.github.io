import { SiWindows, SiMacos } from "react-icons/si";

function GameProjects() {

  return (

    <div className='pageContent flex flex-col items-center mx-8'>
      <p className='text-4xl'>
        University game projects
      </p>
      <p className='text-2xl mt-4'>
        These are projects I've done for my university game development course.
      </p>
      <div className='project1 flex flex-col items-center max-w-sm'>
        <p className='text-2xl mt-4'>
          The Legend of Zelda - The Eagle Dungeon Recreation
        </p>
        <img src=''/>
        <p className='text-xl mt-4'>
          This project was a recreation of the first dungeon of The Legend of Zelda for the NES.
          It was co-developed with Ninad Chavan using the Unity Engine.
        </p>
        <p className='text-xl mt-2'>
          Credits for various spritesheets/resources we have used:
        </p>
        <ul>
          <li><a href="https://www.spriters-resource.com/nes/legendofzelda/sheet/119278/" target="_blank">HUD</a></li>
          <li><a href="https://www.spriters-resource.com/nes/legendofzelda/sheet/31806/" target="_blank">Dungeon Enemies</a></li>
          <li><a href="https://www.spriters-resource.com/nes/legendofzelda/sheet/21189/" target="_blank">NPC</a></li>
          <li><a href="https://www.spriters-resource.com/nes/legendofzelda/sheet/8366/" target="_blank">Link</a></li>
          <li><a href="https://www.spriters-resource.com/nes/legendofzelda/sheet/119164/" target="_blank">Bow Room Tileset</a></li>
          <li><a href="https://zeldauniverse.net/media/fonts/" target="_blank">NES Font</a></li>
        </ul>
        <div className="tlozDL flex gap-4 mt-4">
          <a href='src/assets/zelda-windows.zip'>
            <button className='px-4 py-4 min-w-180px border-4 rounded shadow text-xl'>
              <div className='flex items-center gap-4'>
                Download
                <SiWindows size={48}/>
              </div>
            </button>
          </a>
          <a href='src/assets/zelda-macos.zip'>
            <button className='px-4 py-4 min-w-180px border-4 rounded shadow text-xl'>
              <div className='flex items-center gap-4'>
                Download
                <SiMacos size={48}/>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className='project2 flex flex-col items-center max-w-sm'>
        <p className='text-2xl mt-4'>
          Insanity
        </p>
        <img src=''/>
        <p className='text-xl mt-4'>
          This project was an individual project I developed using the Unity Engine.
          Insanity was intended to be a Roguelike Auto Battler, but unfortunately my game design skills were a little too inadequate in executing the game to a satisfactory state.
        </p>
        <p className='text-xl mt-2'>Credits for various resources I have used:</p>
        <ul>
          <li><a href="http://www.akashics.moe/" target="_blank">Battler Sprites: Ækashics Librarium</a></li>
          <li><a href="https://game-icons.net/" target="_blank">Various game icons: game-icons.net</a></li>
          <li><a href="https://fonts.google.com/specimen/Prociono" target="_blank">Font: Procino</a></li>
          <li><a href="https://thoseawesomeguys.com/prompts/" target="_blank">Control prompt: Xelu's FREE Controllers & Keyboard PROMPTS</a></li>
        </ul>
        <p className='text-xl mt-2'>Music used in the game:</p>
        <ul>
          <li><a href="https://www.soundclick.com/artist/default.cfm?bandid=1277008&content=songs" target="_blank">Regular Theme - Out of Shadows by Antti Luode</a>&emsp;<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">License (No change)</a></li>
          <li><a href="https://dova-s.jp/bgm/play15314.html" target="_blank">1st boss theme - 絶望世界 by alaki paca</a>&emsp;<a href="https://dova-s.jp/_contents/license/" target="_blank">License (No change)</a></li>
          <li><a href="https://dova-s.jp/bgm/play15508.html" target="_blank">2nd boss theme - 暗がりから伸びる手 by 松浦洋介</a>&emsp;<a href="https://dova-s.jp/_contents/license/" target="_blank">License (No change)</a></li>
          <li><a href="https://freemusicarchive.org/music/Ask%20Again/flailing-dirge-energy-emotion-1/a-state-of-despair" target="_blank">Final boss theme - A State of Despair by Mid-Air Machine</a>&emsp;<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">License (No change)</a></li>
        </ul>
        <div className="insanityDL flex gap-4 mt-4">
          <a href='src/assets/insanity-windows.zip'>
            <button className='px-4 py-4 border-4 rounded shadow text-xl'>
              <div className='flex items-center gap-4'>
                Download
                <SiWindows size={48}/>
              </div>
            </button>
          </a>
          <a href='src/assets/insanity-macos.zip'>
            <button className='px-4 py-4 border-4 rounded shadow text-xl'>
              <div className='flex items-center gap-4'>
                Download
                <SiMacos size={48}/>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className='project3 flex flex-col items-center max-w-sm'>
        <p className='text-2xl mt-4'>
          Midnight Madness
        </p>
        <img src=''/>
        <p className='text-xl mt-4'>
          This project was developed using the Unity Engine in collaboration with Robert Grasinki, Andrew Myers, and Ninad Chavan.
          Midnight Madness is a 2D horror-survival game that made use of light mechanics.
          I was responsible for the game's level design and enemy movement AI.
        </p>
        <p className='text-sm mt-2'>
          Not so fun fact: Our project was one of the least well received games in the entire course.
        </p>
        <p className='text-xl mt-2'>Credits for various resources we have used:</p>
        <ul>
          <li><a href="https://pipoya.net/sozai/" target="_blank">Player/Enemy Sprites</a></li>
          <li><a href="https://fawf-art.itch.io/16x16-forest-tileset" target="_blank">Tileset</a></li>
          <li><a href="https://github.com/SeksitSeeton/Auto-add-Shadow-Caster-2D-on-TileMap/blob/main/Assets/ShadowCaster2DTileMap.cs" target="_blank">ShadowCaster2DTileMap</a></li>
          <li><a href="https://thoseawesomeguys.com/prompts/" target="_blank">Control prompt: Xelu's FREE Controllers & Keyboard PROMPTS</a></li>
        </ul>
        <div className="mmDL flex gap-4 mt-4 mb-16">
          <a href='src/assets/mm-windows.zip'>
            <button className='px-4 py-4 border-4 rounded shadow text-xl'>
              <div className='flex items-center gap-4'>
                Download 
                <SiWindows size={48}/>
              </div>
            </button>
          </a>
          <a href='src/assets/mm-macos.zip'>
            <button className='px-4 py-4 border-4 rounded shadow text-xl'>
              <div className='flex items-center gap-4'>
                Download
                <SiMacos size={48}/>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default GameProjects