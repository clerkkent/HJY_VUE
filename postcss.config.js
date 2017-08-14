// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "autoprefixer": {
            browsers: ['last 20 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove: true //是否去掉不必要的前缀 默认：true
        }
    }
}