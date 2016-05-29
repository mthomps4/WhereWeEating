window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer",
	{
      	animationEnabled: true,
		data: [
		{
			type: "pie",
			indexLabelFontFamily: "Garamond",
			indexLabelFontSize: 20,
			startAngle:-20,
			showInLegend: false,
			dataPoints:
				{  y: 1},
				{  y: 1},
        {  y: 1},
				{  y: 1},
        {  y: 1},
				{  y: 1},
			]
		}
		]
	});
	chart.render();
}

<script type="text/javascript" src="canvasjs.min.js"></script>
  <script src="chart.js"></script>
