const fs = require("fs");
const removeduplicates = require("removeduplicates");

var fetchNotes = () => {
  try{
    var readNotes = fs.readFileSync("json.js");
    return JSON.parse(readNotes);
  } catch(e){
    return [];
  }
};

var saveNotes = (notes,title) =>{
  jsonNotes = JSON.stringify(  removeduplicates.default(notes,title) );
  fs.writeFileSync("json.js",jsonNotes);
};


var add = ( title, body ) => {
  var note = {title, body};
  var notes = fetchNotes();

  var noteAlreadyHere =  notes.filter(  (note) => note.title === title   ); 
  
  console.log(noteAlreadyHere.length);

  if( noteAlreadyHere.length != 0  ){
    return false;
  }

  notes.push(note);

  saveNotes(notes);

  return true;
};


var getAll = () => {

  return fetchNotes();

} ;


var removeNote = (title) => {
 var notes = fetchNotes();
 notes = notes.filter ( (note) => note.title != title ) ;
 saveNotes(notes);
};

var getNote = (title) => {
  var notes = fetchNotes();
  notes = notes.filter( (note) => note.title === title )

  if( notes.length === 1 ){
    return notes[0];
  }
};

module.exports = { getAll,add,removeNote,getNote };