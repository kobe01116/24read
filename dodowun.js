

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

var _0x39fe=['https://shimo.im/docs/kyT3qdJJHJxvKCVJ/','/sdcard/','停止运行','height','已复制手机识别码,请发送给作者','com.fvcorp.android.aijiasuclient:id/buttonOnOff','目前人数\x20:\x20','input1','write','android.settings.ACCESSIBILITY_SETTINGS','findOne','符合人数','indexOf','waitId','bt4','service','/sdcard/android/','get','length','444444445565','点击文本','setText','com.ss.android.ugc.aweme:id/g1o','width','input15','/main.js','getPackageName','centerY','input16','toString','电话符合','getInstance','com.ss.android.ugc.aweme:id/fjj','input7','input10','digest','getText','interrupt','存取电话','body','volume_down','md5','input17','com.fvcorp.android.aijiasuclient:id/textStatusContent','isChecked','不符合人数','电话段设置','请开启无障碍服务','软件已打开，3s之后开始运行！','验证失败,请联系作者','input14','exists','input9','search','updata','input6','centerX','create','模式1','lang','click','put','[label]\x20联系电话','bounds','slice','exit','input13','input8','statusCode','com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle','com.ss.android.ugc.aweme:id/dn3','/sdcard/android/main.js','start','脚本列表','input18','[label]\x20联系我们','textContains','done1','com.ss.android.ugc.aweme:id/cna','input2','已结束运行','[label]\x20官方电话','没找到电话','append','com.ss.android.ugc.aweme:id/fnt','myEngine','list_ck','execScriptFile','forEach','String','3秒后','toHexString','waitFor','launchApp','emitter','checked','Integer','string','bt2','text','cwd','MessageDigest','disableSelf','抖音抖','.txt','更新完成！','点击id','input','push'];var _0x506f=function(_0x39feea,_0x506f74){_0x39feea=_0x39feea-0x0;var _0x7776e0=_0x39fe[_0x39feea];return _0x7776e0;};threads[_0x506f('0x48')](function(){function _0x54e5c8(){try{var _0x524391=http[_0x506f('0x11')]('https://shimo.im/docs/vyWhDTttKxXqGQ9P');var _0x34b892=_0x524391[_0x506f('0x27')][_0x506f('0x61')]();return _0x34b892;}catch(_0x4fba64){}}if(_0x54e5c8()['search'](_0x506f('0x67'))==-0x1){log(_0x506f('0x31'));exit();}else{log('验证成功');}});var 本地存储1=storages[_0x506f('0x39')]('123444555');for(i=0x12;i<0x13;i++){var content=本地存储1['get']('kb'+i);if(content){ui['input'+i]['setText'](content);}}ui['v']['setTitles']([_0x506f('0x49'),_0x506f('0x2e'),'激活设备']);ui['tabs']['setupWithViewPager'](ui['v']);ui['autoService']['on']('check',function(_0x56d035){if(_0x56d035&&auto['service']==null){app['startActivity']({'action':_0x506f('0x9')});}if(!_0x56d035&&auto[_0x506f('0xf')]!=null){auto[_0x506f('0xf')][_0x506f('0x66')]();}});ui[_0x506f('0x5e')]['on']('resume',function(){ui['autoService']['checked']=auto[_0x506f('0xf')]!=null;});ui[_0x506f('0x62')]['click'](function(){threads[_0x506f('0x48')](程序3);});function get_input_list(){return[ui[_0x506f('0x7')],ui[_0x506f('0x4f')],ui['input3'],ui['input4'],ui['input5'],ui[_0x506f('0x37')],ui[_0x506f('0x21')],ui[_0x506f('0x43')],ui['input9'],ui['input10'],ui['input11'],ui['input12'],ui[_0x506f('0x42')],ui['input14'],ui[_0x506f('0x18')],ui[_0x506f('0x1c')],ui[_0x506f('0x2a')]];}function text_toggle(){list_ck=get_input_list();list_ck[_0x506f('0x58')](_0x3106e5=>{_0x3106e5['setText']('');});}arr=new Array();for(i=0x12;i<0x13;i++){var content=ui['input'+i][_0x506f('0x24')]()+'';本地存储1[_0x506f('0x3d')]('kb'+i,content);arr[_0x506f('0x6c')](content);};var 本地存储=storages[_0x506f('0x39')](_0x506f('0x13'));for(i=0x1;i<=0x11;i++){var content=本地存储['get']('kb'+i);if(content){ui[_0x506f('0x6b')+i][_0x506f('0x15')](content);}}function save_opt(){let _0x159581=get_check_box_list()['map'](_0x1f803f=>_0x1f803f[_0x506f('0x5f')]);本地存储[_0x506f('0x3d')](_0x506f('0x56'),_0x159581);}function load_opt(){let _0x51d30c=本地存储['get']('list_ck',null);if(_0x51d30c){let _0x449eeb=get_check_box_list();for(let _0x4bb4f3=0x0;_0x4bb4f3<_0x51d30c[_0x506f('0x12')];_0x4bb4f3++){_0x449eeb[_0x4bb4f3]['checked']=_0x51d30c[_0x4bb4f3];}}}load_opt();function get_check_box_list(){return[ui['done1']];}importClass(java['security'][_0x506f('0x65')]);function MD5(_0x3be3c7){try{var _0x3ce61f=MessageDigest[_0x506f('0x1f')](_0x506f('0x29'));var _0x50af58=_0x3ce61f[_0x506f('0x23')](new java[(_0x506f('0x3b'))][(_0x506f('0x59'))](_0x3be3c7)['getBytes']('UTF-8'));var _0x4f103a=new java[(_0x506f('0x3b'))]['StringBuffer']();for(let _0x13ca8f=0x0;_0x13ca8f<_0x50af58['length'];_0x13ca8f++){var _0x565705=_0x50af58[_0x13ca8f];var _0x4a1f3c=_0x565705&0xff;var _0x17998a=java[_0x506f('0x3b')][_0x506f('0x60')][_0x506f('0x5b')](_0x4a1f3c);if(_0x17998a['length']==0x1){_0x4f103a[_0x506f('0x53')]('0');}_0x4f103a[_0x506f('0x53')](_0x17998a);}return _0x4f103a[_0x506f('0x1d')]();}catch(_0x5c9a62){alert(_0x5c9a62);return'';}}var IMEI=device['getAndroidId']();var strSign=MD5(IMEI+IMEI[_0x506f('0x40')](0x4,0x7)*IMEI*0xd431);var kobe335787=strSign;var kobe223198=ui[_0x506f('0x4a')][_0x506f('0x24')]();function 程序3(){setClip(IMEI);toastLog(_0x506f('0x4'));};function get_check_box_list(){return[ui['done1']];}ui[_0x506f('0x36')]['click'](()=>{toast('更新中...请稍后，5秒内将更新完毕！');threads[_0x506f('0x48')](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x34ba6f=http[_0x506f('0x11')]('https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js');log('code\x20=\x20'+_0x34ba6f[_0x506f('0x44')]);sleep(0xbb8);files['writeBytes'](_0x506f('0x47'),_0x34ba6f[_0x506f('0x27')]['bytes']());}function upgrade(){var _0x23526d='main.js';files[_0x506f('0x8')](engines[_0x506f('0x55')]()['cwd']()+'/main.js',files['read'](_0x506f('0x10')+_0x23526d));engines['stopAll']();events['on'](_0x506f('0x41'),function(){engines[_0x506f('0x57')](engines[_0x506f('0x55')]()[_0x506f('0x64')]()+_0x506f('0x19'));toast(_0x506f('0x69'));});}ui[_0x506f('0xe')]['on'](_0x506f('0x3c'),function(){本地存储1['clear']();toast('激活码数据已清除');});ui['bt5']['on']('click',function(){本地存储['clear']();text_toggle();toast('设置已清除');});var fun={'wait':function(_0x3d80ff){text(_0x3d80ff)[_0x506f('0x5c')]();sleep(0x3e8);},'waitId':function(_0x5c3d19){id(_0x5c3d19)[_0x506f('0x5c')]();sleep(0x3e8);},'点击文本':function(_0x39f27e){var _0x3c7ffc=text(_0x39f27e)[_0x506f('0xa')]()[_0x506f('0x3f')]();click(_0x3c7ffc[_0x506f('0x38')](),_0x3c7ffc['centerY']());},'点击id':function(_0x4f48af){var _0x1c5375=id(_0x4f48af)['findOne']()['bounds']();click(_0x1c5375['centerX'](),_0x1c5375[_0x506f('0x1b')]());},'向上滑动':function(_0x43aee1){swipe(device[_0x506f('0x17')]/0x2,device['height']/0x2,device['width']/0x2,device[_0x506f('0x3')]/0x2-_0x43aee1,0x1f4);sleep(0x3e8);},'向下滑动':function(_0x47c9ba){swipe(device['width']/0x2,device[_0x506f('0x3')]/0x2,device['width']/0x2,device[_0x506f('0x3')]/0x2+_0x47c9ba,0x320);sleep(0x3e8);}};ui['start'][_0x506f('0x3c')](function(){if(auto['service']==null){toast(_0x506f('0x2f'));return;}save_opt();arr=new Array();for(i=0x12;i<0x13;i++){var _0x25f89c=ui[_0x506f('0x6b')+i][_0x506f('0x24')]()+'';本地存储1['put']('kb'+i,_0x25f89c);arr['push'](_0x25f89c);};arr=new Array();for(i=0x1;i<=0x11;i++){var _0x25f89c=ui['input'+i]['getText']()+'';本地存储[_0x506f('0x3d')]('kb'+i,_0x25f89c);arr[_0x506f('0x6c')](_0x25f89c);};files['remove']('/sdcard/Android/main.js');threads[_0x506f('0x48')](function(){function _0x4f56e5(){try{var _0x4ce802=http['get'](_0x506f('0x0'));var _0x501b4f=_0x4ce802['body'][_0x506f('0x61')]();return _0x501b4f;}catch(_0x127b21){}}var _0x26d671=device['getAndroidId']();if(_0x4f56e5()[_0x506f('0x35')](_0x26d671)==-0x1){toast('验证失败,请联系作者');exit();}else{内容1=ui['input18'][_0x506f('0x63')]();}_0x4f56e5();});if(kobe223198!=kobe335787){toast('激活码错误,请联系作者');return;}else{threads['start'](function(){while(!![]){var _0x431bd2=threads['start'](主脚本);sleep(0x3c*ui['input7'][_0x506f('0x63')]()*0x3e8);toastLog(_0x506f('0x2'));_0x431bd2[_0x506f('0x25')]();killApp('抖音');sleep(0x1f40);打开爱加速();}});}});function 主脚本(){打开抖音();进入直播();判断人数();}function 打开抖音(){toast('1s之后打开抖音');sleep(0x3e8);var _0x42c2ec=app[_0x506f('0x5d')]('抖音');if(!_0x42c2ec){toast('你还没有安装抖音！');sleep(0x3e8);return;}fun['wait']('首页');toast(_0x506f('0x30'));sleep(0xbb8);};function 进入直播(){id(_0x506f('0x54'))[_0x506f('0x5c')]();sleep(0xbb8);fun[_0x506f('0x6a')]('com.ss.android.ugc.aweme:id/fnt');sleep(0xbb8);id(_0x506f('0x46'))[_0x506f('0x5c')]();sleep(0xbb8);if(ui[_0x506f('0x3a')][_0x506f('0x2c')]()){while(!![]){if(text('购物')['exists']()){sleep(0x3e8);fun[_0x506f('0x14')]('购物');sleep(0xbb8);toastLog('进入购物页');break;}else{左滑动();sleep(0xbb8);}}}if(ui['模式2'][_0x506f('0x2c')]()){while(!![]){if(text('语音')['exists']()){sleep(0x3e8);fun[_0x506f('0x14')]('语音');sleep(0xbb8);toastLog('进入语音页');break;}else{左滑动();sleep(0xbb8);}}}var _0x31d6b1=ui['input6']['text']();if(_0x31d6b1>0x0){for(bi=0x0;bi<_0x31d6b1;bi++){sleep(0x7d0);下滑动();sleep(0x1770);}}fun[_0x506f('0xd')](_0x506f('0x20'));sleep(0x3e8);log('点击卖家');fun['点击id'](_0x506f('0x20'));sleep(0x3e8);id('com.ss.android.ugc.aweme:id/dn3')[_0x506f('0x5c')]();sleep(0xbb8);log(_0x506f('0x5a'));}function 判断人数(){var _0x4c8480=ui[_0x506f('0x7')]['text']();for(kjh=0x0;kjh<_0x4c8480;kjh++){fun['waitId']('com.ss.android.ugc.aweme:id/g1o');var _0x24501d=id('com.ss.android.ugc.aweme:id/g1o')[_0x506f('0xa')]()['text']();if(id(_0x506f('0x16'))[_0x506f('0x4c')]('万')['exists']()){var _0x2d07d0=_0x24501d['slice'](0x0,-0x1)*0x2710;toastLog(_0x2d07d0);sleep(0x3e8);toastLog(_0x506f('0x6')+_0x2d07d0+'人');sleep(0x7d0);var _0x268742=ui['input2']['text']();var _0x3c792c=ui['input5']['text']();if(_0x2d07d0>_0x268742&&_0x2d07d0<_0x3c792c){toastLog(_0x506f('0xb'));获取电话();}else{toastLog(_0x506f('0x2d'));上滑动();sleep(0xbb8);}}else{toastLog('目前人数\x20:\x20'+_0x24501d+'人');var _0x24a539=ui['input2'][_0x506f('0x63')]();var _0xdaddc2=ui['input5'][_0x506f('0x63')]();if(_0x24501d>_0x24a539&&_0x24501d<_0xdaddc2){toastLog('符合人数');获取电话();}else{toastLog(_0x506f('0x2d'));上滑动();sleep(0xbb8);}}}}function 获取电话(){id(_0x506f('0x46'))['waitFor']();sleep(0x1770);fun[_0x506f('0x6a')]('com.ss.android.ugc.aweme:id/dn3');sleep(0x7d0);while(!![]){if(text('主页')[_0x506f('0x33')]()){fun['点击文本']('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id('com.ss.android.ugc.aweme:id/do+')['waitFor']();sleep(0x7d0);if(text('[label]\x20联系我们')[_0x506f('0x33')]()||text('[label]\x20官方电话')[_0x506f('0x33')]()||text('[label]\x20联系电话')[_0x506f('0x33')]()){log('找到电话');var _0x177ab6=id('com.ss.android.ugc.aweme:id/guq')[_0x506f('0xa')]()[_0x506f('0x63')]();log(_0x177ab6);sleep(0x7d0);if(text('[label]\x20联系我们')[_0x506f('0x33')]()){fun['点击文本'](_0x506f('0x4b'));}sleep(0x1f4);if(text(_0x506f('0x51'))['exists']()){fun['点击文本'](_0x506f('0x51'));}sleep(0x1f4);if(text(_0x506f('0x3e'))[_0x506f('0x33')]()){fun['点击文本'](_0x506f('0x3e'));}sleep(0xfa0);}else{log(_0x506f('0x52'));while(!![]){if(id(_0x506f('0x46'))[_0x506f('0x33')]()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}存取电话();}function 存取电话(){if(id('com.ss.android.ugc.aweme:id/cna')['exists']()){var _0x346a64=ui['input8']['text']();var _0x31a92e=ui[_0x506f('0x34')]['text']();var _0xad08dd=ui[_0x506f('0x22')]['text']();var _0x6219aa=ui['input11']['text']();var _0x81577f=ui['input12']['text']();var _0x294ea0=ui['input13'][_0x506f('0x63')]();var _0xa13c08=ui[_0x506f('0x32')]['text']();var _0x4e0e56=ui['input15'][_0x506f('0x63')]();var _0x54a152=ui['input16']['text']();var _0x377a58=ui['input17'][_0x506f('0x63')]();var _0xadeeca=id(_0x506f('0x4e'))[_0x506f('0xa')]();log(_0xadeeca[_0x506f('0x63')]());var _0x393c74=_0xadeeca[_0x506f('0x63')]();sleep(0x3e8);var _0x1d1810=ui['input3'][_0x506f('0x63')]();var _0x474fd3=ui['input4']['text']();var _0x5479b7=_0x393c74;if(ui[_0x506f('0x4d')][_0x506f('0x2c')]()){var _0x1d1810=ui['input3'][_0x506f('0x63')]();var _0x474fd3=ui['input4'][_0x506f('0x63')]();var _0x5479b7=_0x393c74;if(_0x393c74['indexOf'](_0x346a64)>=0x0||_0x393c74['indexOf'](_0x31a92e)>=0x0||_0x393c74[_0x506f('0xc')](_0xad08dd)>=0x0||_0x393c74[_0x506f('0xc')](_0x6219aa)>=0x0||_0x393c74[_0x506f('0xc')](_0x81577f)>=0x0||_0x393c74['indexOf'](_0x294ea0)>=0x0||_0x393c74[_0x506f('0xc')](_0xa13c08)>=0x0||_0x393c74['indexOf'](_0x4e0e56)>=0x0||_0x393c74['indexOf'](_0x54a152)>=0x0||_0x393c74[_0x506f('0xc')](_0x377a58)>=0x0){toastLog(_0x506f('0x1e'));sleep(0x1f4);toastLog(_0x506f('0x26'));sleep(0x1f4);files['create']('/sdcard/'+_0x1d1810+'/');sleep(0x1f4);files[_0x506f('0x53')](_0x506f('0x1')+_0x1d1810+'/'+_0x474fd3+_0x506f('0x68'),d);files[_0x506f('0x53')](_0x506f('0x1')+_0x1d1810+'/'+_0x474fd3+'.txt',_0x5479b7+='\x0a');sleep(0x1f4);files['append'](_0x506f('0x1')+_0x1d1810+'/'+_0x474fd3+'.txt','\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}else{log('电话不符合');while(!![]){if(id(_0x506f('0x46'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{files['create']('/sdcard/'+_0x1d1810+'/');sleep(0x1f4);files[_0x506f('0x53')](_0x506f('0x1')+_0x1d1810+'/'+_0x474fd3+_0x506f('0x68'),d);files[_0x506f('0x53')]('/sdcard/'+_0x1d1810+'/'+_0x474fd3+_0x506f('0x68'),_0x5479b7+='\x0a');sleep(0x1f4);files[_0x506f('0x53')]('/sdcard/'+_0x1d1810+'/'+_0x474fd3+'.txt','\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}}else{log(_0x506f('0x52'));while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}function 打开爱加速(){toast('1s之后打开爱加速');sleep(0x3e8);var _0x5dd3e4=app[_0x506f('0x5d')]('爱加速');if(!_0x5dd3e4){toast('你还没有安装爱加速！');sleep(0x3e8);return;}fun[_0x506f('0xd')](_0x506f('0x2b'));toast('软件已打开，3s之后开始运行！');sleep(0xbb8);while(!![]){if(text('点击连接')['exists']()){fun['点击id'](_0x506f('0x5'));sleep(0x7d0);break;}else{fun[_0x506f('0x6a')]('com.fvcorp.android.aijiasuclient:id/buttonOnOff');sleep(0x7d0);fun[_0x506f('0x6a')](_0x506f('0x45'));sleep(0x7d0);fun['waitId']('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun['点击id']('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun['waitId']('com.fvcorp.android.aijiasuclient:id/textStatusContent');sleep(0x7d0);break;}}}function killApp(_0x29f23f){let _0x206787=['停','强','结束'];let _0xbde74a=app[_0x506f('0x1a')](_0x29f23f);if(_0xbde74a){app['openAppSetting'](_0xbde74a);text(_0x29f23f)['waitFor']();for(var _0x1f40aa=0x0;_0x1f40aa<_0x206787[_0x506f('0x12')];_0x1f40aa++){if(textContains(_0x206787[_0x1f40aa])['exists']()){let _0x5d1e49=textContains(_0x206787[_0x1f40aa])['findOne']();if(_0x5d1e49['enabled']()){_0x5d1e49['click']();text('确定')[_0x506f('0xa')]()['click']();toastLog(_0x29f23f+_0x506f('0x50'));sleep(0x320);back();break;}else{toastLog(_0x29f23f+'不在后台运行！');back();break;}}}}else{toastLog('应用不存在');}}threads['start'](function(){events['observeKey']();events['on']('key_down',function(_0x4c286b,_0x23f68e){if(_0x4c286b==keys[_0x506f('0x28')]){toast('退出脚本！');sleep(0x7d0);exit();}});});function 上滑动(){var _0x32fc0b=device['width'];var _0x55f273=device[_0x506f('0x3')];swipe(_0x32fc0b/0x2,_0x55f273/0x2,_0x32fc0b/0x2,_0x55f273/0x4,0x1);}function 下滑动(){var _0x79a088=device[_0x506f('0x17')];var _0x5d2a74=device[_0x506f('0x3')];swipe(_0x79a088/0x2,_0x5d2a74/0x4,_0x79a088/0x2,_0x5d2a74/0x2,0x320);}function 左滑动(){var _0x94771d=device['width'];var _0x2ca123=device[_0x506f('0x3')];swipe(_0x94771d/0x3,_0x2ca123/0x3,_0x94771d/0x8,_0x2ca123/0x3,0x2);}
