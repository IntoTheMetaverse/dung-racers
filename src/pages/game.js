import React from 'react'
import comp from '../assets/computer.png'
import temple from '../assets/temple.png'
import compvid from '../assets/AncientComputerETH-L.mp4'
import bg1 from '../assets/47.jpg'
import ActionButton from '../components/button'
import Typewriter from 'typewriter-effect';

<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hello World!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>

const Home = () => {

  return (
    <div class="w-full h-screen z-0">
        <img class="absolute z-0 w-auto min-w-full min-h-full max-w-none" src={temple} alt=""/>
        {/*<video className="absolute z-0 w-auto 
            min-w-full min-h-full max-w-none" src={dung} autoPlay loop muted/>*/}
        
        <div class="relative z-10 h-screen flex">
          <div class="relative z-20 top-56 left-1/4 h-2/3 w-1/2 opacity-95 bg-purple-500 text-white rounded-3xl">
            <img class="object-cover h-full w-full rounded-2xl z-30" src={bg1} alt=""/>
            <div class="absolute w-4/5 py-2.5 top-12 left-12 leading-4 z-40">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                    .changeDelay(45)
                    .typeString('<span style="font-family: monospace; font-size: xxx-large; color: #00FF33; opacity: 0.75">Welcome to the Dungeon...</span> <br/><br/>')
                    .pauseFor(500)
                    .typeString('<span style="font-family: monospace; font-size: xx-large; color: #00FF33; opacity: 0.7; line-height:22pt">Ipsum Lorem Text filler, lets go until the end. More Ipsum Lorem Text filler, lets go until the end. More Ipsum Lorem Text filler. More Ipsum Lorem Text filler, lets go until the end. More Ipsum Lorem. More Ipsum Lorem Text filler, lets go until the end.</span> <br/><br/>')
                    .pauseFor(500)
                    .typeString('.')
                    .pauseFor(500)
                    .typeString('.')
                    .pauseFor(500)
                    .typeString('.')
                    .pauseFor(500) 
                    .typeString(' <span style="font-family: monospace; font-size: xx-large; opacity: 0.75; line-height:22pt">What do you do?</span>')
                      .callFunction(() => {
                        console.log('String typed out!');
                      })
                      .start();
                  }}
                  />
            </div>
          <div class="absolute top-1/2 w-full h-1/2">
            <div class="absolute w-1/6 py-2.5 top-1/4 left-1/3 leading-4 z-40">
              <ActionButton buttonText='Evade'/>
            </div>
            <div class="absolute w-1/6 py-2.5 bottom-1/3 left-1/3 leading-4 z-40" >
              <ActionButton buttonText='Hide'/>
            </div>
            <div class="absolute w-1/6 py-2.5 top-1/4 bottom-1/6 left-1/2 leading-4 z-40">
              <ActionButton buttonText='Attack'/>
            </div>
            <div class="absolute w-1/6 py-2.5 bottom-1/3 left-1/2 leading-4 z-40">
              <ActionButton buttonText='Jump'/>
            </div>          
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home




