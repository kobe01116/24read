
"ui";

app.launchApp("币安");


log("最新布林雲機版")

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

threads.start(function () {

  while (true) {
    if (classNameContains("Button").textContains("立即开始").exists()) {
      var beginBtn;
      if (beginBtn = classNameContains("Button").textContains("立即开始").findOne(2000)) {
        beginBtn.click();
      }
    }

  }

});

var 保證金 = 6.5

function 開始() {

  log("最新布林雲機版")
  requestScreenCapture()
  // 请求权限

  while (true) {

    //判斷交易中
    while (true) {
      if (className("android.widget.TextView").text("持有倉位 (1)").exists()) {
        log("交易中")

        下滑动()
        sleep(6000)

      } else {
        break
      }


    }
    //判斷交易中




    // 进入技术分析等待10秒
    if (id("com.binance.dev:id/2131366852").exists()) {

      id("com.binance.dev:id/2131366852").findOne().click()
      sleep(10000)
    }



    var 布林上
    var 布林下
    var 布林中

    // ================================取布林值======================================
    threads.start(function () {
      while (true) {


        if (id("com.binance.dev:id/tvPrice").exists()) {

          images.captureScreen("/storage/emulated/0/1" + ".jpg"); //截图
          var a = images.read("/storage/emulated/0/1.jpg"); //读图
          var b = images.clip(a, 72.9, 432.7, 148.8-72.9, 459.6-432.7); //取小图
          images.save(b, "/storage/emulated/0/1-1.jpg") //存小图
          a.recycle(); //删图



          img = images.read("/storage/emulated/0/1-1.jpg")
          // let img = captureScreen(); log("截图");
          //var res = JSON.stringify(paddle.ocrText(img, 8, false));
          var res = JSON.stringify(paddle.ocrText(img));
          img.recycle();
          if (res.length == 12) {
            res = res.slice(2, 10)
            res = res.slice(0, 1) + res.slice(-6)
          }
          else if (res.length == 10) {
            res = res.slice(2, 8)
          }

          布林上 = res

        }

        // 布林上布林上布林上布林上布林上布林上布林上布林上

        sleep(500)

        // 布林下布林下布林下布林下布林下布林下布林下布林下布林下

        if (id("com.binance.dev:id/tvPrice").exists()) {

          images.captureScreen("/storage/emulated/0/2" + ".jpg"); //截图
          var c = images.read("/storage/emulated/0/2.jpg"); //读图
          var d = images.clip(c, 392.5, 434.7, 469.2-392.5,466.6- 434.7); //取小图
          images.save(d, "/storage/emulated/0/2-1.jpg") //存小图
          c.recycle(); //删图



          img2 = images.read("/storage/emulated/0/2-1.jpg")
          // let img = captureScreen(); log("截图");
          //var res = JSON.stringify(paddle.ocrText(img, 8, false));
          var res2 = JSON.stringify(paddle.ocrText(img2));
          img2.recycle();
          if (res2.length == 12) {
            res2 = res2.slice(2, 10)
            res2 = res2.slice(0, 1) + res2.slice(-6)
          }
          else if (res2.length == 10) {
            res2 = res2.slice(2, 8)
          }

          布林下 = res2
          布林中 = (Number(布林上) + Number(布林下)) / 2

          log("布林上= " + 布林上);
          log("布林下= " + 布林下);


          log("布林中= " + 布林中);
          sleep(3000)


        }



      }



    })
    // ================================取布林值======================================



    // ================================以下判加倉 , 平倉======================================


    while (true) {

      if (id("com.binance.dev:id/2131366852").exists()) {

        id("com.binance.dev:id/2131366852").findOne().click()
        sleep(10000)
      }

      if (id("com.binance.dev:id/tvPrice").exists()) {
        sleep(500)
        var 當前價格 = id("com.binance.dev:id/tvPrice").findOne().text()

        // ==============找當前價格=================
        if (當前價格.length == 8) {

          當前價格 = 當前價格.slice(0, 1) + 當前價格.slice(-6)

        }
        else {
          當前價格 = 當前價格
        }
        // ==============找當前價格=================





        if (當前價格 > 布林上) {
          log("當前價格 大於 布林上  做空")
          

          id("com.binance.dev:id/2131362712").text("賣出").findOne().click()
          sleep(500)
          返回下單()


        }


        else if (當前價格 < 布林下) {
          log("當前價格 小於 布林下  做多")
          id("com.binance.dev:id/2131362712").text("買入").findOne().click()
          sleep(500)
          返回下單()


        }
        else {
          log("當前價格 " + 當前價格)
          // log("等待中")
          sleep(500)
        }



      }


    }





  }



}

function 返回下單() {

  log("返回下單")
  id("com.binance.dev:id/2131364481").textContains("數量").findOne().setText(保證金)

  ///下單下單下單下單下單下單下單
  // id("com.binance.dev:id/2131362797").findOne().click()
  sleep(2000)
  下滑动()
  sleep(3000)

  ////倉位止盈止損///

  fun.waitId("com.binance.dev:id/stop_btn")
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
  id("et_tp_trigger_price").findOne().setText("35")
  sleep(500)
  fun.点击id("iv_sl_input_type")
  sleep(500)
  id("com.binance.dev:id/2131365994").indexInParent(1).findOne().click()
  fun.waitId("com.binance.dev:id/iv_tp_input_type")
  sleep(500)
  id("et_sl_trigger_price").findOne().setText("50")

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

