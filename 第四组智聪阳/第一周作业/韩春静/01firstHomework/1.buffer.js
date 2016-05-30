//写一个Buffer的concat方法


var buf1=new Buffer("你好");
var buf2=new Buffer("世界你好");
Buffer.concat1=function(list,len){
    if(list.length==1){
        return list[0];
    }
    if(typeof len =="undefined"){
        len = 0;
        for(var i = 0; i<list.length;i++){
            len += list[i].length;
        }
    }
    var newBuffer = new Buffer(len);
    var index = 0;
    for(var i =0; i<list.length;i++){
        var cur = list[i];
        cur.copy(newBuffer,index);
        index += cur.length;
    }

    return newBuffer.slice(0,index);
};
console.log(Buffer.concat1([buf1,buf2],100).toString());

Buffer.isBuffer(buf2);
console.log(Buffer.isBuffer(buf2));
