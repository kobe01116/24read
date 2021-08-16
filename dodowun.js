

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


var _0x491a=['验证成功','parseInt','com.ss.android.ugc.aweme:id/dn3','脚本说明','软件已打开，3s之后开始运行！','waitFor','/sdcard/android/','create','resume','[label]\x20联系我们','height','bt5','脚本列表','input','com.ss.android.ugc.aweme:id/g1o','stopAll','Build','1s之后打开抖音','centerY','setText','com.ss.android.ugc.aweme:id/guq','bytes','append','write','writeBytes','cwd','wait','autoService','input6','input2','[label]\x20官方电话','check','search','body','get','VERSION','width','Proxy','string','bounds','findOne','waitId','code\x20=\x20','lang','isEmpty','com.ss.android.ugc.aweme:id/do+','input3','start','service','exists','com.ss.android.ugc.aweme:id/fnt','net','centerX','key_down','forEach','launchApp','ICE_CREAM_SANDWICH','TextUtils','http.proxyPort','com.ss.android.ugc.aweme:id/fjj','进入商品页','System','/sdcard/','17098928665','updata','isChecked','SDK_INT','observeKey','myEngine','设置已清除','.txt','观看人数','模式2','text','退出脚本！','点击文本','getText','input5','/main.js'];var _0x2caf=function(_0x491a54,_0x2caf80){_0x491a54=_0x491a54-0x0;var _0x239070=_0x491a[_0x491a54];return _0x239070;};threads[_0x2caf('0x2f')](function checkfd(){function _0x188d09(){var _0x3cec21=android['os'][_0x2caf('0x10')][_0x2caf('0x23')][_0x2caf('0x42')]>=android['os']['Build']['VERSION_CODES'][_0x2caf('0x38')];var _0x320656;var _0x1b2097;if(_0x3cec21){var _0x39680d=java[_0x2caf('0x2b')][_0x2caf('0x3d')]['getProperty'](_0x2caf('0x3a'));_0x320656=java['lang'][_0x2caf('0x3d')]['getProperty']('http.proxyHost');_0x1b2097=java[_0x2caf('0x2b')]['Integer'][_0x2caf('0x1')](_0x39680d!=null?_0x39680d:'-1');}else{_0x320656=android[_0x2caf('0x33')][_0x2caf('0x25')]['getHost'](this);_0x1b2097=android[_0x2caf('0x33')][_0x2caf('0x25')]['getPort'](this);}return!android[_0x2caf('0x49')][_0x2caf('0x39')][_0x2caf('0x2c')](_0x320656)&&_0x1b2097!=-0x1;};if(_0x188d09()==![]){}else{log('789');exit();}});threads['start'](function(){function _0x5e94c2(){try{var _0x249f7a=http[_0x2caf('0x22')]('https://shimo.im/docs/vyWhDTttKxXqGQ9P');var _0x41bb43=_0x249f7a[_0x2caf('0x21')][_0x2caf('0x26')]();return _0x41bb43;}catch(_0x3db338){}}if(_0x5e94c2()[_0x2caf('0x20')]('抖音抖')==-0x1){log('验证失败,请联系作者');exit();}else{log(_0x2caf('0x0'));}});ui['v']['setTitles']([_0x2caf('0xc'),_0x2caf('0x3')]);ui['tabs']['setupWithViewPager'](ui['v']);ui[_0x2caf('0x1b')]['on'](_0x2caf('0x1f'),function(_0x2b38a7){if(_0x2b38a7&&auto['service']==null){app['startActivity']({'action':'android.settings.ACCESSIBILITY_SETTINGS'});}if(!_0x2b38a7&&auto[_0x2caf('0x30')]!=null){auto[_0x2caf('0x30')]['disableSelf']();}});ui['emitter']['on'](_0x2caf('0x8'),function(){ui['autoService']['checked']=auto['service']!=null;});var 本地存储=storages[_0x2caf('0x7')]('17098928557');function get_input_list(){return[ui['input1'],ui['input2'],ui[_0x2caf('0x2e')],ui['input4'],ui[_0x2caf('0x4d')],ui[_0x2caf('0x1c')]];}function text_toggle(){list_ck=get_input_list();list_ck[_0x2caf('0x36')](_0x2e7a4a=>{_0x2e7a4a[_0x2caf('0x13')]('');});}var 本地存储=storages[_0x2caf('0x7')](_0x2caf('0x3f'));for(i=0x1;i<=0x6;i++){var content=本地存储[_0x2caf('0x22')]('kb'+i);if(content){0x1;ui['input'+i]['setText'](content);}}ui[_0x2caf('0x40')]['click'](()=>{toast('更新中...请稍后，5秒内将更新完毕！');threads[_0x2caf('0x2f')](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x32c180=http['get']('https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js');log(_0x2caf('0x2a')+_0x32c180['statusCode']);sleep(0xbb8);files[_0x2caf('0x18')]('/sdcard/android/main.js',_0x32c180['body'][_0x2caf('0x15')]());}function upgrade(){var _0x5671a8='main.js';files[_0x2caf('0x17')](engines['myEngine']()[_0x2caf('0x19')]()+'/main.js',files['read'](_0x2caf('0x6')+_0x5671a8));engines[_0x2caf('0xf')]();events['on']('exit',function(){engines['execScriptFile'](engines[_0x2caf('0x44')]()[_0x2caf('0x19')]()+_0x2caf('0x4e'));toast('更新完成！');});}ui[_0x2caf('0xb')]['on']('click',function(){本地存储['clear']();text_toggle();toast(_0x2caf('0x45'));});var fun={'wait':function(_0x24519a){text(_0x24519a)['waitFor']();sleep(0x3e8);},'waitId':function(_0x1e0fce){id(_0x1e0fce)[_0x2caf('0x5')]();sleep(0x3e8);},'点击文本':function(_0xbc8147){var _0x3cd9d8=text(_0xbc8147)['findOne']()[_0x2caf('0x27')]();click(_0x3cd9d8['centerX'](),_0x3cd9d8['centerY']());},'点击id':function(_0x63f480){var _0x2db922=id(_0x63f480)[_0x2caf('0x28')]()['bounds']();click(_0x2db922[_0x2caf('0x34')](),_0x2db922[_0x2caf('0x12')]());},'向上滑动':function(_0x4cf6af){swipe(device['width']/0x2,device['height']/0x2,device['width']/0x2,device[_0x2caf('0xa')]/0x2-_0x4cf6af,0x1f4);sleep(0x3e8);},'向下滑动':function(_0x29f36e){swipe(device['width']/0x2,device['height']/0x2,device[_0x2caf('0x24')]/0x2,device['height']/0x2+_0x29f36e,0x320);sleep(0x3e8);}};ui['start']['click'](function(){if(auto[_0x2caf('0x30')]==null){toast('请开启无障碍服务');return;}arr=new Array();for(i=0x1;i<=0x6;i++){var _0x406802=ui[_0x2caf('0xd')+i][_0x2caf('0x4c')]()+'';本地存储['put']('kb'+i,_0x406802);arr['push'](_0x406802);};threads['start'](function(){toast('开始运行');files['remove']('/sdcard/Android/main.js');sleep(0x3e8);toast(_0x2caf('0x11'));sleep(0x3e8);var _0x5e8840=app[_0x2caf('0x37')]('抖音');if(!_0x5e8840){toast('你还没有安装抖音！');sleep(0x3e8);return;}fun[_0x2caf('0x1a')]('首页');toast(_0x2caf('0x4'));sleep(0xbb8);id(_0x2caf('0x32'))['waitFor']();sleep(0xbb8);fun['点击id'](_0x2caf('0x32'));sleep(0xbb8);id('com.ss.android.ugc.aweme:id/dn3')[_0x2caf('0x5')]();sleep(0xbb8);if(ui['模式1'][_0x2caf('0x41')]()){while(!![]){if(text('购物')['exists']()){sleep(0x3e8);fun[_0x2caf('0x4b')]('购物');sleep(0x3e8);log('进入购物页');break;}else{左滑动();sleep(0x7d0);}}}if(ui[_0x2caf('0x48')][_0x2caf('0x41')]()){while(!![]){if(text('商品')['exists']()){sleep(0x3e8);fun['点击文本']('商品');sleep(0x3e8);log(_0x2caf('0x3c'));break;}else{左滑动();sleep(0x7d0);}}}var _0x43b066=ui['input6'][_0x2caf('0x49')]();if(_0x43b066>0x0){for(bi=0x0;bi<_0x43b066;bi++){下滑动();sleep(0xfa0);}}fun[_0x2caf('0x29')](_0x2caf('0x3b'));sleep(0x3e8);log('点击卖家');fun['点击id'](_0x2caf('0x3b'));sleep(0x3e8);id(_0x2caf('0x2'))['waitFor']();sleep(0xbb8);log('3秒后');var _0x3c075b=ui['input1'][_0x2caf('0x49')]();if(_0x3c075b>0x0){for(bn=0x0;bn<_0x3c075b;bn++){fun['waitId'](_0x2caf('0xe'));toastLog(_0x2caf('0x47')+id('com.ss.android.ugc.aweme:id/g1o')[_0x2caf('0x28')]()[_0x2caf('0x49')]()+'人');var _0x107e00=ui[_0x2caf('0x1d')]['text']();var _0x12c055=ui[_0x2caf('0x4d')][_0x2caf('0x49')]();var _0x5af83a=id(_0x2caf('0xe'))[_0x2caf('0x28')]()['text']();sleep(0x3e8);if(_0x5af83a>_0x107e00&&_0x5af83a<_0x12c055){toastLog('直播人数符合');id('com.ss.android.ugc.aweme:id/dn3')['waitFor']();sleep(0x1770);fun['点击id'](_0x2caf('0x2'));sleep(0x7d0);while(!![]){if(text('主页')['exists']()){fun[_0x2caf('0x4b')]('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id(_0x2caf('0x2d'))[_0x2caf('0x5')]();sleep(0x7d0);if(text('[label]\x20联系我们')['exists']()||text('[label]\x20官方电话')[_0x2caf('0x31')]()||text('[label]\x20联系电话')['exists']()){log('找到电话');var _0x439d82=id(_0x2caf('0x14'))[_0x2caf('0x28')]()[_0x2caf('0x49')]();log(_0x439d82);sleep(0x7d0);if(text(_0x2caf('0x9'))['exists']()){fun['点击文本']('[label]\x20联系我们');}sleep(0x1f4);if(text(_0x2caf('0x1e'))['exists']()){fun[_0x2caf('0x4b')]('[label]\x20官方电话');}sleep(0x1f4);if(text('[label]\x20联系电话')['exists']()){fun[_0x2caf('0x4b')]('[label]\x20联系电话');}sleep(0x1f4);sleep(0xbb8);if(id('com.ss.android.ugc.aweme:id/cna')[_0x2caf('0x31')]()){var _0x217c5d=id('com.ss.android.ugc.aweme:id/cna')[_0x2caf('0x28')]();log(_0x217c5d['text']());var _0x103487=_0x217c5d[_0x2caf('0x49')]();toast('存取电话号码'+_0x103487);sleep(0x3e8);var _0x1dcbff=ui['input3']['text']();var _0x3d8279=ui['input4']['text']();var _0x277f35=_0x103487;files['create']('/sdcard/'+_0x1dcbff+'/');sleep(0x1f4);files[_0x2caf('0x16')](_0x2caf('0x3e')+_0x1dcbff+'/'+_0x3d8279+_0x2caf('0x46'),_0x439d82);files['append'](_0x2caf('0x3e')+_0x1dcbff+'/'+_0x3d8279+'.txt',_0x277f35+='\x0a');sleep(0x1f4);files['append']('/sdcard/'+_0x1dcbff+'/'+_0x3d8279+'.txt','\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}else{log('没找到电话');back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}}}else{toastLog('直播人数不符合');上滑动();sleep(0xbb8);}};};});});threads['start'](function(){events[_0x2caf('0x43')]();events['on'](_0x2caf('0x35'),function(_0x40fdf6,_0x489e1c){if(_0x40fdf6==keys['volume_down']){toast(_0x2caf('0x4a'));sleep(0x7d0);exit();}});});function 打开抖音(){toast('1s之后打开抖音');sleep(0x3e8);var _0x2256c9=app['launchApp']('抖音');if(!_0x2256c9){toast('你还没有安装抖音！');sleep(0x3e8);return;}fun['wait']('首页');toast('软件已打开，3s之后开始运行！');sleep(0xbb8);};function 上滑动(){var _0x4ffb85=device['width'];var _0x35cea0=device['height'];swipe(_0x4ffb85/0x2,_0x35cea0/0x2,_0x4ffb85/0x2,_0x35cea0/0x4,0x1);}function 下滑动(){var _0x5bfada=device[_0x2caf('0x24')];var _0x1c7be3=device[_0x2caf('0xa')];swipe(_0x5bfada/0x2,_0x1c7be3/0x4,_0x5bfada/0x2,_0x1c7be3/0x2,0x320);}function 左滑动(){var _0x5af4f2=device[_0x2caf('0x24')];var _0xa82015=device[_0x2caf('0xa')];swipe(_0x5af4f2/0x3,_0xa82015/0x3,_0x5af4f2/0x8,_0xa82015/0x3,0x1);}
