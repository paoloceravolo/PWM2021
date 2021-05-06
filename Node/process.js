// proprietà che ci fornisce l'id del processo in esecuzione
var id = process.pid;
// proprietà che ci fornisce un'array dei parametri di esecuzione
var arr = process.argv;

var r = "";

for (i=0; i<arr.length; i++){
	r += arr[i];
	r += ' ';	
	}

process.emitWarning('Ho emesso un evento')

//equivalente a console.log("Il processo " + id + " genera: buongiorno " + r)
process.stdout.write("Il processo " + id + " genera: buongiorno " + r + '\n');