//游戏结束,存储分数
function games_over(json){
	$.post("?m=apiGame&type=upload",json,function(data){
		console.log(data);
		//每个项目不同可能需要一些单独处理
		//setWechatShare(data.nickname+"以"+score+"分进入英雄排名榜，你敢来挑战他夺取鲜果礼品吗？",false,false);
	});
}
//查看排行榜
function show_tops(callback){
	$.post("?m=apiGame&type=top",{},function(datas){
		var data=datas.data;
		var list=datas.list;
		var html="";
		$(".zq_top_rank").html('');
		for(var i=0;i<data.length;i++){
			html += '<tr>';
			html += '<td>No.'+data[i].rank+'</td>';
			html += '<td><img src="'+data[i].headimgurl+'" class="head"/></td>';
			html += '<td>'+data[i].nickname+'</td>';
			html += '<td>'+data[i].score+'ms</td>';
			html += '</tr>';
			
		}
		//$(".list").html(html);
		$(".zq_top_rank").html(html);
		if( typeof callback === 'function' ){
			callback();
		}else{
			callback;
		}
	});
}
//查看排行榜--自定义方法
function show_top_api(callback){
	$.post("?m=apiGame&type=tops",{},function(datas){
		var data=datas.data;
		var list=datas.list;
		var html="";
		$(".zq_top_rank").html('');
		for(var i=0;i<data.length;i++){
			html += '<tr>';
			html += '<td>No.'+data[i].rank+'</td>';
			html += '<td><img src="'+data[i].headimgurl+'" class="head"/></td>';
			html += '<td>'+data[i].nickname+'</td>';
			html += '<td>'+data[i].score+'ms</td>';
			html += '</tr>';
			
		}
		//$(".list").html(html);
		$(".zq_top_rank").html(html);
		if( typeof callback === 'function' ){
			callback();
		}else{
			callback;
		}
	});
}
//进入项目，创建表
function games_start(){
	$.post("?m=apiGame&type=make",{},function(sign){
	});
}

//根据报名情况，是否显示
function sign_up_show(aa,bb){
	$.post("?m=apiGame&type=sign",{},function(data){
		//console.log(data);
		if(data=='1'){
			//已经报名，之后回调aa
			if( typeof aa === 'function' ){
				aa();
			}else{
				aa;
			}
		}
		if(data=='2'){
			//没有报名,之后回调bb
			if( typeof bb === 'function' ){
				bb();
			}else{
				bb;
			}
		}
		if(data=='3'){
			alert("每人只有3次游戏机会，分享可不限游戏次数");
			//window.location.href = "index.php"
			$("#share").show();	
		}
		if(data=='4'){
			alert("游戏已经结束，敬请期待下次活动");
		}
	});
}
//提交报名信息
function sign_up(name,mobile,address){
	$.post("?m=apiGame&type=signUp",{name:name,mobile:mobile,address:address},function(data){
	});
}
//分享
function share(){
	$.post("?m=apiGame&type=share",{},function(){
	});
}

