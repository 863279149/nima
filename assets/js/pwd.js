$(function () {
    var form = layui.form
    var layer = layui.layer
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        samePwd: function (value) { //value可以拿到新密码里面的值
            if (value === $('[name= oldPwd]').val()) {
                return '新旧密码不能一致'
            }
        },
        rePwd: function (value) {
            if (value !== $('[name = newPwd]').val()) {
                return '两次输入的密码不一致'
            }
        }
    })

    //发起ajax请求
    $('.layui-form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize,
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg(res.message || '更新密码失败！')
                }
                layer.msg('更新密码成功！')
                //重置表单
                //将jquery  + [0]转换为原生dom元素，调用reset重置表单,因为上面阻止了默认行为
                $('.layui-form')[0].reset();
            }
        })
    })


})