public with sharing class AutocompleteLightningController {
	@AuraEnabled
	public static List<sObject> getAutoCompleteData(){
	//public static List<sObject> getAutoCompleteData(String sObjectName, List<String> searchFields, List<String> returnFields, boolean useSOSL){
		return [SELECT Id, Name FROM Account];
	}
}