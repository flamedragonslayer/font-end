/**
 * Created by Administrator on 2017/7/31.
 */
var inputThing=document.getElemntById("inputThing");
var content=document.getElementById("content");
var yes=document.getElementById("yes");
if(yes.onclick)
{
    content.innerHTML=inputThing.value;
}