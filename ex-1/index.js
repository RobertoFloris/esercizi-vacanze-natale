/*
 Scrivi una funzione "trovaBabboNatale" che, dato un array di nomi, 
 restituisca "Babbo Natale trovato!" se il nome "Babbo Natale" è presente, 
 altrimenti "Babbo Natale non trovato".

 Input: ["Giovanni Gianni", "Bruno Barbieri", "Babbo Natale","Ermenegildo Buffetti"]
 Output: "Babbo Natale trovato!";
*/

const people = ["Giovanni Gianni", "Bruno Barbieri", "Babbo Natale","Ermenegildo Buffetti"];

console.log(trovaBabboNatale(people));

function trovaBabboNatale(array){
  const babbo = array.find(element => element=="Babbo Natale");
  return babbo == "Babbo Natale" ? "Babbo Natale trovato!" : "Babbo Natale non trovato"
}