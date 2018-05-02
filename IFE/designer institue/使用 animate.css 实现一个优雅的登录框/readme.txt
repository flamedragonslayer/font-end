弄了两个配色，一个蓝白一个黑红。

如果想在一个box四周添加放射状的shadow，可以设置box-shadow: h-shadow v-shadow blur spread color inset;记得将前两个水平偏移值和垂直偏移值设为0，不然就只会出现在两边，其他随意

另外，如果想要使用margin:auto的水平居中，记得将它放在所有margin设置的第一位

input text有两种event可以用于文本框有值被输入时触发监听器，分别是input和change，前者在输入形成的同时便会触发，后者需要在改变完之后点击其他div才会触发。

如果想要实现一个向四周扩散的园，建议在transform中使用scale，而不是逐步改变width和height，因为前者是以几何中心为参照点，后者是以左上角为参照点。

这里的点击login触发login隐身以及输入界面显隐，一开始一直纠结于visibility为什么在设置了transition:1s后也不会自动渐隐而是延迟1s再立刻消失，后面反应过来要实现渐隐还是需要用opacity。

还有一个需要改进的地方，就是在两个输入框都input的情况下，是设置了一个定时器去监听，而不是用别的例如回调函数去触发，有待改进。

