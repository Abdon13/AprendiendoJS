const fs = require('fs');
try
{
    fs.statSync('fichero.txt')
    console.log("---El archivo existe----");
    const datos=fs.readFileSync('fichero.txt','utf8');
    console.log(datos);
}
catch(e)
{
    console.log("Error: %s",e.message);

}