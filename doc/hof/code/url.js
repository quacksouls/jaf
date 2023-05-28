const createURL = (scheme, domain, path) => `${scheme}://${domain}/${path}`;

console.log(createURL("https", "en.wikipedia.org", "wiki/Duck"));
console.log(createURL("https", "doi.org", "10.17487/RFC2549"));
