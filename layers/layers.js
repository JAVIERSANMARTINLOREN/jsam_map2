var wms_layers = [];

var lyr_FondoOrtoimagenMosaico_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.MosaicElement",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fondo/Ortoimagen/Mosaico",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FondoOrtoimagenMosaico_0, 0]);
var format_A_Limite_provincias_Andalucia_1 = new ol.format.GeoJSON();
var features_A_Limite_provincias_Andalucia_1 = format_A_Limite_provincias_Andalucia_1.readFeatures(json_A_Limite_provincias_Andalucia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A_Limite_provincias_Andalucia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_Limite_provincias_Andalucia_1.addFeatures(features_A_Limite_provincias_Andalucia_1);
var lyr_A_Limite_provincias_Andalucia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_Limite_provincias_Andalucia_1, 
                style: style_A_Limite_provincias_Andalucia_1,
                interactive: true,
                title: '<img src="styles/legend/A_Limite_provincias_Andalucia_1.png" /> A_Limite_provincias_Andalucia'
            });
var format_A_Limite_EENNPP_Sierra_de_las_Nieves_2 = new ol.format.GeoJSON();
var features_A_Limite_EENNPP_Sierra_de_las_Nieves_2 = format_A_Limite_EENNPP_Sierra_de_las_Nieves_2.readFeatures(json_A_Limite_EENNPP_Sierra_de_las_Nieves_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A_Limite_EENNPP_Sierra_de_las_Nieves_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_Limite_EENNPP_Sierra_de_las_Nieves_2.addFeatures(features_A_Limite_EENNPP_Sierra_de_las_Nieves_2);
var lyr_A_Limite_EENNPP_Sierra_de_las_Nieves_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_Limite_EENNPP_Sierra_de_las_Nieves_2, 
                style: style_A_Limite_EENNPP_Sierra_de_las_Nieves_2,
                interactive: true,
                title: '<img src="styles/legend/A_Limite_EENNPP_Sierra_de_las_Nieves_2.png" /> A_Limite_EENNPP_Sierra_de_las_Nieves'
            });
var format_A_Limite_Yunquera_3 = new ol.format.GeoJSON();
var features_A_Limite_Yunquera_3 = format_A_Limite_Yunquera_3.readFeatures(json_A_Limite_Yunquera_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A_Limite_Yunquera_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_Limite_Yunquera_3.addFeatures(features_A_Limite_Yunquera_3);
var lyr_A_Limite_Yunquera_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_Limite_Yunquera_3, 
                style: style_A_Limite_Yunquera_3,
                interactive: true,
                title: '<img src="styles/legend/A_Limite_Yunquera_3.png" /> A_Limite_Yunquera'
            });
var format_A_Plaga_Foco_Heterobasidium_4 = new ol.format.GeoJSON();
var features_A_Plaga_Foco_Heterobasidium_4 = format_A_Plaga_Foco_Heterobasidium_4.readFeatures(json_A_Plaga_Foco_Heterobasidium_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A_Plaga_Foco_Heterobasidium_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_Plaga_Foco_Heterobasidium_4.addFeatures(features_A_Plaga_Foco_Heterobasidium_4);
var lyr_A_Plaga_Foco_Heterobasidium_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_Plaga_Foco_Heterobasidium_4, 
                style: style_A_Plaga_Foco_Heterobasidium_4,
                interactive: true,
                title: '<img src="styles/legend/A_Plaga_Foco_Heterobasidium_4.png" /> A_Plaga_Foco_Heterobasidium'
            });
var format_L_Via_camino_5 = new ol.format.GeoJSON();
var features_L_Via_camino_5 = format_L_Via_camino_5.readFeatures(json_L_Via_camino_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L_Via_camino_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L_Via_camino_5.addFeatures(features_L_Via_camino_5);
var lyr_L_Via_camino_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_L_Via_camino_5, 
                style: style_L_Via_camino_5,
                interactive: true,
                title: '<img src="styles/legend/L_Via_camino_5.png" /> L_Via_camino'
            });
var format_L_Via_carretera_6 = new ol.format.GeoJSON();
var features_L_Via_carretera_6 = format_L_Via_carretera_6.readFeatures(json_L_Via_carretera_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L_Via_carretera_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L_Via_carretera_6.addFeatures(features_L_Via_carretera_6);
var lyr_L_Via_carretera_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_L_Via_carretera_6, 
                style: style_L_Via_carretera_6,
                interactive: true,
                title: '<img src="styles/legend/L_Via_carretera_6.png" /> L_Via_carretera'
            });
var format_L_Via_sendero_7 = new ol.format.GeoJSON();
var features_L_Via_sendero_7 = format_L_Via_sendero_7.readFeatures(json_L_Via_sendero_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L_Via_sendero_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L_Via_sendero_7.addFeatures(features_L_Via_sendero_7);
var lyr_L_Via_sendero_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_L_Via_sendero_7, 
                style: style_L_Via_sendero_7,
                interactive: true,
                title: '<img src="styles/legend/L_Via_sendero_7.png" /> L_Via_sendero'
            });
var format_P_Inventario_IFN3_8 = new ol.format.GeoJSON();
var features_P_Inventario_IFN3_8 = format_P_Inventario_IFN3_8.readFeatures(json_P_Inventario_IFN3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P_Inventario_IFN3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P_Inventario_IFN3_8.addFeatures(features_P_Inventario_IFN3_8);
var lyr_P_Inventario_IFN3_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_P_Inventario_IFN3_8, 
                style: style_P_Inventario_IFN3_8,
                interactive: true,
                title: '<img src="styles/legend/P_Inventario_IFN3_8.png" /> P_Inventario_IFN3'
            });

lyr_FondoOrtoimagenMosaico_0.setVisible(true);lyr_A_Limite_provincias_Andalucia_1.setVisible(true);lyr_A_Limite_EENNPP_Sierra_de_las_Nieves_2.setVisible(true);lyr_A_Limite_Yunquera_3.setVisible(true);lyr_A_Plaga_Foco_Heterobasidium_4.setVisible(true);lyr_L_Via_camino_5.setVisible(true);lyr_L_Via_carretera_6.setVisible(true);lyr_L_Via_sendero_7.setVisible(true);lyr_P_Inventario_IFN3_8.setVisible(false);
var layersList = [lyr_FondoOrtoimagenMosaico_0,lyr_A_Limite_provincias_Andalucia_1,lyr_A_Limite_EENNPP_Sierra_de_las_Nieves_2,lyr_A_Limite_Yunquera_3,lyr_A_Plaga_Foco_Heterobasidium_4,lyr_L_Via_camino_5,lyr_L_Via_carretera_6,lyr_L_Via_sendero_7,lyr_P_Inventario_IFN3_8];
lyr_A_Limite_provincias_Andalucia_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PROVINCIAS': 'PROVINCIAS', 'PROVINCI_1': 'PROVINCI_1', 'PROVINCIA': 'PROVINCIA', 'SUM__P_F45': 'SUM__P_F45', 'TSUM__P_F4': 'TSUM__P_F4', 'TSUM__P__1': 'TSUM__P__1', 'SUM_SUM_C2': 'SUM_SUM_C2', 'SUM_C2': 'SUM_C2', 'C1': 'C1', 'C2': 'C2', 'C3': 'C3', 'C4': 'C4', 'C5': 'C5', 'C6': 'C6', 'C7': 'C7', 'C8': 'C8', 'C9': 'C9', 'C10': 'C10', });
lyr_A_Limite_EENNPP_Sierra_de_las_Nieves_2.set('fieldAliases', {'CODIGOESPA': 'CODIGOESPA', 'FIGURA': 'FIGURA', 'NOMBRE': 'NOMBRE', 'SUPERFICIE': 'SUPERFICIE', 'SUP_TER': 'SUP_TER', 'SUP_MAR': 'SUP_MAR', 'ZON_PRO': 'ZON_PRO', 'FEC_DECLA': 'FEC_DECLA', 'NOR_DECLA': 'NOR_DECLA', 'FEC_DEC_PR': 'FEC_DEC_PR', 'NOR_DEC_PR': 'NOR_DEC_PR', 'FEC_LIM_LI': 'FEC_LIM_LI', 'NOR_LIM_LI': 'NOR_LIM_LI', 'FEC_LIM_CA': 'FEC_LIM_CA', 'NOR_LIM_CA': 'NOR_LIM_CA', 'OBSERVAC': 'OBSERVAC', 'FORMAT_LEG': 'FORMAT_LEG', 'CARACTER': 'CARACTER', 'TIPO_FIGUR': 'TIPO_FIGUR', });
lyr_A_Limite_Yunquera_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_A_Plaga_Foco_Heterobasidium_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', });
lyr_L_Via_camino_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_L_Via_carretera_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_L_Via_sendero_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_P_Inventario_IFN3_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_A_Limite_provincias_Andalucia_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PROVINCIAS': 'TextEdit', 'PROVINCI_1': 'TextEdit', 'PROVINCIA': 'TextEdit', 'SUM__P_F45': 'TextEdit', 'TSUM__P_F4': 'TextEdit', 'TSUM__P__1': 'TextEdit', 'SUM_SUM_C2': 'TextEdit', 'SUM_C2': 'TextEdit', 'C1': 'TextEdit', 'C2': 'TextEdit', 'C3': 'TextEdit', 'C4': 'TextEdit', 'C5': 'TextEdit', 'C6': 'TextEdit', 'C7': 'TextEdit', 'C8': 'TextEdit', 'C9': 'TextEdit', 'C10': 'TextEdit', });
lyr_A_Limite_EENNPP_Sierra_de_las_Nieves_2.set('fieldImages', {'CODIGOESPA': '', 'FIGURA': '', 'NOMBRE': '', 'SUPERFICIE': '', 'SUP_TER': '', 'SUP_MAR': '', 'ZON_PRO': '', 'FEC_DECLA': '', 'NOR_DECLA': '', 'FEC_DEC_PR': '', 'NOR_DEC_PR': '', 'FEC_LIM_LI': '', 'NOR_LIM_LI': '', 'FEC_LIM_CA': '', 'NOR_LIM_CA': '', 'OBSERVAC': '', 'FORMAT_LEG': '', 'CARACTER': '', 'TIPO_FIGUR': '', });
lyr_A_Limite_Yunquera_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_A_Plaga_Foco_Heterobasidium_4.set('fieldImages', {'OBJECTID': '', 'Name': '', });
lyr_L_Via_camino_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_L_Via_carretera_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_L_Via_sendero_7.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_P_Inventario_IFN3_8.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_A_Limite_provincias_Andalucia_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PROVINCIAS': 'no label', 'PROVINCI_1': 'no label', 'PROVINCIA': 'no label', 'SUM__P_F45': 'no label', 'TSUM__P_F4': 'no label', 'TSUM__P__1': 'no label', 'SUM_SUM_C2': 'no label', 'SUM_C2': 'no label', 'C1': 'no label', 'C2': 'no label', 'C3': 'no label', 'C4': 'no label', 'C5': 'no label', 'C6': 'no label', 'C7': 'no label', 'C8': 'no label', 'C9': 'no label', 'C10': 'no label', });
lyr_A_Limite_EENNPP_Sierra_de_las_Nieves_2.set('fieldLabels', {'CODIGOESPA': 'no label', 'FIGURA': 'no label', 'NOMBRE': 'no label', 'SUPERFICIE': 'no label', 'SUP_TER': 'no label', 'SUP_MAR': 'no label', 'ZON_PRO': 'no label', 'FEC_DECLA': 'no label', 'NOR_DECLA': 'no label', 'FEC_DEC_PR': 'no label', 'NOR_DEC_PR': 'no label', 'FEC_LIM_LI': 'no label', 'NOR_LIM_LI': 'no label', 'FEC_LIM_CA': 'no label', 'NOR_LIM_CA': 'no label', 'OBSERVAC': 'no label', 'FORMAT_LEG': 'no label', 'CARACTER': 'no label', 'TIPO_FIGUR': 'no label', });
lyr_A_Limite_Yunquera_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_A_Plaga_Foco_Heterobasidium_4.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', });
lyr_L_Via_camino_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_L_Via_carretera_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_L_Via_sendero_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_P_Inventario_IFN3_8.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_P_Inventario_IFN3_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});