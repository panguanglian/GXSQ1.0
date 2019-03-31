/**
 *  host 请求地址
 */
const host = ''

/**
 * 
 * @param {请求API} api 
 * @param {请求方式} methods 
 * @param {参数} data 
 * @param {header协议} header 
 */
function request(api, methods, data, header = {}) {
    // 加载提示
    wx.showLoading({
        title: '加载中...'
    })
    return new Promise((resolve, reject) => {
        wx.request({
            url: host + api,
            methods: methods,
            data: data,
            header: {
                'content-type': 'application/json'
            },
            success (res) {
                wx.hideLoading()
                resolve(res.data)
            },
            fail (error) {
                wx.hideLoading()
                reject(false)
            },
            complete () {
                wx.hideLoading()
            }
        })
    })
}

/**
 * get请求 
 * @param {请求params}} obj 
 */
function get (obj) {
    return request(obj.url, 'GET', obj.data)
}

/**
 * post请求
 * @param {请求params} obj 
 */
function post(obj) {
    return request(obj.url, 'POST', obj.data)
}

export default {
    request,
    get,
    post
}
