
/*Changed the applicationPort from 80 to 8081 to make
 it work on localhost*/
module.exports = {
	applicationPort 			: 8081,
	database 					: 
	{
		host					: 'localhost',
		port 					: 8889,
  		database 				: 'photoalbums',
		user     				: 'root',
 		password 				: 'mypassword'
	}
}