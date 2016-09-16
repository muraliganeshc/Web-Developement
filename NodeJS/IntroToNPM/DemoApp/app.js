console.log("In APP JS");
var cat = require("cat-me");
console.log(cat());
var jokes = require("knock-knock-jokes");
console.log(jokes());
var faker = require("faker");
var i=0;
for(i=0;i<10;i++){
    console.log(faker.fake("{{commerce.productName}}, {{commerce.price}}"));
}