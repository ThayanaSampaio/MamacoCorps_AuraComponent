public class ProjetoMamaco4List {
    
    @AuraEnabled
    
    public static List<Compra__c> getLista() {
        
        return [SELECT Nome_do_Produto__c, Quantidade__c, Preco_Unitario__c, Preco_Total__c, CreatedDate, Solicitacao_de__c  
                FROM Compra__c 
                ORDER BY Nome_do_Produto__c];
    }
}