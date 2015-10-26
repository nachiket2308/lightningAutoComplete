({
	getDataFromServer : function(cmp, searchTerm) {
		var action = cmp.get("c.getAutoCompleteData");
		action.setParams({ });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
            	console.log(response.getReturnValue());
                var returnedDataStrings = [];
                var fieldsToDisplay = cmp.get("v.fetchFields");
                for(var idx = 0 ; idx < response.getReturnValue().length; idx++){
                	var rec = [];
                	for(var idx1 = 0; idx1 < fieldsToDisplay.length; idx1++){
                		var fieldName  = fieldsToDisplay[idx1];
                		rec[idx1] = response.getReturnValue()[idx][fieldName];
                	}
                	returnedDataStrings[idx] =rec;
                }
                cmp.set("v.records", returnedDataStrings);
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert("Error message: " + errors[0].message);
                    }
                } else {
                    alert("Unknown error");
                }
            }
        });
        action.setAbortable();
        $A.enqueueAction(action);
	}
})