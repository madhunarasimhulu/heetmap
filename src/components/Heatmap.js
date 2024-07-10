// src/components/Heatmap.js
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { Tooltip, TooltipProvider } from 'react-tooltip';

const Heatmap = ({ data, metric }) => {
  useEffect(() => {
    if (!metric || data.length === 0) return;

    const svg = d3.select("#heatmap").attr("width", 1200).attr("height", 800);
    svg.selectAll("*").remove();

    const rows = 32;
    const cols = 48;
    const cellSize = 25;

    const colorScale = d3.scaleSequential(d3.interpolateViridis)
      .domain(d3.extent(data, d => +d[metric]));

    svg.selectAll(".cell")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "cell")
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("x", d => {
        const col = d.Metadata_Col;
        return col ? (col - 1) * cellSize : 0;
      })
      .attr("y", d => {
        const row = d.Metadata_Row;
        return row ? (row.charCodeAt(0) - 65) * cellSize : 0;
      })
      .attr("fill", d => colorScale(d[metric]))
      .attr("data-tooltip-id", d => `tooltip-${d.Metadata_Well}`)
      .attr("data-tooltip-content", d => `Well: ${d.Metadata_Well}<br>${metric}: ${d[metric]}`)
      .on("mouseover", function() {
        d3.select(this).attr("opacity", 0.7);
      })
      .on("mouseout", function() {
        d3.select(this).attr("opacity", 1);
      });

    // Rebuild tooltips
    data.forEach(d => {
      d3.select(`#tooltip-${d.Metadata_Well}`).remove();
      d3.select("body").append("div")
        .attr("id", `tooltip-${d.Metadata_Well}`)
        .html(`Well: ${d.Metadata_Well}<br>${metric}: ${d[metric]}`)
        .style("display", "none");
    });

  }, [data, metric]);

  return (
    <TooltipProvider>
      <div>
        <svg id="heatmap"></svg>
        <Tooltip />
      </div>
    </TooltipProvider>
  );
};

export default Heatmap;
