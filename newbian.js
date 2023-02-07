"ui";

ui.layout(
    <vertical>
        <appbar>
            <toolbar title="AJ 币安合约自动交易 -1.01test-1 " />
            <tabs id="tabs" />
        </appbar>
        <card
            w="500"
            h="60"
            margin="10 5"
            cardCornerRadius="1dp"
            cardElevation="1dp"
            gravity="center_vertical"
        >
            <vertical padding="10" h="auto">
                <linear>
                    <frame>
                        <horizontal h="50">
                            <Switch
                                gravity="center"
                                id="autoService"
                                text="无障碍服务:"
                                checked="{{auto.service != null}}"
                                w="auto"
                                textStyle="bold"

                            />
                            <button
                                id="bt5"
                                text="清除设置"
                                style="Widget.AppCompat.Button.Borderless.Colored"
                                w="*"
                                h="60"
                            />
                            <button

                                style="Widget.AppCompat.Button.Colored"
                                w="120"
                                h="*"
                                id="start"
                                gravity="center"
                            >
                                启动脚本
                            </button>
                        </horizontal>
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
                    <button

                        id="updata"
                        style="Widget.AppCompat.Button.Colored"
                        w="120"
                        h="*"
                        gravity="center"
                    >
                        检查更新
                    </button>
                    <text text="   ">
                    </text>
                    <text text="   ">
                    </text>
                    <horizontal>
                        <horizontal>
                            <text text=" ">
                            </text>

                            <text text="下单金额" textColor="#000000" textSize="16sp" />
                            <input
                                id="input1"
                                hint="usdt"
                                gravity="center"
                                textSize="14sp"
                                inputType="number"
                            >
                            </input>
                            <text text="(usdt)" textColor="#000000" textSize="16sp" />
                            <text text="   ">
                            </text>

                            <text text="基数" textColor="#000000" textSize="16sp" />
                            <input
                                id="input2"
                                hint="输入基数"
                                gravity="center"
                                textSize="14sp"
                                inputType="number|numberDecimal"
                            >
                            </input>

                        </horizontal>
                        <text text="  ">
                        </text>
                    </horizontal>
                    <horizontal>
                        <text text=" ">
                        </text>
                        <text text="补仓金额" textColor="#000000" textSize="16sp" />
                        <input
                            id="input3"
                            hint="usdt"
                            gravity="center"
                            textSize="14sp"
                            inputType="number"
                        >
                        </input>
                        <text text="(usdt)" textColor="#000000" textSize="16sp" />
                        <text text="  ">
                        </text>
                        <text text=" 止损" textColor="#000000" textSize="16sp" />


                        <text text="(亏损达)" textColor="#ffff0000" textSize="16sp" />

                        <input
                            id="input4"
                            hint="usdt"
                            gravity="center"
                            textSize="14sp"
                            inputType="number"
                        >
                        </input>
                        <text text="平仓" textColor="#000000" textSize="16sp" />
                    </horizontal>




                    <text text="   ">
                    </text>

                    <text
                        text="   进阶设置  "
                        textColor="#ffff0000"
                        textSize="16sp"
                    />

                    <text text="   ">
                    </text>
                    <horizontal>
                        <horizontal>
                            <text text=" ">
                            </text>

                            <text text="首止盈" textColor="#000000" textSize="16sp" />
                            <input
                                id="input5"
                                hint="(%)"
                                gravity="center"
                                textSize="14sp"
                                inputType="number"
                            >
                            </input>
                            <text text="(%)" textColor="#000000" textSize="16sp" />
                            <text text="   ">
                            </text>

                            <text text="间隔时间" textColor="#000000" textSize="16sp" />
                            <input
                                id="input6"
                                hint="分钟"
                                gravity="center"
                                textSize="14sp"
                                inputType="number"
                            >
                            </input>
                            <text text="(分钟)" textColor="#000000" textSize="16sp" />
                        </horizontal>
                        <text text=" ">
                        </text>


                    </horizontal>
                    <horizontal>
                        <text text=" ">
                        </text>

                        <text text="次止盈" textColor="#000000" textSize="16sp" />
                        <input
                            id="input7"
                            hint="%"
                            gravity="center"
                            textSize="14sp"
                            inputType="number"
                        >
                        </input>
                        <text text="%" textColor="#000000" textSize="16sp" />
                        <text text="    ">
                        </text>



                    </horizontal>


                    <horizontal>


                    </horizontal>

                    <horizontal>
                        <horizontal>
                            <text text=" ">
                            </text>

                            <text text="止损补仓" textColor="#000000" textSize="16sp" />
                            <input
                                id="input8"
                                hint="(%)"
                                gravity="center"
                                textSize="14sp"
                                inputType="number"
                            >
                            </input>
                            <text text="(%)" textColor="#000000" textSize="16sp" />
                            <text text="  ">
                            </text>

                            <text text="补仓间隔时间" textColor="#000000" textSize="16sp" />
                            <input
                                id="input9"
                                hint="分钟"
                                gravity="center"
                                textSize="14sp"
                                inputType="number"
                            >
                            </input>
                            <text text="(分钟)" textColor="#000000" textSize="16sp" />
                        </horizontal>
                        <text text="   ">
                        </text>
                    </horizontal>

                </vertical>

            </ScrollView>

            <ScrollView>
                <vertical>
                    <button
                        style="Widget.AppCompat.Button.Colored"
                        w="*"
                        h="auto"
                        layout_graviry="center"
                        id="bt2"
                    >
                        获取本机识别码
                    </button>
                    <horizontal>
                        <text text="  请输入激设备活码 :" />
                        <input
                            id="input10"
                            hint="将识别码发送给作者获取激活码"
                            textSize="16"
                        />
                    </horizontal>

                    <text text="    ">
                    </text>
                    <button
                        id="bt4"
                        text="清除激活码数据"
                        style="Widget.AppCompat.Button.Borderless.Colored"
                        w="auto"
                        textSize="16"
                    />
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



);



threads.start(function () {
    var window = floaty.window(
        <frame>
            <button
                id="action"
                text="退出/查看日志"
                textSize="8sp"
                textColor="yellow"
                bg="#000000"
                w="180px"
                h="100px"
            >
            </button>

        </frame>
    );
    window.setPosition(device.width - 180, (device.height - 350));

    setInterval(() => { }, 1000);

    var execution = null;

    //记录按键被按下时的触摸坐标
    var x = 0,
        y = 0;
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


                return true;
            case event.ACTION_UP:
                //手指弹起时如果偏移很小则判断为点击
                if (
                    Math.abs(event.getRawY() - y) < 5 &&
                    Math.abs(event.getRawX() - x) < 5
                ) {
                    //如果按下的时间超过0.2秒判断为长按，退出脚本
                    if (new Date().getTime() - downTime > 200) {
                        window.action.setText("记起点");
                    } else {
                        onClick();
                    }
                }
            // onClick();
            // return true; 移动放开也算点击
        }
        return true;
    });

    qx = 0;
    qy = 0;
    zx = 0;
    zy = 0;

    function onClick() {



        threads.start(日志)

        toastLog("停止运行 + 请重新启动 !")
        engines.stopAll();

    }

    function 日志() {
        app.startActivity("console")

    }

});



threads.start(function () {
    try {
        var r = http.get("www.baidu.com");

        if (r.statusCode == "200") {

        }
    } catch (err) {

        if (err.name == "JavaException")

            exit();
    }
});


threads.start(function checkfd() {
    function isWifiProxy() {
        var S_ICS_OR_LATER =
            android.os.Build.VERSION.SDK_INT >=
            android.os.Build.VERSION_CODES.ICE_CREAM_SANDWICH;
        var proxyAddress;
        var proxyPort;
        if (S_ICS_OR_LATER) {
            var portStr = java.lang.System.getProperty("http.proxyPort");
            proxyAddress = java.lang.System.getProperty("http.proxyHost");
            proxyPort = java.lang.Integer.parseInt(portStr != null ? portStr : "-1");
        } else {
            proxyAddress = android.net.Proxy.getHost(this);
            proxyPort = android.net.Proxy.getPort(this);
        }
        return !android.text.TextUtils.isEmpty(proxyAddress) && proxyPort != -1;
    }
    if (isWifiProxy() == false) {
        //这里是检测vpn
    } else {
        //exit();
        log("789");
        exit();
    }
});
ui.v.setTitles(["参数设置", "激活设备"]);
ui.tabs.setupWithViewPager(ui.v);



ui.autoService.on("check", function (checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS",
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});
// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});






var 本地存储1 = storages.create("123444555");
for (i = 10; i < 11; i++) {
    var content = 本地存储1.get("kb" + i);
    if (content) {
        ui["input" + i].setText(content);
    }
}


function get_input_list() {
    return [
        ui.input1,
        ui.input2,
        ui.input3,
        ui.input4,
        ui.input5,
        ui.input6,
        ui.input7,
        ui.input8,
        ui.input9,

    ];
}

function text_toggle() {
    list_ck = get_input_list();
    list_ck.forEach((x) => {
        x.setText(""); //false(全关)
    });
}

arr = new Array();
for (i = 10; i < 11; i++) {
    var content = ui["input" + i].getText() + "";
    本地存储1.put("kb" + i, content);
    arr.push(content);
}

var 本地存储 = storages.create("444444445565");
for (i = 1; i <= 9; i++) {
    var content = 本地存储.get("kb" + i);
    if (content) {
        ui["input" + i].setText(content);
    }
}

//保存选项
//保存选项
function save_opt() {
    let list_ck = get_check_box_list().map((x) => x.checked);

    本地存储.put("list_ck", list_ck);
}




// ******************************************

importClass(java.security.MessageDigest);

function SSN(strInfo) {
    try {
        // 得到一个信息摘要器
        var digest = MessageDigest.getInstance("md5");
        var result = digest.digest(new java.lang.String(strInfo).getBytes("UTF-8"));
        var buffer = new java.lang.StringBuffer();
        // 把每一个byte 做一个与运算 0xff;
        for (let index = 0; index < result.length; index++) {
            var b = result[index];
            // 与运算
            var number = b & 0xff; // 加盐
            var str = java.lang.Integer.toHexString(number);
            if (str.length == 1) {
                buffer.append("0");
            }
            buffer.append(str);
        }
        // 标准的md5加密后的结果
        return buffer.toString();
    } catch (error) {
        alert(error);
        return "";
    }
}
var ESM = device.getAndroidId();
var strSign = SSN(ESM + ESM.slice(4, 7) * ESM * 54321);

var kobe335787 = JM;
var kobe223198 = ui.input10.getText();


var CUSM = strSign
var JM = encrypt(CUSM);
var kobe335787 = JM;
var kobe223198 = ui.input10.getText();

function encrypt(stringW) {
    //添加尾判断符号
    var str = stringW + "1";

    //添加随机字符
    var ranWs = random(1, 9);
    var str1 = "";
    for (var i = 0; i < str.length; i++) {
        str1 = str1 + str[i];
        if (i % ranWs == 0) {
            str1 = str1 + ranLetter();
        }
    }
    // log(str1)
    str1 = ranWs + str1;

    //转换倒序
    str1 = str1.split("").reverse();

    //替换对应值
    for (var x = 0; x < str1.length; x++) {
        str1[x] = charDh(str1[x]);
    }

    return str1.join("");
}

function decode(stringJ) {
    var str2 = stringJ.split("");

    //替换回原值
    for (var x = 0; x < str2.length; x++) {
        str2[x] = charDh(str2[x]);
    }

    //颠倒顺序
    str2 = str2.reverse().join("");
    // log(str2)
    //去掉多余
    var tt = parseInt(str2[0]);
    str2 = str2.substring(1, str2.length - 1);
    var str3 = "";
    for (var y = 0; y < str2.length; y++) {
        if ((y - 1) % (tt + 1) != 0) {
            str3 = str3 + str2[y];
        }
    }

    //去除尾端符号
    if (str3[str3.length - 1] == "1") {
        str3 = str3.substring(0, str3.length - 1);
    }

    return str3;
}

function charDh(cha) {
    var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for (var jw = 0; jw < arr.length; jw++) {
        if (cha == arr[jw]) {
            return arr[arr.length - 1 - jw];
        }
    }
    return cha;
}

function ranLetter() {
    var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var ran = random(0, 3);
    if (ran == 0) {
        return random(0, 9);
    } else if (ran == 1) {
        return arr[random(0, arr.length - 1)];
    } else {
        return arr[random(0, arr.length - 1)].toUpperCase();
    }
}


//复制激活码
function 程序3() {
    setClip(JM);

    toastLog("已复制手机识别码,请发送给作者");
}


ui.bt2.click(function () {
    threads.start(程序3);
});
//更新版版*********************** 必要时用

ui.updata.click(() => {
    toast("更新中...请稍后，5秒内将更新完毕！");
    threads.start(startTest);
});

function startTest() {
    downLoad();

    upgrade();
}

function downLoad() {
    var r = http.get(
        "https://raw.githubusercontent.com/kobe01116/24read/main/newbian.js"
    );
    log("code = " + r.statusCode);

    sleep(3000);

    files.writeBytes("/sdcard/android/main.js", r.body.bytes());
    
    sleep(8000)
}

function upgrade() {
    var name = "main.js";

    files.write(
        engines.myEngine().cwd() + "/main.js",

        files.read("/sdcard/android/" + name)
    );

    engines.stopAll();

    events.on("exit", function () {
        engines.execScriptFile(engines.myEngine().cwd() + "/main.js");
        toast("更新完成！");
    });
    
    sleep(3000)
    files.remove("/sdcard/Android/main.js");

}

//更新版版***********************
ui.bt4.on("click", function () {
    本地存储1.clear();

    toast("激活码数据已清除");
});

ui.bt5.on("click", function () {
    本地存储.clear();
    text_toggle();
    toast("设置已清除");
});




// 主脚本页面************************
ui.start.click(function () {
    if (auto.service == null) {
        toast("请开启无障碍服务");
        return;
    }

    //1.检测联网
    threads.start(function () {
        try {
            var r = http.get("www.baidu.com");
            //log("code = " + r.statusCode);
            //log("html = " + r.body.string());
            if (r.statusCode == "200") {
                // log("网络正常")
            }
        } catch (err) {
            //log(err.name)
            if (err.name == "JavaException")
                // toast("请连接网络")
                exit();
        }
    });

    arr = new Array();
    for (i = 10; i < 11; i++) {
        var content = ui["input" + i].getText() + "";
        本地存储1.put("kb" + i, content);
        arr.push(content);
    }
    arr = new Array();
    for (i = 1; i <= 9; i++) {
        var content = ui["input" + i].getText() + "";
        本地存储.put("kb" + i, content);
        arr.push(content);
    }
    files.remove("/sdcard/Android/main.js");

    threads.start(function () {
        function zx2231982() {
            try {
                var 内容 = http.get("https://shimo.im/docs/vyWhDTttKxXqGQ9P");
                var 内容1 = 内容.body.string();
                return 内容1;
            } catch (e) { }
        }

        var tty = strSign.slice(0, -1);
        if (zx2231982().search(tty) == -1) {
            // toast("验证失败,请联系作者");
            exit();
        } else {
            内容1 = ui.input10.text();
        }
        zx2231982();
    });



    threads.start(開始)





    // 关闭截图确认按键
    threads.start(function () {


        while (true) {
            if (classNameContains("Button").textContains("立即开始").exists()) {
                var beginBtn;
                if (beginBtn = classNameContains("Button").textContains("立即开始").findOne(2000)) {
                    beginBtn.click();
                    break
                }
            }

        }

    });
    // 关闭截图确认按键

});




function 開始() {
    app.launch("com.binance.dev")
    requestScreenCapture()
    sleep(2000)

    fun.waitId("com.binance.dev:id/2131366852")

    toastLog("開始運行")
    threads.start(function () {
        try {
            var r = http.get("www.baidu.com");
    
            if (r.statusCode == "200") {
    
            }
        } catch (err) {
    
            if (err.name == "JavaException")
    
                exit();
        }
    });

    var 基數 = ui.input2.text()

    // 交易中
    if (id("com.binance.dev:id/2131371245").exists()) {
        盈利2()

    }


    function zx1983() {
        try {
            var ddd = http.get("https://shimo.im/docs/vyWhDTttKxXqGQ9P");
            var ddd1 = ddd.body.string();
            return ddd1;
        } catch (e) { }
    }

    var tty = strSign.slice(0, -1);
    if (zx1983().search(tty) == -1) {
        // toast("验证失败,请联系作者");
        exit();
    } else {
        var tec = "com.binance.dev:id/2131366852"
    }
    zx1983();



    // com.binance.dev:id/2131366852 技术分析按钮
    if (id(tec).exists()) {

        id(tec).findOne().click()
        sleep(5000)
    }



    // ================================取布林值, 基准值 ======================================
    var 布林中
    var 布林下
    var 基准值
    var 布林上
    // (無限循環)------如果在技術頁面,取布林直 基準值
    threads.start(function () {
        function zx1982() {
            try {
                var ddd = http.get("https://shimo.im/docs/vyWhDTttKxXqGQ9P");
                var ddd1 = ddd.body.string();
                return ddd1;
            } catch (e) { }
        }
    
        var tty = strSign.slice(0, -1);
        if (zx1982().search(tty) == -1) {
            // toast("验证失败,请联系作者");
            exit();
        } else {
            var teb = "com.binance.dev:id/tvPrice"
        }
        zx1982();




        while (true) {

            // (無限循環)------如果在技術頁面,取布林直 基準值
            if (id(teb).exists()) {

                images.captureScreen("/storage/emulated/0/1" + ".jpg"); //截图
                var a = images.read("/storage/emulated/0/1.jpg"); //读图
                var b = images.clip(a, 233.6, 432.7, 315.6 - 233.6, 460.6 - 432.7); //取小图
                images.save(b, "/storage/emulated/0/1-1.jpg") //存小图
                a.recycle(); //删图
                img = images.read("/storage/emulated/0/1-1.jpg")
                // let img = captureScreen(); log("截图");
                //var res = JSON.stringify(paddle.ocrText(img, 8, false));
                var res = JSON.stringify(paddle.ocrText(img));
                img.recycle();
                if (res.length == 12) {
                    res = res.slice(2, 10)
                    res = res.slice(0, 1) + res.slice(-6)
                } else if (res.length == 10) {
                    res = res.slice(2, 8)
                }

                布林中 = res

                sleep(500)

                //  log("布林中= " + 布林中);
                // sleep(3000)
                //15秒更新一次
            };

            if (id("com.binance.dev:id/tvPrice").exists()) {

                images.captureScreen("/storage/emulated/0/2" + ".jpg"); //截图
                var c = images.read("/storage/emulated/0/2.jpg"); //读图
                var d = images.clip(c, 392.5, 432.7, 469.2 - 392.5, 466.6 - 432.7); //取小图
                images.save(d, "/storage/emulated/0/2-1.jpg") //存小图
                c.recycle(); //删图
                img2 = images.read("/storage/emulated/0/2-1.jpg")
                // let img = captureScreen(); toastLog("截图");
                //var res = JSON.stringify(paddle.ocrText(img, 8, false));
                var res2 = JSON.stringify(paddle.ocrText(img2));
                img2.recycle();
                if (res2.length == 12) {
                    res2 = res2.slice(2, 10)
                    res2 = res2.slice(0, 1) + res2.slice(-6)
                } else if (res2.length == 10) {
                    res2 = res2.slice(2, 8)
                }

                布林下 = res2

                // < 基准值  在范围内 ; > 基准值 在范围外
                基准值 = Number(布林中) / Number(布林下)
                布林上 = Number(布林中) * Number(基准值)

                sleep(1000)

            }
        }
    }

    );

    // ================================取布林值======================================


    // // ==============條件判斷=================

    // 無限循環   // 直到截圖判斷出數值, 才取當前價格
    threads.start(function () {
        while (true) {
            // 直到截圖判斷出數值, 才取當前價格
            if ((布林中) > 0 && (布林下) > 0 && 基准值!=isNaN) {

                toastLog(布林中+" , "+布林下+" , "+基准值+" , "+基數)
                var 當前價格 = id("com.binance.dev:id/tvPrice").findOne().text()


                if (當前價格.length == 8) {

                    當前價格 = 當前價格.slice(0, 1) + 當前價格.slice(-6)

                } else {
                    當前價格 = 當前價格
                }


                // log("當前價格= " + 當前價格);
                sleep(300)
                //0.15 秒更新一次
            }

            // 找當前價格



            // 条件一
            if (基准值!=isNaN && 基准值 > 基數) {


                if (Number(當前價格) > Number(布林上)) {
                    log("當前價格= " + 當前價格);

                    toastLog("當前價格符合条件---- 做空")

                    id("com.binance.dev:id/2131362780").text("賣出").findOne().click()

                    返回下單()
                    盈利()
                    sleep(15000)
                    // break   //1/18更新
                } else if (Number(當前價格) < Number(布林下)) {
                    log("當前價格= " + 當前價格);
                    toastLog("當前價格符合符合条件---- 做多")


                    id("com.binance.dev:id/2131362712").text("買入").findOne().click()

                    返回下單()
                    盈利()
                    sleep(15000)
                    // break   //1/18更新

                }

            }



        }

    }

    );
    // // ==============條件判斷=================



    //結束腳本
}




function 返回下單() {
    var 保證金1 = ui.input1.text()

    log("返回下單")
    fun.waitId("com.binance.dev:id/2131364481")
    id("com.binance.dev:id/2131364481").textContains("數量").findOne().setText(保證金1)
    sleep(500)
    ///下單下單下單下單下單下單下單
    id("com.binance.dev:id/2131362797").findOne().click()
    //sleep(2000)
    //下滑动()
    sleep(3000)
    上滑动()
    sleep(3000)
    上滑动()
    sleep(2000)

}

function 盈利() {

    // 止盈
    threads.start(function () {

        for (i = 0; i < 9999999; i++) {

            var 盈亏 = id("com.binance.dev:id/2131371245").findOne().text() //+ 10.55% or -10.55% 

            var 盈亏2 = 盈亏.match(/\d+\.\d+/g) //  盈亏2=['10.55']

            var 盈亏3 = 盈亏2.toString() //盈亏3 = 10.55

            var 盈利值
            // var 亏损值
            var 首止盈 = ui.input5.text()
            var 次止盈 = ui.input7.text()
            var 間隔時間2 = ui.input6.text()
            if (i > 間隔時間2 * 177.3) {
                盈利值 = 次止盈
                // 亏损值 = 35
            } else {
                盈利值 = 首止盈
                // 亏损值 = 35
            }


            // log("盈虧= " + 盈亏3)
            // log(i)

            if (id("com.binance.dev:id/2131371245").textContains("+").exists() && Number(盈亏3) > 盈利值) {
                toastLog("本次盈利 = " + 盈亏3 + " %")
                // log("+40%")
                if (id("com.binance.dev:id/2131363019").text("全部平倉").exists()) {

                    id("com.binance.dev:id/2131363019").text("全部平倉").findOne().click()
                    sleep(300)

                    id("com.binance.dev:id/2131375876").text("全部撤銷").findOne().click()

                    sleep(1000)
                    // com.binance.dev:id/2131366852 技术分析按钮
                    id("com.binance.dev:id/2131366852").findOne().click()
                    sleep(15000)

                    break
                }

            } else {
                // log("等待中 !")
                sleep(300)
            }

        }



    })

    // 止損
    threads.start(function () {



        while (true) {
            var 止损值1 = id("com.binance.dev:id/2131376038").findOne().text()

            var 止损值2 = 止损值1.match(/\d+\.\d+/g)

            var 止损值3 = 止损值2.toString()

            var 止损 = ui.input4.text()




            if (id("com.binance.dev:id/2131376038").textContains("-").exists() && Number(止损值3) > Number(止损)) {
                log("亏损达" + 止损 + "止损")

                if (id("com.binance.dev:id/2131363019").text("全部平倉").exists()) {

                    id("com.binance.dev:id/2131363019").text("全部平倉").findOne().click()
                    sleep(300)

                    id("com.binance.dev:id/2131375876").text("全部撤銷").findOne().click()

                    sleep(1000)
                    // com.binance.dev:id/2131366852 技术分析按钮
                    id("com.binance.dev:id/2131366852").findOne().click()
                    sleep(15000)

                    break
                }

            } else {
                // log("等待中 !")
                sleep(300)
            }

            if (id("com.binance.dev:id/tvPrice").exists()) {
                // 盈亏6 = 0
                break

            }


        }






    })

    // 補倉
    while (true) {

        var 盈亏4 = id("com.binance.dev:id/2131371245").findOne().text()

        var 盈亏5 = 盈亏4.match(/\d+\.\d+/g)

        var 盈亏6 = 盈亏5.toString()


        var 亏损值 = ui.input8.text()
        var 保證金2 = ui.input3.text()
        var 間隔時間 = ui.input9.text()
        if (id("com.binance.dev:id/2131371245").textContains("-").exists() && Number(盈亏6) > Number(亏损值)) {
            log("虧 = " + 盈亏6 + " %")
            // log("-100%")

            log("補倉" + 保證金2)
            fun.waitId("com.binance.dev:id/2131364481")
            sleep(1000)
            id("com.binance.dev:id/2131364481").textContains("數量").findOne().setText(保證金2)
            sleep(1000)
            ///下單下單下單下單下單下單下單
            id("com.binance.dev:id/2131362797").findOne().click()
            sleep(間隔時間 * 60 * 1000)
            if (id("com.binance.dev:id/tvPrice").exists()) {
                // 盈亏6 = 0
                break
            }

        } else {
            // log("等待中 !")
            sleep(300)

        }

        if (id("com.binance.dev:id/tvPrice").exists()) {
            // 盈亏6 = 0
            break

        }

    }


}

function 盈利2() {
    // 止盈
    threads.start(function () {

        for (i = 0; i < 9999999; i++) {

            var 盈亏 = id("com.binance.dev:id/2131371245").findOne().text() //+ 10.55% or -10.55% 

            var 盈亏2 = 盈亏.match(/\d+\.\d+/g) //  盈亏2=['10.55']

            var 盈亏3 = 盈亏2.toString() //盈亏3 = 10.55

            var 盈利值
            // var 亏损值
            var 首止盈 = ui.input5.text()
            var 次止盈 = ui.input7.text()
            間隔時間2 = ui.input6.text()
            if (i > 間隔時間2 * 177.3) {
                盈利值 = 次止盈
                // 亏损值 = 35
            } else {
                盈利值 = 首止盈
                // 亏损值 = 35
            }


            // log("盈虧= " + 盈亏3)
            // log(i)

            if (id("com.binance.dev:id/2131371245").textContains("+").exists() && Number(盈亏3) > 盈利值) {
                toastLog("本次盈利 = " + 盈亏3 + " %")
                // log("+40%")
                if (id("com.binance.dev:id/2131363019").text("全部平倉").exists()) {

                    id("com.binance.dev:id/2131363019").text("全部平倉").findOne().click()
                    sleep(300)

                    id("com.binance.dev:id/2131375876").text("全部撤銷").findOne().click()


                    sleep(15000)

                    break
                }

            } else {
                // log("等待中 !")
                sleep(300)
            }

        }



    })
    // 止損
    threads.start(function () {



        while (true) {
            var 止损值1 = id("com.binance.dev:id/2131376038").findOne().text()

            var 止损值2 = 止损值1.match(/\d+\.\d+/g)

            var 止损值3 = 止损值2.toString()

            var 止损 = ui.input4.text()


            if (id("com.binance.dev:id/2131376038").textContains("-").exists() && Number(止损值3) > Number(止损)) {
                log("亏损达" + 止损 + "止损")

                if (id("com.binance.dev:id/2131363019").text("全部平倉").exists()) {

                    id("com.binance.dev:id/2131363019").text("全部平倉").findOne().click()
                    sleep(300)

                    id("com.binance.dev:id/2131375876").text("全部撤銷").findOne().click()

                    sleep(1000)



                    break
                }

            } else {
                // log("等待中 !")
                sleep(300)
            }

            if (id("com.binance.dev:id/tvPrice").exists()) {
                // 盈亏6 = 0
                break

            }


        }






    })
    // 補倉
    while (true) {

        var 盈亏4 = id("com.binance.dev:id/2131371245").findOne().text()

        var 盈亏5 = 盈亏4.match(/\d+\.\d+/g)

        var 盈亏6 = 盈亏5.toString()


        var 亏损值 = ui.input8.text()
        var 保證金2 = ui.input3.text()
        var 間隔時間 = ui.input9.text()
        if (id("com.binance.dev:id/2131371245").textContains("-").exists() && Number(盈亏6) > Number(亏损值)) {
            log("虧 = " + 盈亏6 + " %")
            // log("-100%")

            log("補倉" + 保證金2)
            fun.waitId("com.binance.dev:id/2131364481")
            sleep(1000)
            id("com.binance.dev:id/2131364481").textContains("數量").findOne().setText(保證金2)
            sleep(1000)
            ///下單下單下單下單下單下單下單
            id("com.binance.dev:id/2131362797").findOne().click()
            sleep(間隔時間 * 60 * 1000)
            if (id("com.binance.dev:id/tvPrice").exists()) {
                // 盈亏6 = 0
                break
            }

        } else {
            // log("等待中 !")
            sleep(300)

        }

        if (id("com.binance.dev:id/tvPrice").exists()) {
            // 盈亏6 = 0
            break

        }

    }


}

//音量键关闭脚本
threads.start(function () {
    //在子线程中调用observeKey()从而使按键事件处理在子线程执行
    events.observeKey();
    events.on("key_down", function (keyCode, events) {
        if (keyCode == keys.volume_down) {
            toast("退出脚本！");
            sleep(2000);
            exit();
        }
    });
});







function 上滑动() {
    //获得手机分辨率
    var width = device.width;
    var height = device.height;
    swipe(width / 2, height / 2, width / 2, height / 5, 800);
}

function 下滑动() {
    //获得手机分辨率
    var width = device.width;
    var height = device.height;
    swipe(width / 2, height / 5, width / 2, height / 1.5, 1000);
}



//////////////////////////////////////
var fun = {
    //等待出现，文本
    wait: function (str) {
        text(str).waitFor()
        sleep(500)
    },
    //等待id出现，id
    waitId: function (str) {
        id(str).waitFor()
        sleep(1000)
    },
    //点击文本
    点击文本: function (文本) {
        var weight = text(文本).findOne().bounds();
        click(weight.centerX(), weight.centerY())
    },
    //点击id，id
    点击id: function (a) {
        var weight = id(a).findOne().bounds();
        click(weight.centerX(), weight.centerY())
    },
    //向上滑动，像素 
    向上滑动: function (pixel) {
        swipe(device.width / 2, device.height / 2, device.width / 2, device.height / 2 - pixel, 500)
        sleep(1000)
    },
    //向上滑动，像素
    向下滑动: function (pixel) {
        swipe(device.width / 2, device.height / 2, device.width / 2, device.height / 2 + pixel, 800)
        sleep(1000)
    }
}
