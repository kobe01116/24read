"ui";

app.launchApp("币安");


toastLog("布林0.004~0.005 - 7 (更新一) - 分三段 !")
// 5分钟布林   通道 -- 4/30

//================





//=======開始按钮========

threads.start(function() {
    var window = floaty.window(
        <frame>
                    <button
                    id="action"
                    text="開始"
                    textSize="8sp"
                    textColor="yellow"
                    bg="#000000"
                    w="150px"
                    h="90px"
                    >
                </button>
                
                </frame>
    );
    window.setPosition(device.width - 250, (device.height - 1250));

    setInterval(() => {}, 1000);

    var execution = null;

    //记录按键被按下时的触摸坐标
    var x = 0,
        y = 0;
    //记录按键被按下时的悬浮窗位置
    var windowX, windowY;
    //记录按键被按下的时间以便判断长按等动作
    var downTime;

    window.action.setOnTouchListener(function(view, event) {
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



        threads.start(開始)

    }
});
//=======開始按钮========


// 关闭截图确认按键
threads.start(function() {


    while (true) {
        if (classNameContains("Button").textContains("立即开始").exists()) {
            var beginBtn;
            if (beginBtn = classNameContains("Button").textContains("立即开始").findOne(2000)) {
                beginBtn.click();
            }
        }

    }

});
// 关闭截图确认按键


var 保證金 = 6.5


// 主脚本运行*******/ 主脚本运行********/ 主脚本运行


function 開始() {
    // console.show();
    toastLog("開始運行")
    requestScreenCapture()
    // 请求权限
    sleep(2000)
    // 首次进入技术分析
    // console.show()

    // sleep(500)

    // console.setSize(450, 350)
    // sleep(500)

    // 侦测脚本运行
    // threads.start(
    //     function () {
    //         while (true) {
    //             toastLog("脚本运行中");
    //             sleep(10000)
    //         }
    //     }


    // )



    // // 首次进入技术分析
    if (id("com.binance.dev:id/2131366852").exists()) {

        id("com.binance.dev:id/2131366852").findOne().click()
        sleep(5000)
    }







    // ================================取布林值, 基准值 ======================================
    var 布林中
    var 布林下
    var 基准值
    var 布林上

    threads.start(function() {
            while (true) {

                if (id("com.binance.dev:id/tvPrice").exists()) {

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

                    // sleep(500)

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

                    //布林中=(Number(布林上)+Number(布林下))/2

                    //toastLog( "布林上= "+布林上);
                    // log("布林下= " + 布林下);
                    // log("布林中= " + 布林中);
                    // log("基准值= " + 基准值);
                    //log("布林上= " + 布林上);

                    // 1秒更新一次
                    sleep(1000)

                }
            }
        }

    );

    // ================================取布林值======================================






    // // ==============條件判斷=================
    threads.start(function() {
            while (true) {
                // 找當前價格
                if (Number(布林中) > 0 && Number(布林下) > 0) {
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
                if (Number(基准值) > 1.0085 && Number(基准值) < 1.0095) {


                    if (Number(當前價格) > Number(布林上 / 1.0002) && Number(當前價格) < Number(布林上 * 1.1)) {
                        log("當前價格= " + 當前價格);

                        toastLog("當前價格符合条件一---- 做空")

                        id("com.binance.dev:id/2131362780").text("賣出").findOne().click()

                        返回下單()
                    } else if (Number(當前價格) < Number(布林下 * 1.0002) && Number(當前價格) > Number(布林下 / 1.1)) {
                        log("當前價格= " + 當前價格);
                        toastLog("當前價格符合符合条件一---- 做多")


                        id("com.binance.dev:id/2131362712").text("買入").findOne().click()

                        返回下單()
                    }


                    // 条件二
                } else if (Number(基准值) > 1.015 && Number(基准值) < 1.05) {

                    if (Number(當前價格) > Number(布林中 * 1.01)) {
                        log("當前價格= " + 當前價格);

                        toastLog("當前價格符合符合条件二---- 做空")

                        id("com.binance.dev:id/2131362780").text("賣出").findOne().click()

                        返回下單()
                    } else if (Number(當前價格) < Number(布林中 / 1.01)) {
                        log("當前價格= " + 當前價格);
                        toastLog("當前價格符合条件二---- 做多")


                        id("com.binance.dev:id/2131362712").text("買入").findOne().click()

                        返回下單()
                    }


                    // 条件三
                } else if (Number(基准值) > 1.004 && Number(基准值) < 1.005) {

                    if (Number(當前價格) > Number(布林上 / 1.0001)) {
                        log("當前價格= " + 當前價格);

                        toastLog("當前價格符合符合条件三---- 做空")

                        id("com.binance.dev:id/2131362780").text("賣出").findOne().click()

                        返回下單()
                    } else if (Number(當前價格) < Number(布林下 * 1.0001)) {
                        log("當前價格= " + 當前價格);
                        toastLog("當前價格符合条件三---- 做多")


                        id("com.binance.dev:id/2131362712").text("買入").findOne().click()

                        返回下單()
                    }



                } else if (Number(基准值) > 1.008 && Number(基准值) < 1.009) {

                    if (Number(當前價格) > Number(布林中 * 1.005)) {
                        log("當前價格= " + 當前價格);

                        toastLog("當前價格符合符合条件三---- 做空")

                        id("com.binance.dev:id/2131362780").text("賣出").findOne().click()

                        返回下單()
                    } else if (Number(當前價格) < Number(布林下 / 1.005)) {
                        log("當前價格= " + 當前價格);
                        toastLog("當前價格符合条件三---- 做多")


                        id("com.binance.dev:id/2131362712").text("買入").findOne().click()

                        返回下單()
                    }



                }











            }

        }

    );
    // // ==============條件判斷=================



    //結束腳本
}




function 返回下單() {

    log("返回下單")
    fun.waitId("com.binance.dev:id/2131364481")
    id("com.binance.dev:id/2131364481").textContains("數量").findOne().setText(保證金)
    sleep(500)
    ///下單下單下單下單下單下單下單
    id("com.binance.dev:id/2131362797").findOne().click()
    //sleep(2000)
    //下滑动()
    sleep(3000)
    上滑动()
    sleep(500)
    上滑动()

    // toastLog("等待180秒");
    // for (var i = 180; i > 0; i--) {
    //   toastLog(i); sleep(1000);
    // }


    for (i = 0; i < 9999999; i++) {

        var 盈亏 = id("com.binance.dev:id/2131371245").findOne().text() //+ 10.55% or -10.55% 

        var 盈亏2 = 盈亏.match(/\d+\.\d+/g) //  盈亏2=['10.55']

        var 盈亏3 = 盈亏2.toString() //盈亏3 = 10.55

        var 盈利值
        var 亏损值
        if (i > 5000) {
            盈利值 = 15
            亏损值 = 35
        } else {
            盈利值 = 35
            亏损值 = 35
        }


        // log("盈虧= " + 盈亏3)
        // log(i)

        if (id("com.binance.dev:id/2131371245").textContains("+").exists() && Number(盈亏3) > 盈利值) {
            log("盈 = " + 盈亏3 + " %")
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

        } else if (id("com.binance.dev:id/2131371245").textContains("-").exists() && Number(盈亏3) > 亏损值) {
            log("虧 = " + 盈亏3 + " %")
            // log("-40%")
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


}



/////////////更新////////////////////////
threads.start(function() {
    var window = floaty.window(
        <frame>
                    <button
                    id="action"
                    text="更新"
                    textSize="8sp"
                    textColor="yellow"
                    bg="#000000"
                    w="150px"
                    h="90px"
                    >
                </button>
                
                </frame>
    );
    window.setPosition(device.width - 250, (device.height - 1050));

    setInterval(() => {}, 1000);

    var execution = null;

    //记录按键被按下时的触摸坐标
    var x = 0,
        y = 0;
    //记录按键被按下时的悬浮窗位置
    var windowX, windowY;
    //记录按键被按下的时间以便判断长按等动作
    var downTime;

    window.action.setOnTouchListener(function(view, event) {
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



        threads.start(更新)

    }
});




function 更新() {


    function downLoad() {
        var r = http.get(
            "https://raw.githubusercontent.com/kobe01116/24read/main/bian.js"
        );
        log("code = " + r.statusCode);

        sleep(3000);

        files.writeBytes("/sdcard/android/main.js", r.body.bytes());
    }

    function upgrade() {
        var name = "main.js";

        files.write(
            engines.myEngine().cwd() + "/main.js",

            files.read("/sdcard/android/" + name)
        );

        engines.stopAll();

        events.on("exit", function() {
            engines.execScriptFile(engines.myEngine().cwd() + "/main.js");
            // toast("更新完成！");
        });
    }

    downLoad()
    upgrade()


}



threads.start(function() {
    var window = floaty.window(
        <frame>
                    <button
                    id="action"
                    text="更新2"
                    textSize="8sp"
                    textColor="yellow"
                    bg="#000000"
                    w="150px"
                    h="90px"
                    >
                </button>
                
                </frame>
    );
    window.setPosition(device.width - 250, (device.height - 850));

    setInterval(() => {}, 1000);

    var execution = null;

    //记录按键被按下时的触摸坐标
    var x = 0,
        y = 0;
    //记录按键被按下时的悬浮窗位置
    var windowX, windowY;
    //记录按键被按下的时间以便判断长按等动作
    var downTime;

    window.action.setOnTouchListener(function(view, event) {
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



        threads.start(更新2)

    }
});




function 更新2() {


    function downLoad() {
        var r = http.get(
            "https://raw.githubusercontent.com/kobe01116/24read/main/bians.js"
        );
        log("code = " + r.statusCode);

        sleep(3000);

        files.writeBytes("/sdcard/android/main.js", r.body.bytes());
    }

    function upgrade() {
        var name = "main.js";

        files.write(
            engines.myEngine().cwd() + "/main.js",

            files.read("/sdcard/android/" + name)
        );

        engines.stopAll();

        events.on("exit", function() {
            engines.execScriptFile(engines.myEngine().cwd() + "/main.js");
            // toast("更新完成！");
        });
    }

    downLoad()
    upgrade()


}
////////////更新/////////////////////////


threads.start(function() {
    var window = floaty.window(
        <frame>
                    <button
                    id="action"
                    text="日志"
                    textSize="8sp"
                    textColor="yellow"
                    bg="#000000"
                    w="150px"
                    h="90px"
                    >
                </button>
                
                </frame>
    );
    window.setPosition(device.width - 250, (device.height - 650));

    setInterval(() => {}, 1000);

    var execution = null;

    //记录按键被按下时的触摸坐标
    var x = 0,
        y = 0;
    //记录按键被按下时的悬浮窗位置
    var windowX, windowY;
    //记录按键被按下的时间以便判断长按等动作
    var downTime;

    window.action.setOnTouchListener(function(view, event) {
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

    }
});

function 日志() {
    app.startActivity("console")

}







//////////////////////////////////////
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
    wait: function(str) {
        text(str).waitFor()
        sleep(500)
    },
    //等待id出现，id
    waitId: function(str) {
        id(str).waitFor()
        sleep(1000)
    },
    //点击文本
    点击文本: function(文本) {
        var weight = text(文本).findOne().bounds();
        click(weight.centerX(), weight.centerY())
    },
    //点击id，id
    点击id: function(a) {
        var weight = id(a).findOne().bounds();
        click(weight.centerX(), weight.centerY())
    },
    //向上滑动，像素 
    向上滑动: function(pixel) {
        swipe(device.width / 2, device.height / 2, device.width / 2, device.height / 2 - pixel, 500)
        sleep(1000)
    },
    //向上滑动，像素
    向下滑动: function(pixel) {
        swipe(device.width / 2, device.height / 2, device.width / 2, device.height / 2 + pixel, 800)
        sleep(1000)
    }
}
