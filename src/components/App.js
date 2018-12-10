import React, { Component } from 'react';

// Wrappers
import ParallaxStill from './parallax/still';
import ParallexMove from './parallax/move';
import WeatherData from './render-props/graph-data';

// Components
import Banner from './banner';
import SubSection from './sub-section';
import BarGraph from './graphs/bar';
import RadialGraph from './graphs/radial';
import Grid from './grid';
import Panda from './panda';
import Cube from './cube';

// Style
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='dashboard-container'>
        <ParallaxStill img='city'>
          <Banner />
        </ParallaxStill>

        <SubSection>
          <Panda />
        </SubSection>

        <ParallaxStill img='city'>
          <WeatherData>
            {({ data }) => (
              <BarGraph data={ data } />
            )}
          </WeatherData>
        </ParallaxStill>

        <SubSection />

        <ParallexMove img='freeway'>
          <WeatherData>
            {({ data }) => (
              <RadialGraph data={ data } />
            )}
          </WeatherData>
        </ParallexMove>

        <SubSection />

        <Grid />

        <Cube />
      </div>
    );
  }
}

export default App;
