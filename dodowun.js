

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

          <text text="   ">
          </text>
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
        <vertical padding="16">
          <text textStyle="bold" textSize="20sp" textColor="black">   脚本使用说明：</text>
          <text margin="6" textSize="16sp" textColor="red">    点击启动脚本, 脚本自动开始, 按音量键 ( - ) 退出脚本</text>

          <text margin="6" textSize="16sp" textColor="red">    直播人数设置后进入</text>
          <text margin="6" textSize="16sp" textColor="red">    第一次使用请输入文件夹及文件名称</text>
          <text margin="6" textSize="16sp" textColor="red">    文件存储于/sdcard/文件夹名称/文件夹名称.txt</text>
        </vertical>
      </ScrollView>


      <ScrollView>
        <vertical padding="16">
          <text textStyle="bold" textSize="20sp" textColor="black">   脚本使用说明：</text>
          <text margin="6" textSize="16sp" textColor="red">    点击启动脚本, 脚本自动开始, 按音量键 ( - ) 退出脚本</text>

          <text margin="6" textSize="16sp" textColor="red">    直播人数设置后进入</text>
          <text margin="6" textSize="16sp" textColor="red">    第一次使用请输入文件夹及文件名称</text>
          <text margin="6" textSize="16sp" textColor="red">    文件存储于/sdcard/文件夹名称/文件夹名称.txt</text>
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

var _0x2793=['com.ss.android.ugc.aweme:id/cna','width','/sdcard/android/main.js','exit','input10','height','bytes','电话符合','点击id','170989665','code\x20=\x20','length','service','updata','main.js','爱加速','waitFor','waitId','应用不存在','input16','不符合人数','脚本列表','[label]\x20联系我们','input2','找到电话','forEach','setTitles','append','observeKey','text','resume','input8','https://shimo.im/docs/vyWhDTttKxXqGQ9P','exists','com.ss.android.ugc.aweme:id/dn3','emitter','interrupt','/sdcard/','read','bounds','check','textContains','android.settings.ACCESSIBILITY_SETTINGS','get','input6','com.fvcorp.android.aijiasuclient:id/layoutRandomConnection','验证成功','com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle','slice','input12','centerX','findOne','cwd','input5','list_ck','模式1','电话段设置','目前人数\x20:\x20','setText','没找到电话','writeBytes','input7','input17','.txt','isChecked','input4','search','点击文本','click','[label]\x20官方电话','myEngine','com.fvcorp.android.aijiasuclient:id/textStatusContent','设置已清除','input15','进入语音页','stopAll','存取电话号码','start','/sdcard/android/','1s之后打开爱加速','key_down','statusCode','[label]\x20联系电话','停止运行','done1','centerY','input3','checked','write','com.ss.android.ugc.aweme:id/g1o','抖音抖','input','input14'];var _0x3f4d=function(_0x2793e4,_0x3f4dce){_0x2793e4=_0x2793e4-0x0;var _0x1e0ecd=_0x2793[_0x2793e4];return _0x1e0ecd;};threads[_0x3f4d('0x4d')](function(){function _0x102502(){try{var _0xf756f2=http['get'](_0x3f4d('0x20'));var _0x559761=_0xf756f2['body']['string']();return _0x559761;}catch(_0x437dd4){}}if(_0x102502()[_0x3f4d('0x42')](_0x3f4d('0x5a'))==-0x1){log('验证失败,请联系作者');exit();}else{log(_0x3f4d('0x2e'));}});ui['v'][_0x3f4d('0x1a')]([_0x3f4d('0x15'),_0x3f4d('0x38'),'脚本说明']);ui['tabs']['setupWithViewPager'](ui['v']);ui['autoService']['on'](_0x3f4d('0x28'),function(_0x2e56bb){if(_0x2e56bb&&auto[_0x3f4d('0xc')]==null){app['startActivity']({'action':_0x3f4d('0x2a')});}if(!_0x2e56bb&&auto[_0x3f4d('0xc')]!=null){auto[_0x3f4d('0xc')]['disableSelf']();}});ui[_0x3f4d('0x23')]['on'](_0x3f4d('0x1e'),function(){ui['autoService'][_0x3f4d('0x57')]=auto[_0x3f4d('0xc')]!=null;});function get_input_list(){return[ui['input1'],ui[_0x3f4d('0x17')],ui[_0x3f4d('0x56')],ui[_0x3f4d('0x41')],ui[_0x3f4d('0x35')],ui['input6'],ui[_0x3f4d('0x3d')],ui[_0x3f4d('0x1f')],ui['input9'],ui[_0x3f4d('0x4')],ui['input11'],ui['input12'],ui['input13'],ui[_0x3f4d('0x5c')],ui['input15'],ui['input16'],ui[_0x3f4d('0x3e')]];}function text_toggle(){list_ck=get_input_list();list_ck[_0x3f4d('0x19')](_0x43b92f=>{_0x43b92f['setText']('');});}var 本地存储=storages['create'](_0x3f4d('0x9'));for(i=0x1;i<=0x12;i++){var content=本地存储[_0x3f4d('0x2b')]('kb'+i);if(content){ui[_0x3f4d('0x5b')+i][_0x3f4d('0x3a')](content);}}function save_opt(){let _0x486bc1=get_check_box_list()['map'](_0x4dcf63=>_0x4dcf63['checked']);本地存储['put']('list_ck',_0x486bc1);}function load_opt(){let _0x7c04ab=本地存储['get'](_0x3f4d('0x36'),null);if(_0x7c04ab){let _0x3c0b50=get_check_box_list();for(let _0x30267a=0x0;_0x30267a<_0x7c04ab[_0x3f4d('0xb')];_0x30267a++){_0x3c0b50[_0x30267a][_0x3f4d('0x57')]=_0x7c04ab[_0x30267a];}}}load_opt();function get_check_box_list(){return[ui[_0x3f4d('0x54')]];}ui[_0x3f4d('0xd')][_0x3f4d('0x44')](()=>{toast('更新中...请稍后，5秒内将更新完毕！');threads[_0x3f4d('0x4d')](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x2b8a1a=http['get']('https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js');log(_0x3f4d('0xa')+_0x2b8a1a[_0x3f4d('0x51')]);sleep(0xbb8);files[_0x3f4d('0x3c')](_0x3f4d('0x2'),_0x2b8a1a['body'][_0x3f4d('0x6')]());}function upgrade(){var _0x14a3f3=_0x3f4d('0xe');files[_0x3f4d('0x58')](engines[_0x3f4d('0x46')]()['cwd']()+'/main.js',files[_0x3f4d('0x26')](_0x3f4d('0x4e')+_0x14a3f3));engines[_0x3f4d('0x4b')]();events['on'](_0x3f4d('0x3'),function(){engines['execScriptFile'](engines['myEngine']()[_0x3f4d('0x34')]()+'/main.js');toast('更新完成！');});}ui['bt5']['on']('click',function(){本地存储['clear']();text_toggle();toast(_0x3f4d('0x48'));});var fun={'wait':function(_0x4f6c01){text(_0x4f6c01)[_0x3f4d('0x10')]();sleep(0x3e8);},'waitId':function(_0x230e96){id(_0x230e96)[_0x3f4d('0x10')]();sleep(0x3e8);},'点击文本':function(_0x416267){var _0x41a9d9=text(_0x416267)['findOne']()[_0x3f4d('0x27')]();click(_0x41a9d9[_0x3f4d('0x32')](),_0x41a9d9['centerY']());},'点击id':function(_0x4ab550){var _0x27f85c=id(_0x4ab550)[_0x3f4d('0x33')]()['bounds']();click(_0x27f85c['centerX'](),_0x27f85c[_0x3f4d('0x55')]());},'向上滑动':function(_0x1b8e1f){swipe(device['width']/0x2,device[_0x3f4d('0x5')]/0x2,device[_0x3f4d('0x1')]/0x2,device[_0x3f4d('0x5')]/0x2-_0x1b8e1f,0x1f4);sleep(0x3e8);},'向下滑动':function(_0x318112){swipe(device[_0x3f4d('0x1')]/0x2,device[_0x3f4d('0x5')]/0x2,device[_0x3f4d('0x1')]/0x2,device[_0x3f4d('0x5')]/0x2+_0x318112,0x320);sleep(0x3e8);}};ui[_0x3f4d('0x4d')]['click'](function(){if(auto['service']==null){toast('请开启无障碍服务');return;}arr=new Array();for(i=0x1;i<=0x11;i++){var _0x28073=ui[_0x3f4d('0x5b')+i]['getText']()+'';本地存储['put']('kb'+i,_0x28073);arr['push'](_0x28073);};files['remove']('/sdcard/Android/main.js');save_opt();threads[_0x3f4d('0x4d')](function(){while(!![]){var _0x4ceffa=threads['start'](主脚本);sleep(0x3c*ui['input7'][_0x3f4d('0x1d')]()*0x3e8);toastLog(_0x3f4d('0x53'));_0x4ceffa[_0x3f4d('0x24')]();killApp('抖音');sleep(0x1f40);打开爱加速();}});});function 主脚本(){打开抖音();进入直播();判断人数();}function 打开抖音(){toast('1s之后打开抖音');sleep(0x3e8);var _0x2bf8b6=app['launchApp']('抖音');if(!_0x2bf8b6){toast('你还没有安装抖音！');sleep(0x3e8);return;}fun['wait']('首页');toast('软件已打开，3s之后开始运行！');sleep(0xbb8);};function 进入直播(){id('com.ss.android.ugc.aweme:id/fnt')['waitFor']();sleep(0xbb8);fun['点击id']('com.ss.android.ugc.aweme:id/fnt');sleep(0xbb8);id('com.ss.android.ugc.aweme:id/dn3')[_0x3f4d('0x10')]();sleep(0xbb8);if(ui[_0x3f4d('0x37')]['isChecked']()){while(!![]){if(text('购物')['exists']()){sleep(0x3e8);fun['点击文本']('购物');sleep(0xbb8);toastLog('进入购物页');break;}else{左滑动();sleep(0xbb8);}}}if(ui['模式2'][_0x3f4d('0x40')]()){while(!![]){if(text('语音')['exists']()){sleep(0x3e8);fun['点击文本']('语音');sleep(0xbb8);toastLog(_0x3f4d('0x4a'));break;}else{左滑动();sleep(0xbb8);}}}var _0x1b19eb=ui[_0x3f4d('0x2c')][_0x3f4d('0x1d')]();if(_0x1b19eb>0x0){for(bi=0x0;bi<_0x1b19eb;bi++){sleep(0x7d0);下滑动();sleep(0xfa0);}}fun[_0x3f4d('0x11')]('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);log('点击卖家');fun[_0x3f4d('0x8')]('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);id(_0x3f4d('0x22'))[_0x3f4d('0x10')]();sleep(0xbb8);log('3秒后');}function 判断人数(){var _0x4975cc=ui['input1'][_0x3f4d('0x1d')]();for(kjh=0x0;kjh<_0x4975cc;kjh++){fun['waitId']('com.ss.android.ugc.aweme:id/g1o');var _0x27e1fd=id(_0x3f4d('0x59'))['findOne']()[_0x3f4d('0x1d')]();if(id(_0x3f4d('0x59'))[_0x3f4d('0x29')]('万')['exists']()){var _0x5ac4da=_0x27e1fd[_0x3f4d('0x30')](0x0,-0x1)*0x2710;toastLog(_0x5ac4da);sleep(0x3e8);toastLog(_0x3f4d('0x39')+_0x5ac4da+'人');sleep(0x7d0);var _0x517696=ui['input2'][_0x3f4d('0x1d')]();var _0x113b0e=ui['input5']['text']();if(_0x5ac4da>_0x517696&&_0x5ac4da<_0x113b0e){toastLog('符合人数');获取电话();}else{toastLog(_0x3f4d('0x14'));上滑动();sleep(0xbb8);}}else{toastLog(_0x3f4d('0x39')+_0x27e1fd+'人');var _0x41290e=ui[_0x3f4d('0x17')][_0x3f4d('0x1d')]();var _0x25c3f5=ui['input5']['text']();if(_0x27e1fd>_0x41290e&&_0x27e1fd<_0x25c3f5){toastLog('符合人数');获取电话();}else{toastLog(_0x3f4d('0x14'));上滑动();sleep(0xbb8);}}}}function 获取电话(){id(_0x3f4d('0x22'))[_0x3f4d('0x10')]();sleep(0x1770);fun[_0x3f4d('0x8')](_0x3f4d('0x22'));sleep(0x7d0);while(!![]){if(text('主页')['exists']()){fun['点击文本']('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id('com.ss.android.ugc.aweme:id/do+')[_0x3f4d('0x10')]();sleep(0x7d0);if(text('[label]\x20联系我们')['exists']()||text('[label]\x20官方电话')[_0x3f4d('0x21')]()||text(_0x3f4d('0x52'))['exists']()){log(_0x3f4d('0x18'));var _0x5e62c3=id('com.ss.android.ugc.aweme:id/guq')[_0x3f4d('0x33')]()['text']();log(_0x5e62c3);sleep(0x7d0);if(text('[label]\x20联系我们')[_0x3f4d('0x21')]()){fun[_0x3f4d('0x43')](_0x3f4d('0x16'));}sleep(0x1f4);if(text(_0x3f4d('0x45'))['exists']()){fun['点击文本']('[label]\x20官方电话');}sleep(0x1f4);if(text('[label]\x20联系电话')[_0x3f4d('0x21')]()){fun[_0x3f4d('0x43')](_0x3f4d('0x52'));}sleep(0x1f4);sleep(0xbb8);if(id(_0x3f4d('0x0'))[_0x3f4d('0x21')]()){var _0x4f01e7=id(_0x3f4d('0x0'))[_0x3f4d('0x33')]();log(_0x4f01e7[_0x3f4d('0x1d')]());var _0x344db6=_0x4f01e7[_0x3f4d('0x1d')]();if(ui['done1'][_0x3f4d('0x40')]()){var _0x436ce9=ui[_0x3f4d('0x1f')][_0x3f4d('0x1d')]();var _0x5a8950=ui['input9']['text']();var _0x5a002d=ui[_0x3f4d('0x4')][_0x3f4d('0x1d')]();var _0x453486=ui['input11'][_0x3f4d('0x1d')]();var _0x3f1f63=ui[_0x3f4d('0x31')][_0x3f4d('0x1d')]();var _0x42c83b=ui['input13'][_0x3f4d('0x1d')]();var _0x508d6e=ui['input14']['text']();var _0x527493=ui[_0x3f4d('0x49')]['text']();var _0x3b7dae=ui[_0x3f4d('0x13')]['text']();var _0x5de1b=ui[_0x3f4d('0x3e')][_0x3f4d('0x1d')]();if(id(_0x3f4d('0x0'))['textContains'](_0x436ce9)){toastLog('电话符合');_0x22fcdc();}if(id(_0x3f4d('0x0'))['textContains'](_0x5a8950)){toastLog(_0x3f4d('0x7'));_0x22fcdc();}if(id(_0x3f4d('0x0'))['textContains'](_0x5a002d)){toastLog(_0x3f4d('0x7'));_0x22fcdc();}if(id(_0x3f4d('0x0'))['textContains'](_0x453486)){toastLog(_0x3f4d('0x7'));_0x22fcdc();}if(id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x3f1f63)){toastLog('电话符合');_0x22fcdc();}if(id(_0x3f4d('0x0'))[_0x3f4d('0x29')](_0x42c83b)){toastLog(_0x3f4d('0x7'));_0x22fcdc();}if(id(_0x3f4d('0x0'))['textContains'](_0x508d6e)){toastLog(_0x3f4d('0x7'));_0x22fcdc();}if(id('com.ss.android.ugc.aweme:id/cna')[_0x3f4d('0x29')](_0x527493)){toastLog('电话符合');_0x22fcdc();}if(id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x3b7dae)){toastLog(_0x3f4d('0x7'));_0x22fcdc();}if(id('com.ss.android.ugc.aweme:id/cna')[_0x3f4d('0x29')](_0x5de1b)){toastLog(_0x3f4d('0x7'));_0x22fcdc();}}else{toastLog(_0x3f4d('0x7'));_0x22fcdc();}function _0x22fcdc(){toast(_0x3f4d('0x4c')+_0x344db6);sleep(0x3e8);var _0xa6b423=ui[_0x3f4d('0x56')][_0x3f4d('0x1d')]();var _0x4211f2=ui[_0x3f4d('0x41')]['text']();var _0x4d2914=_0x344db6;files['create'](_0x3f4d('0x25')+_0xa6b423+'/');sleep(0x1f4);files[_0x3f4d('0x1b')]('/sdcard/'+_0xa6b423+'/'+_0x4211f2+_0x3f4d('0x3f'),_0x5e62c3);files[_0x3f4d('0x1b')]('/sdcard/'+_0xa6b423+'/'+_0x4211f2+'.txt',_0x4d2914+='\x0a');sleep(0x1f4);files['append']('/sdcard/'+_0xa6b423+'/'+_0x4211f2+_0x3f4d('0x3f'),'\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}}else{log(_0x3f4d('0x3b'));while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{log(_0x3f4d('0x3b'));while(!![]){if(id(_0x3f4d('0x22'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}};function 打开爱加速(){toast(_0x3f4d('0x4f'));sleep(0x3e8);var _0x411d14=app['launchApp'](_0x3f4d('0xf'));if(!_0x411d14){toast('你还没有安装爱加速！');sleep(0x3e8);return;}fun['waitId'](_0x3f4d('0x47'));toast('软件已打开，3s之后开始运行！');sleep(0xbb8);while(!![]){if(text('点击连接')['exists']()){fun['点击id']('com.fvcorp.android.aijiasuclient:id/buttonOnOff');sleep(0x7d0);break;}else{fun['点击id']('com.fvcorp.android.aijiasuclient:id/buttonOnOff');sleep(0x7d0);fun['点击id'](_0x3f4d('0x2f'));sleep(0x7d0);fun[_0x3f4d('0x11')]('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun['点击id'](_0x3f4d('0x2d'));sleep(0x7d0);fun['waitId'](_0x3f4d('0x47'));sleep(0x7d0);break;}}}function killApp(_0x182784){let _0x2cbadf=['停','强','结束'];let _0x27d0d5=app['getPackageName'](_0x182784);if(_0x27d0d5){app['openAppSetting'](_0x27d0d5);text(_0x182784)['waitFor']();for(var _0x1fa6ce=0x0;_0x1fa6ce<_0x2cbadf['length'];_0x1fa6ce++){if(textContains(_0x2cbadf[_0x1fa6ce])['exists']()){let _0x32e5c4=textContains(_0x2cbadf[_0x1fa6ce])[_0x3f4d('0x33')]();if(_0x32e5c4['enabled']()){_0x32e5c4['click']();text('确定')['findOne']()['click']();toastLog(_0x182784+'已结束运行');sleep(0x320);back();break;}else{toastLog(_0x182784+'不在后台运行！');back();break;}}}}else{toastLog(_0x3f4d('0x12'));}}threads[_0x3f4d('0x4d')](function(){events[_0x3f4d('0x1c')]();events['on'](_0x3f4d('0x50'),function(_0x2e030a,_0x4f1aed){if(_0x2e030a==keys['volume_down']){toast('退出脚本！');sleep(0x7d0);exit();}});});function 上滑动(){var _0x3b1c37=device['width'];var _0xb70409=device[_0x3f4d('0x5')];swipe(_0x3b1c37/0x2,_0xb70409/0x2,_0x3b1c37/0x2,_0xb70409/0x4,0x1);}function 下滑动(){var _0x381732=device['width'];var _0x5c2bdf=device['height'];swipe(_0x381732/0x2,_0x5c2bdf/0x4,_0x381732/0x2,_0x5c2bdf/0x2,0x320);}function 左滑动(){var _0x4c609a=device['width'];var _0x4f0a78=device[_0x3f4d('0x5')];swipe(_0x4c609a/0x3,_0x4f0a78/0x3,_0x4c609a/0x8,_0x4f0a78/0x3,0x1);}
