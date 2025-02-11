using { okta_adi_03_stundentf_03 as my } from '../db/schema.cds';

@path: '/service/okta_adi_03_stundentf_03'
@requires: 'authenticated-user'
service okta_adi_03_stundentf_03Srv {
  @odata.draft.enabled
  entity CustomerMessage as projection on my.CustomerMessage;
}