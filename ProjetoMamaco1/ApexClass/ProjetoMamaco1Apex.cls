/*Este código é uma classe Apex que expõe um método estático chamado "ProjetoMamaco1" e é anotado com "@AuraEnabled", o que permite que ele seja
invocado por um componente Lightning.*/

public class ProjetoMamaco1Apex {
    
    @AuraEnabled /*Esta anotação permite que o método "ProjetoMamaco1" seja chamado a partir de um componente Lightning.*/
    
    /*Define um método público e estático chamado "ProjetoMamaco1" que aceita um parâmetro "objLead" do tipo "Account" e retorna uma string.*/    
    public static String ProjetoMamaco1 (Lead objLead){
        
        insert objLead; //Insere o objeto "objLead" (uma conta) no banco de dados.
        
        return objLead.id; //Retorna o ID da conta recém-criada.
        
    }
    
}