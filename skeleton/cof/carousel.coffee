Carousel =

  sliden: 1
  slides: 3

  i: ->

    console.log 'Carousel.i()'

    Carousel.handlers()

  handlers: ->
    $('.carousel > .nav > .arrow').on 'click', Carousel.arrowHandler

  arrowHandler: ->
    Carousel.arrow $(this).hasClass('right')

  arrow: (direction) ->
    if direction
      if Carousel.sliden is Carousel.slides
        Carousel.sliden = 1
      else
        Carousel.sliden++
    else
      if Carousel.sliden is 1
        Carousel.sliden = Carousel.slides
      else
        Carousel.sliden--

    Carousel.slide Carousel.sliden

  slide: (num) ->

    _.off '.carousel > .slides > .slide'
    _.off '.carousel > .nav > .dots > .dot'
    _.on ".slides > .slide.slide#{Carousel.sliden}"
    _.on ".carousel > .nav > .dots > .dot#{Carousel.sliden}"



