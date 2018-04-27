因为图片加载顺序的原因，相同位置上的后加载的图片会覆盖先前的图片，使得front变成back，back变成front。
解决办法有两种，一是调整加载顺序，二是给front设置z-index:2。
[demo](https://flamedragonslayer.github.io/front-end/IFE/designer%20institue/3D%20空间的卡片翻转动效/index.html)
