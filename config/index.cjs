const USER_CONFIG = {
  // 方糖
  USE_PASSAGE: 'push-plus',
  USERS: [
    {
      name: "酸菜味的小美🐟",
      id: "4f5b174976394fbb99078c6e03dfcf91",
      useTemplateId: "0001",
      province: "河北省",
      city: "唐山市",
      horoscopeDate: "10-13",
      horoscopeDateType: "今日",
      openUrl: "https://shuangxunian.github.io/",
      festivals: [
        {
          type: "节日",
          name: "我们认识的第一天",
          date: "07-29",
          year: "2025"
        }
      ],
      customizedDateList: [
        {
          keyword: "love_day",
          date: "2025-07-30"
        }
      ]
      // ✅ 注意：这里不需要逗号，因为后面是 } 结束 USERS 的对象
    } // ✅ USERS 数组第一个用户对象结束
    // ✅ 这个 } 后必须有一个逗号，因为后面还有其他字段
  ], // ✅ USERS 数组结束，加逗号分隔下一个属性

  // ✅ 现在开始下一个字段 "SWITCH"
  SWITCH: {
    weather: true,
    holidaytts: true,
    CIBA: false,
    oneTalk: true,
    earthyLoveWords: false,
    momentCopyrighting: false,
    poisonChickenSoup: false,
    poetry: false,
    horoscope: true,
    birthdayMessage: true
    // ✅ 注意：最后一个字段不用逗号，可加可不加
  }, // ✅ 加逗号，因为后面还有字段

  // 回调配置
  CALLBACK_TEMPLATE_ID: "0002",
  CALLBACK_USERS: [
    {
      name: "自己",
      id: "4f5b174976394fbb99078c6e03dfcf91"
    }
  ]
}; // ✅ 外层对象闭合

module.exports = USER_CONFIG;
