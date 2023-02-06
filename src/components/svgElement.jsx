import React, { useEffect, useRef } from 'react';
import { chartDataMap } from '../utils/chartDataMap';
import { getData } from '../utils/requestList';


function SvgElement({row,col}) {
 let svgRef = useRef();
  useEffect(() => {
    getData(row, col).then(res => {
      const chart = chartDataMap[`r${row}c${col}`]
      chart.component(svgRef, res, chart.props)
    })
  }, [])

    return <svg ref={svgRef} style={{marginLeft: '40px', borderRadius: '20px'}}/>
}

export default SvgElement;
