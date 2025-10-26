var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Clusters_1 = new ol.format.GeoJSON();
var features_Clusters_1 = format_Clusters_1.readFeatures(json_Clusters_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clusters_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clusters_1.addFeatures(features_Clusters_1);
var lyr_Clusters_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clusters_1, 
                style: style_Clusters_1,
                popuplayertitle: 'Clusters',
                interactive: true,
    title: 'Clusters<br />\
    <img src="styles/legend/Clusters_1_0.png" /> 1. Educated,  Economically Active Professionals<br />\
    <img src="styles/legend/Clusters_1_1.png" /> 2.  Young,  Student-Dominated Areas<br />\
    <img src="styles/legend/Clusters_1_2.png" /> 3.  Older Retirees,  Less Active<br />\
    <img src="styles/legend/Clusters_1_3.png" /> 4.  Working Families<br />\
    <img src="styles/legend/Clusters_1_4.png" /> 5.  Higher Deprivation<br />\
    <img src="styles/legend/Clusters_1_5.png" /> 6.  High-Performing Professionals<br />\
    <img src="styles/legend/Clusters_1_6.png" /> 7.  Old, More Stable,  High UK Born<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Clusters_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Clusters_1];
lyr_Clusters_1.set('fieldAliases', {'fid': 'fid', 'OA21CD': 'OA21CD', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'Estimated 2019 GE Vote': 'Estimated 2019 GE Vote', 'Estimated 2024 GE Vote': 'Estimated 2024 GE Vote', 'Economic Outlook': 'Economic Outlook', 'Census_Level 4 qualifications or above': 'Census_Level 4 qualifications or above', 'Census_VG/G Health reported': 'Census_VG/G Health reported', 'Census_0 dimension deprivation': 'Census_0 dimension deprivation', 'Census_2-4dimensions of deprivation': 'Census_2-4dimensions of deprivation', 'Census_Economically active (excluding full-time students)': 'Census_Economically active (excluding full-time students)', 'Census_Economically inactive: Retired': 'Census_Economically inactive: Retired', 'Census_Economically inactive: Student': 'Census_Economically inactive: Student', 'Census_Economically inactive: Long-term sick or disabled': 'Census_Economically inactive: Long-term sick or disabled', 'Census_Provides unpaid care': 'Census_Provides unpaid care', 'Census_AB': 'Census_AB', 'Census_C1': 'Census_C1', 'Census_C2': 'Census_C2', 'Census_DE': 'Census_DE', 'Clusters_Cluster_7': 'Clusters_Cluster_7', });
lyr_Clusters_1.set('fieldImages', {'fid': 'TextEdit', 'OA21CD': 'TextEdit', 'LSOA21CD': 'TextEdit', 'LSOA21NM': 'TextEdit', 'LSOA21NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'Estimated 2019 GE Vote': 'TextEdit', 'Estimated 2024 GE Vote': 'TextEdit', 'Economic Outlook': 'TextEdit', 'Census_Level 4 qualifications or above': 'TextEdit', 'Census_VG/G Health reported': 'TextEdit', 'Census_0 dimension deprivation': 'TextEdit', 'Census_2-4dimensions of deprivation': 'TextEdit', 'Census_Economically active (excluding full-time students)': 'TextEdit', 'Census_Economically inactive: Retired': 'TextEdit', 'Census_Economically inactive: Student': 'TextEdit', 'Census_Economically inactive: Long-term sick or disabled': 'TextEdit', 'Census_Provides unpaid care': 'TextEdit', 'Census_AB': 'Range', 'Census_C1': 'Range', 'Census_C2': 'Range', 'Census_DE': 'Range', 'Clusters_Cluster_7': 'TextEdit', });
lyr_Clusters_1.set('fieldLabels', {'fid': 'hidden field', 'OA21CD': 'header label - always visible', 'LSOA21CD': 'hidden field', 'LSOA21NM': 'hidden field', 'LSOA21NMW': 'hidden field', 'BNG_E': 'hidden field', 'BNG_N': 'hidden field', 'LAT': 'hidden field', 'LONG': 'hidden field', 'GlobalID': 'hidden field', 'Estimated 2019 GE Vote': 'header label - always visible', 'Estimated 2024 GE Vote': 'header label - always visible', 'Economic Outlook': 'header label - always visible', 'Census_Level 4 qualifications or above': 'header label - always visible', 'Census_VG/G Health reported': 'header label - always visible', 'Census_0 dimension deprivation': 'header label - always visible', 'Census_2-4dimensions of deprivation': 'header label - always visible', 'Census_Economically active (excluding full-time students)': 'header label - always visible', 'Census_Economically inactive: Retired': 'header label - always visible', 'Census_Economically inactive: Student': 'header label - always visible', 'Census_Economically inactive: Long-term sick or disabled': 'header label - always visible', 'Census_Provides unpaid care': 'header label - always visible', 'Census_AB': 'hidden field', 'Census_C1': 'hidden field', 'Census_C2': 'hidden field', 'Census_DE': 'hidden field', 'Clusters_Cluster_7': 'no label', });
lyr_Clusters_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});