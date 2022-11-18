



"ui";

app.launchApp("币安");


toastLog("掛空3.0, ＋37%, -32%")

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
      )
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

  toastLog("掛空3.0, ＋37%, -32%")


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


    //判斷盈虧//判斷盈虧//判斷盈虧//判斷盈虧//判斷盈虧

    var 保證金
    sleep(500)
    id("com.binance.dev:id/ivHistory").findOne().click()

    sleep(1000)

    className("android.widget.TextView").depth(9).text("歷史成交").findOne().click()

    sleep(1000)

    fun.waitId("com.binance.dev:id/2131374996")

    sleep(1000)

    var 已實現盈虧 = id("com.binance.dev:id/2131374996").depth(13).drawingOrder(14).findOne().text()


    //toastLog(已實現盈虧)
    if (已實現盈虧 < 0) {
      toastLog("虧錢")


      保證金 = 6.5

      toastLog(保證金)
      back()

    } else {

      toastLog("賺錢")

      var 保證金x = id("com.binance.dev:id/2131375579").findOne().text()

      sleep(1000)


      toastLog(保證金x)
      sleep(1000)


      if (Number(保證金x) > 20 && Number(保證金x) < 30) {
        保證金 = 6.5
        toastLog(保證金)

      }
      else {

        保證金 = id("com.binance.dev:id/2131375579").findOne().text() * 2

        toastLog(保證金)

        back()

      }


    }


    sleep(1000)

    //判斷盈虧//判斷盈虧//判斷盈虧//判斷盈虧//判斷盈虧



    var 價格 = id("com.binance.dev:id/2131374525").findOne().text() * 1.0015

    setClip(價格)
    sleep(800)
    id("com.binance.dev:id/2131364481").findOne().setText(價格)
    toastLog(價格)
    var 價格 = id("com.binance.dev:id/2131364481").findOne().text()


    id("com.binance.dev:id/cb_strategy_order").findOne().click()

    sleep(800)

    id("com.binance.dev:id/cb_strategy_order").findOne().click()

    sleep(800)

    id("com.binance.dev:id/2131364481").text("止盈").findOne().setText(價格 * 0.9966)
    sleep(800)
    id("com.binance.dev:id/2131364481").text("止損").findOne().setText(價格 * 1.0033)
    sleep(800)



    // var 保證金 = 6.5
    id("com.binance.dev:id/2131364481").textContains("數量").findOne().setText(保證金)




    ///下單下單下單下單下單下單下單
    id("com.binance.dev:id/2131362797").findOne().click()
    sleep(60000)
    下滑动()
    sleep(6000)
    ///下單下單下單下單下單下單下單下單下單

    if (className("android.widget.TextView").text("當前委託 (1)") && className("android.widget.TextView").text("持有倉位 (0)").exists()) {

      toastLog("撤銷訂單")


      sleep(800)
      while (true) {
        if (id("com.binance.dev:id/tv_open_order_cancel").exists()) {
          id("com.binance.dev:id/tv_open_order_cancel").findOne().click()
          sleep(2000)
          下滑动()
          sleep(2000)
        } else {
          break;

        }



      }


    } else {

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

    sleep(1000)





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
////////////更新/////////////////////////


/////////////函數/////////////////////////


function 下滑动() {
  //获得手机分辨率
  var width = device.width;
  var height = device.height;
  swipe(width / 2, height / 5, width / 2, height / 1.5, 1000);
}



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

/////////////函數/////////////////////////
