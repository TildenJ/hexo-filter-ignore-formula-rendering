hexo.extend.filter.register('before_post_render', function(data) {
  var reg = /(\${1,2})[^\$]+?\1/gm
  data.content = data.content.replace(reg, function (m) {
    return `{%raw%}${m}{%endraw%}`;
  });
  return data;
});