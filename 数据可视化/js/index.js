// 监控区域模块制作
(function () {
  $(".monitor .tabs").on("click", "a", function () {
    $(this)
      .addClass("active")
      .siblings("a")
      .removeClass("active");

    // console.log($(this).index());
    //   选取对应索引号的content
    $(".monitor .content")
      .eq($(this).index())
      .show()
      .siblings(".content")
      .hide();
  });
  // 1. 先克隆marquee里面所有的行（row）
  $(".marquee-view .marquee").each(function () {
    // console.log($(this));
    var rows = $(this)
      .children()
      .clone();
    $(this).append(rows);
  });
})();
// 点位分布统计模块
(function () {
  var myChart = echarts.init(document.querySelector('.pie'));
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    // color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    series: [
      {
        name: '面积模式',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '50%'],
        // roseType: 'area',
        roseType: 'radius',
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' }
        ],
        label: {
          fontSize: 10,
        },
        labLine: {
          lenght: 6,
          lenght2: 10,
          smooth: true,
        },
      },
    ],
  };
  myChart.setOption(option);
  //图标自适应尺寸
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

//柱形图模块
(function () {
  var item = {
    name: '',
    value: 1200,
    // 柱子颜色
    itemStyle: {
      color: '#254065'
    },
    // 鼠标经过柱子颜色
    emphasis: {
      itemStyle: {
        color: '#254065'
      }
    },
    // 工具提示隐藏
    tooltip: {
      extraCssText: 'opacity:0'
    },
  }
  var myChart = echarts.init(document.querySelector('.bar'))
  var option = {
    color: new echarts.graphic.LinearGradient( //渐变颜色
      // (x1,y2) 点到点 (x2,y2) 之间进行渐变
      0, 0, 0, 1,
      [
        { offset: 0, color: 'red' }, // 0 起始颜色
        { offset: 1, color: '#eacf19' }  // 1 结束颜色
      ]
    ),
    tooltip: {
      //     trigger: 'axis', //坐标轴
      //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      // }
      trigger: 'item', //放在做标轴才会触发
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '4%',
      containLabel: true,
      show: true,
      borderColor: 'red'
    },
    xAxis: [
      {
        type: 'category',
        data: [
          "上海",
          "广州",
          "北京",
          "深圳",
          "合肥",
          "",
          "......",
          "",
          "杭州",
          "厦门",
          "济南",
          "成都",
          "重庆"
        ],
        axisTick: {
          alignWithLabel: false,
          show: false
        },
        //刻度文字设置
        axisLabel: {
          color: 'red' //刻度文字的颜色
        },
        //x轴设置
        axisLine: {
          linesStyle: {
            color: 'red'
          },
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          alignWithLabel: false,
          show: false
        },
        //刻度文字设置
        axisLabel: {
          color: '#eacf19' //刻度文字的颜色
        },
        // y轴这条线的颜色样式
        axisLine: {
          lineStyle: {
            color: "#eacf19"
            // width: 3
          }
        },
        // y轴分割线的颜色样式
        splitLine: {
          lineStyle: {
            color: "red"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "60%",
        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          item,
          item,
          item,
          900,
          750,
          600,
          480,
          240
        ]
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

//销售模块
(function () {
  // (1)准备数据
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  };
  var myChart = echarts.init(document.querySelector('.line'))
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      },
      right: '10%' // 距离右边10%
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,
      borderColor: '#012f4a', //边框颜色
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "#4c9bfd"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value'
    },
    axisTick: {
      show: false
    },
    // 修饰刻度标签的颜色
    axisLabel: {
      color: "#4c9bfd"
    },
    // 修改y轴分割线的颜色
    splitLine: {
      lineStyle: {
        color: "#012f4a"
      }
    },
    series: [
      {
        name: "预期销售额",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: "实际销售额",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data.year[1]
      }
    ]
  };
  myChart.setOption(option);



  // 把配置和数据给实例化对象
  //4 tab栏切换
  //点击切换效果
  $('.sales .caption').on('click', 'a', function () {
    // 此时要注意这个索引号的问题
    index = $(this).index() - 1;
    //点击当前a 高亮显示 调用active
    $(this).addClass('active').siblings('a').removeClass('active')
      .removeClass("active");
    // 拿到当前a 的自定义属性值
    // console.log(this.dataset.type);
    // 根据拿到的值 去找数据
    //  console.log(data.year);
    // console.log(data["year"]);
    // console.log(data[this.dataset.type]);
    var arr = data[this.dataset.type]
    // 根据拿到的数据重新渲染 series里面的data值
    option.series[0].data = arr[0]
    option.series[1].data = arr[1]
    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
  })


  // 5. tab栏自动切换效果
  //  开启定时器每隔3s，自动让a触发点击事件即可
  var as = $('.sales .caption a')
  var index = 0;
  var timer = setInterval(function () {
    index++;
    if (index >= 4) inedx = 0
    as.eq(index).click();
  }, 1000)
  // 鼠标经过sales，关闭定时器，离开开启定时器
  $('.sales').hover(function () {
    clearInterval(timer)
  },
    function () {
      clearInterval(timer)
      timer = setInterval(function () {
        index++;
        if (index >= 4) inedx = 0
        as.eq(index).click();
      }, 1000);
    }
  );
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();


(function () {
  var myChart = echarts.init(document.querySelector('.radar'))
  var lineStyle = {
    normal: {
      width: 1,
      opacity: 0.5
    }
  };

  var option = {
    tooltip: {
      show: true,
      // 控制提示框组件的显示位置
      position: ['60%', '10%'],
    },
    radar: {
      center: ['50%', '50%'],
      radius: '60%',
      indicator: [
        { name: '机场', max: 100 },
        { name: '商场', max: 100 },
        { name: '火车站', max: 100 },
        { name: '汽车站', max: 100 },
        { name: '地铁', max: 100 }
      ],

      shape: 'circle',
      splitNumber: 4,
      name: {
        textStyle: {
          color: '#4c9bfd'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)',
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'golden'
        }
      }
    },
    series: [
      {
        name: '北京',
        type: 'radar',
        lineStyle: {
          normal: {
            color: '#fff',
            // width: 1
          }
        },
        data: [[90, 19, 56, 11, 34]],
        symbol: 'circle',
        symbolSize: 5,
        itemStyle: {
          color: '#F9713C'
        },
        label: {
          show: true,
          color: '#fff',
          fontSize: 10
        },
        areaStyle: {
          color: 'golden',
          // opacity: 0.1
        }
      }
    ]


  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
// 销售模块 饼形图 半圆形 设置方式
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".gauge"));
  // 2. 指定数据和配置
  var option = {
    series: [
      {
        name: "销售进度",
        type: "pie",
        radius: ["130%", "150%"],
        // 移动下位置  套住50%文字
        center: ["48%", "80%"],
        //是否启用防止标签重叠策略
        // avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        // 饼形图的起始角度为 180， 注意不是旋转角度
        startAngle: 180,
        // 鼠标经过不需要放大偏移图形
        hoverOffset: 0,
        data: [
          {
            value: 100,
            itemStyle: {
              // 颜色渐变#00c9e0->#005fc1
              color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0,
                0,
                0,
                1,
                [
                  { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                  { offset: 1, color: "#005fc1" } // 1 结束颜色
                ]
              )
            }
          },
          {
            value: 100,
            itemStyle: {
              color: "#12274d"
            }
          },
          {
            value: 200,
            itemStyle: {
              color: "transparent"
            }
          }
        ]
      }
    ]
  };
  // 3. 把数据和配置给实例对象
  myChart.setOption(option);
  // 当我们浏览器缩放的时候，图表也等比例缩放
  var timer;
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    //防抖函数
    // if(timer) {
    //   clearInterval(timer);
    // }
    // timer = setInterval(function () {
    //   myChart.resize();
    // },1000)
    myChart.resize();
  });
})();
(function () {
  var hotData = [
    {
      city: '北京',  // 城市
      sales: '25, 179',  // 销售额
      flag: true, //  上升还是下降
      brands: [   //  品牌种类数据
        { name: '可爱多', num: '9,086', flag: true },
        { name: '娃哈哈', num: '8,341', flag: true },
        { name: '喜之郎', num: '7,407', flag: false },
        { name: '八喜', num: '6,080', flag: false },
        { name: '小洋人', num: '6,724', flag: false },
        { name: '好多鱼', num: '2,170', flag: true },
      ]
    },
    {
      city: '河北',
      sales: '23,252',
      flag: false,
      brands: [
        { name: '可爱多', num: '3,457', flag: false },
        { name: '娃哈哈', num: '2,124', flag: true },
        { name: '喜之郎', num: '8,907', flag: false },
        { name: '八喜', num: '6,080', flag: true },
        { name: '小洋人', num: '1,724', flag: false },
        { name: '好多鱼', num: '1,170', flag: false },
      ]
    },
    {
      city: '上海',
      sales: '20,760',
      flag: true,
      brands: [
        { name: '可爱多', num: '2,345', flag: true },
        { name: '娃哈哈', num: '7,109', flag: true },
        { name: '喜之郎', num: '3,701', flag: false },
        { name: '八喜', num: '6,080', flag: false },
        { name: '小洋人', num: '2,724', flag: false },
        { name: '好多鱼', num: '2,998', flag: true },
      ]
    },
    {
      city: '江苏',
      sales: '23,252',
      flag: false,
      brands: [
        { name: '可爱多', num: '2,156', flag: false },
        { name: '娃哈哈', num: '2,456', flag: true },
        { name: '喜之郎', num: '9,737', flag: true },
        { name: '八喜', num: '2,080', flag: true },
        { name: '小洋人', num: '8,724', flag: true },
        { name: '好多鱼', num: '1,770', flag: false },
      ]
    },
    {
      city: '山东',
      sales: '20,760',
      flag: true,
      brands: [
        { name: '可爱多', num: '9,567', flag: true },
        { name: '娃哈哈', num: '2,345', flag: false },
        { name: '喜之郎', num: '9,037', flag: false },
        { name: '八喜', num: '1,080', flag: true },
        { name: '小洋人', num: '4,724', flag: false },
        { name: '好多鱼', num: '9,999', flag: true },
      ]
    }
  ];

  //  2. 根据数据渲染各省热销 sup 模块内容
  // (1) 遍历 hotData对象
  var supHTML = '';
  $.each(hotData, function (i, item) {
    // console.log(item);
    var flag = item.flag ? 'icon-up' : 'icon-down';
    supHTML += `<li>
        <span>${item.city}</span>
        <span>${item.sales} <s class=${flag}></s></span>
      </li>`;
  });
  // 把生成的5个小li字符串给 sub dom盒子
  $('.sup').html(supHTML);
  // 3. 当鼠标进入 tab 的时候
  // 鼠标经过当前的小li要高亮显示
  $('.province .sup').on('mouseenter', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active');
    //获取索引： dom的索引跟数据的索引一一对应
    var index = $(this).index();
    var current = hotData[index].brands; //通过索引拿到城市的索引
    // console.log(current);
    var subHTML = '';
    //开始遍历数据
    $.each(current, function (i, item) {
      // 是对应城市的每一个品牌对象
      // console.log(item);
      var flag = item.flag ? "icon-up" : "icon-down";
      subHTML += `<li><span>${item.name}</span>${item.num}<span> <s class=${flag}></s></span></li>`;
    })
    // 把生成的6个小li字符串给 sub dom盒子
    $('.sub').html(subHTML);
  })
  // 4. 默认把第一个小li处于鼠标经过状态
  var lis = $('.province .sup li');
  lis.eq(0).mouseenter;
  // 5 开启定时器
  var index = 0;
  var timer = setInterval(function () {
    index++;
    if (index >= 5) index = 0;

  }, 1000);

  $(".province .sup").hover(
    function () {
      clearInterval(timer);
    }, 
    // 鼠标离开事件
    function () {
      clearInterval(timer);
      timer = setInterval(function () {
        index++;
        if (index >= 5) index = 0;
        lis.eq(index).mouseenter;
      }, 1000);
    })
})();
