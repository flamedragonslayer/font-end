���Ҫ��JS���ȡһ��class����A����Ҫʹ��document.querySelector.(".A")��������log��������һ��<div class='A'></div>,�����ǰ���������ͬ��Ԫ�ص����飬Ҫ��õ����飬��Ҫ��document.getElementsByClassName("A")

���ﻹ��һ��bugû���ҵ�ԭ��
for(var i=0;i<4;){
    slider[i].addEventListener('click',function () {
        document.body.style.backgroundImage='url(img/'+i+'.jpg)'
    })}
���ﲻ֪��Ϊʲô��ÿ������ͼ��click����ָ�����һ��ͼƬ 4.jpg��Ȼ�������i���ֻ�ܵ�3������˴�����i+1ȥ��̬�ı�ͼƬ·�����ͻᵼ��ָ������һ��ͼƬ·��Ϊ5.jpg��ָ���˲����ڵ�ͼƬ���Ӷ�����bug��