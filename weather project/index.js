const  yargs = require("yargs");
const  note = require("./note.js");


var command = process.argv[2] ;

if(command === "add"){
   var result = note.add( yargs.argv.title,yargs.argv.body );
   if( result === true ){
       console.log(" This title was successfuly created ")
   }else{
       console.log(" This title already exist ")
   }
}

if (command === "remove"){
    note.removeNote(yargs.argv.title);
}    

if (command === "get"){
    var noteReturn = note.getNote(yargs.argv.title);

    if(noteReturn){
        console.log(`The body of title is ${noteReturn.body} `);
    }else{ 
        console.log("Note not found")
    }
}  

if(command == "list"){
    var allNotes = note.getAll();

    console.log(`Returned ${allNotes.lenght} notes`)

    allNotes.forEach( (note) => { 
        console.log (`${note.title} --  ${note.body}`) ;
    });


}
