var allArea;
(function(){
	_allArea=function(){
		this.init();
	}
	//prototype   原型对象上的所有属性和方法，都会被对象实例所共享
	_allArea.prototype={
	//var _body=document.body;
	//初始化
	init:function(){
		this.createHtml();
		this.addEvents();
	},
	//监听节点事件
	addEvents:function(){
		var _this = this;
		console.log(document.body);
		document.body.addEventsListener('click',function(){
			console.log(33);
		})
	},
	//创建对象节点
	createHtml:function(content){
		var wrapdiv = document.createElement("div");
		wrapdiv.className="mask";
		var context=document.createElement("div");
		context.className="maskcontent";
		var contextwrap=document.createElement("div");
		var contextmain = document.createTextNode(content);
		contextwrap.className = "wrapcontext"
		var wrapbtn = document.createElement("div");
		var btnconfirm = document.createElement("button");
		var btncancel = document.createElement("button");
		btnconfirm.className="confirm";
		btncancel.className="cancel";
		btnnodeconfirm=document.createTextNode("确定");
		btnnodecancel=document.createTextNode("取消");
		//document.body.appendChild(wrapdiv);
		contextwrap.appendChild(contextmain);
		context.appendChild(contextwrap);
		wrapdiv.appendChild(context);
		btnconfirm.appendChild(btnnodeconfirm);
		btncancel.appendChild(btnnodecancel);
		wrapbtn.appendChild(btnconfirm);
		wrapbtn.appendChild(btncancel);
		context.appendChild(wrapbtn);
	},
	show:function(){

	},
	hide:function(){
		_body.removeChild("mask");
	}
}
   	allArea = new _allArea;
})()