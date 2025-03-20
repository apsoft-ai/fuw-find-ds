mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 标题栏1 = new 标题栏("标题栏1",null,标题栏1_右侧图标被单击,null);
var 标签_最下广告 = new 标签("标签_最下广告",null);
var 按钮组1 = new 按钮组("按钮组1",按钮组1_被单击);
var 图片框1 = new 图片框("图片框1",null);
var 菜单1 = new 菜单("菜单1",null);
var 对话框1 = new 对话框("对话框1",null,null,null);
var 剪贴板1 = new 剪贴板("剪贴板1");
if(mui.os.plus){
    mui.plusReady(function() {
        窗口_首窗_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        窗口_首窗_创建完毕();
        
    }
}

function 窗口_首窗_创建完毕(){

}

function 标题栏1_右侧图标被单击(){

	窗口操作.打开指定网址("https://ecnb269owgle.feishu.cn/docx/S5uQdTQlFosD0px1Izyc3O00n5e?from=from_copylink", 2);

}

function 按钮组1_被单击(按钮索引){

	switch(按钮索引){

		case 0 :

			剪贴板1.置剪贴板内容("\n解释上述内容。");

		break;
		case 1 :

			剪贴板1.置剪贴板内容("\n推荐类似内容。");

		break;
	}

}