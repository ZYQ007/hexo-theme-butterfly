/**
 * 字数统计 - 来源 https://github.com/willin/hexo-wordcount
 * 本来是作为npm引入，但是就一个文件，且不能满足我的需求。
 * So！ 拷贝进来改一改
 *
 * @author xue
 * @since 2022/2/8
 */
const util = require('hexo-util');
const stripHTML = util.stripHTML;

const counter = function (content) {
  return stripHTML(content).replace(/\r?\n|\r/g, '').replace(/\s+/g, '').length;
};

hexo.extend.helper.register('min2read', function (content, rate) {
  const len = counter(content);
  const readingTime = len / rate;
  return readingTime < 1 ? '1' : parseInt(readingTime + "", 10);
});

hexo.extend.helper.register('wordcount', function (content) {
  const count = counter(content);
  if (count < 1000) {
    return count;
  }
  return Math.round(count / 100) / 10 + 'k';
});

hexo.extend.helper.register('totalcount', function (site) {
  let count = 0;
  site.posts.forEach(function (post) {
    const len = counter(post.content);
    count += len;
  });
  if (count < 1000) {
    return count;
  }
  return Math.round(count / 100) / 10 + 'k';
});
