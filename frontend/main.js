var form = document.querySelector('form');
var formButton = form.querySelector('button[type="submit"]');

formButton.addEventListener('click', function(e) {

    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;
    console.log(username, password);

    e.preventDefault();

    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    var body = {username:username, password: password};
    console.log(body);
    

    var myInit = {
        method: 'POST',
        headers: headers,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(body)
    }

    fetch('http://localhost:8000', myInit)
        .then(function(res) {
            if(res.status === 200 && res.statusText ==='OK') {
                console.log('success');
                window.location.href = "http://localhost:8888/test/docker_node_app/frontend/admin.html";
            }
            if (res.status === 403) {
                alert("You entered the wrong passord or email");
            }
        });

});

