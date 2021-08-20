

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

var _0x5398=['textContains','input','/main.js','input8','body','没找到电话','/sdcard/','模式2','com.ss.android.ugc.aweme:id/dn3','exit','/sdcard/android/main.js','waitFor','string','setupWithViewPager','key_down','你还没有安装爱加速！','volume_down','findOne','com.ss.android.ugc.aweme:id/cna','input4','bt4','input1','激活码数据已清除','存取电话号码','start','目前人数\x20:\x20','点击id','进入语音页','checked','[label]\x20联系我们','get','resume','main.js','String','input18','read','模式1','https://shimo.im/docs/kyT3qdJJHJxvKCVJ/','com.fvcorp.android.aijiasuclient:id/buttonOnOff','验证失败,请联系作者','cwd','MessageDigest','com.ss.android.ugc.aweme:id/fnt','https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js','setText','write','waitId','input10','bt5','exists','com.fvcorp.android.aijiasuclient:id/textStatusContent','验证成功','[label]\x20官方电话','com.fvcorp.android.aijiasuclient:id/layoutRandomConnection','put','push','点击连接','bytes','input11','com.ss.android.ugc.aweme:id/g1o','height','点击文本','com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle','create','input14','length','text','com.ss.android.ugc.aweme:id/do+','input12','com.ss.android.ugc.aweme:id/fjj','getBytes','writeBytes','1s之后打开抖音','软件已打开，3s之后开始运行！','1s之后打开爱加速','myEngine','com.ss.android.ugc.aweme:id/guq','openAppSetting','不符合人数','getAndroidId','123444555','input5','input6','lang','退出脚本！','不在后台运行！','service','centerY','click','https://shimo.im/docs/vyWhDTttKxXqGQ9P','更新中...请稍后，5秒内将更新完毕！','clear','input15','enabled','bt2','getText','execScriptFile','input16','isChecked','done1','设置已清除','emitter','append','[label]\x20联系电话','已结束运行','input17','input13','forEach','digest','autoService','map','startActivity','width','search'];var _0x5a46=function(_0x5398b6,_0x5a46d5){_0x5398b6=_0x5398b6-0x0;var _0x2bcab5=_0x5398[_0x5398b6];return _0x2bcab5;};threads[_0x5a46('0x18')](function(){function _0x5e3500(){try{var _0x435590=http[_0x5a46('0x1e')](_0x5a46('0x59'));var _0x29284f=_0x435590[_0x5a46('0x4')][_0x5a46('0xc')]();return _0x29284f;}catch(_0x1d5bdb){}}if(_0x5e3500()[_0x5a46('0x71')]('抖音抖')==-0x1){log('验证失败,请联系作者');exit();}else{log(_0x5a46('0x33'));}});var 本地存储1=storages[_0x5a46('0x3f')](_0x5a46('0x50'));for(i=0x12;i<0x13;i++){var content=本地存储1[_0x5a46('0x1e')]('kb'+i);if(content){ui[_0x5a46('0x1')+i]['setText'](content);}}ui['v']['setTitles'](['脚本列表','电话段设置','激活设备']);ui['tabs'][_0x5a46('0xd')](ui['v']);ui[_0x5a46('0x6d')]['on']('check',function(_0x24d32d){if(_0x24d32d&&auto[_0x5a46('0x56')]==null){app[_0x5a46('0x6f')]({'action':'android.settings.ACCESSIBILITY_SETTINGS'});}if(!_0x24d32d&&auto['service']!=null){auto[_0x5a46('0x56')]['disableSelf']();}});ui[_0x5a46('0x65')]['on'](_0x5a46('0x1f'),function(){ui[_0x5a46('0x6d')][_0x5a46('0x1c')]=auto[_0x5a46('0x56')]!=null;});ui[_0x5a46('0x5e')][_0x5a46('0x58')](function(){threads[_0x5a46('0x18')](程序3);});function get_input_list(){return[ui[_0x5a46('0x15')],ui['input2'],ui['input3'],ui[_0x5a46('0x13')],ui[_0x5a46('0x51')],ui[_0x5a46('0x52')],ui['input7'],ui[_0x5a46('0x3')],ui['input9'],ui[_0x5a46('0x2f')],ui[_0x5a46('0x3a')],ui[_0x5a46('0x44')],ui[_0x5a46('0x6a')],ui['input14'],ui[_0x5a46('0x5c')],ui['input16'],ui['input17']];}function text_toggle(){list_ck=get_input_list();list_ck[_0x5a46('0x6b')](_0x312380=>{_0x312380[_0x5a46('0x2c')]('');});}arr=new Array();for(i=0x12;i<0x13;i++){var content=ui[_0x5a46('0x1')+i]['getText']()+'';本地存储1['put']('kb'+i,content);arr['push'](content);};var 本地存储=storages['create']('444444445565');for(i=0x1;i<=0x11;i++){var content=本地存储['get']('kb'+i);if(content){ui['input'+i]['setText'](content);}}function save_opt(){let _0x33dba5=get_check_box_list()[_0x5a46('0x6e')](_0x4647f0=>_0x4647f0[_0x5a46('0x1c')]);本地存储['put']('list_ck',_0x33dba5);}function load_opt(){let _0x2595a4=本地存储['get']('list_ck',null);if(_0x2595a4){let _0x25bb8e=get_check_box_list();for(let _0x51f6d7=0x0;_0x51f6d7<_0x2595a4[_0x5a46('0x41')];_0x51f6d7++){_0x25bb8e[_0x51f6d7][_0x5a46('0x1c')]=_0x2595a4[_0x51f6d7];}}}load_opt();function get_check_box_list(){return[ui['done1']];}importClass(java['security'][_0x5a46('0x29')]);function MD5(_0x3f6177){try{var _0x29efa3=MessageDigest['getInstance']('md5');var _0x206493=_0x29efa3[_0x5a46('0x6c')](new java[(_0x5a46('0x53'))][(_0x5a46('0x21'))](_0x3f6177)[_0x5a46('0x46')]('UTF-8'));var _0x520935=new java[(_0x5a46('0x53'))]['StringBuffer']();for(let _0x4e02b0=0x0;_0x4e02b0<_0x206493[_0x5a46('0x41')];_0x4e02b0++){var _0x12a329=_0x206493[_0x4e02b0];var _0x492b36=_0x12a329&0xff;var _0x2013b9=java['lang']['Integer']['toHexString'](_0x492b36);if(_0x2013b9[_0x5a46('0x41')]==0x1){_0x520935[_0x5a46('0x66')]('0');}_0x520935['append'](_0x2013b9);}return _0x520935['toString']();}catch(_0x1b8541){alert(_0x1b8541);return'';}}var IMEI=device[_0x5a46('0x4f')]();var strSign=MD5(IMEI+IMEI['slice'](0x4,0x7)*IMEI*0xd431);var kobe335787=strSign;var kobe223198=ui[_0x5a46('0x22')]['getText']();function 程序3(){setClip(IMEI);toastLog('已复制手机识别码,请发送给作者');};function get_check_box_list(){return[ui['done1']];}ui['updata'][_0x5a46('0x58')](()=>{toast(_0x5a46('0x5a'));threads['start'](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0xda6ada=http[_0x5a46('0x1e')](_0x5a46('0x2b'));log('code\x20=\x20'+_0xda6ada['statusCode']);sleep(0xbb8);files[_0x5a46('0x47')](_0x5a46('0xa'),_0xda6ada['body'][_0x5a46('0x39')]());}function upgrade(){var _0x5607a7=_0x5a46('0x20');files[_0x5a46('0x2d')](engines[_0x5a46('0x4b')]()[_0x5a46('0x28')]()+_0x5a46('0x2'),files[_0x5a46('0x23')]('/sdcard/android/'+_0x5607a7));engines['stopAll']();events['on'](_0x5a46('0x9'),function(){engines[_0x5a46('0x60')](engines['myEngine']()[_0x5a46('0x28')]()+'/main.js');toast('更新完成！');});}ui[_0x5a46('0x14')]['on'](_0x5a46('0x58'),function(){本地存储1[_0x5a46('0x5b')]();toast(_0x5a46('0x16'));});ui[_0x5a46('0x30')]['on'](_0x5a46('0x58'),function(){本地存储[_0x5a46('0x5b')]();text_toggle();toast(_0x5a46('0x64'));});var fun={'wait':function(_0x4ac871){text(_0x4ac871)[_0x5a46('0xb')]();sleep(0x3e8);},'waitId':function(_0x119716){id(_0x119716)['waitFor']();sleep(0x3e8);},'点击文本':function(_0x35d617){var _0x55df5f=text(_0x35d617)[_0x5a46('0x11')]()['bounds']();click(_0x55df5f['centerX'](),_0x55df5f[_0x5a46('0x57')]());},'点击id':function(_0x50beed){var _0x284688=id(_0x50beed)['findOne']()['bounds']();click(_0x284688['centerX'](),_0x284688['centerY']());},'向上滑动':function(_0xb8b217){swipe(device[_0x5a46('0x70')]/0x2,device['height']/0x2,device['width']/0x2,device['height']/0x2-_0xb8b217,0x1f4);sleep(0x3e8);},'向下滑动':function(_0x494841){swipe(device[_0x5a46('0x70')]/0x2,device['height']/0x2,device[_0x5a46('0x70')]/0x2,device['height']/0x2+_0x494841,0x320);sleep(0x3e8);}};ui['start']['click'](function(){if(auto['service']==null){toast('请开启无障碍服务');return;}arr=new Array();for(i=0x12;i<0x13;i++){var _0x340189=ui[_0x5a46('0x1')+i]['getText']()+'';本地存储1['put']('kb'+i,_0x340189);arr[_0x5a46('0x37')](_0x340189);};arr=new Array();for(i=0x1;i<=0x11;i++){var _0x340189=ui['input'+i][_0x5a46('0x5f')]()+'';本地存储[_0x5a46('0x36')]('kb'+i,_0x340189);arr[_0x5a46('0x37')](_0x340189);};files['remove']('/sdcard/Android/main.js');save_opt();threads['start'](function(){function _0x226ed6(){try{var _0x493865=http[_0x5a46('0x1e')](_0x5a46('0x25'));var _0x1d1c87=_0x493865['body']['string']();return _0x1d1c87;}catch(_0x13151d){}}var _0x33b40d=device[_0x5a46('0x4f')]();if(_0x226ed6()[_0x5a46('0x71')](_0x33b40d)==-0x1){toast(_0x5a46('0x27'));exit();}else{内容1=ui[_0x5a46('0x22')]['text']();}_0x226ed6();});if(kobe223198!=kobe335787){toast('激活码错误,请联系作者');return;}else{threads[_0x5a46('0x18')](function(){while(!![]){var _0x1033ef=threads[_0x5a46('0x18')](主脚本);sleep(0x3c*ui['input7']['text']()*0x3e8);toastLog('停止运行');_0x1033ef['interrupt']();killApp('抖音');sleep(0x1f40);打开爱加速();}});}});function 主脚本(){打开抖音();进入直播();判断人数();}function 打开抖音(){toast(_0x5a46('0x48'));sleep(0x3e8);var _0x22901a=app['launchApp']('抖音');if(!_0x22901a){toast('你还没有安装抖音！');sleep(0x3e8);return;}fun['wait']('首页');toast(_0x5a46('0x49'));sleep(0xbb8);};function 进入直播(){id(_0x5a46('0x2a'))['waitFor']();sleep(0xbb8);fun['点击id'](_0x5a46('0x2a'));sleep(0xbb8);id('com.ss.android.ugc.aweme:id/dn3')[_0x5a46('0xb')]();sleep(0xbb8);if(ui[_0x5a46('0x24')][_0x5a46('0x62')]()){while(!![]){if(text('购物')['exists']()){sleep(0x3e8);fun['点击文本']('购物');sleep(0xbb8);toastLog('进入购物页');break;}else{左滑动();sleep(0xbb8);}}}if(ui[_0x5a46('0x7')][_0x5a46('0x62')]()){while(!![]){if(text('语音')['exists']()){sleep(0x3e8);fun[_0x5a46('0x3d')]('语音');sleep(0xbb8);toastLog(_0x5a46('0x1b'));break;}else{左滑动();sleep(0xbb8);}}}var _0x2dc214=ui[_0x5a46('0x52')]['text']();if(_0x2dc214>0x0){for(bi=0x0;bi<_0x2dc214;bi++){sleep(0x7d0);下滑动();sleep(0xfa0);}}fun['waitId'](_0x5a46('0x45'));sleep(0x3e8);log('点击卖家');fun[_0x5a46('0x1a')](_0x5a46('0x45'));sleep(0x3e8);id(_0x5a46('0x8'))[_0x5a46('0xb')]();sleep(0xbb8);log('3秒后');}function 判断人数(){var _0x23ab77=ui[_0x5a46('0x15')]['text']();for(kjh=0x0;kjh<_0x23ab77;kjh++){fun[_0x5a46('0x2e')]('com.ss.android.ugc.aweme:id/g1o');var _0xf481a0=id(_0x5a46('0x3b'))['findOne']()[_0x5a46('0x42')]();if(id('com.ss.android.ugc.aweme:id/g1o')['textContains']('万')[_0x5a46('0x31')]()){var _0x10045d=_0xf481a0['slice'](0x0,-0x1)*0x2710;toastLog(_0x10045d);sleep(0x3e8);toastLog(_0x5a46('0x19')+_0x10045d+'人');sleep(0x7d0);var _0x33a723=ui['input2']['text']();var _0x4481e6=ui[_0x5a46('0x51')][_0x5a46('0x42')]();if(_0x10045d>_0x33a723&&_0x10045d<_0x4481e6){toastLog('符合人数');获取电话();}else{toastLog(_0x5a46('0x4e'));上滑动();sleep(0xbb8);}}else{toastLog(_0x5a46('0x19')+_0xf481a0+'人');var _0x2825df=ui['input2']['text']();var _0x19b6ef=ui[_0x5a46('0x51')][_0x5a46('0x42')]();if(_0xf481a0>_0x2825df&&_0xf481a0<_0x19b6ef){toastLog('符合人数');获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}}}function 获取电话(){id(_0x5a46('0x8'))['waitFor']();sleep(0x1770);fun[_0x5a46('0x1a')](_0x5a46('0x8'));sleep(0x7d0);while(!![]){if(text('主页')[_0x5a46('0x31')]()){fun[_0x5a46('0x3d')]('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id(_0x5a46('0x43'))[_0x5a46('0xb')]();sleep(0x7d0);if(text(_0x5a46('0x1d'))[_0x5a46('0x31')]()||text(_0x5a46('0x34'))[_0x5a46('0x31')]()||text('[label]\x20联系电话')[_0x5a46('0x31')]()){log('找到电话');var _0x5df94a=id(_0x5a46('0x4c'))['findOne']()[_0x5a46('0x42')]();log(_0x5df94a);sleep(0x7d0);if(text(_0x5a46('0x1d'))['exists']()){fun['点击文本'](_0x5a46('0x1d'));}sleep(0x1f4);if(text(_0x5a46('0x34'))[_0x5a46('0x31')]()){fun['点击文本'](_0x5a46('0x34'));}sleep(0x1f4);if(text('[label]\x20联系电话')[_0x5a46('0x31')]()){fun['点击文本'](_0x5a46('0x67'));}sleep(0xfa0);var _0x5e93a3=ui['input8']['text']();var _0x2b48b8=ui['input9']['text']();var _0xb04397=ui[_0x5a46('0x2f')]['text']();var _0x25a634=ui[_0x5a46('0x3a')]['text']();var _0x321980=ui['input12']['text']();var _0x18db63=ui['input13']['text']();var _0x5d8b68=ui[_0x5a46('0x40')]['text']();var _0x58aab0=ui['input15']['text']();var _0x15c58a=ui[_0x5a46('0x61')]['text']();var _0x45c441=ui[_0x5a46('0x69')]['text']();function _0x4b19ac(){var _0xfb4aa2=id(_0x5a46('0x12'))['findOne']();log(_0xfb4aa2[_0x5a46('0x42')]());var _0x5b115d=_0xfb4aa2['text']();toastLog('电话符合');toast(_0x5a46('0x17')+_0x5b115d);sleep(0x3e8);var _0x517f51=ui['input3'][_0x5a46('0x42')]();var _0x47d010=ui[_0x5a46('0x13')]['text']();var _0x39a0bf=_0x5b115d;files[_0x5a46('0x3f')]('/sdcard/'+_0x517f51+'/');sleep(0x1f4);files['append'](_0x5a46('0x6')+_0x517f51+'/'+_0x47d010+'.txt',_0x5df94a);files[_0x5a46('0x66')](_0x5a46('0x6')+_0x517f51+'/'+_0x47d010+'.txt',_0x39a0bf+='\x0a');sleep(0x1f4);files[_0x5a46('0x66')](_0x5a46('0x6')+_0x517f51+'/'+_0x47d010+'.txt','\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}if(ui['done1'][_0x5a46('0x62')]()){if(id('com.ss.android.ugc.aweme:id/cna')[_0x5a46('0x31')]()){if(ui[_0x5a46('0x63')][_0x5a46('0x62')]()&&id(_0x5a46('0x12'))['textContains'](_0x5e93a3)){_0x4b19ac();}if(ui['done1']['isChecked']()&&id(_0x5a46('0x12'))[_0x5a46('0x0')](_0x2b48b8)){_0x4b19ac();}if(ui['done1'][_0x5a46('0x62')]()&&id(_0x5a46('0x12'))['textContains'](_0xb04397)){_0x4b19ac();}if(ui[_0x5a46('0x63')][_0x5a46('0x62')]()&&id('com.ss.android.ugc.aweme:id/cna')[_0x5a46('0x0')](_0x25a634)){_0x4b19ac();}if(ui['done1'][_0x5a46('0x62')]()&&id(_0x5a46('0x12'))['textContains'](_0x321980)){_0x4b19ac();}if(ui[_0x5a46('0x63')][_0x5a46('0x62')]()&&id(_0x5a46('0x12'))[_0x5a46('0x0')](_0x18db63)){_0x4b19ac();}if(ui['done1'][_0x5a46('0x62')]()&&id(_0x5a46('0x12'))[_0x5a46('0x0')](_0x5d8b68)){_0x4b19ac();}if(ui[_0x5a46('0x63')][_0x5a46('0x62')]()&&id('com.ss.android.ugc.aweme:id/cna')[_0x5a46('0x0')](_0x58aab0)){_0x4b19ac();}if(ui[_0x5a46('0x63')]['isChecked']()&&id('com.ss.android.ugc.aweme:id/cna')[_0x5a46('0x0')](_0x15c58a)){_0x4b19ac();}if(ui['done1'][_0x5a46('0x62')]()&&id(_0x5a46('0x12'))['textContains'](_0x45c441)){_0x4b19ac();}}else{log(_0x5a46('0x5'));while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{_0x4b19ac();}}else{log('没找到电话');while(!![]){if(id(_0x5a46('0x8'))[_0x5a46('0x31')]()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}function 打开爱加速(){toast(_0x5a46('0x4a'));sleep(0x3e8);var _0x2e4184=app['launchApp']('爱加速');if(!_0x2e4184){toast(_0x5a46('0xf'));sleep(0x3e8);return;}fun['waitId'](_0x5a46('0x32'));toast(_0x5a46('0x49'));sleep(0xbb8);while(!![]){if(text(_0x5a46('0x38'))[_0x5a46('0x31')]()){fun[_0x5a46('0x1a')]('com.fvcorp.android.aijiasuclient:id/buttonOnOff');sleep(0x7d0);break;}else{fun[_0x5a46('0x1a')](_0x5a46('0x26'));sleep(0x7d0);fun['点击id'](_0x5a46('0x3e'));sleep(0x7d0);fun['waitId'](_0x5a46('0x35'));sleep(0x7d0);fun['点击id']('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun[_0x5a46('0x2e')](_0x5a46('0x32'));sleep(0x7d0);break;}}}function killApp(_0x424cc2){let _0xb2040e=['停','强','结束'];let _0x315c1e=app['getPackageName'](_0x424cc2);if(_0x315c1e){app[_0x5a46('0x4d')](_0x315c1e);text(_0x424cc2)['waitFor']();for(var _0x97a5e3=0x0;_0x97a5e3<_0xb2040e[_0x5a46('0x41')];_0x97a5e3++){if(textContains(_0xb2040e[_0x97a5e3])[_0x5a46('0x31')]()){let _0xffa3b1=textContains(_0xb2040e[_0x97a5e3])[_0x5a46('0x11')]();if(_0xffa3b1[_0x5a46('0x5d')]()){_0xffa3b1['click']();text('确定')['findOne']()['click']();toastLog(_0x424cc2+_0x5a46('0x68'));sleep(0x320);back();break;}else{toastLog(_0x424cc2+_0x5a46('0x55'));back();break;}}}}else{toastLog('应用不存在');}}threads['start'](function(){events['observeKey']();events['on'](_0x5a46('0xe'),function(_0x151d76,_0x59b5df){if(_0x151d76==keys[_0x5a46('0x10')]){toast(_0x5a46('0x54'));sleep(0x7d0);exit();}});});function 上滑动(){var _0x254e5d=device['width'];var _0x401ce7=device[_0x5a46('0x3c')];swipe(_0x254e5d/0x2,_0x401ce7/0x2,_0x254e5d/0x2,_0x401ce7/0x4,0x1);}function 下滑动(){var _0x3f547d=device[_0x5a46('0x70')];var _0x5ab0da=device['height'];swipe(_0x3f547d/0x2,_0x5ab0da/0x4,_0x3f547d/0x2,_0x5ab0da/0x2,0x320);}function 左滑动(){var _0x3cf5b1=device['width'];var _0x48f770=device[_0x5a46('0x3c')];swipe(_0x3cf5b1/0x3,_0x48f770/0x3,_0x3cf5b1/0x8,_0x48f770/0x3,0x1);}

