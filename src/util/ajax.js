import axios from 'axios'

let $axios = axios.create()

$axios.defaults.headers["Content-Security-Policy"] = "default-src 'self';font-src data: 'self';";
$axios.defaults.headers['X-XSS-Protection'] = "1";
$axios.defaults.headers['X-Content-Type-Options'] = "nosniff";

$axios.interceptors.response.use(function (response) {
    let {
        data
    } = response
    return Promise.resolve(data)
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default $axios