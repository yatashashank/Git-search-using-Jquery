$(document).ready(function(){
   $('#searchUser').on('keyup',function(e){
    let username= e.target.value;

    $.ajax({ 
        url:'https://api.github.com/users/'+username,
        data:{
            client_id:'7affacd2673d47bfdee8',
            client_secret:'5e402d4e3c51b0edaa164b9581f92d7bfe064981'
        }
    }).done(function(user){
        console.log(user)
        $('#profile').html(`
             <div class="panel panel-default">
                <div class="panel-heading">
                <h3 class="panel-title">${user.name}</h3>
                </div>
                <div class="panel-body">
                   <div class="row">
                      <div class="col-md-3">
                      <img style="width :75%" class="thunmbnail" src="${user.avatar_url}">
                      <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
                      </div>
                      <div class ="col-md-9">
                      <span class="label label-default">Public Repos: ${user.public_repos}</span><br>
                      <span class="label label-primary">Public Gists: ${user.public_gists}</span><br>
                      <span class="label label-success">Followers: ${user.followers}</span><br>
                      <span class="label label-info">Following: ${user.following}</span><br>
                      <br><br>
                      </div>
                </div>
             </div>
        `);
    })
   }); 
});
