/* 
    Create a grid for an interactive timeline
    James Johnson, 22 July 2021
*/

// SETUP CONSTANTS

const setup = {
    startYear: 1969,
    endYear: 2021,
    pxPerYear: 128,
    height:1024,
  };

  setup.numYears = setup.endYear - setup.startYear + 1 
  setup.timelineWidth = setup.numYears * setup.pxPerYear

// CREATE THE SVG

var svg = d3.select("#grid")
 	.append("svg")
    .attr("width", setup.timelineWidth)
    .attr("height", setup.height);
//    .style('background-color', '#eeeeee');

svg.append('defs')
    .append('style')
    .attr('type', 'text/css')
    .text("@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800');");
            
// DRAW THE YEAR LINES

for ( i = 0; i <= setup.numYears; i++ ) {
    
    // Vertical dashed grey lines and years

    svg.append("line")
        .attr("x1", i * setup.pxPerYear)
        .attr("y1", 0)
        .attr("x2", i * setup.pxPerYear)
        .attr("y2", setup.height )                
        .attr("stroke", "#cccccc")
        .style("stroke-dasharray", ("3, 3"))

    var thisYear = setup.startYear + i;

    if ( i != setup.numYears ) {
        svg.append("text")
            .attr("x", (i * setup.pxPerYear) + (setup.pxPerYear/2) )
            .attr("y", setup.height/2 )
            .style("text-anchor", "middle")
            .style("alignment-baseline", "middle")
            .style('font-size', '24px')
            .style('fill', '#cccccc')
            .style('font-family', '"Open Sans", sans-serif')
            .style('font-weight', '800')
            .text( thisYear.toString() ); 
    }    
}