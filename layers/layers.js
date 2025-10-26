var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MedianHouseholdIncome_1 = new ol.format.GeoJSON();
var features_MedianHouseholdIncome_1 = format_MedianHouseholdIncome_1.readFeatures(json_MedianHouseholdIncome_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MedianHouseholdIncome_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MedianHouseholdIncome_1.addFeatures(features_MedianHouseholdIncome_1);
var lyr_MedianHouseholdIncome_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MedianHouseholdIncome_1, 
                style: style_MedianHouseholdIncome_1,
                popuplayertitle: 'Median Household Income',
                interactive: false,
    title: 'Median Household Income<br />\
    <img src="styles/legend/MedianHouseholdIncome_1_0.png" /> £41100 - £52060<br />\
    <img src="styles/legend/MedianHouseholdIncome_1_1.png" /> £52060 - £55440<br />\
    <img src="styles/legend/MedianHouseholdIncome_1_2.png" /> £55440 - £59300<br />\
    <img src="styles/legend/MedianHouseholdIncome_1_3.png" /> £59300 - £63420<br />\
    <img src="styles/legend/MedianHouseholdIncome_1_4.png" /> £63420 - £68800<br />' });
var format_ApproxofABProfessionals_2 = new ol.format.GeoJSON();
var features_ApproxofABProfessionals_2 = format_ApproxofABProfessionals_2.readFeatures(json_ApproxofABProfessionals_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApproxofABProfessionals_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApproxofABProfessionals_2.addFeatures(features_ApproxofABProfessionals_2);
var lyr_ApproxofABProfessionals_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApproxofABProfessionals_2, 
                style: style_ApproxofABProfessionals_2,
                popuplayertitle: 'Approx % of AB Professionals ',
                interactive: false,
    title: 'Approx % of AB Professionals <br />\
    <img src="styles/legend/ApproxofABProfessionals_2_0.png" /> 3% - 18%<br />\
    <img src="styles/legend/ApproxofABProfessionals_2_1.png" /> 18% - 33%<br />\
    <img src="styles/legend/ApproxofABProfessionals_2_2.png" /> 33% - 48%<br />\
    <img src="styles/legend/ApproxofABProfessionals_2_3.png" /> 48% - 63%<br />\
    <img src="styles/legend/ApproxofABProfessionals_2_4.png" /> 63% - 78%<br />' });
var format_livingin24dimensionsofdeprivation_3 = new ol.format.GeoJSON();
var features_livingin24dimensionsofdeprivation_3 = format_livingin24dimensionsofdeprivation_3.readFeatures(json_livingin24dimensionsofdeprivation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_livingin24dimensionsofdeprivation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_livingin24dimensionsofdeprivation_3.addFeatures(features_livingin24dimensionsofdeprivation_3);
var lyr_livingin24dimensionsofdeprivation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_livingin24dimensionsofdeprivation_3, 
                style: style_livingin24dimensionsofdeprivation_3,
                popuplayertitle: '% living in 2-4 dimensions of deprivation',
                interactive: false,
    title: '% living in 2-4 dimensions of deprivation<br />\
    <img src="styles/legend/livingin24dimensionsofdeprivation_3_0.png" /> 1% - 9%<br />\
    <img src="styles/legend/livingin24dimensionsofdeprivation_3_1.png" /> 9% - 16%<br />\
    <img src="styles/legend/livingin24dimensionsofdeprivation_3_2.png" /> 16% - 24%<br />\
    <img src="styles/legend/livingin24dimensionsofdeprivation_3_3.png" /> 24% - 31%<br />\
    <img src="styles/legend/livingin24dimensionsofdeprivation_3_4.png" /> 31% - 39%<br />' });
var format_Level4QualificationorAbove_4 = new ol.format.GeoJSON();
var features_Level4QualificationorAbove_4 = format_Level4QualificationorAbove_4.readFeatures(json_Level4QualificationorAbove_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Level4QualificationorAbove_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Level4QualificationorAbove_4.addFeatures(features_Level4QualificationorAbove_4);
var lyr_Level4QualificationorAbove_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Level4QualificationorAbove_4, 
                style: style_Level4QualificationorAbove_4,
                popuplayertitle: 'Level 4 Qualification or Above',
                interactive: false,
    title: 'Level 4 Qualification or Above<br />\
    <img src="styles/legend/Level4QualificationorAbove_4_0.png" /> 11% - 24%<br />\
    <img src="styles/legend/Level4QualificationorAbove_4_1.png" /> 24% - 37%<br />\
    <img src="styles/legend/Level4QualificationorAbove_4_2.png" /> 37% - 50%<br />\
    <img src="styles/legend/Level4QualificationorAbove_4_3.png" /> 50% - 64%<br />\
    <img src="styles/legend/Level4QualificationorAbove_4_4.png" /> 64% - 77%<br />' });
var format_hrsofunpaidcareweek_5 = new ol.format.GeoJSON();
var features_hrsofunpaidcareweek_5 = format_hrsofunpaidcareweek_5.readFeatures(json_hrsofunpaidcareweek_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hrsofunpaidcareweek_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hrsofunpaidcareweek_5.addFeatures(features_hrsofunpaidcareweek_5);
var lyr_hrsofunpaidcareweek_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hrsofunpaidcareweek_5, 
                style: style_hrsofunpaidcareweek_5,
                popuplayertitle: '# hrs of unpaid care/week',
                interactive: false,
    title: '# hrs of unpaid care/week<br />\
    <img src="styles/legend/hrsofunpaidcareweek_5_0.png" /> 1.5 - 4.9 hrs/week<br />\
    <img src="styles/legend/hrsofunpaidcareweek_5_1.png" /> 4.9 - 8.2 hrs/week<br />\
    <img src="styles/legend/hrsofunpaidcareweek_5_2.png" /> 8.2 - 11.6 hrs/week<br />\
    <img src="styles/legend/hrsofunpaidcareweek_5_3.png" /> 11.6 - 14.9 hrs/ week<br />\
    <img src="styles/legend/hrsofunpaidcareweek_5_4.png" /> 14.9 - 18.3 hrs/ week<br />' });
var format_reportingVGGhealth_6 = new ol.format.GeoJSON();
var features_reportingVGGhealth_6 = format_reportingVGGhealth_6.readFeatures(json_reportingVGGhealth_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reportingVGGhealth_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reportingVGGhealth_6.addFeatures(features_reportingVGGhealth_6);
var lyr_reportingVGGhealth_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reportingVGGhealth_6, 
                style: style_reportingVGGhealth_6,
                popuplayertitle: '% reporting VG/G health',
                interactive: false,
    title: '% reporting VG/G health<br />\
    <img src="styles/legend/reportingVGGhealth_6_0.png" /> 61% - 68%<br />\
    <img src="styles/legend/reportingVGGhealth_6_1.png" /> 68% - 75%<br />\
    <img src="styles/legend/reportingVGGhealth_6_2.png" /> 75% - 82%<br />\
    <img src="styles/legend/reportingVGGhealth_6_3.png" /> 82% - 89%<br />\
    <img src="styles/legend/reportingVGGhealth_6_4.png" /> 89% - 97%<br />' });
var format_2019GEEstimate_7 = new ol.format.GeoJSON();
var features_2019GEEstimate_7 = format_2019GEEstimate_7.readFeatures(json_2019GEEstimate_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019GEEstimate_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019GEEstimate_7.addFeatures(features_2019GEEstimate_7);
var lyr_2019GEEstimate_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2019GEEstimate_7, 
                style: style_2019GEEstimate_7,
                popuplayertitle: '2019 GE Estimate',
                interactive: false,
    title: '2019 GE Estimate<br />\
    <img src="styles/legend/2019GEEstimate_7_0.png" /> Liberal Democrat<br />\
    <img src="styles/legend/2019GEEstimate_7_1.png" /> Conservatives<br />' });
var format_2024GEEstimate_8 = new ol.format.GeoJSON();
var features_2024GEEstimate_8 = format_2024GEEstimate_8.readFeatures(json_2024GEEstimate_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024GEEstimate_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024GEEstimate_8.addFeatures(features_2024GEEstimate_8);
var lyr_2024GEEstimate_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024GEEstimate_8, 
                style: style_2024GEEstimate_8,
                popuplayertitle: '2024 GE Estimate',
                interactive: false,
    title: '2024 GE Estimate<br />\
    <img src="styles/legend/2024GEEstimate_8_0.png" /> Liberal Democrat<br />\
    <img src="styles/legend/2024GEEstimate_8_1.png" /> Conservative<br />' });
var format_EconomicOutlook_9 = new ol.format.GeoJSON();
var features_EconomicOutlook_9 = format_EconomicOutlook_9.readFeatures(json_EconomicOutlook_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EconomicOutlook_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EconomicOutlook_9.addFeatures(features_EconomicOutlook_9);
var lyr_EconomicOutlook_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EconomicOutlook_9, 
                style: style_EconomicOutlook_9,
                popuplayertitle: 'Economic Outlook',
                interactive: false,
    title: 'Economic Outlook<br />\
    <img src="styles/legend/EconomicOutlook_9_0.png" /> Strong Right Wing<br />\
    <img src="styles/legend/EconomicOutlook_9_1.png" /> Right-Leaning<br />\
    <img src="styles/legend/EconomicOutlook_9_2.png" /> Centre<br />\
    <img src="styles/legend/EconomicOutlook_9_3.png" /> Left-Leaning<br />\
    <img src="styles/legend/EconomicOutlook_9_4.png" /> Strong Left<br />' });
var format_Clusters_10 = new ol.format.GeoJSON();
var features_Clusters_10 = format_Clusters_10.readFeatures(json_Clusters_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clusters_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clusters_10.addFeatures(features_Clusters_10);
var lyr_Clusters_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clusters_10, 
                style: style_Clusters_10,
                popuplayertitle: 'Clusters',
                interactive: true,
    title: 'Clusters<br />\
    <img src="styles/legend/Clusters_10_0.png" /> 1. Educated,  Economically Active Professionals<br />\
    <img src="styles/legend/Clusters_10_1.png" /> 2.  Young,  Student-Dominated Areas<br />\
    <img src="styles/legend/Clusters_10_2.png" /> 3.  Older Retirees,  Less Active<br />\
    <img src="styles/legend/Clusters_10_3.png" /> 4.  Working Families<br />\
    <img src="styles/legend/Clusters_10_4.png" /> 5.  Higher Deprivation<br />\
    <img src="styles/legend/Clusters_10_5.png" /> 6.  High-Performing Professionals<br />\
    <img src="styles/legend/Clusters_10_6.png" /> 7.  Old, More Stable,  High UK Born<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_MedianHouseholdIncome_1.setVisible(true);lyr_ApproxofABProfessionals_2.setVisible(true);lyr_livingin24dimensionsofdeprivation_3.setVisible(true);lyr_Level4QualificationorAbove_4.setVisible(true);lyr_hrsofunpaidcareweek_5.setVisible(false);lyr_reportingVGGhealth_6.setVisible(true);lyr_2019GEEstimate_7.setVisible(true);lyr_2024GEEstimate_8.setVisible(true);lyr_EconomicOutlook_9.setVisible(true);lyr_Clusters_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MedianHouseholdIncome_1,lyr_ApproxofABProfessionals_2,lyr_livingin24dimensionsofdeprivation_3,lyr_Level4QualificationorAbove_4,lyr_hrsofunpaidcareweek_5,lyr_reportingVGGhealth_6,lyr_2019GEEstimate_7,lyr_2024GEEstimate_8,lyr_EconomicOutlook_9,lyr_Clusters_10];
lyr_MedianHouseholdIncome_1.set('fieldAliases', {'fid': 'fid', 'MSOA21CD': 'MSOA21CD', 'MSOA21NM': 'MSOA21NM', 'MSOA21NMW': 'MSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'Median Household Income': 'Median Household Income', });
lyr_ApproxofABProfessionals_2.set('fieldAliases', {'fid': 'fid', 'OA21CD': 'OA21CD', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'Estimated 2019 GE Vote': 'Estimated 2019 GE Vote', 'Estimated 2024 GE Vote': 'Estimated 2024 GE Vote', 'Economic Outlook': 'Economic Outlook', 'Census_Level 4 qualifications or above': 'Census_Level 4 qualifications or above', 'Census_VG/G Health reported': 'Census_VG/G Health reported', 'Census_0 dimension deprivation': 'Census_0 dimension deprivation', 'Census_2-4dimensions of deprivation': 'Census_2-4dimensions of deprivation', 'Census_Economically active (excluding full-time students)': 'Census_Economically active (excluding full-time students)', 'Census_Economically inactive: Retired': 'Census_Economically inactive: Retired', 'Census_Economically inactive: Student': 'Census_Economically inactive: Student', 'Census_Economically inactive: Long-term sick or disabled': 'Census_Economically inactive: Long-term sick or disabled', 'Census_Provides unpaid care': 'Census_Provides unpaid care', 'Census_AB': 'Census_AB', 'Census_C1': 'Census_C1', 'Census_C2': 'Census_C2', 'Census_DE': 'Census_DE', });
lyr_livingin24dimensionsofdeprivation_3.set('fieldAliases', {'fid': 'fid', 'OA21CD': 'OA21CD', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'Estimated 2019 GE Vote': 'Estimated 2019 GE Vote', 'Estimated 2024 GE Vote': 'Estimated 2024 GE Vote', 'Economic Outlook': 'Economic Outlook', 'Census_Level 4 qualifications or above': 'Census_Level 4 qualifications or above', 'Census_VG/G Health reported': 'Census_VG/G Health reported', 'Census_0 dimension deprivation': 'Census_0 dimension deprivation', 'Census_2-4dimensions of deprivation': 'Census_2-4dimensions of deprivation', 'Census_Economically active (excluding full-time students)': 'Census_Economically active (excluding full-time students)', 'Census_Economically inactive: Retired': 'Census_Economically inactive: Retired', 'Census_Economically inactive: Student': 'Census_Economically inactive: Student', 'Census_Economically inactive: Long-term sick or disabled': 'Census_Economically inactive: Long-term sick or disabled', 'Census_Provides unpaid care': 'Census_Provides unpaid care', 'Census_AB': 'Census_AB', 'Census_C1': 'Census_C1', 'Census_C2': 'Census_C2', 'Census_DE': 'Census_DE', });
lyr_Level4QualificationorAbove_4.set('fieldAliases', {'fid': 'fid', 'OA21CD': 'OA21CD', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'Estimated 2019 GE Vote': 'Estimated 2019 GE Vote', 'Estimated 2024 GE Vote': 'Estimated 2024 GE Vote', 'Economic Outlook': 'Economic Outlook', 'Census_Level 4 qualifications or above': 'Census_Level 4 qualifications or above', 'Census_VG/G Health reported': 'Census_VG/G Health reported', 'Census_0 dimension deprivation': 'Census_0 dimension deprivation', 'Census_2-4dimensions of deprivation': 'Census_2-4dimensions of deprivation', 'Census_Economically active (excluding full-time students)': 'Census_Economically active (excluding full-time students)', 'Census_Economically inactive: Retired': 'Census_Economically inactive: Retired', 'Census_Economically inactive: Student': 'Census_Economically inactive: Student', 'Census_Economically inactive: Long-term sick or disabled': 'Census_Economically inactive: Long-term sick or disabled', 'Census_Provides unpaid care': 'Census_Provides unpaid care', 'Census_AB': 'Census_AB', 'Census_C1': 'Census_C1', 'Census_C2': 'Census_C2', 'Census_DE': 'Census_DE', });
lyr_hrsofunpaidcareweek_5.set('fieldAliases', {'fid': 'fid', 'OA21CD': 'OA21CD', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'Estimated 2019 GE Vote': 'Estimated 2019 GE Vote', 'Estimated 2024 GE Vote': 'Estimated 2024 GE Vote', 'Economic Outlook': 'Economic Outlook', 'Census_Level 4 qualifications or above': 'Level 4 Qualification or Above (% GP)', 'Census_VG/G Health reported': 'Census_VG/G Health reported', 'Census_0 dimension deprivation': 'Census_0 dimension deprivation', 'Census_2-4dimensions of deprivation': 'Census_2-4dimensions of deprivation', 'Census_Economically active (excluding full-time students)': 'Census_Economically active (excluding full-time students)', 'Census_Economically inactive: Retired': 'Census_Economically inactive: Retired', 'Census_Economically inactive: Student': 'Census_Economically inactive: Student', 'Census_Economically inactive: Long-term sick or disabled': 'Census_Economically inactive: Long-term sick or disabled', 'Census_Provides unpaid care': 'Census_Provides unpaid care', 'Census_AB': 'Census_AB', 'Census_C1': 'Census_C1', 'Census_C2': 'Census_C2', 'Census_DE': 'Census_DE', });
lyr_reportingVGGhealth_6.set('fieldAliases', {'fid': 'fid', 'OA21CD': 'OA21CD', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'Estimated 2019 GE Vote': 'Estimated 2019 GE Vote', 'Estimated 2024 GE Vote': 'Estimated 2024 GE Vote', 'Economic Outlook': 'Economic Outlook', 'Census_Level 4 qualifications or above': 'Census_Level 4 qualifications or above', 'Census_VG/G Health reported': 'Census_VG/G Health reported', 'Census_0 dimension deprivation': 'Census_0 dimension deprivation', 'Census_2-4dimensions of deprivation': 'Census_2-4dimensions of deprivation', 'Census_Economically active (excluding full-time students)': 'Census_Economically active (excluding full-time students)', 'Census_Economically inactive: Retired': 'Census_Economically inactive: Retired', 'Census_Economically inactive: Student': 'Census_Economically inactive: Student', 'Census_Economically inactive: Long-term sick or disabled': 'Census_Economically inactive: Long-term sick or disabled', 'Census_Provides unpaid care': 'Census_Provides unpaid care', 'Census_AB': 'Census_AB', 'Census_C1': 'Census_C1', 'Census_C2': 'Census_C2', 'Census_DE': 'Census_DE', });
lyr_2019GEEstimate_7.set('fieldAliases', {'fid': 'fid', 'OA21CD': 'OA21CD', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'Estimated 2019 GE Vote': 'Estimated 2019 GE Vote', 'Estimated 2024 GE Vote': 'Estimated 2024 GE Vote', 'Economic Outlook': 'Economic Outlook', 'Census_Level 4 qualifications or above': 'Census_Level 4 qualifications or above', 'Census_VG/G Health reported': 'Census_VG/G Health reported', 'Census_0 dimension deprivation': 'Census_0 dimension deprivation', 'Census_2-4dimensions of deprivation': 'Census_2-4dimensions of deprivation', 'Census_Economically active (excluding full-time students)': 'Census_Economically active (excluding full-time students)', 'Census_Economically inactive: Retired': 'Census_Economically inactive: Retired', 'Census_Economically inactive: Student': 'Census_Economically inactive: Student', 'Census_Economically inactive: Long-term sick or disabled': 'Census_Economically inactive: Long-term sick or disabled', 'Census_Provides unpaid care': 'Census_Provides unpaid care', 'Census_AB': 'Census_AB', 'Census_C1': 'Census_C1', 'Census_C2': 'Census_C2', 'Census_DE': 'Census_DE', });
lyr_2024GEEstimate_8.set('fieldAliases', {'fid': 'fid', 'OA21CD': 'OA21CD', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'Estimated 2019 GE Vote': 'Estimated 2019 GE Vote', 'Estimated 2024 GE Vote': 'Estimated 2024 GE Vote', 'Economic Outlook': 'Economic Outlook', 'Census_Level 4 qualifications or above': 'Census_Level 4 qualifications or above', 'Census_VG/G Health reported': 'Census_VG/G Health reported', 'Census_0 dimension deprivation': 'Census_0 dimension deprivation', 'Census_2-4dimensions of deprivation': 'Census_2-4dimensions of deprivation', 'Census_Economically active (excluding full-time students)': 'Census_Economically active (excluding full-time students)', 'Census_Economically inactive: Retired': 'Census_Economically inactive: Retired', 'Census_Economically inactive: Student': 'Census_Economically inactive: Student', 'Census_Economically inactive: Long-term sick or disabled': 'Census_Economically inactive: Long-term sick or disabled', 'Census_Provides unpaid care': 'Census_Provides unpaid care', 'Census_AB': 'Census_AB', 'Census_C1': 'Census_C1', 'Census_C2': 'Census_C2', 'Census_DE': 'Census_DE', });
lyr_EconomicOutlook_9.set('fieldAliases', {'fid': 'fid', 'OA21CD': 'OA21CD', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'Estimated 2019 GE Vote': 'Estimated 2019 GE Vote', 'Estimated 2024 GE Vote': 'Estimated 2024 GE Vote', 'Economic Outlook': 'Economic Outlook', 'Census_Level 4 qualifications or above': 'Census_Level 4 qualifications or above', 'Census_VG/G Health reported': 'Census_VG/G Health reported', 'Census_0 dimension deprivation': 'Census_0 dimension deprivation', 'Census_2-4dimensions of deprivation': 'Census_2-4dimensions of deprivation', 'Census_Economically active (excluding full-time students)': 'Census_Economically active (excluding full-time students)', 'Census_Economically inactive: Retired': 'Census_Economically inactive: Retired', 'Census_Economically inactive: Student': 'Census_Economically inactive: Student', 'Census_Economically inactive: Long-term sick or disabled': 'Census_Economically inactive: Long-term sick or disabled', 'Census_Provides unpaid care': 'Census_Provides unpaid care', 'Census_AB': 'Census_AB', 'Census_C1': 'Census_C1', 'Census_C2': 'Census_C2', 'Census_DE': 'Census_DE', });
lyr_Clusters_10.set('fieldAliases', {'fid': 'fid', 'OA21CD': 'OA21CD', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'Estimated 2019 GE Vote': 'Estimated 2019 GE Vote', 'Estimated 2024 GE Vote': 'Estimated 2024 GE Vote', 'Economic Outlook': 'Economic Outlook', 'Census_Level 4 qualifications or above': 'Census_Level 4 qualifications or above', 'Census_VG/G Health reported': 'Census_VG/G Health reported', 'Census_0 dimension deprivation': 'Census_0 dimension deprivation', 'Census_2-4dimensions of deprivation': 'Census_2-4dimensions of deprivation', 'Census_Economically active (excluding full-time students)': 'Census_Economically active (excluding full-time students)', 'Census_Economically inactive: Retired': 'Census_Economically inactive: Retired', 'Census_Economically inactive: Student': 'Census_Economically inactive: Student', 'Census_Economically inactive: Long-term sick or disabled': 'Census_Economically inactive: Long-term sick or disabled', 'Census_Provides unpaid care': 'Census_Provides unpaid care', 'Census_AB': 'Census_AB', 'Census_C1': 'Census_C1', 'Census_C2': 'Census_C2', 'Census_DE': 'Census_DE', 'Clusters_Cluster_7': 'Clusters_Cluster_7', });
lyr_MedianHouseholdIncome_1.set('fieldImages', {'fid': 'TextEdit', 'MSOA21CD': 'TextEdit', 'MSOA21NM': 'TextEdit', 'MSOA21NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'Median Household Income': 'Range', });
lyr_ApproxofABProfessionals_2.set('fieldImages', {'fid': 'TextEdit', 'OA21CD': 'TextEdit', 'LSOA21CD': 'TextEdit', 'LSOA21NM': 'TextEdit', 'LSOA21NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'Estimated 2019 GE Vote': 'TextEdit', 'Estimated 2024 GE Vote': 'TextEdit', 'Economic Outlook': 'TextEdit', 'Census_Level 4 qualifications or above': 'TextEdit', 'Census_VG/G Health reported': 'TextEdit', 'Census_0 dimension deprivation': 'TextEdit', 'Census_2-4dimensions of deprivation': 'TextEdit', 'Census_Economically active (excluding full-time students)': 'TextEdit', 'Census_Economically inactive: Retired': 'TextEdit', 'Census_Economically inactive: Student': 'TextEdit', 'Census_Economically inactive: Long-term sick or disabled': 'TextEdit', 'Census_Provides unpaid care': 'TextEdit', 'Census_AB': 'Range', 'Census_C1': 'Range', 'Census_C2': 'Range', 'Census_DE': 'Range', });
lyr_livingin24dimensionsofdeprivation_3.set('fieldImages', {'fid': 'TextEdit', 'OA21CD': 'TextEdit', 'LSOA21CD': 'TextEdit', 'LSOA21NM': 'TextEdit', 'LSOA21NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'Estimated 2019 GE Vote': 'TextEdit', 'Estimated 2024 GE Vote': 'TextEdit', 'Economic Outlook': 'TextEdit', 'Census_Level 4 qualifications or above': 'TextEdit', 'Census_VG/G Health reported': 'TextEdit', 'Census_0 dimension deprivation': 'TextEdit', 'Census_2-4dimensions of deprivation': 'TextEdit', 'Census_Economically active (excluding full-time students)': 'TextEdit', 'Census_Economically inactive: Retired': 'TextEdit', 'Census_Economically inactive: Student': 'TextEdit', 'Census_Economically inactive: Long-term sick or disabled': 'TextEdit', 'Census_Provides unpaid care': 'TextEdit', 'Census_AB': 'Range', 'Census_C1': 'Range', 'Census_C2': 'Range', 'Census_DE': 'Range', });
lyr_Level4QualificationorAbove_4.set('fieldImages', {'fid': 'TextEdit', 'OA21CD': 'TextEdit', 'LSOA21CD': 'TextEdit', 'LSOA21NM': 'TextEdit', 'LSOA21NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'Estimated 2019 GE Vote': 'TextEdit', 'Estimated 2024 GE Vote': 'TextEdit', 'Economic Outlook': 'TextEdit', 'Census_Level 4 qualifications or above': 'TextEdit', 'Census_VG/G Health reported': 'TextEdit', 'Census_0 dimension deprivation': 'TextEdit', 'Census_2-4dimensions of deprivation': 'TextEdit', 'Census_Economically active (excluding full-time students)': 'TextEdit', 'Census_Economically inactive: Retired': 'TextEdit', 'Census_Economically inactive: Student': 'TextEdit', 'Census_Economically inactive: Long-term sick or disabled': 'TextEdit', 'Census_Provides unpaid care': 'TextEdit', 'Census_AB': 'Range', 'Census_C1': 'Range', 'Census_C2': 'Range', 'Census_DE': 'Range', });
lyr_hrsofunpaidcareweek_5.set('fieldImages', {'fid': 'TextEdit', 'OA21CD': 'TextEdit', 'LSOA21CD': 'TextEdit', 'LSOA21NM': 'TextEdit', 'LSOA21NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'Estimated 2019 GE Vote': 'TextEdit', 'Estimated 2024 GE Vote': 'TextEdit', 'Economic Outlook': 'TextEdit', 'Census_Level 4 qualifications or above': 'TextEdit', 'Census_VG/G Health reported': 'TextEdit', 'Census_0 dimension deprivation': 'TextEdit', 'Census_2-4dimensions of deprivation': 'TextEdit', 'Census_Economically active (excluding full-time students)': 'TextEdit', 'Census_Economically inactive: Retired': 'TextEdit', 'Census_Economically inactive: Student': 'TextEdit', 'Census_Economically inactive: Long-term sick or disabled': 'TextEdit', 'Census_Provides unpaid care': 'TextEdit', 'Census_AB': 'Range', 'Census_C1': 'Range', 'Census_C2': 'Range', 'Census_DE': 'Range', });
lyr_reportingVGGhealth_6.set('fieldImages', {'fid': 'TextEdit', 'OA21CD': 'TextEdit', 'LSOA21CD': 'TextEdit', 'LSOA21NM': 'TextEdit', 'LSOA21NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'Estimated 2019 GE Vote': 'TextEdit', 'Estimated 2024 GE Vote': 'TextEdit', 'Economic Outlook': 'TextEdit', 'Census_Level 4 qualifications or above': 'TextEdit', 'Census_VG/G Health reported': 'TextEdit', 'Census_0 dimension deprivation': 'TextEdit', 'Census_2-4dimensions of deprivation': 'TextEdit', 'Census_Economically active (excluding full-time students)': 'TextEdit', 'Census_Economically inactive: Retired': 'TextEdit', 'Census_Economically inactive: Student': 'TextEdit', 'Census_Economically inactive: Long-term sick or disabled': 'TextEdit', 'Census_Provides unpaid care': 'TextEdit', 'Census_AB': 'Range', 'Census_C1': 'Range', 'Census_C2': 'Range', 'Census_DE': 'Range', });
lyr_2019GEEstimate_7.set('fieldImages', {'fid': 'TextEdit', 'OA21CD': 'TextEdit', 'LSOA21CD': 'TextEdit', 'LSOA21NM': 'TextEdit', 'LSOA21NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'Estimated 2019 GE Vote': 'TextEdit', 'Estimated 2024 GE Vote': 'TextEdit', 'Economic Outlook': 'TextEdit', 'Census_Level 4 qualifications or above': 'TextEdit', 'Census_VG/G Health reported': 'TextEdit', 'Census_0 dimension deprivation': 'TextEdit', 'Census_2-4dimensions of deprivation': 'TextEdit', 'Census_Economically active (excluding full-time students)': 'TextEdit', 'Census_Economically inactive: Retired': 'TextEdit', 'Census_Economically inactive: Student': 'TextEdit', 'Census_Economically inactive: Long-term sick or disabled': 'TextEdit', 'Census_Provides unpaid care': 'TextEdit', 'Census_AB': 'Range', 'Census_C1': 'Range', 'Census_C2': 'Range', 'Census_DE': 'Range', });
lyr_2024GEEstimate_8.set('fieldImages', {'fid': 'TextEdit', 'OA21CD': 'TextEdit', 'LSOA21CD': 'TextEdit', 'LSOA21NM': 'TextEdit', 'LSOA21NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'Estimated 2019 GE Vote': 'TextEdit', 'Estimated 2024 GE Vote': 'TextEdit', 'Economic Outlook': 'TextEdit', 'Census_Level 4 qualifications or above': 'TextEdit', 'Census_VG/G Health reported': 'TextEdit', 'Census_0 dimension deprivation': 'TextEdit', 'Census_2-4dimensions of deprivation': 'TextEdit', 'Census_Economically active (excluding full-time students)': 'TextEdit', 'Census_Economically inactive: Retired': 'TextEdit', 'Census_Economically inactive: Student': 'TextEdit', 'Census_Economically inactive: Long-term sick or disabled': 'TextEdit', 'Census_Provides unpaid care': 'TextEdit', 'Census_AB': 'Range', 'Census_C1': 'Range', 'Census_C2': 'Range', 'Census_DE': 'Range', });
lyr_EconomicOutlook_9.set('fieldImages', {'fid': 'TextEdit', 'OA21CD': 'TextEdit', 'LSOA21CD': 'TextEdit', 'LSOA21NM': 'TextEdit', 'LSOA21NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'Estimated 2019 GE Vote': '', 'Estimated 2024 GE Vote': '', 'Economic Outlook': 'TextEdit', 'Census_Level 4 qualifications or above': '', 'Census_VG/G Health reported': '', 'Census_0 dimension deprivation': '', 'Census_2-4dimensions of deprivation': '', 'Census_Economically active (excluding full-time students)': '', 'Census_Economically inactive: Retired': '', 'Census_Economically inactive: Student': '', 'Census_Economically inactive: Long-term sick or disabled': '', 'Census_Provides unpaid care': '', 'Census_AB': '', 'Census_C1': '', 'Census_C2': '', 'Census_DE': '', });
lyr_Clusters_10.set('fieldImages', {'fid': 'TextEdit', 'OA21CD': 'TextEdit', 'LSOA21CD': 'TextEdit', 'LSOA21NM': 'TextEdit', 'LSOA21NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'Estimated 2019 GE Vote': 'TextEdit', 'Estimated 2024 GE Vote': 'TextEdit', 'Economic Outlook': 'TextEdit', 'Census_Level 4 qualifications or above': 'TextEdit', 'Census_VG/G Health reported': 'TextEdit', 'Census_0 dimension deprivation': 'TextEdit', 'Census_2-4dimensions of deprivation': 'TextEdit', 'Census_Economically active (excluding full-time students)': 'TextEdit', 'Census_Economically inactive: Retired': 'TextEdit', 'Census_Economically inactive: Student': 'TextEdit', 'Census_Economically inactive: Long-term sick or disabled': 'TextEdit', 'Census_Provides unpaid care': 'TextEdit', 'Census_AB': 'Range', 'Census_C1': 'Range', 'Census_C2': 'Range', 'Census_DE': 'Range', 'Clusters_Cluster_7': 'TextEdit', });
lyr_MedianHouseholdIncome_1.set('fieldLabels', {'fid': 'no label', 'MSOA21CD': 'no label', 'MSOA21NM': 'no label', 'MSOA21NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'GlobalID': 'no label', 'Median Household Income': 'no label', });
lyr_ApproxofABProfessionals_2.set('fieldLabels', {'fid': 'no label', 'OA21CD': 'no label', 'LSOA21CD': 'no label', 'LSOA21NM': 'no label', 'LSOA21NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'GlobalID': 'no label', 'Estimated 2019 GE Vote': 'no label', 'Estimated 2024 GE Vote': 'no label', 'Economic Outlook': 'no label', 'Census_Level 4 qualifications or above': 'no label', 'Census_VG/G Health reported': 'no label', 'Census_0 dimension deprivation': 'no label', 'Census_2-4dimensions of deprivation': 'no label', 'Census_Economically active (excluding full-time students)': 'no label', 'Census_Economically inactive: Retired': 'no label', 'Census_Economically inactive: Student': 'no label', 'Census_Economically inactive: Long-term sick or disabled': 'no label', 'Census_Provides unpaid care': 'no label', 'Census_AB': 'no label', 'Census_C1': 'no label', 'Census_C2': 'no label', 'Census_DE': 'no label', });
lyr_livingin24dimensionsofdeprivation_3.set('fieldLabels', {'fid': 'no label', 'OA21CD': 'no label', 'LSOA21CD': 'no label', 'LSOA21NM': 'no label', 'LSOA21NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'GlobalID': 'no label', 'Estimated 2019 GE Vote': 'no label', 'Estimated 2024 GE Vote': 'no label', 'Economic Outlook': 'no label', 'Census_Level 4 qualifications or above': 'no label', 'Census_VG/G Health reported': 'no label', 'Census_0 dimension deprivation': 'no label', 'Census_2-4dimensions of deprivation': 'no label', 'Census_Economically active (excluding full-time students)': 'no label', 'Census_Economically inactive: Retired': 'no label', 'Census_Economically inactive: Student': 'no label', 'Census_Economically inactive: Long-term sick or disabled': 'no label', 'Census_Provides unpaid care': 'no label', 'Census_AB': 'no label', 'Census_C1': 'no label', 'Census_C2': 'no label', 'Census_DE': 'no label', });
lyr_Level4QualificationorAbove_4.set('fieldLabels', {'fid': 'no label', 'OA21CD': 'no label', 'LSOA21CD': 'no label', 'LSOA21NM': 'no label', 'LSOA21NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'GlobalID': 'no label', 'Estimated 2019 GE Vote': 'no label', 'Estimated 2024 GE Vote': 'no label', 'Economic Outlook': 'no label', 'Census_Level 4 qualifications or above': 'no label', 'Census_VG/G Health reported': 'no label', 'Census_0 dimension deprivation': 'no label', 'Census_2-4dimensions of deprivation': 'no label', 'Census_Economically active (excluding full-time students)': 'no label', 'Census_Economically inactive: Retired': 'no label', 'Census_Economically inactive: Student': 'no label', 'Census_Economically inactive: Long-term sick or disabled': 'no label', 'Census_Provides unpaid care': 'no label', 'Census_AB': 'no label', 'Census_C1': 'no label', 'Census_C2': 'no label', 'Census_DE': 'no label', });
lyr_hrsofunpaidcareweek_5.set('fieldLabels', {'fid': 'hidden field', 'OA21CD': 'inline label - always visible', 'LSOA21CD': 'hidden field', 'LSOA21NM': 'no label', 'LSOA21NMW': 'inline label - visible with data', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'hidden field', 'LONG': 'no label', 'GlobalID': 'no label', 'Estimated 2019 GE Vote': 'inline label - always visible', 'Estimated 2024 GE Vote': 'inline label - always visible', 'Economic Outlook': 'inline label - always visible', 'Census_Level 4 qualifications or above': 'no label', 'Census_VG/G Health reported': 'no label', 'Census_0 dimension deprivation': 'no label', 'Census_2-4dimensions of deprivation': 'no label', 'Census_Economically active (excluding full-time students)': 'no label', 'Census_Economically inactive: Retired': 'no label', 'Census_Economically inactive: Student': 'no label', 'Census_Economically inactive: Long-term sick or disabled': 'no label', 'Census_Provides unpaid care': 'no label', 'Census_AB': 'no label', 'Census_C1': 'no label', 'Census_C2': 'no label', 'Census_DE': 'no label', });
lyr_reportingVGGhealth_6.set('fieldLabels', {'fid': 'no label', 'OA21CD': 'no label', 'LSOA21CD': 'no label', 'LSOA21NM': 'no label', 'LSOA21NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'GlobalID': 'no label', 'Estimated 2019 GE Vote': 'no label', 'Estimated 2024 GE Vote': 'no label', 'Economic Outlook': 'no label', 'Census_Level 4 qualifications or above': 'no label', 'Census_VG/G Health reported': 'no label', 'Census_0 dimension deprivation': 'no label', 'Census_2-4dimensions of deprivation': 'no label', 'Census_Economically active (excluding full-time students)': 'no label', 'Census_Economically inactive: Retired': 'no label', 'Census_Economically inactive: Student': 'no label', 'Census_Economically inactive: Long-term sick or disabled': 'no label', 'Census_Provides unpaid care': 'no label', 'Census_AB': 'no label', 'Census_C1': 'no label', 'Census_C2': 'no label', 'Census_DE': 'no label', });
lyr_2019GEEstimate_7.set('fieldLabels', {'fid': 'hidden field', 'OA21CD': 'inline label - visible with data', 'LSOA21CD': 'hidden field', 'LSOA21NM': 'hidden field', 'LSOA21NMW': 'hidden field', 'BNG_E': 'hidden field', 'BNG_N': 'hidden field', 'LAT': 'hidden field', 'LONG': 'hidden field', 'GlobalID': 'hidden field', 'Estimated 2019 GE Vote': 'no label', 'Estimated 2024 GE Vote': 'no label', 'Economic Outlook': 'inline label - always visible', 'Census_Level 4 qualifications or above': 'no label', 'Census_VG/G Health reported': 'no label', 'Census_0 dimension deprivation': 'no label', 'Census_2-4dimensions of deprivation': 'no label', 'Census_Economically active (excluding full-time students)': 'no label', 'Census_Economically inactive: Retired': 'no label', 'Census_Economically inactive: Student': 'no label', 'Census_Economically inactive: Long-term sick or disabled': 'no label', 'Census_Provides unpaid care': 'no label', 'Census_AB': 'no label', 'Census_C1': 'no label', 'Census_C2': 'no label', 'Census_DE': 'no label', });
lyr_2024GEEstimate_8.set('fieldLabels', {'fid': 'no label', 'OA21CD': 'no label', 'LSOA21CD': 'no label', 'LSOA21NM': 'no label', 'LSOA21NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'GlobalID': 'no label', 'Estimated 2019 GE Vote': 'no label', 'Estimated 2024 GE Vote': 'no label', 'Economic Outlook': 'no label', 'Census_Level 4 qualifications or above': 'no label', 'Census_VG/G Health reported': 'no label', 'Census_0 dimension deprivation': 'no label', 'Census_2-4dimensions of deprivation': 'no label', 'Census_Economically active (excluding full-time students)': 'no label', 'Census_Economically inactive: Retired': 'no label', 'Census_Economically inactive: Student': 'no label', 'Census_Economically inactive: Long-term sick or disabled': 'no label', 'Census_Provides unpaid care': 'no label', 'Census_AB': 'no label', 'Census_C1': 'no label', 'Census_C2': 'no label', 'Census_DE': 'no label', });
lyr_EconomicOutlook_9.set('fieldLabels', {'fid': 'no label', 'OA21CD': 'no label', 'LSOA21CD': 'no label', 'LSOA21NM': 'no label', 'LSOA21NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'GlobalID': 'no label', 'Estimated 2019 GE Vote': 'no label', 'Estimated 2024 GE Vote': 'no label', 'Economic Outlook': 'no label', 'Census_Level 4 qualifications or above': 'no label', 'Census_VG/G Health reported': 'no label', 'Census_0 dimension deprivation': 'no label', 'Census_2-4dimensions of deprivation': 'no label', 'Census_Economically active (excluding full-time students)': 'no label', 'Census_Economically inactive: Retired': 'no label', 'Census_Economically inactive: Student': 'no label', 'Census_Economically inactive: Long-term sick or disabled': 'no label', 'Census_Provides unpaid care': 'no label', 'Census_AB': 'no label', 'Census_C1': 'no label', 'Census_C2': 'no label', 'Census_DE': 'no label', });
lyr_Clusters_10.set('fieldLabels', {'fid': 'hidden field', 'OA21CD': 'header label - always visible', 'LSOA21CD': 'hidden field', 'LSOA21NM': 'hidden field', 'LSOA21NMW': 'hidden field', 'BNG_E': 'hidden field', 'BNG_N': 'hidden field', 'LAT': 'hidden field', 'LONG': 'hidden field', 'GlobalID': 'hidden field', 'Estimated 2019 GE Vote': 'header label - always visible', 'Estimated 2024 GE Vote': 'header label - always visible', 'Economic Outlook': 'header label - always visible', 'Census_Level 4 qualifications or above': 'header label - always visible', 'Census_VG/G Health reported': 'header label - always visible', 'Census_0 dimension deprivation': 'header label - always visible', 'Census_2-4dimensions of deprivation': 'header label - always visible', 'Census_Economically active (excluding full-time students)': 'header label - always visible', 'Census_Economically inactive: Retired': 'header label - always visible', 'Census_Economically inactive: Student': 'header label - always visible', 'Census_Economically inactive: Long-term sick or disabled': 'header label - always visible', 'Census_Provides unpaid care': 'header label - always visible', 'Census_AB': 'hidden field', 'Census_C1': 'hidden field', 'Census_C2': 'hidden field', 'Census_DE': 'hidden field', 'Clusters_Cluster_7': 'no label', });
lyr_Clusters_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});