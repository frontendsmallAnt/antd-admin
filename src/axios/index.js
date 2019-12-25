import { Modal } from 'antd'
import JsonP from 'jsonp'
import axios from 'axios'

let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
const service = axios.create({
    baseURL: baseApi,
    timeout: 5000,
})

const change = (resolve, reject,res) => {
    if(res.status === '200'){
        let data = res.data
        if(res.code === '0'){
            resolve(data)
        }else{
            Modal.info({
                title:"提示",
                content:res.msg
            })
        }         
    }else{
        reject(res.data)
    }
}


const jsonp = (options) => {
   
    return new Promise((resolve, reject) => {
        JsonP(options.url, {
            param: 'callback',
            headers:{
                "Set-Cookie": "SameSite=None;Secure"
            }
        }, function (err, response) {
            if (response && response.status === 'success') {
                resolve(response);
            } else {
                reject("jsonp模块请求出错");
            }
        })
    })
}

const post = (url, param) => {
    return new Promise((resolve, reject) => {
        service({
            method: 'post',
            url,
            data: param
        }).then((res) => {
            change(resolve, reject,res)
            
        }).catch((err)=>{
            console.log(err)
            console.log(url,"--请求出现问题")
        })
    })
}

const get = (url, param) => {
    return new Promise((resolve, reject) => {
        service({
            method: 'get',
            url,
            data: param
        }).then((res) => {
            change(resolve, reject,res)            
        }).catch((err)=>{
            console.log(err)
            console.log(url,"--请求出现问题")
        })
    })
}

export {post,get,jsonp}


