using { S4HCP_ServiceOrder_Odata } from './external/S4HCP_ServiceOrder_Odata.cds';

using { okta_adi_03_stundentf_03 as my } from '../db/schema.cds';

@path : '/service/okta_adi_03_stundentf_03'
service okta_adi_03_stundentf_03Srv
{
    @odata.draft.enabled
    entity CustomerMessage as
        projection on my.CustomerMessage;

    entity A_ServiceOrder as
        projection on S4HCP_ServiceOrder_Odata.A_ServiceOrder
        {
            ServiceOrder,
            ServiceOrderDescription
        };

    @odata.draft.enabled
    entity ProductFAQ as projection on my.ProductFAQ
        {
            ID,
            issue,
            question,
            answer
        };
}

annotate okta_adi_03_stundentf_03Srv with @requires :
[
    'authenticated-user'
];
