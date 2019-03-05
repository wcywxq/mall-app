import Mock from 'mockjs'
import data from './data.json'
import { MOCKURL } from '../interface.config.js'


Mock.mock(`${MOCKURL}getList`, {
    data: data.list
})
Mock.mock(`${MOCKURL}getUser`, {
    "name|2": "MOCKURL",
    "age|18-35": 20
})
Mock.mock(`${MOCKURL}regexp`, {
    "regexp1": /[a-z][A-Z][0-9]/,
    "regexp2": /\d{5,10}/
})
Mock.mock(`${MOCKURL}list`, {
    'info|10-20': [{
        'index|+1': 1,
        'name': '@first @last',
        'id': '@integer(10000, 99999)',
        'date': '@datetime',
        'img': '@image("200*200")',
        'text': '@sentence(6, 22)'
    }]
})
let Random = Mock.Random;
let productData = req => {
    let productList = []; // 存放农机信息的数组
        for (let i = 0; i < 100; i++) {
            let product = {
                name: Random.ctitle(5, 20),
                img: Random.dataImage('100x100', '农机' + Random.integer(1, 100)),
                price: Random.integer(1000, 10000),
                owner: Random.cname()
            }
            productList.push(product)
        }
    return productList
}
Mock.mock(`${MOCKURL}getVarietyItem`, productData)