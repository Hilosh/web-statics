var dom = document.getElementById("container");
var myChart = echarts.init(dom);
//var movienum=[];
var app = {};
let countArray = [];
var str=[];
var strid=[];
var strname=[];
var strrelative=[];
var last;
    $(document).ready(function () {
       var url = window.location.search;
        console.log("url", url);
        last = url.substr(url.indexOf("?") + 1);
        var map = {
            "movie_id":"1291543",
            "actor_one":"1",
            "actor_two":"1",
            "author":"1",
            "country":"1",
            "director":"1",
            "genre":"1",
            "rating":"1",
            "ratingsum":"1",
            "year":"1"
        };
        var str2 = url.split("=");
        console.log(str2);
        var temp = 0;
        $.each(map,function (key, values) {
            temp++;
            if (temp < 11) {
                map[key] = str2[temp];
            }
        });
        console.log("mpa", map);
        var search_url = "http://hilosh.xyz:19090/movies/selectMovieTop";
        var now;
        $.post({
            url: search_url,
            data:map,
            async:false,
            success: function (data) {
                now = data;
                //console.log(data);
                for(var i=0;i<data.length;i++)
                {
                    str.push(data[i]);
                    str[i]=data[i].country;
                    strid[i]=data[i].id;
                    strname[i]=data[i].name;
                    strrelative[i]=data[i].relative;
                    //console.log(str[i]);
                }
                let liStr = "";
                $.each(data, (i, item)=>{
                    liStr += ("<li>"
                        +"country："+str[i]+"<br />"
                        +"id："+strid[i]+"<br />"
                        +"name："+strname[i]+"<br />"
                        +"relative："+strrelative[i]+"<br />"
                        //+"评分人数："+item[4]+"<br />"+"</li>"
                        );
                });
            },
             error: function(data) {
                 console.log(data.toString());
                 alert('数据不存在');
             }
         });
         for(var i=0;i<str.length;i++)
    {
        let lineArray=str[i].split("/");
        for(var j=0;j<lineArray.length;j++)
        {
            countArray.push(lineArray[j]);
            //console.log(lineArray[j]);
        }
        
    }
    

// let movieData = [];
//     $.ajax({
//         type: "GET",
//         async: false,
//         url: "movies2.csv",
//         dataType: "text",
//         success: function (data) {
//             // split every line, every field
//             let lineArray = data.split('\r\n');
//             for (let i = 1; i < lineArray.length; i++){ // 去除首行，因为它是名称
//                 let line = $.csv.toArray(lineArray[i]);
//                 if (line.length == 7 ){ // 排除最后一个空行 或者数据格式有误的
//                     movieData.push(line); // [id,name,year,rating,ratingsum,genre,country]
//                 }
//             }
//         }
//     });
//     //统计某一年某个国家的电影总数
//     let countObj = {};
//     $.each(movieData, (i, item)=>{
//         let s1 = item[2]; // year
//         let s2 = item[7]; // country
//         if (countObj == undefined){
//             countObj = {};
//         }
//         if (countObj[s1] == undefined){
//             countObj[s1] = {};
//         }
//         if (countObj[s1][s2] == undefined){
//             countObj[s1][s2] = 0;
//         }
//         countObj[s1][s2] += 1;
//     });
//     let countArray = [];
var movienum =new Array(300).fill(0);
//     $("#mode option").each(function(){
//         for(var i=0;i<movieData.length;i++)
//         {
//             let s1 = movieData[i][2]; // year
//             let s2 = movieData[i][6]; // country
//             let LineArray=s2.split("/");
//             for(let j=0;j<LineArray.length;j++){
//             countArray.push(LineArray[j]);
//             }
//         }
//         if($(this).val()=="1900")
//         {
console.log("15161");
for(var i=0;i<countArray.length;i++)
{
    console.log("15161");
    if(countArray[i]=="安道尔共和国")
    {
        movienum[0]+=1;
    }
    else if(countArray[i]=="阿拉伯")
    {
        movienum[1]+=1;
    }
    else if(countArray[i]=="阿富汗")
    {
        movienum[2]+=1;
    }
    else if(countArray[i]=="安提瓜和巴布达")
    {
        movienum[3]+=1;
    }
    else if(countArray[i]=="安圭拉")
    {
        movienum[4]+=1;
    }
    else if(countArray[i]=="阿尔巴尼亚")
    {
        movienum[5]+=1;
    }
    else if(countArray[i]=="亚美尼亚")
    {
        movienum[6]+=1;
    }
    else if(countArray[i]=="拉丁美洲群岛")
    {
        movienum[7]+=1;
    }
    else if(countArray[i]=="安哥拉")
    {
        movienum[8]+=1;
    }
    else if(countArray[i]=="南极洲")
    {
        movienum[9]+=1;
    }
    else if(countArray[i]=="阿根廷")
    {
        movienum[10]+=1;
    }
    else if(countArray[i]=="萨摩亚")
    {
        movienum[11]+=1;
    }
    else if(countArray[i]=="奥地利")
    {
        movienum[12]+=1;
    }
    else if(countArray[i]=="澳大利亚")
    {
        movienum[13]+=1;
    }
    else if(countArray[i]=="阿鲁巴")
    {
        movienum[14]+=1;
    }
    else if(countArray[i]=="阿塞拜疆")
    {
        movienum[15]+=1;
    }
    else if(countArray[i]=="波黑")
    {
        movienum[16]+=1;
    }
    else if(countArray[i]=="巴巴多斯")
    {
        movienum[17]+=1;
    }
    else if(countArray[i]=="孟加拉")
    {
        movienum[18]+=1;
    }
    else if(countArray[i]=="比利时")
    {
        movienum[19]+=1;
    }
    else if(countArray[i]=="布基纳法索")
    {
        movienum[20]+=1;
    }
    else if(countArray[i]=="保加利亚")
    {
        movienum[21]+=1;
    }
    else if(countArray[i]=="巴林")
    {
        movienum[22]+=1;
    }
    else if(countArray[i]=="巴隆迪")
    {
        movienum[23]+=1;
    }
    else if(countArray[i]=="贝宁")
    {
        movienum[24]+=1;
    }
    else if(countArray[i]=="百慕大")
    {
        movienum[25]+=1;
    }
    else if(countArray[i]=="文莱")
    {
        movienum[26]+=1;
    }
    else if(countArray[i]=="玻利维亚")
    {
        movienum[27]+=1;
    }
    else if(countArray[i]=="巴西")
    {
        movienum[28]+=1;
    }
    else if(countArray[i]=="巴哈马")
    {
        movienum[29]+=1;
    }
    else if(countArray[i]=="不丹")
    {
        movienum[30]+=1;
    }
    else if(countArray[i]=="布维岛")
    {
        movienum[31]+=1;
    }
    else if(countArray[i]=="博茨瓦纳")
    {
        movienum[32]+=1;
    }
    else if(countArray[i]=="白罗斯")
    {
        movienum[33]+=1;
    }
    else if(countArray[i]=="伯利兹城")
    {
        movienum[34]+=1;
    }
    else if(countArray[i]=="加拿大")
    {
        movienum[35]+=1;
    }
    else if(countArray[i]=="科科斯基林群岛")
    {
        movienum[36]+=1;
    }
    else if(countArray[i]=="刚果")
    {
        movienum[37]+=1;
    }
    else if(countArray[i]=="中非"||countArray[i]=="中非共和国")
    {
        movienum[38]+=1;
    }
    else if(countArray[i]=="刚果")
    {
        movienum[39]+=1;
    }
    else if(countArray[i]=="瑞士")
    {
        movienum[40]+=1;
    }
    else if(countArray[i]=="科特迪瓦")
    {
        movienum[41]+=1;
    }
    else if(countArray[i]=="库克群岛")
    {
        movienum[42]+=1;
    }
    else if(countArray[i]=="智利")
    {
        movienum[43]+=1;
    }
    else if(countArray[i]=="喀麦隆")
    {
        movienum[44]+=1;
    }
    else if(countArray[i]=="中国"||countArray[i]=="中国大陆")
    {
        movienum[45]+=1;
    }
    else if(countArray[i]=="哥伦比亚")
    {
        movienum[46]+=1;
    }
    else if(countArray[i]=="哥斯达黎加")
    {
        movienum[47]+=1;
    }
    else if(countArray[i]=="古巴")
    {
        movienum[48]+=1;
    }
    else if(countArray[i]=="佛得角")
    {
        movienum[49]+=1;
    }
    else if(countArray[i]=="圣延岛")
    {
        movienum[50]+=1;
    }
    else if(countArray[i]=="塞浦路斯")
    {
        movienum[51]+=1;
    }
    else if(countArray[i]=="捷克共和国")
    {
        movienum[52]+=1;
    }
    else if(countArray[i]=="德国")
    {
        movienum[53]+=1;
    }
    else if(countArray[i]=="吉布提")
    {
        movienum[54]+=1;
    }
    else if(countArray[i]=="丹麦")
    {
        movienum[55]+=1;
    }
    else if(countArray[i]=="多米尼加岛")
    {
        movienum[56]+=1;
    }
    else if(countArray[i]=="多米尼加共和国")
    {
        movienum[57]+=1;
    }
    else if(countArray[i]=="阿尔及利亚")
    {
        movienum[58]+=1;
    }
    else if(countArray[i]=="厄瓜多尔")
    {
        movienum[59]+=1;
    }
    else if(countArray[i]=="爱沙尼亚")
    {
        movienum[60]+=1;
    }
    else if(countArray[i]=="埃及")
    {
        movienum[61]+=1;
    }
    else if(countArray[i]=="西撒哈拉")
    {
        movienum[62]+=1;
    }
    else if(countArray[i]=="厄立特里亚")
    {
        movienum[63]+=1;
    }
    else if(countArray[i]=="西班牙")
    {
        movienum[64]+=1;
    }
    else if(countArray[i]=="埃塞俄比亚")
    {
        movienum[65]+=1;
    }
    else if(countArray[i]=="芬兰")
    {
        movienum[66]+=1;
    }
    else if(countArray[i]=="斐济")
    {
        movienum[67]+=1;
    }
    else if(countArray[i]=="福克兰群岛")
    {
        movienum[68]+=1;
    }
    else if(countArray[i]=="密克罗尼西亚")
    {
        movienum[69]+=1;
    }
    else if(countArray[i]=="法罗群岛")
    {
        movienum[70]+=1;
    }
    else if(countArray[i]=="法国")
    {
        movienum[71]+=1;
    }
    else if(countArray[i]=="加蓬")
    {
        movienum[72]+=1;
    }
    else if(countArray[i]=="英国")
    {
        movienum[73]+=1;
    }
    else if(countArray[i]=="格林纳达")
    {
        movienum[74]+=1;
    }
    else if(countArray[i]=="格鲁吉亚")
    {
        movienum[75]+=1;
    }
    else if(countArray[i]=="法属圭亚那")
    {
        movienum[76]+=1;
    }
    else if(countArray[i]=="根西")
    {
        movienum[77]+=1;
    }
    else if(countArray[i]=="加纳")
    {
        movienum[78]+=1;
    }
    else if(countArray[i]=="直布罗陀")
    {
        movienum[79]+=1;
    }
    else if(countArray[i]=="格陵兰")
    {
        movienum[80]+=1;
    }
    else if(countArray[i]=="冈比亚")
    {
        movienum[81]+=1;
    }
    else if(countArray[i]=="基尼"||countArray[i]=="几内亚")
    {
        movienum[82]+=1;
    }
    else if(countArray[i]=="瓜德罗普岛")
    {
        movienum[83]+=1;
    }
    else if(countArray[i]=="赤道几内亚")
    {
        movienum[84]+=1;
    }
    else if(countArray[i]=="希腊")
    {
        movienum[85]+=1;
    }
    else if(countArray[i]=="南乔治亚和南桑威奇群岛")
    {
        movienum[86]+=1;
    }
    else if(countArray[i]=="危地马拉")
    {
        movienum[87]+=1;
    }
    else if(countArray[i]=="关岛")
    {
        movienum[88]+=1;
    }
    else if(countArray[i]=="几内亚比绍")
    {
        movienum[89]+=1;
    }
    else if(countArray[i]=="圭亚那")
    {
        movienum[90]+=1;
    }
    else if(countArray[i]=="加沙")
    {
        movienum[91]+=1;
    }
    else if(countArray[i]=="香港")
    {
         movienum[92]+=1;
    }
    else if(countArray[i]=="赫德岛和麦克唐纳群岛")
    {
        movienum[93]+=1;
    }
    else if(countArray[i]=="洪都拉斯")
    {
        movienum[94]+=1;
    }
    else if(countArray[i]=="克罗地亚")
    {
        movienum[95]+=1;
    }
    else if(countArray[i]=="海地")
    {
        movienum[96]+=1;
    }
    else if(countArray[i]=="匈牙利")
    {
        movienum[97]+=1;
    }
    else if(countArray[i]=="印尼"||countArray[i]=="印度尼西亚")
    {
        movienum[98]+=1;
    }
    else if(countArray[i]=="爱尔兰")
    {
        movienum[99]+=1;
    }
    else if(countArray[i]=="以色列")
    {
        movienum[100]+=1;
    }
    else if(countArray[i]=="曼岛")
    {
        movienum[101]+=1;
    }
    else if(countArray[i]=="印度")
    {
        movienum[102]+=1;
    }
    else if(countArray[i]=="英属印度洋领地")
    {
        movienum[103]+=1;
    }
    else if(countArray[i]=="伊拉克")
    {
        movienum[104]+=1;
    }
    else if(countArray[i]=="伊朗")
    {
        movienum[105]+=1;
    }
    else if(countArray[i]=="冰岛")
    {
        movienum[106]+=1;
    }
    else if(countArray[i]=="意大利")
    {
         movienum[107]+=1;
    }
    else if(countArray[i]=="泽西")
    {
        movienum[108]+=1;
    }
    else if(countArray[i]=="牙买加")
    {
        movienum[109]+=1;
    }
    else if(countArray[i]=="约旦")
    {
        movienum[110]+=1;
    }
    else if(countArray[i]=="日本")
    {
        movienum[111]+=1;
    }
    else if(countArray[i]=="肯尼亚")
    {
        movienum[112]+=1;
    }
    else if(countArray[i]=="吉尔吉斯斯坦")
    {
        movienum[113]+=1;
    }
    else if(countArray[i]=="柬埔寨")
    {
        movienum[114]+=1;
    }
    else if(countArray[i]=="基里巴斯")
    {
        movienum[115]+=1;
    }
    else if(countArray[i]=="科摩罗")
    {
        movienum[116]+=1;
    }
    else if(countArray[i]=="圣基茨和尼维斯")
    {
        movienum[117]+=1;
    }
    else if(countArray[i]=="朝鲜")
    {
        movienum[118]+=1;
    }
    else if(countArray[i]=="韩国")
    {
        movienum[119]+=1;
    }
    else if(countArray[i]=="科威特")
    {
        movienum[120]+=1;
    }
    else if(countArray[i]=="开曼群岛")
    {
        movienum[121]+=1;
    }
    else if(countArray[i]=="哈萨克斯坦")
    {
        movienum[122]+=1;
    }
    else if(countArray[i]=="老挝")
    {
        movienum[123]+=1;
    }
    else if(countArray[i]=="黎巴嫩")
    {
        movienum[124]+=1;
    }
    else if(countArray[i]=="圣卢西亚岛")
    {
        movienum[125]+=1;
    }
    else if(countArray[i]=="列支敦斯登列支敦斯登")
    {
        movienum[126]+=1;
    }
    else if(countArray[i]=="斯里兰卡")
    {
        movienum[127]+=1;
    }
    else if(countArray[i]=="利比里亚")
    {
        movienum[128]+=1;
    }
    else if(countArray[i]=="莱索托")
    {
        movienum[129]+=1;
    }
    else if(countArray[i]=="立陶宛")
    {
        movienum[130]+=1;
    }
    else if(countArray[i]=="卢森堡")
    {
        movienum[131]+=1;
    }
    else if(countArray[i]=="拉脱维亚")
    {
        movienum[132]+=1;
    }
    else if(countArray[i]=="利比亚")
    {
        movienum[133]+=1;
    }
    else if(countArray[i]=="利比亚")
    {
        movienum[134]+=1;
    }
    else if(countArray[i]=="摩纳哥")
    {
        movienum[135]+=1;
    }
    else if(countArray[i]=="摩尔多瓦")
    {
        movienum[136]+=1;
    }
    else if(countArray[i]=="黑山共和国")
    {
        movienum[137]+=1;
    }
    else if(countArray[i]=="马达加斯加")
    {
        movienum[138]+=1;
    }
    else if(countArray[i]=="马绍尔群岛")
    {
        movienum[139]+=1;
    }
    else if(countArray[i]=="马其顿")
    {
        movienum[140]+=1;
    }
    else if(countArray[i]=="马里")
    {
        movienum[141]+=1;
    }
    else if(countArray[i]=="缅甸")
    {
        movienum[142]+=1;
    }
    else if(countArray[i]=="蒙古")
    {
        movienum[143]+=1;
    }
    else if(countArray[i]=="澳门")
    {
        movienum[144]+=1;
    }
    else if(countArray[i]=="北马里亚纳")
    {
        movienum[145]+=1;
    }
    else if(countArray[i]=="马提尼克")
    {
        movienum[146]+=1;
    }
    else if(countArray[i]=="毛里塔尼亚")
    {
        movienum[147]+=1;
    }
    else if(countArray[i]=="蒙特色拉特岛")
    {
        movienum[148]+=1;
    }
    else if(countArray[i]=="马尔他")
    {
        movienum[149]+=1;
    }
    else if(countArray[i]=="毛里求斯")
    {
        movienum[150]+=1;
    }
    else if(countArray[i]=="马尔代夫")
    {
        movienum[151]+=1;
    }
    else if(countArray[i]=="马拉维")
    {
        movienum[152]+=1;
    }
    else if(countArray[i]=="墨西哥")
    {
        movienum[153]+=1;
    }
    else if(countArray[i]=="马来西亚")
    {
        movienum[154]+=1;
    }
    else if(countArray[i]=="莫桑比克")
    {
        movienum[155]+=1;
    }
    else if(countArray[i]=="纳米比亚")
    {
        movienum[156]+=1;
    }
    else if(countArray[i]=="新喀里多尼亚")
    {
        movienum[157]+=1;
    }
    else if(countArray[i]=="尼日尔")
    {
        movienum[158]+=1;
    }
    else if(countArray[i]=="诺福克岛")
    {
        movienum[159]+=1;
    }
    else if(countArray[i]=="尼日利亚")
    {
        movienum[160]+=1;
    }
    else if(countArray[i]=="尼加拉瓜")
    {
        movienum[161]+=1;
    }
    else if(countArray[i]=="荷兰")
    {
        movienum[162]+=1;
    }
    else if(countArray[i]=="挪威")
    {
        movienum[163]+=1;
    }
    else if(countArray[i]=="尼泊尔")
    {
        movienum[164]+=1;
    }
    else if(countArray[i]=="瑙鲁")
    {
        movienum[165]+=1;
    }
    else if(countArray[i]=="纽埃")
    {
        movienum[166]+=1;
    }
    else if(countArray[i]=="新西兰")
    {
        movienum[167]+=1;
    }
    else if(countArray[i]=="阿曼")
    {
        movienum[168]+=1;
    }
    else if(countArray[i]=="巴拿马")
    {
        movienum[169]+=1;
    }
    else if(countArray[i]=="秘鲁")
    {
        movienum[170]+=1;
    }
    else if(countArray[i]=="玻里尼西亚")
    {
        movienum[171]+=1;
    }
    else if(countArray[i]=="巴布亚新几内亚")
    {
        movienum[172]+=1;
    }
    else if(countArray[i]=="菲律宾")
    {
        movienum[173]+=1;
    }
    else if(countArray[i]=="巴基斯坦")
    {
        movienum[174]+=1;
    }
    else if(countArray[i]=="波兰")
    {
        movienum[175]+=1;
    }
    else if(countArray[i]=="圣皮埃尔和密克隆群岛")
    {
        movienum[176]+=1;
    }
    else if(countArray[i]=="皮特凯恩群岛")
    {
        movienum[177]+=1;
    }
    else if(countArray[i]=="波多黎各")
    {
        movienum[178]+=1;
    }
    else if(countArray[i]=="巴勒斯坦")
    {
        movienum[179]+=1;
    }
    else if(countArray[i]=="葡萄牙")
    {
        movienum[180]+=1;
    }
    else if(countArray[i]=="帕劳")
    {
        movienum[181]+=1;
    }
    else if(countArray[i]=="巴拉圭")
    {
        movienum[182]+=1;
    }
    else if(countArray[i]=="卡塔尔")
    {
        movienum[183]+=1;
    }
    else if(countArray[i]=="留尼旺")
    {
        movienum[184]+=1;
    }
    else if(countArray[i]=="罗马尼亚")
    {
        movienum[185]+=1;
    }
    else if(countArray[i]=="塞尔维亚")
    {
        movienum[186]+=1;
    }
    else if(countArray[i]=="俄罗斯")
    {
        movienum[187]+=1;
    }
    else if(countArray[i]=="卢旺达")
    {
        movienum[188]+=1;
    }
    else if(countArray[i]=="沙特阿拉伯")
    {
        movienum[189]+=1;
    }
    else if(countArray[i]=="所罗门")
    {
        movienum[190]+=1;
    }
    else if(countArray[i]=="塞舌尔")
    {
        movienum[191]+=1;
    }
    else if(countArray[i]=="苏丹")
    {
        movienum[192]+=1;
    }
    else if(countArray[i]=="瑞典")
    {
        movienum[193]+=1;
    }
    else if(countArray[i]=="新加坡")
    {
        movienum[194]+=1;
    }
    else if(countArray[i]=="圣赫勒拿")
    {
        movienum[195]+=1;
    }
    else if(countArray[i]=="斯洛文尼亚")
    {
        movienum[196]+=1;
    }
    else if(countArray[i]=="斯瓦尔巴和扬马延")
    {
        movienum[197]+=1;
    }
    else if(countArray[i]=="斯洛伐克")
    {
        movienum[198]+=1;
    }
    else if(countArray[i]=="塞拉利昂")
    {
        movienum[199]+=1;
    }
    else if(countArray[i]=="圣马力诺")
    {
        movienum[200]+=1;
    }
    else if(countArray[i]=="塞内加尔")
    {
        movienum[201]+=1;
    }
    else if(countArray[i]=="索马里")
    {   
        movienum[202]+=1;
    }
    else if(countArray[i]=="苏里南")
    {
        movienum[203]+=1;
    }
    else if(countArray[i]=="普林西比")
    {
        movienum[204]+=1;
    }
    else if(countArray[i]=="萨尔瓦多")
    {
        movienum[205]+=1;
    }
    else if(countArray[i]=="叙利亚")
    {
        movienum[206]+=1;
    }
    else if(countArray[i]=="斯威士兰")
    {
        movienum[207]+=1;
    }
    else if(countArray[i]=="特克斯科斯群岛")
    {
        movienum[208]+=1;
    }
    else if(countArray[i]=="乍得")
    {
        movienum[209]+=1;
    }
    else if(countArray[i]=="法国")
    {
        movienum[210]+=1;
    }
    else if(countArray[i]=="多哥")
    {
        movienum[211]+=1;
    }
    else if(countArray[i]=="泰国")
    {
        movienum[212]+=1;
    }
    else if(countArray[i]=="塔吉克斯坦")
    {
        movienum[213]+=1;
    }
    else if(countArray[i]=="托克劳")
    {
        movienum[214]+=1;
    }
    else if(countArray[i]=="东帝汶")
    {
        movienum[215]+=1;
    }
    else if(countArray[i]=="土库曼斯坦")
    {
        movienum[216]+=1;
    }
    else if(countArray[i]=="突尼斯")
    {
        movienum[217]+=1;
    }
    else if(countArray[i]=="汤加")
    {
        movienum[218]+=1;
    }
    else if(countArray[i]=="土耳其")
    {
        movienum[219]+=1;
    }
    else if(countArray[i]=="特立尼达和多巴哥")
    {
        movienum[220]+=1;
    }
    else if(countArray[i]=="图瓦卢")
    {
        movienum[221]+=1;
    }
    else if(countArray[i]=="台湾")
    {
        movienum[222]+=1;
    }
    else if(countArray[i]=="坦桑尼亚")
    {
        movienum[223]+=1;
    }
    else if(countArray[i]=="乌克兰")
    {
        movienum[224]+=1;
    }
    else if(countArray[i]=="乌干达")
    {
        movienum[225]+=1;
    }
    else if(countArray[i]=="美国")
    {
        movienum[226]+=1;
    }
    else if(countArray[i]=="乌拉圭")
    {
        movienum[227]+=1;
    }
    else if(countArray[i]=="乌兹别克斯坦")
    {
        movienum[228]+=1;
    }
    else if(countArray[i]=="梵蒂冈")
    {
        movienum[229]+=1;
    }
    else if(countArray[i]=="圣文森特")
    {
        movienum[230]+=1;
    }
    else if(countArray[i]=="委内瑞拉")
    {
        movienum[231]+=1;
    }
    else if(countArray[i]=="维尔京")
    {
        movienum[232]+=1;
    }
    else if(countArray[i]=="维尔京")
    {
        movienum[233]+=1;
    }
    else if(countArray[i]=="越南")
    {
        movienum[234]+=1;
    }
    else if(countArray[i]=="瓦努阿图")
    {
        movienum[235]+=1;
    }
    else if(countArray[i]=="瓦利斯群岛和富图纳群岛")
    {
        movienum[236]+=1;
    }
    else if(countArray[i]=="萨摩亚")
    {
        movienum[237]+=1;
    }
    else if(countArray[i]=="科索沃")
    {
        movienum[238]+=1;
    }
    else if(countArray[i]=="也门")
    {
        movienum[239]+=1;
    }
    else if(countArray[i]=="马约特岛")
    {
        movienum[240]+=1;
    }
    else if(countArray[i]=="南非")
    {
        movienum[241]+=1;
    }
    else if(countArray[i]=="赞比亚")
    {
        movienum[242]+=1;
    }
    else if(countArray[i]=="津巴布韦")
    {
        movienum[243]+=1;
    }
    
}
console.log(movienum[92]);
let option={
    backgroundColor: '#cdcfd5',
    geo3D: {
        map: 'world',
        shading: 'lambert',
        light: {
            main: {
                intensity: 5,
                shadow: true,
                shadowQuality: 'high',
                alpha: 30
            },
            ambient: {
                intensity: 0
            },
            ambientCubemap: {
                texture: 'data-gl/asset/canyon.hdr',
                exposure: 1,
                diffuseIntensity: 1
            }
        },
        // label:{
        //     fomatter:[
        //         '{a|fontStyle}',
        //     ].join,
        //     color: '#333',
        //     fontSize: 5,
        //     fontFamily: 'Arial',
        //     borderWidth: 3,
        //     backgroundColor: '#984455',
        //     padding: [3, 10, 10, 5],
        //     lineHeight: 20,
        //     rich:{
        //         a:{
        //             color:'red',
        //             lineHight:10
        //         }
        //     }
        // },
        viewControl: {
            distance: 50,
            minDistance: 10,
            panMouseButton: 'left',
            rotateMouseButton: 'right',
            maxBeta: 180,
        },
        groundPlane: {
            show: true,
            color: '#00002A'
        },
        postEffect: {
            enable: true,
            bloom: {
                enable: false
            },
            SSAO: {
                radius: 1,
                intensity: 1,
                enable: true
            },
            depthOfField: {
                enable: false,
                focalRange: 10,
                blurRadius: 10,
                fstop: 1
            }
        },
        temporalSuperSampling: {
            enable: true
        },
        itemStyle: {
        },

        regionHeight: 2
    },
    visualMap: [
        {
        max: 70,
        calculable: true,
        realtime: false,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        outOfRange: {
            colorAlpha: 0
        }
    },
],
    series: [{
        
        name: 'World movies',
        type: 'bar3D',
        coordinateSystem: 'geo3D',
        shading: 'lambert',
        barSize: 0.1,
        minHeight: 0.2,
        silent: true,
        data:[
            [1.6,42.5,movienum[0]],           //Andorra
            [53.8,23.4,movienum[1]],          //United Arab Emirates
            [67.7,33.9,movienum[2]],          //Afghanistan
            [-61.8,17,movienum[3]],           //Antigua and Barbuda
            [-63.6,-38.4,movienum[4]],        //Anguilla
            [20.1,41.1,movienum[5]],          //Albania
            [45,40,movienum[6]],              //Armenia
            [-69,12,movienum[7]],             //Netherlands Antilles
            [17.8,-11,movienum[8]],           //Angola
            [0,-75,movienum[9]],              //Antarctica
            [-63.6,-38.4,movienum[10]],        //Argentina
            [-170.1,-14.3,movienum[11]],       //American Samoa
            [14.5,47.5,movienum[12]],          //Austria
            [133.8,-25.3,movienum[13]],        //Australia
            [-69.9,12.5,movienum[14]],         //Aruba
            [47.6,40.1,movienum[15]],          //Azerbaijan
            [17.7,43.9,movienum[16]],          //Bosnia and Herzegovina
            [-59.4,13.2,movienum[17]],         //Barbados
            [90.3,23.7,movienum[18]],          //Bangladesh
            [4.5,50.5,movienum[19]],              //Belgium
            [-1.5,12.2,movienum[20]],          //Burkina
            [25.5,42.7,movienum[21]],          //Bulgaria
            [50.6,25.93,movienum[22]],            //Bahrain
            [29.9,-3.3,movienum[23]],          //Burundi
            [2.3,9.3,movienum[24]],            //Benin
            [-64.7,32.3,movienum[25]],         //Bermuda
            [114.7,4.5,movienum[26]],          //Brunei
            [-63.6,-16.3,movienum[27]],        //Bolivia
            [-51.9,-14.2,movienum[28]],        //Brazil
            [-77.4,25,movienum[29]],           //Bahamas
            [90.4,27.5,movienum[30]],          //Bhutan
            [3.4,-54.4,movienum[31]],          //Bouvet Island
            [24.7,-22.3,movienum[32]],         //Botswana
            [27.9,53.7,movienum[33]],          //Belarus
            [-88.5,17.2,movienum[34]],         //Belize
            [-106.3,56.1,movienum[35]],        //Canada
            [96.8,-12.2,movienum[36]],         //Cocos [Keeling] Islands
            [21.8,-4,movienum[37]],            //Congo [DRC]
            [20.9,6.6,movienum[38]],           //Central African Republic
            [15.8,-0.2,movienum[39]],          //Congo [Republic]
            [8.2,46.8,movienum[40]],           //Switzerland
            [-5.5,7.5,movienum[41]],           //Côte d'Ivoire
            [-159.8,-21.2,movienum[42]],          //Cook Islands
            [-71.5,-35.7,movienum[43]],        //Chile
            [12.4,7.4,movienum[44]],           //Cameroon
            [104.2,35.9,movienum[45]],         //China
            [-74.3,4.6,movienum[46]],          //Colombia
            [-83.7,9.7,movienum[47]],          //Costa Rica
            [-77.8,21.5,movienum[48]],         //Cuba
            [-24,16,movienum[49]],             //Cape Verde
            [105.7,-10.4,movienum[50]],        //Christmas Island
            [33.4,35.1,movienum[51]],          //Cyprus
            [15.5,49.8,movienum[52]],          //Czech Republic
            [10.4,51.2,movienum[53]],          //Germany
            [42.6,11.8,movienum[54]],          //Djibouti
            [9.5,56.2,movienum[55]],           //Denmark
            [-61.4,15.4,movienum[56]],         //Dominica
            [-70,18.7,movienum[57]],           //Dominican Republic
            [1.6,28,movienum[58]],             //Algeria
            [-78.2,-1.8,movienum[59]],         //Ecuador
            [25,58.6,movienum[60]],            //Estonia
            [30.8,26.8,movienum[61]],          //Egypt
            [-12.9,24.2,movienum[62]],         //Western Sahara
            [39.8,15.2,movienum[63]],          //Eritrea
            [-3.7,40.5,movienum[64]],          //Spain
            [40.5,9.1,movienum[65]],           //Ethiopia
            [25.7,61.9,movienum[66]],          //Finland
            [179.4,-16.6,movienum[67]],        //Fiji
            [-59.5,-51.8,movienum[68]],        //Falkland Islands [Islas Malvinas]
            [150.6,7.4,movienum[69]],          //Micronesia
            [-6.9,61.9,movienum[70]],          //Faroe Islands
            [2.2,46.2,movienum[71]],           //France
            [11.6,-0.8,movienum[72]],          //Gabon
            [-3.4,55.4,movienum[73]],          //United Kingdom
            [-61.6,12.3,movienum[74]],         //Grenada
            [43.4,42.3,movienum[75]],          //Georgia
            [-53.1,3.9,movienum[76]],          //French Guiana
            [2.6,49.5,movienum[77]],           //Guernsey
            [-1,7.9,movienum[78]],             //Ghana
            [-5.3,36.1,movienum[79]]           //Gibraltar
            [-42.6,71.7,movienum[80]],         //Greenland
            [-15.3,13.4,movienum[81]],         //Gambia
            [-9.7,9.9,movienum[82]],           //Guinea
            [-62.1,17,movienum[83]],           //Guadeloupe
            [10.3,1.7,movienum[84]],           //Equatorial Guinea
            [21.8,39.1,movienum[85]],          //Greece
            [-36.6,-54.4,movienum[86]],        //South Georgia and the South Sandwich Islands
            [-90.2,15.8,movienum[87]],         //Guatemala
            [144.8,13.4,movienum[88]],         //Guam
            [-15.2,11.8,movienum[89]],         //Guinea-Bissau
            [-58.9,4.9,movienum[90]],          //Guyana
            [34.3,31.4,movienum[91]],          //Gaza Strip
            [114.1,22.4,movienum[92]],        //Hong Kong
            [73.5,-53,movienum[93]],           //Heard Island and McDonald Islands
            [-86.2,15.2,movienum[94]],         //Honduras
            [15.2,45.1,movienum[95]],          //Croatia
            [-72.3,19,movienum[96]],           //Haiti
            [19.5,47.2,movienum[97]],             //Hungary
            [113.9,-0.8,movienum[98]],         //Indonesia
            [-8.2,53.4,movienum[99]],          //Ireland
            [34.8,31,movienum[100]],            //Israel
            [-4.5,54.2,movienum[101]],          //Isle of Man
            [78.9,20.6,movienum[102]],          //India
            [71.8,-6.3,movienum[103]],          //British Indian Ocean Territory
            [43.7,33.2,movienum[104]],          //Iraq
            [53.7,32.4,movienum[105]],          //Iran
            [-19,64.9,movienum[106]],           //Iceland
            [12.6,41.9,movienum[107]],          //Italy
            [-2.1,49.2,movienum[108]],          //Jersey
            [-77.3,18.1,movienum[109]],         //Jamaica
            [36.2,30.6,movienum[110]],          //Jordan
            [138.3,36.2,movienum[111]],         //Japan
            [37.9,0,movienum[112]],             //Kenya
            [74.8,41.2,movienum[113]],          //Kyrgyzstan
            [105,12.6,movienum[114]],           //Cambodia
            [-169,-3.4,movienum[115]],          //Kiribati
            [43.9,-11.9,movienum[116]],         //Comoros
            [-62.8,17.3,movienum[117]],         //Saint Kitts and Nevis
            [127.5,40.3,movienum[118]],         //North Korea
            [127.7,35.9,movienum[119]],         //South Korea
            [47.5,29.3,movienum[120]],          //Kuwait
            [-80.6,19.5,movienum[121]],         //Cayman Islands
            [66.9,48,movienum[122]],            //Kazakhstan
            [102.5,19.9,movienum[123]],         //Laos
            [35.9,33.9,movienum[124]],          //Lebanon
            [-61,13.9,movienum[125]],           //Saint Lucia
            [9.5,47.2,movienum[126]],           //Liechtenstein
            [80.8,7.9,movienum[127]],           //Sri Lanka
            [-9.4,6.4,movienum[128]],           //Liberia
            [28.2,-29.6,movienum[129]],         //Lesotho
            [23.9,55.2,movienum[130]],          //Lithuania
            [6.1,49.8,movienum[131]],           //Luxembourg
            [24.6,56.9,movienum[132]],          //Latvia
            [17.2,26.3,movienum[133]],          //Libya
            [-7,31.8,movienum[134]],            //Morocco
            [7.4,43.8,movienum[135]],           //Monaco
            [28.4,47.4,movienum[136]],          //Moldova
            [19.4,42.7,movienum[137]],          //Montenegro
            [46.9,-18.7,movienum[138]],         //Madagascar
            [171.2,7.1,movienum[139]],          //Marshall Islands
            [21.7,41.6,movienum[140]],          //Macedonia [FYROM]
            [-4,17.6,movienum[141]],            //Mali
            [95.9,21.9,movienum[142]],          //Myanmar [Burma]
            [103.8,46.8,movienum[143]],         //Mongolia
            [113.5,22.2,movienum[144]],         //Macau
            [145.4,17.3,movienum[145]],         //Northern Mariana Islands
            [-61,14.6,movienum[146]],           //Martinique
            [-10.9,21,movienum[147]],           //Mauritania
            [-62.2,16.7,movienum[148]],         //Montserrat
            [14.4,35.9,movienum[149]],          //Malta
            [57.5,-20.3,movienum[150]],         //Mauritius
            [73.2,3.2,movienum[151]],           //Maldives
            [34.3,-13.3,movienum[152]],         //Malawi
            [-102.5,23.6,movienum[153]],        //Mexico
            [102,23.6,movienum[154]],           //Malaysia
            [35.5,-18.7,movienum[155]],         //Mozambique
            [18.5,-22.9,movienum[156]],         //Namibia
            [165.6,-20.9,movienum[157]],        //New Caledonia
            [8,17.6,movienum[158]],             //Niger
            [167.9,-29,movienum[159]],          //Norfolk Island
            [8.7,9,movienum[160]],              //Nigeria
            [-85.2,12.9,movienum[161]],         //Nicaragua
            [5.3,52.1,movienum[162]],           //Netherlands
            [8.5,60.5,movienum[163]],           //Norway
            [84.1,28.4,movienum[164]],          //Nepal
            [166.9,-0.5,movienum[165]],         //Nauru
            [-169.9,-19,movienum[166]],         //Niue
            [174.9,-40.9,movienum[167]],        //New Zealand
            [55.9,21.5,movienum[168]],          //Oman
            [-80.8,8.5,movienum[169]],          //Panama
            [-75,-9.1,movienum[170]],           //Peru
            [-149.4,-17.7,movienum[171]],       //French Polynesia
            [143.9,-6.3,movienum[172]],         //Papua New Guinea
            [121.8,12.9,movienum[173]],         //Philippines
            [69.3,30.4,movienum[174]],          //Pakistan
            [19.1,51.9,movienum[175]],          //Poland
            [-56.3,46.9,movienum[176]],         //Saint Pierre and Miquelon
            [-127.4,-24.7,movienum[177]],       //Pitcairn Islands
            [-66.6,18.2,movienum[178]],         //Puerto Rico
            [35.2,31.9,movienum[179]],          //Palestinian Territories
            [-8.2,39.4,movienum[180]],          //Portugal
            [134.6,7.5,movienum[181]],          //Palau
            [-58.4,-23.4,movienum[182]],        //Paraguay
            [51.2,25.4,movienum[183]],          //Qatar
            [55.5,-21.1,movienum[184]],         //Réunion
            [24.9,15.9,movienum[185]],          //Romania
            [21,4,movienum[186]],               //Serbia
            [105.3,61.5,movienum[187]],         //Russia
            [29.9,-2,movienum[188]],            //Rwanda
            [45,23.9,movienum[189]],            //Saudi Arabia
            [160.2,-9.6,movienum[190]],         //Solomon Islands
            [55.5,-4.7,movienum[191]],          //Seychelles
            [30.2,12.9,movienum[192]],          //Sudan
            [18.6,60.1,movienum[193]],          //Sweden
            [103.8,1.3,movienum[194]],          //Singapore
            [-10,-24,movienum[195]],            //Saint Helena
            [15,46.1,movienum[196]],            //Slovenia
            [23.7,77.5,movienum[197]],          //Svalbard and Jan Mayen
            [19.7,48.7,movienum[198]],          //Slovakia
            [-11.8,8.5,movienum[199]],          //Sierra Leone
            [12.4,43.9,movienum[200]],          //San Marino
            [-14.4,14.5,movienum[201]],         //Senegal
            [46.2,5.1,movienum[202]],           //Somalia
            [-56,3.9,movienum[203]],            //Suriname
            [6.6,0.2,movienum[204]],            //São Tomé and Príncipe
            [-88.9,13.8,movienum[205]],         //El Salvador
            [39,34.8,movienum[206]],            //Syria
            [31.4,-26.5,movienum[207]],         //Swaziland
            [-71.8,21.7,movienum[208]],         //Turks and Caicos Islands
            [18.7,15.5,movienum[209]],          //Chad
            [69.3,-49.3,movienum[210]],         //French Southern Territories
            [0.8,8.6,movienum[211]],            //Togo
            [101,15.9,movienum[212]],           //Thailand
            [71.3,38.9,movienum[213]],          //Tajikistan
            [-171.8,-8.9,movienum[214]],        //Tokelau
            [125.7,-8.9,movienum[215]],         //Timor-Leste
            [59.6,39,movienum[216]],            //Turkmenistan
            [9.5,33.9,movienum[217]],           //Tunisia
            [-175.2,-21.2,movienum[218]],       //Tonga
            [35.2,39,movienum[219]],            //Turkey
            [-61.2,10.7,movienum[220]],         //Trinidad and Tobago
            [177.6,-7.1,movienum[221]],         //Tuvalu
            [121,23.7,movienum[222]],           //Taiwan
            [34.9,-6.4,movienum[223]],          //Tanzania
            [31.2,48.4,movienum[224]],          //Ukraine
            [32.3,1.4,movienum[225]],           //Uganda
            [-95.7,37,movienum[226]],           //United States
            [-55.8,-32.5,movienum[227]],        //Uruguay
            [64.6,41.4,movienum[228]],          //Uzbekistan
            [12.5,41.9,movienum[229]],          //Vatican City
            [-61.3,13,movienum[230]],           //Saint Vincent and the Grenadines
            [-66.6,6.4,movienum[231]],          //Venezuela
            [-64.6,18.4,movienum[232]],         //British Virgin Islands
            [-64.9,18.3,movienum[233]],         //U.S. Virgin Islands
            [108.3,14,movienum[234]],           //Vietnam
            [167,-15.4,movienum[235]],          //Vanuatu
            [-177.2,-13.8,movienum[236]],       //Wallis and Futuna
            [-172.1,-13.8,movienum[237]],       //Samoa
            [20.9,42.6,movienum[238]],          //Kosovo
            [48.5,15.5,movienum[239]],          //Yemen
            [45.2,-12.8,movienum[240]],         //Mayotte
            [22.9,-30.5,movienum[241]],         //South Africa
            [27.8,-13.1,movienum[242]],         //Zambia
            [29.2,-19,movienum[243]],           //Zimbabwe
        ],
        itemStyle: {
            color: 'orange'
            // opacity: 0.8
        },
        
    }],

}
myChart.setOption(option);

    });