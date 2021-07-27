// 綁 DOM
var areaChose = document.getElementById('area');
var btnHotArea = document.querySelector('.btnG-hotArea');
var areaTitle = document.querySelector('.areaTitle');
var sceneryList = document.querySelector('.sceneryList');

// 拿資料
var xhr = new XMLHttpRequest();
var data = '';
xhr.open('get', 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json', true);
xhr.send(null);
xhr.onload = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        data = JSON.parse(xhr.responseText);
    }
}

// 監聽 (A)
areaChose.addEventListener('change', changeScenery, false);
btnHotArea.addEventListener('click', changeScenery, false);
function changeScenery(e){
    // 改變 標題 區域名 (C)
    var choseAreaName = e.target.value;
    areaTitle.textContent = choseAreaName;

    // 如果選擇區域名 跟 數據區域名一樣 就顯示一樣區域名的li (BC)
    var strList = '';
    var dataLen = data.result.records.length;
    for(var i = 0; i < dataLen; i++){
        // 組 li 的字串 (B)
        var dataAreaName = data.result.records[i].Zone;   
        var title = data.result.records[i].Name;
        var openTime = data.result.records[i].Opentime;
        var add = data.result.records[i].Add;
        var tel = data.result.records[i].Tel;
        var img = data.result.records[i].Picture1;

        if(choseAreaName === dataAreaName){
                var content = '<li><a href="#"><div class="titleG" style="background-image: url(' + img + ');"><h3>' + title + '</h3><p>' + dataAreaName + '</p></div><div class="infoG"><div class="contactText"><p class="openTime"><img src="img/icons_clock.png" alt="icons_clock">'+ openTime +'</p><p class="add"><img src="img/icons_pin.png" alt="icons_pin">'+ add +'</p><p class="phone"><img src="img/icons_phone.png" alt="icons_phone">'+ tel +'</p></div><div class="tag"><img src="img/icons_tag.png" alt="icons_tag"><p>免費參觀</p></div></div></a></li>';
                strList += content;
        }
    }
    sceneryList.innerHTML = strList;
}
