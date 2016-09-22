app.controller('SidebarController', function($scope, $state){
    $scope.contact = function(){
        
        $state.go('contact').then(function(){
            var contactBox = $(".contact-flex-form");
            infoBox = $(".contact-information");
            tl = new TimelineMax({}); 
    
            tl.from(contactBox, 1.1, {scale: 0.8, boxShadow: 10, opacity: 0.1, ease: Elastic.easeOut.config(0.3, 0.3), y: 0})
              .from(infoBox, 1, {marginLeft: 1, opacity: 0, ease: Circ.easeOut, y:0});   
        });
        
        $('#work').removeClass('active');
        $('#about').removeClass('active');
        $('#contact').addClass('active');       
    };
    
    $scope.home = function(){
        $state.go('home');
        $('#work').removeClass('active');
        $('#contact').removeClass('active')
        $('#about').removeClass('active');
       
    }
    
    $scope.about = function(){
        $state.go('about');
        $('#work').removeClass('active');
        $('#contact').removeClass('active')
        $('#about').addClass('active');
        
        
    }
    
    $scope.work = function(){
        $state.go('work');
        $('#contact').removeClass('active')
        $('#about').removeClass('active');
        $('#work').addClass('active');
    }
});