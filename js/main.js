function showAbout() {
    $('#front-loader').addClass('loaded')

    setTimeout(function() {
        $("#slider-page").show();

        const mySiema = new Siema({
            selector: '.siema',
            duration: 200,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: true,
            onInit: () => {},
            onChange: () => {},
        });

        $('.next').on('click', () => mySiema.next());
    }, 2200)


}

function showHome(){
  $('.page').hide();
  $('#front-loader').removeClass('loaded')

}

function showStyling(){
  $("#styling-page").show();
  $('#front-loader').addClass('loaded')
}
