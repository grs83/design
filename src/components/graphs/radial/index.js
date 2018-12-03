import React from 'react';
import * as d3 from "d3";

// Components
import LoaderHOC from '../../hoc/loader/index.js';

// Styles
import './styles.css';

const RadialGraph = props => {
    const { data } = props;
    const height = window.innerHeight * .75;
    const width = window.innerWidth * .75

    const radiusScale = d3.scaleLinear()
    .domain([
      d3.min(data, d => d.main.temp_min-10),
      d3.max(data, d => d.main.temp_max),
      ])
    .range([0, width / 3]);
  
    const colorScale = d3.scaleSequential()
        .domain(d3.extent(data, d => d.main.temp).reverse())
        .interpolator(d3.interpolateRdYlBu);
    
    const perSliceAngle = (2 * Math.PI) / data.length;
    
    const arcGenerator = d3.arc();
    
    const slices = data.map((d, i) => {
        const path = arcGenerator({
        startAngle: i * perSliceAngle,
        endAngle: (i + 1) * perSliceAngle,
        innerRadius: radiusScale(d.main.temp_min-10),
        outerRadius: radiusScale(d.main.temp_max)
        })
        return {path, fill: colorScale(d.main.temp)}
    })

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${width/2}, ${height /2})`}>
                {
                    slices.map((d, i) => (
                        <path d={d.path} fill={d.fill} key={i}/>
                    ))
                }
            </g>
        </svg>
    )
}

export default LoaderHOC(RadialGraph);