

"ui";


ui.layout(
  <vertical>
    <appbar>
      <toolbar title="抖音联系获取 V1.0 -1019" />
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

var _0x1251=['激活码数据已清除','点击id','更新完成！','input13','点击卖家','com.ss.android.ugc.aweme:id/guq','com.fvcorp.android.aijiasuclient:id/buttonOnOff','电话符合','service','com.fvcorp.android.aijiasuclient:id/textStatusContent','code\x20=\x20','验证失败,请联系作者','input4','1s之后打开爱加速','centerX','clear','input12','3秒后','put','目前人数\x20:\x20','stopAll','进入购物页','lang','input16','startActivity','模式1','应用不存在','exists','input11','body','emitter','text','电话不符合','input6','slice','getText','digest','.txt','input3','observeKey','123444555','check','点击文本','你还没有安装抖音！','input9','key_down','cwd','get','width','toHexString','string','getAndroidId','start','com.ss.android.ugc.aweme:id/fnt','length','checked','/main.js','push','com.ss.android.ugc.aweme:id/g1o','getInstance','remove','openAppSetting','waitId','statusCode','没找到电话','search','爱加速','抖音抖','indexOf','toString','com.ss.android.ugc.aweme:id/cna','[label]\x20联系我们','launchApp','脚本列表','com.ss.android.ugc.aweme:id/do+','软件已打开，3s之后开始运行！','com.fvcorp.android.aijiasuclient:id/layoutRandomConnection','input','getPackageName','https://shimo.im/docs/kyT3qdJJHJxvKCVJ/','444444445565','height','input5','writeBytes','停止运行','forEach','input18','autoService','tabs','/sdcard/','bytes','com.ss.android.ugc.aweme:id/dn3','read','centerY','[label]\x20官方电话','bt5','验证成功','input8','waitFor','https://shimo.im/docs/vyWhDTttKxXqGQ9P','map','append','findOne','main.js','input15','click','setText','[label]\x20联系电话','input2','input17','enabled','com.ss.android.ugc.aweme:id/fjj'];var _0x2af8=function(_0x125148,_0x2af870){_0x125148=_0x125148-0x0;var _0x590b75=_0x1251[_0x125148];return _0x590b75;};threads['start'](function(){function _0x352862(){try{var _0x56a1c4=http['get'](_0x2af8('0x63'));var _0x501cfc=_0x56a1c4[_0x2af8('0x1d')][_0x2af8('0x32')]();return _0x501cfc;}catch(_0x7cba24){}}if(_0x352862()[_0x2af8('0x41')](_0x2af8('0x43'))==-0x1){log(_0x2af8('0xb'));exit();}else{log(_0x2af8('0x60'));}});var 本地存储1=storages['create'](_0x2af8('0x28'));for(i=0x12;i<0x13;i++){var content=本地存储1[_0x2af8('0x2f')]('kb'+i);if(content){ui['input'+i][_0x2af8('0x6a')](content);}}ui['v']['setTitles']([_0x2af8('0x49'),'电话段设置','激活设备']);ui[_0x2af8('0x58')]['setupWithViewPager'](ui['v']);ui['autoService']['on'](_0x2af8('0x29'),function(_0x48d8e3){if(_0x48d8e3&&auto['service']==null){app[_0x2af8('0x18')]({'action':'android.settings.ACCESSIBILITY_SETTINGS'});}if(!_0x48d8e3&&auto['service']!=null){auto['service']['disableSelf']();}});ui[_0x2af8('0x1e')]['on']('resume',function(){ui[_0x2af8('0x57')]['checked']=auto[_0x2af8('0x8')]!=null;});ui['bt2']['click'](function(){threads[_0x2af8('0x34')](程序3);});function get_input_list(){return[ui['input1'],ui['input2'],ui[_0x2af8('0x26')],ui[_0x2af8('0xc')],ui[_0x2af8('0x52')],ui['input6'],ui['input7'],ui['input8'],ui['input9'],ui['input10'],ui['input11'],ui['input12'],ui[_0x2af8('0x3')],ui['input14'],ui[_0x2af8('0x68')],ui['input16'],ui[_0x2af8('0x6d')]];}function text_toggle(){list_ck=get_input_list();list_ck[_0x2af8('0x55')](_0x202dff=>{_0x202dff['setText']('');});}arr=new Array();for(i=0x12;i<0x13;i++){var content=ui['input'+i]['getText']()+'';本地存储1['put']('kb'+i,content);arr['push'](content);};var 本地存储=storages['create'](_0x2af8('0x50'));for(i=0x1;i<=0x11;i++){var content=本地存储[_0x2af8('0x2f')]('kb'+i);if(content){ui['input'+i][_0x2af8('0x6a')](content);}}function save_opt(){let _0x3a5fa4=get_check_box_list()[_0x2af8('0x64')](_0x55dfc2=>_0x55dfc2[_0x2af8('0x37')]);本地存储[_0x2af8('0x12')]('list_ck',_0x3a5fa4);}importClass(java['security']['MessageDigest']);function MD5(_0x1375de){try{var _0x3f579b=MessageDigest[_0x2af8('0x3b')]('md5');var _0x1a9268=_0x3f579b[_0x2af8('0x24')](new java['lang']['String'](_0x1375de)['getBytes']('UTF-8'));var _0x40655c=new java[(_0x2af8('0x16'))]['StringBuffer']();for(let _0x242441=0x0;_0x242441<_0x1a9268['length'];_0x242441++){var _0x51daed=_0x1a9268[_0x242441];var _0x279ee5=_0x51daed&0xff;var _0x5c4220=java['lang']['Integer'][_0x2af8('0x31')](_0x279ee5);if(_0x5c4220['length']==0x1){_0x40655c[_0x2af8('0x65')]('0');}_0x40655c['append'](_0x5c4220);}return _0x40655c[_0x2af8('0x45')]();}catch(_0x2b9493){alert(_0x2b9493);return'';}}var IMEI=device['getAndroidId']();var strSign=MD5(IMEI+IMEI[_0x2af8('0x22')](0x4,0x7)*IMEI*0xd431);var kobe335787=strSign;var kobe223198=ui[_0x2af8('0x56')][_0x2af8('0x23')]();function 程序3(){setClip(IMEI);toastLog('已复制手机识别码,请发送给作者');};ui['updata']['click'](()=>{toast('更新中...请稍后，5秒内将更新完毕！');threads['start'](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x1b3561=http[_0x2af8('0x2f')]('https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js');log(_0x2af8('0xa')+_0x1b3561[_0x2af8('0x3f')]);sleep(0xbb8);files[_0x2af8('0x53')]('/sdcard/android/main.js',_0x1b3561[_0x2af8('0x1d')][_0x2af8('0x5a')]());}function upgrade(){var _0x2bf41c=_0x2af8('0x67');files['write'](engines['myEngine']()[_0x2af8('0x2e')]()+'/main.js',files[_0x2af8('0x5c')]('/sdcard/android/'+_0x2bf41c));engines[_0x2af8('0x14')]();events['on']('exit',function(){engines['execScriptFile'](engines['myEngine']()['cwd']()+_0x2af8('0x38'));toast(_0x2af8('0x2'));});}ui['bt4']['on']('click',function(){本地存储1[_0x2af8('0xf')]();toast(_0x2af8('0x0'));});ui[_0x2af8('0x5f')]['on'](_0x2af8('0x69'),function(){本地存储[_0x2af8('0xf')]();text_toggle();toast('设置已清除');});var fun={'wait':function(_0xb2a3de){text(_0xb2a3de)['waitFor']();sleep(0x3e8);},'waitId':function(_0x114974){id(_0x114974)[_0x2af8('0x62')]();sleep(0x3e8);},'点击文本':function(_0x31ea24){var _0x362456=text(_0x31ea24)['findOne']()['bounds']();click(_0x362456[_0x2af8('0xe')](),_0x362456[_0x2af8('0x5d')]());},'点击id':function(_0x14af0b){var _0x37a145=id(_0x14af0b)['findOne']()['bounds']();click(_0x37a145[_0x2af8('0xe')](),_0x37a145[_0x2af8('0x5d')]());},'向上滑动':function(_0x47fa3e){swipe(device['width']/0x2,device[_0x2af8('0x51')]/0x2,device[_0x2af8('0x30')]/0x2,device[_0x2af8('0x51')]/0x2-_0x47fa3e,0x1f4);sleep(0x3e8);},'向下滑动':function(_0x39c0d0){swipe(device[_0x2af8('0x30')]/0x2,device[_0x2af8('0x51')]/0x2,device['width']/0x2,device[_0x2af8('0x51')]/0x2+_0x39c0d0,0x320);sleep(0x3e8);}};ui[_0x2af8('0x34')][_0x2af8('0x69')](function(){if(auto['service']==null){toast('请开启无障碍服务');return;}arr=new Array();for(i=0x12;i<0x13;i++){var _0x18a2df=ui[_0x2af8('0x4d')+i]['getText']()+'';本地存储1['put']('kb'+i,_0x18a2df);arr['push'](_0x18a2df);};arr=new Array();for(i=0x1;i<=0x11;i++){var _0x18a2df=ui['input'+i][_0x2af8('0x23')]()+'';本地存储[_0x2af8('0x12')]('kb'+i,_0x18a2df);arr[_0x2af8('0x39')](_0x18a2df);};files[_0x2af8('0x3c')]('/sdcard/Android/main.js');threads['start'](function(){function _0x33325c(){try{var _0x3e90b5=http[_0x2af8('0x2f')](_0x2af8('0x4f'));var _0x1119e9=_0x3e90b5[_0x2af8('0x1d')]['string']();return _0x1119e9;}catch(_0x3881b5){}}var _0x5409e9=device[_0x2af8('0x33')]();if(_0x33325c()[_0x2af8('0x41')](_0x5409e9)==-0x1){toast('验证失败,请联系作者');exit();}else{内容1=ui['input18'][_0x2af8('0x1f')]();}_0x33325c();});if(kobe223198!=kobe335787){toast('激活码错误,请联系作者');return;}else{threads[_0x2af8('0x34')](function(){while(!![]){var _0x3e5b66=threads['start'](主脚本);sleep(0x3c*ui['input7']['text']()*0x3e8);toastLog(_0x2af8('0x54'));_0x3e5b66['interrupt']();killApp('抖音');sleep(0x1f40);打开爱加速();}});}});function 主脚本(){打开抖音();进入直播();判断人数();}function 打开抖音(){toast('1s之后打开抖音');sleep(0x3e8);var _0x2a75dd=app[_0x2af8('0x48')]('抖音');if(!_0x2a75dd){toast(_0x2af8('0x2b'));sleep(0x3e8);return;}fun['wait']('首页');toast(_0x2af8('0x4b'));sleep(0xbb8);};function 进入直播(){id('com.ss.android.ugc.aweme:id/fnt')['waitFor']();sleep(0xbb8);fun['点击id'](_0x2af8('0x35'));sleep(0xbb8);id(_0x2af8('0x5b'))['waitFor']();sleep(0xbb8);if(ui[_0x2af8('0x19')]['isChecked']()){while(!![]){if(text('购物')[_0x2af8('0x1b')]()){sleep(0x3e8);fun[_0x2af8('0x2a')]('购物');sleep(0xbb8);toastLog(_0x2af8('0x15'));break;}else{左滑动();sleep(0x12c);左滑动2();sleep(0xbb8);}}}if(ui['模式2']['isChecked']()){while(!![]){if(text('语音')['exists']()){sleep(0x3e8);fun[_0x2af8('0x2a')]('语音');sleep(0xbb8);toastLog('进入语音页');break;}else{左滑动();sleep(0x12c);左滑动2();sleep(0xbb8);}}}var _0x92217=ui[_0x2af8('0x21')][_0x2af8('0x1f')]();if(_0x92217>0x0){for(bi=0x0;bi<_0x92217;bi++){sleep(0x7d0);下滑动();sleep(0x1770);}}fun['waitId'](_0x2af8('0x6f'));sleep(0x3e8);log(_0x2af8('0x4'));fun[_0x2af8('0x1')](_0x2af8('0x6f'));sleep(0x3e8);id('com.ss.android.ugc.aweme:id/dn3')[_0x2af8('0x62')]();sleep(0xbb8);log(_0x2af8('0x11'));}function 判断人数(){var _0x3ac8e3=ui['input1'][_0x2af8('0x1f')]();for(kjh=0x0;kjh<_0x3ac8e3;kjh++){fun['waitId']('com.ss.android.ugc.aweme:id/g1o');var _0x292517=id(_0x2af8('0x3a'))['findOne']()['text']();if(id('com.ss.android.ugc.aweme:id/g1o')['textContains']('万')['exists']()){var _0x5aa3a0=_0x292517[_0x2af8('0x22')](0x0,-0x1)*0x2710;toastLog(_0x5aa3a0);sleep(0x3e8);toastLog('目前人数\x20:\x20'+_0x5aa3a0+'人');sleep(0x7d0);var _0x4ca40e=ui[_0x2af8('0x6c')][_0x2af8('0x1f')]();var _0x1a3a9c=ui[_0x2af8('0x52')][_0x2af8('0x1f')]();if(_0x5aa3a0>_0x4ca40e&&_0x5aa3a0<_0x1a3a9c){toastLog('符合人数');获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}else{toastLog(_0x2af8('0x13')+_0x292517+'人');var _0x19f2c4=ui['input2'][_0x2af8('0x1f')]();var _0x5b4002=ui['input5'][_0x2af8('0x1f')]();if(_0x292517>_0x19f2c4&&_0x292517<_0x5b4002){toastLog('符合人数');获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}}}function 获取电话(){id(_0x2af8('0x5b'))['waitFor']();sleep(0x1770);fun[_0x2af8('0x1')]('com.ss.android.ugc.aweme:id/dn3');sleep(0x7d0);while(!![]){if(text('主页')[_0x2af8('0x1b')]()){fun['点击文本']('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id(_0x2af8('0x4a'))[_0x2af8('0x62')]();sleep(0x7d0);if(text('[label]\x20联系我们')['exists']()||text(_0x2af8('0x5e'))['exists']()||text('[label]\x20联系电话')['exists']()){log('找到电话');var _0x53dc60=id(_0x2af8('0x5'))['findOne']()[_0x2af8('0x1f')]();log(_0x53dc60);var _0x315662=ui['input8']['text']()['toString']();var _0x1d7f7a=ui[_0x2af8('0x2c')][_0x2af8('0x1f')]()['toString']();var _0x2b4092=ui['input10']['text']()[_0x2af8('0x45')]();var _0x1c07d0=ui[_0x2af8('0x1c')][_0x2af8('0x1f')]()['toString']();var _0x593037=ui['input12'][_0x2af8('0x1f')]()[_0x2af8('0x45')]();var _0x1bfad0=ui[_0x2af8('0x3')][_0x2af8('0x1f')]()['toString']();var _0x10453c=ui['input14'][_0x2af8('0x1f')]()['toString']();var _0x54b2fd=ui['input15']['text']()[_0x2af8('0x45')]();var _0x1f6a1f=ui[_0x2af8('0x17')]['text']()[_0x2af8('0x45')]();var _0x32bcfb=ui['input17']['text']()[_0x2af8('0x45')]();sleep(0x7d0);if(text(_0x2af8('0x47'))['exists']()){fun['点击文本']('[label]\x20联系我们');}sleep(0x1f4);if(text(_0x2af8('0x5e'))['exists']()){fun[_0x2af8('0x2a')](_0x2af8('0x5e'));}sleep(0x1f4);if(text('[label]\x20联系电话')[_0x2af8('0x1b')]()){fun['点击文本'](_0x2af8('0x6b'));}sleep(0x1f4);sleep(0xbb8);if(id('com.ss.android.ugc.aweme:id/cna')[_0x2af8('0x1b')]()){var _0x3e6682=id(_0x2af8('0x46'))['findOne']();log(_0x3e6682['text']());var _0x9ebaae=_0x3e6682['text']()[_0x2af8('0x45')]();sleep(0x3e8);var _0x444878=ui[_0x2af8('0x26')]['text']();var _0x1f5f77=ui[_0x2af8('0xc')][_0x2af8('0x1f')]();if(_0x9ebaae[_0x2af8('0x44')](_0x315662)>=0x0||_0x9ebaae['indexOf'](_0x1d7f7a)>=0x0||_0x9ebaae['indexOf'](_0x2b4092)>=0x0||_0x9ebaae['indexOf'](_0x1c07d0)>=0x0||_0x9ebaae['indexOf'](_0x593037)>=0x0||_0x9ebaae[_0x2af8('0x44')](_0x1bfad0)>=0x0||_0x9ebaae[_0x2af8('0x44')](_0x10453c)>=0x0||_0x9ebaae[_0x2af8('0x44')](_0x54b2fd)>=0x0||_0x9ebaae['indexOf'](_0x1f6a1f)>=0x0||_0x9ebaae[_0x2af8('0x44')](_0x32bcfb)>=0x0){toastLog(_0x2af8('0x7'));sleep(0x1f4);toastLog('存取电话');sleep(0x1f4);files['create'](_0x2af8('0x59')+_0x444878+'/');sleep(0x1f4);files[_0x2af8('0x65')]('/sdcard/'+_0x444878+'/'+_0x1f5f77+_0x2af8('0x25'),_0x53dc60);files['append']('/sdcard/'+_0x444878+'/'+_0x1f5f77+'.txt',_0x9ebaae+='\x0a');sleep(0x1f4);files['append']('/sdcard/'+_0x444878+'/'+_0x1f5f77+_0x2af8('0x25'),'\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}else{log('电话不符合');while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')[_0x2af8('0x1b')]()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{log(_0x2af8('0x40'));while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{log(_0x2af8('0x40'));while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')[_0x2af8('0x1b')]()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}function 存取电话(){if(id(_0x2af8('0x46'))['exists']()){var _0x1af5ba=ui[_0x2af8('0x61')][_0x2af8('0x1f')]();var _0x3e085e=ui[_0x2af8('0x2c')]['text']();var _0x29b860=ui['input10']['text']();var _0x1feae3=ui['input11']['text']();var _0xc6998b=ui[_0x2af8('0x10')][_0x2af8('0x1f')]();var _0x262b1c=ui['input13']['text']();var _0x4d6cd4=ui['input14']['text']();var _0x1fe5fb=ui['input15'][_0x2af8('0x1f')]();var _0x392fdc=ui['input16'][_0x2af8('0x1f')]();var _0x234c7b=ui['input17'][_0x2af8('0x1f')]();var _0x33d100=id('com.ss.android.ugc.aweme:id/cna')['findOne']();log(_0x33d100['text']());var _0x2cfbb0=_0x33d100[_0x2af8('0x1f')]();sleep(0x3e8);var _0xb8cb09=ui['input3'][_0x2af8('0x1f')]();var _0x5dc9c0=ui[_0x2af8('0xc')]['text']();var _0x27caa6=_0x2cfbb0;if(_0x2cfbb0[_0x2af8('0x44')](_0x1af5ba)>=0x0||_0x2cfbb0['indexOf'](_0x3e085e)>=0x0||_0x2cfbb0['indexOf'](_0x29b860)>=0x0||_0x2cfbb0['indexOf'](_0x1feae3)>=0x0||_0x2cfbb0[_0x2af8('0x44')](_0xc6998b)>=0x0||_0x2cfbb0[_0x2af8('0x44')](_0x262b1c)>=0x0||_0x2cfbb0[_0x2af8('0x44')](_0x4d6cd4)>=0x0||_0x2cfbb0['indexOf'](_0x1fe5fb)>=0x0||_0x2cfbb0['indexOf'](_0x392fdc)>=0x0||_0x2cfbb0[_0x2af8('0x44')](_0x234c7b)>=0x0){toastLog('电话符合');sleep(0x1f4);toastLog('存取电话');sleep(0x1f4);存取();}else{log(_0x2af8('0x20'));while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')[_0x2af8('0x1b')]()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{log('没找到电话');while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')[_0x2af8('0x1b')]()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}function 打开爱加速(){toast(_0x2af8('0xd'));sleep(0x3e8);var _0x57abe2=app[_0x2af8('0x48')](_0x2af8('0x42'));if(!_0x57abe2){toast('你还没有安装爱加速！');sleep(0x3e8);return;}fun['waitId']('com.fvcorp.android.aijiasuclient:id/textStatusContent');toast(_0x2af8('0x4b'));sleep(0xbb8);while(!![]){if(text('点击连接')[_0x2af8('0x1b')]()){fun[_0x2af8('0x1')](_0x2af8('0x6'));sleep(0x7d0);break;}else{fun['点击id'](_0x2af8('0x6'));sleep(0x7d0);fun['点击id']('com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle');sleep(0x7d0);fun['waitId'](_0x2af8('0x4c'));sleep(0x7d0);fun[_0x2af8('0x1')](_0x2af8('0x4c'));sleep(0x7d0);fun[_0x2af8('0x3e')](_0x2af8('0x9'));sleep(0x7d0);break;}}}function killApp(_0x182730){let _0x2f4792=['停','强','结束'];let _0x4a9290=app[_0x2af8('0x4e')](_0x182730);if(_0x4a9290){app[_0x2af8('0x3d')](_0x4a9290);text(_0x182730)[_0x2af8('0x62')]();for(var _0xcf4e37=0x0;_0xcf4e37<_0x2f4792[_0x2af8('0x36')];_0xcf4e37++){if(textContains(_0x2f4792[_0xcf4e37])[_0x2af8('0x1b')]()){let _0x5cd87c=textContains(_0x2f4792[_0xcf4e37])['findOne']();if(_0x5cd87c[_0x2af8('0x6e')]()){_0x5cd87c['click']();text('确定')[_0x2af8('0x66')]()[_0x2af8('0x69')]();toastLog(_0x182730+'已结束运行');sleep(0x320);back();break;}else{toastLog(_0x182730+'不在后台运行！');back();break;}}}}else{toastLog(_0x2af8('0x1a'));}}threads['start'](function(){events[_0x2af8('0x27')]();events['on'](_0x2af8('0x2d'),function(_0x4050f0,_0x4d7966){if(_0x4050f0==keys['volume_down']){toast('退出脚本！');sleep(0x7d0);exit();}});});function 上滑动(){var _0x1cd67c=device['width'];var _0x3f4b8d=device['height'];swipe(_0x1cd67c/0x2,_0x3f4b8d/0x2,_0x1cd67c/0x2,_0x3f4b8d/0x4,0x1);}function 下滑动(){var _0x50375f=device[_0x2af8('0x30')];var _0x5f0e6c=device[_0x2af8('0x51')];swipe(_0x50375f/0x2,_0x5f0e6c/0x4,_0x50375f/0x2,_0x5f0e6c/0x2,0x320);}function 左滑动(){var _0x519617=device[_0x2af8('0x30')];var _0x31e749=device['height'];swipe(_0x519617/0x3,_0x31e749/0x3,_0x519617/0x8,_0x31e749/0x3,0x2);}function 左滑动2(){var _0x3dee9b=device['width'];var _0x5d0310=device['height'];swipe(_0x3dee9b/0x4,_0x5d0310/0x2,_0x3dee9b/0x8,_0x5d0310/0x2,0x1);}
