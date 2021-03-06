var Carousel;

Carousel = {
  sliden: 1,
  slides: 3,
  i: function() {
    console.log('Carousel.i()');
    return Carousel.handlers();
  },
  handlers: function() {
    $('.carousel > .nav > .arrow').on('click', Carousel.arrowHandler);
    return $('.carousel > .nav > .dots > .dot').on('click', Carousel.dotHandler);
  },
  arrowHandler: function() {
    return Carousel.arrow($(this).hasClass('right'));
  },
  dotHandler: function() {
    Carousel.sliden = $(this).data('dot');
    return Carousel.slide($(this).data('dot'));
  },
  arrow: function(direction) {
    if (direction) {
      if (Carousel.sliden === Carousel.slides) {
        return Carousel.slide(1);
      } else {
        return Carousel.slide(Carousel.sliden + 1);
      }
    } else {
      if (Carousel.sliden === 1) {
        return Carousel.slide(Carousel.slides);
      } else {
        return Carousel.slide(Carousel.sliden - 1);
      }
    }
  },
  slide: function(num) {
    Carousel.sliden = num;
    _.off('.carousel > .slides > .slide');
    _.off('.carousel > .nav > .dots > .dot');
    _.on(".slides > .slide.slide" + Carousel.sliden);
    return _.on(".carousel > .nav > .dots > .dot" + Carousel.sliden);
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLFFBQUEsR0FFRTtFQUFBLE1BQUEsRUFBUSxDQUFSO0VBQ0EsTUFBQSxFQUFRLENBRFI7RUFHQSxDQUFBLEVBQUcsU0FBQTtJQUVELE9BQU8sQ0FBQyxHQUFSLENBQVksY0FBWjtXQUVBLFFBQVEsQ0FBQyxRQUFULENBQUE7RUFKQyxDQUhIO0VBU0EsUUFBQSxFQUFVLFNBQUE7SUFDUixDQUFBLENBQUUsMkJBQUYsQ0FBOEIsQ0FBQyxFQUEvQixDQUFrQyxPQUFsQyxFQUEyQyxRQUFRLENBQUMsWUFBcEQ7V0FDQSxDQUFBLENBQUUsaUNBQUYsQ0FBb0MsQ0FBQyxFQUFyQyxDQUF3QyxPQUF4QyxFQUFpRCxRQUFRLENBQUMsVUFBMUQ7RUFGUSxDQVRWO0VBYUEsWUFBQSxFQUFjLFNBQUE7V0FDWixRQUFRLENBQUMsS0FBVCxDQUFlLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxRQUFSLENBQWlCLE9BQWpCLENBQWY7RUFEWSxDQWJkO0VBZ0JBLFVBQUEsRUFBWSxTQUFBO0lBRVYsUUFBUSxDQUFDLE1BQVQsR0FBa0IsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxLQUFiO1dBQ2xCLFFBQVEsQ0FBQyxLQUFULENBQWUsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxLQUFiLENBQWY7RUFIVSxDQWhCWjtFQXFCQSxLQUFBLEVBQU8sU0FBQyxTQUFEO0lBQ0wsSUFBRyxTQUFIO01BQ0UsSUFBRyxRQUFRLENBQUMsTUFBVCxLQUFtQixRQUFRLENBQUMsTUFBL0I7ZUFDRSxRQUFRLENBQUMsS0FBVCxDQUFlLENBQWYsRUFERjtPQUFBLE1BQUE7ZUFHRSxRQUFRLENBQUMsS0FBVCxDQUFlLFFBQVEsQ0FBQyxNQUFULEdBQWdCLENBQS9CLEVBSEY7T0FERjtLQUFBLE1BQUE7TUFNRSxJQUFHLFFBQVEsQ0FBQyxNQUFULEtBQW1CLENBQXRCO2VBQ0UsUUFBUSxDQUFDLEtBQVQsQ0FBZSxRQUFRLENBQUMsTUFBeEIsRUFERjtPQUFBLE1BQUE7ZUFHRSxRQUFRLENBQUMsS0FBVCxDQUFlLFFBQVEsQ0FBQyxNQUFULEdBQWdCLENBQS9CLEVBSEY7T0FORjs7RUFESyxDQXJCUDtFQWlDQSxLQUFBLEVBQU8sU0FBQyxHQUFEO0lBRUwsUUFBUSxDQUFDLE1BQVQsR0FBa0I7SUFFbEIsQ0FBQyxDQUFDLEdBQUYsQ0FBTSw4QkFBTjtJQUNBLENBQUMsQ0FBQyxHQUFGLENBQU0saUNBQU47SUFDQSxDQUFDLENBQUMsRUFBRixDQUFLLHdCQUFBLEdBQXlCLFFBQVEsQ0FBQyxNQUF2QztXQUNBLENBQUMsQ0FBQyxFQUFGLENBQUssaUNBQUEsR0FBa0MsUUFBUSxDQUFDLE1BQWhEO0VBUEssQ0FqQ1AiLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJDYXJvdXNlbCA9XG5cbiAgc2xpZGVuOiAxXG4gIHNsaWRlczogM1xuXG4gIGk6IC0+XG5cbiAgICBjb25zb2xlLmxvZyAnQ2Fyb3VzZWwuaSgpJ1xuXG4gICAgQ2Fyb3VzZWwuaGFuZGxlcnMoKVxuXG4gIGhhbmRsZXJzOiAtPlxuICAgICQoJy5jYXJvdXNlbCA+IC5uYXYgPiAuYXJyb3cnKS5vbiAnY2xpY2snLCBDYXJvdXNlbC5hcnJvd0hhbmRsZXJcbiAgICAkKCcuY2Fyb3VzZWwgPiAubmF2ID4gLmRvdHMgPiAuZG90Jykub24gJ2NsaWNrJywgQ2Fyb3VzZWwuZG90SGFuZGxlclxuXG4gIGFycm93SGFuZGxlcjogLT5cbiAgICBDYXJvdXNlbC5hcnJvdyAkKHRoaXMpLmhhc0NsYXNzKCdyaWdodCcpXG5cbiAgZG90SGFuZGxlcjogLT5cblxuICAgIENhcm91c2VsLnNsaWRlbiA9ICQodGhpcykuZGF0YSAnZG90J1xuICAgIENhcm91c2VsLnNsaWRlICQodGhpcykuZGF0YSAnZG90J1xuXG4gIGFycm93OiAoZGlyZWN0aW9uKSAtPlxuICAgIGlmIGRpcmVjdGlvblxuICAgICAgaWYgQ2Fyb3VzZWwuc2xpZGVuIGlzIENhcm91c2VsLnNsaWRlc1xuICAgICAgICBDYXJvdXNlbC5zbGlkZSAxXG4gICAgICBlbHNlXG4gICAgICAgIENhcm91c2VsLnNsaWRlIENhcm91c2VsLnNsaWRlbisxXG4gICAgZWxzZVxuICAgICAgaWYgQ2Fyb3VzZWwuc2xpZGVuIGlzIDFcbiAgICAgICAgQ2Fyb3VzZWwuc2xpZGUgQ2Fyb3VzZWwuc2xpZGVzXG4gICAgICBlbHNlXG4gICAgICAgIENhcm91c2VsLnNsaWRlIENhcm91c2VsLnNsaWRlbi0xXG5cbiAgc2xpZGU6IChudW0pIC0+XG5cbiAgICBDYXJvdXNlbC5zbGlkZW4gPSBudW1cblxuICAgIF8ub2ZmICcuY2Fyb3VzZWwgPiAuc2xpZGVzID4gLnNsaWRlJ1xuICAgIF8ub2ZmICcuY2Fyb3VzZWwgPiAubmF2ID4gLmRvdHMgPiAuZG90J1xuICAgIF8ub24gXCIuc2xpZGVzID4gLnNsaWRlLnNsaWRlI3tDYXJvdXNlbC5zbGlkZW59XCJcbiAgICBfLm9uIFwiLmNhcm91c2VsID4gLm5hdiA+IC5kb3RzID4gLmRvdCN7Q2Fyb3VzZWwuc2xpZGVufVwiXG5cblxuXG4iXX0=
