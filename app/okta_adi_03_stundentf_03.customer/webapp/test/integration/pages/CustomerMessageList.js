sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'oktaadi03stundentf03.customer',
            componentId: 'CustomerMessageList',
            contextPath: '/CustomerMessage'
        },
        CustomPageDefinitions
    );
});