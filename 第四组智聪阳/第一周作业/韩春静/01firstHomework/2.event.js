//写一个事件的系统 绑定 移除 执行 绑定一次
function Event(){
    this._events = {};
}
Event.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
};
Event.prototype.once = function (eventName,callback) {
    function one(){
        callback.apply(this,arguments);
        this.off(eventName,one);
    }
    this.on(eventName,one);
};
Event.prototype.off = function(eventName,callback){
    var cur = this._events[eventName];
    this._events[eventName] =cur.filter(function (item) {
        return callback!=item;
    });
};
Event.prototype.emit = function (eventName) {
    var args = Array.prototype.slice.call(arguments,1);
    var cur = this._events[eventName];
    var that = this;
    if(cur){ //[eat,eat]
        cur.forEach(function (item) {
            item.apply(that,args);
        });
    }
};
var event = new Event();
function eat(who){
    console.log(who+"吃饭");
}
event.once("我饿了",eat);
event.emit("我饿了","珠峰");
event.emit("我饿了","珠峰");
