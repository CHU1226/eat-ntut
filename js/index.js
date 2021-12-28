var start1 = function(){
    let i = 0;
    let time = setInterval(() => {
        i += 1;
        f1.newFood();
        if (i == 10) {
            clearInterval(time);
        }
    }, 100);
}
var start2 = function(){
    let i = 0;
    let time = setInterval(() => {
        i += 1;
        f2.newFood();
        if (i == 10) {
            clearInterval(time);
        }
    }, 100);
}

function randomFood(food) {
    this.food = food
}

function randomFood2(food){
    randomFood.call(this,food);
}

randomFood2.prototype = Object.create(randomFood.prototype);
randomFood2.prototype.constructor = randomFood2
randomFood2.prototype.newFood = function(){
    let num = Math.floor(Math.random(this.food.length + 1) * 10);
    let answer = document.querySelector('.food-block p');
    answer.textContent = this.food[num];
}

var f1 = new randomFood2(['LOUISA', '小木屋鬆餅', '麥味登', '誠字號', '全家', '自助餐', '素還真', '四海遊龍', '橙廚義麵', '蔥抓餅']);
var f2 = new randomFood2(['元味便當', '光華垃圾麵', '麻辣燙', '光華飯包', '小四川', '來來炒飯', '銀記', 'PASTA', '嵐迪', '咖食堂'])



