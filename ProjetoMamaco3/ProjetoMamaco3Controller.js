({
    doInit : function(component, event, helper) {
        helper.getLeads(component);
    }    
})

// O método "getLeads" é chamado no helper e recebe o componente como parâmetro.
// Este é o método padrão que é executado quando o componente é inicializado.