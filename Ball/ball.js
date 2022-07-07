export class Ball{
    constructor(stageWidth,stageHeight, radius, speed ){
        // 스케이지 사이즈를 가져오고 반지름과 속도를 가지고 옴.
        this.radius =radius;

        // vx, vy는 x,y 좌표값을 움직이는 속도라고 정하기.
        this.vx = speed;
        this.vy = speed;

        // 스테이지에 랜덤으로 위치할 수 있게 함수를 정의해줌.
        const diameter = this.radius * 2;
        this.x = this.radius +(Math.random() * stageWidth - diameter);
        this.y = this.radius +(Math.random() * stageHeight - diameter);
    }

    // draw함수를 만들어서 context를 가지고 오고 스테이지 사이즈를 가져옴.
    // 그러면 canvas context에 그림을 그릴 수 있는 함수가 완성이 됨.
    draw(ctx, stageWidth,stageHeight){

         // x와 y 값에 vx와 vy값을 더해줘서 공이 움직이도록 만듦.
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth,stageHeight);

        // 공에 색을 정하고 그림 그리기
        ctx.fillStyle = '#fdf500';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();

    }

    // bounceWindow라는 함수 생성 (스테이지 상에 닿았는지를 판단하는 함수)
    bounceWindow(stageWidth,stageHeight){

        // 스테이지 넓이와 높이를 가지고 와서 
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        // 스테이지 상에 공이 닿았다면 반대로 튕기기
        // 공이 어디에 닿았는지 판단하고 vx와 vy에 -1을 곱해줘서 반대로 움직이게 하기
        if(this.x <=minX || this.x >=maxX){
            this.vx *= -1;
            this.x += this.vx;
        } else if(this.y <=minY || this.y >=maxY){
            this.vy *= -1;
            this.t += this.vy;
        }

    }

}