$(document).on('ready',  function () {
    var slider = $('.js-sliderDisplay');
    var sliderElem = slider.find('.section_image');
    var pagination = $('.js-Pagination');

    for (let i = 0; i < sliderElem.length; i++) {
        pagination.append('<span class="pagination-elem"></span>');
    }

    console.log(sliderElem)
});