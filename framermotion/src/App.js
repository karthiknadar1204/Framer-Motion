import React, { useState } from 'react';
import {motion} from 'framer-motion'
const App = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  const handleButtonClick = () => {
    setIsAnimationActive(!isAnimationActive);
  };


  const containerVariants={
    hidden:{
      opacity:0,
      x:'100vw'
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        type:'spring',
        delay:0.5
      }
    }
  }


  return (
    <div>

      {/* Basic */}
      <motion.h1 animate={{fontSize:50,rotateZ:180,y:30,x:-140,color:"#ff2994"}} >
        Framer motion
      </motion.h1>





      {/* Zooping from the side animation */}
      <motion.h1
        initial={{ x: '-100vw' }}
        animate={{ x: isAnimationActive ? 0 : '-100vw' }}
      >
        Initial states
      </motion.h1>
      <button onClick={handleButtonClick}>State Toggle Animation</button>





      {/* Animations with a transition or a delay */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimationActive ? 1 : 0 }}
        transition={{ delay:1.5,type:'tween' }}
      >
        transition
      </motion.h1>
      <button onClick={handleButtonClick}>Transition Toggle Animation</button>






      <motion.button
      whileHover={{
        scale:1.1,
        textShadow:"0px 0px 8px rgb(255,255,255)",
        boxShadow:"0px 0px 8px rgb(255,255,255"
      }}
      >
        Hover Animation
      </motion.button>
      <motion.h1
      whileHover={{
        scale:1.4,
        originX:0,
        color:"#f8e112"
      }}
      transition={{type:'spring',stiffness:300}}
      >
        While hovered
      </motion.h1>





      {/* Variants */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate={isAnimationActive ? 'visible' : 'hidden'}
      >
        Variants
      </motion.h1>

      <button onClick={handleButtonClick}>Toggle Animation</button>


{/* keyframes is basically in teh constraint, we simply tell the element the coordinates it is supposed to be in a recurring manner
 in tha form of an array ex scale:[1.1,0,1.1,0,1.1] means that the element would repeatedly touch the values of the array till the
  end of the array .

  To make the keyframe animation to go on for infinity, we do "transition:{yoyo:Infinity}"
*/}





{/* To animate something out of the page, we use <AnimatePresence></AnimatePresence> imported from framer-motion on top.
This is mainly used on components which we want to disappear when a certain action is executed, so the part which we want to disappear is 
surrounded by AnimatePresence on top and on bottom and in the component we define an "exit" animation.
eg 
<AnimatePresence>
  <motion.h2
  exit:{{y:-1000}}
  >
   Hello World
  </motion.h2>
</AnimatePresence>
*/}




    </div>
  )
}

export default App