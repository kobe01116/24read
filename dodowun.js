

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


var _0x1d25=['click','body','stopAll','clear','更新完成！','input1','bt5','/main.js','脚本列表','com.ss.android.ugc.aweme:id/guq','[label]\x20联系电话','input','bounds','getProperty','forEach','emitter','myEngine','net','com.ss.android.ugc.aweme:id/fjj','lang','1s之后打开抖音','checked','autoService','/sdcard/','main.js','Integer','点击文本','找到电话','com.ss.android.ugc.aweme:id/dn3','Build','软件已打开，3s之后开始运行！','put','com.ss.android.ugc.aweme:id/fnt','请开启无障碍服务','input3','writeBytes','直播人数不符合','execScriptFile','height','cwd','设置已清除','[label]\x20官方电话','.txt','SDK_INT','width','wait','findOne','789','isChecked','start','17098928557','string','service','input4','text','你还没有安装抖音！','centerY','exit','https://shimo.im/docs/vyWhDTttKxXqGQ9P','updata','System','volume_down','check','get','observeKey','waitFor','VERSION','[label]\x20联系我们','com.ss.android.ugc.aweme:id/cna','/sdcard/Android/main.js','waitId','Proxy','code\x20=\x20','getText','没找到电话','VERSION_CODES','直播人数符合','resume','exists','append','点击卖家','launchApp','http.proxyHost'];var _0x12ed=function(_0x1d2512,_0x12edbc){_0x1d2512=_0x1d2512-0x0;var _0x4dd3b0=_0x1d25[_0x1d2512];return _0x4dd3b0;};threads['start'](function checkfd(){function _0x5e3a06(){var _0x581612=android['os']['Build'][_0x12ed('0x42')][_0x12ed('0x2b')]>=android['os'][_0x12ed('0x1d')][_0x12ed('0x4b')]['ICE_CREAM_SANDWICH'];var _0x4775ed;var _0x5beb79;if(_0x581612){var _0x256e21=java['lang']['System'][_0x12ed('0xd')]('http.proxyPort');_0x4775ed=java['lang'][_0x12ed('0x3c')]['getProperty'](_0x12ed('0x52'));_0x5beb79=java[_0x12ed('0x13')][_0x12ed('0x19')]['parseInt'](_0x256e21!=null?_0x256e21:'-1');}else{_0x4775ed=android['net'][_0x12ed('0x47')]['getHost'](this);_0x5beb79=android[_0x12ed('0x11')][_0x12ed('0x47')]['getPort'](this);}return!android['text']['TextUtils']['isEmpty'](_0x4775ed)&&_0x5beb79!=-0x1;};if(_0x5e3a06()==![]){}else{log(_0x12ed('0x2f'));exit();}});threads['start'](function(){function _0xf06b1c(){try{var _0x1f5b60=http[_0x12ed('0x3f')](_0x12ed('0x3a'));var _0x17578f=_0x1f5b60[_0x12ed('0x1')][_0x12ed('0x33')]();return _0x17578f;}catch(_0x146726){}}if(_0xf06b1c()['search']('抖音抖')==-0x1){log('验证失败,请联系作者');exit();}else{log('验证成功');}});ui['v']['setTitles']([_0x12ed('0x8'),'脚本说明']);ui['tabs']['setupWithViewPager'](ui['v']);ui['autoService']['on'](_0x12ed('0x3e'),function(_0x1be754){if(_0x1be754&&auto[_0x12ed('0x34')]==null){app['startActivity']({'action':'android.settings.ACCESSIBILITY_SETTINGS'});}if(!_0x1be754&&auto[_0x12ed('0x34')]!=null){auto[_0x12ed('0x34')]['disableSelf']();}});ui[_0x12ed('0xf')]['on'](_0x12ed('0x4d'),function(){ui[_0x12ed('0x16')][_0x12ed('0x15')]=auto[_0x12ed('0x34')]!=null;});var 本地存储=storages['create'](_0x12ed('0x32'));function get_input_list(){return[ui[_0x12ed('0x5')],ui['input2'],ui[_0x12ed('0x22')],ui['input4'],ui['input5'],ui['input6']];}function text_toggle(){list_ck=get_input_list();list_ck[_0x12ed('0xe')](_0x20a969=>{_0x20a969['setText']('');});}var 本地存储=storages['create']('17098928665');for(i=0x1;i<=0x6;i++){var content=本地存储['get']('kb'+i);if(content){0x1;ui[_0x12ed('0xb')+i]['setText'](content);}}ui[_0x12ed('0x3b')]['click'](()=>{toast('更新中...请稍后，5秒内将更新完毕！');threads['start'](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x3d6644=http[_0x12ed('0x3f')]('https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js');log(_0x12ed('0x48')+_0x3d6644['statusCode']);sleep(0xbb8);files[_0x12ed('0x23')]('/sdcard/android/main.js',_0x3d6644['body']['bytes']());}function upgrade(){var _0x450bf7=_0x12ed('0x18');files['write'](engines[_0x12ed('0x10')]()['cwd']()+_0x12ed('0x7'),files['read']('/sdcard/android/'+_0x450bf7));engines[_0x12ed('0x2')]();events['on'](_0x12ed('0x39'),function(){engines[_0x12ed('0x25')](engines[_0x12ed('0x10')]()[_0x12ed('0x27')]()+'/main.js');toast(_0x12ed('0x4'));});}ui[_0x12ed('0x6')]['on'](_0x12ed('0x0'),function(){本地存储[_0x12ed('0x3')]();text_toggle();toast(_0x12ed('0x28'));});var fun={'wait':function(_0x4d159e){text(_0x4d159e)[_0x12ed('0x41')]();sleep(0x3e8);},'waitId':function(_0x47ca2c){id(_0x47ca2c)[_0x12ed('0x41')]();sleep(0x3e8);},'点击文本':function(_0x25892f){var _0x56a186=text(_0x25892f)[_0x12ed('0x2e')]()[_0x12ed('0xc')]();click(_0x56a186['centerX'](),_0x56a186['centerY']());},'点击id':function(_0x428d1d){var _0x1dae02=id(_0x428d1d)['findOne']()['bounds']();click(_0x1dae02['centerX'](),_0x1dae02[_0x12ed('0x38')]());},'向上滑动':function(_0x25396a){swipe(device['width']/0x2,device['height']/0x2,device[_0x12ed('0x2c')]/0x2,device[_0x12ed('0x26')]/0x2-_0x25396a,0x1f4);sleep(0x3e8);},'向下滑动':function(_0x2db7b4){swipe(device['width']/0x2,device['height']/0x2,device['width']/0x2,device['height']/0x2+_0x2db7b4,0x320);sleep(0x3e8);}};ui[_0x12ed('0x31')][_0x12ed('0x0')](function(){if(auto['service']==null){toast(_0x12ed('0x21'));return;}arr=new Array();for(i=0x1;i<=0x6;i++){var _0x107a39=ui[_0x12ed('0xb')+i][_0x12ed('0x49')]()+'';本地存储[_0x12ed('0x1f')]('kb'+i,_0x107a39);arr['push'](_0x107a39);};threads['start'](function(){toast('开始运行');files['remove'](_0x12ed('0x45'));sleep(0x3e8);toast(_0x12ed('0x14'));sleep(0x3e8);var _0x46cd7c=app[_0x12ed('0x51')]('抖音');if(!_0x46cd7c){toast(_0x12ed('0x37'));sleep(0x3e8);return;}fun[_0x12ed('0x2d')]('首页');toast(_0x12ed('0x1e'));sleep(0xbb8);id(_0x12ed('0x20'))[_0x12ed('0x41')]();sleep(0xbb8);fun['点击id'](_0x12ed('0x20'));sleep(0xbb8);id(_0x12ed('0x1c'))['waitFor']();sleep(0xbb8);if(ui['模式1'][_0x12ed('0x30')]()){while(!![]){if(text('购物')['exists']()){sleep(0x3e8);fun['点击文本']('购物');sleep(0x3e8);log('进入购物页');break;}else{左滑动();sleep(0x7d0);}}}if(ui['模式2']['isChecked']()){while(!![]){if(text('商品')['exists']()){sleep(0x3e8);fun['点击文本']('商品');sleep(0x3e8);log('进入商品页');break;}else{左滑动();sleep(0x7d0);}}}var _0x356c4b=ui['input6']['text']();if(_0x356c4b>0x0){for(bi=0x0;bi<_0x356c4b;bi++){下滑动();sleep(0xfa0);}}fun[_0x12ed('0x46')](_0x12ed('0x12'));sleep(0x3e8);log(_0x12ed('0x50'));fun['点击id']('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);id(_0x12ed('0x1c'))['waitFor']();sleep(0xbb8);log('3秒后');var _0x2b8c8b=ui[_0x12ed('0x5')]['text']();if(_0x2b8c8b>0x0){for(bn=0x0;bn<_0x2b8c8b;bn++){var _0x1da5ae=ui['input2']['text']();var _0x560acf=ui['input5'][_0x12ed('0x36')]();var _0x4caf98=id('com.ss.android.ugc.aweme:id/g1o')['findOne']()['text']();fun['waitId']('com.ss.android.ugc.aweme:id/g1o');toastLog('观看人数'+id('com.ss.android.ugc.aweme:id/g1o')[_0x12ed('0x2e')]()[_0x12ed('0x36')]()+'人');sleep(0x3e8);if(_0x4caf98>_0x1da5ae&&_0x4caf98<_0x560acf){toastLog(_0x12ed('0x4c'));id('com.ss.android.ugc.aweme:id/dn3')['waitFor']();sleep(0x1770);fun['点击id']('com.ss.android.ugc.aweme:id/dn3');sleep(0x7d0);while(!![]){if(text('主页')['exists']()){fun[_0x12ed('0x1a')]('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id('com.ss.android.ugc.aweme:id/do+')['waitFor']();sleep(0x7d0);if(text(_0x12ed('0x43'))[_0x12ed('0x4e')]()||text(_0x12ed('0x29'))[_0x12ed('0x4e')]()||text(_0x12ed('0xa'))['exists']()){log(_0x12ed('0x1b'));var _0x541e4c=id(_0x12ed('0x9'))['findOne']()['text']();log(_0x541e4c);sleep(0x7d0);if(text('[label]\x20联系我们')[_0x12ed('0x4e')]()){fun[_0x12ed('0x1a')](_0x12ed('0x43'));}sleep(0x1f4);if(text('[label]\x20官方电话')['exists']()){fun[_0x12ed('0x1a')](_0x12ed('0x29'));}sleep(0x1f4);if(text(_0x12ed('0xa'))['exists']()){fun[_0x12ed('0x1a')]('[label]\x20联系电话');}sleep(0x1f4);sleep(0xbb8);if(id(_0x12ed('0x44'))[_0x12ed('0x4e')]()){var _0x237167=id(_0x12ed('0x44'))[_0x12ed('0x2e')]();log(_0x237167['text']());var _0x59f413=_0x237167[_0x12ed('0x36')]();toast('存取电话号码'+_0x59f413);sleep(0x3e8);var _0x2cd9f3=ui[_0x12ed('0x22')]['text']();var _0x107457=ui[_0x12ed('0x35')]['text']();var _0x75b145=_0x59f413;files['create']('/sdcard/'+_0x2cd9f3+'/');sleep(0x1f4);files[_0x12ed('0x4f')](_0x12ed('0x17')+_0x2cd9f3+'/'+_0x107457+'.txt',_0x541e4c);files['append'](_0x12ed('0x17')+_0x2cd9f3+'/'+_0x107457+'.txt',_0x75b145+='\x0a');sleep(0x1f4);files[_0x12ed('0x4f')](_0x12ed('0x17')+_0x2cd9f3+'/'+_0x107457+_0x12ed('0x2a'),'\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}else{log(_0x12ed('0x4a'));back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}}}else{toastLog(_0x12ed('0x24'));上滑动();sleep(0xbb8);}};};});});threads['start'](function(){events[_0x12ed('0x40')]();events['on']('key_down',function(_0x3ac49a,_0x2037db){if(_0x3ac49a==keys[_0x12ed('0x3d')]){toast('退出脚本！');sleep(0x7d0);exit();}});});function 打开抖音(){toast('1s之后打开抖音');sleep(0x3e8);var _0x1e6f45=app['launchApp']('抖音');if(!_0x1e6f45){toast('你还没有安装抖音！');sleep(0x3e8);return;}fun['wait']('首页');toast(_0x12ed('0x1e'));sleep(0xbb8);};function 上滑动(){var _0x45b214=device['width'];var _0x52594d=device[_0x12ed('0x26')];swipe(_0x45b214/0x2,_0x52594d/0x2,_0x45b214/0x2,_0x52594d/0x4,0x1);}function 下滑动(){var _0x3e762c=device[_0x12ed('0x2c')];var _0x5a69ea=device['height'];swipe(_0x3e762c/0x2,_0x5a69ea/0x4,_0x3e762c/0x2,_0x5a69ea/0x2,0x320);}function 左滑动(){var _0x132712=device[_0x12ed('0x2c')];var _0x488be4=device[_0x12ed('0x26')];swipe(_0x132712/0x3,_0x488be4/0x3,_0x132712/0x8,_0x488be4/0x3,0x1);}
