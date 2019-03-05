export const MOCKURL = 'https://market.conjuring.cn/';
export const SERVERURL = 'https://market.conjuring.cn/'; //真实url

const URL = {
    getList: MOCKURL + 'getList',
    getUser: MOCKURL + 'getUser',
    regexp: MOCKURL + 'regexp',
    list: MOCKURL + 'list',
    getVarietyItem: MOCKURL + 'getVarietyItem',

    registUser: SERVERURL + 'user/registUser',
    loginUser: SERVERURL + 'user/loginUser',
    
    getTypes: SERVERURL + 'type/getTypes',
    getProductsByType: SERVERURL + 'product/getProductsByType',
    getDetail: SERVERURL + 'product/getDetail',
    addCart: SERVERURL + 'cart/addCart',
    getCart: SERVERURL + 'cart/getCart',
    delCart: SERVERURL + 'cart/delCart',
    updateCart: SERVERURL + 'cart/updateCart'
}
export default URL;