

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

var _0x57d7=['findOne','/sdcard/android/','done1','service','clear','1s之后打开抖音','input8','enabled','com.ss.android.ugc.aweme:id/cna','textContains','input4','waitFor','点击卖家','slice','1s之后打开爱加速','点击id','退出脚本！','wait','list_ck','更新完成！','请开启无障碍服务','input','input11','string','autoService','forEach','https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js','append','更新中...请稍后，5秒内将更新完毕！','目前人数\x20:\x20','找到电话','验证失败,请联系作者','android.settings.ACCESSIBILITY_SETTINGS','进入语音页','remove','bounds','bt5','code\x20=\x20','getInstance','com.fvcorp.android.aijiasuclient:id/textStatusContent','write','input10','height','md5','input17','getPackageName','已结束运行','emitter','tabs','read','setTitles','waitId','String','激活码错误,请联系作者','getText','input6','digest','centerY','软件已打开，3s之后开始运行！','start','验证成功','模式2','com.ss.android.ugc.aweme:id/fjj','/sdcard/','input18','点击文本','check','input7','exists','centerX','com.ss.android.ugc.aweme:id/fnt','body','lang','444444445565','/sdcard/Android/main.js','length','disableSelf','/main.js','isChecked','get','put','width','input9','interrupt','cwd','push','符合人数','updata','checked','click','.txt','com.ss.android.ugc.aweme:id/do+','/sdcard/android/main.js','create','stopAll','电话符合','writeBytes','爱加速','com.ss.android.ugc.aweme:id/g1o','com.ss.android.ugc.aweme:id/dn3','Integer','没找到电话','不符合人数','[label]\x20联系我们','security','launchApp','你还没有安装爱加速！','input14','停止运行','[label]\x20官方电话','getAndroidId','MessageDigest','text','com.fvcorp.android.aijiasuclient:id/buttonOnOff','search','map'];var _0x56f3=function(_0x57d7c0,_0x56f3f5){_0x57d7c0=_0x57d7c0-0x0;var _0x22a456=_0x57d7[_0x57d7c0];return _0x22a456;};threads[_0x56f3('0x3b')](function(){function _0x2772da(){try{var _0xdbe457=http[_0x56f3('0x4f')]('https://shimo.im/docs/vyWhDTttKxXqGQ9P');var _0x1e6738=_0xdbe457['body'][_0x56f3('0x17')]();return _0x1e6738;}catch(_0xbace4d){}}if(_0x2772da()[_0x56f3('0x72')]('抖音抖')==-0x1){log(_0x56f3('0x1f'));exit();}else{log(_0x56f3('0x3c'));}});var 本地存储1=storages['create']('123444555');for(i=0x12;i<0x13;i++){var content=本地存储1[_0x56f3('0x4f')]('kb'+i);if(content){ui['input'+i]['setText'](content);}}ui['v'][_0x56f3('0x32')](['脚本列表','电话段设置','激活设备']);ui[_0x56f3('0x30')]['setupWithViewPager'](ui['v']);ui[_0x56f3('0x18')]['on'](_0x56f3('0x42'),function(_0x1b205e){if(_0x1b205e&&auto[_0x56f3('0x3')]==null){app['startActivity']({'action':_0x56f3('0x20')});}if(!_0x1b205e&&auto['service']!=null){auto[_0x56f3('0x3')][_0x56f3('0x4c')]();}});ui[_0x56f3('0x2f')]['on']('resume',function(){ui[_0x56f3('0x18')][_0x56f3('0x58')]=auto[_0x56f3('0x3')]!=null;});ui['bt2']['click'](function(){threads[_0x56f3('0x3b')](程序3);});function get_input_list(){return[ui['input1'],ui['input2'],ui['input3'],ui[_0x56f3('0xa')],ui['input5'],ui[_0x56f3('0x37')],ui[_0x56f3('0x43')],ui[_0x56f3('0x6')],ui['input9'],ui[_0x56f3('0x29')],ui[_0x56f3('0x16')],ui['input12'],ui['input13'],ui[_0x56f3('0x6b')],ui['input15'],ui['input16'],ui[_0x56f3('0x2c')]];}function text_toggle(){list_ck=get_input_list();list_ck[_0x56f3('0x19')](_0x2d1a04=>{_0x2d1a04['setText']('');});}arr=new Array();for(i=0x12;i<0x13;i++){var content=ui[_0x56f3('0x15')+i][_0x56f3('0x36')]()+'';本地存储1['put']('kb'+i,content);arr['push'](content);};var 本地存储=storages['create'](_0x56f3('0x49'));for(i=0x1;i<=0x11;i++){var content=本地存储['get']('kb'+i);if(content){ui['input'+i]['setText'](content);}}function save_opt(){let _0x1f6282=get_check_box_list()[_0x56f3('0x73')](_0x4e5927=>_0x4e5927['checked']);本地存储['put'](_0x56f3('0x12'),_0x1f6282);}function load_opt(){let _0x1b48da=本地存储['get']('list_ck',null);if(_0x1b48da){let _0x19b753=get_check_box_list();for(let _0x2e8bbc=0x0;_0x2e8bbc<_0x1b48da['length'];_0x2e8bbc++){_0x19b753[_0x2e8bbc]['checked']=_0x1b48da[_0x2e8bbc];}}}load_opt();function get_check_box_list(){return[ui['done1']];}importClass(java[_0x56f3('0x68')][_0x56f3('0x6f')]);function MD5(_0xb207c8){try{var _0x232fb4=MessageDigest[_0x56f3('0x26')](_0x56f3('0x2b'));var _0x1fcfc8=_0x232fb4[_0x56f3('0x38')](new java[(_0x56f3('0x48'))][(_0x56f3('0x34'))](_0xb207c8)['getBytes']('UTF-8'));var _0x339c9f=new java['lang']['StringBuffer']();for(let _0x31d327=0x0;_0x31d327<_0x1fcfc8['length'];_0x31d327++){var _0x4e2e25=_0x1fcfc8[_0x31d327];var _0x4f3dc5=_0x4e2e25&0xff;var _0x589cb3=java[_0x56f3('0x48')][_0x56f3('0x64')]['toHexString'](_0x4f3dc5);if(_0x589cb3[_0x56f3('0x4b')]==0x1){_0x339c9f[_0x56f3('0x1b')]('0');}_0x339c9f[_0x56f3('0x1b')](_0x589cb3);}return _0x339c9f['toString']();}catch(_0x14f373){alert(_0x14f373);return'';}}var IMEI=device[_0x56f3('0x6e')]();var strSign=MD5(IMEI+IMEI['slice'](0x4,0x7)*IMEI*0xd431);var kobe335787=strSign;var kobe223198=ui[_0x56f3('0x40')]['getText']();function 程序3(){setClip(IMEI);toastLog('已复制手机识别码,请发送给作者');};function get_check_box_list(){return[ui[_0x56f3('0x2')]];}ui[_0x56f3('0x57')]['click'](()=>{toast(_0x56f3('0x1c'));threads['start'](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x5d3e48=http['get'](_0x56f3('0x1a'));log(_0x56f3('0x25')+_0x5d3e48['statusCode']);sleep(0xbb8);files[_0x56f3('0x60')](_0x56f3('0x5c'),_0x5d3e48[_0x56f3('0x47')]['bytes']());}function upgrade(){var _0x350c54='main.js';files[_0x56f3('0x28')](engines['myEngine']()[_0x56f3('0x54')]()+'/main.js',files[_0x56f3('0x31')](_0x56f3('0x1')+_0x350c54));engines[_0x56f3('0x5e')]();events['on']('exit',function(){engines['execScriptFile'](engines['myEngine']()[_0x56f3('0x54')]()+_0x56f3('0x4d'));toast(_0x56f3('0x13'));});}ui['bt4']['on'](_0x56f3('0x59'),function(){本地存储1['clear']();toast('激活码数据已清除');});ui[_0x56f3('0x24')]['on'](_0x56f3('0x59'),function(){本地存储[_0x56f3('0x4')]();text_toggle();toast('设置已清除');});var fun={'wait':function(_0x4003e2){text(_0x4003e2)['waitFor']();sleep(0x3e8);},'waitId':function(_0x14cc91){id(_0x14cc91)[_0x56f3('0xb')]();sleep(0x3e8);},'点击文本':function(_0x387ae5){var _0x272289=text(_0x387ae5)[_0x56f3('0x0')]()['bounds']();click(_0x272289[_0x56f3('0x45')](),_0x272289[_0x56f3('0x39')]());},'点击id':function(_0x2aec64){var _0x564070=id(_0x2aec64)[_0x56f3('0x0')]()[_0x56f3('0x23')]();click(_0x564070[_0x56f3('0x45')](),_0x564070['centerY']());},'向上滑动':function(_0x26eb25){swipe(device['width']/0x2,device['height']/0x2,device['width']/0x2,device[_0x56f3('0x2a')]/0x2-_0x26eb25,0x1f4);sleep(0x3e8);},'向下滑动':function(_0xd664f3){swipe(device['width']/0x2,device['height']/0x2,device[_0x56f3('0x51')]/0x2,device[_0x56f3('0x2a')]/0x2+_0xd664f3,0x320);sleep(0x3e8);}};ui['start'][_0x56f3('0x59')](function(){if(auto['service']==null){toast(_0x56f3('0x14'));return;}arr=new Array();for(i=0x12;i<0x13;i++){var _0x5a811e=ui['input'+i]['getText']()+'';本地存储1[_0x56f3('0x50')]('kb'+i,_0x5a811e);arr[_0x56f3('0x55')](_0x5a811e);};arr=new Array();for(i=0x1;i<=0x11;i++){var _0x5a811e=ui['input'+i]['getText']()+'';本地存储[_0x56f3('0x50')]('kb'+i,_0x5a811e);arr[_0x56f3('0x55')](_0x5a811e);};files[_0x56f3('0x22')](_0x56f3('0x4a'));save_opt();threads[_0x56f3('0x3b')](function(){function _0x57a30e(){try{var _0x15f068=http['get']('https://shimo.im/docs/kyT3qdJJHJxvKCVJ/');var _0x53b3a1=_0x15f068[_0x56f3('0x47')][_0x56f3('0x17')]();return _0x53b3a1;}catch(_0x5178bd){}}var _0x332d57=device[_0x56f3('0x6e')]();if(_0x57a30e()[_0x56f3('0x72')](_0x332d57)==-0x1){toast(_0x56f3('0x1f'));exit();}else{内容1=ui[_0x56f3('0x40')]['text']();}_0x57a30e();});if(kobe223198!=kobe335787){toast(_0x56f3('0x35'));return;}else{threads[_0x56f3('0x3b')](function(){while(!![]){var _0xad76d4=threads['start'](主脚本);sleep(0x3c*ui['input7']['text']()*0x3e8);toastLog(_0x56f3('0x6c'));_0xad76d4[_0x56f3('0x53')]();killApp('抖音');sleep(0x1f40);打开爱加速();}});}});function 主脚本(){打开抖音();进入直播();判断人数();}function 打开抖音(){toast(_0x56f3('0x5'));sleep(0x3e8);var _0x253885=app[_0x56f3('0x69')]('抖音');if(!_0x253885){toast('你还没有安装抖音！');sleep(0x3e8);return;}fun[_0x56f3('0x11')]('首页');toast(_0x56f3('0x3a'));sleep(0xbb8);};function 进入直播(){id(_0x56f3('0x46'))['waitFor']();sleep(0xbb8);fun['点击id']('com.ss.android.ugc.aweme:id/fnt');sleep(0xbb8);id('com.ss.android.ugc.aweme:id/dn3')[_0x56f3('0xb')]();sleep(0xbb8);if(ui['模式1'][_0x56f3('0x4e')]()){while(!![]){if(text('购物')['exists']()){sleep(0x3e8);fun[_0x56f3('0x41')]('购物');sleep(0xbb8);toastLog('进入购物页');break;}else{左滑动();sleep(0xbb8);}}}if(ui[_0x56f3('0x3d')]['isChecked']()){while(!![]){if(text('语音')[_0x56f3('0x44')]()){sleep(0x3e8);fun['点击文本']('语音');sleep(0xbb8);toastLog(_0x56f3('0x21'));break;}else{左滑动();sleep(0xbb8);}}}var _0x5573be=ui['input6'][_0x56f3('0x70')]();if(_0x5573be>0x0){for(bi=0x0;bi<_0x5573be;bi++){sleep(0x7d0);下滑动();sleep(0x1770);}}fun['waitId']('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);log(_0x56f3('0xc'));fun[_0x56f3('0xf')](_0x56f3('0x3e'));sleep(0x3e8);id('com.ss.android.ugc.aweme:id/dn3')[_0x56f3('0xb')]();sleep(0xbb8);log('3秒后');}function 判断人数(){var _0x31c0ae=ui['input1']['text']();for(kjh=0x0;kjh<_0x31c0ae;kjh++){fun['waitId'](_0x56f3('0x62'));var _0x170332=id('com.ss.android.ugc.aweme:id/g1o')['findOne']()[_0x56f3('0x70')]();if(id('com.ss.android.ugc.aweme:id/g1o')[_0x56f3('0x9')]('万')['exists']()){var _0x49015c=_0x170332[_0x56f3('0xd')](0x0,-0x1)*0x2710;toastLog(_0x49015c);sleep(0x3e8);toastLog('目前人数\x20:\x20'+_0x49015c+'人');sleep(0x7d0);var _0x4f4d59=ui['input2']['text']();var _0x4ce449=ui['input5'][_0x56f3('0x70')]();if(_0x49015c>_0x4f4d59&&_0x49015c<_0x4ce449){toastLog(_0x56f3('0x56'));获取电话();}else{toastLog(_0x56f3('0x66'));上滑动();sleep(0xbb8);}}else{toastLog(_0x56f3('0x1d')+_0x170332+'人');var _0x35f328=ui['input2']['text']();var _0x2d6521=ui['input5']['text']();if(_0x170332>_0x35f328&&_0x170332<_0x2d6521){toastLog(_0x56f3('0x56'));获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}}}function 获取电话(){id(_0x56f3('0x63'))['waitFor']();sleep(0x1770);fun['点击id'](_0x56f3('0x63'));sleep(0x7d0);while(!![]){if(text('主页')['exists']()){fun['点击文本']('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id(_0x56f3('0x5b'))['waitFor']();sleep(0x7d0);if(text(_0x56f3('0x67'))[_0x56f3('0x44')]()||text(_0x56f3('0x6d'))[_0x56f3('0x44')]()||text('[label]\x20联系电话')[_0x56f3('0x44')]()){log(_0x56f3('0x1e'));var _0x372b9d=id('com.ss.android.ugc.aweme:id/guq')[_0x56f3('0x0')]()[_0x56f3('0x70')]();log(_0x372b9d);sleep(0x7d0);if(text(_0x56f3('0x67'))['exists']()){fun[_0x56f3('0x41')](_0x56f3('0x67'));}sleep(0x1f4);if(text('[label]\x20官方电话')['exists']()){fun[_0x56f3('0x41')]('[label]\x20官方电话');}sleep(0x1f4);if(text('[label]\x20联系电话')['exists']()){fun['点击文本']('[label]\x20联系电话');}sleep(0xfa0);var _0x426184=ui['input8']['text']();var _0x19c15b=ui[_0x56f3('0x52')]['text']();var _0x1d22ee=ui['input10']['text']();var _0x30dc43=ui[_0x56f3('0x16')]['text']();var _0xd65b62=ui['input12'][_0x56f3('0x70')]();var _0x4fa7e2=ui['input13']['text']();var _0x3eda9a=ui['input14']['text']();var _0x50f766=ui['input15']['text']();var _0x24bed1=ui['input16'][_0x56f3('0x70')]();var _0x4d6c1b=ui['input17']['text']();function _0x3196b6(){var _0x66a88c=id(_0x56f3('0x8'))[_0x56f3('0x0')]();log(_0x66a88c['text']());var _0x2da606=_0x66a88c['text']();toastLog(_0x56f3('0x5f'));toast('存取电话号码'+_0x2da606);sleep(0x3e8);var _0x451869=ui['input3']['text']();var _0x5934c5=ui['input4']['text']();var _0x78d094=_0x2da606;if(ui['done1'][_0x56f3('0x4e')]()){if(id('com.ss.android.ugc.aweme:id/cna')[_0x56f3('0x9')](_0x426184)||id(_0x56f3('0x8'))['textContains'](_0x19c15b)||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x1d22ee)||id(_0x56f3('0x8'))['textContains'](_0x30dc43)||id(_0x56f3('0x8'))[_0x56f3('0x9')](_0xd65b62)||id(_0x56f3('0x8'))[_0x56f3('0x9')](_0x4fa7e2)||id(_0x56f3('0x8'))[_0x56f3('0x9')](_0x3eda9a)||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x50f766)||id(_0x56f3('0x8'))[_0x56f3('0x9')](_0x24bed1)||id(_0x56f3('0x8'))[_0x56f3('0x9')](_0x4d6c1b)){files[_0x56f3('0x5d')]('/sdcard/'+_0x451869+'/');sleep(0x1f4);files['append'](_0x56f3('0x3f')+_0x451869+'/'+_0x5934c5+'.txt',_0x372b9d);files[_0x56f3('0x1b')](_0x56f3('0x3f')+_0x451869+'/'+_0x5934c5+'.txt',_0x78d094+='\x0a');sleep(0x1f4);files['append'](_0x56f3('0x3f')+_0x451869+'/'+_0x5934c5+'.txt','\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}else{log('没找到电话');while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{files[_0x56f3('0x5d')]('/sdcard/'+_0x451869+'/');sleep(0x1f4);files[_0x56f3('0x1b')](_0x56f3('0x3f')+_0x451869+'/'+_0x5934c5+'.txt',_0x372b9d);files['append']('/sdcard/'+_0x451869+'/'+_0x5934c5+'.txt',_0x78d094+='\x0a');sleep(0x1f4);files['append'](_0x56f3('0x3f')+_0x451869+'/'+_0x5934c5+_0x56f3('0x5a'),'\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}}if(id(_0x56f3('0x8'))['exists']()){_0x3196b6();}else{log('没找到电话');while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{log(_0x56f3('0x65'));while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}function 打开爱加速(){toast(_0x56f3('0xe'));sleep(0x3e8);var _0x5baaa1=app['launchApp'](_0x56f3('0x61'));if(!_0x5baaa1){toast(_0x56f3('0x6a'));sleep(0x3e8);return;}fun[_0x56f3('0x33')](_0x56f3('0x27'));toast('软件已打开，3s之后开始运行！');sleep(0xbb8);while(!![]){if(text('点击连接')[_0x56f3('0x44')]()){fun['点击id'](_0x56f3('0x71'));sleep(0x7d0);break;}else{fun['点击id'](_0x56f3('0x71'));sleep(0x7d0);fun['点击id']('com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle');sleep(0x7d0);fun[_0x56f3('0x33')]('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun['点击id']('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun['waitId'](_0x56f3('0x27'));sleep(0x7d0);break;}}}function killApp(_0x41bb00){let _0x2d1b61=['停','强','结束'];let _0x236872=app[_0x56f3('0x2d')](_0x41bb00);if(_0x236872){app['openAppSetting'](_0x236872);text(_0x41bb00)[_0x56f3('0xb')]();for(var _0x4c7804=0x0;_0x4c7804<_0x2d1b61[_0x56f3('0x4b')];_0x4c7804++){if(textContains(_0x2d1b61[_0x4c7804])['exists']()){let _0x195c9b=textContains(_0x2d1b61[_0x4c7804])['findOne']();if(_0x195c9b[_0x56f3('0x7')]()){_0x195c9b['click']();text('确定')['findOne']()[_0x56f3('0x59')]();toastLog(_0x41bb00+_0x56f3('0x2e'));sleep(0x320);back();break;}else{toastLog(_0x41bb00+'不在后台运行！');back();break;}}}}else{toastLog('应用不存在');}}threads['start'](function(){events['observeKey']();events['on']('key_down',function(_0x3c2c33,_0x319475){if(_0x3c2c33==keys['volume_down']){toast(_0x56f3('0x10'));sleep(0x7d0);exit();}});});function 上滑动(){var _0x4d62ae=device[_0x56f3('0x51')];var _0x37829c=device['height'];swipe(_0x4d62ae/0x2,_0x37829c/0x2,_0x4d62ae/0x2,_0x37829c/0x4,0x1);}function 下滑动(){var _0x572076=device['width'];var _0x1c0cdb=device[_0x56f3('0x2a')];swipe(_0x572076/0x2,_0x1c0cdb/0x4,_0x572076/0x2,_0x1c0cdb/0x2,0x320);}function 左滑动(){var _0x99280=device[_0x56f3('0x51')];var _0x2b171e=device['height'];swipe(_0x99280/0x3,_0x2b171e/0x3,_0x99280/0x8,_0x2b171e/0x3,0x1);}
