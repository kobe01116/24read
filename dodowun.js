

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

var _0x3363=['input17','/sdcard/android/','wait','textContains','input7','checked','service','findOne','body','create','key_down','put','input8','append','width','push','com.ss.android.ugc.aweme:id/cna','getText','input4','你还没有安装抖音！','https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js','/main.js','interrupt','点击连接','存取电话号码','com.ss.android.ugc.aweme:id/fjj','input12','符合人数','input3','getPackageName','com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle','/sdcard/','resume','input6','centerY','input2','进入购物页','exit','进入语音页','height','get','slice','centerX','text','input15','input18','com.fvcorp.android.aijiasuclient:id/layoutRandomConnection','bounds','input14','更新完成！','forEach','已复制手机识别码,请发送给作者','不符合人数','exists','验证失败,请联系作者','setText','1s之后打开抖音','startActivity','waitId','list_ck','autoService','start','length','点击文本','com.ss.android.ugc.aweme:id/guq','激活设备','com.ss.android.ugc.aweme:id/fnt','444444445565','[label]\x20官方电话','map','android.settings.ACCESSIBILITY_SETTINGS','main.js','com.ss.android.ugc.aweme:id/g1o','security','没找到电话','tabs','click','remove','[label]\x20联系我们','3秒后','waitFor','myEngine','模式2','com.fvcorp.android.aijiasuclient:id/textStatusContent','getBytes','找到电话','input11','lang','string','[label]\x20联系电话','writeBytes','observeKey','stopAll','md5','isChecked','123444555','clear','com.ss.android.ugc.aweme:id/dn3','软件已打开，3s之后开始运行！','setupWithViewPager','input','Integer','点击id','StringBuffer','input1','.txt','check','toString','input9','search','volume_down','cwd'];var _0x1394=function(_0x336319,_0x1394de){_0x336319=_0x336319-0x0;var _0x325e85=_0x3363[_0x336319];return _0x325e85;};threads['start'](function(){function _0x192052(){try{var _0x39da7d=http['get']('https://shimo.im/docs/vyWhDTttKxXqGQ9P');var _0x4333d9=_0x39da7d[_0x1394('0x8')]['string']();return _0x4333d9;}catch(_0x777075){}}if(_0x192052()['search']('抖音抖')==-0x1){log(_0x1394('0x36'));exit();}else{log('验证成功');}});var 本地存储1=storages[_0x1394('0x9')](_0x1394('0x5f'));for(i=0x12;i<0x13;i++){var content=本地存储1['get']('kb'+i);if(content){ui[_0x1394('0x64')+i][_0x1394('0x37')](content);}}ui['v']['setTitles'](['脚本列表','电话段设置',_0x1394('0x41')]);ui[_0x1394('0x4b')][_0x1394('0x63')](ui['v']);ui[_0x1394('0x3c')]['on'](_0x1394('0x6a'),function(_0x2c4590){if(_0x2c4590&&auto['service']==null){app[_0x1394('0x39')]({'action':_0x1394('0x46')});}if(!_0x2c4590&&auto[_0x1394('0x6')]!=null){auto[_0x1394('0x6')]['disableSelf']();}});ui['emitter']['on'](_0x1394('0x20'),function(){ui[_0x1394('0x3c')][_0x1394('0x5')]=auto['service']!=null;});ui['bt2']['click'](function(){threads[_0x1394('0x3d')](程序3);});function get_input_list(){return[ui[_0x1394('0x68')],ui[_0x1394('0x23')],ui[_0x1394('0x1c')],ui[_0x1394('0x12')],ui['input5'],ui[_0x1394('0x21')],ui[_0x1394('0x4')],ui['input8'],ui[_0x1394('0x6c')],ui['input10'],ui[_0x1394('0x56')],ui[_0x1394('0x1a')],ui['input13'],ui[_0x1394('0x30')],ui['input15'],ui['input16'],ui['input17']];}function text_toggle(){list_ck=get_input_list();list_ck[_0x1394('0x32')](_0x239bd3=>{_0x239bd3[_0x1394('0x37')]('');});}arr=new Array();for(i=0x12;i<0x13;i++){var content=ui['input'+i][_0x1394('0x11')]()+'';本地存储1[_0x1394('0xb')]('kb'+i,content);arr[_0x1394('0xf')](content);};var 本地存储=storages[_0x1394('0x9')](_0x1394('0x43'));for(i=0x1;i<=0x11;i++){var content=本地存储['get']('kb'+i);if(content){ui['input'+i][_0x1394('0x37')](content);}}function save_opt(){let _0x166552=get_check_box_list()[_0x1394('0x45')](_0x2a6853=>_0x2a6853['checked']);本地存储['put']('list_ck',_0x166552);}function load_opt(){let _0x44d31a=本地存储[_0x1394('0x28')](_0x1394('0x3b'),null);if(_0x44d31a){let _0x38469a=get_check_box_list();for(let _0x1bb50f=0x0;_0x1bb50f<_0x44d31a['length'];_0x1bb50f++){_0x38469a[_0x1bb50f][_0x1394('0x5')]=_0x44d31a[_0x1bb50f];}}}load_opt();function get_check_box_list(){return[ui['done1']];}importClass(java[_0x1394('0x49')]['MessageDigest']);function MD5(_0x3f8e35){try{var _0x326869=MessageDigest['getInstance'](_0x1394('0x5d'));var _0x2472f1=_0x326869['digest'](new java['lang']['String'](_0x3f8e35)[_0x1394('0x54')]('UTF-8'));var _0x30ea72=new java[(_0x1394('0x57'))][(_0x1394('0x67'))]();for(let _0x1ad4f5=0x0;_0x1ad4f5<_0x2472f1['length'];_0x1ad4f5++){var _0x102829=_0x2472f1[_0x1ad4f5];var _0x51ee38=_0x102829&0xff;var _0x3ae9ab=java[_0x1394('0x57')][_0x1394('0x65')]['toHexString'](_0x51ee38);if(_0x3ae9ab[_0x1394('0x3e')]==0x1){_0x30ea72['append']('0');}_0x30ea72['append'](_0x3ae9ab);}return _0x30ea72[_0x1394('0x6b')]();}catch(_0x304d10){alert(_0x304d10);return'';}}var IMEI=device['getAndroidId']();var strSign=MD5(IMEI+IMEI[_0x1394('0x29')](0x4,0x7)*IMEI*0xd431);var kobe335787=strSign;var kobe223198=ui['input18']['getText']();function 程序3(){setClip(IMEI);toastLog(_0x1394('0x33'));};function get_check_box_list(){return[ui['done1']];}ui['updata'][_0x1394('0x4c')](()=>{toast('更新中...请稍后，5秒内将更新完毕！');threads[_0x1394('0x3d')](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x1edd13=http[_0x1394('0x28')](_0x1394('0x14'));log('code\x20=\x20'+_0x1edd13['statusCode']);sleep(0xbb8);files[_0x1394('0x5a')]('/sdcard/android/main.js',_0x1edd13[_0x1394('0x8')]['bytes']());}function upgrade(){var _0x227b1b=_0x1394('0x47');files['write'](engines[_0x1394('0x51')]()[_0x1394('0x6f')]()+_0x1394('0x15'),files['read'](_0x1394('0x1')+_0x227b1b));engines[_0x1394('0x5c')]();events['on'](_0x1394('0x25'),function(){engines['execScriptFile'](engines[_0x1394('0x51')]()['cwd']()+_0x1394('0x15'));toast(_0x1394('0x31'));});}ui['bt4']['on']('click',function(){本地存储1[_0x1394('0x60')]();toast('激活码数据已清除');});ui['bt5']['on']('click',function(){本地存储[_0x1394('0x60')]();text_toggle();toast('设置已清除');});var fun={'wait':function(_0x33e53c){text(_0x33e53c)[_0x1394('0x50')]();sleep(0x3e8);},'waitId':function(_0x551b16){id(_0x551b16)['waitFor']();sleep(0x3e8);},'点击文本':function(_0x18bef8){var _0x3319f0=text(_0x18bef8)['findOne']()[_0x1394('0x2f')]();click(_0x3319f0[_0x1394('0x2a')](),_0x3319f0['centerY']());},'点击id':function(_0x24323f){var _0x76e711=id(_0x24323f)[_0x1394('0x7')]()['bounds']();click(_0x76e711['centerX'](),_0x76e711[_0x1394('0x22')]());},'向上滑动':function(_0x2de9e8){swipe(device['width']/0x2,device['height']/0x2,device['width']/0x2,device['height']/0x2-_0x2de9e8,0x1f4);sleep(0x3e8);},'向下滑动':function(_0x27b9a0){swipe(device['width']/0x2,device['height']/0x2,device[_0x1394('0xe')]/0x2,device[_0x1394('0x27')]/0x2+_0x27b9a0,0x320);sleep(0x3e8);}};ui['start'][_0x1394('0x4c')](function(){if(auto[_0x1394('0x6')]==null){toast('请开启无障碍服务');return;}arr=new Array();for(i=0x12;i<0x13;i++){var _0x132ff9=ui[_0x1394('0x64')+i][_0x1394('0x11')]()+'';本地存储1[_0x1394('0xb')]('kb'+i,_0x132ff9);arr['push'](_0x132ff9);};arr=new Array();for(i=0x1;i<=0x11;i++){var _0x132ff9=ui['input'+i][_0x1394('0x11')]()+'';本地存储[_0x1394('0xb')]('kb'+i,_0x132ff9);arr['push'](_0x132ff9);};files[_0x1394('0x4d')]('/sdcard/Android/main.js');save_opt();threads[_0x1394('0x3d')](function(){function _0x294aa3(){try{var _0x1a4145=http['get']('https://shimo.im/docs/kyT3qdJJHJxvKCVJ/');var _0xd8d97f=_0x1a4145[_0x1394('0x8')][_0x1394('0x58')]();return _0xd8d97f;}catch(_0x14bbe7){}}var _0x4eab51=device['getAndroidId']();if(_0x294aa3()[_0x1394('0x6d')](_0x4eab51)==-0x1){toast('验证失败,请联系作者');exit();}else{内容1=ui[_0x1394('0x2d')]['text']();}_0x294aa3();});if(kobe223198!=kobe335787){toast('激活码错误,请联系作者');return;}else{threads[_0x1394('0x3d')](function(){while(!![]){var _0x195e3a=threads[_0x1394('0x3d')](主脚本);sleep(0x3c*ui['input7']['text']()*0x3e8);toastLog('停止运行');_0x195e3a[_0x1394('0x16')]();killApp('抖音');sleep(0x1f40);打开爱加速();}});}});function 主脚本(){打开抖音();进入直播();判断人数();}function 打开抖音(){toast(_0x1394('0x38'));sleep(0x3e8);var _0x4b3c0b=app['launchApp']('抖音');if(!_0x4b3c0b){toast(_0x1394('0x13'));sleep(0x3e8);return;}fun[_0x1394('0x2')]('首页');toast(_0x1394('0x62'));sleep(0xbb8);};function 进入直播(){id('com.ss.android.ugc.aweme:id/fnt')['waitFor']();sleep(0xbb8);fun['点击id'](_0x1394('0x42'));sleep(0xbb8);id('com.ss.android.ugc.aweme:id/dn3')[_0x1394('0x50')]();sleep(0xbb8);if(ui['模式1'][_0x1394('0x5e')]()){while(!![]){if(text('购物')['exists']()){sleep(0x3e8);fun['点击文本']('购物');sleep(0xbb8);toastLog(_0x1394('0x24'));break;}else{左滑动();sleep(0xbb8);}}}if(ui[_0x1394('0x52')][_0x1394('0x5e')]()){while(!![]){if(text('语音')[_0x1394('0x35')]()){sleep(0x3e8);fun['点击文本']('语音');sleep(0xbb8);toastLog(_0x1394('0x26'));break;}else{左滑动();sleep(0xbb8);}}}var _0xda6da8=ui['input6']['text']();if(_0xda6da8>0x0){for(bi=0x0;bi<_0xda6da8;bi++){sleep(0x7d0);下滑动();sleep(0x1770);}}fun[_0x1394('0x3a')](_0x1394('0x19'));sleep(0x3e8);log('点击卖家');fun['点击id'](_0x1394('0x19'));sleep(0x3e8);id('com.ss.android.ugc.aweme:id/dn3')['waitFor']();sleep(0xbb8);log(_0x1394('0x4f'));}function 判断人数(){var _0x3a407f=ui[_0x1394('0x68')]['text']();for(kjh=0x0;kjh<_0x3a407f;kjh++){fun['waitId']('com.ss.android.ugc.aweme:id/g1o');var _0x352f6d=id(_0x1394('0x48'))['findOne']()['text']();if(id(_0x1394('0x48'))[_0x1394('0x3')]('万')['exists']()){var _0x1f1d02=_0x352f6d[_0x1394('0x29')](0x0,-0x1)*0x2710;toastLog(_0x1f1d02);sleep(0x3e8);toastLog('目前人数\x20:\x20'+_0x1f1d02+'人');sleep(0x7d0);var _0x511030=ui[_0x1394('0x23')]['text']();var _0x3a478b=ui['input5'][_0x1394('0x2b')]();if(_0x1f1d02>_0x511030&&_0x1f1d02<_0x3a478b){toastLog('符合人数');获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}else{toastLog('目前人数\x20:\x20'+_0x352f6d+'人');var _0x5ea86c=ui[_0x1394('0x23')]['text']();var _0x4cca1f=ui['input5']['text']();if(_0x352f6d>_0x5ea86c&&_0x352f6d<_0x4cca1f){toastLog(_0x1394('0x1b'));获取电话();}else{toastLog(_0x1394('0x34'));上滑动();sleep(0xbb8);}}}}function 获取电话(){id(_0x1394('0x61'))[_0x1394('0x50')]();sleep(0x1770);fun['点击id'](_0x1394('0x61'));sleep(0x7d0);while(!![]){if(text('主页')[_0x1394('0x35')]()){fun[_0x1394('0x3f')]('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id('com.ss.android.ugc.aweme:id/do+')['waitFor']();sleep(0x7d0);if(text('[label]\x20联系我们')['exists']()||text('[label]\x20官方电话')[_0x1394('0x35')]()||text(_0x1394('0x59'))[_0x1394('0x35')]()){log(_0x1394('0x55'));var _0x2c53c2=id(_0x1394('0x40'))[_0x1394('0x7')]()['text']();log(_0x2c53c2);sleep(0x7d0);if(text('[label]\x20联系我们')[_0x1394('0x35')]()){fun['点击文本'](_0x1394('0x4e'));}sleep(0x1f4);if(text(_0x1394('0x44'))['exists']()){fun['点击文本']('[label]\x20官方电话');}sleep(0x1f4);if(text(_0x1394('0x59'))['exists']()){fun['点击文本']('[label]\x20联系电话');}sleep(0xfa0);var _0x26a14d=ui[_0x1394('0xc')]['text']();var _0x15899f=ui[_0x1394('0x6c')]['text']();var _0x330aad=ui['input10'][_0x1394('0x2b')]();var _0x12cb41=ui['input11'][_0x1394('0x2b')]();var _0x3a1243=ui['input12'][_0x1394('0x2b')]();var _0xb914c2=ui['input13']['text']();var _0x332f63=ui['input14']['text']();var _0x28706b=ui[_0x1394('0x2c')]['text']();var _0x27897b=ui['input16']['text']();var _0x1a89c9=ui[_0x1394('0x0')]['text']();function _0x2854c0(){var _0x37a6b0=id(_0x1394('0x10'))['findOne']();log(_0x37a6b0[_0x1394('0x2b')]());var _0x3082bd=_0x37a6b0[_0x1394('0x2b')]();toastLog('电话符合');toast(_0x1394('0x18')+_0x3082bd);sleep(0x3e8);var _0x4db379=ui[_0x1394('0x1c')]['text']();var _0x39f2ed=ui['input4']['text']();var _0x28128a=_0x3082bd;if(ui['done1']['isChecked']()){if(id('com.ss.android.ugc.aweme:id/cna')[_0x1394('0x3')](_0x26a14d)||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x15899f)||id('com.ss.android.ugc.aweme:id/cna')[_0x1394('0x3')](_0x330aad)||id('com.ss.android.ugc.aweme:id/cna')[_0x1394('0x3')](_0x12cb41)||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x3a1243)||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0xb914c2)||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x332f63)||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x28706b)||id(_0x1394('0x10'))[_0x1394('0x3')](_0x27897b)||id(_0x1394('0x10'))['textContains'](_0x1a89c9)){files['create']('/sdcard/'+_0x4db379+'/');sleep(0x1f4);files['append']('/sdcard/'+_0x4db379+'/'+_0x39f2ed+'.txt',_0x2c53c2);files['append'](_0x1394('0x1f')+_0x4db379+'/'+_0x39f2ed+_0x1394('0x69'),_0x28128a+='\x0a');sleep(0x1f4);files[_0x1394('0xd')](_0x1394('0x1f')+_0x4db379+'/'+_0x39f2ed+'.txt','\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}else{log(_0x1394('0x4a'));while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')[_0x1394('0x35')]()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}}if(id('com.ss.android.ugc.aweme:id/cna')[_0x1394('0x35')]()){_0x2854c0();}else{log(_0x1394('0x4a'));while(!![]){if(id(_0x1394('0x61'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{log('没找到电话');while(!![]){if(id(_0x1394('0x61'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}function 打开爱加速(){toast('1s之后打开爱加速');sleep(0x3e8);var _0x57863e=app['launchApp']('爱加速');if(!_0x57863e){toast('你还没有安装爱加速！');sleep(0x3e8);return;}fun['waitId'](_0x1394('0x53'));toast('软件已打开，3s之后开始运行！');sleep(0xbb8);while(!![]){if(text(_0x1394('0x17'))['exists']()){fun['点击id']('com.fvcorp.android.aijiasuclient:id/buttonOnOff');sleep(0x7d0);break;}else{fun[_0x1394('0x66')]('com.fvcorp.android.aijiasuclient:id/buttonOnOff');sleep(0x7d0);fun['点击id'](_0x1394('0x1e'));sleep(0x7d0);fun['waitId']('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun['点击id'](_0x1394('0x2e'));sleep(0x7d0);fun[_0x1394('0x3a')](_0x1394('0x53'));sleep(0x7d0);break;}}}function killApp(_0x2608ce){let _0x1e274a=['停','强','结束'];let _0x77e0e1=app[_0x1394('0x1d')](_0x2608ce);if(_0x77e0e1){app['openAppSetting'](_0x77e0e1);text(_0x2608ce)['waitFor']();for(var _0x3e21a5=0x0;_0x3e21a5<_0x1e274a[_0x1394('0x3e')];_0x3e21a5++){if(textContains(_0x1e274a[_0x3e21a5])[_0x1394('0x35')]()){let _0x483a61=textContains(_0x1e274a[_0x3e21a5])['findOne']();if(_0x483a61['enabled']()){_0x483a61[_0x1394('0x4c')]();text('确定')['findOne']()[_0x1394('0x4c')]();toastLog(_0x2608ce+'已结束运行');sleep(0x320);back();break;}else{toastLog(_0x2608ce+'不在后台运行！');back();break;}}}}else{toastLog('应用不存在');}}threads['start'](function(){events[_0x1394('0x5b')]();events['on'](_0x1394('0xa'),function(_0x4c8db6,_0x43e066){if(_0x4c8db6==keys[_0x1394('0x6e')]){toast('退出脚本！');sleep(0x7d0);exit();}});});function 上滑动(){var _0x14fb25=device[_0x1394('0xe')];var _0x242f3a=device[_0x1394('0x27')];swipe(_0x14fb25/0x2,_0x242f3a/0x2,_0x14fb25/0x2,_0x242f3a/0x4,0x1);}function 下滑动(){var _0x106169=device[_0x1394('0xe')];var _0x45fbaa=device[_0x1394('0x27')];swipe(_0x106169/0x2,_0x45fbaa/0x4,_0x106169/0x2,_0x45fbaa/0x2,0x320);}function 左滑动(){var _0xda4df3=device['width'];var _0x1d4b1c=device[_0x1394('0x27')];swipe(_0xda4df3/0x3,_0x1d4b1c/0x3,_0xda4df3/0x8,_0x1d4b1c/0x3,0x1);}
