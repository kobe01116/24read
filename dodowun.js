  

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

var _0xf51f=['exists','start','list_ck','com.ss.android.ugc.aweme:id/guq','com.fvcorp.android.aijiasuclient:id/textStatusContent','resume','抖音抖','模式2','目前人数\x20:\x20','key_down','input15','input17','1s之后打开抖音','autoService','setText','StringBuffer','input9','search','centerY','com.fvcorp.android.aijiasuclient:id/layoutRandomConnection','lang','点击文本','input','input2','push','/main.js','验证成功','电话符合','findOne','statusCode','符合人数','digest','找到电话','check','centerX','getAndroidId','input5','应用不存在','remove','MessageDigest','软件已打开，3s之后开始运行！','com.ss.android.ugc.aweme:id/fnt','click','点击id','input14','disableSelf','launchApp','put','停止运行','input3','length','clear','input8','input10','不符合人数','[label]\x20联系我们','.txt','cwd','input11','done1','电话段设置','com.ss.android.ugc.aweme:id/cna','/sdcard/android/main.js','1s之后打开爱加速','已复制手机识别码,请发送给作者','service','bounds','volume_down','点击卖家','[label]\x20官方电话','checked','bytes','enabled','input4','height','https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js','waitId','脚本列表','input1','/sdcard/Android/main.js','input18','append','bt2','/sdcard/','text','width','没找到电话','123444555','tabs','bt4','input7','com.fvcorp.android.aijiasuclient:id/buttonOnOff','com.ss.android.ugc.aweme:id/g1o','请开启无障碍服务','/sdcard/android/','存取电话号码','验证失败,请联系作者','Integer','body','wait','string','toHexString','bt5','textContains','[label]\x20联系电话','slice','waitFor','isChecked','get'];var _0x4f5f=function(_0xf51faf,_0x4f5f93){_0xf51faf=_0xf51faf-0x0;var _0xde0e13=_0xf51f[_0xf51faf];return _0xde0e13;};threads[_0x4f5f('0x1')](function(){function _0x3946ab(){try{var _0x55fd73=http['get']('https://shimo.im/docs/vyWhDTttKxXqGQ9P');var _0xe585a1=_0x55fd73[_0x4f5f('0x62')][_0x4f5f('0x64')]();return _0xe585a1;}catch(_0x363e99){}}if(_0x3946ab()[_0x4f5f('0x11')](_0x4f5f('0x6'))==-0x1){log('验证失败,请联系作者');exit();}else{log(_0x4f5f('0x1a'));}});var 本地存储1=storages['create'](_0x4f5f('0x57'));for(i=0x12;i<0x13;i++){var content=本地存储1['get']('kb'+i);if(content){ui[_0x4f5f('0x16')+i][_0x4f5f('0xe')](content);}}ui['v']['setTitles']([_0x4f5f('0x4d'),_0x4f5f('0x3c'),'激活设备']);ui[_0x4f5f('0x58')]['setupWithViewPager'](ui['v']);ui['autoService']['on'](_0x4f5f('0x21'),function(_0xd20cc9){if(_0xd20cc9&&auto['service']==null){app['startActivity']({'action':'android.settings.ACCESSIBILITY_SETTINGS'});}if(!_0xd20cc9&&auto['service']!=null){auto['service'][_0x4f5f('0x2d')]();}});ui['emitter']['on'](_0x4f5f('0x5'),function(){ui[_0x4f5f('0xd')][_0x4f5f('0x46')]=auto[_0x4f5f('0x41')]!=null;});ui[_0x4f5f('0x52')]['click'](function(){threads[_0x4f5f('0x1')](程序3);});function get_input_list(){return[ui[_0x4f5f('0x4e')],ui['input2'],ui[_0x4f5f('0x31')],ui['input4'],ui[_0x4f5f('0x24')],ui['input6'],ui[_0x4f5f('0x5a')],ui[_0x4f5f('0x34')],ui[_0x4f5f('0x10')],ui[_0x4f5f('0x35')],ui[_0x4f5f('0x3a')],ui['input12'],ui['input13'],ui['input14'],ui[_0x4f5f('0xa')],ui['input16'],ui[_0x4f5f('0xb')]];}function text_toggle(){list_ck=get_input_list();list_ck['forEach'](_0x5010c5=>{_0x5010c5[_0x4f5f('0xe')]('');});}arr=new Array();for(i=0x12;i<0x13;i++){var content=ui[_0x4f5f('0x16')+i]['getText']()+'';本地存储1[_0x4f5f('0x2f')]('kb'+i,content);arr['push'](content);};var 本地存储=storages['create']('444444445565');for(i=0x1;i<=0x11;i++){var content=本地存储['get']('kb'+i);if(content){ui[_0x4f5f('0x16')+i][_0x4f5f('0xe')](content);}}function save_opt(){let _0x3ce243=get_check_box_list()['map'](_0x100e71=>_0x100e71['checked']);本地存储[_0x4f5f('0x2f')](_0x4f5f('0x2'),_0x3ce243);}function load_opt(){let _0x74dbc5=本地存储[_0x4f5f('0x6c')](_0x4f5f('0x2'),null);if(_0x74dbc5){let _0x219ef7=get_check_box_list();for(let _0x5ef084=0x0;_0x5ef084<_0x74dbc5['length'];_0x5ef084++){_0x219ef7[_0x5ef084]['checked']=_0x74dbc5[_0x5ef084];}}}load_opt();function get_check_box_list(){return[ui[_0x4f5f('0x3b')]];}importClass(java['security'][_0x4f5f('0x27')]);function MD5(_0x4dcc42){try{var _0x4478f9=MessageDigest['getInstance']('md5');var _0x293727=_0x4478f9[_0x4f5f('0x1f')](new java[(_0x4f5f('0x14'))]['String'](_0x4dcc42)['getBytes']('UTF-8'));var _0x27df69=new java[(_0x4f5f('0x14'))][(_0x4f5f('0xf'))]();for(let _0x4a5b46=0x0;_0x4a5b46<_0x293727[_0x4f5f('0x32')];_0x4a5b46++){var _0x2a0255=_0x293727[_0x4a5b46];var _0x80e2=_0x2a0255&0xff;var _0x55d6b2=java['lang'][_0x4f5f('0x61')][_0x4f5f('0x65')](_0x80e2);if(_0x55d6b2['length']==0x1){_0x27df69['append']('0');}_0x27df69[_0x4f5f('0x51')](_0x55d6b2);}return _0x27df69['toString']();}catch(_0x24acda){alert(_0x24acda);return'';}}var IMEI=device['getAndroidId']();var strSign=MD5(IMEI+IMEI['slice'](0x4,0x7)*IMEI*0xd431);var kobe335787=strSign;var kobe223198=ui['input18']['getText']();function 程序3(){setClip(IMEI);toastLog(_0x4f5f('0x40'));};function get_check_box_list(){return[ui[_0x4f5f('0x3b')]];}ui['updata']['click'](()=>{toast('更新中...请稍后，5秒内将更新完毕！');threads['start'](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x3068f0=http[_0x4f5f('0x6c')](_0x4f5f('0x4b'));log('code\x20=\x20'+_0x3068f0[_0x4f5f('0x1d')]);sleep(0xbb8);files['writeBytes'](_0x4f5f('0x3e'),_0x3068f0[_0x4f5f('0x62')][_0x4f5f('0x47')]());}function upgrade(){var _0x45f7dd='main.js';files['write'](engines['myEngine']()[_0x4f5f('0x39')]()+'/main.js',files['read'](_0x4f5f('0x5e')+_0x45f7dd));engines['stopAll']();events['on']('exit',function(){engines['execScriptFile'](engines['myEngine']()['cwd']()+_0x4f5f('0x19'));toast('更新完成！');});}ui[_0x4f5f('0x59')]['on'](_0x4f5f('0x2a'),function(){本地存储1[_0x4f5f('0x33')]();toast('激活码数据已清除');});ui[_0x4f5f('0x66')]['on']('click',function(){本地存储[_0x4f5f('0x33')]();text_toggle();toast('设置已清除');});var fun={'wait':function(_0x53507b){text(_0x53507b)['waitFor']();sleep(0x3e8);},'waitId':function(_0x5558af){id(_0x5558af)['waitFor']();sleep(0x3e8);},'点击文本':function(_0x136999){var _0x44cf5e=text(_0x136999)['findOne']()[_0x4f5f('0x42')]();click(_0x44cf5e['centerX'](),_0x44cf5e[_0x4f5f('0x12')]());},'点击id':function(_0x2216b8){var _0x42fa73=id(_0x2216b8)['findOne']()[_0x4f5f('0x42')]();click(_0x42fa73[_0x4f5f('0x22')](),_0x42fa73[_0x4f5f('0x12')]());},'向上滑动':function(_0x238ba4){swipe(device[_0x4f5f('0x55')]/0x2,device['height']/0x2,device['width']/0x2,device['height']/0x2-_0x238ba4,0x1f4);sleep(0x3e8);},'向下滑动':function(_0xabdeb2){swipe(device[_0x4f5f('0x55')]/0x2,device['height']/0x2,device['width']/0x2,device[_0x4f5f('0x4a')]/0x2+_0xabdeb2,0x320);sleep(0x3e8);}};ui[_0x4f5f('0x1')]['click'](function(){if(auto['service']==null){toast(_0x4f5f('0x5d'));return;}save_opt();arr=new Array();for(i=0x12;i<0x13;i++){var _0x4733f1=ui[_0x4f5f('0x16')+i]['getText']()+'';本地存储1['put']('kb'+i,_0x4733f1);arr[_0x4f5f('0x18')](_0x4733f1);};arr=new Array();for(i=0x1;i<=0x11;i++){var _0x4733f1=ui['input'+i]['getText']()+'';本地存储['put']('kb'+i,_0x4733f1);arr[_0x4f5f('0x18')](_0x4733f1);};files[_0x4f5f('0x26')](_0x4f5f('0x4f'));threads[_0x4f5f('0x1')](function(){function _0x3c5105(){try{var _0x47508=http[_0x4f5f('0x6c')]('https://shimo.im/docs/kyT3qdJJHJxvKCVJ/');var _0x2bbbc7=_0x47508[_0x4f5f('0x62')]['string']();return _0x2bbbc7;}catch(_0x462763){}}var _0x31526b=device[_0x4f5f('0x23')]();if(_0x3c5105()[_0x4f5f('0x11')](_0x31526b)==-0x1){toast(_0x4f5f('0x60'));exit();}else{内容1=ui[_0x4f5f('0x50')][_0x4f5f('0x54')]();}_0x3c5105();});if(kobe223198!=kobe335787){toast('激活码错误,请联系作者');return;}else{threads['start'](function(){while(!![]){var _0x102519=threads[_0x4f5f('0x1')](主脚本);sleep(0x3c*ui['input7']['text']()*0x3e8);toastLog(_0x4f5f('0x30'));_0x102519['interrupt']();killApp('抖音');sleep(0x1f40);打开爱加速();}});}});function 主脚本(){打开抖音();进入直播();判断人数();}function 打开抖音(){toast(_0x4f5f('0xc'));sleep(0x3e8);var _0x369f39=app['launchApp']('抖音');if(!_0x369f39){toast('你还没有安装抖音！');sleep(0x3e8);return;}fun[_0x4f5f('0x63')]('首页');toast('软件已打开，3s之后开始运行！');sleep(0xbb8);};function 进入直播(){id('com.ss.android.ugc.aweme:id/fnt')['waitFor']();sleep(0xbb8);fun['点击id'](_0x4f5f('0x29'));sleep(0xbb8);id('com.ss.android.ugc.aweme:id/dn3')[_0x4f5f('0x6a')]();sleep(0xbb8);if(ui['模式1'][_0x4f5f('0x6b')]()){while(!![]){if(text('购物')['exists']()){sleep(0x3e8);fun['点击文本']('购物');sleep(0xbb8);toastLog('进入购物页');break;}else{左滑动();sleep(0xbb8);}}}if(ui[_0x4f5f('0x7')][_0x4f5f('0x6b')]()){while(!![]){if(text('语音')[_0x4f5f('0x0')]()){sleep(0x3e8);fun[_0x4f5f('0x15')]('语音');sleep(0xbb8);toastLog('进入语音页');break;}else{左滑动();sleep(0xbb8);}}}var _0x47f571=ui['input6'][_0x4f5f('0x54')]();if(_0x47f571>0x0){for(bi=0x0;bi<_0x47f571;bi++){sleep(0x7d0);下滑动();sleep(0x1770);}}fun['waitId']('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);log(_0x4f5f('0x44'));fun[_0x4f5f('0x2b')]('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);id('com.ss.android.ugc.aweme:id/dn3')[_0x4f5f('0x6a')]();sleep(0xbb8);log('3秒后');}function 判断人数(){var _0x8a541=ui['input1'][_0x4f5f('0x54')]();for(kjh=0x0;kjh<_0x8a541;kjh++){fun['waitId']('com.ss.android.ugc.aweme:id/g1o');var _0x1a6b0e=id('com.ss.android.ugc.aweme:id/g1o')['findOne']()[_0x4f5f('0x54')]();if(id(_0x4f5f('0x5c'))[_0x4f5f('0x67')]('万')[_0x4f5f('0x0')]()){var _0x1300ef=_0x1a6b0e[_0x4f5f('0x69')](0x0,-0x1)*0x2710;toastLog(_0x1300ef);sleep(0x3e8);toastLog('目前人数\x20:\x20'+_0x1300ef+'人');sleep(0x7d0);var _0x3d9d04=ui[_0x4f5f('0x17')][_0x4f5f('0x54')]();var _0x309d71=ui['input5'][_0x4f5f('0x54')]();if(_0x1300ef>_0x3d9d04&&_0x1300ef<_0x309d71){toastLog('符合人数');获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}else{toastLog(_0x4f5f('0x8')+_0x1a6b0e+'人');var _0x92eb05=ui[_0x4f5f('0x17')]['text']();var _0x6df119=ui[_0x4f5f('0x24')][_0x4f5f('0x54')]();if(_0x1a6b0e>_0x92eb05&&_0x1a6b0e<_0x6df119){toastLog(_0x4f5f('0x1e'));获取电话();}else{toastLog(_0x4f5f('0x36'));上滑动();sleep(0xbb8);}}}}function 获取电话(){id('com.ss.android.ugc.aweme:id/dn3')['waitFor']();sleep(0x1770);fun['点击id']('com.ss.android.ugc.aweme:id/dn3');sleep(0x7d0);while(!![]){if(text('主页')['exists']()){fun[_0x4f5f('0x15')]('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id('com.ss.android.ugc.aweme:id/do+')['waitFor']();sleep(0x7d0);if(text('[label]\x20联系我们')['exists']()||text(_0x4f5f('0x45'))[_0x4f5f('0x0')]()||text('[label]\x20联系电话')[_0x4f5f('0x0')]()){log(_0x4f5f('0x20'));var _0x34614b=id(_0x4f5f('0x3'))[_0x4f5f('0x1c')]()[_0x4f5f('0x54')]();log(_0x34614b);sleep(0x7d0);if(text(_0x4f5f('0x37'))[_0x4f5f('0x0')]()){fun[_0x4f5f('0x15')]('[label]\x20联系我们');}sleep(0x1f4);if(text('[label]\x20官方电话')[_0x4f5f('0x0')]()){fun['点击文本'](_0x4f5f('0x45'));}sleep(0x1f4);if(text(_0x4f5f('0x68'))['exists']()){fun['点击文本'](_0x4f5f('0x68'));}sleep(0xfa0);}else{log(_0x4f5f('0x56'));while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}存取电话();}function 存取电话(){if(id('com.ss.android.ugc.aweme:id/cna')[_0x4f5f('0x0')]()){var _0x4220fc=ui[_0x4f5f('0x34')][_0x4f5f('0x54')]();var _0x39e950=ui['input9']['text']();var _0x170cd7=ui['input10'][_0x4f5f('0x54')]();var _0x40c128=ui[_0x4f5f('0x3a')]['text']();var _0x1c37ab=ui['input12'][_0x4f5f('0x54')]();var _0x331ad3=ui['input13']['text']();var _0x40fa01=ui[_0x4f5f('0x2c')]['text']();var _0x56406c=ui['input15'][_0x4f5f('0x54')]();var _0x3b74b6=ui['input16']['text']();var _0x104a77=ui['input17']['text']();var _0x580f4b=id('com.ss.android.ugc.aweme:id/cna')[_0x4f5f('0x1c')]();log(_0x580f4b[_0x4f5f('0x54')]());var _0xd1d70=_0x580f4b[_0x4f5f('0x54')]();toastLog(_0x4f5f('0x1b'));toast(_0x4f5f('0x5f')+_0xd1d70);sleep(0x3e8);var _0x55adeb=ui[_0x4f5f('0x31')][_0x4f5f('0x54')]();var _0x5bdcbc=ui[_0x4f5f('0x49')]['text']();var _0x2f71b9=_0xd1d70;if(ui[_0x4f5f('0x3b')][_0x4f5f('0x6b')]()){if(id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x4220fc)['exists']()||id('com.ss.android.ugc.aweme:id/cna')[_0x4f5f('0x67')](_0x39e950)[_0x4f5f('0x0')]()||id(_0x4f5f('0x3d'))['textContains'](_0x170cd7)['exists']()||id(_0x4f5f('0x3d'))[_0x4f5f('0x67')](_0x40c128)[_0x4f5f('0x0')]()||id('com.ss.android.ugc.aweme:id/cna')[_0x4f5f('0x67')](_0x1c37ab)['exists']()||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x331ad3)['exists']()||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x40fa01)[_0x4f5f('0x0')]()||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x56406c)['exists']()||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x3b74b6)['exists']()||id(_0x4f5f('0x3d'))['textContains'](_0x104a77)[_0x4f5f('0x0')]()){files['create']('/sdcard/'+_0x55adeb+'/');sleep(0x1f4);files[_0x4f5f('0x51')]('/sdcard/'+_0x55adeb+'/'+_0x5bdcbc+_0x4f5f('0x38'),d);files[_0x4f5f('0x51')]('/sdcard/'+_0x55adeb+'/'+_0x5bdcbc+_0x4f5f('0x38'),_0x2f71b9+='\x0a');sleep(0x1f4);files['append']('/sdcard/'+_0x55adeb+'/'+_0x5bdcbc+_0x4f5f('0x38'),'\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}else{log(_0x4f5f('0x56'));while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')[_0x4f5f('0x0')]()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{files['create']('/sdcard/'+_0x55adeb+'/');sleep(0x1f4);files['append']('/sdcard/'+_0x55adeb+'/'+_0x5bdcbc+_0x4f5f('0x38'),d);files[_0x4f5f('0x51')](_0x4f5f('0x53')+_0x55adeb+'/'+_0x5bdcbc+_0x4f5f('0x38'),_0x2f71b9+='\x0a');sleep(0x1f4);files['append'](_0x4f5f('0x53')+_0x55adeb+'/'+_0x5bdcbc+'.txt','\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}}else{log('没找到电话');while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}function 打开爱加速(){toast(_0x4f5f('0x3f'));sleep(0x3e8);var _0x5991a2=app[_0x4f5f('0x2e')]('爱加速');if(!_0x5991a2){toast('你还没有安装爱加速！');sleep(0x3e8);return;}fun[_0x4f5f('0x4c')](_0x4f5f('0x4'));toast(_0x4f5f('0x28'));sleep(0xbb8);while(!![]){if(text('点击连接')[_0x4f5f('0x0')]()){fun[_0x4f5f('0x2b')]('com.fvcorp.android.aijiasuclient:id/buttonOnOff');sleep(0x7d0);break;}else{fun['点击id'](_0x4f5f('0x5b'));sleep(0x7d0);fun['点击id']('com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle');sleep(0x7d0);fun['waitId'](_0x4f5f('0x13'));sleep(0x7d0);fun[_0x4f5f('0x2b')]('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun['waitId'](_0x4f5f('0x4'));sleep(0x7d0);break;}}}function killApp(_0x672a2b){let _0x5e5dbe=['停','强','结束'];let _0x36eafd=app['getPackageName'](_0x672a2b);if(_0x36eafd){app['openAppSetting'](_0x36eafd);text(_0x672a2b)[_0x4f5f('0x6a')]();for(var _0x99a59e=0x0;_0x99a59e<_0x5e5dbe[_0x4f5f('0x32')];_0x99a59e++){if(textContains(_0x5e5dbe[_0x99a59e])[_0x4f5f('0x0')]()){let _0x5aa0a2=textContains(_0x5e5dbe[_0x99a59e])['findOne']();if(_0x5aa0a2[_0x4f5f('0x48')]()){_0x5aa0a2[_0x4f5f('0x2a')]();text('确定')[_0x4f5f('0x1c')]()[_0x4f5f('0x2a')]();toastLog(_0x672a2b+'已结束运行');sleep(0x320);back();break;}else{toastLog(_0x672a2b+'不在后台运行！');back();break;}}}}else{toastLog(_0x4f5f('0x25'));}}threads['start'](function(){events['observeKey']();events['on'](_0x4f5f('0x9'),function(_0x21fe5f,_0x306b0c){if(_0x21fe5f==keys[_0x4f5f('0x43')]){toast('退出脚本！');sleep(0x7d0);exit();}});});function 上滑动(){var _0x48c060=device['width'];var _0x3b55e9=device['height'];swipe(_0x48c060/0x2,_0x3b55e9/0x2,_0x48c060/0x2,_0x3b55e9/0x4,0x1);}function 下滑动(){var _0x4e4fa6=device['width'];var _0x423d46=device['height'];swipe(_0x4e4fa6/0x2,_0x423d46/0x4,_0x4e4fa6/0x2,_0x423d46/0x2,0x320);}function 左滑动(){var _0x309bbe=device['width'];var _0x4a76ef=device[_0x4f5f('0x4a')];swipe(_0x309bbe/0x2,_0x4a76ef/0x4,_0x309bbe/0x8,_0x4a76ef/0x4,0x19);}
