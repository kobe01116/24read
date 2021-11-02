"ui";

ui.layout(
  <vertical>
    <appbar>
      <toolbar title="智能接单 旧版脚本 11/02" />
      <tabs id="tabs" />
    </appbar>
    <card
      w="500"
      h="60"
      margin="10 5"
      cardCornerRadius="1dp"
      cardElevation="1dp"
      gravity="center_vertical"
    >
      <vertical padding="10" h="auto">
        <linear>
          <frame>
            <horizontal h="50">
              <Switch
                gravity="center"
                id="autoService"
                text="无障碍服务:"
                checked="{{auto.service != null}}"
                w="auto"
                textStyle="bold"
                gravity="center"
              />
              <button
                id="bt5"
                text="清除设置"
                style="Widget.AppCompat.Button.Borderless.Colored"
                w="*"
                h="60"
              />
              <button
                gravity="marginRight"
                style="Widget.AppCompat.Button.Colored"
                w="120"
                h="*"
                id="start"
                gravity="center"
              >
                启动脚本
              </button>
            </horizontal>
          </frame>
        </linear>
      </vertical>
      <View bg="#E51400" h="*" w="5" />
    </card>
    <viewpager id="v">
      <ScrollView>
        <vertical marginLeft="15">
          <text text="   "></text>
          <button
            gravity="marginRight"
            id="updata"
            style="Widget.AppCompat.Button.Colored"
            w="120"
            h="*"
            gravity="center"
          >
            检查更新
          </button>
          <horizontal>
            <horizontal>
              <text text="   "></text>

              <text text="运行次数" textColor="#000000" textSize="16sp" />
              <input
                id="input1"
                hint="运行次数"
                gravity="center"
                textSize="14sp"
                inputType="number"
              ></input>
              <text text="(次)" textColor="#000000" textSize="16sp" />
              <text text="   "></text>
              <text text="重启" textColor="#000000" textSize="16sp" />
              <input
                id="input7"
                hint="时间"
                gravity="center"
                textSize="14sp"
                inputType="number"
              ></input>
              <text text="(分钟)" textColor="#000000" textSize="16sp" />
            </horizontal>
            <text text="   "></text>
          </horizontal>
          <horizontal>
            <text text="   "></text>
            <text text="直播人数" textColor="#000000" textSize="16sp" />
            <input
              id="input2"
              hint="输入人数"
              gravity="center"
              textSize="14sp"
              inputType="number"
            ></input>
            <text text=" 到 " textColor="#000000" textSize="16sp" />

            <input
              id="input5"
              hint="输入人数"
              gravity="center"
              textSize="14sp"
              inputType="number"
            ></input>
            <text text=" (人) " textColor="#000000" textSize="16sp" />
          </horizontal>

          <radiogroup orientation="horizontal">
            <radio text="购物模式" id="模式1" textSize="20" checked="true" />
            <text text="     " />
            <radio text="语音模式" id="模式2" textSize="20" />
            <horizontal>
              <text text="   "></text>
              <text text="   "></text>
            </horizontal>
          </radiogroup>

          <text
            text="刷新次数"
            textColor="#000000"
            textSize="16sp"
            textColor="#ffff0000"
          />
          <input
            id="input6"
            hint="输入次数"
            textSize="14sp"
            inputType="number"
          ></input>

          <text text="   "></text>
          <horizontal>
            <text text="   "></text>
            <text> </text>
            <text text="文件夹名称" textColor="blue" textSize="16sp" />
            <input
              id="input3"
              hint="输入文件夹名称"
              gravity="center"
              textSize="14sp"
            ></input>
          </horizontal>
          <horizontal>
            <text text="   "></text>
            <text> </text>
            <text text="文件名称" textColor="blue" textSize="16sp" />
            <input
              id="input4"
              hint="输入文件名称"
              gravity="center"
              textSize="14sp"
            ></input>
          </horizontal>
          <text
            text="   文件存储于/sdcard/文件夹名称/文件夹名称.txt  "
            textColor="#ffff0000"
            textSize="16sp"
          />

<button id="tolog" h="40" text="全部日志" style="Widget.AppCompat.Button.Borderless.Colored"/> 
        </vertical>
      </ScrollView>
      <ScrollView>
        <vertical padding="16">
          <horizontal>
            <text textStyle="bold" textSize="20sp" textColor="black">
              {" "}
              电话段设置
            </text>
          </horizontal>
          <horizontal>
            <text text="   "></text>
            <text> </text>
            <text text="电话1:" textColor="blue" textSize="16sp" />
            <input
              id="input8"
              text="输入电话段"
              gravity="center"
              textSize="14sp"
            ></input>
          </horizontal>
          <horizontal>
            <text text="   "></text>
            <text> </text>
            <text text="电话2:" textColor="blue" textSize="16sp" />
            <input
              id="input9"
              text="输入电话段"
              gravity="center"
              textSize="14sp"
            ></input>
          </horizontal>
          <horizontal>
            <text text="   "></text>
            <text> </text>
            <text text="电话3:" textColor="blue" textSize="16sp" />
            <input
              id="input10"
              text="输入电话段"
              gravity="center"
              textSize="14sp"
            ></input>
          </horizontal>
          <horizontal>
            <text text="   "></text>
            <text> </text>
            <text text="电话4:" textColor="blue" textSize="16sp" />
            <input
              id="input11"
              text="输入电话段"
              gravity="center"
              textSize="14sp"
            ></input>
          </horizontal>
          <horizontal>
            <text text="   "></text>
            <text> </text>
            <text text="电话5:" textColor="blue" textSize="16sp" />
            <input
              id="input12"
              text="输入电话段"
              gravity="center"
              textSize="14sp"
            ></input>
          </horizontal>
          <horizontal>
            <text text="   "></text>
            <text> </text>
            <text text="电话6:" textColor="blue" textSize="16sp" />
            <input
              id="input13"
              text="输入电话段"
              gravity="center"
              textSize="14sp"
            ></input>
          </horizontal>
          <horizontal>
            <text text="   "></text>
            <text> </text>
            <text text="电话7:" textColor="blue" textSize="16sp" />
            <input
              id="input14"
              text="输入电话段"
              gravity="center"
              textSize="14sp"
            ></input>
          </horizontal>
          <horizontal>
            <text text="   "></text>
            <text> </text>
            <text text="电话8:" textColor="blue" textSize="16sp" />
            <input
              id="input15"
              text="输入电话段"
              gravity="center"
              textSize="14sp"
            ></input>
          </horizontal>
          <horizontal>
            <text text="   "></text>
            <text> </text>
            <text text="电话9:" textColor="blue" textSize="16sp" />
            <input
              id="input16"
              text="输入电话段"
              gravity="center"
              textSize="14sp"
            ></input>
          </horizontal>
          <horizontal>
            <text text="   "></text>
            <text> </text>
            <text text="电话10:" textColor="blue" textSize="16sp" />
            <input
              id="input17"
              text="输入电话段"
              gravity="center"
              textSize="14sp"
            ></input>
          </horizontal>
        </vertical>
      </ScrollView>
      <ScrollView>
        <vertical>
          <button
            style="Widget.AppCompat.Button.Colored"
            w="*"
            h="auto"
            layout_graviry="center"
            id="bt2"
          >
            获取本机识别码
          </button>
          <horizontal>
            <text text="  请输入激设备活码 :" />
            <input
              id="input18"
              hint="将识别码发送给作者获取激活码"
              textSize="16"
            />
          </horizontal>

          <text text="    "></text>
          <button
            id="bt4"
            text="清除激活码数据"
            style="Widget.AppCompat.Button.Borderless.Colored"
            w="auto"
            textSize="16"
          />
          <text text="    "></text>
          <text text="    "></text>
          <text text="    "></text>
          <text text="    "></text>
        </vertical>
      </ScrollView>
    </viewpager>
  </vertical>
);




threads.start(function checkfd() {
  function isWifiProxy() {
    var S_ICS_OR_LATER =
      android.os.Build.VERSION.SDK_INT >=
      android.os.Build.VERSION_CODES.ICE_CREAM_SANDWICH;
    var proxyAddress;
    var proxyPort;
    if (S_ICS_OR_LATER) {
      var portStr = java.lang.System.getProperty("http.proxyPort");
      proxyAddress = java.lang.System.getProperty("http.proxyHost");
      proxyPort = java.lang.Integer.parseInt(portStr != null ? portStr : "-1");
    } else {
      proxyAddress = android.net.Proxy.getHost(this);
      proxyPort = android.net.Proxy.getPort(this);
    }
    return !android.text.TextUtils.isEmpty(proxyAddress) && proxyPort != -1;
  }
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
    log("验证成功");
  }
});

var 本地存储1 = storages.create("123444555");
for (i = 18; i < 19; i++) {
  var content = 本地存储1.get("kb" + i);
  if (content) {
    ui["input" + i].setText(content);
  }
}

ui.v.setTitles(["脚本列表", "电话段设置", "激活设备"]);
ui.tabs.setupWithViewPager(ui.v);

ui.autoService.on("check", function (checked) {
  // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
  if (checked && auto.service == null) {
    app.startActivity({
      action: "android.settings.ACCESSIBILITY_SETTINGS",
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

ui.bt2.click(function () {
  threads.start(程序3);
});

function get_input_list() {
  return [
    ui.input1,
    ui.input2,
    ui.input3,
    ui.input4,
    ui.input5,
    ui.input6,
    ui.input7,
    ui.input8,
    ui.input9,
    ui.input10,
    ui.input11,
    ui.input12,
    ui.input13,
    ui.input14,
    ui.input15,
    ui.input16,
    ui.input17
  ];
}

function text_toggle() {
  list_ck = get_input_list();
  list_ck.forEach((x) => {
    x.setText(""); //false(全关)
  });
}

arr = new Array();
for (i = 18; i < 19; i++) {
  var content = ui["input" + i].getText() + "";
  本地存储1.put("kb" + i, content);
  arr.push(content);
}

var 本地存储 = storages.create("444444445565");
for (i = 1; i <= 17; i++) {
  var content = 本地存储.get("kb" + i);
  if (content) {
    ui["input" + i].setText(content);
  }
}

//保存选项
//保存选项
function save_opt() {
  let list_ck = get_check_box_list().map((x) => x.checked);

  本地存储.put("list_ck", list_ck);
}

// ******************************************
//md5加密
importClass(java.security.MessageDigest); //导入需要的包
function MD5(strInfo) {
  try {
    // 得到一个信息摘要器
    var digest = MessageDigest.getInstance("md5");
    var result = digest.digest(new java.lang.String(strInfo).getBytes("UTF-8"));
    var buffer = new java.lang.StringBuffer();
    // 把每一个byte 做一个与运算 0xff;
    for (let index = 0; index < result.length; index++) {
      var b = result[index];
      // 与运算
      var number = b & 0xff; // 加盐
      var str = java.lang.Integer.toHexString(number);
      if (str.length == 1) {
        buffer.append("0");
      }
      buffer.append(str);
    }
    // 标准的md5加密后的结果
    return buffer.toString();
  } catch (error) {
    alert(error);
    return "";
  }
}
var IMEI = device.getAndroidId();
var strSign = MD5(IMEI + IMEI.slice(4, 7) * IMEI * 54321);

var kobe335787 = strSign;
var kobe223198 = ui.input18.getText();

//复制激活码
function 程序3() {
  setClip(IMEI);
  // log(IMEI)
  toastLog("已复制手机识别码,请发送给作者");
}





//更新版版*********************** 必要时用

ui.updata.click(() => {
  toast("更新中...请稍后，5秒内将更新完毕！");
  threads.start(startTest);
});

function startTest() {
  downLoad();

  upgrade();
}

function downLoad() {
  var r = http.get(
    "https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js"
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

//更新版版***********************
ui.bt4.on("click", function () {
  本地存储1.clear();

  toast("激活码数据已清除");
});

ui.bt5.on("click", function () {
  本地存储.clear();
  text_toggle();
  toast("设置已清除");
});

var fun = {
  //等待出现，文本
  wait: function (str) {
    text(str).waitFor();
    sleep(1000);
  },
  //等待id出现，id
  waitId: function (str) {
    id(str).waitFor();
    sleep(1000);
  },
  //点击文本
  点击文本: function (文本) {
    var weight = text(文本).findOne().bounds();
    click(weight.centerX(), weight.centerY());
  },
  //点击id，id
  点击id: function (a) {
    var weight = id(a).findOne().bounds();
    click(weight.centerX(), weight.centerY());
  },
  //向上滑动，像素
  向上滑动: function (pixel) {
    swipe(
      device.width / 2,
      device.height / 2,
      device.width / 2,
      device.height / 2 - pixel,
      500
    );
    sleep(1000);
  },
  //向上滑动，像素
  向下滑动: function (pixel) {
    swipe(
      device.width / 2,
      device.height / 2,
      device.width / 2,
      device.height / 2 + pixel,
      800
    );
    sleep(1000);
  },
};

// 主脚本页面************************


ui.start.click(function () {
  if (auto.service == null) {
    toast("请开启无障碍服务");
    return;
  }

  arr = new Array();
  for (i = 18; i < 19; i++) {
    var content = ui["input" + i].getText() + "";
    本地存储1.put("kb" + i, content);
    arr.push(content);
  }
  arr = new Array();
  for (i = 1; i <= 17; i++) {
    var content = ui["input" + i].getText() + "";
    本地存储.put("kb" + i, content);
    arr.push(content);
  }
  files.remove("/sdcard/Android/main.js");

  threads.start(function () {
    function zx2231982() {
      try {
        var 内容 = http.get("https://shimo.im/docs/kyT3qdJJHJxvKCVJ/");
        var 内容1 = 内容.body.string();
        return 内容1;
      } catch (e) { }
    }

    var tty = device.getAndroidId();
    if (zx2231982().search(tty) == -1) {
      toast("验证失败,请联系作者");
      exit();
    } else {
      内容1 = ui.input18.text();
    }
    zx2231982();
  });

  if (kobe223198 != kobe335787) {
    toast("激活码错误,请联系作者");
    return;
  } else {

    threads.start(我知道了)

    threads.start(function () {

      while (true) {


        var thread = threads.start(主脚本);
        // threads.start(直播结束)

        // 此为每分钟重启时间
        sleep(60 * ui.input7.text() * 1000);
        toastLog("停止运行");
        // thread2.interrupt()
        thread.interrupt();

        七次返回()

        sleep(8000);
        打开爱加速();
      }
    });
  }
});




function 主脚本() {
  // threads.start(直播结束)
  sleep(1000)
  home()
  home()
  打开抖音();
  // 1.点直播
  threads.start(function () {
    while (true) {



      // 直播页
      while (true) {

        if (id("com.ss.android.ugc.aweme:id/f-6").exists()) {
          log("找到首页")


          id("com.ss.android.ugc.aweme:id/f-6").waitFor()
          sleep(1500);
          while (true) {
            if (text("更多直播").exists()) {
              sleep(2000)
              break
            } else {
              fun.点击id("com.ss.android.ugc.aweme:id/f-6")
              sleep(2000)
              log("点击直播")
              break
            }
          }


          fun.wait("更多直播")
          sleep(1500)
          break
        }
      }

      // 更多直播
      while (true) {
        if (text("更多直播").exists()) {
          text("更多直播").waitFor()
          sleep(1500);
          fun.点击文本("更多直播")
          log("点击更多直播")
          sleep(3000);
          break
        }

      };
      // 购物页
      while (true) {
        if (text("购物").exists()) {
          text("购物").waitFor()
          sleep(3000);
          fun.点击文本("购物")
          log("点击购物")
          sleep(3000);
          // log("点击卖家");
          var T = ui.input6.text();
          if (T > 0) {
            for (bi = 0; bi < T; bi++) {
              sleep(2000);
              下滑动();
              fun.waitId("com.ss.android.ugc.aweme:id/cmy");
              sleep(6000);
            }
          }

          sleep(1000);
          log("点击卖家");
          fun.点击id("com.ss.android.ugc.aweme:id/cmy");
          sleep(1000);
          // id

          id("com.ss.android.ugc.aweme:id/d5y").waitFor();
          sleep(3000);
          threads.start(直播结束)
          log("3秒后");
          break



        }
      }

      // 开始判断人数获取电话
      var thread2 = threads.start(function () {

        while (true) {
          if (id("com.ss.android.ugc.aweme:id/d5y").exists()) {
            判断人数()
          } else {
            while (true) {
              if (id("com.ss.android.ugc.aweme:id/f-6").exists()) {
                sleep(3000)
                break
              } else {
                back()
                toastLog("2")
                sleep(3000)
              }
            }

          }


        }
      })

      // log("停止子线程")
      while (true) {

        if (id("com.ss.android.ugc.aweme:id/f-6").exists() || text("直播已结束").exists()) {
          log("停止子线程")
          thread2.interrupt()
          sleep(2000)

          if (text("直播已结束").exists()) {
            sleep(2000)
            fun.点击id("com.ss.android.ugc.aweme:id/fj9")
            sleep(4000)
          }




          break
        }

      }



    }


  }
  )

  // thread2.join()





}

function 打开抖音() {

  toast("1s之后打开抖音");
  sleep(1000);
  home()
  sleep(1000);
  home()
  sleep(1000);
  fun.点击文本("抖音")
  fun.wait("首页");
  toast("软件已打开，3s之后开始运行！");
  sleep(3000);
}



function 进入直播() {
  // fnt直播ID

  while (true) {
    if (id("com.ss.android.ugc.aweme:id/f-6").exists()) {

      fun.点击id("com.ss.android.ugc.aweme:id/f-6");
      log("点击直播")
      sleep(3000);

      // log("点击卖家");
      fun.waitId("com.ss.android.ugc.aweme:id/cmy");
      sleep(1000);
      log("点击卖家");
      fun.点击id("com.ss.android.ugc.aweme:id/cmy");
      sleep(1000);


      var T = ui.input6.text();
      if (T > 0) {
        for (bi = 0; bi < T; bi++) {
          sleep(2000);
          下滑动();
          sleep(6000);
        }
      }
      // id
      id("com.ss.android.ugc.aweme:id/d5y").waitFor();
      sleep(3000);
      log("3秒后");




    }
  }

}

function 判断人数() {
  // threads.start(直播结束)

  while (true) {
    fun.waitId("com.ss.android.ugc.aweme:id/hp7");

    var people = id("com.ss.android.ugc.aweme:id/hp7").findOne().text();

    if (id("com.ss.android.ugc.aweme:id/hp7").textContains("万").exists()) {
      var xxx = people.slice(0, -1) * 10000;
      toastLog(xxx);
      sleep(1000);

      toastLog("目前人数 : " + xxx + "人");
      sleep(2000);
      var T1 = ui.input2.text();
      var T2 = ui.input5.text();

      if (Number(xxx) > Number(T1) && Number(xxx) < Number(T2)) {
        toastLog("符合人数");
        获取电话();
      } else {
        toastLog("不符合人数");
        上滑动();
        sleep(3000);
      }
    } else {
      toastLog("目前人数 : " + people + "人");

      var T3 = ui.input2.text();
      var T4 = ui.input5.text();

      if (people > Number(T3) && people < Number(T4)) {
        toastLog("符合人数");
        获取电话();
      } else {
        toastLog("不符合人数");
        上滑动();
        sleep(3000);
      }
    }


  }




}

// 获取并点击
function 获取电话() {

  // 等大头
  if (id("com.ss.android.ugc.aweme:id/d5y").exists()) {
    log("等到dn3")
    sleep(2000)
    fun.点击id("com.ss.android.ugc.aweme:id/d5y")
    log("点击dn3")
    sleep(6000)

  }


  // 等主关注页
  if (id("com.ss.android.ugc.aweme:id/hfn").exists()) {
    log("等到grp")
    sleep(3000)
    fun.点击id("com.ss.android.ugc.aweme:id/hfn");
    sleep(4000)

  } else {
    while (true) {
      if (id("com.ss.android.ugc.aweme:id/f-6").exists()) {
        sleep(3000)
        break
      } else {
        back()
        toastLog("1")
        sleep(3000)
      }
    }
  }


  // 等电话住址页 
  if (id("com.ss.android.ugc.aweme:id/d7a").exists()) {
    log("等到do+")
    sleep(3000)
    log("进入主页")

  } else {
    while (true) {
      if (id("com.ss.android.ugc.aweme:id/f-6").exists()) {
        sleep(3000)
        break
      } else {
        back()
        toastLog("3")
        sleep(3000)
      }
    }
  }


  id("com.ss.android.ugc.aweme:id/d7a").waitFor();



  // ************************************************
  if (
    text("[label] 联系我们").exists() ||
    text("[label] 官方电话").exists() ||
    text("[label] 联系电话").exists()
  ) {
    log("找到电话");
    var d = id("com.ss.android.ugc.aweme:id/hio").findOne().text();
    log(d);
    var 设置电话1 = ui.input8.text().toString();
    var 设置电话2 = ui.input9.text().toString();
    var 设置电话3 = ui.input10.text().toString();
    var 设置电话4 = ui.input11.text().toString();
    var 设置电话5 = ui.input12.text().toString();
    var 设置电话6 = ui.input13.text().toString();
    var 设置电话7 = ui.input14.text().toString();
    var 设置电话8 = ui.input15.text().toString();
    var 设置电话9 = ui.input16.text().toString();
    var 设置电话10 = ui.input17.text().toString();
    sleep(2000);

    if (text("[label] 联系我们").exists()) {
      fun.点击文本("[label] 联系我们");
    }
    sleep(500);
    if (text("[label] 官方电话").exists()) {
      fun.点击文本("[label] 官方电话");
    }
    sleep(500);
    if (text("[label] 联系电话").exists()) {
      fun.点击文本("[label] 联系电话");
    }
    sleep(500);

    sleep(3000);

    if (id("com.ss.android.ugc.aweme:id/c02").exists()) {
      var aa = id("com.ss.android.ugc.aweme:id/c02").findOne().text();

      sleep(1000);
      var a = ui.input3.text();
      var b = ui.input4.text();

      if (
        aa.indexOf(设置电话1) >= 0 ||
        aa.indexOf(设置电话2) >= 0 ||
        aa.indexOf(设置电话3) >= 0 ||
        aa.indexOf(设置电话4) >= 0 ||
        aa.indexOf(设置电话5) >= 0 ||
        aa.indexOf(设置电话6) >= 0 ||
        aa.indexOf(设置电话7) >= 0 ||
        aa.indexOf(设置电话8) >= 0 ||
        aa.indexOf(设置电话9) >= 0 ||
        aa.indexOf(设置电话10) >= 0
      ) {
        log("电话不符合");

        while (true) {
          if (id("com.ss.android.ugc.aweme:id/d5y").exists()) {
            sleep(3000);
            上滑动();
            sleep(1000);
            break;
          } else {
            back();
            toastLog("4")
            sleep(3000);
          }
        }
      } else {
        toastLog("电话符合");
        sleep(500);
        toastLog("存取电话");
        sleep(500);

        files.create("/sdcard/" + a + "/");
        sleep(500);
        files.append("/sdcard/" + a + "/" + b + ".txt", d);

        files.append("/sdcard/" + a + "/" + b + ".txt", (aa += "\n"));
        sleep(500);
        files.append("/sdcard/" + a + "/" + b + ".txt", "\n");
        sleep(1000);
        while (true) {
          if (id("com.ss.android.ugc.aweme:id/d5y").exists()) {
            sleep(3000);
            上滑动();
            break;
          } else {
            back();
            toastLog("5")
            sleep(2000);
          }
        }
      }
    } else {
      log("没找到电话");

      while (true) {
        if (id("com.ss.android.ugc.aweme:id/d5y").exists()) {
          sleep(3000);
          上滑动();
          break;
        } else {
          back();
          toastLog("6")
          sleep(3000);
        }
      }
    }
  } else {
    log("没找到电话");

    while (true) {
      if (id("com.ss.android.ugc.aweme:id/d5y").exists()) {
        sleep(3000);
        上滑动();
        break;
      } else {
        back();
        toastLog("7")
        sleep(3000);
      }
    }
  }
}

function 打开爱加速() {
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
  sleep(6000);


  // 关闭连接
  fun.点击id("com.fvcorp.android.aijiasuclient:id/buttonOnOff")
  sleep(5000)
  // 点击伺服器
  fun.点击id("com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle")
  sleep(5000)

  // 等待点击随机地点
  fun.waitId("com.fvcorp.android.aijiasuclient:id/layoutRandomConnection")
  sleep(5000)
  fun.点击id("com.fvcorp.android.aijiasuclient:id/layoutRandomConnection")
  sleep(5000)
  // 跳回主页成功
  fun.waitId("com.fvcorp.android.aijiasuclient:id/textStatusContent")
  sleep(5000)






}

function 七次返回() {


  back()
  sleep(5000)
  back()
  sleep(5000)
  back()
  sleep(5000)
  back()
  sleep(5000)
 
  home()

}



function 我知道了() {

  while (true) {
    if (text("我知道了").exists()) {
      sleep(100)
      fun.点击文本("我知道了")
      sleep(1000)
      break
    }

  }
}



function 直播结束() {

  while (true) {
    if (text("直播已结束").exists()) {
      sleep(2000)
      fun.点击id("com.ss.android.ugc.aweme:id/fj9")
      sleep(2000)

    }

  }
}




//音量键关闭脚本
threads.start(function () {
  //在子线程中调用observeKey()从而使按键事件处理在子线程执行
  events.observeKey();
  events.on("key_down", function (keyCode, events) {
    if (keyCode == keys.volume_down) {
      toast("退出脚本！");
      sleep(2000);
      exit();
    }
  });
});

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
  swipe(width / 3, height / 3, width / 8, height / 3, 2);
}

function 左滑动2() {
  //获得手机分辨率
  var width = device.width;
  var height = device.height;
  swipe(width / 4, height / 2, width / 8, height / 2, 1);
}









