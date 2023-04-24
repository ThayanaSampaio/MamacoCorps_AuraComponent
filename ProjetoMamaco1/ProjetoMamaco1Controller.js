({
    creatMamaco : function(component, event, helper) {
        
        /*Recupera um objeto com a propriedade "objLead" do componente.*/       
        var objLead = component.get("v.objLead");
        /*Registra no console o valor da variável "objLead" em formato JSON.*/        
        console.log("objLead :: " + JSON.stringify(objLead));
        /*Recupera uma referência a um método Apex chamado "ProjetoMamaco1"*/        
        var action = component.get("c.ProjetoMamaco1");
        /*Define um parâmetro para o método "ProjetoMamaco1" com o valor de "objLead".*/      
        action.setParams({
            "objLead":objLead
        });
        
        /*Define uma função de retorno de chamada para o método "ProjetoMamaco1".*/        
        action.setCallback(this, function(leadRecds){
            /*Recupera o estado da resposta do método "ProjetoMamaco1".*/           
            var state = leadRecds.getState();
            /*Verifica o estado da resposta do método "ProjetoMamaco1" e exibe uma mensagem de sucesso ou erro.*/            
            if (state === "SUCCESS") {
                /*Exibe uma mensagem toast de sucesso*/
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Sucesso!",
                    "message": "O Lead foi criado!!",
                    "type": "success"           
                });
                toastEvent.fire();
                $A.get('e.force:refreshView').fire();
            } else {
                alert("Preencha os dados corretamente");
            }
        });
        
        // Adiciona a ação ao final da fila de ações para ser executada.
        $A.enqueueAction(action);
    }
})