
import sampleData from "./data.js";

const emailPattern = /(?<= )[^ ]+@.+?(?= )/g;
const emailMatches = sampleData.match(emailPattern);
console.log({ emailMatches });

const urlPattern = /http.+?(?= )/g;
const urlMatches = sampleData.match(urlPattern);
console.log({ urlMatches });

const phonePattern = /\(?\d{3}\)?[\.\- ]\d{3}[\.\- ]\d{4}/g;
const phoneMatches = sampleData.match(phonePattern);
console.log({ "Phone numbers": phoneMatches });


const timePattern = /\d{1,2}\:\d{1,2}( [AP]M)?/g;
const timeMatches = sampleData.match(timePattern);
console.log({ Time: timeMatches });

const htmlPattern = /<.+?>/g;
const htmlMatches = sampleData.match(htmlPattern);
console.log({ "HTML tags": htmlMatches });

const hashtagPattern = /#.+?(?= )/g;
const hashtagMatches = sampleData.match(hashtagPattern);
console.log({ Hashtags: hashtagMatches });
