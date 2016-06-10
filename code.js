$(document).ready(function() {



    function quotes() {

        var output = $.ajax({
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
            type: 'GET',
            datatype: 'json',
            success: function (data) {

                var obj = JSON.parse(data);
                var author = obj.author;
                var quote = obj.quote;


                console.log(quote);
                console.log(author);

                $(".quote").text(quote);
                $(".author").text("-" + author);


            },
            error: function (err) {
                alert(err);
            },

            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "QXKPQuKJubmshhWhbpsUYaCf6ZAJp1813uAjsnjE4FMdRdMnYF");
            }
        });
    }
    $("#moar").on("click", function () {
        quotes();

    });
    $("#tweet").on("click",function(){
        var html = $(".quote").text() + $(".author").text();
        var url = "https://twitter.com/intent/tweet?text=" + html;
        window.open(url);

    });

});
