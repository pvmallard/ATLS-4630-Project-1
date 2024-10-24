import * as d3 from "d3";

const getNode = () => 
{
    const width = 400;
    const height = Math.min(width, 500);
  const radius = Math.min(width, height) / 2;

    const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; height: auto;");

    svg.append("path")
    .attr("transform", "translate(200,200)")
    .attr("d", d3.arc()({
      innerRadius: 100,
      outerRadius: 200,
      startAngle: -Math.PI / 2,
      endAngle: Math.PI / 2
    }));

    return svg.node();
}

const software = document.getElementById("software")
software.append(getNode())