

"ui";


ui.layout(
  <vertical>
    <appbar>
      <toolbar title="抖音联系获取 V1.0 -1006 " />
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

var _0xcc8e=['emitter','input2','com.fvcorp.android.aijiasuclient:id/buttonOnOff','验证成功','start','已结束运行','waitFor','已复制手机识别码,请发送给作者','激活码数据已清除','body','forEach','激活设备','/sdcard/','getInstance','findOne','软件已打开，3s之后开始运行！','点击卖家','应用不存在','width','444444445565','checked','/sdcard/android/','waitId','centerY','search','你还没有安装抖音！','[label]\x20官方电话','updata','StringBuffer','myEngine','/main.js','com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle','setupWithViewPager','stopAll','com.fvcorp.android.aijiasuclient:id/textStatusContent','slice','com.ss.android.ugc.aweme:id/dn3','main.js','input17','textContains','height','https://shimo.im/docs/kyT3qdJJHJxvKCVJ/','/sdcard/Android/main.js','lang','请开启无障碍服务','input9','input12','setTitles','电话符合','map','indexOf','/sdcard/android/main.js','存取电话','点击文本','service','input16','com.ss.android.ugc.aweme:id/guq','list_ck','.txt','验证失败,请联系作者','input10','input14','click','input4','clear','bytes','exists','create','text','com.ss.android.ugc.aweme:id/do+','length','MessageDigest','input7','setText','push','openAppSetting','input','[label]\x20联系我们','目前人数\x20:\x20','input1','getText','https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js','找到电话','com.ss.android.ugc.aweme:id/fjj','Integer','get','电话不符合','1s之后打开爱加速','[label]\x20联系电话','md5','append','bounds','centerX','put','com.ss.android.ugc.aweme:id/fnt','toString','com.ss.android.ugc.aweme:id/g1o','点击id','bt4','没找到电话'];var _0x8eba=function(_0xcc8ecc,_0x8ebac6){_0xcc8ecc=_0xcc8ecc-0x0;var _0x15457b=_0xcc8e[_0xcc8ecc];return _0x15457b;};threads[_0x8eba('0x4')](function(){function _0x1b5114(){try{var _0x2890db=http['get']('https://shimo.im/docs/vyWhDTttKxXqGQ9P');var _0x1363a3=_0x2890db[_0x8eba('0x9')]['string']();return _0x1363a3;}catch(_0x20d343){}}if(_0x1b5114()[_0x8eba('0x18')]('抖音抖')==-0x1){log(_0x8eba('0x3b'));exit();}else{log(_0x8eba('0x3'));}});var 本地存储1=storages[_0x8eba('0x43')]('123444555');for(i=0x12;i<0x13;i++){var content=本地存储1[_0x8eba('0x55')]('kb'+i);if(content){ui[_0x8eba('0x4c')+i][_0x8eba('0x49')](content);}}ui['v'][_0x8eba('0x2f')](['脚本列表','电话段设置',_0x8eba('0xb')]);ui['tabs'][_0x8eba('0x20')](ui['v']);ui['autoService']['on']('check',function(_0x3d68e3){if(_0x3d68e3&&auto[_0x8eba('0x36')]==null){app['startActivity']({'action':'android.settings.ACCESSIBILITY_SETTINGS'});}if(!_0x3d68e3&&auto[_0x8eba('0x36')]!=null){auto['service']['disableSelf']();}});ui[_0x8eba('0x0')]['on']('resume',function(){ui['autoService'][_0x8eba('0x14')]=auto['service']!=null;});ui['bt2'][_0x8eba('0x3e')](function(){threads['start'](程序3);});function get_input_list(){return[ui[_0x8eba('0x4f')],ui[_0x8eba('0x1')],ui['input3'],ui[_0x8eba('0x3f')],ui['input5'],ui['input6'],ui['input7'],ui['input8'],ui['input9'],ui[_0x8eba('0x3c')],ui['input11'],ui[_0x8eba('0x2e')],ui['input13'],ui[_0x8eba('0x3d')],ui['input15'],ui['input16'],ui['input17']];}function text_toggle(){list_ck=get_input_list();list_ck[_0x8eba('0xa')](_0x10fd93=>{_0x10fd93[_0x8eba('0x49')]('');});}arr=new Array();for(i=0x12;i<0x13;i++){var content=ui[_0x8eba('0x4c')+i]['getText']()+'';本地存储1[_0x8eba('0x5d')]('kb'+i,content);arr['push'](content);};var 本地存储=storages['create'](_0x8eba('0x13'));for(i=0x1;i<=0x11;i++){var content=本地存储['get']('kb'+i);if(content){ui['input'+i]['setText'](content);}}function save_opt(){let _0x1cd4c5=get_check_box_list()[_0x8eba('0x31')](_0xc17de3=>_0xc17de3['checked']);本地存储['put'](_0x8eba('0x39'),_0x1cd4c5);}importClass(java['security'][_0x8eba('0x47')]);function MD5(_0x1adcb2){try{var _0x35efd4=MessageDigest[_0x8eba('0xd')](_0x8eba('0x59'));var _0x490103=_0x35efd4['digest'](new java[(_0x8eba('0x2b'))]['String'](_0x1adcb2)['getBytes']('UTF-8'));var _0x592b00=new java['lang'][(_0x8eba('0x1c'))]();for(let _0x579709=0x0;_0x579709<_0x490103['length'];_0x579709++){var _0x346c63=_0x490103[_0x579709];var _0x136260=_0x346c63&0xff;var _0x300d69=java['lang'][_0x8eba('0x54')]['toHexString'](_0x136260);if(_0x300d69[_0x8eba('0x46')]==0x1){_0x592b00['append']('0');}_0x592b00['append'](_0x300d69);}return _0x592b00['toString']();}catch(_0x2d905c){alert(_0x2d905c);return'';}}var IMEI=device['getAndroidId']();var strSign=MD5(IMEI+IMEI[_0x8eba('0x23')](0x4,0x7)*IMEI*0xd431);var kobe335787=strSign;var kobe223198=ui['input18'][_0x8eba('0x50')]();function 程序3(){setClip(IMEI);toastLog(_0x8eba('0x7'));};ui[_0x8eba('0x1b')][_0x8eba('0x3e')](()=>{toast('更新中...请稍后，5秒内将更新完毕！');threads['start'](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x4c417d=http['get'](_0x8eba('0x51'));log('code\x20=\x20'+_0x4c417d['statusCode']);sleep(0xbb8);files['writeBytes'](_0x8eba('0x33'),_0x4c417d['body'][_0x8eba('0x41')]());}function upgrade(){var _0x5e07e3=_0x8eba('0x25');files['write'](engines[_0x8eba('0x1d')]()['cwd']()+_0x8eba('0x1e'),files['read'](_0x8eba('0x15')+_0x5e07e3));engines[_0x8eba('0x21')]();events['on']('exit',function(){engines['execScriptFile'](engines[_0x8eba('0x1d')]()['cwd']()+_0x8eba('0x1e'));toast('更新完成！');});}ui[_0x8eba('0x62')]['on'](_0x8eba('0x3e'),function(){本地存储1[_0x8eba('0x40')]();toast(_0x8eba('0x8'));});ui['bt5']['on'](_0x8eba('0x3e'),function(){本地存储['clear']();text_toggle();toast('设置已清除');});var fun={'wait':function(_0x53d628){text(_0x53d628)[_0x8eba('0x6')]();sleep(0x3e8);},'waitId':function(_0x237a52){id(_0x237a52)[_0x8eba('0x6')]();sleep(0x3e8);},'点击文本':function(_0x5c6d11){var _0x4a5482=text(_0x5c6d11)['findOne']()[_0x8eba('0x5b')]();click(_0x4a5482['centerX'](),_0x4a5482['centerY']());},'点击id':function(_0x45d605){var _0x270763=id(_0x45d605)[_0x8eba('0xe')]()['bounds']();click(_0x270763[_0x8eba('0x5c')](),_0x270763[_0x8eba('0x17')]());},'向上滑动':function(_0x3383f8){swipe(device['width']/0x2,device['height']/0x2,device[_0x8eba('0x12')]/0x2,device['height']/0x2-_0x3383f8,0x1f4);sleep(0x3e8);},'向下滑动':function(_0x3b9afc){swipe(device[_0x8eba('0x12')]/0x2,device['height']/0x2,device['width']/0x2,device['height']/0x2+_0x3b9afc,0x320);sleep(0x3e8);}};ui['start']['click'](function(){if(auto['service']==null){toast(_0x8eba('0x2c'));return;}arr=new Array();for(i=0x12;i<0x13;i++){var _0x2bcbb3=ui['input'+i][_0x8eba('0x50')]()+'';本地存储1[_0x8eba('0x5d')]('kb'+i,_0x2bcbb3);arr[_0x8eba('0x4a')](_0x2bcbb3);};arr=new Array();for(i=0x1;i<=0x11;i++){var _0x2bcbb3=ui['input'+i]['getText']()+'';本地存储[_0x8eba('0x5d')]('kb'+i,_0x2bcbb3);arr[_0x8eba('0x4a')](_0x2bcbb3);};files['remove'](_0x8eba('0x2a'));threads[_0x8eba('0x4')](function(){function _0x883c38(){try{var _0x1b041f=http[_0x8eba('0x55')](_0x8eba('0x29'));var _0x5c9e57=_0x1b041f[_0x8eba('0x9')]['string']();return _0x5c9e57;}catch(_0x32f473){}}var _0x372423=device['getAndroidId']();if(_0x883c38()[_0x8eba('0x18')](_0x372423)==-0x1){toast(_0x8eba('0x3b'));exit();}else{内容1=ui['input18'][_0x8eba('0x44')]();}_0x883c38();});if(kobe223198!=kobe335787){toast('激活码错误,请联系作者');return;}else{threads[_0x8eba('0x4')](function(){while(!![]){var _0x5aa435=threads['start'](主脚本);sleep(0x3c*ui[_0x8eba('0x48')][_0x8eba('0x44')]()*0x3e8);toastLog('停止运行');_0x5aa435['interrupt']();killApp('抖音');sleep(0x1f40);打开爱加速();}});}});function 主脚本(){打开抖音();进入直播();判断人数();}function 打开抖音(){toast('1s之后打开抖音');sleep(0x3e8);var _0x2e4bc7=app['launchApp']('抖音');if(!_0x2e4bc7){toast(_0x8eba('0x19'));sleep(0x3e8);return;}fun['wait']('首页');toast('软件已打开，3s之后开始运行！');sleep(0xbb8);};function 进入直播(){id(_0x8eba('0x5e'))['waitFor']();sleep(0xbb8);fun['点击id'](_0x8eba('0x5e'));sleep(0xbb8);id(_0x8eba('0x24'))['waitFor']();sleep(0xbb8);if(ui['模式1']['isChecked']()){while(!![]){if(text('购物')[_0x8eba('0x42')]()){sleep(0x3e8);fun['点击文本']('购物');sleep(0xbb8);toastLog('进入购物页');break;}else{左滑动();sleep(0x12c);左滑动2();sleep(0xbb8);}}}if(ui['模式2']['isChecked']()){while(!![]){if(text('语音')['exists']()){sleep(0x3e8);fun[_0x8eba('0x35')]('语音');sleep(0xbb8);toastLog('进入语音页');break;}else{左滑动();sleep(0x12c);左滑动2();sleep(0xbb8);}}}var _0x905528=ui['input6']['text']();if(_0x905528>0x0){for(bi=0x0;bi<_0x905528;bi++){sleep(0x7d0);下滑动();sleep(0x1770);}}fun['waitId']('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);log(_0x8eba('0x10'));fun[_0x8eba('0x61')](_0x8eba('0x53'));sleep(0x3e8);id(_0x8eba('0x24'))[_0x8eba('0x6')]();sleep(0xbb8);log('3秒后');}function 判断人数(){var _0x15365c=ui['input1'][_0x8eba('0x44')]();for(kjh=0x0;kjh<_0x15365c;kjh++){fun[_0x8eba('0x16')](_0x8eba('0x60'));var _0x4e80df=id(_0x8eba('0x60'))['findOne']()[_0x8eba('0x44')]();if(id('com.ss.android.ugc.aweme:id/g1o')[_0x8eba('0x27')]('万')[_0x8eba('0x42')]()){var _0x437394=_0x4e80df[_0x8eba('0x23')](0x0,-0x1)*0x2710;toastLog(_0x437394);sleep(0x3e8);toastLog('目前人数\x20:\x20'+_0x437394+'人');sleep(0x7d0);var _0x8c034c=ui[_0x8eba('0x1')][_0x8eba('0x44')]();var _0x8b0e8b=ui['input5']['text']();if(_0x437394>_0x8c034c&&_0x437394<_0x8b0e8b){toastLog('符合人数');获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}else{toastLog(_0x8eba('0x4e')+_0x4e80df+'人');var _0x91559e=ui[_0x8eba('0x1')][_0x8eba('0x44')]();var _0x47607d=ui['input5']['text']();if(_0x4e80df>_0x91559e&&_0x4e80df<_0x47607d){toastLog('符合人数');获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}}}function 获取电话(){id('com.ss.android.ugc.aweme:id/dn3')[_0x8eba('0x6')]();sleep(0x1770);fun['点击id']('com.ss.android.ugc.aweme:id/dn3');sleep(0x7d0);while(!![]){if(text('主页')[_0x8eba('0x42')]()){fun[_0x8eba('0x35')]('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id(_0x8eba('0x45'))[_0x8eba('0x6')]();sleep(0x7d0);if(text(_0x8eba('0x4d'))['exists']()||text(_0x8eba('0x1a'))['exists']()||text(_0x8eba('0x58'))[_0x8eba('0x42')]()){log(_0x8eba('0x52'));var _0x4ad7fc=id(_0x8eba('0x38'))['findOne']()['text']();log(_0x4ad7fc);var _0xc07556=ui['input8']['text']()['toString']();var _0x1ad9eb=ui[_0x8eba('0x2d')]['text']()['toString']();var _0x4dff58=ui['input10'][_0x8eba('0x44')]()['toString']();var _0x3cb123=ui['input11']['text']()[_0x8eba('0x5f')]();var _0x2e4e6c=ui['input12'][_0x8eba('0x44')]()['toString']();var _0x2bb730=ui['input13'][_0x8eba('0x44')]()['toString']();var _0x19780a=ui['input14']['text']()['toString']();var _0x2739e9=ui['input15']['text']()[_0x8eba('0x5f')]();var _0x24b1fe=ui[_0x8eba('0x37')]['text']()['toString']();var _0x3e6645=ui[_0x8eba('0x26')]['text']()[_0x8eba('0x5f')]();sleep(0x7d0);if(text('[label]\x20联系我们')[_0x8eba('0x42')]()){fun[_0x8eba('0x35')]('[label]\x20联系我们');}sleep(0x1f4);if(text(_0x8eba('0x1a'))[_0x8eba('0x42')]()){fun[_0x8eba('0x35')](_0x8eba('0x1a'));}sleep(0x1f4);if(text('[label]\x20联系电话')[_0x8eba('0x42')]()){fun['点击文本']('[label]\x20联系电话');}sleep(0x1f4);sleep(0xbb8);if(id('com.ss.android.ugc.aweme:id/cna')[_0x8eba('0x42')]()){var _0x1b0932=id('com.ss.android.ugc.aweme:id/cna')[_0x8eba('0xe')]();log(_0x1b0932['text']());var _0x397cde=_0x1b0932[_0x8eba('0x44')]()[_0x8eba('0x5f')]();sleep(0x3e8);var _0x3b1749=ui['input3']['text']();var _0x1558f0=ui['input4']['text']();var _0x407685=_0x397cde;if(_0x397cde['indexOf'](_0xc07556)>=0x0||_0x397cde[_0x8eba('0x32')](_0x1ad9eb)>=0x0||_0x397cde[_0x8eba('0x32')](_0x4dff58)>=0x0||_0x397cde[_0x8eba('0x32')](_0x3cb123)>=0x0||_0x397cde['indexOf'](_0x2e4e6c)>=0x0||_0x397cde['indexOf'](_0x2bb730)>=0x0||_0x397cde['indexOf'](_0x19780a)>=0x0||_0x397cde['indexOf'](_0x2739e9)>=0x0||_0x397cde['indexOf'](_0x24b1fe)>=0x0||_0x397cde['indexOf'](_0x3e6645)>=0x0){toastLog(_0x8eba('0x30'));sleep(0x1f4);toastLog(_0x8eba('0x34'));sleep(0x1f4);files[_0x8eba('0x43')]('/sdcard/'+_0x3b1749+'/');sleep(0x1f4);files[_0x8eba('0x5a')](_0x8eba('0xc')+_0x3b1749+'/'+_0x1558f0+_0x8eba('0x3a'),_0x4ad7fc);files[_0x8eba('0x5a')](_0x8eba('0xc')+_0x3b1749+'/'+_0x1558f0+'.txt',_0x407685+='\x0a');sleep(0x1f4);files[_0x8eba('0x5a')]('/sdcard/'+_0x3b1749+'/'+_0x1558f0+'.txt','\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}}else{log(_0x8eba('0x63'));while(!![]){if(id(_0x8eba('0x24'))[_0x8eba('0x42')]()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{log(_0x8eba('0x63'));while(!![]){if(id(_0x8eba('0x24'))[_0x8eba('0x42')]()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}function 存取电话(){if(id('com.ss.android.ugc.aweme:id/cna')[_0x8eba('0x42')]()){var _0x3cf092=ui['input8'][_0x8eba('0x44')]();var _0x1bfa02=ui['input9'][_0x8eba('0x44')]();var _0x356d94=ui[_0x8eba('0x3c')]['text']();var _0x57f32e=ui['input11']['text']();var _0x2ab06f=ui['input12'][_0x8eba('0x44')]();var _0x333abc=ui['input13']['text']();var _0x39605e=ui[_0x8eba('0x3d')]['text']();var _0x2fa997=ui['input15'][_0x8eba('0x44')]();var _0xdb56c2=ui[_0x8eba('0x37')][_0x8eba('0x44')]();var _0x592bae=ui['input17'][_0x8eba('0x44')]();var _0x59b7fd=id('com.ss.android.ugc.aweme:id/cna')['findOne']();log(_0x59b7fd['text']());var _0x35212c=_0x59b7fd[_0x8eba('0x44')]();sleep(0x3e8);var _0x4244fa=ui['input3']['text']();var _0x507223=ui[_0x8eba('0x3f')]['text']();var _0x478631=_0x35212c;if(_0x35212c[_0x8eba('0x32')](_0x3cf092)>=0x0||_0x35212c['indexOf'](_0x1bfa02)>=0x0||_0x35212c['indexOf'](_0x356d94)>=0x0||_0x35212c['indexOf'](_0x57f32e)>=0x0||_0x35212c['indexOf'](_0x2ab06f)>=0x0||_0x35212c[_0x8eba('0x32')](_0x333abc)>=0x0||_0x35212c['indexOf'](_0x39605e)>=0x0||_0x35212c[_0x8eba('0x32')](_0x2fa997)>=0x0||_0x35212c['indexOf'](_0xdb56c2)>=0x0||_0x35212c['indexOf'](_0x592bae)>=0x0){toastLog('电话符合');sleep(0x1f4);toastLog('存取电话');sleep(0x1f4);存取();}else{log(_0x8eba('0x56'));while(!![]){if(id(_0x8eba('0x24'))[_0x8eba('0x42')]()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{log(_0x8eba('0x63'));while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}function 打开爱加速(){toast(_0x8eba('0x57'));sleep(0x3e8);var _0xe30142=app['launchApp']('爱加速');if(!_0xe30142){toast('你还没有安装爱加速！');sleep(0x3e8);return;}fun['waitId'](_0x8eba('0x22'));toast(_0x8eba('0xf'));sleep(0xbb8);while(!![]){if(text('点击连接')[_0x8eba('0x42')]()){fun[_0x8eba('0x61')](_0x8eba('0x2'));sleep(0x7d0);break;}else{fun['点击id'](_0x8eba('0x2'));sleep(0x7d0);fun[_0x8eba('0x61')](_0x8eba('0x1f'));sleep(0x7d0);fun['waitId']('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun['点击id']('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun['waitId']('com.fvcorp.android.aijiasuclient:id/textStatusContent');sleep(0x7d0);break;}}}function killApp(_0x4fa8b3){let _0x1eb7bd=['停','强','结束'];let _0x2af1a1=app['getPackageName'](_0x4fa8b3);if(_0x2af1a1){app[_0x8eba('0x4b')](_0x2af1a1);text(_0x4fa8b3)[_0x8eba('0x6')]();for(var _0x37901e=0x0;_0x37901e<_0x1eb7bd[_0x8eba('0x46')];_0x37901e++){if(textContains(_0x1eb7bd[_0x37901e])['exists']()){let _0x227edd=textContains(_0x1eb7bd[_0x37901e])['findOne']();if(_0x227edd['enabled']()){_0x227edd['click']();text('确定')[_0x8eba('0xe')]()['click']();toastLog(_0x4fa8b3+_0x8eba('0x5'));sleep(0x320);back();break;}else{toastLog(_0x4fa8b3+'不在后台运行！');back();break;}}}}else{toastLog(_0x8eba('0x11'));}}threads['start'](function(){events['observeKey']();events['on']('key_down',function(_0x3672b9,_0x2f94aa){if(_0x3672b9==keys['volume_down']){toast('退出脚本！');sleep(0x7d0);exit();}});});function 上滑动(){var _0x59a99c=device['width'];var _0xe4f968=device[_0x8eba('0x28')];swipe(_0x59a99c/0x2,_0xe4f968/0x2,_0x59a99c/0x2,_0xe4f968/0x4,0x1);}function 下滑动(){var _0x43c3ca=device[_0x8eba('0x12')];var _0x12c760=device['height'];swipe(_0x43c3ca/0x2,_0x12c760/0x4,_0x43c3ca/0x2,_0x12c760/0x2,0x320);}function 左滑动(){var _0x4bc94b=device['width'];var _0x58942e=device['height'];swipe(_0x4bc94b/0x3,_0x58942e/0x3,_0x4bc94b/0x8,_0x58942e/0x3,0x2);}function 左滑动2(){var _0x5c43b4=device['width'];var _0x564b48=device[_0x8eba('0x28')];swipe(_0x5c43b4/0x4,_0x564b48/0x2,_0x5c43b4/0x8,_0x564b48/0x2,0x1);}
