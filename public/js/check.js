//判断是否是标准手机号
function is_mobile(mobile){
	var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;	
	if(mobile==''){
		return false;
	}
	if (reg.test(mobile)) {
		return true;
	}else{
		return false;
	};
}
//判断是否是标准身份证
function is_card(str) {
	var result = false;
	var reCardNo = /^(\d{8}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}|\d{6}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}(\d|X|x))$/;
	if (str!=null && str!='') {
		if(reCardNo.test(str.toUpperCase()))
			result = true;
	}
	return result;
}
//判断是否是json
function isJSON(str) {
    if (typeof str == 'string') {
        return true;
    }else{
    	return false;
    }  
}