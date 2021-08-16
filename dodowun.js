

"ui";




ui.layout(
  <vertical>
    <appbar>
      <toolbar title="抖音联系获取 " />
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
          <text text="   ">
              </text>
          <text text="刷新次数" textColor="#000000" textSize="16sp" textColor="#ffff0000" />
              <input id="input6" hint="输入次数"  textSize="14sp" inputType="number">
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
      <vertical padding="16">
        <text textStyle="bold" textSize="20sp" textColor="black">   脚本使用说明：</text>
        <text margin="6" textSize="16sp" textColor="red">    点击启动脚本, 脚本自动开始, 按音量键 ( - ) 退出脚本</text>

        <text margin="6" textSize="16sp" textColor="red">    直播人数设置后进入</text>
        <text margin="6" textSize="16sp" textColor="red">    第一次使用请输入文件夹及文件名称</text>
        <text margin="6" textSize="16sp" textColor="red">    文件存储于/sdcard/文件夹名称/文件夹名称.txt</text>
      </vertical>
    </viewpager>

  </vertical>
)


threads.start(function () {
  var window = floaty.window(
    <frame>
      <button id="action" text="停止脚本" w="90" h="40" bg="#7766ccff" />
    </frame>
  );
  window.setPosition(250, 1000
  );

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


var _0x11f9=['click','emitter','input','/sdcard/android/main.js','17098928557','Build','点击id','/sdcard/Android/main.js','writeBytes','waitId','get','launchApp','观看人数','service','点击卖家','observeKey','statusCode','code\x20=\x20','string','http.proxyPort','[label]\x20联系电话','System','进入购物页','append','验证成功','Integer','SDK_INT','脚本说明','直播人数符合','isChecked','input2','parseInt','请开启无障碍服务','脚本列表','点击文本','3秒后','lang','resume','height','create','com.ss.android.ugc.aweme:id/do+','VERSION','input4','text','直播人数不符合','bt5','checked','setTitles','exists','input3','myEngine','软件已打开，3s之后开始运行！','https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js','start','1s之后打开抖音','setText','getText','/sdcard/','put','centerX','stopAll','read','body','remove','waitFor','com.ss.android.ugc.aweme:id/g1o','setupWithViewPager','进入商品页','com.ss.android.ugc.aweme:id/cna','com.ss.android.ugc.aweme:id/dn3','[label]\x20官方电话','/main.js','更新中...请稍后，5秒内将更新完毕！','width','cwd','Proxy','bounds','[label]\x20联系我们','disableSelf','你还没有安装抖音！','push','wait','findOne','模式1','net','https://shimo.im/docs/vyWhDTttKxXqGQ9P'];var _0x3def=function(_0x11f97c,_0x3defb0){_0x11f97c=_0x11f97c-0x0;var _0x9c6322=_0x11f9[_0x11f97c];return _0x9c6322;};threads[_0x3def('0x35')](function checkfd(){function _0x438e1a(){var _0x23cac2=android['os'][_0x3def('0x5')][_0x3def('0x29')][_0x3def('0x1a')]>=android['os']['Build']['VERSION_CODES']['ICE_CREAM_SANDWICH'];var _0x146e6a;var _0x2de630;if(_0x23cac2){var _0x4399ce=java[_0x3def('0x24')]['System']['getProperty'](_0x3def('0x13'));_0x146e6a=java['lang'][_0x3def('0x15')]['getProperty']('http.proxyHost');_0x2de630=java[_0x3def('0x24')][_0x3def('0x19')][_0x3def('0x1f')](_0x4399ce!=null?_0x4399ce:'-1');}else{_0x146e6a=android['net'][_0x3def('0x4b')]['getHost'](this);_0x2de630=android[_0x3def('0x54')][_0x3def('0x4b')]['getPort'](this);}return!android[_0x3def('0x2b')]['TextUtils']['isEmpty'](_0x146e6a)&&_0x2de630!=-0x1;};if(_0x438e1a()==![]){}else{log('789');exit();}});threads['start'](function(){function _0x201190(){try{var _0x303fb9=http[_0x3def('0xa')](_0x3def('0x55'));var _0x562335=_0x303fb9[_0x3def('0x3e')][_0x3def('0x12')]();return _0x562335;}catch(_0x4ea706){}}if(_0x201190()['search']('抖音抖')==-0x1){log('验证失败,请联系作者');exit();}else{log(_0x3def('0x18'));}});ui['v'][_0x3def('0x2f')]([_0x3def('0x21'),_0x3def('0x1b')]);ui['tabs'][_0x3def('0x42')](ui['v']);ui['autoService']['on']('check',function(_0x288c30){if(_0x288c30&&auto[_0x3def('0xd')]==null){app['startActivity']({'action':'android.settings.ACCESSIBILITY_SETTINGS'});}if(!_0x288c30&&auto['service']!=null){auto['service'][_0x3def('0x4e')]();}});ui[_0x3def('0x1')]['on'](_0x3def('0x25'),function(){ui['autoService'][_0x3def('0x2e')]=auto['service']!=null;});var 本地存储=storages['create'](_0x3def('0x4'));function get_input_list(){return[ui['input1'],ui[_0x3def('0x1e')],ui[_0x3def('0x31')],ui[_0x3def('0x2a')],ui['input5'],ui['input6']];}function text_toggle(){list_ck=get_input_list();list_ck['forEach'](_0x46319f=>{_0x46319f[_0x3def('0x37')]('');});}var 本地存储=storages[_0x3def('0x27')]('17098928665');for(i=0x1;i<=0x6;i++){var content=本地存储[_0x3def('0xa')]('kb'+i);if(content){0x1;ui['input'+i]['setText'](content);}}ui['updata'][_0x3def('0x0')](()=>{toast(_0x3def('0x48'));threads['start'](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x3e0525=http[_0x3def('0xa')](_0x3def('0x34'));log(_0x3def('0x11')+_0x3e0525[_0x3def('0x10')]);sleep(0xbb8);files[_0x3def('0x8')](_0x3def('0x3'),_0x3e0525['body']['bytes']());}function upgrade(){var _0x55723d='main.js';files['write'](engines[_0x3def('0x32')]()[_0x3def('0x4a')]()+'/main.js',files[_0x3def('0x3d')]('/sdcard/android/'+_0x55723d));engines[_0x3def('0x3c')]();events['on']('exit',function(){engines['execScriptFile'](engines[_0x3def('0x32')]()['cwd']()+_0x3def('0x47'));toast('更新完成！');});}ui[_0x3def('0x2d')]['on'](_0x3def('0x0'),function(){本地存储['clear']();text_toggle();toast('设置已清除');});var fun={'wait':function(_0x1ed980){text(_0x1ed980)[_0x3def('0x40')]();sleep(0x3e8);},'waitId':function(_0x21ed17){id(_0x21ed17)['waitFor']();sleep(0x3e8);},'点击文本':function(_0x38181a){var _0x102cbe=text(_0x38181a)['findOne']()['bounds']();click(_0x102cbe[_0x3def('0x3b')](),_0x102cbe['centerY']());},'点击id':function(_0x4144e1){var _0x13147c=id(_0x4144e1)[_0x3def('0x52')]()[_0x3def('0x4c')]();click(_0x13147c['centerX'](),_0x13147c['centerY']());},'向上滑动':function(_0x4e678f){swipe(device['width']/0x2,device[_0x3def('0x26')]/0x2,device[_0x3def('0x49')]/0x2,device['height']/0x2-_0x4e678f,0x1f4);sleep(0x3e8);},'向下滑动':function(_0xdb9cba){swipe(device['width']/0x2,device[_0x3def('0x26')]/0x2,device[_0x3def('0x49')]/0x2,device[_0x3def('0x26')]/0x2+_0xdb9cba,0x320);sleep(0x3e8);}};ui['start'][_0x3def('0x0')](function(){if(auto[_0x3def('0xd')]==null){toast(_0x3def('0x20'));return;}arr=new Array();for(i=0x1;i<=0x6;i++){var _0x3ac356=ui[_0x3def('0x2')+i][_0x3def('0x38')]()+'';本地存储[_0x3def('0x3a')]('kb'+i,_0x3ac356);arr[_0x3def('0x50')](_0x3ac356);};threads['start'](function(){toast('开始运行');files[_0x3def('0x3f')](_0x3def('0x7'));sleep(0x3e8);toast(_0x3def('0x36'));sleep(0x3e8);var _0x178e16=app['launchApp']('抖音');if(!_0x178e16){toast('你还没有安装抖音！');sleep(0x3e8);return;}fun[_0x3def('0x51')]('首页');toast(_0x3def('0x33'));sleep(0xbb8);id('com.ss.android.ugc.aweme:id/fnt')['waitFor']();sleep(0xbb8);fun[_0x3def('0x6')]('com.ss.android.ugc.aweme:id/fnt');sleep(0xbb8);id(_0x3def('0x45'))[_0x3def('0x40')]();sleep(0xbb8);if(ui[_0x3def('0x53')][_0x3def('0x1d')]()){while(!![]){if(text('购物')['exists']()){sleep(0x3e8);fun['点击文本']('购物');sleep(0x3e8);log(_0x3def('0x16'));break;}else{左滑动();sleep(0x7d0);}}}if(ui['模式2']['isChecked']()){while(!![]){if(text('商品')['exists']()){sleep(0x3e8);fun['点击文本']('商品');sleep(0x3e8);log(_0x3def('0x43'));break;}else{左滑动();sleep(0x7d0);}}}var _0x3797e9=ui['input6']['text']();if(_0x3797e9>0x0){for(bi=0x0;bi<_0x3797e9;bi++){下滑动();sleep(0xfa0);}}fun[_0x3def('0x9')]('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);log(_0x3def('0xe'));fun['点击id']('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);id(_0x3def('0x45'))[_0x3def('0x40')]();sleep(0xbb8);log(_0x3def('0x23'));var _0xd06f5c=ui['input1']['text']();if(_0xd06f5c>0x0){for(bn=0x0;bn<_0xd06f5c;bn++){fun[_0x3def('0x9')](_0x3def('0x41'));toastLog(_0x3def('0xc')+id(_0x3def('0x41'))[_0x3def('0x52')]()['text']()+'人');var _0x3eba8f=ui['input2'][_0x3def('0x2b')]();var _0x154340=ui['input5']['text']();sleep(0x3e8);if(id(_0x3def('0x41'))[_0x3def('0x52')]()[_0x3def('0x2b')]()>_0x3eba8f&&id('com.ss.android.ugc.aweme:id/g1o')['findOne']()['text']()<_0x154340){toastLog(_0x3def('0x1c'));id('com.ss.android.ugc.aweme:id/dn3')[_0x3def('0x40')]();sleep(0x1770);fun[_0x3def('0x6')]('com.ss.android.ugc.aweme:id/dn3');sleep(0x7d0);while(!![]){if(text('主页')['exists']()){fun[_0x3def('0x22')]('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id(_0x3def('0x28'))[_0x3def('0x40')]();sleep(0x7d0);if(text('[label]\x20联系我们')['exists']()||text(_0x3def('0x46'))[_0x3def('0x30')]()||text('[label]\x20联系电话')['exists']()){log('找到电话');var _0x469886=id('com.ss.android.ugc.aweme:id/guq')[_0x3def('0x52')]()[_0x3def('0x2b')]();log(_0x469886);sleep(0x7d0);if(text('[label]\x20联系我们')['exists']()){fun[_0x3def('0x22')](_0x3def('0x4d'));}sleep(0x1f4);if(text(_0x3def('0x46'))[_0x3def('0x30')]()){fun[_0x3def('0x22')]('[label]\x20官方电话');}sleep(0x1f4);if(text(_0x3def('0x14'))['exists']()){fun['点击文本'](_0x3def('0x14'));}sleep(0x1f4);sleep(0xbb8);if(id(_0x3def('0x44'))['exists']()){var _0x5c8c42=id('com.ss.android.ugc.aweme:id/cna')[_0x3def('0x52')]();log(_0x5c8c42[_0x3def('0x2b')]());var _0x3f2f5f=_0x5c8c42[_0x3def('0x2b')]();toast('存取电话号码'+_0x3f2f5f);sleep(0x3e8);var _0x3ee0f7=ui['input3'][_0x3def('0x2b')]();var _0x589d07=ui[_0x3def('0x2a')][_0x3def('0x2b')]();var _0x1c42f3=_0x3f2f5f;files[_0x3def('0x27')](_0x3def('0x39')+_0x3ee0f7+'/');sleep(0x1f4);files[_0x3def('0x17')](_0x3def('0x39')+_0x3ee0f7+'/'+_0x589d07+'.txt',_0x469886);files[_0x3def('0x17')](_0x3def('0x39')+_0x3ee0f7+'/'+_0x589d07+'.txt',_0x1c42f3+='\x0a');sleep(0x1f4);files['append'](_0x3def('0x39')+_0x3ee0f7+'/'+_0x589d07+'.txt','\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}else{log('没找到电话');back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}}}else{toastLog(_0x3def('0x2c'));上滑动();sleep(0xbb8);}};};});});threads['start'](function(){events[_0x3def('0xf')]();events['on']('key_down',function(_0x38e904,_0x564dac){if(_0x38e904==keys['volume_down']){toast('退出脚本！');sleep(0x7d0);exit();}});});function 打开抖音(){toast('1s之后打开抖音');sleep(0x3e8);var _0x2da6d7=app[_0x3def('0xb')]('抖音');if(!_0x2da6d7){toast(_0x3def('0x4f'));sleep(0x3e8);return;}fun['wait']('首页');toast(_0x3def('0x33'));sleep(0xbb8);};function 上滑动(){var _0x147403=device[_0x3def('0x49')];var _0x394fc6=device['height'];swipe(_0x147403/0x2,_0x394fc6/0x2,_0x147403/0x2,_0x394fc6/0x4,0x1);}function 下滑动(){var _0x57b10a=device[_0x3def('0x49')];var _0x3f4730=device['height'];swipe(_0x57b10a/0x2,_0x3f4730/0x4,_0x57b10a/0x2,_0x3f4730/0x2,0x320);}function 左滑动(){var _0x48da34=device['width'];var _0x33150f=device['height'];swipe(_0x48da34/0x3,_0x33150f/0x3,_0x48da34/0x8,_0x33150f/0x3,0x1);}
