/*Aqui a classe é declarada como "public" e "with sharing", o que significa 
 que ela é acessível por outros usuários do Salesforce e que o compartilhamento
de dados será aplicado de acordo com as configurações de segurança da 
organização.*/
public class ProjetoMamaco3Controller {
/*@AuraEnabled" é usada para permitir que o método seja chamado remotamente 
 a partir do componente Lightning.*/
    @AuraEnabled
/*O método definido como "public static", significa que ele pode ser chamado 
 sem instanciar a classe. O retorno do método é uma lista de objetos Lead.*/
    public static List<Lead> getLeadsNotContacted() {
/*a lista de registros é retornada como resultado do método.*/
        return [SELECT Name, Company, MobilePhone, Email, Status, CreatedDate  
                FROM Lead 
                WHERE Status = 'Open - Not Contacted'
               	ORDER BY CreatedDate
               	LIMIT 5];
    }
}