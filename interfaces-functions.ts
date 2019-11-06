/*
 * @Author: 看法是豆腐
 * @Date: 2019-11-06 15:28:14
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2019-11-06 17:00:42
 * @Description: file content
 */
interface IPerson {
  name: string
  city: string
  age: number
  printDetails(): string
}

const tom: IPerson = {
  name: 'tom',
  city: '杭州',
  age: 25,
  printDetails: function() {
    return `${this.name} - ${this.city}`
  }
}
