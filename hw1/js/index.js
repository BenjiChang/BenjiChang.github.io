$('button').on('click', function() {

    var xl = $('#xl').val()
    var xu = $('#xu').val()
    var yl = $('#yl').val()
    var yu = $('#yu').val()
    var x = $('#x').val()

    xl = Number(xl)
    xu = Number(xu)
    yl = Number(yl)
    yu = Number(yu)
    x = Number(x)

    dx = xu - xl
    dy = yu - yl

    slope = dy / dx

    y = yl + ((x - xl) * slope)

    $('#result').val(y)
})