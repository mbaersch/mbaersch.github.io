function elb() {
    (window.elbLayer = window.elbLayer || []).push(arguments);
}

(function() {
    var endpointUrl = 'http://httpbin.org/anything';
    elb("walker destination", { push: 
        function (event) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', endpointUrl, true);
        xhr.setRequestHeader('Content-type', 'text/plain; charset=utf-8');
        xhr.send(JSON.stringify(event));
        console.log(event);
    } 
    });
    elb("walker run");
})()
