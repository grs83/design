import React, { Component } from 'react';
import * as d3 from "d3";

// Components
import LoaderHOC from '../../hoc/loader/index.js';

// Styles
import './styles.css';
const height = window.innerHeight * .75;
const width = window.innerWidth * .75
const margin = { top: 20, right: 20, bottom: 20, left: 35 };

class BarGraph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bars: [],
        }
    }

    // Create Axis
    xAxis = d3.axisBottom();
    yAxis = d3.axisLeft();

    static getDerivedStateFromProps(nextProps, prevState) {
        const { data } = nextProps;

        // Map date min/max to x-position
        const xExtent = d3.extent(data, d => new Date(d.dt_txt));
        // Set up the x-scale distance for min/max
        const xScale = d3
            .scaleTime()
            .domain(xExtent)
            .range([margin.left, width - margin.right]);
        
        // Map high temp min/max values to y-position
        const [min, max] = d3.extent(data, d => d.main.temp_max);
        // Set up the y-scale distance for min/max
        const yScale = d3
            .scaleLinear()
            .domain([Math.min(min, 0), max])
            .range([height - margin.bottom, margin.top]);
        
        // Set up color scale
        const colorExtent = d3.extent(data, d => d.main.temp).reverse();
        const colorScale = d3
            .scaleSequential()
            .domain(colorExtent)
            .interpolator(d3.interpolateRdYlBu);

        // Return array of objects: x, y, height
        const bars = data.map( d => ({
            x: xScale(new Date(d.dt_txt)),
            y: yScale(d.main.temp_max),
            height: yScale(d.main.temp_min-10) - yScale(d.main.temp_max),
            fill: colorScale(d.main.temp)
        }));

        return { bars, xScale, yScale };
    }

    componentDidMount() {
        this.xAxis.scale(this.state.xScale);
        d3.select(this.refs.barXAxis)
        .call(this.xAxis);

        this.yAxis.scale(this.state.yScale);
        d3.select(this.refs.barYAxis)
            .call(this.yAxis);

        this.brush = d3.brushX()
            .extent([
                [margin.left, margin.top], //top-left
                [width - margin.right, height - margin.top], //bottom-right
            ]).on('end', () => {
                const [minX, maxX] = d3.event.selection;
                const range = [
                    this.state.xScale.invert(minX),
                    this.state.xScale.invert(maxX)
                ]
                console.log(range)
            });
        
        d3.select(this.refs.barBrush)
            .call(this.brush);
    }

    render() {
        const { bars } = this.state;

        return (
            <svg width={width} height={height}>
                <g ref="barXAxis" transform={`translate(0, ${height - margin.bottom})`} stroke='white' />
                <g ref="barYAxis" transform={`translate(${margin.left}, 0)`} stroke='white' />
                {bars.map((d, i) => (
                    <rect 
                    x={d.x} 
                    y={d.y} 
                    width={(width*.75)/ bars.length} 
                    height={d.height} 
                    fill={d.fill}
                    key={i} />
                ))}
                <g ref='barBrush' />
            </svg>
        )
    }
}

export default LoaderHOC(BarGraph);