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
        omgCount: 0,
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
        {imagePath: 'images/imageFour.jpg',
        imageDescription: 'Spinner AKA Grumpy Grandpa and John',
        showDescription: false,
        viewCount: 0,
        omgCount: 0
        },
        {imagePath: 'images/imageFive.jpg',
        imageDescription: 'On second thought, let us not go to Camelot. It is a silly place.',
        showDescription: false,
        viewCount: 0,
        omgCount: 0
        },
        {imagePath: 'images/imageSix.jpg',
        imageDescription: 'Lazy boat day with Sam and Kdawg - featuring Noel',
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
    };
}])