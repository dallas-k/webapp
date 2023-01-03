var qs = require('querystring')

function(request, response) {
    if(request.method == 'POST'){
        var body = '';
        request.on('data', function(data){
            body += data;
            if (body.length > 50000) request.connection.destory();
        });
    
        request.on('end', function() {
            console.log(post);
            var post = qs.parse(body);
        })
    }
}


