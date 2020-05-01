/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../data/nyc_death.csv", {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var years = [];
	var deathrate = ["Death Rate"];

	for (var i = 1; i < data.length; i++) {


		if (data[i][0] !== undefined && data[i][0] !== null

			&& data[i][4] !== undefined && data[i][4] !== null
			
			) {
			years.push (data[i][0]);
			deathrate.push (data[i][4]);
		} 
		else {
			// push 0 to signify no data
			years.push(0);
			deathrate.push(0);
		}

		
		
	}

	

	console.log(years);
	console.log(deathrate);

	var chart = c3.generate({
		bindto: '#chart',
	    data: {
	        columns: [
	        	deathrate
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: years,
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
	        }
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
	        position: 'right'
	    }
	});
}

parseData(createGraph);



