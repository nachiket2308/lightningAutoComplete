({
	onSearchTermChange : function(component, event, helper) {
		var searchTerm = component.get("v.searchTerm");
		helper.getDataFromServer(component, searchTerm);
	}
})