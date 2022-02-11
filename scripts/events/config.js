/**
 * Butterfly
 * 1. Merge CDN
 * 2. Capitalize the first letter of comment name
 */

'use strict'

hexo.extend.filter.register('before_generate', () => {
  const themeConfig = hexo.theme.config

  /**
   * Merge CDN
   */

  const defaultCDN = {
    main_css: '/css/index.css',
    main: '/js/main.js',
    utils: '/js/utils.js',

    // pjax
    pjax: '/cdn/pjax-0.2.8/pjax.min.js',

    // 评论
    gitalk: '/cdn/gitalk-1.7.2/gitalk.min.js',
    gitalk_css: '/cdn/gitalk-1.7.2/gitalk.css',
    blueimp_md5: '/cdn/blueimp-md5-2.19.0/md5.min.js',
    valine: '/cdn/valine-1.4.16/Valine.min.js',
    disqusjs: '/cdn/disqusjs-1.3.0/disqus.js',
    disqusjs_css: '/cdn/disqusjs-1.3.0/disqusjs.css',
    utterances: '/cdn/utteranc/client.js',
    twikoo: '/cdn/twikoo-1.4.18/twikoo.all.min.js',
    waline: '/cdn/client-1.5.4/Waline.min.js',
    giscus: '/cdn/giscus/client.js',

    // share
    addtoany: 'https://static.addtoany.com/menu/page.js',
    sharejs: '/cdn/social-share.js-1.0.16/js/social-share.min.js',
    sharejs_css: '/cdn/social-share.js-1.0.16/css/share.min.css',

    // search
    local_search: '/js/search/local-search.js',
    algolia_js: '/js/search/algolia.js',
    algolia_search_v4: '/cdn/algoliasearch-4.12.1/algoliasearch-lite.umd.js',
    instantsearch_v4: '/cdn/instantsearch.js-4.38.1/instantsearch.production.min.js',

    // math
    mathjax: '/cdn/mathjax-3.2.0/tex-mml-chtml.js',
    katex: '/cdn/katex-0.15.2/katex.min.css',
    katex_copytex: '/cdn/katex-0.15.2/contrib/copy-tex.min.js',
    katex_copytex_css: '/cdn/katex-0.15.2/contrib/copy-tex.css',
    mermaid: '/cdn/mermaid-8.14.0/mermaid.min.js',

    // count
    busuanzi: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',

    // background effect
    canvas_ribbon: '/cdn/butterfly-extsrc-1.1.0/canvas-ribbon.min.js',
    canvas_fluttering_ribbon: '/cdn/butterfly-extsrc-1.1.0/canvas-fluttering-ribbon.min.js',
    canvas_nest: '/cdn/butterfly-extsrc-1.1.0/canvas-nest.min.js',

    lazyload: '/cdn/vanilla-lazyload-17.5.0/lazyload.iife.min.js',
    instantpage: '/cdn/instant/instantpage.js',
    typed: '/cdn/typed.js-2.0.12/typed.min.js',
    pangu: '/cdn/pangu-4.0.7/browser/pangu.min.js',

    // photo
    fancybox_css_v4: '/cdn/ui-4.0.25/fancybox.css',
    fancybox_v4: '/cdn/ui-4.0.25/fancybox.umd.js',
    medium_zoom: '/cdn/medium-zoom-1.0.6/medium-zoom.min.js',

    // snackbar
    snackbar_css: '/cdn/node-snackbar-0.1.16/snackbar.min.css',
    snackbar: '/cdn/node-snackbar-0.1.16/snackbar.min.js',

    // effect
    activate_power_mode: '/cdn/butterfly-extsrc-1.1.0/activate-power-mode.min.js',
    fireworks: '/cdn/butterfly-extsrc-1.1.0/fireworks.min.js',
    click_heart: '/cdn/butterfly-extsrc-1.1.0/click-heart.min.js',
    ClickShowText: '/cdn/butterfly-extsrc-1.1.0/click-show-text.min.js',

    // fontawesome
    fontawesome: '/cdn/fontawesome-free-6.0.0/css/all.min.css',

    // Conversion between Traditional and Simplified Chinese
    translate: '/js/tw_cn.js',

    // flickr-justified-gallery
    flickr_justified_gallery_js: '/cdn/flickr-justified-gallery-2.0.0/fjGallery.min.js',
    flickr_justified_gallery_css: '/cdn/flickr-justified-gallery-2.0.0/fjGallery.css',

    // aplayer
    aplayer_css: '/cdn/aplayer-1.10.1/APlayer.min.css',
    aplayer_js: '/cdn/aplayer-1.10.1/APlayer.min.js',
    meting_js: '/cdn/metingjs-1.2/Meting.min.js',

    // Prism.js
    prismjs_js: '/cdn/prismjs-1.26.0/prism.js',
    prismjs_lineNumber_js: '/cdn/prismjs-1.26.0/plugins/line-numbers/prism-line-numbers.min.js',
    prismjs_autoloader: '/cdn/prismjs-1.26.0/plugins/autoloader/prism-autoloader.min.js'
  }

  // delete null value
  const deleteNullValue = obj => {
    for (const i in obj) {
      obj[i] === null && delete obj[i]
    }
    return obj
  }

  themeConfig.CDN = Object.assign(defaultCDN, deleteNullValue(themeConfig.CDN))

  /**
   * Capitalize the first letter of comment name
   */

  let { use } = themeConfig.comments

  if (!use) return

  if (typeof use === 'string') {
    use = use.split(',')
  }

  const newArray = use.map(item => item.toLowerCase().replace(/^\S/, s => s.toUpperCase()))

  themeConfig.comments.use = newArray
})
