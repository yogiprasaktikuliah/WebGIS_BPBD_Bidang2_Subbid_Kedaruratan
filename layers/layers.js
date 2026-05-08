var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Admin_Kalsel_Biro_Tapem_1 = new ol.format.GeoJSON();
var features_Admin_Kalsel_Biro_Tapem_1 = format_Admin_Kalsel_Biro_Tapem_1.readFeatures(json_Admin_Kalsel_Biro_Tapem_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Admin_Kalsel_Biro_Tapem_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Admin_Kalsel_Biro_Tapem_1.addFeatures(features_Admin_Kalsel_Biro_Tapem_1);
var lyr_Admin_Kalsel_Biro_Tapem_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Admin_Kalsel_Biro_Tapem_1, 
                style: style_Admin_Kalsel_Biro_Tapem_1,
                popuplayertitle: 'Admin_Kalsel_Biro_Tapem',
                interactive: true,
    title: 'Admin_Kalsel_Biro_Tapem<br />\
    <img src="styles/legend/Admin_Kalsel_Biro_Tapem_1_0.png" /> Kabupaten Balangan<br />\
    <img src="styles/legend/Admin_Kalsel_Biro_Tapem_1_1.png" /> Kabupaten Banjar<br />\
    <img src="styles/legend/Admin_Kalsel_Biro_Tapem_1_2.png" /> Kabupaten Barito Kuala<br />\
    <img src="styles/legend/Admin_Kalsel_Biro_Tapem_1_3.png" /> Kabupaten Hulu Sungai Selatan<br />\
    <img src="styles/legend/Admin_Kalsel_Biro_Tapem_1_4.png" /> Kabupaten Hulu Sungai Tengah<br />\
    <img src="styles/legend/Admin_Kalsel_Biro_Tapem_1_5.png" /> Kabupaten Hulu Sungai Utara<br />\
    <img src="styles/legend/Admin_Kalsel_Biro_Tapem_1_6.png" /> Kabupaten Kotabaru<br />\
    <img src="styles/legend/Admin_Kalsel_Biro_Tapem_1_7.png" /> Kabupaten Tabalong<br />\
    <img src="styles/legend/Admin_Kalsel_Biro_Tapem_1_8.png" /> Kabupaten Tanah Bumbu<br />\
    <img src="styles/legend/Admin_Kalsel_Biro_Tapem_1_9.png" /> Kabupaten Tanah Laut<br />\
    <img src="styles/legend/Admin_Kalsel_Biro_Tapem_1_10.png" /> Kabupaten Tapin<br />\
    <img src="styles/legend/Admin_Kalsel_Biro_Tapem_1_11.png" /> Kota Banjarbaru<br />\
    <img src="styles/legend/Admin_Kalsel_Biro_Tapem_1_12.png" /> Kota Banjarmasin<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Admin_Kalsel_Biro_Tapem_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Admin_Kalsel_Biro_Tapem_1];
lyr_Admin_Kalsel_Biro_Tapem_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'KAB_KOTA': 'KAB_KOTA', });
lyr_Admin_Kalsel_Biro_Tapem_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'KAB_KOTA': 'TextEdit', });
lyr_Admin_Kalsel_Biro_Tapem_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'KAB_KOTA': 'header label - always visible', });
lyr_Admin_Kalsel_Biro_Tapem_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});