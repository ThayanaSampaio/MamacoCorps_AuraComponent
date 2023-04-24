({
    getCompras : function(component) {
        
        var action = component.get("c.getLista");
        
        action.setCallback(this, function(response) {
            
            var state = response.getState();
            if (state === "SUCCESS") {
                
                component.set("v.compras", response.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);
    }    
})