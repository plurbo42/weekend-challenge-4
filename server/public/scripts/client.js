console.log('js loaded');

var app = angular.module('GalleryApp', []);

app.controller('GalleryController', ['$http', function($http){
    console.log('Gallery Controller has been loaded');
    var self = this;
    self.imageArray = [
        {imagePath: 'images/imageOne.jpg',
        imageDescription: 'Look at that snoot',
        showDescription: false,
        viewCount: 0,
        omgCount: 0
        },
        {imagePath: 'images/imageTwo.jpg',
        imageDescription: 'Sleepy Feets',
        showDescription: false,
        viewCount: 0,
        omgCount: 0
        },
        {imagePath: 'images/imageThree.jpg',
        imageDescription: 'Serene Socks',
        showDescription: false,
        viewCount: 0,
        omgCount: 0
        },
        {imagePath: 'images/imageThree.jpg',
        imageDescription: 'Serene Socks',
        showDescription: false,
        viewCount: 0,
        omgCount: 0
        },
        {imagePath: 'images/imageThree.jpg',
        imageDescription: 'Serene Socks',
        showDescription: false,
        viewCount: 0,
        omgCount: 0
        },
        {imagePath: 'images/imageThree.jpg',
        imageDescription: 'Serene Socks',
        showDescription: false,
        viewCount: 0,
        omgCount: 0
        }
    ];

    self.clickImage = function(imageObject){
        console.log('image clicked');
        imageObject.viewCount ++;
        imageObject.showDescription = true;
    };

    self.omg = function(imageObject){
        console.log('O M G');
        imageObject.omgCount ++;
    }


}])