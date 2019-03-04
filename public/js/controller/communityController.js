app.controller("communityCtrl",function ($scope, authFactory, $location){

    $scope.msg = "Welcome to the Community Page";
    
    let getPostPromise = authFactory.getPost();
    getPostPromise.then(data => {
        $scope.imagePath = data.data.posts;
    }).catch( err => {
        // $location.path("/login");

    });
});