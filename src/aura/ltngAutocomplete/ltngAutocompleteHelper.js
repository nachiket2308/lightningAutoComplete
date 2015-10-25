({
	getDataFromServer : function(cmp, searchTerm) {
		var action = cmp.get("c.getAutoCompleteData");
		action.setParams({ });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(response.getReturnValue());
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        action.setAbortable();
        $A.enqueueAction(action);
	}
})