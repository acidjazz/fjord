var Instagram;

Instagram = {
  endpoint: 'https://api.instagram.com/v1/users/self/media/recent/',
  token: '2221429489.1677ed0.2c10604b2ab448d2b9bfce1d62c82c95',
  posts: 5,
  loaded: false,
  i: function() {
    if (Instagram.loaded !== true) {
      return Instagram.load();
    }
  },
  load: function() {
    Instagram.sload(Instagram.endpoint + "?access_token=" + Instagram.token + "&callback=Instagram.callback");
    return Instagram.loaded = true;
  },
  sload: function(script, initiate, complete) {
    var el;
    el = document.createElement('script');
    el.type = 'text/javascript';
    el.src = script;
    el.addEventListener('load', function(e) {
      if (typeof complete === 'function') {
        complete();
      }
      if (initiate !== void 0 && initiate !== false) {
        return window[initiate].i();
      }
    }, false);
    return document.body.appendChild(el);
  },
  callback: function(json) {
    var i, index, len, post, ref;
    ref = json.data;
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      post = ref[index];
      if (index === Instagram.posts) {
        return true;
      }
      $('.instagram > .posts').append("\n<a href=\"" + post.link + "\" target=\"_new\" class=\"post\">\n  <img src=\"" + post.images.standard_resolution.url + "\"/>\n  <div class=\"details\">\n    <div class=\"likes\">" + post.likes.count + " &#9825; </div>\n  </div>\n</a>\n");
    }
  }
};

Instagram.i();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhZ3JhbS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxTQUFBLEdBQ0U7RUFBQSxRQUFBLEVBQVUsdURBQVY7RUFDQSxLQUFBLEVBQU8scURBRFA7RUFFQSxLQUFBLEVBQU8sQ0FGUDtFQUdBLE1BQUEsRUFBUSxLQUhSO0VBS0EsQ0FBQSxFQUFHLFNBQUE7SUFFRCxJQUFHLFNBQVMsQ0FBQyxNQUFWLEtBQXNCLElBQXpCO2FBQ0UsU0FBUyxDQUFDLElBQVYsQ0FBQSxFQURGOztFQUZDLENBTEg7RUFVQSxJQUFBLEVBQU0sU0FBQTtJQUNKLFNBQVMsQ0FBQyxLQUFWLENBQW1CLFNBQVMsQ0FBQyxRQUFYLEdBQW9CLGdCQUFwQixHQUFvQyxTQUFTLENBQUMsS0FBOUMsR0FBb0QsOEJBQXRFO1dBQ0EsU0FBUyxDQUFDLE1BQVYsR0FBbUI7RUFGZixDQVZOO0VBYUEsS0FBQSxFQUFPLFNBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsUUFBbkI7QUFFTCxRQUFBO0lBQUEsRUFBQSxHQUFLLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCO0lBQ0wsRUFBRSxDQUFDLElBQUgsR0FBVTtJQUNWLEVBQUUsQ0FBQyxHQUFILEdBQVM7SUFDVCxFQUFFLENBQUMsZ0JBQUgsQ0FBb0IsTUFBcEIsRUFBNkIsU0FBQyxDQUFEO01BQzNCLElBQWMsT0FBTyxRQUFQLEtBQW1CLFVBQWpDO1FBQUEsUUFBQSxDQUFBLEVBQUE7O01BQ0EsSUFBd0IsUUFBQSxLQUFjLE1BQWQsSUFBNEIsUUFBQSxLQUFjLEtBQWxFO2VBQUEsTUFBTyxDQUFBLFFBQUEsQ0FBUyxDQUFDLENBQWpCLENBQUEsRUFBQTs7SUFGMkIsQ0FBN0IsRUFHRSxLQUhGO1dBS0EsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFkLENBQTBCLEVBQTFCO0VBVkssQ0FiUDtFQTBCQSxRQUFBLEVBQVUsU0FBQyxJQUFEO0FBQ1IsUUFBQTtBQUFBO0FBQUEsU0FBQSxxREFBQTs7TUFDRSxJQUFlLEtBQUEsS0FBUyxTQUFTLENBQUMsS0FBbEM7QUFBQSxlQUFPLEtBQVA7O01BQ0EsQ0FBQSxDQUFFLHFCQUFGLENBQXdCLENBQUMsTUFBekIsQ0FBZ0MsY0FBQSxHQUVuQixJQUFJLENBQUMsSUFGYyxHQUVULG1EQUZTLEdBR2hCLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FIaEIsR0FHb0IsNERBSHBCLEdBS0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUxOLEdBS1ksbUNBTDVDO0FBRkY7RUFEUSxDQTFCVjs7O0FBd0NGLFNBQVMsQ0FBQyxDQUFWLENBQUEiLCJmaWxlIjoiaW5zdGFncmFtLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiSW5zdGFncmFtID1cbiAgZW5kcG9pbnQ6ICdodHRwczovL2FwaS5pbnN0YWdyYW0uY29tL3YxL3VzZXJzL3NlbGYvbWVkaWEvcmVjZW50LydcbiAgdG9rZW46ICcyMjIxNDI5NDg5LjE2NzdlZDAuMmMxMDYwNGIyYWI0NDhkMmI5YmZjZTFkNjJjODJjOTUnXG4gIHBvc3RzOiA1XG4gIGxvYWRlZDogZmFsc2VcblxuICBpOiAtPlxuXG4gICAgaWYgSW5zdGFncmFtLmxvYWRlZCBpc250IHRydWVcbiAgICAgIEluc3RhZ3JhbS5sb2FkKClcblxuICBsb2FkOiAtPlxuICAgIEluc3RhZ3JhbS5zbG9hZCBcIiN7SW5zdGFncmFtLmVuZHBvaW50fT9hY2Nlc3NfdG9rZW49I3tJbnN0YWdyYW0udG9rZW59JmNhbGxiYWNrPUluc3RhZ3JhbS5jYWxsYmFja1wiXG4gICAgSW5zdGFncmFtLmxvYWRlZCA9IHRydWVcbiAgc2xvYWQ6IChzY3JpcHQsIGluaXRpYXRlLCBjb21wbGV0ZSkgLT5cblxuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnc2NyaXB0J1xuICAgIGVsLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgIGVsLnNyYyA9IHNjcmlwdFxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWQnICwgKGUpIC0+XG4gICAgICBjb21wbGV0ZSgpIGlmIHR5cGVvZiBjb21wbGV0ZSBpcyAnZnVuY3Rpb24nXG4gICAgICB3aW5kb3dbaW5pdGlhdGVdLmkoKSBpZiBpbml0aWF0ZSBpc250IHVuZGVmaW5lZCBhbmQgaW5pdGlhdGUgaXNudCBmYWxzZVxuICAgICwgZmFsc2VcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cblxuICBjYWxsYmFjazogKGpzb24pIC0+XG4gICAgZm9yIHBvc3QsIGluZGV4IGluIGpzb24uZGF0YVxuICAgICAgcmV0dXJuIHRydWUgaWYgaW5kZXggaXMgSW5zdGFncmFtLnBvc3RzXG4gICAgICAkKCcuaW5zdGFncmFtID4gLnBvc3RzJykuYXBwZW5kIFwiXCJcIlxuXG4gICAgICAgIDxhIGhyZWY9XCIje3Bvc3QubGlua31cIiB0YXJnZXQ9XCJfbmV3XCIgY2xhc3M9XCJwb3N0XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIje3Bvc3QuaW1hZ2VzLnN0YW5kYXJkX3Jlc29sdXRpb24udXJsfVwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzXCI+I3twb3N0Lmxpa2VzLmNvdW50fSAmIzk4MjU7IDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG5cbiAgICAgIFwiXCJcIlxuXG5JbnN0YWdyYW0uaSgpXG4iXX0=
