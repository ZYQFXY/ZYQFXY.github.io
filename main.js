let id = null; // 初始化为null

function start() {
    // 先清除已有的计时器
    stop(); 
        // 重置音频播放进度
        a1.currentTime = 0; // 新增：强制从头开始播放
        a2.currentTime = 0; // 新增：重置另一个音频
    document.getElementById("a1").play();
    document.getElementById("a2").pause();
    console.log("点击了" + rd(0, 1000));
    
    let span = document.getElementById("a4");
    // 立即更新第一次显示
    span.innerHTML = rd(0, 1000);
    span.style.color = "rgb(" + rd(0, 255) + "," + rd(0, 255) + "," + rd(0, 255) + ")";
    
    // 设置新的计时器
    id = setInterval(function() {
        span.innerHTML = rd(0, 1000);
        span.style.color = "rgb(" + rd(0, 255) + "," + rd(0, 255) + "," + rd(0, 255) + ")";
    }, 100);
}

function stop() {
    document.getElementById("a2").play();
    document.getElementById("a1").pause();
        a1.pause();
        a1.currentTime = 0; // 新增：重置进度
        a2.currentTime = 0; // 新增：重置进度
        a2.play();
    
    // 清除计时器并重置id
    if (id !== null) {
        clearInterval(id);
        id = null;
    }
}

function rd(n, m) {
    let c = m - n + 1;
    return Math.floor(Math.random() * c + n);
}
