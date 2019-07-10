var dom = document.getElementById("zoneOfStackedArea");
var myChart = echarts.init(dom);
var strnum=[];
console.log("1156131");
$(document).ready(function () {
     var map = {
    //     "movie_id":"1291543",
    //     "actor_one":"1",
    //     "actor_two":"1",
    //     "author":"1",
    //     "country":"1",
    //     "director":"1",
    //     "genre":"1",
    //     "rating":"1",
    //     "ratingsum":"1",
    //     "year":"1"
     };
    var search_url = "http://hilosh.xyz/movie/movies/selectquantity";
    $.post(search_url,{},
        function(data,status){
            console.log(data);
        });
        Option={
            title:{
                text:"各地电影数量",
                textAlign: 'center',
                left: '50%',
                top: '5%'
            },
            visualMap:{
                xAxis: {
                    type:'category',
                    scale:true,
                    name: '国家地区',
                    data: ['美国','澳大利亚','英国','巴西','比利时','苏联','德国','法国','俄罗斯','瑞士','西班牙','香港','中国','日本','加拿大','韩国']
                },
                yAxis: {
                    scale:true,
                    name: '电影数量'
                },
            },
            series:{
                name:"电影数量",
                type:'bar',
                data:[10437,351,2825,107,311,280,1401,3144,229,1258,200,627,3512,3551,4533,825,1236],
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }
        }
        myChart.setOption(Option);
    });
