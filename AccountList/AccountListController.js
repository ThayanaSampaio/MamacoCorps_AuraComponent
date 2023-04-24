({  
// Este trecho de código define uma função chamada "getAccounts" em um componente Aura do Salesforce,
// 	 que é acionada por um evento ou ação no componente.
	getAccounts: function(component, event, helper) {
		var action = component.get("c.fetchAccounts");
		// Este trecho de código está definindo uma variável chamada "action" em um componente Aura do Salesforce. 
		// A variável está sendo definida usando o método "get" do componente, passando como argumento o nome da ação "fetchAccounts" do o método Apex.
		// que é responsável por buscar as contas da organização Salesforce e retorná-las para o componente.
		// método "get" é uma forma de acessar as funções ou variáveis definidas no controlador Apex por meio do componente Aura. Ao definir a variável "action" 
		// como uma referência ao método "fetchAccounts", o componente pode invocar a ação e obter os resultados.

		action.setCallback(this, function(response) {
			// Este trecho de código define uma função de retorno de chamada para a ação assíncrona que foi invocada na variável "action". O método "setCallback" 
			// é usado para definir a função que será executada quando a resposta da ação for retornada pelo servidor.
			//  "this" refere-se ao componente que está invocando a ação.
			//  O segundo parâmetro é a função de retorno de chamada em si, que é uma função anônima que recebe um parâmetro "response". 
			//  A função de retorno de chamada é responsável por processar a resposta recebida do servidor após a execução da ação assíncrona.
			//  A variável "response" contém a resposta da ação assíncrona, que pode incluir dados de retorno da ação e outras informações relevantes. 
			//  A função de retorno de chamada pode acessar esses dados e executar as ações apropriadas com base nos resultados.
			var state = response.getState();
			// Este trecho de código define uma variável "state" que recebe o estado da resposta da ação assíncrona invocada
			// A variável "response" é um objeto que contém informações sobre a resposta da ação assíncrona, como o estado da resposta, 
			// os dados retornados pela ação, etc.
			// O método "getState" é um método de objeto que retorna o estado da resposta da ação assíncrona. 
			if (state === "SUCCESS") {
				// Este trecho de código é uma estrutura condicional que verifica se a variável "state" é igual a "SUCCESS". 
				// O valor "SUCCESS" indica que a ação assíncrona foi executada com sucesso e retornou dados, e que o componente pode agora processar esses dados. 
				// A estrutura condicional "if" é usada para testar se o estado é igual a "SUCCESS" e, se for verdadeiro, executar um bloco de código associado.

				var accounts = response.getReturnValue();
				// Este trecho de código define uma variável "accounts" que recebe o valor retornado pela ação assíncrona invocada anteriormente. A variável "response" 
				// é um objeto que contém informações sobre a resposta da ação assíncrona, como o estado da resposta, os dados retornados pela ação, etc.
				// O método "getReturnValue" é um método de objeto que retorna o valor retornado pela ação assíncrona. Esse valor pode ser qualquer tipo de dados, 
				// como um objeto, uma lista, uma string, um número, etc., dependendo do que a ação assíncrona retorna.
				// No caso deste trecho de código, a ação assíncrona provavelmente retornou uma lista de contas do Salesforce, e o valor retornado pela ação é atribuído 
				// à variável "accounts". Essa variável pode ser usada posteriormente pelo componente para exibir ou processar as contas retornadas pela ação.

				// formatar data de criação
				for (var i = 0; i < accounts.length; i++) {
					var acc = accounts[i];
					acc.formattedCreatedDate = new Date(acc.CreatedDate).toLocaleString('pt-BR');
					// Esse código é um laço de repetição que percorre um array de objetos chamado "accounts". 
					// Para cada objeto "acc" dentro do array, o código adiciona uma nova propriedade "formattedCreatedDate" 
					// que é definida como uma string formatada a partir da propriedade "CreatedDate" do objeto "acc", convertida em um objeto "Date" 
					// e formatada usando o método "toLocaleString" com a localidade definida como 'pt-BR'.
					// esse código serve para formatar a data de criação de cada conta no array "accounts" e adicioná-la como uma nova propriedade 
					// "formattedCreatedDate" para ser usada posteriormente na exibição de dados para o usuário.
				}
				

				// ordenar por nome
				accounts.sort(function(a, b) {
					var nameA = a.Name.toUpperCase();
					var nameB = b.Name.toUpperCase();
					if (nameA < nameB) {
						return -1;
					}
					if (nameA > nameB) {
						return 1;
					}
					return 0;
					// Esse código ordena um array de objetos accounts com base em seus nomes. O método sort é usado para classificar o array de contas em ordem 
					// alfabética crescente com base no nome da conta. A função sort recebe uma função de comparação como argumento, que compara dois elementos 
					// do array em cada iteração. A função de comparação converte os nomes de conta para letras maiúsculas e, em seguida, compara as duas strings. 
					// Se o nome da primeira conta for menor que o nome da segunda conta, a função de comparação retorna -1, o que indica que a primeira conta deve 
					// ser classificada antes da segunda. Se o nome da primeira conta for maior que o nome da segunda conta, a função retorna 1, o que indica que 
					// a segunda conta deve ser classificada antes da primeira. Se os nomes das duas contas forem iguais, a função retorna 0, indicando que a 
					// ordem não importa e a classificação permanece inalterada.
				});

				component.set("v.accounts", accounts);
				// Este código está definindo o valor da variável de atributo "accounts" do componente para a lista de contas "accounts". 
				// Isso permitirá que o componente acesse e exiba as informações das contas na interface do usuário. Quando o valor do atributo é atualizado, 
				// o componente será automaticamente redesenhado e exibirá a nova lista de contas.
			} else {
				console.log("Error fetching accounts");
				// Este código imprime uma mensagem de erro no console do navegador, utilizando o método "console.log()". Isso geralmente é usado para depurar e 
				// encontrar problemas em um código JavaScript. A mensagem exibida é "Error fetching accounts", o que sugere que houve um problema ao buscar contas e 
				// esse erro está sendo capturado e registrado no console para ajudar a identificar o problema.
			}
		});

		$A.enqueueAction(action);
		// é um método fornecido pela estrutura Aura nos componentes do Salesforce Lightning para enfileirar uma ação a ser executada de forma assíncrona.
		// Leva um único parâmetro, que é uma instância do lightning:actioncomponente que contém o método do controlador do lado do servidor a ser chamado.
		// Quando esse método é chamado, a ação é adicionada a uma fila de ações que o framework processará na ordem em que foram enfileiradas. Depois que 
		// a ação é executada, sua resposta é retornada ao método de retorno de chamada do componente, que pode manipular a resposta apropriadamente.
		// Esse método é comumente usado para invocar métodos de controlador do lado do servidor para recuperar ou atualizar dados sem exigir uma atualização 
		// completa da página.
	}
})