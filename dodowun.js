

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

var _0x5a02=['setTitles','waitId','search','getInstance','input11','input17','launchApp','input9','push','com.fvcorp.android.aijiasuclient:id/layoutRandomConnection','clear','input2','input13','1s之后打开抖音','com.fvcorp.android.aijiasuclient:id/textStatusContent','md5','getText','[label]\x20联系电话','height','444444445565','.txt','click','updata','/sdcard/','input7','激活码错误,请联系作者','点击文本','退出脚本！','电话符合','com.ss.android.ugc.aweme:id/fnt','body','write','设置已清除','width','isChecked','wait','bt4','input6','点击id','input14','text','disableSelf','forEach','exists','list_ck','input3','input','https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js','emitter','Integer','map','autoService','service','input1','length','read','myEngine','input12','setText','com.ss.android.ugc.aweme:id/cna','https://shimo.im/docs/vyWhDTttKxXqGQ9P','put','input10','已复制手机识别码,请发送给作者','slice','3秒后','setupWithViewPager','[label]\x20联系我们','volume_down','没找到电话','input8','android.settings.ACCESSIBILITY_SETTINGS','observeKey','start','bytes','findOne','验证失败,请联系作者','com.ss.android.ugc.aweme:id/dn3','writeBytes','激活码数据已清除','bt2','textContains','waitFor','done1','append','/main.js','com.ss.android.ugc.aweme:id/g1o','key_down','已结束运行','input5','[label]\x20官方电话','lang','input16','remove','code\x20=\x20','bounds','create','cwd','com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle','验证成功','get','/sdcard/Android/main.js','请开启无障碍服务','com.fvcorp.android.aijiasuclient:id/buttonOnOff','点击卖家','enabled','getAndroidId'];var _0x4ae5=function(_0x5a020b,_0x4ae5ec){_0x5a020b=_0x5a020b-0x0;var _0x4d6eeb=_0x5a02[_0x5a020b];return _0x4d6eeb;};threads['start'](function(){function _0x4d1fc1(){try{var _0x5cfa43=http[_0x4ae5('0x64')](_0x4ae5('0x3c'));var _0x1ba5f0=_0x5cfa43[_0x4ae5('0x1e')]['string']();return _0x1ba5f0;}catch(_0x1d3282){}}if(_0x4d1fc1()['search']('抖音抖')==-0x1){log('验证失败,请联系作者');exit();}else{log(_0x4ae5('0x63'));}});var 本地存储1=storages[_0x4ae5('0x60')]('123444555');for(i=0x12;i<0x13;i++){var content=本地存储1[_0x4ae5('0x64')]('kb'+i);if(content){ui['input'+i][_0x4ae5('0x3a')](content);}}ui['v'][_0x4ae5('0x0')](['脚本列表','电话段设置','激活设备']);ui['tabs'][_0x4ae5('0x42')](ui['v']);ui[_0x4ae5('0x33')]['on']('check',function(_0x5af87a){if(_0x5af87a&&auto['service']==null){app['startActivity']({'action':_0x4ae5('0x47')});}if(!_0x5af87a&&auto['service']!=null){auto[_0x4ae5('0x34')][_0x4ae5('0x29')]();}});ui[_0x4ae5('0x30')]['on']('resume',function(){ui[_0x4ae5('0x33')]['checked']=auto['service']!=null;});ui[_0x4ae5('0x50')][_0x4ae5('0x15')](function(){threads['start'](程序3);});function get_input_list(){return[ui[_0x4ae5('0x35')],ui[_0x4ae5('0xb')],ui['input3'],ui['input4'],ui['input5'],ui[_0x4ae5('0x25')],ui[_0x4ae5('0x18')],ui[_0x4ae5('0x46')],ui[_0x4ae5('0x7')],ui['input10'],ui['input11'],ui[_0x4ae5('0x39')],ui[_0x4ae5('0xc')],ui[_0x4ae5('0x27')],ui['input15'],ui[_0x4ae5('0x5c')],ui['input17']];}function text_toggle(){list_ck=get_input_list();list_ck[_0x4ae5('0x2a')](_0x4002b5=>{_0x4002b5[_0x4ae5('0x3a')]('');});}arr=new Array();for(i=0x12;i<0x13;i++){var content=ui[_0x4ae5('0x2e')+i][_0x4ae5('0x10')]()+'';本地存储1['put']('kb'+i,content);arr['push'](content);};var 本地存储=storages['create'](_0x4ae5('0x13'));for(i=0x1;i<=0x11;i++){var content=本地存储[_0x4ae5('0x64')]('kb'+i);if(content){ui[_0x4ae5('0x2e')+i][_0x4ae5('0x3a')](content);}}function save_opt(){let _0x5f0131=get_check_box_list()[_0x4ae5('0x32')](_0x5de092=>_0x5de092['checked']);本地存储['put'](_0x4ae5('0x2c'),_0x5f0131);}function load_opt(){let _0x1af43b=本地存储[_0x4ae5('0x64')](_0x4ae5('0x2c'),null);if(_0x1af43b){let _0x10316c=get_check_box_list();for(let _0x582318=0x0;_0x582318<_0x1af43b['length'];_0x582318++){_0x10316c[_0x582318]['checked']=_0x1af43b[_0x582318];}}}load_opt();function get_check_box_list(){return[ui['done1']];}importClass(java['security']['MessageDigest']);function MD5(_0x5478e7){try{var _0x1ad3d0=MessageDigest[_0x4ae5('0x3')](_0x4ae5('0xf'));var _0x2a0dce=_0x1ad3d0['digest'](new java[(_0x4ae5('0x5b'))]['String'](_0x5478e7)['getBytes']('UTF-8'));var _0x208c86=new java[(_0x4ae5('0x5b'))]['StringBuffer']();for(let _0x2e34fa=0x0;_0x2e34fa<_0x2a0dce[_0x4ae5('0x36')];_0x2e34fa++){var _0x564fee=_0x2a0dce[_0x2e34fa];var _0x25880f=_0x564fee&0xff;var _0x52ccb8=java['lang'][_0x4ae5('0x31')]['toHexString'](_0x25880f);if(_0x52ccb8[_0x4ae5('0x36')]==0x1){_0x208c86[_0x4ae5('0x54')]('0');}_0x208c86['append'](_0x52ccb8);}return _0x208c86['toString']();}catch(_0x3cf4cb){alert(_0x3cf4cb);return'';}}var IMEI=device[_0x4ae5('0x6a')]();var strSign=MD5(IMEI+IMEI[_0x4ae5('0x40')](0x4,0x7)*IMEI*0xd431);var kobe335787=strSign;var kobe223198=ui['input18'][_0x4ae5('0x10')]();function 程序3(){setClip(IMEI);toastLog(_0x4ae5('0x3f'));};function get_check_box_list(){return[ui['done1']];}ui[_0x4ae5('0x16')]['click'](()=>{toast('更新中...请稍后，5秒内将更新完毕！');threads['start'](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x133869=http[_0x4ae5('0x64')](_0x4ae5('0x2f'));log(_0x4ae5('0x5e')+_0x133869['statusCode']);sleep(0xbb8);files[_0x4ae5('0x4e')]('/sdcard/android/main.js',_0x133869['body'][_0x4ae5('0x4a')]());}function upgrade(){var _0x386bea='main.js';files[_0x4ae5('0x1f')](engines['myEngine']()['cwd']()+_0x4ae5('0x55'),files[_0x4ae5('0x37')]('/sdcard/android/'+_0x386bea));engines['stopAll']();events['on']('exit',function(){engines['execScriptFile'](engines[_0x4ae5('0x38')]()[_0x4ae5('0x61')]()+_0x4ae5('0x55'));toast('更新完成！');});}ui[_0x4ae5('0x24')]['on'](_0x4ae5('0x15'),function(){本地存储1[_0x4ae5('0xa')]();toast(_0x4ae5('0x4f'));});ui['bt5']['on'](_0x4ae5('0x15'),function(){本地存储['clear']();text_toggle();toast(_0x4ae5('0x20'));});var fun={'wait':function(_0x5ac4b7){text(_0x5ac4b7)['waitFor']();sleep(0x3e8);},'waitId':function(_0x4d4212){id(_0x4d4212)[_0x4ae5('0x52')]();sleep(0x3e8);},'点击文本':function(_0x2fee21){var _0x4e2406=text(_0x2fee21)[_0x4ae5('0x4b')]()[_0x4ae5('0x5f')]();click(_0x4e2406['centerX'](),_0x4e2406['centerY']());},'点击id':function(_0x317963){var _0x47e2e3=id(_0x317963)[_0x4ae5('0x4b')]()[_0x4ae5('0x5f')]();click(_0x47e2e3['centerX'](),_0x47e2e3['centerY']());},'向上滑动':function(_0x2845b3){swipe(device[_0x4ae5('0x21')]/0x2,device['height']/0x2,device['width']/0x2,device[_0x4ae5('0x12')]/0x2-_0x2845b3,0x1f4);sleep(0x3e8);},'向下滑动':function(_0x5a9cf7){swipe(device['width']/0x2,device[_0x4ae5('0x12')]/0x2,device['width']/0x2,device['height']/0x2+_0x5a9cf7,0x320);sleep(0x3e8);}};ui['start']['click'](function(){if(auto['service']==null){toast(_0x4ae5('0x66'));return;}arr=new Array();for(i=0x12;i<0x13;i++){var _0x3d13bd=ui['input'+i][_0x4ae5('0x10')]()+'';本地存储1[_0x4ae5('0x3d')]('kb'+i,_0x3d13bd);arr[_0x4ae5('0x8')](_0x3d13bd);};arr=new Array();for(i=0x1;i<=0x11;i++){var _0x3d13bd=ui[_0x4ae5('0x2e')+i]['getText']()+'';本地存储['put']('kb'+i,_0x3d13bd);arr[_0x4ae5('0x8')](_0x3d13bd);};files[_0x4ae5('0x5d')](_0x4ae5('0x65'));save_opt();threads[_0x4ae5('0x49')](function(){function _0x3cfd96(){try{var _0x37c061=http[_0x4ae5('0x64')]('https://shimo.im/docs/kyT3qdJJHJxvKCVJ/');var _0x2d6385=_0x37c061[_0x4ae5('0x1e')]['string']();return _0x2d6385;}catch(_0xa0dc41){}}var _0x18af57=device[_0x4ae5('0x6a')]();if(_0x3cfd96()[_0x4ae5('0x2')](_0x18af57)==-0x1){toast(_0x4ae5('0x4c'));exit();}else{内容1=ui['input18']['text']();}_0x3cfd96();});if(kobe223198!=kobe335787){toast(_0x4ae5('0x19'));return;}else{threads[_0x4ae5('0x49')](function(){while(!![]){var _0x1be23d=threads[_0x4ae5('0x49')](主脚本);sleep(0x3c*ui['input7'][_0x4ae5('0x28')]()*0x3e8);toastLog('停止运行');_0x1be23d['interrupt']();killApp('抖音');sleep(0x1f40);打开爱加速();}});}});function 主脚本(){打开抖音();进入直播();判断人数();}function 打开抖音(){toast(_0x4ae5('0xd'));sleep(0x3e8);var _0x221eda=app['launchApp']('抖音');if(!_0x221eda){toast('你还没有安装抖音！');sleep(0x3e8);return;}fun[_0x4ae5('0x23')]('首页');toast('软件已打开，3s之后开始运行！');sleep(0xbb8);};function 进入直播(){id(_0x4ae5('0x1d'))[_0x4ae5('0x52')]();sleep(0xbb8);fun[_0x4ae5('0x26')]('com.ss.android.ugc.aweme:id/fnt');sleep(0xbb8);id('com.ss.android.ugc.aweme:id/dn3')['waitFor']();sleep(0xbb8);if(ui['模式1']['isChecked']()){while(!![]){if(text('购物')[_0x4ae5('0x2b')]()){sleep(0x3e8);fun[_0x4ae5('0x1a')]('购物');sleep(0xbb8);toastLog('进入购物页');break;}else{左滑动();sleep(0xbb8);}}}if(ui['模式2'][_0x4ae5('0x22')]()){while(!![]){if(text('语音')[_0x4ae5('0x2b')]()){sleep(0x3e8);fun[_0x4ae5('0x1a')]('语音');sleep(0xbb8);toastLog('进入语音页');break;}else{左滑动();sleep(0xbb8);}}}var _0x3495f9=ui['input6'][_0x4ae5('0x28')]();if(_0x3495f9>0x0){for(bi=0x0;bi<_0x3495f9;bi++){sleep(0x7d0);下滑动();sleep(0xfa0);}}fun[_0x4ae5('0x1')]('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);log(_0x4ae5('0x68'));fun['点击id']('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);id(_0x4ae5('0x4d'))[_0x4ae5('0x52')]();sleep(0xbb8);log(_0x4ae5('0x41'));}function 判断人数(){var _0x1a9b30=ui[_0x4ae5('0x35')]['text']();for(kjh=0x0;kjh<_0x1a9b30;kjh++){fun[_0x4ae5('0x1')]('com.ss.android.ugc.aweme:id/g1o');var _0x1eff43=id('com.ss.android.ugc.aweme:id/g1o')['findOne']()['text']();if(id(_0x4ae5('0x56'))['textContains']('万')[_0x4ae5('0x2b')]()){var _0x21bbd7=_0x1eff43['slice'](0x0,-0x1)*0x2710;toastLog(_0x21bbd7);sleep(0x3e8);toastLog('目前人数\x20:\x20'+_0x21bbd7+'人');sleep(0x7d0);var _0x133e4f=ui[_0x4ae5('0xb')]['text']();var _0x283b90=ui[_0x4ae5('0x59')]['text']();if(_0x21bbd7>_0x133e4f&&_0x21bbd7<_0x283b90){toastLog('符合人数');获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}else{toastLog('目前人数\x20:\x20'+_0x1eff43+'人');var _0x388791=ui[_0x4ae5('0xb')]['text']();var _0x28b2bf=ui['input5']['text']();if(_0x1eff43>_0x388791&&_0x1eff43<_0x28b2bf){toastLog('符合人数');获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}}}function 获取电话(){id(_0x4ae5('0x4d'))['waitFor']();sleep(0x1770);fun['点击id']('com.ss.android.ugc.aweme:id/dn3');sleep(0x7d0);while(!![]){if(text('主页')[_0x4ae5('0x2b')]()){fun[_0x4ae5('0x1a')]('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id('com.ss.android.ugc.aweme:id/do+')[_0x4ae5('0x52')]();sleep(0x7d0);if(text('[label]\x20联系我们')[_0x4ae5('0x2b')]()||text('[label]\x20官方电话')[_0x4ae5('0x2b')]()||text(_0x4ae5('0x11'))[_0x4ae5('0x2b')]()){log('找到电话');var _0x3bcc20=id('com.ss.android.ugc.aweme:id/guq')['findOne']()[_0x4ae5('0x28')]();log(_0x3bcc20);sleep(0x7d0);if(text(_0x4ae5('0x43'))['exists']()){fun['点击文本']('[label]\x20联系我们');}sleep(0x1f4);if(text('[label]\x20官方电话')['exists']()){fun[_0x4ae5('0x1a')](_0x4ae5('0x5a'));}sleep(0x1f4);if(text('[label]\x20联系电话')[_0x4ae5('0x2b')]()){fun[_0x4ae5('0x1a')](_0x4ae5('0x11'));}sleep(0xfa0);var _0x1f4075=ui[_0x4ae5('0x46')][_0x4ae5('0x28')]();var _0x1a0e8d=ui['input9'][_0x4ae5('0x28')]();var _0x3e8105=ui[_0x4ae5('0x3e')]['text']();var _0x280e3b=ui[_0x4ae5('0x4')]['text']();var _0x4c4399=ui['input12'][_0x4ae5('0x28')]();var _0x2e5856=ui['input13']['text']();var _0x127dd3=ui['input14']['text']();var _0x215276=ui['input15'][_0x4ae5('0x28')]();var _0x1dfbb5=ui['input16']['text']();var _0x54824b=ui[_0x4ae5('0x5')]['text']();function _0x8e9927(){var _0x3fdf1a=id('com.ss.android.ugc.aweme:id/cna')[_0x4ae5('0x4b')]();log(_0x3fdf1a['text']());var _0x520d1e=_0x3fdf1a[_0x4ae5('0x28')]();toastLog(_0x4ae5('0x1c'));toast('存取电话号码'+_0x520d1e);sleep(0x3e8);var _0x4d17d1=ui[_0x4ae5('0x2d')][_0x4ae5('0x28')]();var _0x25628b=ui['input4'][_0x4ae5('0x28')]();var _0x563c71=_0x520d1e;files['create'](_0x4ae5('0x17')+_0x4d17d1+'/');sleep(0x1f4);files['append'](_0x4ae5('0x17')+_0x4d17d1+'/'+_0x25628b+'.txt',_0x3bcc20);files['append'](_0x4ae5('0x17')+_0x4d17d1+'/'+_0x25628b+_0x4ae5('0x14'),_0x563c71+='\x0a');sleep(0x1f4);files[_0x4ae5('0x54')]('/sdcard/'+_0x4d17d1+'/'+_0x25628b+'.txt','\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}if(ui['done1']['isChecked']()){if(id(_0x4ae5('0x3b'))['exists']()){if(ui['done1']['isChecked']()&&id(_0x4ae5('0x3b'))[_0x4ae5('0x51')](_0x1f4075)){_0x8e9927();}if(ui['done1'][_0x4ae5('0x22')]()&&id('com.ss.android.ugc.aweme:id/cna')[_0x4ae5('0x51')](_0x1a0e8d)){_0x8e9927();}if(ui[_0x4ae5('0x53')][_0x4ae5('0x22')]()&&id('com.ss.android.ugc.aweme:id/cna')[_0x4ae5('0x51')](_0x3e8105)){_0x8e9927();}if(ui[_0x4ae5('0x53')][_0x4ae5('0x22')]()&&id('com.ss.android.ugc.aweme:id/cna')[_0x4ae5('0x51')](_0x280e3b)){_0x8e9927();}if(ui['done1'][_0x4ae5('0x22')]()&&id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x4c4399)){_0x8e9927();}if(ui['done1'][_0x4ae5('0x22')]()&&id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x2e5856)){_0x8e9927();}if(ui[_0x4ae5('0x53')][_0x4ae5('0x22')]()&&id(_0x4ae5('0x3b'))['textContains'](_0x127dd3)){_0x8e9927();}if(ui['done1'][_0x4ae5('0x22')]()&&id(_0x4ae5('0x3b'))['textContains'](_0x215276)){_0x8e9927();}if(ui['done1']['isChecked']()&&id(_0x4ae5('0x3b'))['textContains'](_0x1dfbb5)){_0x8e9927();}if(ui[_0x4ae5('0x53')][_0x4ae5('0x22')]()&&id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x54824b)){_0x8e9927();}}else{log(_0x4ae5('0x45'));while(!![]){if(id(_0x4ae5('0x4d'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{_0x8e9927();}}}function 打开爱加速(){toast('1s之后打开爱加速');sleep(0x3e8);var _0x24cd90=app[_0x4ae5('0x6')]('爱加速');if(!_0x24cd90){toast('你还没有安装爱加速！');sleep(0x3e8);return;}fun['waitId']('com.fvcorp.android.aijiasuclient:id/textStatusContent');toast('软件已打开，3s之后开始运行！');sleep(0xbb8);while(!![]){if(text('点击连接')['exists']()){fun['点击id'](_0x4ae5('0x67'));sleep(0x7d0);break;}else{fun[_0x4ae5('0x26')]('com.fvcorp.android.aijiasuclient:id/buttonOnOff');sleep(0x7d0);fun['点击id'](_0x4ae5('0x62'));sleep(0x7d0);fun[_0x4ae5('0x1')](_0x4ae5('0x9'));sleep(0x7d0);fun[_0x4ae5('0x26')]('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun[_0x4ae5('0x1')](_0x4ae5('0xe'));sleep(0x7d0);break;}}}function killApp(_0x53435b){let _0xa455c7=['停','强','结束'];let _0x555369=app['getPackageName'](_0x53435b);if(_0x555369){app['openAppSetting'](_0x555369);text(_0x53435b)['waitFor']();for(var _0x8b41ad=0x0;_0x8b41ad<_0xa455c7[_0x4ae5('0x36')];_0x8b41ad++){if(textContains(_0xa455c7[_0x8b41ad])['exists']()){let _0x218887=textContains(_0xa455c7[_0x8b41ad])['findOne']();if(_0x218887[_0x4ae5('0x69')]()){_0x218887['click']();text('确定')[_0x4ae5('0x4b')]()[_0x4ae5('0x15')]();toastLog(_0x53435b+_0x4ae5('0x58'));sleep(0x320);back();break;}else{toastLog(_0x53435b+'不在后台运行！');back();break;}}}}else{toastLog('应用不存在');}}threads[_0x4ae5('0x49')](function(){events[_0x4ae5('0x48')]();events['on'](_0x4ae5('0x57'),function(_0x1efae0,_0x399940){if(_0x1efae0==keys[_0x4ae5('0x44')]){toast(_0x4ae5('0x1b'));sleep(0x7d0);exit();}});});function 上滑动(){var _0x44c1b5=device['width'];var _0x553326=device[_0x4ae5('0x12')];swipe(_0x44c1b5/0x2,_0x553326/0x2,_0x44c1b5/0x2,_0x553326/0x4,0x1);}function 下滑动(){var _0x211740=device['width'];var _0x1710e3=device['height'];swipe(_0x211740/0x2,_0x1710e3/0x4,_0x211740/0x2,_0x1710e3/0x2,0x320);}function 左滑动(){var _0x67f8d4=device[_0x4ae5('0x21')];var _0x5bdc0d=device['height'];swipe(_0x67f8d4/0x3,_0x5bdc0d/0x3,_0x67f8d4/0x8,_0x5bdc0d/0x3,0x1);}
