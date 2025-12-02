var size = 0;
var placement = 'point';

var style_EmploymentScore_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Deprivation — IoD2019 Scores_Employment Score (rate)");
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
    if (value >= 0.011000 && value <= 0.037000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(247,252,245,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.037000 && value <= 0.063000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(201,234,194,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.063000 && value <= 0.089000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(123,199,124,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.089000 && value <= 0.115000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(42,146,75,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.115000 && value <= 0.141000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,0.324)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,68,27,0.324)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
