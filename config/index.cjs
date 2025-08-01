const USER_CONFIG = {
//方糖
  USE_PASSAGE: 'push-plus',
  "USERS": [
    {
      "name": "酸菜味的小美🐟",
      "id": "4f5b174976394fbb99078c6e03dfcf91",
      "useTemplateId": "0001",
      "province": "河北省",
      "city": "唐山市",
      "horoscopeDate": "10-13",
      "horoscopeDateType": "今日",
      "openUrl": "https://shuangxunian.github.io/",
      "festivals": [
        {"type": "节日", "name": "我们认识的第一天", "date": "07-29", "year": "2025"}
        
      ],
      "customizedDateList": [
        {"keyword": "love_day",date:"2025-07-30"}
      ],
      "courseSchedule": {
        // 单双周的基准
        "benchmark": {
          // 这里设置一个日期，用来作为判断课表是否单双周的依据
          "date": '2025-08-01',
          // 该日期是否为单周
          "isOdd": true
        },
        // 课表
        "courses": {
          // 单周课表
          // 从星期一到星期日（星期六和星期日的课表数组可不填写）
          "odd": [
            // 例子，周一的课表
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周二
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周三
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周四
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周五
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周六  
           [
            '08:00-09:35 高等数学',
            '09:50-11:25 高等物理'
          ],
           // 周日
          [
          '08:00-09:35 高等数学',
          '09:50-11:25 高等物理'
          ]
      ],
          // 双周课表
          "even": [
            // 例子，周一的课表
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周二
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周三
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周四
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周五
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周六  
           [
            '08:00-09:35 高等数学',
            '09:50-11:25 高等物理'
          ],
         // 周日
         [
          '08:00-09:35 高等数学',
         '09:50-11:25 高等物理'
        ]
     ]
  }
},

  "SWITCH": {
    "weather": true,
    "holidaytts": true,
    "CIBA": false,
    "oneTalk": true,
    "earthyLoveWords": false,
    "momentCopyrighting": false,
    "poisonChickenSoup": false,
    "poetry": false,
    "horoscope": true,
    "birthdayMessage": true,
    "courseSchedule": true,
  },
    // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',
  "CALLBACK_TEMPLATE_ID": "0002",
  "CALLBACK_USERS": [
    {
      "name": "自己",
      "id": "4f5b174976394fbb99078c6e03dfcf91"
    }
  ]
};
module.exports = USER_CONFIG;

