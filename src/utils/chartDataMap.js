import r1c1Chart from '../components/r1c1Chart';
import r1c2Chart from '../components/r1c2Chart';
import r1c3Chart from '../components/r1c3Chart';
import r2c1Chart from '../components/r2c1Chart';
import r2c2Chart from '../components/r2c2Chart';
import r2c3Chart from '../components/r2c3Chart';
import r3c1Chart from '../components/r3c1Chart';
import r3c2Chart from '../components/r3c2Chart';
import r3c3Chart from '../components/r3c3Chart';

const width = 800;
const height = 600;

const chartDataMap = {
  r1c1: {
    name: 'Bar Chart Transitions',
    url: 'https://observablehq.com/@d3/bar-chart-transitions',
    props:  
      {
        x: d => d.letter,
        y: d => d.frequency,   
        yFormat: "%",
        yLabel: "↑ Frequency",
        width,
        height,
        color: "steelblue",
        duration: 750 // slow transition for demonstration
      },
    description: 'Bar Chart Transitions',
    component: r1c1Chart
  },
  r1c2:{
    name: 'Force-Directed Graph, Disjoint',
    url: 'https://observablehq.com/@d3/disjoint-force-directed-graph',
    props: {
      nodeId: d => d.id,
      nodeGroup: d => d.group,
      nodeTitle: d => `${d.id} (${d.group})`,
      width,
      height,
      // invalidation // a promise to stop the simulation when the cell is re-run
    },
    description: 'When using D3’s force layout with a disconnected graph, you typically want the positioning forces (d3.forceX and d3.forceY) instead of the centering force (d3.forceCenter). The positioning forces, unlike the centering force, prevent detached subgraphs from escaping the viewport.',
    component: r1c2Chart,
  },
  r1c3: {
    name: 'https://observablehq.com/@d3/area-chart',
    url:'https://observablehq.com/@d3/area-chart',
    props: {
      x: d => d.mpg,
      y: d => d.hp,
      title: d => d.name,
      xLabel: "Miles per gallon →",
      yLabel: "↑ Horsepower",
      stroke: "steelblue",
      width,
      height,
    },
    description: 'This time-series chart shows the daily close of Apple stock.',
    component: r1c3Chart
  },
  r2c1: {
    name: 'Pie Chart',
    url:'https://observablehq.com/@d3/pie-chart',
    props: {
      name: d => d.name,
      value: d => d.value,
      width,
      height: 500
    },
    description: 'This chart shows the estimated population by age in the United States as of 2015. The total estimated population is 316,515,021. Data: U.S. Census.',
    component: r2c1Chart
  },
  r2c2: {
    name: 'Smooth Zooming',
    url:'https://observablehq.com/@d3/smooth-zooming',
    props: {
      width,
      height,
    },
    description: 'This notebook demonstrates using d3.interpolateZoom to implement smooth pan-and-zoom transitions between two views. See also d3.zoom’s transitions, which also allows freeform zooming.',
    component: r2c2Chart
  },
  r2c3: {
    name: 'https://observablehq.com/@d3/zoomable-circle-packing',
    url:'Zoomable Circle Packing',
    props: {
      width,
      height,
    },
    description: 'Zoomable Circle Packing, Click to zoom in or out.',
    component: r2c3Chart
  },
  r3c1: {
    name: 'Contours',
    url:'https://observablehq.com/@d3/contours',
    props: {
      width,
      height,
    },
    description: 'Showing the Goldstein–Price test function.',
    component: r3c1Chart
  },
  r3c2: {
    name: 'Stacked Bar Chart',
    url:'https://observablehq.com/@d3/stacked-bar-chart',
    props: {
      x: d => d.state,
      y: d => d.population / 1e6,
      z: d => d.age,
      yLabel: "↑ Population (millions)",
      width,
      height,
    },
    description: 'This chart shows the estimated population by age and U.S. state. Compare to horizontal stacked bars, normalized stacked bars, grouped bars and a dot plot. Data: American Community Survey',
    component: r3c2Chart
  },
  r3c3: {
    name: 'Zoomable Sunburst',
    url:'https://observablehq.com/@d3/zoomable-sunburst',
    props: {
      width: 500,
    },
    description: 'This variant of a sunburst diagram shows only two layers of the hierarchy at a time. Click a node to zoom in, or the center to zoom out. Compare to an icicle.',
    component: r3c3Chart
  },
}

export { chartDataMap }