let strategys = {
    isNotEmpty: function(value, errorMsg) {
        if (value === '') {
            return errorMsg;
        }
    },
    // 限制最小长度
    minLength: function(value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg;
        }
    },
    // 手机号码格式
    mobileFormat: function(value, errorMsg) {
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            return errorMsg;
        }
    }
};
let Validator = function() {
    this.cache = []; // 保存效验规则
};
Validator.prototype.add = function(value, rule, errorMsg) {
    var str = rule.split(":");
    this.cache.push(function() {
        // str 返回的是 minLength:6
        var strategy = str.shift();
        str.unshift(value); // 把input的value添加进参数列表
        str.push(errorMsg); // 把errorMsg添加进参数列表
        return strategys[strategy].apply(value, str);
    });
};
Validator.prototype.start = function() {
    for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
        var msg = validatorFunc(); // 开始效验 并取得效验后的返回信息
        if (msg) {
            return msg;
        }
    }
};

let validateFunc = function(data) {
    var validator = new Validator(); // 创建一个Validator对象
    /* 添加一些效验规则 */
    validator.add(data.lpn, 'isNotEmpty', '车牌号不能为空');
    validator.add(data.En, 'isNotEmpty', '发动机号不能为空');
    validator.add(data.VIN, 'isNotEmpty', '车架号不能为空');
    var errorMsg = validator.start(); // 获得效验结果
    return errorMsg; // 返回效验结果
};
let result = (data, strategys) => {
    var errorMsg = validateFunc(data);
    if (errorMsg) {
        return errorMsg
    } else {
        return true;
    }
}
export default result;