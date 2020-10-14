$(function () {
    var form = layui.form
    form.verify({
        nickname: function (value) {
            if (value.length > 6) {
                return '昵称长度必须在大于个字符之间！'
            }
        }
    })

    // 获取用户信息
    initUserInfo();

    // 初始化用户的基本信息
    function initUserInfo() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('获取用户信息失败！')
                }
                console.log(res)
                //给form表单lay-filter属性的表单赋值，第一个参数为lay-filter的值
                form.val('formUserInfo',res.data);  //res.data你输入的表单内容赋值给formUserInfo
            }

        })
    }


    //重置表单的数据
    $('#btnReset').on('click',function(e) {
        //阻止表的默认重置行为
        e.preventDefault();
        // 重新调用 `initUserInfo()` 函数，重新获取用户信息
        initUserInfo();
    })

    // 监听表单的提交事件
$('.layui-form').on('submit', function(e) {
    // 阻止表单的默认提交行为
    e.preventDefault()
    // 发起 ajax 数据请求
    $.ajax({
      type: 'POST',
      url: '/my/userinfo',
      //serialize()快速获取用户数据
      data: $(this).serialize(),
      success: function(res) {
        if (res.status !== 0) {
          return layer.msg('更新用户信息失败！')
        }
        layer.msg('更新用户信息成功！')
        // 调用父页面中的方法，重新渲染用户的头像和用户的信息
        window.parent.getUserInfo()
      }
    })
  })

})