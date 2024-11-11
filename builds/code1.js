gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDWallBrickFlatObjects1= [];
gdjs.MenuCode.GDWallBrickFlatObjects2= [];
gdjs.MenuCode.GDNewTiledSpriteObjects1= [];
gdjs.MenuCode.GDNewTiledSpriteObjects2= [];
gdjs.MenuCode.GDGrassObjects1= [];
gdjs.MenuCode.GDGrassObjects2= [];
gdjs.MenuCode.GDDinoVitaObjects1= [];
gdjs.MenuCode.GDDinoVitaObjects2= [];
gdjs.MenuCode.GDnojumpzoneObjects1= [];
gdjs.MenuCode.GDnojumpzoneObjects2= [];
gdjs.MenuCode.GDHeightObjects1= [];
gdjs.MenuCode.GDHeightObjects2= [];
gdjs.MenuCode.GDwarningObjects1= [];
gdjs.MenuCode.GDwarningObjects2= [];
gdjs.MenuCode.GDRock3Objects1= [];
gdjs.MenuCode.GDRock3Objects2= [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDDinoBounceObjects1= [];
gdjs.MenuCode.GDDinoBounceObjects2= [];
gdjs.MenuCode.GDHowtoObjects1= [];
gdjs.MenuCode.GDHowtoObjects2= [];
gdjs.MenuCode.GDYellowJellyButtonObjects1= [];
gdjs.MenuCode.GDYellowJellyButtonObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YellowJellyButton"), gdjs.MenuCode.GDYellowJellyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDYellowJellyButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDYellowJellyButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDYellowJellyButtonObjects1[k] = gdjs.MenuCode.GDYellowJellyButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDYellowJellyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDWallBrickFlatObjects1.length = 0;
gdjs.MenuCode.GDWallBrickFlatObjects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuCode.GDGrassObjects1.length = 0;
gdjs.MenuCode.GDGrassObjects2.length = 0;
gdjs.MenuCode.GDDinoVitaObjects1.length = 0;
gdjs.MenuCode.GDDinoVitaObjects2.length = 0;
gdjs.MenuCode.GDnojumpzoneObjects1.length = 0;
gdjs.MenuCode.GDnojumpzoneObjects2.length = 0;
gdjs.MenuCode.GDHeightObjects1.length = 0;
gdjs.MenuCode.GDHeightObjects2.length = 0;
gdjs.MenuCode.GDwarningObjects1.length = 0;
gdjs.MenuCode.GDwarningObjects2.length = 0;
gdjs.MenuCode.GDRock3Objects1.length = 0;
gdjs.MenuCode.GDRock3Objects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDDinoBounceObjects1.length = 0;
gdjs.MenuCode.GDDinoBounceObjects2.length = 0;
gdjs.MenuCode.GDHowtoObjects1.length = 0;
gdjs.MenuCode.GDHowtoObjects2.length = 0;
gdjs.MenuCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.MenuCode.GDYellowJellyButtonObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDWallBrickFlatObjects1.length = 0;
gdjs.MenuCode.GDWallBrickFlatObjects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuCode.GDGrassObjects1.length = 0;
gdjs.MenuCode.GDGrassObjects2.length = 0;
gdjs.MenuCode.GDDinoVitaObjects1.length = 0;
gdjs.MenuCode.GDDinoVitaObjects2.length = 0;
gdjs.MenuCode.GDnojumpzoneObjects1.length = 0;
gdjs.MenuCode.GDnojumpzoneObjects2.length = 0;
gdjs.MenuCode.GDHeightObjects1.length = 0;
gdjs.MenuCode.GDHeightObjects2.length = 0;
gdjs.MenuCode.GDwarningObjects1.length = 0;
gdjs.MenuCode.GDwarningObjects2.length = 0;
gdjs.MenuCode.GDRock3Objects1.length = 0;
gdjs.MenuCode.GDRock3Objects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDDinoBounceObjects1.length = 0;
gdjs.MenuCode.GDDinoBounceObjects2.length = 0;
gdjs.MenuCode.GDHowtoObjects1.length = 0;
gdjs.MenuCode.GDHowtoObjects2.length = 0;
gdjs.MenuCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.MenuCode.GDYellowJellyButtonObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
