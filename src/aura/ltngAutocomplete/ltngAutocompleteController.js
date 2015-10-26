({
	onSearchTermChange : function(component, event, helper) {
		if(!event.altKey && !event.ctrlKey && event.which != 16 && event.which != 91 && event.which !=20 && event.which !=17 && event.which != 18 ) {
			console.log(event.which);
			var searchTerm = component.get("v.searchTerm");
			var minimumChars = component.get("v.minimumChar");
			console.log(searchTerm.length + '  '+ searchTerm);
			if(searchTerm.length >= minimumChars){
				helper.getDataFromServer(component, searchTerm);
			}
		}
	}
})