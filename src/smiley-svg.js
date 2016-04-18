(function () {

    angular.module('SmileySvg', [])
        .component('smiley', {
            bindings: { percent: '=' },
            controller: ['$scope', function ($scope) {

                var _this = this;

                this.coords = {
                    leftEye: { x: 35, y: 35 },
                    rightEye: { x: 65, y: 35 },
                    nose: { x: 50, y: 50 },
                    mouthLeft: { x: 20, y: 72 },
                    mouthRight: { x: 80, y: 72 }
                };

                this.getMouthPath = function () {
                    var mouthHeightOffset = 18 * (this.percent / 100);
                    return 'M' + _this.coords.mouthLeft.x + ',' + (_this.coords.mouthLeft.y - mouthHeightOffset / 3)
                        + ' C35,' + (_this.coords.mouthLeft.y + mouthHeightOffset)
                        + ' 65,' + (_this.coords.mouthLeft.y + mouthHeightOffset) + ' '
                        + _this.coords.mouthRight.x + ',' + (_this.coords.mouthRight.y - mouthHeightOffset / 3)
                };

                // this.sadPath = 'M20, 80   C35,60   65,60   80,80';
                // this.happyPath = 'M20, 80   C35,100   65,100   80,80';
            }],
            templateUrl: 'src/smiley-svg.html'
        });

})();