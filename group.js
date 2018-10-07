var request = require('request');

var token1 = 'eHwE7iVGJ8o:APA91bFOPcQttB-bZdonGgQVo0xbJqpPKKFNRTdlcugjrFw0N6tE5UDodgg7Vw_QkG5LAIOtMbr7oKPbQRbSJIMVOC3uIVAnaf4JKTN1nkQ3ma0IUqfWzFd8mxuizjykuq0o_T-Wy374';
var token2 = 'eHwE7iVGJ8o:APA91bFOPcQttB-bZdonGgQVo0xbJqpPKKFNRTdlcugjrFw0N6tE5UDodgg7Vw_QkG5LAIOtMbr7oKPbQRbSJIMVOC3uIVAnaf4JKTN1nkQ3ma0IUqfWzFd8mxuizjykuq0o_T-Wy374';

var headers = {
     'Authorization': 'key=AAAAlo3bSHA:APA91bHFDMvigCTQfvg7CGlrJ8MWjxyOrqHz1J5gWDSzlvPBvawKxYAQkJCvsZ4GeKXJcIpUgfU6A6OS1ecQ1FzNSJV38vxNzdieRWKy4m-tXC9IbDRaFiuK0pRamGHhgay3ck9iyFCH',
     'project_id': '646625052784',
     'Content-Type':     'application/json'
         }

var options = {
     url: 'https://android.googleapis.com/gcm/notification',
     method: 'POST',
     headers: headers,
     json: {'operation': 'create', 
                'notification_key_name': 'smdimran838@gmail.com',
                'registration_ids': [token1, token2]}
}

request(options, function (error, response, body) {
                  console.log(body)
})