var routerApp = angular.module('routerApp', ['ui.router']);
/*var scripts = document.getElementsByTagName("script"),
 src = scripts[scripts.length-1].src;*/
routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        // NOTE:  in the home directory of Drupal I created a directory routerui_templates
        //   then in that directory is a list of relative links to directories corresponding to the custom modules
        //   that use angular and router.ui
        //   so for example from within the routerui_templates directory I created the relative link:
        //   ln -s ../sites/all/modules/custom/routerui_test/routerui_test_templates routerui_test_templates
        .state('home', {
            url: '/home',
            templateUrl: 'routerui_templates/routerui_test_templates/partial-home.html'
        })
        
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'routerui_templates/routerui_test_templates/partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'routerui_templates/routerui_test_templates/partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'routerui_templates/routerui_test_templates/table-data.html',
                    controller: 'scotchController'
                }
            }
            
        });
        
});

routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});
