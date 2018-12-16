jQuery(function ($) {

    var chart3 = $('#geoChart').chartinator({
        tableSel: '.geoChart',

        columns: [{role: 'tooltip', type: 'string'}],
 
        colIndexes: [2],
     
        rows: [
            ['China - 2015'],
            ['Colombia - 2015'],
            ['France - 2015'],
            ['Italy - 2015'],
            ['Japan - 2015'],
            ['Kazakhstan - 2015'],
            ['Mexico - 2015'],
            ['Poland - 2015'],
            ['Russia - 2015'],
            ['Spain - 2015'],
            ['Tanzania - 2015'],
            ['Turkey - 2015']],
      
        ignoreCol: [2],
      
        chartType: 'GeoChart',
      
        chartAspectRatio: 1.5,
     
        chartZoom: 1.75,
     
        chartOffset: [-12,0],
     
        chartOptions: {
          
            width: null,
         
            backgroundColor: '#fff',
         
            datalessRegionColor: '#F5F5F5',
       
            region: 'world',
          
            resolution: 'countries',
         
            legend: 'none',

            colorAxis: {
               
                colors: ['#679CCA', '#337AB7']
            },
            tooltip: {
             
                trigger: 'focus',

                isHtml: true
            }
        }

       
    });                       
});


		$(document).ready(function() {
			 var navoffeset=$(".header-main").offset().top;
			 $(window).scroll(function(){
				var scrollpos=$(window).scrollTop(); 
				if(scrollpos >=navoffeset){
					$(".header-main").addClass("fixed");
				}else{
					$(".header-main").removeClass("fixed");
				}
			 });
			 
		});
    
        
        var barChartData = {
        labels : ["Jan","Feb","Mar","Apr","May","Jun","jul"],
        datasets : [
            {
                fillColor : "#FC8213",
                data : [65,59,90,81,56,55,40]
            },
            {
                fillColor : "#337AB7",
                data : [28,48,40,19,96,27,100]
            }
        ]

    };
        new Chart(document.getElementById("bar").getContext("2d")).Bar(barChartData);

      
        var radarChartData = {
            labels : ["","","","","","",""],
            datasets : [
                {
                    fillColor : "rgba(104, 174, 0, 0.83)",
                    strokeColor : "#68ae00",
                    pointColor : "#68ae00",
                    pointStrokeColor : "#fff",
                    data : [65,59,90,81,56,55,40]
                },
                {
                    fillColor : "rgba(236, 133, 38, 0.82)",
                    strokeColor : "#ec8526",
                    pointColor : "#ec8526",
                    pointStrokeColor : "#fff",
                    data : [28,48,40,19,96,27,100]
                }
            ]
            
        };
        new Chart(document.getElementById("radar").getContext("2d")).Radar(radarChartData);

							 var icons = new Skycons({"color": "#fff"}),
								  list  = [
									"clear-night", "partly-cloudy-day",
									"partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
									"fog"
								  ],
								  i;

							  for(i = list.length; i--; )
								icons.set(list[i], list[i]);

							  icons.play();
                           
                              var icons = new Skycons({"color": "#fff"}),
                                   list  = [
                                     "clear-night", "clear-day",
                                     "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                                     "fog"
                                   ],
                                   i;
 
                               for(i = list.length; i--; )
                                 icons.set(list[i], list[i]);
 
                               icons.play();
                               
                               var icons = new Skycons({"color": "#fff"}),
                                    list  = [
                                      "clear-night", "cloudy",
                                      "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                                      "fog"
                                    ],
                                    i;
  
                                for(i = list.length; i--; )
                                  icons.set(list[i], list[i]);
  
                                icons.play();
                             
                                var icons = new Skycons({"color": "#fff"}),
                                     list  = [
                                       "clear-night", "clear-day",
                                       "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                                       "fog"
                                     ],
                                     i;
   
                                 for(i = list.length; i--; )
                                   icons.set(list[i], list[i]);
   
                                 icons.play();


                               
                                 var toggle = true;
                                             
                                 $(".sidebar-icon").click(function() {                
                                   if (toggle)
                                   {
                                     $(".page-container").addClass("sidebar-collapsed").removeClass("sidebar-collapsed-back");
                                     $("#menu span").css({"position":"absolute"});
                                   }
                                   else
                                   {
                                     $(".page-container").removeClass("sidebar-collapsed").addClass("sidebar-collapsed-back");
                                     setTimeout(function() {
                                       $("#menu span").css({"position":"relative"});
                                     }, 400);
                                   }               
                                                 toggle = !toggle;
                                             });
                             