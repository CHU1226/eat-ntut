var start1 = function(){
    let i = 0;
    let time = setInterval(() => {
        i += 1;
        randomFood();
        if (i == 10) {
            clearInterval(time);
        }
    }, 100);
}
function randomFood() {
    let schoolFood = ['LOUISA', '小木屋鬆餅', '麥味登', '誠字號', '全家', '自助餐', '素還真', '四海遊龍', '橙廚義麵', '蔥抓餅'];
    let num = Math.floor(Math.random(schoolFood.length + 1) * 10);
    let answer = document.querySelector('.food-block p');
    answer.textContent = schoolFood[num]; 
}
var start2 = function(){
    let i = 0;
    let time = setInterval(() => {
        i += 1;
        randomFood2();
        if (i == 10) {
            clearInterval(time);
        }
    }, 100);
}
function randomFood2() {
    let streetFood = ['元味便當', '光華垃圾麵', '陳記燒臘', '光華飯包', '小四川', '來來炒飯', '銀記', '麵足飯飽', '大福燒', '嵐迪', '咖食堂']
    let num = Math.floor(Math.random(streetFood.length + 1) * 10);
    let answer = document.querySelector('.food-block p');
    answer.textContent = streetFood[num]
}

