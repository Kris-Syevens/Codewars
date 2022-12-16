// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  let finalStr = url;

  url.split("").forEach((char, i, originalArray) => {
    console.log(finalStr);
    if (char === "/") {
      if (originalArray[i + 1] === "/") {
        finalStr = url.slice(i + 2, url.length);
      }
    } else if (char === "w") {
      if (originalArray[i + 3] === "." && originalArray[i + 2] === "w") {
        finalStr = url.slice(i + 4, url.length);
      }
    }
    // console.log(finalStr);
  });

  //   console.log(finalStr);
  return finalStr.slice(0, finalStr.indexOf("."));
}

// console.log(domainName("http://github.com/carbonfive/raygun"));
// console.log(domainName("http://google.com"));
// console.log(domainName("http://google.co.jp"));
// console.log(domainName("www.xakep.ru"));
// console.log(domainName("https://youtube.com"));
console.log(domainName("https://www.329eko3qa4xvcdn4wu2.biz/archive/"));

// Best practice

// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };
