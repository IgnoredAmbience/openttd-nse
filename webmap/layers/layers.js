var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_nseminimap_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "nse-minimap",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/nseminimap_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-126246.736611, 6644652.572243, 38420.950353, 6809181.410219]
                            })
                        });
var format_signs_2 = new ol.format.GeoJSON();
var features_signs_2 = format_signs_2.readFeatures(json_signs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_signs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_signs_2.addFeatures(features_signs_2);
var lyr_signs_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_signs_2, 
                style: style_signs_2,
                interactive: true,
    title: 'signs<br />\
    <img src="styles/legend/signs_2_0.png" /> 0<br />\
    <img src="styles/legend/signs_2_1.png" /> 18<br />'
        });
var format_Grid_3 = new ol.format.GeoJSON();
var features_Grid_3 = format_Grid_3.readFeatures(json_Grid_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grid_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grid_3.addFeatures(features_Grid_3);
var lyr_Grid_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Grid_3,
maxResolution:2,
 
                style: style_Grid_3,
                interactive: false,
                title: '<img src="styles/legend/Grid_3.png" /> Grid'
            });
var format_Grid10_4 = new ol.format.GeoJSON();
var features_Grid10_4 = format_Grid10_4.readFeatures(json_Grid10_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grid10_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grid10_4.addFeatures(features_Grid10_4);
var lyr_Grid10_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Grid10_4,
maxResolution:10,
 
                style: style_Grid10_4,
                interactive: false,
                title: '<img src="styles/legend/Grid10_4.png" /> Grid10'
            });
var format_Grid100_5 = new ol.format.GeoJSON();
var features_Grid100_5 = format_Grid100_5.readFeatures(json_Grid100_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grid100_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grid100_5.addFeatures(features_Grid100_5);
var lyr_Grid100_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Grid100_5, 
                style: style_Grid100_5,
                interactive: false,
                title: '<img src="styles/legend/Grid100_5.png" /> Grid100'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_nseminimap_1.setVisible(true);lyr_signs_2.setVisible(true);lyr_Grid_3.setVisible(true);lyr_Grid10_4.setVisible(true);lyr_Grid100_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_nseminimap_1,lyr_signs_2,lyr_Grid_3,lyr_Grid10_4,lyr_Grid100_5];
lyr_signs_2.set('fieldAliases', {'x': 'x', 'y': 'y', 'owner': 'owner', 'text': 'text', });
lyr_Grid_3.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_Grid10_4.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_Grid100_5.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_signs_2.set('fieldImages', {'x': 'Range', 'y': 'Range', 'owner': 'Range', 'text': 'TextEdit', });
lyr_Grid_3.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', });
lyr_Grid10_4.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', });
lyr_Grid100_5.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', });
lyr_signs_2.set('fieldLabels', {'x': 'inline label', 'y': 'inline label', 'owner': 'inline label', 'text': 'inline label', });
lyr_Grid_3.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', });
lyr_Grid10_4.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', });
lyr_Grid100_5.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', });
lyr_Grid100_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
