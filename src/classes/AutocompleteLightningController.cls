public with sharing class AutocompleteLightningController {
	@AuraEnabled
	public static List<sObject> getAutoCompleteData(String searchString){
		String searchTerm = '%'+searchString+'%';
		System.debug(searchTerm);
		return [SELECT Id, Name, Active__c, AnnualRevenue, BillingStreet, BillingCity, BillingCountry  FROM Account WHERE Name like :searchTerm];
	}
}