- 接口：http://badminton.amberwuwu.com/myAPI/api/login

     成功的格式：
{
    "msg": "success",
    "code": 200,
    "data": {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMDIsInVzZXJuYW1lIjoiXHU2ZDRiXHU4YmQ1MTIxNCIsImV4cCI6MTYxMTg1MDk0OCwiZW1haWwiOiIiLCJvcmlnX2lhdCI6MTYxMTc2NDU0OH0.5EIyMG5U0viBeqQrZ7RsusPn5AtGNQ_aqwcCjXyl8AM",
        "user_id": 202,
        "username": "测试1214"
    }
}

失败的格式：
{
    "msg": "用户名或者密码错误",
    "code": 400,
    "errors": {
        "username": [
            "该字段不能为空。"
        ],
        "password": [
            "该字段不能为空。"
        ]
    }
}

