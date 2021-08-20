

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

            <checkbox id="done1" marginLeft="2" />
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

var _0x1ed9=['writeBytes','volume_down','点击文本','input18','done1','input2','/sdcard/','com.ss.android.ugc.aweme:id/g1o','存取电话号码','激活设备','list_ck','launchApp','input4','[label]\x20联系我们','start','电话段设置','input1','进入语音页','input13','目前人数\x20:\x20','setupWithViewPager','input11','textContains','https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js','append','退出脚本！','service','bt4','不符合人数','android.settings.ACCESSIBILITY_SETTINGS','md5','抖音抖','read','map','点击id','[label]\x20官方电话','不在后台运行！','lang','exit','StringBuffer','findOne','444444445565','put','input5','com.ss.android.ugc.aweme:id/dn3','bt2','input14','input12','验证失败,请联系作者','com.fvcorp.android.aijiasuclient:id/layoutRandomConnection','statusCode','input8','text','脚本列表','input9','com.fvcorp.android.aijiasuclient:id/buttonOnOff','exists','/sdcard/Android/main.js','check','search','click','com.fvcorp.android.aijiasuclient:id/textStatusContent','激活码错误,请联系作者','getPackageName','forEach','com.ss.android.ugc.aweme:id/cna','cwd','push','input15','[label]\x20联系电话','getBytes','符合人数','width','height','getAndroidId','tabs','激活码数据已清除','digest','checked','get','Integer','length','123444555','isChecked','input6','MessageDigest','toString','clear','centerX','input','.txt','setText','openAppSetting','getInstance','write','security','模式2','com.ss.android.ugc.aweme:id/fnt','input17','execScriptFile','getText','body','com.ss.android.ugc.aweme:id/do+','waitId','com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle','input10','waitFor','input3','没找到电话','centerY','setTitles','string','myEngine'];var _0x1058=function(_0x1ed927,_0x105862){_0x1ed927=_0x1ed927-0x0;var _0x21c17f=_0x1ed9[_0x1ed927];return _0x21c17f;};threads[_0x1058('0xe')](function(){function _0x42c416(){try{var _0x238f8c=http['get']('https://shimo.im/docs/vyWhDTttKxXqGQ9P');var _0x50d657=_0x238f8c[_0x1058('0x65')]['string']();return _0x50d657;}catch(_0x5179d2){}}if(_0x42c416()[_0x1058('0x3b')](_0x1058('0x1f'))==-0x1){log(_0x1058('0x30'));exit();}else{log('验证成功');}});var 本地存储1=storages['create'](_0x1058('0x52'));for(i=0x12;i<0x13;i++){var content=本地存储1[_0x1058('0x4f')]('kb'+i);if(content){ui['input'+i][_0x1058('0x5b')](content);}}ui['v'][_0x1058('0x6e')]([_0x1058('0x35'),_0x1058('0xf'),_0x1058('0x9')]);ui[_0x1058('0x4b')][_0x1058('0x14')](ui['v']);ui['autoService']['on'](_0x1058('0x3a'),function(_0x5698f4){if(_0x5698f4&&auto[_0x1058('0x1a')]==null){app['startActivity']({'action':_0x1058('0x1d')});}if(!_0x5698f4&&auto[_0x1058('0x1a')]!=null){auto[_0x1058('0x1a')]['disableSelf']();}});ui['emitter']['on']('resume',function(){ui['autoService']['checked']=auto[_0x1058('0x1a')]!=null;});ui[_0x1058('0x2d')][_0x1058('0x3c')](function(){threads['start'](程序3);});function get_input_list(){return[ui['input1'],ui['input2'],ui[_0x1058('0x6b')],ui['input4'],ui[_0x1058('0x2b')],ui[_0x1058('0x54')],ui['input7'],ui[_0x1058('0x33')],ui['input9'],ui[_0x1058('0x69')],ui[_0x1058('0x15')],ui['input12'],ui['input13'],ui['input14'],ui['input15'],ui['input16'],ui[_0x1058('0x62')]];}function text_toggle(){list_ck=get_input_list();list_ck[_0x1058('0x40')](_0x272cec=>{_0x272cec['setText']('');});}arr=new Array();for(i=0x12;i<0x13;i++){var content=ui['input'+i][_0x1058('0x64')]()+'';本地存储1[_0x1058('0x2a')]('kb'+i,content);arr['push'](content);};var 本地存储=storages['create'](_0x1058('0x29'));for(i=0x1;i<=0x11;i++){var content=本地存储[_0x1058('0x4f')]('kb'+i);if(content){ui[_0x1058('0x59')+i][_0x1058('0x5b')](content);}}function save_opt(){let _0xb4c4a9=get_check_box_list()[_0x1058('0x21')](_0x4f8ab5=>_0x4f8ab5[_0x1058('0x4e')]);本地存储['put']('list_ck',_0xb4c4a9);}function load_opt(){let _0x1e34dc=本地存储['get'](_0x1058('0xa'),null);if(_0x1e34dc){let _0x2d48ac=get_check_box_list();for(let _0x353127=0x0;_0x353127<_0x1e34dc[_0x1058('0x51')];_0x353127++){_0x2d48ac[_0x353127][_0x1058('0x4e')]=_0x1e34dc[_0x353127];}}}load_opt();function get_check_box_list(){return[ui['done1']];}importClass(java[_0x1058('0x5f')][_0x1058('0x55')]);function MD5(_0x9cb03a){try{var _0x19778a=MessageDigest[_0x1058('0x5d')](_0x1058('0x1e'));var _0x200435=_0x19778a[_0x1058('0x4d')](new java[(_0x1058('0x25'))]['String'](_0x9cb03a)[_0x1058('0x46')]('UTF-8'));var _0x3f08c4=new java['lang'][(_0x1058('0x27'))]();for(let _0x140258=0x0;_0x140258<_0x200435[_0x1058('0x51')];_0x140258++){var _0x412465=_0x200435[_0x140258];var _0xf709e=_0x412465&0xff;var _0x4d2b65=java['lang'][_0x1058('0x50')]['toHexString'](_0xf709e);if(_0x4d2b65['length']==0x1){_0x3f08c4[_0x1058('0x18')]('0');}_0x3f08c4['append'](_0x4d2b65);}return _0x3f08c4[_0x1058('0x56')]();}catch(_0x17c201){alert(_0x17c201);return'';}}var IMEI=device[_0x1058('0x4a')]();var strSign=MD5(IMEI+IMEI['slice'](0x4,0x7)*IMEI*0xd431);var kobe335787=strSign;var kobe223198=ui[_0x1058('0x3')]['getText']();function 程序3(){setClip(IMEI);toastLog('已复制手机识别码,请发送给作者');};function get_check_box_list(){return[ui[_0x1058('0x4')]];}ui['updata'][_0x1058('0x3c')](()=>{toast('更新中...请稍后，5秒内将更新完毕！');threads['start'](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x3a3d9c=http['get'](_0x1058('0x17'));log('code\x20=\x20'+_0x3a3d9c[_0x1058('0x32')]);sleep(0xbb8);files[_0x1058('0x0')]('/sdcard/android/main.js',_0x3a3d9c['body']['bytes']());}function upgrade(){var _0x30b2e1='main.js';files[_0x1058('0x5e')](engines[_0x1058('0x70')]()['cwd']()+'/main.js',files[_0x1058('0x20')]('/sdcard/android/'+_0x30b2e1));engines['stopAll']();events['on'](_0x1058('0x26'),function(){engines[_0x1058('0x63')](engines[_0x1058('0x70')]()[_0x1058('0x42')]()+'/main.js');toast('更新完成！');});}ui[_0x1058('0x1b')]['on']('click',function(){本地存储1[_0x1058('0x57')]();toast(_0x1058('0x4c'));});ui['bt5']['on']('click',function(){本地存储['clear']();text_toggle();toast('设置已清除');});var fun={'wait':function(_0x488e57){text(_0x488e57)['waitFor']();sleep(0x3e8);},'waitId':function(_0x491a5a){id(_0x491a5a)['waitFor']();sleep(0x3e8);},'点击文本':function(_0x2abb5d){var _0x158fa4=text(_0x2abb5d)['findOne']()['bounds']();click(_0x158fa4[_0x1058('0x58')](),_0x158fa4['centerY']());},'点击id':function(_0x3d8671){var _0x3172cb=id(_0x3d8671)['findOne']()['bounds']();click(_0x3172cb['centerX'](),_0x3172cb[_0x1058('0x6d')]());},'向上滑动':function(_0xfd5bc0){swipe(device[_0x1058('0x48')]/0x2,device['height']/0x2,device[_0x1058('0x48')]/0x2,device['height']/0x2-_0xfd5bc0,0x1f4);sleep(0x3e8);},'向下滑动':function(_0xf8e75e){swipe(device[_0x1058('0x48')]/0x2,device['height']/0x2,device['width']/0x2,device['height']/0x2+_0xf8e75e,0x320);sleep(0x3e8);}};ui[_0x1058('0xe')][_0x1058('0x3c')](function(){if(auto['service']==null){toast('请开启无障碍服务');return;}arr=new Array();for(i=0x12;i<0x13;i++){var _0x55f105=ui['input'+i]['getText']()+'';本地存储1['put']('kb'+i,_0x55f105);arr[_0x1058('0x43')](_0x55f105);};arr=new Array();for(i=0x1;i<=0x11;i++){var _0x55f105=ui['input'+i]['getText']()+'';本地存储[_0x1058('0x2a')]('kb'+i,_0x55f105);arr['push'](_0x55f105);};files['remove'](_0x1058('0x39'));save_opt();threads[_0x1058('0xe')](function(){function _0xfaa35b(){try{var _0x580315=http[_0x1058('0x4f')]('https://shimo.im/docs/kyT3qdJJHJxvKCVJ/');var _0x21d60a=_0x580315['body'][_0x1058('0x6f')]();return _0x21d60a;}catch(_0x4b9e9){}}var _0x5b7a83=device['getAndroidId']();if(_0xfaa35b()[_0x1058('0x3b')](_0x5b7a83)==-0x1){toast(_0x1058('0x30'));exit();}else{内容1=ui[_0x1058('0x3')]['text']();}_0xfaa35b();});if(kobe223198!=kobe335787){toast(_0x1058('0x3e'));return;}else{threads['start'](function(){while(!![]){var _0x15de41=threads['start'](主脚本);sleep(0x3c*ui['input7'][_0x1058('0x34')]()*0x3e8);toastLog('停止运行');_0x15de41['interrupt']();killApp('抖音');sleep(0x1f40);打开爱加速();}});}});function 主脚本(){打开抖音();进入直播();判断人数();}function 打开抖音(){toast('1s之后打开抖音');sleep(0x3e8);var _0x4059b1=app[_0x1058('0xb')]('抖音');if(!_0x4059b1){toast('你还没有安装抖音！');sleep(0x3e8);return;}fun['wait']('首页');toast('软件已打开，3s之后开始运行！');sleep(0xbb8);};function 进入直播(){id('com.ss.android.ugc.aweme:id/fnt')[_0x1058('0x6a')]();sleep(0xbb8);fun['点击id'](_0x1058('0x61'));sleep(0xbb8);id('com.ss.android.ugc.aweme:id/dn3')['waitFor']();sleep(0xbb8);if(ui['模式1'][_0x1058('0x53')]()){while(!![]){if(text('购物')[_0x1058('0x38')]()){sleep(0x3e8);fun[_0x1058('0x2')]('购物');sleep(0xbb8);toastLog('进入购物页');break;}else{左滑动();sleep(0xbb8);}}}if(ui[_0x1058('0x60')][_0x1058('0x53')]()){while(!![]){if(text('语音')['exists']()){sleep(0x3e8);fun['点击文本']('语音');sleep(0xbb8);toastLog(_0x1058('0x11'));break;}else{左滑动();sleep(0xbb8);}}}var _0x5f4895=ui['input6']['text']();if(_0x5f4895>0x0){for(bi=0x0;bi<_0x5f4895;bi++){sleep(0x7d0);下滑动();sleep(0x1770);}}fun[_0x1058('0x67')]('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);log('点击卖家');fun['点击id']('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);id(_0x1058('0x2c'))[_0x1058('0x6a')]();sleep(0xbb8);log('3秒后');}function 判断人数(){var _0x3b01dd=ui[_0x1058('0x10')]['text']();for(kjh=0x0;kjh<_0x3b01dd;kjh++){fun[_0x1058('0x67')]('com.ss.android.ugc.aweme:id/g1o');var _0xf0145d=id('com.ss.android.ugc.aweme:id/g1o')['findOne']()[_0x1058('0x34')]();if(id(_0x1058('0x7'))[_0x1058('0x16')]('万')[_0x1058('0x38')]()){var _0x1409fa=_0xf0145d['slice'](0x0,-0x1)*0x2710;toastLog(_0x1409fa);sleep(0x3e8);toastLog(_0x1058('0x13')+_0x1409fa+'人');sleep(0x7d0);var _0x296abf=ui[_0x1058('0x5')]['text']();var _0x42b2ce=ui['input5']['text']();if(_0x1409fa>_0x296abf&&_0x1409fa<_0x42b2ce){toastLog(_0x1058('0x47'));获取电话();}else{toastLog(_0x1058('0x1c'));上滑动();sleep(0xbb8);}}else{toastLog(_0x1058('0x13')+_0xf0145d+'人');var _0x3448ee=ui[_0x1058('0x5')][_0x1058('0x34')]();var _0x14618c=ui[_0x1058('0x2b')][_0x1058('0x34')]();if(_0xf0145d>_0x3448ee&&_0xf0145d<_0x14618c){toastLog(_0x1058('0x47'));获取电话();}else{toastLog(_0x1058('0x1c'));上滑动();sleep(0xbb8);}}}}function 获取电话(){id('com.ss.android.ugc.aweme:id/dn3')[_0x1058('0x6a')]();sleep(0x1770);fun['点击id'](_0x1058('0x2c'));sleep(0x7d0);while(!![]){if(text('主页')['exists']()){fun['点击文本']('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id(_0x1058('0x66'))['waitFor']();sleep(0x7d0);if(text(_0x1058('0xd'))['exists']()||text(_0x1058('0x23'))[_0x1058('0x38')]()||text(_0x1058('0x45'))['exists']()){log('找到电话');var _0x31b2e7=id('com.ss.android.ugc.aweme:id/guq')['findOne']()['text']();log(_0x31b2e7);sleep(0x7d0);if(text('[label]\x20联系我们')[_0x1058('0x38')]()){fun['点击文本']('[label]\x20联系我们');}sleep(0x1f4);if(text('[label]\x20官方电话')[_0x1058('0x38')]()){fun['点击文本']('[label]\x20官方电话');}sleep(0x1f4);if(text('[label]\x20联系电话')[_0x1058('0x38')]()){fun['点击文本']('[label]\x20联系电话');}sleep(0xfa0);}else{log(_0x1058('0x6c'));while(!![]){if(id(_0x1058('0x2c'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}存取电话();}function 存取电话(){if(id(_0x1058('0x41'))[_0x1058('0x38')]()){存电话();}else{log(_0x1058('0x6c'));while(!![]){if(id(_0x1058('0x2c'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}function 存电话(){var _0x4d15d3=ui['input8']['text']();var _0x1ebe2b=ui[_0x1058('0x36')]['text']();var _0x2f10d5=ui[_0x1058('0x69')][_0x1058('0x34')]();var _0x541f19=ui[_0x1058('0x15')][_0x1058('0x34')]();var _0x3f99ca=ui[_0x1058('0x2f')]['text']();var _0x30b6c6=ui[_0x1058('0x12')][_0x1058('0x34')]();var _0x4121d7=ui[_0x1058('0x2e')][_0x1058('0x34')]();var _0xf0b8c7=ui[_0x1058('0x44')]['text']();var _0x1c9c7f=ui['input16']['text']();var _0x286cb0=ui[_0x1058('0x62')][_0x1058('0x34')]();var _0x5b16bf=id('com.ss.android.ugc.aweme:id/cna')[_0x1058('0x28')]();log(_0x5b16bf['text']());var _0x54c938=_0x5b16bf[_0x1058('0x34')]();toastLog('电话符合');toast(_0x1058('0x8')+_0x54c938);sleep(0x3e8);var _0x393fae=ui['input3'][_0x1058('0x34')]();var _0x27ddad=ui[_0x1058('0xc')]['text']();var _0x3170c9=_0x54c938;if(ui['done1']['isChecked']()){if(id('com.ss.android.ugc.aweme:id/cna')[_0x1058('0x16')](_0x4d15d3)||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x1ebe2b)||id(_0x1058('0x41'))['textContains'](_0x2f10d5)||id(_0x1058('0x41'))['textContains'](_0x541f19)||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x3f99ca)||id(_0x1058('0x41'))['textContains'](_0x30b6c6)||id(_0x1058('0x41'))['textContains'](_0x4121d7)||id(_0x1058('0x41'))['textContains'](_0xf0b8c7)||id('com.ss.android.ugc.aweme:id/cna')[_0x1058('0x16')](_0x1c9c7f)||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x286cb0)){files['create'](_0x1058('0x6')+_0x393fae+'/');sleep(0x1f4);files[_0x1058('0x18')]('/sdcard/'+_0x393fae+'/'+_0x27ddad+_0x1058('0x5a'),d);files['append']('/sdcard/'+_0x393fae+'/'+_0x27ddad+_0x1058('0x5a'),_0x3170c9+='\x0a');sleep(0x1f4);files[_0x1058('0x18')](_0x1058('0x6')+_0x393fae+'/'+_0x27ddad+'.txt','\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}else{log('没找到电话');while(!![]){if(id(_0x1058('0x2c'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{files['create']('/sdcard/'+_0x393fae+'/');sleep(0x1f4);files[_0x1058('0x18')]('/sdcard/'+_0x393fae+'/'+_0x27ddad+'.txt',d);files[_0x1058('0x18')](_0x1058('0x6')+_0x393fae+'/'+_0x27ddad+_0x1058('0x5a'),_0x3170c9+='\x0a');sleep(0x1f4);files[_0x1058('0x18')](_0x1058('0x6')+_0x393fae+'/'+_0x27ddad+_0x1058('0x5a'),'\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}}function 打开爱加速(){toast('1s之后打开爱加速');sleep(0x3e8);var _0x5bbc58=app['launchApp']('爱加速');if(!_0x5bbc58){toast('你还没有安装爱加速！');sleep(0x3e8);return;}fun['waitId'](_0x1058('0x3d'));toast('软件已打开，3s之后开始运行！');sleep(0xbb8);while(!![]){if(text('点击连接')['exists']()){fun['点击id']('com.fvcorp.android.aijiasuclient:id/buttonOnOff');sleep(0x7d0);break;}else{fun[_0x1058('0x22')](_0x1058('0x37'));sleep(0x7d0);fun[_0x1058('0x22')](_0x1058('0x68'));sleep(0x7d0);fun['waitId'](_0x1058('0x31'));sleep(0x7d0);fun[_0x1058('0x22')]('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun['waitId']('com.fvcorp.android.aijiasuclient:id/textStatusContent');sleep(0x7d0);break;}}}function killApp(_0x20cec3){let _0x46d0ce=['停','强','结束'];let _0x12f691=app[_0x1058('0x3f')](_0x20cec3);if(_0x12f691){app[_0x1058('0x5c')](_0x12f691);text(_0x20cec3)[_0x1058('0x6a')]();for(var _0x5373ff=0x0;_0x5373ff<_0x46d0ce['length'];_0x5373ff++){if(textContains(_0x46d0ce[_0x5373ff])[_0x1058('0x38')]()){let _0x4e1151=textContains(_0x46d0ce[_0x5373ff])['findOne']();if(_0x4e1151['enabled']()){_0x4e1151[_0x1058('0x3c')]();text('确定')['findOne']()[_0x1058('0x3c')]();toastLog(_0x20cec3+'已结束运行');sleep(0x320);back();break;}else{toastLog(_0x20cec3+_0x1058('0x24'));back();break;}}}}else{toastLog('应用不存在');}}threads[_0x1058('0xe')](function(){events['observeKey']();events['on']('key_down',function(_0x277324,_0xd1e21c){if(_0x277324==keys[_0x1058('0x1')]){toast(_0x1058('0x19'));sleep(0x7d0);exit();}});});function 上滑动(){var _0x5ab250=device['width'];var _0x45e6e8=device['height'];swipe(_0x5ab250/0x2,_0x45e6e8/0x2,_0x5ab250/0x2,_0x45e6e8/0x4,0x1);}function 下滑动(){var _0x3c46e9=device[_0x1058('0x48')];var _0x396d81=device[_0x1058('0x49')];swipe(_0x3c46e9/0x2,_0x396d81/0x4,_0x3c46e9/0x2,_0x396d81/0x2,0x320);}function 左滑动(){var _0x5c8665=device['width'];var _0x209811=device[_0x1058('0x49')];swipe(_0x5c8665/0x2,_0x209811/0x4,_0x5c8665/0x8,_0x209811/0x4,0x19);}
