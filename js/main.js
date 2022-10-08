function $(id) {
    return document.getElementById(id);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getID() {
    var ids = getCookie("user");
    if (ids.length > 0) {
        alert("已登录ID: " + ids);
        window.location = "loginok.php";
    } else {
        alert("未登录，前往登录");
        window.location = "login.php";
    }
}

// loop display
window.onload = function() {
    var eleInners = document.getElementById('inner-list'),
        eleDots = document.getElementById('dot-list'),
        liImgs = eleInners.getElementsByTagName('li'),
        liDots = eleDots.children,
        elePrev = document.getElementById('btn-prev'),
        eleNext = document.getElementById('btn-next'),
        LI_WIDTH = liImgs[0].offsetWidth,
        TIME_DURATION = 3000,
        interval = null,
        index = 0,
        circle = 0;
    //  clone(instance) the first img append to the last
    eleInners.appendChild(liImgs[0].cloneNode(true));
    //  create dot
    for (var i = 0, len = liImgs.length - 1; i < len; i++) {
        var li = document.createElement('li');
        li.innerHTML = i + 1;
        eleDots.appendChild(li)
    }
    //  highlight the frist dot
    liDots[0].className = 'cur'

    /**
     * the animate of inner
     * @param {*} obj  sdasd
     * @param {*} targetPlace target position value
     */
    function animate(obj, targetPlace) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            //  judge the move directino
            var speed = obj.offsetLeft > targetPlace ? -15 : 15;
            var result = targetPlace - obj.offsetLeft;
            //  if the abs of move > speed, continue to move the object
            if (Math.abs(result) > Math.abs(speed)) {
                obj.style.left = obj.offsetLeft + speed + 'px'
            } else {
                //  object close to target
                obj.style.left = targetPlace + 'px';
                clearInterval(obj.timer);
            }
        }, 10)
    }

    //  timer
    interval = setInterval(autoplay, 3000)

    //  autoplay (to left)
    function autoplay() {
        index++;
        if (index > liImgs.length - 1) {
            eleInners.style.left = 0; //  jump to left
            index = 1; //  find the next one
        }
        animate(eleInners, -index * LI_WIDTH);
        circle++;

        if (circle >= liImgs.length - 1) {
            circle = 0; //  back to the first dot
        }
        for (var i = 0, len = liDots.length; i < len; i++) {
            liDots[i].className = '';
        }
        liDots[circle].className = 'cur'
    }

    //  move right
    function moveright() {
        index--;
        if (index < 0) {
            eleInners.style.left = -(liImgs.length - 2) * LI_WIDTH + 'px';
            index = liImgs.length - 2; //  find one before the last
        }
        animate(eleInners, -index * LI_WIDTH);
        circle--;
        if (circle < 0) {
            circle = liImgs.length - 2; //  back to the last one
        }
        for (var i = 0, len = liDots.length; i < len; i++) {
            liDots[i].className = '';
        }
        liDots[circle].className = 'cur'
    }
    //  mouse enter, timer clear
    eleInners.addEventListener('mouseenter', function(event) {
        clearInterval(interval)
    });
    //  mouse exit, timer start
    eleInners.addEventListener('mouseleave', function(event) {
        interval = setInterval(autoplay, 3000)
    });
    //  click dot
    eleDots.addEventListener('click', function(event) {
        clearInterval(interval);
        var target = event.target;
        var currentTarget = event.currentTarget;
        index = target.innerHTML - 0 - 1;
        circle = index;
        for (var i = 0, len = liDots.length; i < len; i++) {
            liDots[i].className = '';
        }
        liDots[circle].className = 'cur'
        animate(eleInners, -index * LI_WIDTH);
    })
    elePrev.addEventListener('click', function(event) {
        clearInterval(interval)
        moveright();
        interval = setInterval(autoplay, 3000)
    })
    eleNext.addEventListener('click', function(event) {
        clearInterval(interval)
        autoplay();
        interval = setInterval(autoplay, 3000)
    })
}