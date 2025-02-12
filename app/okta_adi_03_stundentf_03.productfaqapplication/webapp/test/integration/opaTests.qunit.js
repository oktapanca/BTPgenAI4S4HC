sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'oktaadi03stundentf03/productfaqapplication/test/integration/FirstJourney',
		'oktaadi03stundentf03/productfaqapplication/test/integration/pages/ProductFAQList',
		'oktaadi03stundentf03/productfaqapplication/test/integration/pages/ProductFAQObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductFAQList, ProductFAQObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('oktaadi03stundentf03/productfaqapplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductFAQList: ProductFAQList,
					onTheProductFAQObjectPage: ProductFAQObjectPage
                }
            },
            opaJourney.run
        );
    }
);