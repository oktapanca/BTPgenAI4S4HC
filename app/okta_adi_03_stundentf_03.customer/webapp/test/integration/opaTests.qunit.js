sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'oktaadi03stundentf03/customer/test/integration/FirstJourney',
		'oktaadi03stundentf03/customer/test/integration/pages/CustomerMessageList',
		'oktaadi03stundentf03/customer/test/integration/pages/CustomerMessageObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessageList, CustomerMessageObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('oktaadi03stundentf03/customer') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerMessageList: CustomerMessageList,
					onTheCustomerMessageObjectPage: CustomerMessageObjectPage
                }
            },
            opaJourney.run
        );
    }
);