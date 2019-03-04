app.config(['$routeProvider', '$locationProvider', '$stateProvider' ,'$urlRouterProvider', 'ABOUT', 'COMMUNITY', 'PROFILE', function($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider, ABOUT, COMMUNITY, PROFILE){
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');

    var indexState = {
        name: 'index',
        url: '/',
        templateUrl: "home.html",
        controller: "homeCtrl"
    }

    var aboutState = {
        name: 'about',
        url: ABOUT,
        templateUrl: "about.html",
        controller: "aboutCtrl"
    }

    var communityState = {
        name: 'community',
        url: COMMUNITY,
        templateUrl: "community.html",
        controller: "communityCtrl"
    }

    var profileState = {
        name: 'profile',
        url: PROFILE,
        templateUrl: "profile.html",
        controller: "profileCtrl"
    }

    $stateProvider.state(indexState);  
    $stateProvider.state(aboutState);  
    $stateProvider.state(communityState);  
    $stateProvider.state(profileState);  
    
}]);