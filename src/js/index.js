//import react into the bundle
import React, { Profiler } from 'react';
import {createRoot} from 'react-dom/client'



//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from './layout.js'

//
const root = createRoot(document.querySelector("#app"))
// function callback(id, phase, actualTime, baseTime, startTime, commitTime) {
//     console.log(`${id}'s ${phase} phase:`);
//     console.log(`Actual time: ${actualTime}`);
//     console.log(`Base time: ${baseTime}`);
//     console.log(`Start time: ${startTime}`);
//     console.log(`Commit time: ${commitTime}`);
//   }
  

//render your react application
root.render(

<Layout/>

)

