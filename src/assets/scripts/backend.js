$(function () {
    testVozDiag();
    test();
    showMore();
    revFilter();
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
            ids = [],
            idsArr = thisObj.attr("data-ids"),
            itemsContainer = $(document).find("[data-container=items]");

        if (idsArr) {
            ids = JSON.parse(idsArr);
        }

        console.log("show more");



        if (url) {
            thisObj.remove();

            $.ajax({
                method: "POST",
                url: url,
                data: {
                    ajax: 1,
                    ids: ids,
                },
            }).done(function (r) {
                let responsePageNav = $(r).find("[data-type=show_more_click]"),
                    itemsResponse = $(r).find("[data-type=item]");

                itemsContainer.append(itemsResponse);


                if (responsePageNav) {
                    itemsContainer.after(responsePageNav);
                }
            });
        }
    });
}

function revFilter() {
    $("[data-type=reviews-filter]").on("click", function (e) {
        e.preventDefault();
        $("[data-type=reviews-filter]").each(function () {
            $(this).removeClass("border-link--active");
        });
        $(this).toggleClass("border-link--active");

        ajaxRevList();
    });

    function ajaxRevList() {
        let ids = [],
            revList = $("[data-type=rev-list]");

        $("[data-type=reviews-filter]").each(function () {
            if ($(this).hasClass("border-link--active")) {
                ids = JSON.parse($(this).attr("data-ids"));
            }
        });

        console.log(ids);

        $.ajax({
            method: "POST",
            url: window.location.href,
            data: {
                ajax: 1,
                ids: ids,
            },
        }).done(function (a) {
            revList.html(a);

            console.log(a);
        });
    }
}