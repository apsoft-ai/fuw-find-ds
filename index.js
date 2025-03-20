mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

if(mui.os.plus){
    mui.plusReady(function() {
        主窗口_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        主窗口_创建完毕();
        
    }
}

function 主窗口_创建完毕(){

	窗口操作.切换窗口("chuangkou1.html");

}