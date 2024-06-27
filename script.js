let clickCount = 0
let autoClickers = 0;
let autoClickerCost = 10;


function checkCookie() {
    let cookies = document.cookie
    cookies = cookies.split('; ')
    console.log(cookies)
    for (let i = 0; i < cookies.length; i += 1){
        let cookie = cookies[i]
        let name_and_value = cookie.split('=')
        let name = name_and_value[0]
        
        if (name == 'slashes') {
            clickCount = name_and_value[1]
            document.getElementById('slashes').textContent = `${Math.round(clickCount)}`;
        }else{
            clickCount = 0
            document.getElementById('slashes').textContent = `${Math.round(clickCount)}`;
        }
        console.log(clickCount)
    }
    
}

checkCookie()

function updateClickCount() {
    document.getElementById('slashes').textContent = `${Math.round(clickCount)}`;
}

function updateAutoClickers() {
    document.getElementById('autoClickers').textContent = `Auto Clickers: ${autoClickers}`;
}

function handleClick() {
    console.log(clickCount)
    clickCount+=1;
    updateClickCount();
    document.cookie = `slashes=${clickCount};max-age=10000000000000000000000`
}

function buyAutoClicker() {
    if (clickCount >= autoClickerCost) {
        autoClickers++;
        clickCount -= autoClickerCost;
        autoClickerCost *= 1.5; // Increase the cost for the next auto clicker
        document.getElementById('buyAutoClicker').innerHTML = `Buy Auto Clicker (Cost: ${Math.round(autoClickerCost)} Slashes)`
        updateClickCount();
        updateAutoClickers();
        
    } else {
        alert("Not enough Slashes to buy an Auto Clicker!");
    }
}

function autoClickerClick() {
    clickCount = +clickCount + +autoClickers;
    updateClickCount();
}

document.getElementById('clickButton').addEventListener('click', handleClick);
document.getElementById('buyAutoClicker').addEventListener('click', buyAutoClicker);

// Automatic clicking by auto clickers every second
setInterval(autoClickerClick, 1000);
let button =document.getElementById('clickButton')
button.addEventListener('click', function(){
    anime({
        targets: '#clickButton',
        scale: 0.8,
        duration: 80,
        easing: 'linear',
        }).finished.then(function(){
            anime({
                targets: '#clickButton',
                scale: 1,
                duration: 80,
                easing: 'linear',
                })
        })
        
});