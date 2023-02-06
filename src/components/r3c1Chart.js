import * as d3 from "d3";

const chart = (ref, data, {width, height}) => {
  const thresholds = d3.range(1, 20).map(i => Math.pow(2, i));
  const color = d3.scaleSequentialLog(d3.extent(thresholds), d3.interpolateMagma)
  const x = d3.scaleLinear([-2, 2], [0, width + 28]);
  const y = d3.scaleLinear([-2, 1], [height, 0]);
  
  const xAxis = g => g
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisTop(x).ticks(width / height * 10))
  .call(g => g.select(".domain").remove())
  .call(g => g.selectAll(".tick").filter(d => x.domain().includes(d)).remove())

  const yAxis = g => g
  .attr("transform", "translate(-1,0)")
  .call(d3.axisRight(y))
  .call(g => g.select(".domain").remove())
  .call(g => g.selectAll(".tick").filter(d => y.domain().includes(d)).remove())

  const svg = d3.select(ref.current)
      .attr("viewBox", [0, 0, width + 28, height])

  svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#fff")
      .attr("stroke-opacity", 0.5)
    .selectAll("path")
    .data(data)
    .join("path")
      .attr("fill", d => color(d.value))
      .attr("d", d3.geoPath());

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  return svg.node();
}
export default chart;