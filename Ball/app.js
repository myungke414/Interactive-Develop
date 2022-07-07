// ball.js import
import{
    Ball
} from './ball.js';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');     // 캔버스 생성
        this.ctx = this.canvas.getContext('2d');            // context 가져오기

        document.body.appendChild(this.canvas);
        window.addEventListener('resize', this.resize.bind(this), false) // 리사이즈 이벤트 걸기 -> 현재 내가 만들고자 하는 애니메이션 크기를 아는 것이 굉장히 중요.
        this.resize();

        // 화면에 움직이는 거 확인해보기
        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15); // 반지름 60, 속도 15로 임의테스트 해보기

        window.requestAnimationFrame(this.animate.bind(this)); // requestAnimationFrame 걸어준 다음 -> line28 (애니메이션 구동 함수 생성)
    }
    // 리사이즈 이벤트를 걸어주고 스크린 사이즈를 가져와서 애니메이션을 정의.

        resize(){
            this.stageWidth = document.body.clientWidth;
            this.stageHeight = document.body.clientHeight;

            // 스크린 사이즈를 미리 정해 놓고 하는 경우가 많은데 사실 브라우저는 가변적인것.
            // 그래서 스크린사이즈 가져오는 함수를 먼저 정의 해주고 작업을 하는게 나중을 위해서라도 편하다고 함.

            this.canvas.width = this.stageWidth * 2;
            this.canvas.height = this.stageHeight * 2;
            this.ctx.scale(2,2);
        }


        //애니메이션 실제로 구동시키는 함수 생성
        animate(t){ 
            window.requestAnimationFrame(this.animate.bind(this));

            this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

            this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
        } 
    }


window.onload = () =>{
    new App();
};