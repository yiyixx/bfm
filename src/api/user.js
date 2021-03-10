import request from './common/request'

export const saveOpenId = (data) => {
    return request('/addUser', {
        method: 'POST',
        data
    });
}