let PlayerFinder = Java.use("com.github.florent37.assets_audio_player.playerimplem.PlayerFinder");
PlayerFinder["sortPlayerImpls"].implementation = function (path, originList) {
    console.log(`PlayerFinder.sortPlayerImpls is called: path=${path}, originList=${originList}`);
    let result = this["sortPlayerImpls"](path, originList);
    console.log(`PlayerFinder.sortPlayerImpls result=${result}`);
    return result;
};