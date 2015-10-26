public with sharing class AutocompleteLightningController {
	@AuraEnabled
	public static List<sObject> getAutoCompleteData(){
		integer x = 1;
		for(integer idx = 0; idx < 1000000; idx++){
			x = x/897938;
		}
	//public static List<sObject> getAutoCompleteData(String sObjectName, List<String> searchFields, List<String> returnFields, boolean useSOSL){
		return [SELECT Id, Name, Active__c, AnnualRevenue, BillingStreet, BillingCity, BillingCountry, (select Id, Name from Contacts) FROM Account];
	}
}