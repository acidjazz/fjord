Instagram =
  endpoint: 'https://api.instagram.com/v1/users/self/media/recent/'
  token: '2221429489.1677ed0.2c10604b2ab448d2b9bfce1d62c82c95'
  posts: 5
  loaded: false

  i: ->

    if Instagram.loaded isnt true
      Instagram.load()

  load: ->
    Instagram.sload "#{Instagram.endpoint}?access_token=#{Instagram.token}&callback=Instagram.callback"
    Instagram.loaded = true
  sload: (script, initiate, complete) ->

    el = document.createElement 'script'
    el.type = 'text/javascript'
    el.src = script
    el.addEventListener 'load' , (e) ->
      complete() if typeof complete is 'function'
      window[initiate].i() if initiate isnt undefined and initiate isnt false
    , false

    document.body.appendChild(el)


  callback: (json) ->
    for post, index in json.data
      return true if index is Instagram.posts
      $('.instagram > .posts').append """

        <a href="#{post.link}" target="_new" class="post">
          <img src="#{post.images.standard_resolution.url}"/>
          <div class="details">
            <div class="likes">#{post.likes.count} &#9825; </div>
          </div>
        </a>

      """

Instagram.i()
