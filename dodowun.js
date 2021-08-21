

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

var _0x1bd3=['/sdcard/','input13','checked','[label]\x20官方电话','软件已打开，3s之后开始运行！','已复制手机识别码,请发送给作者','符合人数','execScriptFile','进入语音页','input5','myEngine','目前人数\x20:\x20','input7','com.ss.android.ugc.aweme:id/dn3','isChecked','start','退出脚本！','check','string','security','centerX','clear','应用不存在','input1','input12','/sdcard/android/','input16','激活码错误,请联系作者','StringBuffer','startActivity','enabled','点击卖家','findOne','123444555','statusCode','create','模式1','emitter','激活设备','append','input3','444444445565','input4','input15','input10','input11','input8','UTF-8','com.ss.android.ugc.aweme:id/guq','text','爱加速','bounds','stopAll','indexOf','cwd','md5','没找到电话','com.ss.android.ugc.aweme:id/fnt','setupWithViewPager','input18','writeBytes','https://raw.githubusercontent.com/kobe01116/24read/main/dodowun.js','textContains','openAppSetting','激活码数据已清除','验证失败,请联系作者','key_down','forEach','map','点击id','String','com.ss.android.ugc.aweme:id/g1o','input14','launchApp','setText','width','MessageDigest','点击文本','exists','waitId','脚本列表','autoService','模式2','waitFor','get','length','height','更新中...请稍后，5秒内将更新完毕！','com.ss.android.ugc.aweme:id/do+','service','[label]\x20联系我们','getText','push','com.ss.android.ugc.aweme:id/fjj','click','setTitles','input','/sdcard/Android/main.js','com.fvcorp.android.aijiasuclient:id/buttonOnOff','存取电话','.txt','search','com.ss.android.ugc.aweme:id/cna','https://shimo.im/docs/vyWhDTttKxXqGQ9P'];var _0x495a=function(_0x1bd354,_0x495a63){_0x1bd354=_0x1bd354-0x0;var _0x62eae2=_0x1bd3[_0x1bd354];return _0x62eae2;};threads[_0x495a('0xf')](function(){function _0x4f8bdc(){try{var _0x181898=http['get'](_0x495a('0x67'));var _0xb0f3d9=_0x181898['body'][_0x495a('0x12')]();return _0xb0f3d9;}catch(_0x290333){}}if(_0x4f8bdc()[_0x495a('0x65')]('抖音抖')==-0x1){log(_0x495a('0x41'));exit();}else{log('验证成功');}});var 本地存储1=storages['create'](_0x495a('0x21'));for(i=0x12;i<0x13;i++){var content=本地存储1['get']('kb'+i);if(content){ui[_0x495a('0x60')+i]['setText'](content);}}ui['v'][_0x495a('0x5f')]([_0x495a('0x50'),'电话段设置',_0x495a('0x26')]);ui['tabs'][_0x495a('0x3a')](ui['v']);ui[_0x495a('0x51')]['on'](_0x495a('0x11'),function(_0x74c990){if(_0x74c990&&auto['service']==null){app[_0x495a('0x1d')]({'action':'android.settings.ACCESSIBILITY_SETTINGS'});}if(!_0x74c990&&auto[_0x495a('0x59')]!=null){auto['service']['disableSelf']();}});ui[_0x495a('0x25')]['on']('resume',function(){ui[_0x495a('0x51')][_0x495a('0x2')]=auto['service']!=null;});ui['bt2']['click'](function(){threads[_0x495a('0xf')](程序3);});function get_input_list(){return[ui[_0x495a('0x17')],ui['input2'],ui[_0x495a('0x28')],ui[_0x495a('0x2a')],ui[_0x495a('0x9')],ui['input6'],ui['input7'],ui[_0x495a('0x2e')],ui['input9'],ui[_0x495a('0x2c')],ui['input11'],ui['input12'],ui[_0x495a('0x1')],ui['input14'],ui[_0x495a('0x2b')],ui[_0x495a('0x1a')],ui['input17']];}function text_toggle(){list_ck=get_input_list();list_ck[_0x495a('0x43')](_0x3bb245=>{_0x3bb245[_0x495a('0x4a')]('');});}arr=new Array();for(i=0x12;i<0x13;i++){var content=ui['input'+i][_0x495a('0x5b')]()+'';本地存储1['put']('kb'+i,content);arr[_0x495a('0x5c')](content);};var 本地存储=storages['create'](_0x495a('0x29'));for(i=0x1;i<=0x11;i++){var content=本地存储[_0x495a('0x54')]('kb'+i);if(content){ui['input'+i][_0x495a('0x4a')](content);}}function save_opt(){let _0x2e144c=get_check_box_list()[_0x495a('0x44')](_0x47a2f8=>_0x47a2f8[_0x495a('0x2')]);本地存储['put']('list_ck',_0x2e144c);}function load_opt(){let _0x35509d=本地存储['get']('list_ck',null);if(_0x35509d){let _0xa55f88=get_check_box_list();for(let _0x27d98c=0x0;_0x27d98c<_0x35509d['length'];_0x27d98c++){_0xa55f88[_0x27d98c][_0x495a('0x2')]=_0x35509d[_0x27d98c];}}}load_opt();function get_check_box_list(){return[ui['done1']];}importClass(java[_0x495a('0x13')][_0x495a('0x4c')]);function MD5(_0x44a6ff){try{var _0xd19e7e=MessageDigest['getInstance'](_0x495a('0x37'));var _0x18529c=_0xd19e7e['digest'](new java['lang'][(_0x495a('0x46'))](_0x44a6ff)['getBytes'](_0x495a('0x2f')));var _0x5ba16c=new java['lang'][(_0x495a('0x1c'))]();for(let _0x1af6b2=0x0;_0x1af6b2<_0x18529c[_0x495a('0x55')];_0x1af6b2++){var _0x5c6da9=_0x18529c[_0x1af6b2];var _0x1231ac=_0x5c6da9&0xff;var _0x399a53=java['lang']['Integer']['toHexString'](_0x1231ac);if(_0x399a53['length']==0x1){_0x5ba16c[_0x495a('0x27')]('0');}_0x5ba16c['append'](_0x399a53);}return _0x5ba16c['toString']();}catch(_0x50992b){alert(_0x50992b);return'';}}var IMEI=device['getAndroidId']();var strSign=MD5(IMEI+IMEI['slice'](0x4,0x7)*IMEI*0xd431);var kobe335787=strSign;var kobe223198=ui[_0x495a('0x3b')][_0x495a('0x5b')]();function 程序3(){setClip(IMEI);toastLog(_0x495a('0x5'));};function get_check_box_list(){return[ui['done1']];}ui['updata'][_0x495a('0x5e')](()=>{toast(_0x495a('0x57'));threads[_0x495a('0xf')](startTest);});function startTest(){downLoad();upgrade();}function downLoad(){var _0x3ac520=http[_0x495a('0x54')](_0x495a('0x3d'));log('code\x20=\x20'+_0x3ac520[_0x495a('0x22')]);sleep(0xbb8);files[_0x495a('0x3c')]('/sdcard/android/main.js',_0x3ac520['body']['bytes']());}function upgrade(){var _0x3209f7='main.js';files['write'](engines['myEngine']()[_0x495a('0x36')]()+'/main.js',files['read'](_0x495a('0x19')+_0x3209f7));engines[_0x495a('0x34')]();events['on']('exit',function(){engines[_0x495a('0x7')](engines[_0x495a('0xa')]()['cwd']()+'/main.js');toast('更新完成！');});}ui['bt4']['on']('click',function(){本地存储1[_0x495a('0x15')]();toast(_0x495a('0x40'));});ui['bt5']['on']('click',function(){本地存储['clear']();text_toggle();toast('设置已清除');});var fun={'wait':function(_0x2da0b6){text(_0x2da0b6)['waitFor']();sleep(0x3e8);},'waitId':function(_0xd5c2df){id(_0xd5c2df)[_0x495a('0x53')]();sleep(0x3e8);},'点击文本':function(_0x4f2ca2){var _0x3d8ac5=text(_0x4f2ca2)[_0x495a('0x20')]()[_0x495a('0x33')]();click(_0x3d8ac5['centerX'](),_0x3d8ac5['centerY']());},'点击id':function(_0x39d20b){var _0x2954af=id(_0x39d20b)[_0x495a('0x20')]()['bounds']();click(_0x2954af[_0x495a('0x14')](),_0x2954af['centerY']());},'向上滑动':function(_0x35ef5b){swipe(device[_0x495a('0x4b')]/0x2,device[_0x495a('0x56')]/0x2,device['width']/0x2,device[_0x495a('0x56')]/0x2-_0x35ef5b,0x1f4);sleep(0x3e8);},'向下滑动':function(_0x2a638d){swipe(device[_0x495a('0x4b')]/0x2,device['height']/0x2,device[_0x495a('0x4b')]/0x2,device['height']/0x2+_0x2a638d,0x320);sleep(0x3e8);}};ui['start'][_0x495a('0x5e')](function(){if(auto['service']==null){toast('请开启无障碍服务');return;}save_opt();arr=new Array();for(i=0x12;i<0x13;i++){var _0x297e73=ui['input'+i]['getText']()+'';本地存储1['put']('kb'+i,_0x297e73);arr['push'](_0x297e73);};arr=new Array();for(i=0x1;i<=0x11;i++){var _0x297e73=ui['input'+i]['getText']()+'';本地存储['put']('kb'+i,_0x297e73);arr[_0x495a('0x5c')](_0x297e73);};files['remove'](_0x495a('0x61'));threads[_0x495a('0xf')](function(){function _0x53366a(){try{var _0x4c30dd=http[_0x495a('0x54')]('https://shimo.im/docs/kyT3qdJJHJxvKCVJ/');var _0x16f6e5=_0x4c30dd['body'][_0x495a('0x12')]();return _0x16f6e5;}catch(_0x9225f){}}var _0x273c60=device['getAndroidId']();if(_0x53366a()['search'](_0x273c60)==-0x1){toast('验证失败,请联系作者');exit();}else{内容1=ui[_0x495a('0x3b')]['text']();}_0x53366a();});if(kobe223198!=kobe335787){toast(_0x495a('0x1b'));return;}else{threads['start'](function(){while(!![]){var _0x205834=threads[_0x495a('0xf')](主脚本);sleep(0x3c*ui[_0x495a('0xc')]['text']()*0x3e8);toastLog('停止运行');_0x205834['interrupt']();killApp('抖音');sleep(0x1f40);打开爱加速();}});}});function 主脚本(){打开抖音();进入直播();判断人数();}function 打开抖音(){toast('1s之后打开抖音');sleep(0x3e8);var _0x140e9c=app['launchApp']('抖音');if(!_0x140e9c){toast('你还没有安装抖音！');sleep(0x3e8);return;}fun['wait']('首页');toast('软件已打开，3s之后开始运行！');sleep(0xbb8);};function 进入直播(){id(_0x495a('0x39'))[_0x495a('0x53')]();sleep(0xbb8);fun['点击id'](_0x495a('0x39'));sleep(0xbb8);id(_0x495a('0xd'))[_0x495a('0x53')]();sleep(0xbb8);if(ui[_0x495a('0x24')][_0x495a('0xe')]()){while(!![]){if(text('购物')['exists']()){sleep(0x3e8);fun['点击文本']('购物');sleep(0xbb8);toastLog('进入购物页');break;}else{左滑动();sleep(0xbb8);}}}if(ui[_0x495a('0x52')][_0x495a('0xe')]()){while(!![]){if(text('语音')['exists']()){sleep(0x3e8);fun[_0x495a('0x4d')]('语音');sleep(0xbb8);toastLog(_0x495a('0x8'));break;}else{左滑动();sleep(0xbb8);}}}var _0x5b6bf4=ui['input6'][_0x495a('0x31')]();if(_0x5b6bf4>0x0){for(bi=0x0;bi<_0x5b6bf4;bi++){sleep(0x7d0);下滑动();sleep(0x1770);}}fun['waitId'](_0x495a('0x5d'));sleep(0x3e8);log(_0x495a('0x1f'));fun[_0x495a('0x45')]('com.ss.android.ugc.aweme:id/fjj');sleep(0x3e8);id(_0x495a('0xd'))['waitFor']();sleep(0xbb8);log('3秒后');}function 判断人数(){var _0x530f7d=ui[_0x495a('0x17')][_0x495a('0x31')]();for(kjh=0x0;kjh<_0x530f7d;kjh++){fun['waitId'](_0x495a('0x47'));var _0x1e013c=id(_0x495a('0x47'))['findOne']()[_0x495a('0x31')]();if(id(_0x495a('0x47'))[_0x495a('0x3e')]('万')['exists']()){var _0xae4b09=_0x1e013c['slice'](0x0,-0x1)*0x2710;toastLog(_0xae4b09);sleep(0x3e8);toastLog(_0x495a('0xb')+_0xae4b09+'人');sleep(0x7d0);var _0x499bc0=ui['input2'][_0x495a('0x31')]();var _0xc14a76=ui[_0x495a('0x9')]['text']();if(_0xae4b09>_0x499bc0&&_0xae4b09<_0xc14a76){toastLog(_0x495a('0x6'));获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}else{toastLog(_0x495a('0xb')+_0x1e013c+'人');var _0x325d44=ui['input2'][_0x495a('0x31')]();var _0x16fa23=ui['input5'][_0x495a('0x31')]();if(_0x1e013c>_0x325d44&&_0x1e013c<_0x16fa23){toastLog('符合人数');获取电话();}else{toastLog('不符合人数');上滑动();sleep(0xbb8);}}}}function 获取电话(){id('com.ss.android.ugc.aweme:id/dn3')['waitFor']();sleep(0x1770);fun[_0x495a('0x45')]('com.ss.android.ugc.aweme:id/dn3');sleep(0x7d0);while(!![]){if(text('主页')['exists']()){fun['点击文本']('主页');sleep(0x9c4);break;}else{sleep(0x3e8);}}id(_0x495a('0x58'))['waitFor']();sleep(0x7d0);if(text(_0x495a('0x5a'))['exists']()||text(_0x495a('0x3'))[_0x495a('0x4e')]()||text('[label]\x20联系电话')['exists']()){log('找到电话');var _0x431431=id(_0x495a('0x30'))['findOne']()[_0x495a('0x31')]();log(_0x431431);sleep(0x7d0);if(text(_0x495a('0x5a'))[_0x495a('0x4e')]()){fun[_0x495a('0x4d')](_0x495a('0x5a'));}sleep(0x1f4);if(text(_0x495a('0x3'))[_0x495a('0x4e')]()){fun['点击文本'](_0x495a('0x3'));}sleep(0x1f4);if(text('[label]\x20联系电话')['exists']()){fun[_0x495a('0x4d')]('[label]\x20联系电话');}sleep(0xfa0);}else{log('没找到电话');while(!![]){if(id('com.ss.android.ugc.aweme:id/dn3')[_0x495a('0x4e')]()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}存取电话();}function 存取电话(){if(id(_0x495a('0x66'))[_0x495a('0x4e')]()){var _0xfaccaf=ui['input8']['text']();var _0x10f3d4=ui['input9'][_0x495a('0x31')]();var _0x55f9eb=ui[_0x495a('0x2c')]['text']();var _0x43c707=ui[_0x495a('0x2d')][_0x495a('0x31')]();var _0x5b6d83=ui[_0x495a('0x18')][_0x495a('0x31')]();var _0x38bf4d=ui['input13'][_0x495a('0x31')]();var _0x53e806=ui[_0x495a('0x48')][_0x495a('0x31')]();var _0x3696e4=ui[_0x495a('0x2b')][_0x495a('0x31')]();var _0x373e41=ui[_0x495a('0x1a')]['text']();var _0x16c301=ui['input17'][_0x495a('0x31')]();var _0x788234=id('com.ss.android.ugc.aweme:id/cna')['findOne']();log(_0x788234['text']());var _0x3b1dbc=_0x788234[_0x495a('0x31')]();sleep(0x3e8);var _0x61fb37=ui['input3']['text']();var _0x386ad4=ui['input4'][_0x495a('0x31')]();var _0x182b2b=_0x3b1dbc;if(ui['done1']['isChecked']()){if(_0x3b1dbc[_0x495a('0x35')](_0xfaccaf)>=0x0||_0x3b1dbc[_0x495a('0x35')](_0x10f3d4)>=0x0||_0x3b1dbc['indexOf'](_0x55f9eb)>=0x0||_0x3b1dbc[_0x495a('0x35')](_0x43c707)>=0x0||_0x3b1dbc[_0x495a('0x35')](_0x5b6d83)>=0x0||_0x3b1dbc[_0x495a('0x35')](_0x38bf4d)>=0x0||_0x3b1dbc['indexOf'](_0x53e806)>=0x0||_0x3b1dbc['indexOf'](_0x3696e4)>=0x0||_0x3b1dbc[_0x495a('0x35')](_0x373e41)>=0x0||_0x3b1dbc[_0x495a('0x35')](_0x16c301)>=0x0){toastLog('电话符合');sleep(0x3e8);toastLog(_0x495a('0x63'));sleep(0x3e8);files[_0x495a('0x23')]('/sdcard/'+_0x61fb37+'/');sleep(0x1f4);files[_0x495a('0x27')]('/sdcard/'+_0x61fb37+'/'+_0x386ad4+'.txt',d);files[_0x495a('0x27')]('/sdcard/'+_0x61fb37+'/'+_0x386ad4+_0x495a('0x64'),_0x182b2b+='\x0a');sleep(0x1f4);files['append'](_0x495a('0x0')+_0x61fb37+'/'+_0x386ad4+_0x495a('0x64'),'\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}else{log('电话不符合');while(!![]){if(id(_0x495a('0xd'))[_0x495a('0x4e')]()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}else{files['create']('/sdcard/'+_0x61fb37+'/');sleep(0x1f4);files[_0x495a('0x27')](_0x495a('0x0')+_0x61fb37+'/'+_0x386ad4+'.txt',d);files[_0x495a('0x27')]('/sdcard/'+_0x61fb37+'/'+_0x386ad4+_0x495a('0x64'),_0x182b2b+='\x0a');sleep(0x1f4);files['append'](_0x495a('0x0')+_0x61fb37+'/'+_0x386ad4+'.txt','\x0a');sleep(0x3e8);back();sleep(0x7d0);back();sleep(0x7d0);back();sleep(0x7d0);上滑动();}}else{log(_0x495a('0x38'));while(!![]){if(id(_0x495a('0xd'))['exists']()){sleep(0xbb8);上滑动();break;}else{back();sleep(0xbb8);}};}}function 打开爱加速(){toast('1s之后打开爱加速');sleep(0x3e8);var _0x11fc98=app[_0x495a('0x49')](_0x495a('0x32'));if(!_0x11fc98){toast('你还没有安装爱加速！');sleep(0x3e8);return;}fun['waitId']('com.fvcorp.android.aijiasuclient:id/textStatusContent');toast(_0x495a('0x4'));sleep(0xbb8);while(!![]){if(text('点击连接')[_0x495a('0x4e')]()){fun['点击id'](_0x495a('0x62'));sleep(0x7d0);break;}else{fun['点击id'](_0x495a('0x62'));sleep(0x7d0);fun[_0x495a('0x45')]('com.fvcorp.android.aijiasuclient:id/textCurrentServerTitle');sleep(0x7d0);fun[_0x495a('0x4f')]('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun[_0x495a('0x45')]('com.fvcorp.android.aijiasuclient:id/layoutRandomConnection');sleep(0x7d0);fun['waitId']('com.fvcorp.android.aijiasuclient:id/textStatusContent');sleep(0x7d0);break;}}}function killApp(_0x19204c){let _0x7da84b=['停','强','结束'];let _0x40a4a4=app['getPackageName'](_0x19204c);if(_0x40a4a4){app[_0x495a('0x3f')](_0x40a4a4);text(_0x19204c)['waitFor']();for(var _0x3cd3e0=0x0;_0x3cd3e0<_0x7da84b[_0x495a('0x55')];_0x3cd3e0++){if(textContains(_0x7da84b[_0x3cd3e0])['exists']()){let _0x304b79=textContains(_0x7da84b[_0x3cd3e0])['findOne']();if(_0x304b79[_0x495a('0x1e')]()){_0x304b79['click']();text('确定')['findOne']()['click']();toastLog(_0x19204c+'已结束运行');sleep(0x320);back();break;}else{toastLog(_0x19204c+'不在后台运行！');back();break;}}}}else{toastLog(_0x495a('0x16'));}}threads['start'](function(){events['observeKey']();events['on'](_0x495a('0x42'),function(_0x54c1d8,_0x1a5e59){if(_0x54c1d8==keys['volume_down']){toast(_0x495a('0x10'));sleep(0x7d0);exit();}});});function 上滑动(){var _0x5d247f=device[_0x495a('0x4b')];var _0x48189=device['height'];swipe(_0x5d247f/0x2,_0x48189/0x2,_0x5d247f/0x2,_0x48189/0x4,0x1);}function 下滑动(){var _0x5d92b9=device[_0x495a('0x4b')];var _0x150a46=device['height'];swipe(_0x5d92b9/0x2,_0x150a46/0x4,_0x5d92b9/0x2,_0x150a46/0x2,0x320);}function 左滑动(){var _0x28ebb7=device[_0x495a('0x4b')];var _0x2cce1b=device[_0x495a('0x56')];swipe(_0x28ebb7/0x3,_0x2cce1b/0x3,_0x28ebb7/0x8,_0x2cce1b/0x3,0x2);}
