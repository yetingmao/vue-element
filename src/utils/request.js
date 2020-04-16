/*
 * @Description:
 * @Autor: yetm
 * @Date: 2020-03-23 14:28:30
 * @LastEditors: yetm
 * @LastEditTime: 2020-04-14 14:46:15
 */
import axios from 'axios';
import {
    Message
} from 'element-ui';
import { ServerUrl } from "@/config";


function dealErrWith(err) {
    console.log('request-err-msg======>', JSON.stringify(err));
    Message.error({
        background: true,
        content: '网络错误，稍后再试',
    });
}
// axios带着cookie 请求
axios.defaults.withCredentials = true;
// axios超时时间毫秒
axios.defaults.timeout = 5 * 60 * 1000;

export default async function request(opt) {
    const url = `${SERVERURL}${opt.url}`;
    if (opt.method === 'post' || opt.method === 'POST') {
        return axios.post(url, opt.body).then(res => res.data).catch((err) => {
            dealErrWith(err);
        });
    }
    if (opt.method === 'put' || opt.method === ' PUT') {
        return axios.put(url, opt.body).then(res => res.data).catch((err) => {
            dealErrWith(err);
        });
    }
    if (opt.method === 'delete' || opt.method === ' DELETE') {
        return axios.delete(url, opt.body).then(res => res.data).catch((err) => {
            dealErrWith(err);
        });
    }
    return axios.get(url).then(res => res.data).catch((err) => {
        dealErrWith(err);
    });
}