function Checkdangnhap(event, minKt, maxKt) {

    event.preventDefault();

    var mess = document.getElementById('errorText');
    var username = document.getElementById('tendn').value;

    if (username == '')

    {

        document.getElementById('tendn').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Tên đăng nhập ko được để trống ';

    } else if ((username.length > 0 && username.length < minKt) || username.length > maxKt)

    {

        document.getElementById('tendn').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Tên đăng nhập từ 3-10 kí tự ';

    } else mess.innerHTML = 'Tên đăng nhập của bạn là :' + username + '';

}