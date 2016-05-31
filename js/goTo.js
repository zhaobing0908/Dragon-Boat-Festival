var goTo = document.getElementsByClassName("goTo")[0];

goTo.onclick = function () {

    var tarT = (document.documentElement.scrollTop||document.body.scrollTop) ;
    console.log(tarT);

    var step = (tarT / 500) * 10;//²½³¤

    var timer = window.setInterval(function () {
        document.documentElement.scrollTop -= step;
        document.body.scrollTop -= step;
        console.log(document.body.scrollTop);
        if ((document.documentElement.scrollTop||document.body.scrollTop) <= 0) {

            window.clearInterval(timer);
        }
    },10);
};
