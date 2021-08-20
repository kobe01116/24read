

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

var _0xd25b=['getAndroidId','autoService','退出脚本！','security','目前人数\x20:\x20','设置已清除','input13','code\x20=\x20','input11','width','map','height','input8','/sdcard/android/main.js','findOne','emitter','text','激活码错误,请联系作者','statusCode','input1','toString','stopAll','验证失败,请联系作者','com.fvcorp.android.aijiasuclient:id/textStatusContent','volume_down','android.settings.ACCESSIBILITY_SETTINGS','电话段设置','input4','com.ss.android.ugc.aweme:id/guq','click','centerY','不符合人数','抖音抖','setText','input7','checked','/sdcard/','你还没有安装爱加速！','/main.js','input14','[label]\x20联系电话','toHexString','lang','remove','电话符合','write','没找到电话','点击卖家','isChecked','com.ss.android.ugc.aweme:id/g1o','.txt','停止运行','com.ss.android.ugc.aweme:id/cna','textContains','service','wait','centerX','input6','com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle','search','com.fvcorp.android.aijiasuclient:id/buttonOnOff','cwd','input10','模式1','put','check','setupWithViewPager','waitFor','input12','input3','123444555','body','clear','[label]\x20联系我们','bounds','done1','observeKey','com.ss.android.ugc.aweme:id/dn3','软件已打开，3s之后开始运行！','3秒后','input15','waitId','push','StringBuffer','com.ss.android.ugc.aweme:id/fjj','input18','get','getText','append','input5','slice','main.js','length','爱加速','input','exists','create','start','更新完成！','Integer','点击文本','MessageDigest','getBytes','/sdcard/Android/main.js','你还没有安装抖音！','脚本列表','list_ck','已复制手机识别码,请发送给作者','input16','1s之后打开抖音','点击id','找到电话'];var _0x4e49=function(_0xd25b49,_0x4e4958){_0xd25b49=_0xd25b49-0x0;var _0x4b821f=_0xd25b[_0xd25b49];return _0x4b821f;};threads['start'](function(){function _0x566e3f(){try{var _0x21666f=http[_0x4e49('0x56')]('https://shimo.im/docs/vyWhDTttKxXqGQ9P');var _0xc92501=_0x21666f[_0x4e49('0x47')]['string']();return _0xc92501;}catch(_0x560382){}}if(_0x566e3f()['search'](_0x4e49('0x20'))==-0x1){log('验证失败,请联系作者');exit();}else{log('验证成功');}});var 本地存储1=storages['create'](_0x4e49('0x46'));for(i=0x12;i<0x13;i++){var content=本地存储1['get']('kb'+i);if(content){ui[_0x4e49('0x5e')+i]['setText'](content);}}ui['v']['setTitles']([_0x4e49('0x69'),_0x4e49('0x1a'),'激活设备']);ui['tabs'][_0x4e49('0x42')](ui['v']);ui[_0x4e49('0x1')]['on'](_0x4e49('0x41'),function(_0x260b3c){if(_0x260b3c&&auto[_0x4e49('0x36')]==null){app['startActivity']({'action':_0x4e49('0x19')});}if(!_0x260b3c&&auto['service']!=null){auto['service']['disableSelf']();}});ui[_0x4e49('0xf')]['on']('resume',function(){ui[_0x4e49('0x1')]['checked']=auto['service']!=null;});ui['bt2'][_0x4e49('0x1d')](function(){threads[_0x4e49('0x61')](程序3);});function get_input_list(){return[ui['input1'],ui['input2'],ui['input3'],ui[_0x4e49('0x1b')],ui['input5'],ui['input6'],ui[_0x4e49('0x22')],ui['input8'],ui['input9'],ui[_0x4e49('0x3e')],ui[_0x4e49('0x8')],ui['input12'],ui['input13'],ui[_0x4e49('0x27')],ui[_0x4e49('0x50')],ui[_0x4e49('0x6c')],ui['input17']];}function text_toggle(){list_ck=get_input_list();list_ck['forEach'](_0x481f0f=>{_0x481f0f['setText']('');});}arr=new Array();for(i=0x12;i<0x13;i++){var content=ui['input'+i][_0x4e49('0x57')]()+'';本地存储1['put']('kb'+i,content);arr[_0x4e49('0x52')](content);};var 本地存储=storages['create']('444444445565');for(i=0x1;i<=0x11;i++){var content=本地存储['get']('kb'+i);if(content){ui[_0x4e49('0x5e')+i][_0x4e49('0x21')](content);}}function save_opt(){let _0x3047ea=get_check_box_list()[_0x4e49('0xa')](_0x5eeb5a=>_0x5eeb5a['checked']);本地存储['put'](_0x4e49('0x6a'),_0x3047ea);}function load_opt(){let _0x1b96ef=本地存储['get'](_0x4e49('0x6a'),null);if(_0x1b96ef){let _0x35b9f3=get_check_box_list();for(let _0xd119a7=0x0;_0xd119a7<_0x1b96ef[_0x4e49('0x5c')];_0xd119a7++){_0x35b9f3[_0xd119a7][_0x4e49('0x23')]=_0x1b96ef[_0xd119a7];}}}load_opt();function get_check_box_list(){return[ui['done1']];}importClass(java[_0x4e49('0x3')][_0x4e49('0x65')]);function MD5(_0x23623b){try{var _0x9ddb97=MessageDigest['getInstance']('md5');var _0x317a78=_0x9ddb97['digest'](new java['lang']['String'](_0x23623b)[_0x4e49('0x66')]('UTF-8'));var _0x4dddb0=new java[(_0x4e49('0x2a'))][(_0x4e49('0x53'))]();for(let _0x3d7939=0x0;_0x3d7939<_0x317a78[_0x4e49('0x5c')];_0x3d7939++){var _0x5b4597=_0x317a78[_0x3d7939];var _0x1a7fb5=_0x5b4597&0xff;var _0x13fe19=java[_0x4e49('0x2a')][_0x4e49('0x63')][_0x4e49('0x29')](_0x1a7fb5);if(_0x13fe19[_0x4e49('0x5c')]==0x1){_0x4dddb0[_0x4e49('0x58')]('0');}_0x4dddb0[_0x4e49('0x58')](_0x13fe19);}return _0x4dddb0[_0x4e49('0x14')]();}catch(_0x1208a1){alert(_0x1208a1);return'';}}var IMEI=device['getAndroidId']();var strSign=MD5(IMEI+IMEI[_0x4e49('0x5a')](0x4,0x7)*IMEI*0xd431);var kobe335787=strSign;var kobe223198=ui['input18']['getText']();function 程序3(){setClip(IMEI);toastLog(_0x4e49('0x6b'));};function get_check_box_list(){return[ui[_0x4e49('0x4b')]];}ui['updata']['click'](()=>{toast('更新中...请稍后，5秒内将更新完毕！');threads['start'](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x1caad1=http[_0x4e49('0x56')]('https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js');log(_0x4e49('0x7')+_0x1caad1[_0x4e49('0x12')]);sleep(0xbb8);files['writeBytes'](_0x4e49('0xd'),_0x1caad1[_0x4e49('0x47')]['bytes']());}function upgrade(){var _0x20fc68=_0x4e49('0x5b');files[_0x4e49('0x2d')](engines['myEngine']()[_0x4e49('0x3d')]()+_0x4e49('0x26'),files['read']('/sdcard/android/'+_0x20fc68));engines[_0x4e49('0x15')]();events['on']('exit',function(){engines['execScriptFile'](engines['myEngine']()[_0x4e49('0x3d')]()+'/main.js');toast(_0x4e49('0x62'));});}ui['bt4']['on'](_0x4e49('0x1d'),function(){本地存储1[_0x4e49('0x48')]();toast('激活码数据已清除');});ui['bt5']['on']('click',function(){本地存储[_0x4e49('0x48')]();text_toggle();toast(_0x4e49('0x5'));});var fun={'wait':function(_0x45bacd){text(_0x45bacd)['waitFor']();sleep(0x3e8);},'waitId':function(_0x1cc8ee){id(_0x1cc8ee)[_0x4e49('0x43')]();sleep(0x3e8);},'点击文本':function(_0x7cde90){var _0x69c9ce=text(_0x7cde90)[_0x4e49('0xe')]()[_0x4e49('0x4a')]();click(_0x69c9ce['centerX'](),_0x69c9ce[_0x4e49('0x1e')]());},'点击id':function(_0x182b8b){var _0x4de262=id(_0x182b8b)[_0x4e49('0xe')]()['bounds']();click(_0x4de262[_0x4e49('0x38')](),_0x4de262['centerY']());},'向上滑动':function(_0x25391c){swipe(device['width']/0x2,device['height']/0x2,device[_0x4e49('0x9')]/0x2,device[_0x4e49('0xb')]/0x2-_0x25391c,0x1f4);sleep(0x3e8);},'向下滑动':function(_0x52b44a){swipe(device[_0x4e49('0x9')]/0x2,device[_0x4e49('0xb')]/0x2,device[_0x4e49('0x9')]/0x2,device[_0x4e49('0xb')]/0x2+_0x52b44a,0x320);sleep(0x3e8);}};ui['start']['click'](function(){if(auto['service']==null){toast('请开启无障碍服务');return;}arr=new Array();for(i=0x12;i<0x13;i++){var _0x3e9601=ui[_0x4e49('0x5e')+i]['getText']()+'';本地存储1[_0x4e49('0x40')]('kb'+i,_0x3e9601);arr['push'](_0x3e9601);};arr=new Array();for(i=0x1;i<=0x11;i++){var _0x3e9601=ui['input'+i][_0x4e49('0x57')]()+'';本地存储[_0x4e49('0x40')]('kb'+i,_0x3e9601);arr[_0x4e49('0x52')](_0x3e9601);};files[_0x4e49('0x2b')](_0x4e49('0x67'));save_opt();threads[_0x4e49('0x61')](function(){function _0x5b46a8(){try{var _0x31377c=http[_0x4e49('0x56')]('https://shimo.im/docs/kyT3qdJJHJxvKCVJ/');var _0x2ec64e=_0x31377c[_0x4e49('0x47')]['string']();return _0x2ec64e;}catch(_0x3c265e){}}var _0x5749a1=device[_0x4e49('0x0')]();if(_0x5b46a8()[_0x4e49('0x3b')](_0x5749a1)==-0x1){toast(_0x4e49('0x16'));exit();}else{内容1=ui[_0x4e49('0x55')]['text']();}_0x5b46a8();});if(kobe223198!=kobe335787){toast(_0x4e49('0x11'));return;}else{threads['start'](function(){while(!![]){var _0x2da80e=threads['start'](主脚本);sleep(0x3c*ui[_0x4e49('0x22')]['text']()*0x3e8);toastLog(_0x4e49('0x33'));_0x2da80e['interrupt']();killApp('抖音');sleep(0x1f40);打开爱加速();}});}});function 主脚本(){打开抖音();进入直播();判断人数();}function 打开抖音(){toast(_0x4e49('0x6d'));sleep(0x3e8);var _0x38556f=app['launchApp']('抖音');if(!_0x38556f){toast(_0x4e49('0x68'));sleep(0x3e8);return;}fun[_0x4e49('0x37')]('首页');toast(_0x4e49('0x4e'));sleep(0xbb8);};function 进入直播(){id('com.ss.android.ugc.aweme:id/fnt')[_0x4e49('0x43')]();sleep(0xbb8);fun[_0x4e49('0x6e')]('com.ss.android.ugc.aweme:id/fnt');sleep(0xbb8);id('com.ss.android.ugc.aweme:id/dn3')[_0x4e49('0x43')]();sleep(0xbb8);if(ui[_0x4e49('0x3f')]['isChecked']()){while(!![]){if(text('购物')[_0x4e49('0x5f')]()){sleep(0x3e8);fun[_0x4e49('0x64')]('购物');sleep(0xbb8);toastLog('进入购物页');break;}else{左滑动();sleep(0xbb8);}}}if(ui['模式2']['isChecked']()){while(!![]){if(text('语音')[_0x4e49('0x5f')]()){sleep(0x3e8);fun['点击文本']('语音');sleep(0xbb8);toastLog('进入语音页');break;}else{左滑动();sleep(0xbb8);}}}var _0x58cd5c=ui[_0x4e49('0x39')][_0x4e49('0x10')]();if(_0x58cd5c>0x0){for(bi=0x0;bi<_0x58cd5c;bi++){sleep(0x7d0);下滑动();sleep(0x1770);}}fun['waitId'](_0x4e49('0x54'));sleep(0x3e8);log(_0x4e49('0x2f'));fun[_0x4e49('0x6e')]('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);id('com.ss.android.ugc.aweme:id/dn3')[_0x4e49('0x43')]();sleep(0xbb8);log(_0x4e49('0x4f'));}function 判断人数(){var _0x380333=ui[_0x4e49('0x13')]['text']();for(kjh=0x0;kjh<_0x380333;kjh++){fun['waitId'](_0x4e49('0x31'));var _0x1ac5b0=id(_0x4e49('0x31'))['findOne']()['text']();if(id('com.ss.android.ugc.aweme:id/g1o')['textContains']('万')['exists']()){var _0x2eadbd=_0x1ac5b0[_0x4e49('0x5a')](0x0,-0x1)*0x2710;toastLog(_0x2eadbd);sleep(0x3e8);toastLog('目前人数\x20:\x20'+_0x2eadbd+'人');sleep(0x7d0);var _0x151bf9=ui['input2'][_0x4e49('0x10')]();var _0x378348=ui['input5'][_0x4e49('0x10')]();if(_0x2eadbd>_0x151bf9&&_0x2eadbd<_0x378348){toastLog('符合人数');获取电话();}else{toastLog(_0x4e49('0x1f'));上滑动();sleep(0xbb8);}}else{toastLog(_0x4e49('0x4')+_0x1ac5b0+'人');var _0x4f9806=ui['input2'][_0x4e49('0x10')]();var _0xb24613=ui[_0x4e49('0x59')][_0x4e49('0x10')]();if(_0x1ac5b0>_0x4f9806&&_0x1ac5b0<_0xb24613){toastLog('符合人数');获取电话();}else{toastLog(_0x4e49('0x1f'));上滑动();sleep(0xbb8);}}}}function 获取电话(){id(_0x4e49('0x4d'))[_0x4e49('0x43')]();sleep(0x1770);fun['点击id'](_0x4e49('0x4d'));sleep(0x7d0);while(!![]){if(text('主页')[_0x4e49('0x5f')]()){fun[_0x4e49('0x64')]('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id('com.ss.android.ugc.aweme:id/do+')[_0x4e49('0x43')]();sleep(0x7d0);if(text(_0x4e49('0x49'))['exists']()||text('[label]\x20官方电话')[_0x4e49('0x5f')]()||text(_0x4e49('0x28'))['exists']()){log(_0x4e49('0x6f'));var _0x2e8caa=id(_0x4e49('0x1c'))[_0x4e49('0xe')]()['text']();log(_0x2e8caa);sleep(0x7d0);if(text('[label]\x20联系我们')[_0x4e49('0x5f')]()){fun['点击文本'](_0x4e49('0x49'));}sleep(0x1f4);if(text('[label]\x20官方电话')['exists']()){fun[_0x4e49('0x64')]('[label]\x20官方电话');}sleep(0x1f4);if(text('[label]\x20联系电话')['exists']()){fun[_0x4e49('0x64')]('[label]\x20联系电话');}sleep(0xfa0);var _0xa31a60=ui[_0x4e49('0xc')]['text']();var _0x27fa12=ui['input9'][_0x4e49('0x10')]();var _0x50e956=ui[_0x4e49('0x3e')][_0x4e49('0x10')]();var _0x1bf7fb=ui['input11']['text']();var _0x498b5a=ui[_0x4e49('0x44')]['text']();var _0x2937e5=ui[_0x4e49('0x6')][_0x4e49('0x10')]();var _0x3cd48a=ui[_0x4e49('0x27')][_0x4e49('0x10')]();var _0x2b802f=ui[_0x4e49('0x50')]['text']();var _0x42a76c=ui[_0x4e49('0x6c')]['text']();var _0x5eec7f=ui['input17'][_0x4e49('0x10')]();function _0x51f95f(){var _0x28c9ee=id(_0x4e49('0x34'))['findOne']();log(_0x28c9ee[_0x4e49('0x10')]());var _0x179d1c=_0x28c9ee[_0x4e49('0x10')]();toastLog(_0x4e49('0x2c'));toast('存取电话号码'+_0x179d1c);sleep(0x3e8);var _0x512903=ui[_0x4e49('0x45')][_0x4e49('0x10')]();var _0x547cbc=ui['input4'][_0x4e49('0x10')]();var _0x27787a=_0x179d1c;if(ui['done1'][_0x4e49('0x30')]()){if(id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0xa31a60)||id(_0x4e49('0x34'))['textContains'](_0x27fa12)||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x50e956)||id(_0x4e49('0x34'))[_0x4e49('0x35')](_0x1bf7fb)||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x498b5a)||id(_0x4e49('0x34'))[_0x4e49('0x35')](_0x2937e5)||id(_0x4e49('0x34'))['textContains'](_0x3cd48a)||id('com.ss.android.ugc.aweme:id/cna')[_0x4e49('0x35')](_0x2b802f)||id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x42a76c)||id(_0x4e49('0x34'))[_0x4e49('0x35')](_0x5eec7f)){files['create']('/sdcard/'+_0x512903+'/');sleep(0x1f4);files['append'](_0x4e49('0x24')+_0x512903+'/'+_0x547cbc+'.txt',_0x2e8caa);files[_0x4e49('0x58')](_0x4e49('0x24')+_0x512903+'/'+_0x547cbc+'.txt',_0x27787a+='\x0a');sleep(0x1f4);files[_0x4e49('0x58')]('/sdcard/'+_0x512903+'/'+_0x547cbc+'.txt','\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}else{log(_0x4e49('0x2e'));while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{files[_0x4e49('0x60')]('/sdcard/'+_0x512903+'/');sleep(0x1f4);files['append'](_0x4e49('0x24')+_0x512903+'/'+_0x547cbc+'.txt',_0x2e8caa);files[_0x4e49('0x58')](_0x4e49('0x24')+_0x512903+'/'+_0x547cbc+'.txt',_0x27787a+='\x0a');sleep(0x1f4);files['append']('/sdcard/'+_0x512903+'/'+_0x547cbc+_0x4e49('0x32'),'\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}}if(id(_0x4e49('0x34'))['exists']()){_0x51f95f();}else{log(_0x4e49('0x2e'));while(!![]){if(id(_0x4e49('0x4d'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{log('没找到电话');while(!![]){if(id(_0x4e49('0x4d'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}function 打开爱加速(){toast('1s之后打开爱加速');sleep(0x3e8);var _0x13e7e9=app['launchApp'](_0x4e49('0x5d'));if(!_0x13e7e9){toast(_0x4e49('0x25'));sleep(0x3e8);return;}fun[_0x4e49('0x51')]('com.fvcorp.android.aijiasuclient:id/textStatusContent');toast(_0x4e49('0x4e'));sleep(0xbb8);while(!![]){if(text('点击连接')[_0x4e49('0x5f')]()){fun[_0x4e49('0x6e')](_0x4e49('0x3c'));sleep(0x7d0);break;}else{fun['点击id']('com.fvcorp.android.aijiasuclient:id/buttonOnOff');sleep(0x7d0);fun['点击id'](_0x4e49('0x3a'));sleep(0x7d0);fun['waitId']('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun['点击id']('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun[_0x4e49('0x51')](_0x4e49('0x17'));sleep(0x7d0);break;}}}function killApp(_0x588dbf){let _0x1f1e91=['停','强','结束'];let _0x47876e=app['getPackageName'](_0x588dbf);if(_0x47876e){app['openAppSetting'](_0x47876e);text(_0x588dbf)[_0x4e49('0x43')]();for(var _0x2e46ed=0x0;_0x2e46ed<_0x1f1e91['length'];_0x2e46ed++){if(textContains(_0x1f1e91[_0x2e46ed])['exists']()){let _0x3c4fa4=textContains(_0x1f1e91[_0x2e46ed])[_0x4e49('0xe')]();if(_0x3c4fa4['enabled']()){_0x3c4fa4[_0x4e49('0x1d')]();text('确定')[_0x4e49('0xe')]()[_0x4e49('0x1d')]();toastLog(_0x588dbf+'已结束运行');sleep(0x320);back();break;}else{toastLog(_0x588dbf+'不在后台运行！');back();break;}}}}else{toastLog('应用不存在');}}threads[_0x4e49('0x61')](function(){events[_0x4e49('0x4c')]();events['on']('key_down',function(_0x5d8145,_0x17d41d){if(_0x5d8145==keys[_0x4e49('0x18')]){toast(_0x4e49('0x2'));sleep(0x7d0);exit();}});});function 上滑动(){var _0x24636f=device['width'];var _0x433d87=device['height'];swipe(_0x24636f/0x2,_0x433d87/0x2,_0x24636f/0x2,_0x433d87/0x4,0x1);}function 下滑动(){var _0x3b1ca2=device[_0x4e49('0x9')];var _0x3c11f9=device[_0x4e49('0xb')];swipe(_0x3b1ca2/0x2,_0x3c11f9/0x4,_0x3b1ca2/0x2,_0x3c11f9/0x2,0x320);}function 左滑动(){var _0x2ddcfb=device['width'];var _0x429c60=device[_0x4e49('0xb')];swipe(_0x2ddcfb/0x2,_0x429c60/0x4,_0x2ddcfb/0x8,_0x429c60/0x4,0x19);}
