"ui";

app.launchApp("币安");


toastLog("新测试(止盈,止损)1.005版-5 !")

//================




//=======開始按钮========

threads.start(function () {
  var window = floaty.window(
    <frame>
      <button
        id="action"
        text="開始"
        textSize="8sp"
        textColor="yellow"
        bg="#000000"
        w="150px"
        h="90px"
      >
      </button>

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
//=======開始按钮========


// 关闭截图确认按键
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
// 关闭截图确认按键


var 保證金 = 6.5



// 主脚本运行*******/ 主脚本运行********/ 主脚本运行


function 開始() {

  toastLog("開始運行")
  requestScreenCapture()
  // 请求权限
  sleep(2000)
  // 首次进入技术分析


  threads.start(

    function () {
      setInterval(function () {
        toastLog("脚本运行中");
      }, 10000)

    }

  )




  if (id("com.binance.dev:id/2131366852").exists()) {

    id("com.binance.dev:id/2131366852").findOne().click()
    sleep(5000)
  }
  // // 首次进入技术分析


  var 布林中


  // ================================取布林值======================================
  threads.start(function () {
    while (true) {


      if (id("com.binance.dev:id/tvPrice").exists()) {

        images.captureScreen("/storage/emulated/0/1" + ".jpg"); //截图
        var a = images.read("/storage/emulated/0/1.jpg"); //读图
        var b = images.clip(a, 233.6, 432.7, 315.6 - 233.6, 460.6 - 432.7); //取小图
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
        } else if (res.length == 10) {
          res = res.slice(2, 8)
        }

        布林中 = res

        sleep(500)

        log("布林中= " + 布林中);
        sleep(3000)
        //15秒更新一次
      }

    }
  }

  );

  // ================================取布林值======================================




  // // ==============條件判斷=================
  threads.start(function () {
    while (true) {


      // 找當前價格
      if (Number(布林中) > 0) {
        var 當前價格 = id("com.binance.dev:id/tvPrice").findOne().text()


        if (當前價格.length == 8) {

          當前價格 = 當前價格.slice(0, 1) + 當前價格.slice(-6)

        } else {
          當前價格 = 當前價格
        }
        sleep(300)

        log("當前價格= " + 當前價格);
        sleep(300)
        //0.3 秒更新一次
      }

      // 找當前價格

      if (Number(當前價格) < Number(布林中 * 1.1) && Number(當前價格) > Number(布林中 * 1.005)) {
        toastLog("當前價格符合---- 做空")

        sleep(300)
        id("com.binance.dev:id/2131362780").text("賣出").findOne().click()
        sleep(500)
        返回下單()


      } else if (Number(當前價格) < Number(布林中 / 1.005)) {
        toastLog("當前價格符合---- 做多")
        sleep(300)
        id("com.binance.dev:id/2131362712").text("買入").findOne().click()
        sleep(500)
        返回下單()


      }; //else if (Number(當前價格) < Number(布林中 * 1.00027) && Number(當前價格) > Number(布林中 / 1.00027)) {

      //   id("com.binance.dev:id/2131362712").text("買入").findOne().click()
      //   sleep(2000)

      //   toastLog("檢查平倉")
      //   平倉判斷()

      //   sleep(10000)
      // }


    }

  }

  );
  // // ==============條件判斷=================



  //結束腳本
}




function 返回下單() {

  log("返回下單")
  id("com.binance.dev:id/2131364481").textContains("數量").findOne().setText(保證金)
  sleep(500)
  ///下單下單下單下單下單下單下單
  id("com.binance.dev:id/2131362797").findOne().click()
  sleep(2000)
  下滑动()
  sleep(3000)
  上滑动()
  
  // toastLog("等待180秒");
  // for (var i = 180; i > 0; i--) {
  //   toastLog(i); sleep(1000);
  // }


  for (i = 0; 1 < 9999999; i++) {

    var 盈亏 = id("com.binance.dev:id/2131371245").findOne().text()//+ 10.55% or -10.55% 

    var 盈亏2 = 盈亏.match(/\d+\.\d+/g)    //  盈亏2=['10.55']

    var 盈亏3 = 盈亏2.toString()   //盈亏3 = 10.55

    log(盈亏3)

    if (id("com.binance.dev:id/2131371245").textContains("+").exists() && Number(盈亏3) > 40) {

      log("+35%")
      if (id("com.binance.dev:id/2131363019").text("全部平倉").exists()) {

        id("com.binance.dev:id/2131363019").text("全部平倉").findOne().click()
        sleep(300)

        id("com.binance.dev:id/2131375876").text("全部撤銷").findOne().click()

        sleep(1000)
        // com.binance.dev:id/2131366852 技术分析按钮
        id("com.binance.dev:id/2131366852").findOne().click()
        sleep(300)
        break

      }

    } else if (id("com.binance.dev:id/2131371245").textContains("-").exists() && Number(盈亏3) > 40) {

      log("-35%")
      if (id("com.binance.dev:id/2131363019").text("全部平倉").exists()) {

        id("com.binance.dev:id/2131363019").text("全部平倉").findOne().click()
        sleep(300)

        id("com.binance.dev:id/2131375876").text("全部撤銷").findOne().click()

        sleep(1000)
        // com.binance.dev:id/2131366852 技术分析按钮
        id("com.binance.dev:id/2131366852").findOne().click()
        sleep(10000)
        break
      }
    }
    else {
      log("等待中 !")
      sleep(300)
    }

    log(i)

    if (i == 370000) {
      log("平仓")

      if (id("com.binance.dev:id/2131363019").text("全部平倉").exists()) {

        id("com.binance.dev:id/2131363019").text("全部平倉").findOne().click()
        sleep(300)

        id("com.binance.dev:id/2131375876").text("全部撤銷").findOne().click()

        sleep(1000)
        // com.binance.dev:id/2131366852 技术分析按钮
        id("com.binance.dev:id/2131366852").findOne().click()
        sleep(10000)
        break
      }


    }





  }


}


function 平倉判斷() {

  if (id("com.binance.dev:id/2131363019").text("全部平倉").exists()) {

    //     var 盈亏 = id("com.binance.dev:id/2131371245").findOne().text()

    // log(盈亏)

    if (id("com.binance.dev:id/2131371245").textContains("+").exists()) {
      log("盈")

      id("com.binance.dev:id/2131363019").text("全部平倉").findOne().click()
      sleep(300)

      id("com.binance.dev:id/2131375876").text("全部撤銷").findOne().click()

      sleep(300)
      // com.binance.dev:id/2131366852 技术分析按钮
      id("com.binance.dev:id/2131366852").findOne().click()
      sleep(300)

    } else {
      log("亏")

      while (true) {

        var 盈亏 = id("com.binance.dev:id/2131371245").findOne().text()//+ 10.55% or -10.55% 

        var 盈亏2 = 盈亏.match(/\d+\.\d+/g)    //  盈亏2=['10.55']

        var 盈亏3 = 盈亏2.toString()   //盈亏3 = 10.55

        sleep(300)
        log(盈亏3)


        if (id("com.binance.dev:id/2131371245").textContains("+").exists() && Number(盈亏3) > 20) {
          log("盈")


          log("+20%")

          id("com.binance.dev:id/2131363019").text("全部平倉").findOne().click()
          sleep(300)

          id("com.binance.dev:id/2131375876").text("全部撤銷").findOne().click()

          sleep(300)
          // com.binance.dev:id/2131366852 技术分析按钮
          id("com.binance.dev:id/2131366852").findOne().click()
          sleep(300)
          break

        } else {
          sleep(1000)
          log("等待盈利")
        }


      }




    }

  } else {
    sleep(1000)
    // com.binance.dev:id/2131366852 技术分析按钮
    id("com.binance.dev:id/2131366852").findOne().click()
    sleep(1000)
    toastLog("繼續等待")
  }

}






/////////////更新////////////////////////
threads.start(function () {
  var window = floaty.window(
    <frame>
      <button
        id="action"
        text="更新"
        textSize="8sp"
        textColor="yellow"
        bg="#000000"
        w="150px"
        h="90px"
      >
      </button>

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
      // toast("更新完成！");
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
        textSize="8sp"
        textColor="yellow"
        bg="#000000"
        w="150px"
        h="90px"
      >
      </button>

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
      // toast("更新完成！");
    });
  }

  downLoad()
  upgrade()


}
////////////更新/////////////////////////


threads.start(function () {
  var window = floaty.window(
    <frame>
      <button
        id="action"
        text="日志"
        textSize="8sp"
        textColor="yellow"
        bg="#000000"
        w="150px"
        h="90px"
      >
      </button>

    </frame>
  );
  window.setPosition(device.width - 250, (device.height - 650));

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



    threads.start(日志)

  }
});

function 日志() {
  app.startActivity("console")

}







//////////////////////////////////////
function 上滑动() {
  //获得手机分辨率
  var width = device.width;
  var height = device.height;
  swipe(width / 2, height / 2, width / 2, height / 5, 800);
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




// var 盈亏=id("com.binance.dev:id/2131371245").findOne().text()//+ 10.55% or -10.55%

// var 盈亏2=盈亏.match(/\d+\.\d+/g)    //  盈亏2=['10.55']

// var 盈亏3=盈亏2.toString()   //盈亏3 = 10.55


//  if (id("com.binance.dev:id/2131371245").textContains("+").exists() && Number(盈亏3)>30) {

//     log("+30%")

//  } else { log("亏") }
