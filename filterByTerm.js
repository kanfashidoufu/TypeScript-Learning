"use strict";
var post1 = {
    description: 'TypeScript tutorial for beginners is a tutorial for all the JavaScript developers ...',
    id: 1,
    url: 'www.valentinog.com/typescript/',
    title: 'TypeScript tutorial for beginners',
    body: 'Some stuff here!'
};
function filterByTerm(input, searchTerm, lookupKey) {
    if (lookupKey === void 0) { lookupKey = 'url'; }
    if (!searchTerm)
        throw Error('searchTerm 不能为空');
    if (!input.length)
        throw Error('input 不能为空');
    var regex = new RegExp(searchTerm, 'i');
    return input.filter(function (arrayElement) {
        return arrayElement[lookupKey].match(regex);
    });
}
var obj1 = { url: 'string1' };
var obj2 = { url: 'string2' };
var obj3 = { url: 'string3' };
var arrOfLinks = [obj1, obj2, obj3];
var term = 'java';
filterByTerm(arrOfLinks, term);
