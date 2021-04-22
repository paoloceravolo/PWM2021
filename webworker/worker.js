onmessage = function(e){
    console.time('Tempo Worker');
    const random1 = crypto.getRandomValues( new Uint32Array(e.data));
    const random2 = crypto.getRandomValues( new Uint8Array(e.data));
    for (i=0; i<random1.length; i++){
        for(j=0;j<random1.length; j++){
            if(random1[i] % random2[j] == 0){
                postMessage(random1[i]);
            }
        }            
    }
    console.timeEnd('Tempo Worker');
}


            