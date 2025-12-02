var size = 0;
var placement = 'point';

var style_AccesstoHousingandServicesScore_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Deprivation — IoD2019 Scores_Barriers to Housing and Services Score");
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
    if (value >= 4.325000 && value <= 13.662800) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,234,70,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 13.662800 && value <= 23.000600) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(190,175,111,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23.000600 && value <= 32.338400) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(125,124,120,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 32.338400 && value <= 41.676200) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(65,77,107,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 41.676200 && value <= 51.014000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,32,77,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
