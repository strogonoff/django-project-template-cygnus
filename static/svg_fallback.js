(function () {
    function svgasimg() {
        return document.implementation.hasFeature(
            "http://www.w3.org/TR/SVG11/feature#Image",
            "1.1");
    }

    window.fixSvgs = function () {
        if (!svgasimg()) {
            var e = document.getElementsByTagName("img");
            if (!e.length) {
                e = document.getElementsByTagName("IMG");
            }
            for (var i = 0, n = e.length; i < n; i++) {
                var img = e[i],
                    fallback = img.getAttribute("data-svg-fallback"),
                    src = img.getAttribute("src");

                /* Set to fallback if URL ends in svg or svgz */
                if (fallback && src.match(/svgz?$/)) {
                    img.setAttribute("src",  fallback);
                }
            }        
        }
    };
}());
