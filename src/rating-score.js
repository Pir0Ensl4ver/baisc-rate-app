let rate_value

$(".btn-rating").on("click", function(){

    rate_value = $(this).val();
})

$(".submit").on("click", function(){


    if (rate_value === undefined) {
        
        rate_value = "no grade"
    }

    $(".container").empty()

    $(".container").append(
        $("<div class='img-container'></div>")
        .css("margin-left", "121px")
        .css("margin-right", "129px")
        .css("margin-top", "45px")
        .css("margin-bottom", "30px")
            .append($("<img src='./data/images/illustration-thank-you.svg'><img/>")),
        $("<div calss='rate-container'></div>")
        .css("margin-left", "95px")
        .css("margin-right", "100px")
        .css("margin-bottom", "36px")
        .css("width", "220px")
        .css("height", "35px")
        .css("background", "hsl(213, 19%, 18%)")
        .css("border-radius", "5px")
        .css("display", "flex")
        .css("justify-content", "center")
        .css("align-items", "center")
            .append($("<p calss='grade-p'></p>").text(function(){
                return "You selected " + rate_value + " out of 5"
            })
            .css("color", "hsl(25, 97%, 53%)")
            .css("font-family", "Overpass-Light")
            .css("font-weight", "400")),
        $("<h1>Thank you!</h1>")
        .css("margin-left", "135px")
        .css("margin-right", "134px")
        .css("margin-bottom", "7px")
        .css("text-align", "center")
        .css("color", "hsl(0, 0%, 100%)")
        .css("font-family", "Overpass-Light")
        .css("font-weight", "700")
        .css("font-size", "28px"),
        $("<p class='thank-you-p'></p>").text(function(){
            return "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        })
        .css("margin-left", "32px")
        .css("margin-right", "40px")
        .css("margin-bottom", "40px")
        .css("text-align", "center")
        .css("color", "hsl(217, 12%, 63%)")
        .css("font-family", "Overpass-Light")
        .css("font-weight", "400")
        .css("font-size", "15px")
        .css("line-height", "24px") 
        )
})

