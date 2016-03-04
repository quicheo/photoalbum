
/*Changed the applicationPort from 80 to 8081 to make
 it work on localhost*/
/*module.exports = {
	applicationPort 			: 80,
	database 					: 
	{
		host					: 'localhost',
		port 					: 8889,
  		database 				: 'photoalbums',
		user     				: 'root',
 		password 				: 'mypassword'
	}
}
*/
// database connection parameters not hardcoded anymore
// if the environment variable has been set in the app. variable
// then get the credential from the opsworks.js file that is 
// automatically generated in the root directory of the project by 
// Chef  
module.exports = {
	applicationPort 			: 80,
	database :  function(){
		if(process.env.ENVIRONEMENT){
			var opsworks=require('./../opsworks');
			var opsWorksDB=opsworks.db;
			var rdsConnection={
				host	 : opsWorksDB.host,
				port	 : opsWorksDB.port,
		  		database : opsWorksDB.database,
				user     : opsWorksDB.username,
		 		password : opsworks.password
			};
			return rdsConnection;
		}else{
			var local=require('./../config/local');
			var localConnection=local.db;
			return localConnection;
		}
	}
/*	
	{
	}
*/
}