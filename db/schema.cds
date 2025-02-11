namespace okta_adi_03_stundentf_03;
using { cuid } from '@sap/cds/common';

@assert.unique: { customerMessageID: [customerMessageID] }
entity CustomerMessage : cuid {
  customerMessageID: Integer @mandatory;
  titleEnglish: String(100);
  customerName: String(100);
  productName: String(100);
  summaryEnglish: String(500);
  messageCategory: String(50);
  messageUrgency: String(20);
  messageSentiment: String(20);
  titleCustomerLanguage: String(100);
  customerId: String(50);
  productId: String(50);
  summaryCustomerLanguage: String(1000);
  originatingCountry: String(50);
  sourceLanguage: String(20);
  fullMessageCustomerLanguage: String(5000);
  fullMessageEnglish: String(5000);
  suggestedResponseEnglish: String(5000);
  suggestedResponseCustomerLanguage: String(5000);
}

