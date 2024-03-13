const text =
  "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";
// const string = /Spain/;
// const matchResult = text.match(string);
// console.log(matchResult);
// const regex = /[abc]+/g;
// const regex = /[a-z]+/g;
// const matchResult = text.match(regex);
// console.log(matchResult);

const regex = /rain/g;
const str =
  "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";
const matchResult = str.matchAll(regexp);
console.log(matchResult);

// console.log(text.replace("Spain", "France"));
// const regex = /Spain/i;
// console.log(text.replace(regex, "France"));

// console.log(text.replaceAll("rain", "sun"));
// const regex = /rain/gi;
// console.log(text.replaceAll(regex, "sun"));
// const regex = /plain/gi;
// console.log(text.search(regex));
