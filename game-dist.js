!function(){class t{static get(t,i){return Math.floor(Math.random()*i)+t}}class i{constructor(t,i){this.x=t,this.y=i,this.width=10,this.height=10}draw(){s.fillRect(this.x,this.y,this.width,this.height)}static generate(){return new i(t.get(0,500),t.get(0,300))}}class h{constructor(t,i){this.x=t,this.y=i,this.width=10,this.height=10,this.back=null}draw(){s.fillRect(this.x,this.y,this.width,this.height),this.hasBack()&&this.back.draw()}add(){if(this.hasBack())return this.back.add();this.back=new h(this.x,this.y)}hasBack(){return null!==this.back}copy(){this.hasBack()&&(this.back.copy(),this.back.x=this.x,this.back.y=this.y)}right(){this.copy(),this.x+=10}left(){this.copy(),this.x-=10}up(){this.copy(),this.y-=10}down(){this.copy(),this.y+=10}hit(t,i=!1){return!(this===t&&!this.hasBack())&&(this===t?this.back.hit(t,!0):!(i&&!this.hasBack())&&(i?this.back.hit(t):this.hasBack()?c(this,t)||this.back.hit(t):c(this,t)))}hitBorder(){return this.x>490||this.x<0||this.y>290||this.y<0}}const e=document.getElementById("canvas"),s=e.getContext("2d"),d=new class{constructor(){this.head=new h(100,0),this.draw(),this.direction="right",this.head.add(),this.head.add(),this.head.add(),this.head.add(),this.head.add()}draw(){this.head.draw()}right(){"left"!==this.direction&&(this.direction="right")}left(){"right"!==this.direction&&(this.direction="left")}up(){"down"!==this.direction&&(this.direction="up")}down(){"up"!==this.direction&&(this.direction="down")}move(){return"up"===this.direction?this.head.up():"down"===this.direction?this.head.down():"left"===this.direction?this.head.left():"right"===this.direction?this.head.right():void 0}eat(){this.head.add()}dead(){return this.head.hit(this.head)||this.head.hitBorder()}};let a=[];window.addEventListener("keydown",(function(t){return t.keyCode>36&&t.keyCode<41&&t.preventDefault(),40===t.keyCode?d.down():39===t.keyCode?d.right():38===t.keyCode?d.up():37===t.keyCode&&d.left()}));const n=setInterval((function(){d.move(),s.clearRect(0,0,e.width,e.height),d.draw(),function(){for(const t in a){const i=a[t];void 0!==i&&(i.draw(),o(i,d.head)&&(d.eat(),r(i)))}}(),d.dead()&&(console.log("Se acabo"),window.clearInterval(n))}),200);function r(t){a=a.filter((function(i){return t!==i}))}function c(t,i){return t.x==i.x&&t.y==i.y}function o(t,i){var h=!1;return i.x+i.width>=t.x&&i.x<t.x+t.width&&i.y+i.height>=t.y&&i.y<t.y+t.height&&(h=!0),i.x<=t.x&&i.x+i.width>=t.x+t.width&&i.y<=t.y&&i.y+i.height>=t.y+t.height&&(h=!0),t.x<=i.x&&t.x+t.width>=i.x+i.width&&t.y<=i.y&&t.y+t.height>=i.y+i.height&&(h=!0),h}setInterval((function(){const t=i.generate();a.push(t),setTimeout((function(){r(t)}),1e4)}),4e3)}();