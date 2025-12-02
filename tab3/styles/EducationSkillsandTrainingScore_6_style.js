var size = 0;
var placement = 'point';

var style_EducationSkillsandTrainingScore_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Deprivation — IoD2019 Scores_Education, Skills and Training Score");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.138000 && value <= 12.439000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(247,251,255,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 12.439000 && value <= 24.740000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(200,220,240,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24.740000 && value <= 37.041000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(115,178,216,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 37.041000 && value <= 49.342000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(41,121,185,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 49.342000 && value <= 61.643000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(8,48,107,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
