import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";

function Headquarters({ updateHost, handleActivateBtn, nonActiveHosts,  hosts, setHosts, areas, selectedHost, setSelectedHost }) {
   
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage 
          hosts={hosts}
          nonActiveHosts={nonActiveHosts}
          setHosts={setHosts} 
          selectedHost={selectedHost}
          setSelectedHost={setSelectedHost}
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details 
          hosts={hosts}
          updateHost={updateHost}
          selectedHost={selectedHost} 
          setSelectedHost={setSelectedHost} 
          areas={areas}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel handleActivateBtn={handleActivateBtn} nonActiveHosts={nonActiveHosts}/>
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
