/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // 请将以下代码按照图示粘贴到对应位置


// USE_PASSAGE: 'wechat-test',
// "APP_ID":"","APP_SECRET":"","IS_SHOW_COLOR":false,
//   "CALLBACK_TEMPLATE_ID":"hjFnaMHCZx48oFKFVr0ccmK5jxDJCC1NCfDFWdqbfBg",
//   "CALLBACK_USERS":[
//     {"name":"自己","id":"oqW3B7WZDh4hE3vhMgWkHeqWfuD0"}],
//   "USERS":[
//     {"name":"测试","id":"oqW3B7QZYoYK5U-jeUOXED7KzAho","useTemplateId":"LemOZLtwPz75uxWD8oeTn2yUl3_RBXfrXGZdCWSfVwE","province":"山西","city":"吕梁","horoscopeDate":"06-09","horoscopeDateType":"今日","openUrl":"https://shuangxunian.github.io/","festivals":[{"type":"节日","name":"国庆节","date":"10-01","year":"2025"},{"type":"节日","name":"圣诞节","date":"12-25","year":"2025"}],"customizedDateList":[]
//                                                                 },
//     {"name":"自己","id":"oqW3B7WZDh4hE3vhMgWkHeqWfuD0","useTemplateId":"LemOZLtwPz75uxWD8oeTn2yUl3_RBXfrXGZdCWSfVwE","province":"山西","city":"吕梁","horoscopeDate":"06-09","horoscopeDateType":"今日","openUrl":"https://shuangxunian.github.io/","festivals":[{"type":"节日","name":"国庆节","date":"10-01","year":"2025"},{"type":"节日","name":"圣诞节","date":"12-25","year":"2025"}],"customizedDateList":[]
//                                                                 },
//   ],"SWITCH":{"weather":true,"holidaytts":true,"CIBA":false,"oneTalk":true,"earthyLoveWords":false,"momentCopyrighting":false,"poisonChickenSoup":false,"poetry":false,"horoscope":true,"birthdayMessage":true}

//方糖
  USE_PASSAGE: 'push-plus',
  "USERS": [
    {
      "name": "自己",
      "id": "4f5b174976394fbb99078c6e03dfcf91",
      "useTemplateId": "0001",
      "province": "山西",
      "city": "吕梁",
      "horoscopeDate": "06-09",
      "horoscopeDateType": "今日",
      "openUrl": "https://shuangxunian.github.io/",
      "festivals": [
        {"type": "节日", "name": "国庆节", "date": "10-01", "year": "2025"},
        {"type": "节日", "name": "圣诞节", "date": "12-25", "year": "2025"}
      ],
      "customizedDateList": []
    }
  ],
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
    "birthdayMessage": true
  },
    // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '4f5b174976394fbb99078c6e03dfcf91',
    }
  ],
};

module.exports = USER_CONFIG;
// module.exports = {
//   template: `🗓️{{date.DATA}} 城市：{{city.DATA}} 天气☁️：{{weather.DATA}} 温度🌡️: {{min_temperature.DATA}}--{{max_temperature.DATA}} 风向：{{wind_direction.DATA}} 风级：{{wind_scale.DATA}} 温馨提示：{{notice.DATA}} 值得纪念：{{birthday_message.DATA}} 每日一句😋 中文：{{note_ch.DATA}} English：{{note_en.DATA}}`
// };

