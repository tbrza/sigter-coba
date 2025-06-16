var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BANGLI_1 = new ol.format.GeoJSON();
var features_BANGLI_1 = format_BANGLI_1.readFeatures(json_BANGLI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGLI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGLI_1.addFeatures(features_BANGLI_1);
var lyr_BANGLI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGLI_1, 
                style: style_BANGLI_1,
                popuplayertitle: 'BANGLI',
                interactive: true,
                title: '<img src="styles/legend/BANGLI_1.png" /> BANGLI'
            });
var lyr_Bangli_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Bangli<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Bangli_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12827609.111643, -952508.717984, 12852833.847769, -909546.136763]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_BANGLI_1.setVisible(true);lyr_Bangli_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BANGLI_1,lyr_Bangli_2];
lyr_BANGLI_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV_MIN': 'ELEV_MIN', 'ELEV_MAX': 'ELEV_MAX', });
lyr_BANGLI_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV_MIN': 'TextEdit', 'ELEV_MAX': 'TextEdit', });
lyr_BANGLI_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV_MIN': 'inline label - visible with data', 'ELEV_MAX': 'inline label - always visible', });
lyr_BANGLI_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});