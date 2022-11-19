import React from "react";

import Button from '@mui/material/Button';

import { DEVELOPERS } from '../../utils/Constants/developers'
import DocumentationButton from "../../Components/documentation-button/documentation-button";
import DeveloperCard from "../../Components/Developer-card/Developer-card";


//style
require('./Home.css');

function Home() {
  return(
    <div className="container">
      <div className="conta1"> 
        <h1> Welcome to Ticklens App</h1>
        <DocumentationButton />
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt recusandae odio 
          placeat soluta natus explicabo quos sapiente, possimus velit ab expedita in exercitationem 
          laborum nobis molestiae quo, odit earum quaerat?
        </span>
      </div>

      <div className="conta2"> 
        <h2>How does it works?</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati quo, 
          eius quaerat neque ex, voluptate adipisci voluptatibus nemo earum, perspiciatis 
          assumenda distinctio consequuntur numquam cumque odio consequatur quod nostrum?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, molestias 
          dolorem! Itaque minus accusantium vitae esse fugiat numquam sequi non exercitationem, 
          distinctio impedit quaerat tempore perferendis voluptas soluta ullam eaque!
        </span>
      </div>
      <div className="conta3"> 
        <h2>Tutotial</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati quo, 
          eius quaerat neque ex, voluptate adipisci voluptatibus nemo earum, perspiciatis 
          assumenda distinctio consequuntur numquam cumque odio consequatur quod nostrum?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, molestias 
          dolorem! Itaque minus accusantium vitae esse fugiat numquam sequi non exercitationem, 
          distinctio impedit quaerat tempore perferendis voluptas soluta ullam eaque!
        </span>
      </div>

      <div className="conta4"> 
      <h2>Developers</h2>
        <div className="cards">
          {
            DEVELOPERS.map(({developerName, developerTwitter, developerGit, picture})  => {
              return (
                <DeveloperCard 
                developerName={developerName} 
                developerTwitter={developerTwitter} 
                developerGit={developerGit} 
                picture={picture}/>
                );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
