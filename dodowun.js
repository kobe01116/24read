"ui";



ui.layout(
  <vertical>
    <appbar>
      <toolbar title="抖音联系获取 V1.0 " />
      <tabs id="tabs" />
    </appbar>
    <card w="500" h="60" margin="10 5" cardCornerRadius="1dp" cardElevation="1dp" gravity="center_vertical">
      <vertical padding="10" h="auto">
        <linear>
          <frame>
            <horizontal h="50" >
              <Switch gravity="center" id="autoService" text="无障碍服务:" checked="{{auto.service != null}}" w="auto" textStyle="bold" gravity="center" />
              <button id="bt5" text="清除设置" style="Widget.AppCompat.Button.Borderless.Colored" w="*" h="60" />
              <button gravity="marginRight" style="Widget.AppCompat.Button.Colored" w="120" h="*" id="start" gravity="center">启动脚本</button>
            </horizontal >
          </frame>
        </linear>
      </vertical>
      <View bg="#E51400" h="*" w="5" />
    </card>
    <viewpager id="v">
      <ScrollView>
        <vertical marginLeft="15">
          <text text="   ">
          </text>
          <button gravity="marginRight" id="updata" style="Widget.AppCompat.Button.Colored" w="120" h="*" gravity="center">检查更新</button>
          <horizontal >
            <horizontal >
              <text text="   ">
              </text>

              <text text="运行次数" textColor="#000000" textSize="16sp" />
              <input id="input1" hint="运行次数" gravity="center" textSize="14sp" inputType="number" >
              </input>
              <text text="(次)" textColor="#000000" textSize="16sp" />
              <text text="   ">
              </text>
              <text text="重启" textColor="#000000" textSize="16sp" />
              <input id="input7" hint="时间" gravity="center" textSize="14sp" inputType="number" >
              </input>
              <text text="(分钟)" textColor="#000000" textSize="16sp" />


            </horizontal>
            <text text="   ">
            </text>
          </horizontal>
          <horizontal >
            <text text="   ">
            </text>
            <text text="直播人数" textColor="#000000" textSize="16sp" />
            <input id="input2" hint="输入人数" gravity="center" textSize="14sp" inputType="number">
            </input>
            <text text=" 到 " textColor="#000000" textSize="16sp" />

            <input id="input5" hint="输入人数" gravity="center" textSize="14sp" inputType="number">
            </input>
            <text text=" (人) " textColor="#000000" textSize="16sp" />

          </horizontal>
          <text text="   ">
              </text>
          <text text="电话号段" textColor="#000000" textSize="16sp" textColor="#ffff0000" />
          
          <horizontal >
                        <checkbox id="done1" marginLeft="2" />
                        <text text="170  " textSize="16sp" textColor="#dd65ff" >
                        

                        </text>
                        <checkbox id="done2" marginLeft="3" />
                        <text text="171" textSize="16sp" textColor="#dd65ff" />
                        

                    </horizontal>
                    <horizontal >
                        <checkbox id="done3" marginLeft="2" />
                        <text text="167  " textSize="16sp" textColor="#dd65ff" >
                        

                        </text>
                        <checkbox id="done4" marginLeft="3" />
                        <text text="400" textSize="16sp" textColor="#dd65ff" />
                        

                    </horizontal>
                    <text text="   ">
              </text>
          <radiogroup orientation="horizontal" >
            <radio text="购物模式" id="模式1" textSize="20" checked="true" />
            <text text="     " />
            <radio text="语音模式" id="模式2" textSize="20" />
            <horizontal >
              <text text="   ">
              </text>
              <text text="   ">
              </text>

            </horizontal>

          </radiogroup>
          
          <text text="刷新次数" textColor="#000000" textSize="16sp" textColor="#ffff0000" />
          <input id="input6" hint="输入次数" textSize="14sp" inputType="number">
          </input>



          <text text="   ">
          </text>
          <horizontal >

            <text text="   ">
            </text>
            <text> </text>
            <text text="文件夹名称" textColor="blue" textSize="16sp" />
            <input id="input3" hint="输入文件夹名称" gravity="center" textSize="14sp" >
            </input>
          </horizontal>
          <horizontal >
            <text text="   ">
            </text>
            <text> </text>
            <text text="文件名称" textColor="blue" textSize="16sp" />
            <input id="input4" hint="输入文件名称" gravity="center" textSize="14sp" >
            </input>
          </horizontal>
          <text text="   文件存储于/sdcard/文件夹名称/文件夹名称.txt  " textColor="#ffff0000" textSize="16sp" />
        </vertical>
      </ScrollView>
      <vertical padding="16">
        <text textStyle="bold" textSize="20sp" textColor="black">   脚本使用说明：</text>
        <text margin="6" textSize="16sp" textColor="red">    点击启动脚本, 脚本自动开始, 按音量键 ( - ) 退出脚本</text>

        <text margin="6" textSize="16sp" textColor="red">    直播人数设置后进入</text>
        <text margin="6" textSize="16sp" textColor="red">    第一次使用请输入文件夹及文件名称</text>
        <text margin="6" textSize="16sp" textColor="red">    文件存储于/sdcard/文件夹名称/文件夹名称.txt</text>
      </vertical>
    </viewpager>

  </vertical>
)


threads.start(function () {
  var window = floaty.window(
    <frame>
      <button id='action' text='退出脚本' bg='#ffc107'  w="200px" h="100px" ></button>
  )
    </frame>
  );
  window.setPosition(device.width/2,device.height/5*4)

  setInterval(() => { }, 1000);

  var execution = null;

  //记录按键被按下时的触摸坐标
  var x = 0, y = 0;
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
        window.setPosition(windowX + (event.getRawX() - x),
          windowY + (event.getRawY() - y));

        return true;
      case event.ACTION_UP:
        //手指弹起时如果偏移很小则判断为点击
        if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
          //如果按下的时间超过0.2秒判断为长按，退出脚本
          if (new Date().getTime() - downTime > 200) {
            window.action.setText('记起点');
          } else {
            onClick();
          }
        }
      // onClick();
      // return true; 移动放开也算点击
    }
    return true;
  });

  qx = 0; qy = 0; zx = 0; zy = 0;
  function onClick() {

    toastLog("停止脚本 !")
    exit()
  }

})


threads.start(function checkfd() {
  function isWifiProxy() {
    var S_ICS_OR_LATER = android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.ICE_CREAM_SANDWICH;
    var proxyAddress;
    var proxyPort;
    if (S_ICS_OR_LATER) {
      var portStr = java.lang.System.getProperty("http.proxyPort");
      proxyAddress = java.lang.System.getProperty("http.proxyHost");
      proxyPort = java.lang.Integer.parseInt(portStr != null ? portStr : "-1")
    } else {
      proxyAddress = android.net.Proxy.getHost(this);
      proxyPort = android.net.Proxy.getPort(this);
    }
    return (!android.text.TextUtils.isEmpty(proxyAddress)) && (proxyPort != -1);
  };
  if (isWifiProxy() == false) {
    //这里是检测vpn
  } else {
    //exit();             
    log("789");
    exit();
  }
});

threads.start(function () {
  function 贴吧验证() {
    try {
      var 内容 = http.get("https://shimo.im/docs/vyWhDTttKxXqGQ9P");
      var 内容1 = 内容.body.string();
      return 内容1;
    } catch (e) { }
  }
  if (贴吧验证().search("抖音抖") == -1) {
    log("验证失败,请联系作者");
    exit();
  } else {
    log("验证成功")
  }
});
ui.v.setTitles(["脚本列表", "脚本说明"])
ui.tabs.setupWithViewPager(ui.v);


ui.autoService.on("check", function (checked) {
  // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
  if (checked && auto.service == null) {
    app.startActivity({
      action: "android.settings.ACCESSIBILITY_SETTINGS"
    });
  }
  if (!checked && auto.service != null) {
    auto.service.disableSelf();
  }
});
// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
  // 此时根据无障碍服务的开启情况，同步开关的状态
  ui.autoService.checked = auto.service != null;
});





function get_input_list() {
  return [ui.input1, ui.input2, ui.input3, ui.input4, ui.input5, ui.input6,ui.input7];
}

function text_toggle() {
  list_ck = get_input_list();
  list_ck.forEach(x => {
    x.setText(""); //false(全关)
  })
}


var 本地存储 = storages.create("17098928665");
for (i = 1; i <= 7; i++) {

  var content = 本地存储.get("kb" + (i));
  if (content) {

    ui["input" + (i)].setText(content);
  }
}


//保存选项
function save_opt() {
  let list_ck = get_check_box_list().map(x => x.checked)

  本地存储.put("list_ck", list_ck)

}

//加载选择项状态
function load_opt() {
  let list_ck_v = 本地存储.get("list_ck", null)

  if (list_ck_v) {
      let list_ck = get_check_box_list();
      for (let i = 0; i < list_ck_v.length; i++) {
          list_ck[i].checked = list_ck_v[i];
      }
  }

}
load_opt()

//获取选择框列表 done
function get_check_box_list() {
  return [ui.done1, ui.done2, ui.done3, ui.done4];
}






//更新版版*********************** 必要时用

ui.updata.click(() => {
  toast("更新中...请稍后，5秒内将更新完毕！")
  threads.start(startTest)

})

function startTest() {

  downLoad()

  upgrade()
}


function downLoad() {

  var r = http.get("https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js");
  log("code = " + r.statusCode);

  sleep(3000)

  files.writeBytes("/sdcard/android/main.js", r.body.bytes())

}




function upgrade() {


  var name = "main.js";

  files.write(engines.myEngine().cwd() + "/main.js",

    files.read("/sdcard/android/" + name))

  engines.stopAll()

  events.on("exit", function () {
    engines.execScriptFile(engines.myEngine().cwd() + "/main.js")
    toast("更新完成！");
  })

}

//更新版版***********************


ui.bt5.on("click", function () {
  本地存储.clear()
  text_toggle()
  toast("设置已清除")

})

var fun = {
  //等待出现，文本
  wait: function (str) {
    text(str).waitFor()
    sleep(1000)
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




// 主脚本页面************************
ui.start.click(function () {
  if (auto.service == null) {
    toast("请开启无障碍服务")
    return;
  }

  arr = new Array();
  for (i = 1; i <= 7; i++) {
    var content = ui["input" + (i)].getText() + "";
    本地存储.put("kb" + (i), content);
    arr.push(content);
  };
  save_opt()

  threads.start(function () {


    while (true) {
      var thread = threads.start(主脚本)


      // 此为每分钟重启时间
      sleep(60*ui.input7.text()*1000)
      toastLog("停止运行")

      thread.interrupt()
      killApp("抖音")
      sleep(8000)
      打开爱加速()

    }




  })


}


);



function 主脚本() {
  打开抖音()
  进入直播()
  判断人数()


}



function 打开抖音() {
  toast('1s之后打开抖音');
  sleep(1000);
  var launchResult = app.launchApp("抖音"); //app.launchApp("com.kuaishou.nebula");
  if (!launchResult) {
    toast('你还没有安装抖音！');
    sleep(1000)
    return;
  }
  fun.wait("首页")
  toast('软件已打开，3s之后开始运行！');
  sleep(3000);
};



function 进入直播() {


  // fnt直播ID
  id("com.ss.android.ugc.aweme:id/fnt").waitFor()
  sleep(3000)
  fun.点击id("com.ss.android.ugc.aweme:id/fnt")
  sleep(3000)
  // 右下人头dn3
  id("com.ss.android.ugc.aweme:id/dn3").waitFor()
  sleep(3000)
  // 3.进入购物页面 或商品页面

  if (ui.模式1.isChecked()) {

    while (true) {
      if (text("购物").exists()) {

        sleep(1000)
        fun.点击文本("购物")
        sleep(3000)
        toastLog("进入购物页")

        break
      } else {
        左滑动()
        sleep(3000)
      }
    }

  }

  if (ui.模式2.isChecked()) {

    while (true) {
      if (text("语音").exists()) {

        sleep(1000)
        fun.点击文本("语音")
        sleep(3000)
        toastLog("进入语音页")
        break
      } else {
        左滑动()
        sleep(3000)
      }
    }
  }
  var T = ui.input6.text()
  if (T > 0) {
    for (bi = 0; bi < T; bi++) {
      sleep(2000)
      下滑动()
      sleep(4000)

    }
  }

  // 4.点击卖家

  fun.waitId("com.ss.android.ugc.aweme:id/fjj")
  sleep(1000)
  log("点击卖家")
  fun.点击id("com.ss.android.ugc.aweme:id/fjj")
  sleep(1000)
  // id 
  id("com.ss.android.ugc.aweme:id/dn3").waitFor()
  sleep(3000)
  log("3秒后")
}


function 判断人数() {

  var Nxt=ui.input1.text()
  for(kjh=0;kjh<Nxt;kjh++){
    fun.waitId("com.ss.android.ugc.aweme:id/g1o")

    var people = id("com.ss.android.ugc.aweme:id/g1o").findOne().text()

    if (id("com.ss.android.ugc.aweme:id/g1o").textContains("万").exists()) {
      var xxx = (people.slice(0, -1)) * 10000
      toastLog(xxx)
      sleep(1000)
          
    
      toastLog("目前人数 : " + xxx + "人")
      sleep(2000)
      var T1 = ui.input2.text()
      var T2 = ui.input5.text()
    
      if (xxx > T1 && xxx < T2) {
        toastLog("符合人数")
        获取电话()
    
    
      } else {
        toastLog("不符合人数")
        上滑动()
        sleep(3000)
      }


    } else { 
          
      toastLog("目前人数 : " + people + "人")
    
      var T3 = ui.input2.text()
      var T4 = ui.input5.text()
    
      if (people > T3 && people < T4) {
        toastLog("符合人数")
        获取电话()
    
    
      } else {
        toastLog("不符合人数")
        上滑动()
        sleep(3000)
      }
    
    
    
    }
  
    // log("目前人数 : " + xxx + "人")
    // sleep(1000)
    // var 目前人数 = xxx
  
    // toastLog("目前人数 : " + 目前人数 + "人")
  
    // var T1 = ui.input2.text()
    // var T2 = ui.input5.text()
  
    // if (目前人数 > T1 && 目前人数 < T2) {
    //   toastLog("符合人数")
    //   获取电话()
  
  
    // } else {
    //   toastLog("不符合人数")
    //   上滑动()
    //   sleep(3000)
    // }
  
  }

  



}


function 获取电话() {

  id("com.ss.android.ugc.aweme:id/dn3").waitFor()
  sleep(6000)
  fun.点击id("com.ss.android.ugc.aweme:id/dn3")
  sleep(2000)
  // 目前操作

  while (true) {
    if (text("主页").exists()) {

      fun.点击文本("主页")
      sleep(2500)
      break
    } else {
      sleep(1000)
    }
  }


  id("com.ss.android.ugc.aweme:id/do+").waitFor()
  sleep(2000)

  // ************************************************
  if (text("[label] 联系我们").exists() || (text("[label] 官方电话").exists()) || (text("[label] 联系电话").exists())) {
    log("找到电话")
    var d = id("com.ss.android.ugc.aweme:id/guq").findOne().text()
    log(d)

    sleep(2000)

    if (text("[label] 联系我们").exists()) { fun.点击文本("[label] 联系我们") }
    sleep(500)
    if (text("[label] 官方电话").exists()) { fun.点击文本("[label] 官方电话") }
    sleep(500)
    if (text("[label] 联系电话").exists()) { fun.点击文本("[label] 联系电话") }
    sleep(500)

    sleep(3000)
    if (id("com.ss.android.ugc.aweme:id/cna").exists()) {
      var aa = id("com.ss.android.ugc.aweme:id/cna").findOne()
      log(aa.text())
      var bb = aa.text()
      toast("存取电话号码 : " + bb)
      sleep(1000)
      var a = ui.input3.text()
      var b = ui.input4.text()
      var c = bb


      files.create("/sdcard/" + a + "/")
      sleep(500)
      files.append("/sdcard/" + a + "/" + b + ".txt", d);

      files.append("/sdcard/" + a + "/" + b + ".txt", c += "\n");
      sleep(500)
      files.append("/sdcard/" + a + "/" + b + ".txt", "\n");
      sleep(1000)
      back()
      sleep(2000)
      back()
      sleep(2000)
      back()
      sleep(2000)
      上滑动()
    } else {
      log("没找到电话")

      while (true) {
        if (id("com.ss.android.ugc.aweme:id/dn3").exists()) {

          sleep(3000)
          上滑动()
          break
        } else {
          back()
          sleep(3000)
          
        }
      };

    }

  }else {
    log("没找到电话")

    while (true) {
      if (id("com.ss.android.ugc.aweme:id/dn3").exists()) {

        sleep(3000)
        上滑动()
        break
      } else {
        back()
        sleep(3000)
      }
    };

  }


};

function 打开爱加速(){
  toast('1s之后打开爱加速');
  sleep(1000);
  var launchResult = app.launchApp("爱加速"); 
  if (!launchResult) {
    toast('你还没有安装爱加速！');
    sleep(1000)
    return;
  }
  fun.waitId("com.fvcorp.android.aijiasuclient:id/textStatusContent")
  toast('软件已打开，3s之后开始运行！');
  sleep(3000);

while(true){if(text("点击连接").exists()){

  fun.点击id("com.fvcorp.android.aijiasuclient:id/buttonOnOff")
  sleep(2000)
  break
}else{
  // 关闭连接
  fun.点击id("com.fvcorp.android.aijiasuclient:id/buttonOnOff")
  sleep(2000)
  // 点击伺服器
  fun.点击id("com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle")
  sleep(2000)

  // 等待点击随机地点
  fun.waitId("com.fvcorp.android.aijiasuclient:id/layoutRandomConnection")
  sleep(2000)
  fun.点击id("com.fvcorp.android.aijiasuclient:id/layoutRandomConnection")
  sleep(2000)
  // 跳回主页成功
  fun.waitId("com.fvcorp.android.aijiasuclient:id/textStatusContent")
  sleep(2000)
  break
}

}


}

//结束QQ应用测试

function killApp(name) {
  let forcedStopStr = ["停", "强", "结束"];
  let packageName = app.getPackageName(name);
  if (packageName) {
    app.openAppSetting(packageName);
    text(name).waitFor();
    for (var i = 0; i < forcedStopStr.length; i++) {
      if (textContains(forcedStopStr[i]).exists()) {
        let forcedStop = textContains(forcedStopStr[i]).findOne();
        if (forcedStop.enabled()) {
          forcedStop.click();
          text("确定").findOne().click();
          toastLog(name + "已结束运行");
          sleep(800);
          back();
          break;
        } else {
          toastLog(name + "不在后台运行！");
          back();
          break;
        }
      }
    }
  } else {

    toastLog("应用不存在");
  }
}

//音量键关闭脚本
threads.start(function () {
  //在子线程中调用observeKey()从而使按键事件处理在子线程执行
  events.observeKey();
  events.on("key_down", function (keyCode, events) {

    if (keyCode == keys.volume_down) {
      toast("退出脚本！")
      sleep(2000);
      exit();
    }
  });
});



// threads.start(function () {
//   toast("开始运行")
//   files.remove("/sdcard/Android/main.js")
//   sleep(1000)
//   toast('1s之后打开抖音');
//   sleep(1000);
//   var launchResult = app.launchApp("抖音"); //app.launchApp("com.kuaishou.nebula");
//   if (!launchResult) {
//     toast('你还没有安装抖音！');
//     sleep(1000)
//     return;
//   }
//   fun.wait("首页")
//   toast('软件已打开，3s之后开始运行！');
//   sleep(3000);


//   // fnt直播ID
//   id("com.ss.android.ugc.aweme:id/fnt").waitFor()
//   sleep(3000)
//   fun.点击id("com.ss.android.ugc.aweme:id/fnt")
//   sleep(3000)
//   // 卖个风
//   id("com.ss.android.ugc.aweme:id/dn3").waitFor()
//   sleep(3000)
//   // 3.进入购物页面 或商品页面


//   if (ui.模式1.isChecked()) {
//     while (true) {
//       if (text("购物").exists()) {

//         sleep(1000)
//         fun.点击文本("购物")
//         sleep(1000)
//         log("进入购物页")

//         break
//       } else {
//         左滑动()
//         sleep(2000)
//       }
//     }




//   }

//   if (ui.模式2.isChecked()) {
//     while (true) {
//       if (text("商品").exists()) {

//         sleep(1000)
//         fun.点击文本("商品")
//         sleep(1000)
//         log("进入商品页")
//         break
//       } else {
//         左滑动()
//         sleep(2000)
//       }
//     }
//   }

//   var T = ui.input6.text()
//   if (T > 0) {
//     for (bi = 0; bi < T; bi++) {
//       下滑动()
//       sleep(4000)
//     }
//   }

//   // 4.点击卖家

//   fun.waitId("com.ss.android.ugc.aweme:id/fjj")
//   sleep(1000)
//   log("点击卖家")
//   fun.点击id("com.ss.android.ugc.aweme:id/fjj")
//   sleep(1000)
//   // id 说点神嬷
//   id("com.ss.android.ugc.aweme:id/dn3").waitFor()
//   sleep(3000)
//   log("3秒后")






// })

























// var a = ui.input3.text()
// var b = ui.input4.text()
// var c = "0911111111"


// files.create("/sdcard/" + a + "/")
// sleep(500)


// files.append("/sdcard/" + a + "/" + b + ".txt", c += "\n");
// sleep(500)
// files.append("/sdcard/" + a + "/" + b + ".txt", "\n");
// sleep(500)




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
  swipe(width / 2, height / 4, width / 2, height / 2, 800);
}


function 左滑动() {
  //获得手机分辨率
  var width = device.width;
  var height = device.height;
  swipe(width / 3, height / 3, width / 8, height / 3, 1);

}




// var phoneNumber = "0991290";
// var folderName = "电话号码444";
// var fileName = "联系电话.txt";


// files.create("/sdcard/"+ folderName+ "/")



// savePhoneNumber(phoneNumber, folderName, fileName);

// function savePhoneNumber(phoneNumber, folderName, fileName) {
//     phoneNumber += "\n";
//     var path = "/sdcard/" + folderName + "/" + fileName;
//     files.append(path, phoneNumber);
// }
