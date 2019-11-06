/*
 * @Author: 看法是豆腐
 * @Date: 2019-11-04 15:11:38
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2019-11-06 15:10:12
 * @Description: file content
 */
interface ILink {
  description?: string
  id?: number
  url: string
  [index: string]: any
}

interface IPost extends ILink {
  title: string
  body: string
}

const post1: IPost = {
  description:
    'TypeScript tutorial for beginners is a tutorial for all the JavaScript developers ...',
  id: 1,
  url: 'www.valentinog.com/typescript/',
  title: 'TypeScript tutorial for beginners',
  body: 'Some stuff here!'
}

function filterByTerm(
  input: Array<ILink>,
  searchTerm: string,
  lookupKey: string = 'url'
) {
  if (!searchTerm) throw Error('searchTerm 不能为空')
  if (!input.length) throw Error('input 不能为空')
  const regex = new RegExp(searchTerm, 'i')
  return input.filter(function(arrayElement) {
    return arrayElement[lookupKey].match(regex)
  })
}

const obj1: ILink = { url: 'string1' }
const obj2: ILink = { url: 'string2' }
const obj3: ILink = { url: 'string3' }

const arrOfLinks: Array<ILink> = [obj1, obj2, obj3]

const term: string = 'java'

filterByTerm(arrOfLinks, term)
