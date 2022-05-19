const fs = require('fs');
console.clear();

(()=> {
    try{
        const fyh = Date().toLocaleString();
        const nombreDelArchivo = 'fyh.txt';

        fs.writeFileSync(nombreDelArchivo, fyh);
        const response = fs.readFileSync(nombreDelArchivo, 'utf8');
        console.log(response)
    }
    catch(e){
        console.log(e);
    }
})();