gdjs.DeathCode = {};
gdjs.DeathCode.localVariables = [];
gdjs.DeathCode.GDDiedObjects1= [];
gdjs.DeathCode.GDDiedObjects2= [];
gdjs.DeathCode.GDPointsObjects1= [];
gdjs.DeathCode.GDPointsObjects2= [];
gdjs.DeathCode.GDPlay_9595AgainObjects1= [];
gdjs.DeathCode.GDPlay_9595AgainObjects2= [];


gdjs.DeathCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.DeathCode.GDPointsObjects1);
{for(var i = 0, len = gdjs.DeathCode.GDPointsObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDPointsObjects1[i].getBehavior("Text").setText("You had " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()) + " Feet");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Again"), gdjs.DeathCode.GDPlay_9595AgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DeathCode.GDPlay_9595AgainObjects1.length;i<l;++i) {
    if ( gdjs.DeathCode.GDPlay_9595AgainObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DeathCode.GDPlay_9595AgainObjects1[k] = gdjs.DeathCode.GDPlay_9595AgainObjects1[i];
        ++k;
    }
}
gdjs.DeathCode.GDPlay_9595AgainObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathCode.GDDiedObjects1.length = 0;
gdjs.DeathCode.GDDiedObjects2.length = 0;
gdjs.DeathCode.GDPointsObjects1.length = 0;
gdjs.DeathCode.GDPointsObjects2.length = 0;
gdjs.DeathCode.GDPlay_9595AgainObjects1.length = 0;
gdjs.DeathCode.GDPlay_9595AgainObjects2.length = 0;

gdjs.DeathCode.eventsList0(runtimeScene);
gdjs.DeathCode.GDDiedObjects1.length = 0;
gdjs.DeathCode.GDDiedObjects2.length = 0;
gdjs.DeathCode.GDPointsObjects1.length = 0;
gdjs.DeathCode.GDPointsObjects2.length = 0;
gdjs.DeathCode.GDPlay_9595AgainObjects1.length = 0;
gdjs.DeathCode.GDPlay_9595AgainObjects2.length = 0;


return;

}

gdjs['DeathCode'] = gdjs.DeathCode;
