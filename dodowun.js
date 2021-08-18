

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


var _0x36c6=['search','com.ss.android.ugc.aweme:id/fnt','findOne','remove','append','lang','slice','code\x20=\x20','input5','点击文本','退出脚本！','input7','Proxy','done1','click','launchApp','text','getText','com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle','脚本列表','emitter','符合人数','input12','脚本说明','observeKey','bt5','list_ck','存取电话号码','/main.js','Build','验证失败,请联系作者','check','interrupt','目前人数\x20:\x20','main.js','System','170989665','exists','com.ss.android.ugc.aweme:id/dn3','com.fvcorp.android.aijiasuclient:id/layoutRandomConnection','进入购物页','点击卖家','enabled','android.settings.ACCESSIBILITY_SETTINGS','点击id','put','setupWithViewPager','service','input1','[label]\x20联系我们','没找到电话','write','clear','更新中...请稍后，5秒内将更新完毕！','checked','input','点击连接','com.ss.android.ugc.aweme:id/cna','不在后台运行！','3秒后','com.fvcorp.android.aijiasuclient:id/textStatusContent','parseInt','get','1s之后打开抖音','forEach','height','statusCode','start','textContains','com.ss.android.ugc.aweme:id/g1o','map','isEmpty','不符合人数','验证成功','http.proxyHost','电话符合','ICE_CREAM_SANDWICH','input9','execScriptFile','input2','body','bounds','com.fvcorp.android.aijiasuclient:id/buttonOnOff','com.ss.android.ugc.aweme:id/fjj','input3','width','waitFor','找到电话','setText','input16','.txt','[label]\x20联系电话','input10','SDK_INT','TextUtils','/sdcard/','waitId','input4','1s之后打开爱加速','更新完成！','请开启无障碍服务','key_down','input15','input17','VERSION','length','isChecked'];var _0x5484=function(_0x36c6bb,_0x5484f6){_0x36c6bb=_0x36c6bb-0x0;var _0x29382d=_0x36c6[_0x36c6bb];return _0x29382d;};threads[_0x5484('0x43')](function checkfd(){function _0xfc4540(){var _0x2cea23=android['os'][_0x5484('0x1d')][_0x5484('0x68')][_0x5484('0x5d')]>=android['os'][_0x5484('0x1d')]['VERSION_CODES'][_0x5484('0x4c')];var _0x2c685b;var _0x1c8296;if(_0x2cea23){var _0x1d440e=java[_0x5484('0x5')][_0x5484('0x23')]['getProperty']('http.proxyPort');_0x2c685b=java['lang']['System']['getProperty'](_0x5484('0x4a'));_0x1c8296=java[_0x5484('0x5')]['Integer'][_0x5484('0x3d')](_0x1d440e!=null?_0x1d440e:'-1');}else{_0x2c685b=android['net'][_0x5484('0xc')]['getHost'](this);_0x1c8296=android['net']['Proxy']['getPort'](this);}return!android['text'][_0x5484('0x5e')][_0x5484('0x47')](_0x2c685b)&&_0x1c8296!=-0x1;};if(_0xfc4540()==![]){}else{log('789');exit();}});threads['start'](function(){function _0x3c8cd0(){try{var _0x4c356f=http[_0x5484('0x3e')]('https://shimo.im/docs/vyWhDTttKxXqGQ9P');var _0x30cf47=_0x4c356f[_0x5484('0x50')]['string']();return _0x30cf47;}catch(_0x6a1bfc){}}if(_0x3c8cd0()[_0x5484('0x0')]('抖音抖')==-0x1){log(_0x5484('0x1e'));exit();}else{log(_0x5484('0x49'));}});ui['v']['setTitles']([_0x5484('0x13'),'电话段设置',_0x5484('0x17')]);ui['tabs'][_0x5484('0x2e')](ui['v']);ui['autoService']['on'](_0x5484('0x1f'),function(_0x2b518b){if(_0x2b518b&&auto[_0x5484('0x2f')]==null){app['startActivity']({'action':_0x5484('0x2b')});}if(!_0x2b518b&&auto['service']!=null){auto[_0x5484('0x2f')]['disableSelf']();}});ui[_0x5484('0x14')]['on']('resume',function(){ui['autoService'][_0x5484('0x36')]=auto[_0x5484('0x2f')]!=null;});function get_input_list(){return[ui[_0x5484('0x30')],ui[_0x5484('0x4f')],ui[_0x5484('0x54')],ui[_0x5484('0x61')],ui['input5'],ui['input6'],ui[_0x5484('0xb')],ui['input8'],ui[_0x5484('0x4d')],ui[_0x5484('0x5c')],ui['input11'],ui['input12'],ui['input13'],ui['input14'],ui[_0x5484('0x66')],ui[_0x5484('0x59')],ui['input17']];}function text_toggle(){list_ck=get_input_list();list_ck[_0x5484('0x40')](_0x51191c=>{_0x51191c['setText']('');});}var 本地存储=storages['create'](_0x5484('0x24'));for(i=0x1;i<=0x12;i++){var content=本地存储['get']('kb'+i);if(content){ui['input'+i][_0x5484('0x58')](content);}}function save_opt(){let _0x3d1a83=get_check_box_list()[_0x5484('0x46')](_0x2a846a=>_0x2a846a['checked']);本地存储[_0x5484('0x2d')](_0x5484('0x1a'),_0x3d1a83);}function load_opt(){let _0x1519d9=本地存储['get'](_0x5484('0x1a'),null);if(_0x1519d9){let _0x539bb6=get_check_box_list();for(let _0x15136c=0x0;_0x15136c<_0x1519d9[_0x5484('0x69')];_0x15136c++){_0x539bb6[_0x15136c][_0x5484('0x36')]=_0x1519d9[_0x15136c];}}}load_opt();function get_check_box_list(){return[ui[_0x5484('0xd')]];}ui['updata'][_0x5484('0xe')](()=>{toast(_0x5484('0x35'));threads['start'](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x5324e0=http['get']('https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js');log(_0x5484('0x7')+_0x5324e0[_0x5484('0x42')]);sleep(0xbb8);files['writeBytes']('/sdcard/android/main.js',_0x5324e0[_0x5484('0x50')]['bytes']());}function upgrade(){var _0x525f79=_0x5484('0x22');files[_0x5484('0x33')](engines['myEngine']()['cwd']()+'/main.js',files['read']('/sdcard/android/'+_0x525f79));engines['stopAll']();events['on']('exit',function(){engines[_0x5484('0x4e')](engines['myEngine']()['cwd']()+_0x5484('0x1c'));toast(_0x5484('0x63'));});}ui[_0x5484('0x19')]['on'](_0x5484('0xe'),function(){本地存储[_0x5484('0x34')]();text_toggle();toast('设置已清除');});var fun={'wait':function(_0x41c4f6){text(_0x41c4f6)[_0x5484('0x56')]();sleep(0x3e8);},'waitId':function(_0xc20b4f){id(_0xc20b4f)['waitFor']();sleep(0x3e8);},'点击文本':function(_0x253461){var _0x481436=text(_0x253461)['findOne']()[_0x5484('0x51')]();click(_0x481436['centerX'](),_0x481436['centerY']());},'点击id':function(_0x5d7748){var _0x1504ef=id(_0x5d7748)[_0x5484('0x2')]()[_0x5484('0x51')]();click(_0x1504ef['centerX'](),_0x1504ef['centerY']());},'向上滑动':function(_0x5f247f){swipe(device['width']/0x2,device['height']/0x2,device['width']/0x2,device[_0x5484('0x41')]/0x2-_0x5f247f,0x1f4);sleep(0x3e8);},'向下滑动':function(_0x5101c5){swipe(device[_0x5484('0x55')]/0x2,device[_0x5484('0x41')]/0x2,device[_0x5484('0x55')]/0x2,device[_0x5484('0x41')]/0x2+_0x5101c5,0x320);sleep(0x3e8);}};ui[_0x5484('0x43')][_0x5484('0xe')](function(){if(auto['service']==null){toast(_0x5484('0x64'));return;}arr=new Array();for(i=0x1;i<=0x11;i++){var _0x5bac84=ui[_0x5484('0x37')+i][_0x5484('0x11')]()+'';本地存储['put']('kb'+i,_0x5bac84);arr['push'](_0x5bac84);};files[_0x5484('0x3')]('/sdcard/Android/main.js');save_opt();threads[_0x5484('0x43')](function(){while(!![]){var _0x2156dc=threads[_0x5484('0x43')](主脚本);sleep(0x3c*ui[_0x5484('0xb')]['text']()*0x3e8);toastLog('停止运行');_0x2156dc[_0x5484('0x20')]();killApp('抖音');sleep(0x1f40);打开爱加速();}});});function 主脚本(){打开抖音();进入直播();判断人数();}function 打开抖音(){toast(_0x5484('0x3f'));sleep(0x3e8);var _0x408ff6=app['launchApp']('抖音');if(!_0x408ff6){toast('你还没有安装抖音！');sleep(0x3e8);return;}fun['wait']('首页');toast('软件已打开，3s之后开始运行！');sleep(0xbb8);};function 进入直播(){id(_0x5484('0x1'))[_0x5484('0x56')]();sleep(0xbb8);fun[_0x5484('0x2c')](_0x5484('0x1'));sleep(0xbb8);id(_0x5484('0x26'))[_0x5484('0x56')]();sleep(0xbb8);if(ui['模式1'][_0x5484('0x6a')]()){while(!![]){if(text('购物')['exists']()){sleep(0x3e8);fun['点击文本']('购物');sleep(0xbb8);toastLog(_0x5484('0x28'));break;}else{左滑动();sleep(0xbb8);}}}if(ui['模式2']['isChecked']()){while(!![]){if(text('语音')['exists']()){sleep(0x3e8);fun[_0x5484('0x9')]('语音');sleep(0xbb8);toastLog('进入语音页');break;}else{左滑动();sleep(0xbb8);}}}var _0x6f11eb=ui['input6'][_0x5484('0x10')]();if(_0x6f11eb>0x0){for(bi=0x0;bi<_0x6f11eb;bi++){sleep(0x7d0);下滑动();sleep(0xfa0);}}fun[_0x5484('0x60')](_0x5484('0x53'));sleep(0x3e8);log(_0x5484('0x29'));fun['点击id'](_0x5484('0x53'));sleep(0x3e8);id('com.ss.android.ugc.aweme:id/dn3')[_0x5484('0x56')]();sleep(0xbb8);log(_0x5484('0x3b'));}function 判断人数(){var _0x3f9342=ui[_0x5484('0x30')]['text']();for(kjh=0x0;kjh<_0x3f9342;kjh++){fun['waitId'](_0x5484('0x45'));var _0x2f1767=id(_0x5484('0x45'))[_0x5484('0x2')]()[_0x5484('0x10')]();if(id(_0x5484('0x45'))['textContains']('万')[_0x5484('0x25')]()){var _0x178329=_0x2f1767[_0x5484('0x6')](0x0,-0x1)*0x2710;toastLog(_0x178329);sleep(0x3e8);toastLog(_0x5484('0x21')+_0x178329+'人');sleep(0x7d0);var _0x42112e=ui[_0x5484('0x4f')][_0x5484('0x10')]();var _0x552652=ui[_0x5484('0x8')][_0x5484('0x10')]();if(_0x178329>_0x42112e&&_0x178329<_0x552652){toastLog(_0x5484('0x15'));获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}else{toastLog(_0x5484('0x21')+_0x2f1767+'人');var _0x1caf0d=ui['input2'][_0x5484('0x10')]();var _0x230407=ui[_0x5484('0x8')]['text']();if(_0x2f1767>_0x1caf0d&&_0x2f1767<_0x230407){toastLog('符合人数');获取电话();}else{toastLog(_0x5484('0x48'));上滑动();sleep(0xbb8);}}}}function 获取电话(){id(_0x5484('0x26'))[_0x5484('0x56')]();sleep(0x1770);fun['点击id'](_0x5484('0x26'));sleep(0x7d0);while(!![]){if(text('主页')['exists']()){fun[_0x5484('0x9')]('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id('com.ss.android.ugc.aweme:id/do+')['waitFor']();sleep(0x7d0);if(text(_0x5484('0x31'))[_0x5484('0x25')]()||text('[label]\x20官方电话')[_0x5484('0x25')]()||text('[label]\x20联系电话')['exists']()){log(_0x5484('0x57'));var _0xfce387=id('com.ss.android.ugc.aweme:id/guq')['findOne']()['text']();log(_0xfce387);sleep(0x7d0);if(text(_0x5484('0x31'))[_0x5484('0x25')]()){fun[_0x5484('0x9')](_0x5484('0x31'));}sleep(0x1f4);if(text('[label]\x20官方电话')[_0x5484('0x25')]()){fun['点击文本']('[label]\x20官方电话');}sleep(0x1f4);if(text(_0x5484('0x5b'))['exists']()){fun['点击文本'](_0x5484('0x5b'));}sleep(0x1f4);sleep(0xbb8);if(id('com.ss.android.ugc.aweme:id/cna')[_0x5484('0x25')]()){var _0x4eeeae=id('com.ss.android.ugc.aweme:id/cna')[_0x5484('0x2')]();log(_0x4eeeae['text']());var _0x3f8ddd=_0x4eeeae['text']();if(ui['done1']['isChecked']()){var _0x5274d7=ui['input8']['text']();var _0x340503=ui[_0x5484('0x4d')]['text']();var _0x2f75d2=ui[_0x5484('0x5c')][_0x5484('0x10')]();var _0x59542=ui['input11'][_0x5484('0x10')]();var _0x373078=ui[_0x5484('0x16')]['text']();var _0x568c3a=ui['input13']['text']();var _0x3d0b52=ui['input14']['text']();var _0x342a7f=ui[_0x5484('0x66')]['text']();var _0x53e034=ui[_0x5484('0x59')][_0x5484('0x10')]();var _0x1076ff=ui[_0x5484('0x67')]['text']();if(id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x5274d7)){toastLog('电话符合');_0x362d29();}if(id('com.ss.android.ugc.aweme:id/cna')[_0x5484('0x44')](_0x340503)){toastLog('电话符合');_0x362d29();}if(id(_0x5484('0x39'))['textContains'](_0x2f75d2)){toastLog(_0x5484('0x4b'));_0x362d29();}if(id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x59542)){toastLog('电话符合');_0x362d29();}if(id(_0x5484('0x39'))[_0x5484('0x44')](_0x373078)){toastLog(_0x5484('0x4b'));_0x362d29();}if(id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x568c3a)){toastLog(_0x5484('0x4b'));_0x362d29();}if(id('com.ss.android.ugc.aweme:id/cna')[_0x5484('0x44')](_0x3d0b52)){toastLog(_0x5484('0x4b'));_0x362d29();}if(id(_0x5484('0x39'))['textContains'](_0x342a7f)){toastLog(_0x5484('0x4b'));_0x362d29();}if(id('com.ss.android.ugc.aweme:id/cna')['textContains'](_0x53e034)){toastLog('电话符合');_0x362d29();}if(id('com.ss.android.ugc.aweme:id/cna')[_0x5484('0x44')](_0x1076ff)){toastLog('电话符合');_0x362d29();}}else{toastLog(_0x5484('0x4b'));_0x362d29();}function _0x362d29(){toast(_0x5484('0x1b')+_0x3f8ddd);sleep(0x3e8);var _0x42702e=ui[_0x5484('0x54')]['text']();var _0x49c29b=ui['input4'][_0x5484('0x10')]();var _0xc812f1=_0x3f8ddd;files['create'](_0x5484('0x5f')+_0x42702e+'/');sleep(0x1f4);files[_0x5484('0x4')]('/sdcard/'+_0x42702e+'/'+_0x49c29b+'.txt',_0xfce387);files['append']('/sdcard/'+_0x42702e+'/'+_0x49c29b+_0x5484('0x5a'),_0xc812f1+='\x0a');sleep(0x1f4);files[_0x5484('0x4')]('/sdcard/'+_0x42702e+'/'+_0x49c29b+_0x5484('0x5a'),'\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}}else{log(_0x5484('0x32'));while(!![]){if(id(_0x5484('0x26'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{log('没找到电话');while(!![]){if(id(_0x5484('0x26'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}};function 打开爱加速(){toast(_0x5484('0x62'));sleep(0x3e8);var _0x563cb0=app[_0x5484('0xf')]('爱加速');if(!_0x563cb0){toast('你还没有安装爱加速！');sleep(0x3e8);return;}fun[_0x5484('0x60')](_0x5484('0x3c'));toast('软件已打开，3s之后开始运行！');sleep(0xbb8);while(!![]){if(text(_0x5484('0x38'))[_0x5484('0x25')]()){fun['点击id']('com.fvcorp.android.aijiasuclient:id/buttonOnOff');sleep(0x7d0);break;}else{fun[_0x5484('0x2c')](_0x5484('0x52'));sleep(0x7d0);fun['点击id'](_0x5484('0x12'));sleep(0x7d0);fun[_0x5484('0x60')](_0x5484('0x27'));sleep(0x7d0);fun[_0x5484('0x2c')](_0x5484('0x27'));sleep(0x7d0);fun[_0x5484('0x60')](_0x5484('0x3c'));sleep(0x7d0);break;}}}function killApp(_0x3b1cd4){let _0x2b4804=['停','强','结束'];let _0xc570d6=app['getPackageName'](_0x3b1cd4);if(_0xc570d6){app['openAppSetting'](_0xc570d6);text(_0x3b1cd4)[_0x5484('0x56')]();for(var _0x4985a0=0x0;_0x4985a0<_0x2b4804['length'];_0x4985a0++){if(textContains(_0x2b4804[_0x4985a0])['exists']()){let _0x32b81e=textContains(_0x2b4804[_0x4985a0])['findOne']();if(_0x32b81e[_0x5484('0x2a')]()){_0x32b81e['click']();text('确定')[_0x5484('0x2')]()['click']();toastLog(_0x3b1cd4+'已结束运行');sleep(0x320);back();break;}else{toastLog(_0x3b1cd4+_0x5484('0x3a'));back();break;}}}}else{toastLog('应用不存在');}}threads['start'](function(){events[_0x5484('0x18')]();events['on'](_0x5484('0x65'),function(_0x1c2aba,_0x44b620){if(_0x1c2aba==keys['volume_down']){toast(_0x5484('0xa'));sleep(0x7d0);exit();}});});function 上滑动(){var _0x5b7187=device[_0x5484('0x55')];var _0x530832=device[_0x5484('0x41')];swipe(_0x5b7187/0x2,_0x530832/0x2,_0x5b7187/0x2,_0x530832/0x4,0x1);}function 下滑动(){var _0x4e173a=device['width'];var _0x27c48a=device[_0x5484('0x41')];swipe(_0x4e173a/0x2,_0x27c48a/0x4,_0x4e173a/0x2,_0x27c48a/0x2,0x320);}function 左滑动(){var _0x499dc2=device[_0x5484('0x55')];var _0x3a1821=device[_0x5484('0x41')];swipe(_0x499dc2/0x3,_0x3a1821/0x3,_0x499dc2/0x8,_0x3a1821/0x3,0x1);}
