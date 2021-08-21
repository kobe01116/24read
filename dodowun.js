

"ui";


ui.layout(
  <vertical>
    <appbar>
      <toolbar title="抖音联系获取 V1.0-941 " />
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
      <ScrollView>
        <vertical padding="16">


          <horizontal >


            <text textStyle="bold" textSize="20sp" textColor="black">   电话段设置</text>

          </horizontal>
          <horizontal >
            <text text="   ">
            </text>
            <text> </text>
            <text text="电话1:" textColor="blue" textSize="16sp" />
            <input id="input8" hint="输入电话段" gravity="center" textSize="14sp" >
            </input>
          </horizontal>
          <horizontal >
            <text text="   ">
            </text>
            <text> </text>
            <text text="电话2:" textColor="blue" textSize="16sp" />
            <input id="input9" hint="输入电话段" gravity="center" textSize="14sp" >
            </input>
          </horizontal>
          <horizontal >
            <text text="   ">
            </text>
            <text> </text>
            <text text="电话3:" textColor="blue" textSize="16sp" />
            <input id="input10" hint="输入电话段" gravity="center" textSize="14sp" >
            </input>
          </horizontal>
          <horizontal >
            <text text="   ">
            </text>
            <text> </text>
            <text text="电话4:" textColor="blue" textSize="16sp" />
            <input id="input11" hint="输入电话段" gravity="center" textSize="14sp" >
            </input>
          </horizontal>
          <horizontal >
            <text text="   ">
            </text>
            <text> </text>
            <text text="电话5:" textColor="blue" textSize="16sp" />
            <input id="input12" hint="输入电话段" gravity="center" textSize="14sp" >
            </input>
          </horizontal>
          <horizontal >
            <text text="   ">
            </text>
            <text> </text>
            <text text="电话6:" textColor="blue" textSize="16sp" />
            <input id="input13" hint="输入电话段" gravity="center" textSize="14sp" >
            </input>
          </horizontal>
          <horizontal >
            <text text="   ">
            </text>
            <text> </text>
            <text text="电话7:" textColor="blue" textSize="16sp" />
            <input id="input14" hint="输入电话段" gravity="center" textSize="14sp" >
            </input>
          </horizontal>
          <horizontal >
            <text text="   ">
            </text>
            <text> </text>
            <text text="电话8:" textColor="blue" textSize="16sp" />
            <input id="input15" hint="输入电话段" gravity="center" textSize="14sp" >
            </input>
          </horizontal>
          <horizontal >
            <text text="   ">
            </text>
            <text> </text>
            <text text="电话9:" textColor="blue" textSize="16sp" />
            <input id="input16" hint="输入电话段" gravity="center" textSize="14sp" >
            </input>
          </horizontal>
          <horizontal >
            <text text="   ">
            </text>
            <text> </text>
            <text text="电话10:" textColor="blue" textSize="16sp" />
            <input id="input17" hint="输入电话段" gravity="center" textSize="14sp" >
            </input>
          </horizontal>

        </vertical>
      </ScrollView>
      <ScrollView>
        <vertical>
          <button style="Widget.AppCompat.Button.Colored" w="*" h="auto" layout_graviry="center" id="bt2">获取本机识别码</button>
          <horizontal>
            <text text="  请输入激设备活码 :" />
            <input id="input18" hint="将识别码发送给作者获取激活码" textSize="16" />
          </horizontal>


          <text text="    ">
          </text>
          <button id="bt4" text="清除激活码数据" style="Widget.AppCompat.Button.Borderless.Colored" w="auto" textSize="16" />
          <text text="    ">
          </text>
          <text text="    ">
          </text>
          <text text="    ">
          </text>
          <text text="    ">
          </text>

        </vertical>


      </ScrollView>
    </viewpager>

  </vertical>
)


threads.start(function () {
  var window = floaty.window(
    <frame>
      <button id='action' text='退出脚本' bg='#ffc107' w="200px" h="100px" ></button>
      )
    </frame>
  );
  window.setPosition(device.width / 2, device.height / 5 * 4)

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

var _0x59c4=['com.ss.android.ugc.aweme:id/fnt','https://shimo.im/docs/vyWhDTttKxXqGQ9P','bounds','请开启无障碍服务','https://shimo.im/docs/kyT3qdJJHJxvKCVJ/','模式1','符合人数','更新中...请稍后，5秒内将更新完毕！','body','[label]\x20联系电话','write','writeBytes','com.fvcorp.android.aijiasuclient:id/layoutRandomConnection','centerY','findOne','com.ss.android.ugc.aweme:id/g1o','验证失败,请联系作者','脚本列表','不在后台运行！','bt4','waitFor','height','bytes','input17','indexOf','点击文本','input10','resume','input12','put','电话不符合','/sdcard/Android/main.js','input','setText','input8','存取电话','电话符合','input18','slice','你还没有安装爱加速！','autoService','点击id','string','emitter','myEngine','com.ss.android.ugc.aweme:id/dn3','lang','get','statusCode','电话段设置','width','service','text','openAppSetting','UTF-8','没找到电话','toHexString','toString','/main.js','退出脚本！','[label]\x20官方电话','/sdcard/android/','input13','input3','停止运行','exists','目前人数\x20:\x20','enabled','getAndroidId','setupWithViewPager','String','进入语音页','input14','getText','textContains','input4','com.ss.android.ugc.aweme:id/cna','com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle','input16','input1','remove','waitId','read','append','startActivity','input5','start','security','https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js','爱加速','bt2','exit','.txt','click','MessageDigest','com.fvcorp.android.aijiasuclient:id/buttonOnOff','444444445565','进入购物页','com.ss.android.ugc.aweme:id/fjj','push','launchApp','bt5','软件已打开，3s之后开始运行！','input6','length','/sdcard/','key_down','isChecked','点击卖家','设置已清除','input9','input2'];var _0x320d=function(_0x59c4d1,_0x320d8a){_0x59c4d1=_0x59c4d1-0x0;var _0x8fa3a2=_0x59c4[_0x59c4d1];return _0x8fa3a2;};threads[_0x320d('0x56')](function(){function _0x459003(){try{var _0x32b52a=http['get'](_0x320d('0x1'));var _0x3500d9=_0x32b52a[_0x320d('0x8')][_0x320d('0x2a')]();return _0x3500d9;}catch(_0x2348a1){}}if(_0x459003()['search']('抖音抖')==-0x1){log(_0x320d('0x10'));exit();}else{log('验证成功');}});var 本地存储1=storages['create']('123444555');for(i=0x12;i<0x13;i++){var content=本地存储1[_0x320d('0x2f')]('kb'+i);if(content){ui[_0x320d('0x20')+i][_0x320d('0x21')](content);}}ui['v']['setTitles']([_0x320d('0x11'),_0x320d('0x31'),'激活设备']);ui['tabs'][_0x320d('0x45')](ui['v']);ui[_0x320d('0x28')]['on']('check',function(_0x49b279){if(_0x49b279&&auto[_0x320d('0x33')]==null){app[_0x320d('0x54')]({'action':'android.settings.ACCESSIBILITY_SETTINGS'});}if(!_0x49b279&&auto['service']!=null){auto[_0x320d('0x33')]['disableSelf']();}});ui[_0x320d('0x2b')]['on'](_0x320d('0x1b'),function(){ui[_0x320d('0x28')]['checked']=auto['service']!=null;});ui[_0x320d('0x5a')][_0x320d('0x5d')](function(){threads['start'](程序3);});function get_input_list(){return[ui[_0x320d('0x4f')],ui[_0x320d('0x6f')],ui[_0x320d('0x3f')],ui[_0x320d('0x4b')],ui[_0x320d('0x55')],ui['input6'],ui['input7'],ui[_0x320d('0x22')],ui[_0x320d('0x6e')],ui[_0x320d('0x1a')],ui['input11'],ui['input12'],ui[_0x320d('0x3e')],ui['input14'],ui['input15'],ui[_0x320d('0x4e')],ui['input17']];}function text_toggle(){list_ck=get_input_list();list_ck['forEach'](_0x4503ee=>{_0x4503ee[_0x320d('0x21')]('');});}arr=new Array();for(i=0x12;i<0x13;i++){var content=ui[_0x320d('0x20')+i][_0x320d('0x49')]()+'';本地存储1[_0x320d('0x1d')]('kb'+i,content);arr[_0x320d('0x63')](content);};var 本地存储=storages['create'](_0x320d('0x60'));for(i=0x1;i<=0x11;i++){var content=本地存储['get']('kb'+i);if(content){ui[_0x320d('0x20')+i][_0x320d('0x21')](content);}}function save_opt(){let _0x5e33b7=get_check_box_list()['map'](_0x3a1c26=>_0x3a1c26['checked']);本地存储['put']('list_ck',_0x5e33b7);}importClass(java[_0x320d('0x57')][_0x320d('0x5e')]);function MD5(_0x3561c7){try{var _0x598724=MessageDigest['getInstance']('md5');var _0x21ddef=_0x598724['digest'](new java['lang'][(_0x320d('0x46'))](_0x3561c7)['getBytes'](_0x320d('0x36')));var _0x5b1e5b=new java['lang']['StringBuffer']();for(let _0x4f9028=0x0;_0x4f9028<_0x21ddef[_0x320d('0x68')];_0x4f9028++){var _0x29baff=_0x21ddef[_0x4f9028];var _0x109d84=_0x29baff&0xff;var _0x1d1963=java[_0x320d('0x2e')]['Integer'][_0x320d('0x38')](_0x109d84);if(_0x1d1963[_0x320d('0x68')]==0x1){_0x5b1e5b[_0x320d('0x53')]('0');}_0x5b1e5b['append'](_0x1d1963);}return _0x5b1e5b[_0x320d('0x39')]();}catch(_0x260fc5){alert(_0x260fc5);return'';}}var IMEI=device[_0x320d('0x44')]();var strSign=MD5(IMEI+IMEI[_0x320d('0x26')](0x4,0x7)*IMEI*0xd431);var kobe335787=strSign;var kobe223198=ui[_0x320d('0x25')][_0x320d('0x49')]();function 程序3(){setClip(IMEI);toastLog('已复制手机识别码,请发送给作者');};ui['updata']['click'](()=>{toast(_0x320d('0x7'));threads[_0x320d('0x56')](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x3d459c=http[_0x320d('0x2f')](_0x320d('0x58'));log('code\x20=\x20'+_0x3d459c[_0x320d('0x30')]);sleep(0xbb8);files[_0x320d('0xb')]('/sdcard/android/main.js',_0x3d459c[_0x320d('0x8')][_0x320d('0x16')]());}function upgrade(){var _0x263fa9='main.js';files[_0x320d('0xa')](engines[_0x320d('0x2c')]()['cwd']()+_0x320d('0x3a'),files[_0x320d('0x52')](_0x320d('0x3d')+_0x263fa9));engines['stopAll']();events['on'](_0x320d('0x5b'),function(){engines['execScriptFile'](engines['myEngine']()['cwd']()+'/main.js');toast('更新完成！');});}ui[_0x320d('0x13')]['on'](_0x320d('0x5d'),function(){本地存储1['clear']();toast('激活码数据已清除');});ui[_0x320d('0x65')]['on']('click',function(){本地存储['clear']();text_toggle();toast(_0x320d('0x6d'));});var fun={'wait':function(_0x8c0eae){text(_0x8c0eae)['waitFor']();sleep(0x3e8);},'waitId':function(_0x492dde){id(_0x492dde)[_0x320d('0x14')]();sleep(0x3e8);},'点击文本':function(_0x1f8ac0){var _0x2f204e=text(_0x1f8ac0)['findOne']()[_0x320d('0x2')]();click(_0x2f204e['centerX'](),_0x2f204e['centerY']());},'点击id':function(_0x1326c7){var _0xc11521=id(_0x1326c7)[_0x320d('0xe')]()['bounds']();click(_0xc11521['centerX'](),_0xc11521[_0x320d('0xd')]());},'向上滑动':function(_0x2d36bd){swipe(device[_0x320d('0x32')]/0x2,device['height']/0x2,device[_0x320d('0x32')]/0x2,device['height']/0x2-_0x2d36bd,0x1f4);sleep(0x3e8);},'向下滑动':function(_0x439786){swipe(device[_0x320d('0x32')]/0x2,device['height']/0x2,device[_0x320d('0x32')]/0x2,device['height']/0x2+_0x439786,0x320);sleep(0x3e8);}};ui[_0x320d('0x56')]['click'](function(){if(auto['service']==null){toast(_0x320d('0x3'));return;}arr=new Array();for(i=0x12;i<0x13;i++){var _0xdd3062=ui['input'+i][_0x320d('0x49')]()+'';本地存储1['put']('kb'+i,_0xdd3062);arr[_0x320d('0x63')](_0xdd3062);};arr=new Array();for(i=0x1;i<=0x11;i++){var _0xdd3062=ui[_0x320d('0x20')+i]['getText']()+'';本地存储['put']('kb'+i,_0xdd3062);arr[_0x320d('0x63')](_0xdd3062);};files[_0x320d('0x50')](_0x320d('0x1f'));threads['start'](function(){function _0x31e351(){try{var _0x484224=http['get'](_0x320d('0x4'));var _0x219fcb=_0x484224['body'][_0x320d('0x2a')]();return _0x219fcb;}catch(_0x1ee64c){}}var _0x2516e6=device[_0x320d('0x44')]();if(_0x31e351()['search'](_0x2516e6)==-0x1){toast('验证失败,请联系作者');exit();}else{内容1=ui['input18'][_0x320d('0x34')]();}_0x31e351();});if(kobe223198!=kobe335787){toast('激活码错误,请联系作者');return;}else{threads[_0x320d('0x56')](function(){while(!![]){var _0x4da705=threads['start'](主脚本);sleep(0x3c*ui['input7']['text']()*0x3e8);toastLog(_0x320d('0x40'));_0x4da705['interrupt']();killApp('抖音');sleep(0x1f40);打开爱加速();}});}});function 主脚本(){打开抖音();进入直播();判断人数();}function 打开抖音(){toast('1s之后打开抖音');sleep(0x3e8);var _0x299053=app['launchApp']('抖音');if(!_0x299053){toast('你还没有安装抖音！');sleep(0x3e8);return;}fun['wait']('首页');toast('软件已打开，3s之后开始运行！');sleep(0xbb8);};function 进入直播(){id('com.ss.android.ugc.aweme:id/fnt')['waitFor']();sleep(0xbb8);fun['点击id'](_0x320d('0x0'));sleep(0xbb8);id(_0x320d('0x2d'))['waitFor']();sleep(0xbb8);if(ui[_0x320d('0x5')]['isChecked']()){while(!![]){if(text('购物')[_0x320d('0x41')]()){sleep(0x3e8);fun[_0x320d('0x19')]('购物');sleep(0xbb8);toastLog(_0x320d('0x61'));break;}else{左滑动();sleep(0xbb8);}}}if(ui['模式2'][_0x320d('0x6b')]()){while(!![]){if(text('语音')[_0x320d('0x41')]()){sleep(0x3e8);fun[_0x320d('0x19')]('语音');sleep(0xbb8);toastLog(_0x320d('0x47'));break;}else{左滑动();sleep(0xbb8);}}}var _0x38d26c=ui[_0x320d('0x67')][_0x320d('0x34')]();if(_0x38d26c>0x0){for(bi=0x0;bi<_0x38d26c;bi++){sleep(0x7d0);下滑动();sleep(0x1770);}}fun[_0x320d('0x51')](_0x320d('0x62'));sleep(0x3e8);log(_0x320d('0x6c'));fun['点击id']('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);id('com.ss.android.ugc.aweme:id/dn3')[_0x320d('0x14')]();sleep(0xbb8);log('3秒后');}function 判断人数(){var _0x435b0e=ui[_0x320d('0x4f')][_0x320d('0x34')]();for(kjh=0x0;kjh<_0x435b0e;kjh++){fun[_0x320d('0x51')](_0x320d('0xf'));var _0x3f03c7=id(_0x320d('0xf'))[_0x320d('0xe')]()[_0x320d('0x34')]();if(id(_0x320d('0xf'))[_0x320d('0x4a')]('万')[_0x320d('0x41')]()){var _0x343dd4=_0x3f03c7[_0x320d('0x26')](0x0,-0x1)*0x2710;toastLog(_0x343dd4);sleep(0x3e8);toastLog(_0x320d('0x42')+_0x343dd4+'人');sleep(0x7d0);var _0x2fa526=ui['input2']['text']();var _0x68ffde=ui[_0x320d('0x55')][_0x320d('0x34')]();if(_0x343dd4>_0x2fa526&&_0x343dd4<_0x68ffde){toastLog(_0x320d('0x6'));获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}else{toastLog('目前人数\x20:\x20'+_0x3f03c7+'人');var _0xcdeb3b=ui[_0x320d('0x6f')][_0x320d('0x34')]();var _0x2abdca=ui[_0x320d('0x55')]['text']();if(_0x3f03c7>_0xcdeb3b&&_0x3f03c7<_0x2abdca){toastLog(_0x320d('0x6'));获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}}}function 获取电话(){id(_0x320d('0x2d'))['waitFor']();sleep(0x1770);fun['点击id']('com.ss.android.ugc.aweme:id/dn3');sleep(0x7d0);while(!![]){if(text('主页')[_0x320d('0x41')]()){fun[_0x320d('0x19')]('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id('com.ss.android.ugc.aweme:id/do+')['waitFor']();sleep(0x7d0);if(text('[label]\x20联系我们')[_0x320d('0x41')]()||text(_0x320d('0x3c'))['exists']()||text('[label]\x20联系电话')[_0x320d('0x41')]()){log('找到电话');var _0x6d006b=id('com.ss.android.ugc.aweme:id/guq')['findOne']()[_0x320d('0x34')]();log(_0x6d006b);sleep(0x7d0);if(text('[label]\x20联系我们')[_0x320d('0x41')]()){fun['点击文本']('[label]\x20联系我们');}sleep(0x1f4);if(text('[label]\x20官方电话')[_0x320d('0x41')]()){fun[_0x320d('0x19')]('[label]\x20官方电话');}sleep(0x1f4);if(text(_0x320d('0x9'))['exists']()){fun[_0x320d('0x19')]('[label]\x20联系电话');}sleep(0xfa0);}else{log(_0x320d('0x37'));while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')[_0x320d('0x41')]()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}存取电话();}function 存取电话(){if(id(_0x320d('0x4c'))['exists']()){var _0x266384=ui['input8'][_0x320d('0x34')]();var _0x4a7807=ui['input9'][_0x320d('0x34')]();var _0x1f5d11=ui['input10']['text']();var _0x1b0aff=ui['input11']['text']();var _0x4076a0=ui[_0x320d('0x1c')]['text']();var _0xac8f9f=ui[_0x320d('0x3e')][_0x320d('0x34')]();var _0x30d5b2=ui[_0x320d('0x48')][_0x320d('0x34')]();var _0x390d10=ui['input15'][_0x320d('0x34')]();var _0x30b91a=ui['input16'][_0x320d('0x34')]();var _0x21d4bb=ui[_0x320d('0x17')]['text']();var _0x5944dc=id('com.ss.android.ugc.aweme:id/cna')['findOne']();log(_0x5944dc['text']());var _0x22ef06=_0x5944dc[_0x320d('0x34')]();sleep(0x3e8);var _0x916b70=ui['input3'][_0x320d('0x34')]();var _0x1cd5ac=ui[_0x320d('0x4b')]['text']();var _0x3406eb=_0x22ef06;if(_0x22ef06['indexOf'](_0x266384)>=0x0||_0x22ef06['indexOf'](_0x4a7807)>=0x0||_0x22ef06['indexOf'](_0x1f5d11)>=0x0||_0x22ef06[_0x320d('0x18')](_0x1b0aff)>=0x0||_0x22ef06[_0x320d('0x18')](_0x4076a0)>=0x0||_0x22ef06['indexOf'](_0xac8f9f)>=0x0||_0x22ef06['indexOf'](_0x30d5b2)>=0x0||_0x22ef06['indexOf'](_0x390d10)>=0x0||_0x22ef06['indexOf'](_0x30b91a)>=0x0||_0x22ef06['indexOf'](_0x21d4bb)>=0x0){toastLog(_0x320d('0x24'));sleep(0x1f4);toastLog(_0x320d('0x23'));sleep(0x1f4);_0x146251();function _0x146251(){files['create'](_0x320d('0x69')+_0x916b70+'/');sleep(0x1f4);files[_0x320d('0x53')]('/sdcard/'+_0x916b70+'/'+_0x1cd5ac+'.txt',d);files['append'](_0x320d('0x69')+_0x916b70+'/'+_0x1cd5ac+_0x320d('0x5c'),_0x3406eb+='\x0a');sleep(0x1f4);files[_0x320d('0x53')]('/sdcard/'+_0x916b70+'/'+_0x1cd5ac+'.txt','\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}}else{log(_0x320d('0x1e'));while(!![]){if(id(_0x320d('0x2d'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{log('没找到电话');while(!![]){if(id(_0x320d('0x2d'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}function 打开爱加速(){toast('1s之后打开爱加速');sleep(0x3e8);var _0x3ce547=app[_0x320d('0x64')](_0x320d('0x59'));if(!_0x3ce547){toast(_0x320d('0x27'));sleep(0x3e8);return;}fun['waitId']('com.fvcorp.android.aijiasuclient:id/textStatusContent');toast(_0x320d('0x66'));sleep(0xbb8);while(!![]){if(text('点击连接')['exists']()){fun[_0x320d('0x29')](_0x320d('0x5f'));sleep(0x7d0);break;}else{fun[_0x320d('0x29')](_0x320d('0x5f'));sleep(0x7d0);fun[_0x320d('0x29')](_0x320d('0x4d'));sleep(0x7d0);fun[_0x320d('0x51')](_0x320d('0xc'));sleep(0x7d0);fun['点击id']('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun[_0x320d('0x51')]('com.fvcorp.android.aijiasuclient:id/textStatusContent');sleep(0x7d0);break;}}}function killApp(_0x460189){let _0x427582=['停','强','结束'];let _0x4ea3dc=app['getPackageName'](_0x460189);if(_0x4ea3dc){app[_0x320d('0x35')](_0x4ea3dc);text(_0x460189)['waitFor']();for(var _0x403b04=0x0;_0x403b04<_0x427582['length'];_0x403b04++){if(textContains(_0x427582[_0x403b04])[_0x320d('0x41')]()){let _0x5d8853=textContains(_0x427582[_0x403b04])[_0x320d('0xe')]();if(_0x5d8853[_0x320d('0x43')]()){_0x5d8853['click']();text('确定')['findOne']()[_0x320d('0x5d')]();toastLog(_0x460189+'已结束运行');sleep(0x320);back();break;}else{toastLog(_0x460189+_0x320d('0x12'));back();break;}}}}else{toastLog('应用不存在');}}threads['start'](function(){events['observeKey']();events['on'](_0x320d('0x6a'),function(_0x536833,_0x3041f8){if(_0x536833==keys['volume_down']){toast(_0x320d('0x3b'));sleep(0x7d0);exit();}});});function 上滑动(){var _0x3d6ffe=device['width'];var _0x12862c=device[_0x320d('0x15')];swipe(_0x3d6ffe/0x2,_0x12862c/0x2,_0x3d6ffe/0x2,_0x12862c/0x4,0x1);}function 下滑动(){var _0x5bcf39=device['width'];var _0x55aed3=device['height'];swipe(_0x5bcf39/0x2,_0x55aed3/0x4,_0x5bcf39/0x2,_0x55aed3/0x2,0x320);}function 左滑动(){var _0x2a6387=device[_0x320d('0x32')];var _0x2b11b0=device['height'];swipe(_0x2a6387/0x3,_0x2b11b0/0x3,_0x2a6387/0x8,_0x2b11b0/0x3,0x2);}
