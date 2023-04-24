public class AccountsController {
	@AuraEnabled
	public static List<Account> fetchAccounts() {
		return [SELECT Name, Phone, Rating, AnnualRevenue, CreatedDate FROM Account];
	}
}