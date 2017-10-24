function show (){
var oPiont=document.getElementById('ban_point')
var aList=oPiont.getElementsByTagName("li")
var oBanner=document.getElementById('Banner')
var aBanner=oBanner.getElementsByTagName("li")
var oUp=document.getElementById("ctrl_l")
var oDown=document.getElementById("ctrl_r")
var i=0;
var j=0;
aBanner[i].style.display="block"

for(i=0;i<aList.length;i++)
{

aList[i].index=i;
aList[i].onclick=function()
{
	j=this.index
	for(i=0;i<aList.length;i++)
	{
		aList[i].className=""
		aBanner[i].style.display="none"
	}
	
		aList[this.index].className="ban_active"
		aBanner[this.index].style.display="block"
}
oDown.onclick=function()
{
	var e=j
		if(j==aBanner.length-1)
		{
			j=-1;
		}
		j=j+1;
		aBanner[e].style.display="none"
		aList[e].className=""
		aBanner[j].style.display="block"
		aList[j].className="ban_active"
}

oUp.onclick=function()
{
	var e=j
	j=j-1;
		if(j==-1)
		{
			j=aBanner.length-1;
		}
		
		aBanner[e].style.display="none"
		aList[e].className=""
		aBanner[j].style.display="block"
		aList[j].className="ban_active"
}
}
}
show();
/*轮播图*/

function nav(){
/*首页导航栏开始*/
var oNav=document.getElementById("subnaver")
var aNav=oNav.getElementsByTagName("a")

var m=0


for(m=0;m<aNav.length;m++){
		aNav[m].index=m;
aNav[m].onclick=function()
{

	for(m=0;m<aNav.length;m++)
	{
		aNav[m].className=""
	}
	aNav[this.index].className="s_active"
	
}

}
}
nav();
/*首页导航栏*/

function searcher(){

	var oPlaceh=document.getElementById('placeh')
	var oS=document.getElementById('search_in')
	oS.onfocus=function()
	{	
		
		oPlaceh.style.display="none"
	}
		
	oS.onblur=function()
	{	
		
		oPlaceh.style.display="block"
	}}
searcher();
/*搜索框占位符*/

function toper(){
var Top=0;
var oBack=document.getElementById('back')
var timer=null;
var off=true;
window.onscroll=function()
{
	Top=document.documentElement.scrollTop||document.body.scrollTop;
	if(Top>300)
	{
	oBack.style.display='block';	
	}
	else
	{
		oBack.style.display='none';
	}
	if(!off)
	{		
		clearInterval(timer);
	}
	off=false;
};

oBack.onclick=function()
{
	timer=setInterval(
		function(){
		var backTop=Math.floor(Top/3)
		
		
		if(backTop==0)
		{
			clearInterval(timer)
		}
		else
		{
			if(document.documentElement.scrollTop)
			{
			document.documentElement.scrollTop=0;
			}
			else{
			document.body.scrollTop-=backTop;	
			}
		off=true;
		}
	},30)
}
}
toper();
/*返回顶部*/

function select(){
var oWork=document.getElementById("work_top")
var aWorker=oWork.getElementsByTagName("span")
var oW=document.getElementById("w_band")
var aW=oW.getElementsByTagName('ul')
var n=0;
 aW[0].style.display="block"

for(n=0;n<aWorker.length;n++)
{
	
	aWorker[n].index=n
	
	aWorker[n].onclick=function()
	{
		
		for(n=0;n<aWorker.length;n++)
		{
			aWorker[n].className=""
			aW[n].style.display="none"
			
		}
		aWorker[this.index].className="w_active"
			aW[this.index].style.display="block"

	}
	
	
	
	
	
	
}

}
select();
/*施工部分 选项卡效果*/

function trolley()
{
	var oTro=document.getElementById("trolley")
	var oTros=oTro.getElementsByTagName('span')[0]
	var flag=0;
	var flag2=0;
	var flag3=0;
	var oWebnaver=document.getElementById("webnaver")
	var oHelper=document.getElementById("helper")
	var oIN1=document.getElementById('info1')
	var oIN2=document.getElementById('info3')
	var oIN3=document.getElementById('info2')
		oIN1.style.display="none"
		oIN2.style.display="none"
		oIN3.style.display="none"

	oTro.onclick=function(ev)
	{
		
		if(flag==0){
		oTros.style.backgroundPosition="8px -36px";
		oHelper.style.backgroundPosition="-98px -123px";
		oWebnaver.style.backgroundPosition="-98px -123px";
		flag=1;
		flag2=0;
		flag3=0;
		oIN1.style.display="block"
		oIN2.style.display="none"
		oIN3.style.display="none"
		stopBubble(ev)
		
		}
		else
		{
			oTros.style.backgroundPosition="-140px -123px";
				flag=0;
				oIN1.style.display="none"
		}
		
	}
	
	oWebnaver.onclick=function(ev)
	{
		
		
		if(flag2==0){
		oWebnaver.style.backgroundPosition="52px -36px";
		oHelper.style.backgroundPosition="-98px -123px";
		oTros.style.backgroundPosition="-140px -123px";
		flag2=1;
		flag=0;
		flag3=0;
		oIN1.style.display="none"
		oIN2.style.display="block"
		oIN3.style.display="none"
		stopBubble(ev)
		
		
		}
		else
		{
		oWebnaver.style.backgroundPosition="-98px -123px";
		flag2=0;
		oIN2.style.display="none"
		}
		
	}
	
	oHelper.onclick=function(ev)
	{
		

		if(flag3==0){
		oHelper.style.backgroundPosition="52px -36px";
		
		oWebnaver.style.backgroundPosition="-98px -123px";
		oTros.style.backgroundPosition="-140px -123px";
		flag3=1;
		flag=0;
		flag2=0;
		oIN1.style.display="none"
		oIN2.style.display="none"
		oIN3.style.display="block"
		stopBubble(ev)
		}
		else
		{
		oHelper.style.backgroundPosition="-98px -123px";
		flag3=0;
		oIN3.style.display="none"
		}
		
	}

 document.onclick = function () {
        reset();
    }
  
 function reset() {
 		oIN1.style.display="none"
		oIN2.style.display="none"
		oIN3.style.display="none"
 		oWebnaver.style.backgroundPosition="-98px -123px";
		oHelper.style.backgroundPosition="-98px -123px";
 		oTros.style.backgroundPosition="-140px -123px";
 	
}

}
 trolley();
/*顶端购物车*/

function bandplay() 
{
	
	var oBander=document.getElementById('bander')
	var aList=oBander.getElementsByTagName('li');
	 oBander.innerHTML += oBander.innerHTML;
	var m=parseInt(getCss(aList[0],'width'));
	oBander.style.width = aList.length * m + 'px';
    var speed = -3;
    var timer = null;
	 function move(speed) {
        oBander.style.left = oBander.offsetLeft + speed + 'px';
        if (oBander.offsetLeft < -oBander.offsetWidth / 2) {
            oBander.style.left = 0 + 'px';
        }
        if (oBander.offsetLeft > 0) {
            oBander.style.left = -oBander.offsetWidth / 2 + 'px';
        }
    }
	timer = setInterval(function () {
        move(speed);
    }, 50);
    
    
        oBander.onmouseover = function (ev) {
        clearInterval(timer);

    }
    	oBander.onmouseout = function (ev) {
        clearInterval(timer);
        timer = setInterval(function () {
            move(-3);
        }, 50);
    }







}
bandplay();
//无缝滚动

//获取非行间样式的方法
function getCss(obj,arr){
	if(obj.currentStyle){
		return obj.currentStyle[arr];
	}else{
		return getComputedStyle(obj,false)[arr];
	}
};
//获取class的方法
function getClass(parent,name){
	var oParent = parent || document;
	var aEles = oParent.getElementsByTagName("*");
	var result=[];
	for(var i=0; i<aEles.length;i++){
		var arr= aEles[i].className.split(' ');
		for(var j=0; j<arr.length;j++){
			if(arr[j]==name){
				result.push(aEles[i])
			}						
		}
	};
	return result;
};

//js动画方法
function animate(obj,json,fn){		
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var off=true;
		for(var arr in json){//left:200 top:200   arr=>left
			var cur= 0;
			if(arr=='opacity'){
				cur=parseFloat(getCss(obj,arr))*100;//获取值
			}else{
				cur=parseInt(getCss(obj,arr));
			};
			
			var speed = (json[arr] - cur)/8;
			speed= speed>0 ? Math.ceil(speed):Math.floor(speed);
			
			if(cur != json[arr]){
				off=false;
			};
			if(arr=='opacity'){
				cur+=speed;
				obj.style[arr]= cur/100;
				obj.style.filter='alpha(opacity:'+cur+')';
				
			}else{
				obj.style[arr]= cur+speed+'px';
			}
		}
		if(off){
			clearInterval(obj.timer);
			if(fn){
				fn.call(obj)
			}
		}
		
	},30)
}

function stopBubble(ev) {
    var ev = ev || event;
    if (document.all) {
        ev.cancelBubble = true;
        ev.returnValue = false;
    } else {
        ev.stopPropagation();
    }
}
/*阻止冒泡*/ 