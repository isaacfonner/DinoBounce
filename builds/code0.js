gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDWallBrickFlatObjects1= [];
gdjs.GameCode.GDWallBrickFlatObjects2= [];
gdjs.GameCode.GDNewTiledSpriteObjects1= [];
gdjs.GameCode.GDNewTiledSpriteObjects2= [];
gdjs.GameCode.GDGrassObjects1= [];
gdjs.GameCode.GDGrassObjects2= [];
gdjs.GameCode.GDDinoVitaObjects1= [];
gdjs.GameCode.GDDinoVitaObjects2= [];
gdjs.GameCode.GDnojumpzoneObjects1= [];
gdjs.GameCode.GDnojumpzoneObjects2= [];
gdjs.GameCode.GDHeightObjects1= [];
gdjs.GameCode.GDHeightObjects2= [];
gdjs.GameCode.GDwarningObjects1= [];
gdjs.GameCode.GDwarningObjects2= [];
gdjs.GameCode.GDRock3Objects1= [];
gdjs.GameCode.GDRock3Objects2= [];
gdjs.GameCode.GDNewTextObjects1= [];
gdjs.GameCode.GDNewTextObjects2= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.GameCode.GDDinoVitaObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDnojumpzoneObjects1Objects = Hashtable.newFrom({"nojumpzone": gdjs.GameCode.GDnojumpzoneObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.GameCode.GDDinoVitaObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.GameCode.GDNewTiledSpriteObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwarningObjects1Objects = Hashtable.newFrom({"warning": gdjs.GameCode.GDwarningObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRock3Objects2Objects = Hashtable.newFrom({"Rock3": gdjs.GameCode.GDRock3Objects2});
gdjs.GameCode.asyncCallback8670260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("DinoVita"), gdjs.GameCode.GDDinoVitaObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("warning"), gdjs.GameCode.GDwarningObjects2);

gdjs.GameCode.GDRock3Objects2.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDwarningObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDwarningObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRock3Objects2Objects, ((gdjs.GameCode.GDDinoVitaObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDDinoVitaObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), (( gdjs.GameCode.GDDinoVitaObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDinoVitaObjects2[0].getPointY("")) - 640, "");
}gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDDinoVitaObjects1) asyncObjectsList.addObject("DinoVita", obj);
for (const obj of gdjs.GameCode.GDwarningObjects1) asyncObjectsList.addObject("warning", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GameCode.asyncCallback8670260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.GameCode.GDDinoVitaObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRock3Objects1Objects = Hashtable.newFrom({"Rock3": gdjs.GameCode.GDRock3Objects1});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.GameCode.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.GameCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.GameCode.GDDinoVitaObjects1);
{for(var i = 0, len = gdjs.GameCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.GameCode.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("nojumpzone"), gdjs.GameCode.GDnojumpzoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDinoVitaObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDnojumpzoneObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDinoVitaObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.GameCode.GDDinoVitaObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDDinoVitaObjects1[0].getPointY("")), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.GameCode.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.GameCode.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDinoVitaObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNewTiledSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDinoVitaObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDDinoVitaObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Jump") >= 0.65 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDinoVitaObjects1[k] = gdjs.GameCode.GDDinoVitaObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDDinoVitaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDinoVitaObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDinoVitaObjects1[i].resetTimer("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.GameCode.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("nojumpzone"), gdjs.GameCode.GDnojumpzoneObjects1);
{for(var i = 0, len = gdjs.GameCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDinoVitaObjects1[i].resetTimer("Jump");
}
}{for(var i = 0, len = gdjs.GameCode.GDnojumpzoneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDnojumpzoneObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDinoVitaObjects1[i].resetTimer("Spawn");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.GameCode.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Height"), gdjs.GameCode.GDHeightObjects1);
{for(var i = 0, len = gdjs.GameCode.GDHeightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeightObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.floor((( gdjs.GameCode.GDDinoVitaObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDDinoVitaObjects1[0].getPointY("")) * -(0.01)) + 12) + "FT");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.GameCode.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDinoVitaObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDDinoVitaObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Spawn") >= 1.25 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDinoVitaObjects1[k] = gdjs.GameCode.GDDinoVitaObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDDinoVitaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDinoVitaObjects1 */
gdjs.GameCode.GDwarningObjects1.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDinoVitaObjects1[i].returnVariable(gdjs.GameCode.GDDinoVitaObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(80, 560));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwarningObjects1Objects, ((gdjs.GameCode.GDDinoVitaObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDDinoVitaObjects1[0].getVariables()).getFromIndex(0).getAsNumber(), -(5), "UI");
}{for(var i = 0, len = gdjs.GameCode.GDwarningObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDwarningObjects1[i].getBehavior("Resizable").setSize(100, 133);
}
}{for(var i = 0, len = gdjs.GameCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDinoVitaObjects1[i].resetTimer("Spawn");
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Rock3"), gdjs.GameCode.GDRock3Objects1);
{for(var i = 0, len = gdjs.GameCode.GDRock3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDRock3Objects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.GameCode.GDDinoVitaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(Math.floor((( gdjs.GameCode.GDDinoVitaObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDDinoVitaObjects1[0].getPointY("")) * -(0.01)) + 12);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.GameCode.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rock3"), gdjs.GameCode.GDRock3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDinoVitaObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRock3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDWallBrickFlatObjects1.length = 0;
gdjs.GameCode.GDWallBrickFlatObjects2.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameCode.GDGrassObjects1.length = 0;
gdjs.GameCode.GDGrassObjects2.length = 0;
gdjs.GameCode.GDDinoVitaObjects1.length = 0;
gdjs.GameCode.GDDinoVitaObjects2.length = 0;
gdjs.GameCode.GDnojumpzoneObjects1.length = 0;
gdjs.GameCode.GDnojumpzoneObjects2.length = 0;
gdjs.GameCode.GDHeightObjects1.length = 0;
gdjs.GameCode.GDHeightObjects2.length = 0;
gdjs.GameCode.GDwarningObjects1.length = 0;
gdjs.GameCode.GDwarningObjects2.length = 0;
gdjs.GameCode.GDRock3Objects1.length = 0;
gdjs.GameCode.GDRock3Objects2.length = 0;
gdjs.GameCode.GDNewTextObjects1.length = 0;
gdjs.GameCode.GDNewTextObjects2.length = 0;

gdjs.GameCode.eventsList1(runtimeScene);
gdjs.GameCode.GDWallBrickFlatObjects1.length = 0;
gdjs.GameCode.GDWallBrickFlatObjects2.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameCode.GDGrassObjects1.length = 0;
gdjs.GameCode.GDGrassObjects2.length = 0;
gdjs.GameCode.GDDinoVitaObjects1.length = 0;
gdjs.GameCode.GDDinoVitaObjects2.length = 0;
gdjs.GameCode.GDnojumpzoneObjects1.length = 0;
gdjs.GameCode.GDnojumpzoneObjects2.length = 0;
gdjs.GameCode.GDHeightObjects1.length = 0;
gdjs.GameCode.GDHeightObjects2.length = 0;
gdjs.GameCode.GDwarningObjects1.length = 0;
gdjs.GameCode.GDwarningObjects2.length = 0;
gdjs.GameCode.GDRock3Objects1.length = 0;
gdjs.GameCode.GDRock3Objects2.length = 0;
gdjs.GameCode.GDNewTextObjects1.length = 0;
gdjs.GameCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
