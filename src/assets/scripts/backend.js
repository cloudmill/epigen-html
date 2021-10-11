import Swiper from "swiper";

$(function () {
    testVozDiag();
    test();
    showMore();
    revFilter();
    revModal();
    subscribe();
    forms();
    search();
    filters();
    buy();
    cookies();
    reviewSlider();
    clearTest();
});

function cookies() {
    $(document).on("click", "[data-type=cookies-btn-agr]", function (e) {
        let url = $(this).attr("data-url"),
        cookies = $(this).attr("data-cookies");

        console.log("cookies agr yes");

        if (cookies == 'spec_yes') {
            $(document).find("[data-type=alert_block]").removeClass('alert--active');
        }

        $.ajax({
            method: "POST",
            url: url,
            data: {
                cookies: cookies,
            },
        }).done(function (r) {

        });
    });
}

function testVozDiag() {
    $(document).on("click", "[data-type=option]", function (e) {
        let thisObj = $(this),
            container = thisObj.parents('[data-type=container]'),
            url = thisObj.attr("data-url"),
            end = thisObj.attr("data-op-end"),
            vozDiagArr = [];

        $(this).addClass('checkOption');


        if (end == 'end') {
            $('.checkOption').each(function () {
                vozDiagArr.push($(this).attr("data-voz-diag"));
                $(this).removeClass('checkOption');
            });
        }


        if (end == 'end') {
          $.ajax({
            type: 'POST',
            url: url,
            dataType: 'json',
            data: {
              vozDiagArr: vozDiagArr,
            },
            success: function(r) {
              if (r.success === true) {
                container.find('[data-type=first-part]').html(r.response['first-part']);
                if (r.response['second-part']) {
                    container.find('[data-type=second-part]').html(r.response['second-part']);
                }else{
                    container.find('[data-type=second-part-class]').css('display','none');
                }
              }
            },
            error: function() {
            }
          });
        }
    });
}

function clearTest() {
    $(document).on("click", "[data-type=clear-test]", function (e) {
        console.log('clear test ');
        $('.checkOption').each(function () {
            $(this).removeClass('checkOption');
        });
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
        let thisObj = $(document).find("[data-type=show_more_click]"),
            url = thisObj.attr("data-url"),
            ids = [];

        $("[data-type=reviews-filter]").each(function () {
            if ($(this).hasClass("border-link--active")) {
                ids = JSON.parse($(this).attr("data-ids"));
            }
        });

        console.log("show more");



        if (url) {
            thisObj.remove();

            $.ajax({
                method: "GET",
                url: url,
                data: {
                    ajax: 1,
                    ids: ids,
                },
            }).done(function (r) {
                let responsePageNav = $(r).find("[data-type=show_more_click]"),
                    itemsResponse = $(r).find("[data-type=item]"),
                    itemsContainer = $(document).find("[data-container=items]");

                itemsContainer.append(itemsResponse);

                console.log(responsePageNav);


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

function revModal() {
    $(document).on('click', '[data-type=rev-modal]', function (e) {
        e.preventDefault();

        let body = $(this).parents('body'),
            data = $(this).data('modal');

        body.find('[data-type=rev-modal-name').text(data['name']);
        body.find('[data-type=rev-modal-img').attr('src', data['img']);
        body.find('[data-type=rev-modal-text').html(data['text']);
        body.find('[data-type=rev-modal-post').text(data['position']);
        body.find('[data-type=rev-modal-sub').text(data['title']);

        window.dispatchEvent(new CustomEvent('open-modal'));
    });
}


function subscribe() {
    $(document).on("submit", "[data-type=js-form]", function (e) {
        console.log("form subscribe");
        e.preventDefault();

        let form = $(this),
            url = form.attr("data-url"),
            data = {};




        form.find("[data-type=get-field]").each(function () {
            let field = $(this).attr("data-uf"),
                val = $(this).val();

            data[field] = val;

        });

        console.log(data);

        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            success: function (r) {
                console.log(r);
                if (r == "exist") {
                    $(document).find("[data-type=after-subscribe]").text("Данный E-mail уже подписан");
                } else {
                    if (r.success === true) {
                        $(document).find("[data-type=after-subscribe]").text("Подписка успешно оформлена");
                    }
                }
            },
        });
    });
}
function forms() {
  $('form').submit(function (e) {
    e.preventDefault();

    const thisObj = $(this);

    let url = thisObj.attr('action') ? thisObj.attr('action') : '/local/templates/main/include/ajax/forms.php',
      formContainer = thisObj.parents('[data-type=form-container]'),
      formHide = formContainer.find('[data-form]'),
      formResponse = formContainer.find('[data-type=form-response]'),
      responseMessage = formResponse.find('[data-type=response-message]'),
      file = formContainer.find('[data-type=file]').length ? formContainer.find('[data-type=file]') : false,
      contentType = file ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
      processData = file ? false : true,
      data = file ? new FormData() : {};

    if (file) {
      $.each(file.files, function(key, input) {
        data.append('file[]', input);
      });
      data.append('file', file[0].files[0]);
    }

    formContainer
        .find(
            '[data-type=get-field]'
        )
        .each(function () {
            const field = $(this).data('field');
            const val = $(this).val();

            file ? data.append(field, val) : (data[field] = val);
        });

    formHide.attr('data-form-hidden', true);
    formResponse.attr('data-response-active', true);

    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        data: data,
        contentType: contentType,
        processData: processData,
        success: function(r) {
            responseMessage.text(r.message);
        },
        error: function() {
          responseMessage.text('Ошибка');
        }
    });
  });
}

function search() {
    $(document).on('click', '[data-type=search-submit]', function () {
        console.log('click');
        const thisObj = $(this);

        let container = thisObj.parents('[data-type=search-container]'),
            itemsContainer = container.find('[data-container=items]'),
            pageNav = container.siblings().filter('[data-type=show_more_click]'),
            searchData = container.find('[data-type=search-data]').val();

        $.ajax({
            type: 'GET',
            url: window.location.pathname,
            dataType: 'html',
            data: {
                searchAjax: true,
                searchData: searchData,
            },
            success: function (r) {
                itemsContainer.empty();
                pageNav.remove();
                itemsContainer.append($(r).filter('[data-container=items]').children());
                container.after($(r).filter('[data-type=show_more_click]'));
            }
        });
    });
}

function filters() {
    $(document).on('click', '[data-type=filter]', function (e) {
        e.preventDefault();

        const thisObj = $(this);

        let container = thisObj.parents('body'),
            itemsContainer = container.find('[data-container=items]'),
            pageNav = container.find('[data-type=show_more_click');

        container.find('[data-type=filter]').filter('.border-link--active').removeClass('border-link--active');
        thisObj.addClass('border-link--active');

        $.ajax({
            type: 'GET',
            url: window.location.pathname,
            dataType: 'html',
            data: thisObj.data('filter'),
            success: function (r) {
                itemsContainer.empty();
                pageNav.remove();
                itemsContainer.append($(r).find('[data-container=items]').children());
                itemsContainer.after($(r).find('[data-type=show_more_click]'));
            }
        });
    });
}

function buy() {
    $(document).on('click', '[data-type=buy-tab]', function (e) {
        e.preventDefault();

        let container = $(this).parents('[data-type=buy-container]'),
            id = $(this).data('id'),
            iframeContainer = container.find('[data-type=iframe-container]');

        container.find('[data-type=buy-tab]').filter('.product-btn--active').removeClass('product-btn--active');
        $(this).addClass('product-btn--active');
        iframeContainer.empty();
        iframeContainer.append('<iframe class="buy-page__map-iframe" allow="geolocation" src="https://widget.uteka.ru/widgets/full/?productId=' + id + '" data-type="iframe-uteka"></iframe>')
    });
}

function reviewSlider() {
  $(document).on('click', '[data-type=tab-filter]', function (e) {
    e.preventDefault();

    const thisObj = $(this);

    let container = thisObj.parents('[data-type=container]'),
      itemsContainer = container.find('[data-type=items-container]'),
      buttons = container.find('[data-type=tab-filter]'),
      tabContainer = container.find('[data-type=tab-container]');

    buttons.toggleClass('product-btn--active');
    tabContainer.toggleClass('main-page__reviews-item--active');

    if (!container.attr('init-slider')) {
      itemsContainer.empty();

      $.ajax({
        type: 'GET',
        url: window.location.pathname,
        dataType: 'html',
        data: thisObj.data('filter'),
        success: function (r) {
          itemsContainer.append($(r));

          const swiper = new Swiper(container.find('[data-type=review-slider]')[0], {
            slidesPerView: 'auto',
            spaceBetween: 20,
            loop: true,
          });
          console.log(1);

          container.find('[data-type=btn-prev]').on('click', () => swiper.slidePrev());
          container.find('[data-type=btn-next]').on('click', () => swiper.slideNext());

          container.attr('init-slider', 1);
        }
      });
    }
  });
}
