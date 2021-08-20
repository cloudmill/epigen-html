$(function () {
    testVozDiag();
    test();
    showMore();
});

function testVozDiag() {
    $(document).on("click", "[data-type=option]", function (e) {
        let thisObj = $(this),
            url = thisObj.attr("data-url"),
            end = thisObj.attr("data-op-end"),
            vozDiagArr = [],
            questionArr = [],
            answerArr = [];

        console.log('check');

        $(this).addClass('checkOption');


        if (end == 'end') {
            $('.checkOption').each(function () {
                vozDiagArr.push($(this).attr("data-voz-diag"));
                questionArr.push($(this).attr("data-question"));
                answerArr.push($(this).find("[data-type=option_value]").text());
            });
        }


        if (end == 'end') {

            $.ajax({
                method: "POST",
                url: url,
                data: {
                    vozDiagArr: vozDiagArr,
                },
            }).done(function (r) {

                arr = r.split('|');



                $(document).find("[data-type=voz_diag_name]").text(arr[0]);
                $(document).find("[data-type=voz_diag_desc]").text(arr[1]);

            });
        }
    });
}

function test() {
    $(document).on("submit", "[data-type=js-form-test]", function (e) {
        console.log("form test");
        e.preventDefault();

        let form = $(this),
            url = form.attr("data-url"),
            questionArr = [],
            answerArr = [],
            data = {};


        form.find("[data-type=get-field]").each(function () {
            let field = $(this).attr("data-uf"),
                val = $(this).val();
            data[field] = val;
        });

        $('.checkOption').each(function () {
            questionArr.push($(this).attr("data-question"));
            answerArr.push($(this).find("[data-type=option_value]").text());
        });

        data['question'] = questionArr;
        data['answer'] = answerArr;

        data['test_email'] = 'Y';
        console.log(data);

        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            success: function (r) {

            },
        });
    });
}

function showMore() {
    $(document).on("click", "[data-type=show_more_click]", function (e) {
        let thisObj = $(this),
            url = thisObj.attr("data-url"),
            itemsContainer =  $(document).find("[data-container=items]");

        console.log("show more");



        if (url) {
            thisObj.remove();

            $.ajax({
                method: "POST",
                url: url,
                data: {
                    ajax: 1,
                },
            }).done(function (r) {
                let responsePageNav = $(r).find("[data-type=show_more_click]"),
                    itemsResponse = $(r).find("[data-type=item]");

                console.log(r);
                console.log(responsePageNav);
                console.log(itemsResponse);
                console.log(itemsContainer);

                itemsContainer.append(itemsResponse);


                if (responsePageNav) {
                    itemsContainer.after(responsePageNav);
                }
            });
        }
    });
}