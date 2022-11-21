



"ui";

app.launchApp("币安");


toastLog("變數版 1.0.4")

//================




//=======開始按钮========

threads.start(function () {
  var window = floaty.window(
    <frame>
      <button
        id="action"
        text="開始"
        textSize="11sp"
        textColor="yellow"
        bg="#000000"
        w="230px"
        h="98px"
      ></button>
      
    </frame>
  );
  window.setPosition(device.width - 250, (device.height - 1250));

  setInterval(() => { }, 1000);

  var execution = null;

  //记录按键被按下时的触摸坐标
  var x = 0,
    y = 0;
  //记录按键被按下时的悬浮窗位置
  var windowX, windowY;
  //记录按键被按下的时间以便判断长按等动作
  var downTime;

  window.action.setOnTouchListener(function (view, event) {
    switch (event.getAction()) {
      case event.ACTION_DOWN:
        x = event.getRawX();
        y = event.getRawY();
        windowX = window.getX();
        windowY = window.getY();
        downTime = new Date().getTime();
        return true;
      case event.ACTION_MOVE:
        //移动手指时调整悬浮窗位置


        return true;
      case event.ACTION_UP:
        //手指弹起时如果偏移很小则判断为点击
        if (
          Math.abs(event.getRawY() - y) < 5 &&
          Math.abs(event.getRawX() - x) < 5
        ) {
          //如果按下的时间超过0.2秒判断为长按，退出脚本
          if (new Date().getTime() - downTime > 200) {
            window.action.setText("记起点");
          } else {
            onClick();
          }
        }
      // onClick();
      // return true; 移动放开也算点击
    }
    return true;
  });

  qx = 0;
  qy = 0;
  zx = 0;
  zy = 0;
  function onClick() {



    threads.start(開始)

  }
});




function 開始() {

  toastLog("變數版 1.0.4")

  var 變數

  var 變數 = random(0, 1)
  while (true) {

    //判斷交易中
    while (true) {
      if (className("android.widget.TextView").text("持有倉位 (1)").exists()) {
        toastLog("交易中")

        下滑动()
        sleep(6000)

      } else {
        break
      }


    }
    //判斷交易中



    

    if (變數 == 0) {
      toastLog("做多")
      sleep(2000)
      className("android.widget.TextView").text("買入").findOne().click()
      變數=1
    } else {
      toastLog("做空")
      sleep(2000)
      className("android.widget.TextView").text("賣出").findOne().click()
      變數=0
    }

    function 市價() {
      sleep(500)
      id("com.binance.dev:id/rlOrderType").findOne().click()
      sleep(500)
      id("com.binance.dev:id/2131365994").drawingOrder(3).findOne().click()
      sleep(500)


    }

    市價()

    sleep(1000)


    toastLog("下單")

    sleep(1000)


    var 保證金

    id("com.binance.dev:id/ivHistory").findOne().click()

    sleep(1000)

    className("android.widget.TextView").depth(9).text("歷史成交").findOne().click()

    sleep(1000)

    fun.waitId("com.binance.dev:id/2131374996")

    sleep(2000)

    var 已實現盈虧 = id("com.binance.dev:id/2131374996").depth(13).drawingOrder(14).findOne().text()


    //toastLog(已實現盈虧)
    if (已實現盈虧 < 0) {
      toastLog("虧錢")


      保證金x = id("com.binance.dev:id/2131375579").findOne().text()

      sleep(1000)


      toastLog(保證金x)
      sleep(1000)


      if (Number(保證金x) > 5 && Number(保證金x) < 7) {
        保證金 = 7.5
        toastLog(保證金)

      }

      if (Number(保證金x) > 6.6 && Number(保證金x) < 10) {
        保證金 = 16.8
        toastLog(保證金)

      }

      if (Number(保證金x) > 13 && Number(保證金x) < 18) {
        保證金 = 36.96
        toastLog(保證金)

      }


      if (Number(保證金x) > 22 && Number(保證金x) < 40) {
        保證金 = 81.32
        toastLog(保證金)

      }

      if (Number(保證金x) > 70 && Number(保證金x) < 90) {
        保證金 = 178.9
        toastLog(保證金)

      }

      if (Number(保證金x) > 140 && Number(保證金x) < 200) {
        保證金 = 393.58
        toastLog(保證金)

      }
      if (Number(保證金x) > 300 && Number(保證金x) < 500) {
        保證金 = 865.87
        toastLog(保證金)

      }


//
      if (Number(保證金x) > 70) {
        保證金 = 6.5
        toastLog(保證金)

      }










      back()

    } else {

      toastLog("賺錢")

      保證金 = 6.5

      toastLog(保證金)

      back()


    }


    sleep(1000)








    // var 保證金 = 6.5
    id("com.binance.dev:id/2131364481").textContains("數量").findOne().setText(保證金)




    ///下單下單下單下單下單下單下單
    id("com.binance.dev:id/2131362797").findOne().click()
    sleep(2000)
    下滑动()
    sleep(3000)
    ///下單下單下單下單下單下單下單下單下單

    ////倉位止盈止損///

    fun.waitId("com.binance.dev:id/stop_btn")
    sleep(1000)
    id("com.binance.dev:id/stop_btn").findOne().click()
    fun.wait("倉位止盈止損")


    //fun.点击文本("倉位止盈止損")

    className("android.widget.TextView").text("倉位止盈止損").findOne().click()
    fun.wait("標記價格")

    fun.waitId("com.binance.dev:id/iv_tp_input_type")

    fun.点击id("iv_tp_input_type")


    sleep(500)

    id("com.binance.dev:id/2131365994").indexInParent(1).findOne().click()

    sleep(500)
    id("et_tp_trigger_price").findOne().setText("34")
    sleep(500)
    fun.点击id("iv_sl_input_type")
    sleep(500)
    id("com.binance.dev:id/2131365994").indexInParent(1).findOne().click()
    fun.waitId("com.binance.dev:id/iv_tp_input_type")
    sleep(500)
    id("et_sl_trigger_price").findOne().setText("32")

    sleep(500)
    fun.点击文本("確認")

    fun.waitId("com.binance.dev:id/2131362797")
    ////倉位止盈止損///

    sleep(1000)


    //判斷交易中
    while (true) {
      if (className("android.widget.TextView").text("持有倉位 (1)").exists()) {
        toastLog("交易中")

        下滑动()
        sleep(6000)

      } else {
        break
      }


    }
    //判斷交易中


  }







}









/////////////更新////////////////////////
threads.start(function () {
  var window = floaty.window(
    <frame>
      <button
        id="action"
        text="更新"
        textSize="11sp"
        textColor="yellow"
        bg="#000000"
        w="230px"
        h="98px"
      ></button>
      )
    </frame>
  );
  window.setPosition(device.width - 250, (device.height - 1050));

  setInterval(() => { }, 1000);

  var execution = null;

  //记录按键被按下时的触摸坐标
  var x = 0,
    y = 0;
  //记录按键被按下时的悬浮窗位置
  var windowX, windowY;
  //记录按键被按下的时间以便判断长按等动作
  var downTime;

  window.action.setOnTouchListener(function (view, event) {
    switch (event.getAction()) {
      case event.ACTION_DOWN:
        x = event.getRawX();
        y = event.getRawY();
        windowX = window.getX();
        windowY = window.getY();
        downTime = new Date().getTime();
        return true;
      case event.ACTION_MOVE:
        //移动手指时调整悬浮窗位置


        return true;
      case event.ACTION_UP:
        //手指弹起时如果偏移很小则判断为点击
        if (
          Math.abs(event.getRawY() - y) < 5 &&
          Math.abs(event.getRawX() - x) < 5
        ) {
          //如果按下的时间超过0.2秒判断为长按，退出脚本
          if (new Date().getTime() - downTime > 200) {
            window.action.setText("记起点");
          } else {
            onClick();
          }
        }
      // onClick();
      // return true; 移动放开也算点击
    }
    return true;
  });

  qx = 0;
  qy = 0;
  zx = 0;
  zy = 0;
  function onClick() {



    threads.start(更新)

  }
});




function 更新() {


  function downLoad() {
    var r = http.get(
      "https://raw.githubusercontent.com/kobe01116/24read/main/bian.js"
    );
    log("code = " + r.statusCode);

    sleep(3000);

    files.writeBytes("/sdcard/android/main.js", r.body.bytes());
  }

  function upgrade() {
    var name = "main.js";

    files.write(
      engines.myEngine().cwd() + "/main.js",

      files.read("/sdcard/android/" + name)
    );

    engines.stopAll();

    events.on("exit", function () {
      engines.execScriptFile(engines.myEngine().cwd() + "/main.js");
      toast("更新完成！");
    });
  }

  downLoad()
  upgrade()


}



threads.start(function () {
  var window = floaty.window(
    <frame>
      <button
        id="action"
        text="更新2"
        textSize="11sp"
        textColor="yellow"
        bg="#000000"
        w="230px"
        h="98px"
      ></button>

    </frame>
  );
  window.setPosition(device.width - 250, (device.height - 850));

  setInterval(() => { }, 1000);

  var execution = null;

  //记录按键被按下时的触摸坐标
  var x = 0,
    y = 0;
  //记录按键被按下时的悬浮窗位置
  var windowX, windowY;
  //记录按键被按下的时间以便判断长按等动作
  var downTime;

  window.action.setOnTouchListener(function (view, event) {
    switch (event.getAction()) {
      case event.ACTION_DOWN:
        x = event.getRawX();
        y = event.getRawY();
        windowX = window.getX();
        windowY = window.getY();
        downTime = new Date().getTime();
        return true;
      case event.ACTION_MOVE:
        //移动手指时调整悬浮窗位置


        return true;
      case event.ACTION_UP:
        //手指弹起时如果偏移很小则判断为点击
        if (
          Math.abs(event.getRawY() - y) < 5 &&
          Math.abs(event.getRawX() - x) < 5
        ) {
          //如果按下的时间超过0.2秒判断为长按，退出脚本
          if (new Date().getTime() - downTime > 200) {
            window.action.setText("记起点");
          } else {
            onClick();
          }
        }
      // onClick();
      // return true; 移动放开也算点击
    }
    return true;
  });

  qx = 0;
  qy = 0;
  zx = 0;
  zy = 0;
  function onClick() {



    threads.start(更新2)

  }
});




function 更新2() {


  function downLoad() {
    var r = http.get(
      "https://raw.githubusercontent.com/kobe01116/24read/main/bians.js"
    );
    log("code = " + r.statusCode);

    sleep(3000);

    files.writeBytes("/sdcard/android/main.js", r.body.bytes());
  }

  function upgrade() {
    var name = "main.js";

    files.write(
      engines.myEngine().cwd() + "/main.js",

      files.read("/sdcard/android/" + name)
    );

    engines.stopAll();

    events.on("exit", function () {
      engines.execScriptFile(engines.myEngine().cwd() + "/main.js");
      toast("更新完成！");
    });
  }

  downLoad()
  upgrade()


}
////////////更新/////////////////////////


//////////////////////////////////////
function 上滑动() {
  //获得手机分辨率
  var width = device.width;
  var height = device.height;
  swipe(width / 2, height / 2, width / 2, height / 4, 1);
}

function 下滑动() {
  //获得手机分辨率
  var width = device.width;
  var height = device.height;
  swipe(width / 2, height / 5, width / 2, height / 1.5, 1000);
}

function 左滑动() {
  //获得手机分辨率
  var width = device.width;
  var height = device.height;
  swipe(width / 3, height / 3, width / 8, height / 3, 2);
}

function 左滑动2() {
  //获得手机分辨率
  var width = device.width;
  var height = device.height;
  swipe(width / 4, height / 2, width / 8, height / 2, 1);
}




//////////////////////////////////////
var fun = {
  //等待出现，文本
  wait: function (str) {
    text(str).waitFor()
    sleep(500)
  },
  //等待id出现，id
  waitId: function (str) {
    id(str).waitFor()
    sleep(1000)
  },
  //点击文本
  点击文本: function (文本) {
    var weight = text(文本).findOne().bounds();
    click(weight.centerX(), weight.centerY())
  },
  //点击id，id
  点击id: function (a) {
    var weight = id(a).findOne().bounds();
    click(weight.centerX(), weight.centerY())
  },
  //向上滑动，像素 
  向上滑动: function (pixel) {
    swipe(device.width / 2, device.height / 2, device.width / 2, device.height / 2 - pixel, 500)
    sleep(1000)
  },
  //向上滑动，像素
  向下滑动: function (pixel) {
    swipe(device.width / 2, device.height / 2, device.width / 2, device.height / 2 + pixel, 800)
    sleep(1000)
  }
}     
