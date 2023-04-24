({
    handleOpportunityChange : function(component, event, helper) {
        var selectedOpportunity = event.getParam("value");
        component.set("v.recordId", selectedOpportunity.Id);
        component.set("v.opportunityName", selectedOpportunity.Name);
        component.set("v.closeDate", selectedOpportunity.CloseDate);
    },
    
    handleSubmit : function(component, event, helper) {
        event.preventDefault(); // Para não enviar o formulário imediatamente
        
        var nameInput = component.find("nameInput");
        var closeDateInput = component.find("closeDateInput");
        
        var name = nameInput.get("v.value");
        var closeDate = closeDateInput.get("v.value");
        
        if (!name || !closeDate) {
            alert("Por favor, preencha todos os campos obrigatórios.");
        } else {
            component.find("recordEditForm").submit();
        }
    }
})