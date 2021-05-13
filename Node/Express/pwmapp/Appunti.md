# Istallazione di Express

Dopo aver istallato Node.js, creare una cartella per ospitare l'applicazione

	$ mkdir miapp
	$ cd miapp

Usate il comonando **npm init** per creare un file **package.json** che terrà traccia delle dipendenze nella vostra app registrando la versione dei moduli in uso.

	$ npm init

Questo comando attiva una modalità di inserimento interattiva che richiede di definire una serie di metadati, come il nome e la versione dell'applicazione.   È possibile premete INVIO per salvare i valori predefiniti. 

Per **entry point: (index.js)** consigliamo di inserire **app.js** come nome del file principale. In alternativa prevere INVIO per accettare il nome di file predefinito.

Ora installare Express nella directory miapp e salvalo nell'elenco delle dipendenze.

	$ npm install express --save
		
Per installare Express temporaneamente e non aggiungerlo all'elenco delle dipendenze:

	$ npm install express --no-save


# Istallazione di Express Generator

Express-generator consente di creare rapidamente uno scheletro di applicazione.

	$ npm install -g express-generator
	$ express

È possibile visualizza le opzioni di comando con l'opzione -h:

	$ express -h

Che ritornerà

  	Usage: express [options] [dir]

 	 Options:

    -h, --help          output usage information
        --version       output the version number
    -e, --ejs           add ejs engine support
        --hbs           add handlebars engine support
        --pug           add pug engine support
    -H, --hogan         add hogan.js engine support
        --no-view       generate without view engine
    -v, --view <engine> add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory
    
Ad esempio, di seguito viene creata un'app Express chiamata miapp. L'app è creata in una cartella denominata miapp nella directory di lavoro corrente impostando Pug come motore di visualizzazione.

	$ express --view=pug miapp


Si può quindi proseguire con l'istallazione semplicemente con **npm install** che richiede l'istallazione delle dipendeze conenute in **package.json**

	$ cd miapp
	$ npm install

L'app generata avrà la seguente struttura:

	.
	├── app.js
	├── bin
	│   └── www
	├── package.json
	├── public
	│   ├── images
	│   ├── javascripts
	│   └── stylesheets
	│       └── style.css
	├── routes
	│   ├── index.js
	│   └── users.js
	└── views
   		├── error.pug
   	 	├── index.pug
   	 	└── layout.pug

# Installazione di Nodemon


Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development

	$ sudo npm install -g nodemon

Just use nodemon instead of node to run your code.

# Creaizone App

	$ express --hogan pwmapp
	$ cd pwmapp
	$ npm install
	
	
# Installazione Express-session

- istallazione di express-session

		$ npm install --save express-session
		
- semplice codice di count delle visite: https://www.tutorialspoint.com/expressjs/expressjs_sessions.htm

# Installazione simple autentication

- istallazione di 

		$ npm install --save express-basic-auth

- https://medium.com/javascript-in-plain-english/add-basic-authentication-to-an-express-app-9536f5095e88 
