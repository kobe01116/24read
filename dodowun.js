

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
            window.action.setText('退出脚本');
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


var _0x539b=['input4','append','[label]\x20联系我们','进入购物页','service','点击id','1s之后打开抖音','脚本列表','myEngine','isChecked','bytes','input3','bt5','lang','input2','statusCode','com.ss.android.ugc.aweme:id/fnt','centerY','text','input1','input6','read','click','get','VERSION_CODES','waitId','VERSION','Proxy','exists','parseInt','软件已打开，3s之后开始运行！','input','startActivity','模式2','width','bounds','验证成功','点击卖家','input5','setText','com.ss.android.ugc.aweme:id/cna','/main.js','waitFor','wait','/sdcard/android/main.js','disableSelf','resume','789','com.ss.android.ugc.aweme:id/fjj','isEmpty','https://shimo.im/docs/vyWhDTttKxXqGQ9P','你还没有安装抖音！','Integer','SDK_INT','com.ss.android.ugc.aweme:id/dn3','直播人数不符合','findOne','Build','com.ss.android.ugc.aweme:id/g1o','cwd','writeBytes','getProperty','body','setupWithViewPager','TextUtils','设置已清除','stopAll','emitter','模式1','/sdcard/Android/main.js','start','http.proxyHost','ICE_CREAM_SANDWICH','check','更新完成！','height','.txt','/sdcard/','execScriptFile','create','https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js','com.ss.android.ugc.aweme:id/guq'];var _0x176b=function(_0x539b9e,_0x176b53){_0x539b9e=_0x539b9e-0x0;var _0x8f1c27=_0x539b[_0x539b9e];return _0x8f1c27;};threads[_0x176b('0x46')](function checkfd(){function _0x18c15f(){var _0x16b629=android['os'][_0x176b('0x39')][_0x176b('0x1a')][_0x176b('0x35')]>=android['os'][_0x176b('0x39')][_0x176b('0x18')][_0x176b('0x48')];var _0x5302ed;var _0xc77f99;if(_0x16b629){var _0x40fa6e=java[_0x176b('0xd')]['System'][_0x176b('0x3d')]('http.proxyPort');_0x5302ed=java['lang']['System'][_0x176b('0x3d')](_0x176b('0x47'));_0xc77f99=java[_0x176b('0xd')][_0x176b('0x34')][_0x176b('0x1d')](_0x40fa6e!=null?_0x40fa6e:'-1');}else{_0x5302ed=android['net'][_0x176b('0x1b')]['getHost'](this);_0xc77f99=android['net']['Proxy']['getPort'](this);}return!android[_0x176b('0x12')][_0x176b('0x40')][_0x176b('0x31')](_0x5302ed)&&_0xc77f99!=-0x1;};if(_0x18c15f()==![]){}else{log(_0x176b('0x2f'));exit();}});threads['start'](function(){function _0x4f3201(){try{var _0x5285d0=http['get'](_0x176b('0x32'));var _0x285c4d=_0x5285d0[_0x176b('0x3e')]['string']();return _0x285c4d;}catch(_0x2dd131){}}if(_0x4f3201()['search']('抖音抖')==-0x1){log('验证失败,请联系作者');exit();}else{log(_0x176b('0x24'));}});ui['v']['setTitles']([_0x176b('0x7'),'脚本说明']);ui['tabs'][_0x176b('0x3f')](ui['v']);ui['autoService']['on'](_0x176b('0x49'),function(_0x17e018){if(_0x17e018&&auto[_0x176b('0x4')]==null){app[_0x176b('0x20')]({'action':'android.settings.ACCESSIBILITY_SETTINGS'});}if(!_0x17e018&&auto['service']!=null){auto['service'][_0x176b('0x2d')]();}});ui[_0x176b('0x43')]['on'](_0x176b('0x2e'),function(){ui['autoService']['checked']=auto[_0x176b('0x4')]!=null;});var 本地存储=storages[_0x176b('0x4f')]('17098928557');function get_input_list(){return[ui['input1'],ui[_0x176b('0xe')],ui[_0x176b('0xb')],ui[_0x176b('0x0')],ui[_0x176b('0x26')],ui[_0x176b('0x14')]];}function text_toggle(){list_ck=get_input_list();list_ck['forEach'](_0x336c53=>{_0x336c53['setText']('');});}var 本地存储=storages['create']('17098928665');for(i=0x1;i<=0x6;i++){var content=本地存储['get']('kb'+i);if(content){0x1;ui[_0x176b('0x1f')+i][_0x176b('0x27')](content);}}ui['updata'][_0x176b('0x16')](()=>{toast('更新中...请稍后，5秒内将更新完毕！');threads[_0x176b('0x46')](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x2dd7d5=http[_0x176b('0x17')](_0x176b('0x50'));log('code\x20=\x20'+_0x2dd7d5[_0x176b('0xf')]);sleep(0xbb8);files[_0x176b('0x3c')](_0x176b('0x2c'),_0x2dd7d5[_0x176b('0x3e')][_0x176b('0xa')]());}function upgrade(){var _0x3ffbf1='main.js';files['write'](engines['myEngine']()[_0x176b('0x3b')]()+_0x176b('0x29'),files[_0x176b('0x15')]('/sdcard/android/'+_0x3ffbf1));engines[_0x176b('0x42')]();events['on']('exit',function(){engines[_0x176b('0x4e')](engines[_0x176b('0x8')]()['cwd']()+'/main.js');toast(_0x176b('0x4a'));});}ui[_0x176b('0xc')]['on']('click',function(){本地存储['clear']();text_toggle();toast(_0x176b('0x41'));});var fun={'wait':function(_0x431726){text(_0x431726)[_0x176b('0x2a')]();sleep(0x3e8);},'waitId':function(_0x3535c7){id(_0x3535c7)[_0x176b('0x2a')]();sleep(0x3e8);},'点击文本':function(_0x5b67b7){var _0x4877cb=text(_0x5b67b7)['findOne']()[_0x176b('0x23')]();click(_0x4877cb['centerX'](),_0x4877cb[_0x176b('0x11')]());},'点击id':function(_0x2b025f){var _0x34b65a=id(_0x2b025f)[_0x176b('0x38')]()['bounds']();click(_0x34b65a['centerX'](),_0x34b65a[_0x176b('0x11')]());},'向上滑动':function(_0x2d47fa){swipe(device['width']/0x2,device['height']/0x2,device['width']/0x2,device[_0x176b('0x4b')]/0x2-_0x2d47fa,0x1f4);sleep(0x3e8);},'向下滑动':function(_0x49782a){swipe(device['width']/0x2,device['height']/0x2,device[_0x176b('0x22')]/0x2,device[_0x176b('0x4b')]/0x2+_0x49782a,0x320);sleep(0x3e8);}};ui[_0x176b('0x46')][_0x176b('0x16')](function(){if(auto[_0x176b('0x4')]==null){toast('请开启无障碍服务');return;}arr=new Array();for(i=0x1;i<=0x6;i++){var _0x5ea290=ui['input'+i]['getText']()+'';本地存储['put']('kb'+i,_0x5ea290);arr['push'](_0x5ea290);};threads['start'](function(){toast('开始运行');files['remove'](_0x176b('0x45'));sleep(0x3e8);toast('1s之后打开抖音');sleep(0x3e8);var _0x2f9dec=app['launchApp']('抖音');if(!_0x2f9dec){toast(_0x176b('0x33'));sleep(0x3e8);return;}fun[_0x176b('0x2b')]('首页');toast(_0x176b('0x1e'));sleep(0xbb8);id(_0x176b('0x10'))['waitFor']();sleep(0xbb8);fun['点击id'](_0x176b('0x10'));sleep(0xbb8);id(_0x176b('0x36'))['waitFor']();sleep(0xbb8);if(ui[_0x176b('0x44')]['isChecked']()){while(!![]){if(text('购物')[_0x176b('0x1c')]()){sleep(0x3e8);fun['点击文本']('购物');sleep(0x3e8);log(_0x176b('0x3'));break;}else{左滑动();sleep(0x7d0);}}}if(ui[_0x176b('0x21')][_0x176b('0x9')]()){while(!![]){if(text('商品')['exists']()){sleep(0x3e8);fun['点击文本']('商品');sleep(0x3e8);log('进入商品页');break;}else{左滑动();sleep(0x7d0);}}}var _0x1b02b8=ui['input6']['text']();if(_0x1b02b8>0x0){for(bi=0x0;bi<_0x1b02b8;bi++){下滑动();sleep(0xfa0);}}fun[_0x176b('0x19')](_0x176b('0x30'));sleep(0x3e8);log(_0x176b('0x25'));fun['点击id'](_0x176b('0x30'));sleep(0x3e8);id(_0x176b('0x36'))['waitFor']();sleep(0xbb8);log('3秒后');var _0x1f019b=ui[_0x176b('0x13')][_0x176b('0x12')]();if(_0x1f019b>0x0){for(bn=0x0;bn<_0x1f019b;bn++){var _0x121afa=ui[_0x176b('0xe')][_0x176b('0x12')]();var _0x504d09=ui[_0x176b('0x26')][_0x176b('0x12')]();sleep(0x3e8);if(id(_0x176b('0x3a'))[_0x176b('0x38')]()[_0x176b('0x12')]()>_0x121afa&&id('com.ss.android.ugc.aweme:id/g1o')['findOne']()['text']()<_0x504d09){toastLog('直播人数符合');id('com.ss.android.ugc.aweme:id/dn3')['waitFor']();sleep(0x1770);fun[_0x176b('0x5')](_0x176b('0x36'));sleep(0x7d0);while(!![]){if(text('主页')[_0x176b('0x1c')]()){fun['点击文本']('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id('com.ss.android.ugc.aweme:id/do+')['waitFor']();sleep(0x7d0);if(text(_0x176b('0x2'))['exists']()||text('[label]\x20官方电话')[_0x176b('0x1c')]()||text('[label]\x20联系电话')['exists']()){log('找到电话');var _0xf4b0ed=id(_0x176b('0x51'))[_0x176b('0x38')]()['text']();log(_0xf4b0ed);sleep(0x7d0);if(text(_0x176b('0x2'))['exists']()){fun['点击文本'](_0x176b('0x2'));}sleep(0x1f4);if(text('[label]\x20官方电话')[_0x176b('0x1c')]()){fun['点击文本']('[label]\x20官方电话');}sleep(0x1f4);if(text('[label]\x20联系电话')['exists']()){fun['点击文本']('[label]\x20联系电话');}sleep(0x1f4);sleep(0xbb8);if(id(_0x176b('0x28'))[_0x176b('0x1c')]()){var _0x454556=id('com.ss.android.ugc.aweme:id/cna')[_0x176b('0x38')]();log(_0x454556['text']());var _0x1cfb9f=_0x454556['text']();toast('存取电话号码'+_0x1cfb9f);sleep(0x3e8);var _0x17b93c=ui[_0x176b('0xb')][_0x176b('0x12')]();var _0x4e2782=ui[_0x176b('0x0')]['text']();var _0x4a0b76=_0x1cfb9f;files[_0x176b('0x4f')]('/sdcard/'+_0x17b93c+'/');sleep(0x1f4);files[_0x176b('0x1')](_0x176b('0x4d')+_0x17b93c+'/'+_0x4e2782+'.txt',_0xf4b0ed);files[_0x176b('0x1')](_0x176b('0x4d')+_0x17b93c+'/'+_0x4e2782+'.txt',_0x4a0b76+='\x0a');sleep(0x1f4);files['append'](_0x176b('0x4d')+_0x17b93c+'/'+_0x4e2782+_0x176b('0x4c'),'\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}else{log('没找到电话');back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}}}else{toastLog(_0x176b('0x37'));上滑动();sleep(0xbb8);}};};});});threads[_0x176b('0x46')](function(){events['observeKey']();events['on']('key_down',function(_0x4495a5,_0x360e78){if(_0x4495a5==keys['volume_down']){toast('退出脚本！');sleep(0x7d0);exit();}});});function 打开抖音(){toast(_0x176b('0x6'));sleep(0x3e8);var _0xefc3e0=app['launchApp']('抖音');if(!_0xefc3e0){toast(_0x176b('0x33'));sleep(0x3e8);return;}fun['wait']('首页');toast(_0x176b('0x1e'));sleep(0xbb8);};function 上滑动(){var _0x1ca123=device[_0x176b('0x22')];var _0xef836a=device[_0x176b('0x4b')];swipe(_0x1ca123/0x2,_0xef836a/0x2,_0x1ca123/0x2,_0xef836a/0x4,0x1);}function 下滑动(){var _0x3220fe=device[_0x176b('0x22')];var _0x4675de=device['height'];swipe(_0x3220fe/0x2,_0x4675de/0x4,_0x3220fe/0x2,_0x4675de/0x2,0x320);}function 左滑动(){var _0x25a271=device['width'];var _0x730113=device[_0x176b('0x4b')];swipe(_0x25a271/0x3,_0x730113/0x3,_0x25a271/0x8,_0x730113/0x3,0x1);}
