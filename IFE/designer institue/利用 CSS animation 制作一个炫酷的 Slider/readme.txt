如果要在JS里获取一个class比如A，不要使用document.querySelector.(".A")，这样得log出来的是一个<div class='A'></div>,而不是包含了所有同类元素的数组，要想得到数组，需要用document.getElementsByClassName("A")

这里还有一个bug没有找到原因
for(var i=0;i<4;){
    slider[i].addEventListener('click',function () {
        document.body.style.backgroundImage='url(img/'+i+'.jpg)'
    })}
这里不知道为什么，每张缩略图的click都会指向最后一张图片 4.jpg，然而这里的i最大只能到3，如果此处调用i+1去动态改变图片路径，就会导致指向的最后一张图片路径为5.jpg，指向了不存在的图片，从而导致bug。