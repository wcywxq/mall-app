const MOCKURL = 'http://www.weichuang.com/';
const SERVERURL = 'http://localhost:3000/'; //真实url

const URL = {
    getList: MOCKURL + 'getList',
    getUser: MOCKURL + 'getUser',
    regexp: MOCKURL + 'regexp',
    list: MOCKURL + 'list',
    getVarietyItem: MOCKURL + 'getVarietyItem',

    registUser: SERVERURL + 'user/registUser',
    loginUser: SERVERURL + 'user/loginUser',
}
export default URL;