var rand = function(start, end) {
    var n = end - start + 1;
    var r = Math.random() * n;
    var f = Math.floor(r);
    return f + start;
}


// deal
$('#deal').on('click', function() {
    $('#data').empty();
    poker = [];
    card = [];
    for (var i = 1; i <= 52; i++) {
        poker.push(i);
    }

    // 洗牌
    for (var i = 1; i <= 520; i++) {
        var r = rand(1, 52) - 1;
        var t = poker[0];
        poker[0] = poker[r];
        poker[r] = t;
    }

    // 取前2張
    for (var i = 0; i < 2; i++) {
        card.push(poker[i]);
    }

    // 將撲克牌顯示在螢幕上
    for (var i = 0; i < 2; i++) {
        $img = $('<img>').attr('src', './poker/pic' + card[i] + '.png');
        $col = $('<div>').attr('class', 'col-2 text-center').append($img);
        $('#data').append($col);
    }

});


// hit
$('#input').on('click', function() {
    card.push(poker[card.length])
    $img = $('<img>').attr('src', './poker/pic' + card[card.length - 1] + '.png');
    $col = $('<div>').attr('class', 'col-2 text-center').append($img);
    $('#data').append($col);
    sum = 0;
    for (var i = 0; i < card.length; i++) {
        var tem = Math.ceil(card[i] / 4);
        console.log(tem);
        sum += tem;
    }
    if (sum > 21) {
        $('#data').append(sum + " Busted!!");
    }
});

// reset
$('#clear').on('click', function() {
    $('#data').empty();
});

// stand
$('#halt').on('click', function() {
    var sum = 0;
    for (var i = 0; i < card.length; i++) {
        var tem = Math.ceil(card[i] / 4);
        console.log(tem);
        sum += tem;
    }
    $('#data').append("You've stood on " + sum);
});