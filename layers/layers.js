ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([67.740570, 20.055223, 74.780388, 24.839345]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HWACSlothBearCorridorVillages_2 = new ol.format.GeoJSON();
var features_HWACSlothBearCorridorVillages_2 = format_HWACSlothBearCorridorVillages_2.readFeatures(json_HWACSlothBearCorridorVillages_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HWACSlothBearCorridorVillages_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HWACSlothBearCorridorVillages_2.addFeatures(features_HWACSlothBearCorridorVillages_2);
var lyr_HWACSlothBearCorridorVillages_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HWACSlothBearCorridorVillages_2, 
                style: style_HWACSlothBearCorridorVillages_2,
                popuplayertitle: 'HWAC Sloth Bear Corridor Villages',
                interactive: true,
                title: '<img src="styles/legend/HWACSlothBearCorridorVillages_2.png" /> HWAC Sloth Bear Corridor Villages'
            });
var format_HWACSlothBearCorridor_3 = new ol.format.GeoJSON();
var features_HWACSlothBearCorridor_3 = format_HWACSlothBearCorridor_3.readFeatures(json_HWACSlothBearCorridor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HWACSlothBearCorridor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HWACSlothBearCorridor_3.addFeatures(features_HWACSlothBearCorridor_3);
var lyr_HWACSlothBearCorridor_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HWACSlothBearCorridor_3, 
                style: style_HWACSlothBearCorridor_3,
                popuplayertitle: 'HWAC Sloth Bear Corridor',
                interactive: true,
                title: '<img src="styles/legend/HWACSlothBearCorridor_3.png" /> HWAC Sloth Bear Corridor'
            });
var format_HWACLionlandscapeCorridorVillages_4 = new ol.format.GeoJSON();
var features_HWACLionlandscapeCorridorVillages_4 = format_HWACLionlandscapeCorridorVillages_4.readFeatures(json_HWACLionlandscapeCorridorVillages_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HWACLionlandscapeCorridorVillages_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HWACLionlandscapeCorridorVillages_4.addFeatures(features_HWACLionlandscapeCorridorVillages_4);
var lyr_HWACLionlandscapeCorridorVillages_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HWACLionlandscapeCorridorVillages_4, 
                style: style_HWACLionlandscapeCorridorVillages_4,
                popuplayertitle: 'HWAC Lionlandscape Corridor Villages',
                interactive: true,
                title: '<img src="styles/legend/HWACLionlandscapeCorridorVillages_4.png" /> HWAC Lionlandscape Corridor Villages'
            });
var format_HWACLionlandscapeCorridor_5 = new ol.format.GeoJSON();
var features_HWACLionlandscapeCorridor_5 = format_HWACLionlandscapeCorridor_5.readFeatures(json_HWACLionlandscapeCorridor_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HWACLionlandscapeCorridor_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HWACLionlandscapeCorridor_5.addFeatures(features_HWACLionlandscapeCorridor_5);
var lyr_HWACLionlandscapeCorridor_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HWACLionlandscapeCorridor_5, 
                style: style_HWACLionlandscapeCorridor_5,
                popuplayertitle: 'HWAC Lionlandscape Corridor',
                interactive: true,
                title: '<img src="styles/legend/HWACLionlandscapeCorridor_5.png" /> HWAC Lionlandscape Corridor'
            });
var format_HWACForestAreas_6 = new ol.format.GeoJSON();
var features_HWACForestAreas_6 = format_HWACForestAreas_6.readFeatures(json_HWACForestAreas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HWACForestAreas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HWACForestAreas_6.addFeatures(features_HWACForestAreas_6);
var lyr_HWACForestAreas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HWACForestAreas_6, 
                style: style_HWACForestAreas_6,
                popuplayertitle: 'HWAC Forest Areas',
                interactive: true,
                title: '<img src="styles/legend/HWACForestAreas_6.png" /> HWAC Forest Areas'
            });
var format_HWACVillages_7 = new ol.format.GeoJSON();
var features_HWACVillages_7 = format_HWACVillages_7.readFeatures(json_HWACVillages_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HWACVillages_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HWACVillages_7.addFeatures(features_HWACVillages_7);
var lyr_HWACVillages_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HWACVillages_7, 
                style: style_HWACVillages_7,
                popuplayertitle: 'HWAC Villages',
                interactive: true,
                title: '<img src="styles/legend/HWACVillages_7.png" /> HWAC Villages'
            });
var format_HWACRanges_8 = new ol.format.GeoJSON();
var features_HWACRanges_8 = format_HWACRanges_8.readFeatures(json_HWACRanges_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HWACRanges_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HWACRanges_8.addFeatures(features_HWACRanges_8);
var lyr_HWACRanges_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HWACRanges_8, 
                style: style_HWACRanges_8,
                popuplayertitle: 'HWAC Ranges',
                interactive: true,
                title: '<img src="styles/legend/HWACRanges_8.png" /> HWAC Ranges'
            });
var format_HWACPlantationPlots202425_9 = new ol.format.GeoJSON();
var features_HWACPlantationPlots202425_9 = format_HWACPlantationPlots202425_9.readFeatures(json_HWACPlantationPlots202425_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HWACPlantationPlots202425_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HWACPlantationPlots202425_9.addFeatures(features_HWACPlantationPlots202425_9);
var lyr_HWACPlantationPlots202425_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HWACPlantationPlots202425_9, 
                style: style_HWACPlantationPlots202425_9,
                popuplayertitle: 'HWAC Plantation Plots 2024-25',
                interactive: true,
                title: '<img src="styles/legend/HWACPlantationPlots202425_9.png" /> HWAC Plantation Plots 2024-25'
            });
var format_WetlandForestAreas_10 = new ol.format.GeoJSON();
var features_WetlandForestAreas_10 = format_WetlandForestAreas_10.readFeatures(json_WetlandForestAreas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WetlandForestAreas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WetlandForestAreas_10.addFeatures(features_WetlandForestAreas_10);
var lyr_WetlandForestAreas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WetlandForestAreas_10, 
                style: style_WetlandForestAreas_10,
                popuplayertitle: 'Wetland Forest Areas',
                interactive: true,
                title: '<img src="styles/legend/WetlandForestAreas_10.png" /> Wetland Forest Areas'
            });
var format_WetlandVillages_11 = new ol.format.GeoJSON();
var features_WetlandVillages_11 = format_WetlandVillages_11.readFeatures(json_WetlandVillages_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WetlandVillages_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WetlandVillages_11.addFeatures(features_WetlandVillages_11);
var lyr_WetlandVillages_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WetlandVillages_11, 
                style: style_WetlandVillages_11,
                popuplayertitle: 'Wetland Villages',
                interactive: true,
                title: '<img src="styles/legend/WetlandVillages_11.png" /> Wetland Villages'
            });
var format_WetlandRanges_12 = new ol.format.GeoJSON();
var features_WetlandRanges_12 = format_WetlandRanges_12.readFeatures(json_WetlandRanges_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WetlandRanges_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WetlandRanges_12.addFeatures(features_WetlandRanges_12);
var lyr_WetlandRanges_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WetlandRanges_12, 
                style: style_WetlandRanges_12,
                popuplayertitle: 'Wetland Ranges',
                interactive: true,
                title: '<img src="styles/legend/WetlandRanges_12.png" /> Wetland Ranges'
            });
var format_WetlandPlantationPlots202425_13 = new ol.format.GeoJSON();
var features_WetlandPlantationPlots202425_13 = format_WetlandPlantationPlots202425_13.readFeatures(json_WetlandPlantationPlots202425_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WetlandPlantationPlots202425_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WetlandPlantationPlots202425_13.addFeatures(features_WetlandPlantationPlots202425_13);
var lyr_WetlandPlantationPlots202425_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WetlandPlantationPlots202425_13, 
                style: style_WetlandPlantationPlots202425_13,
                popuplayertitle: 'Wetland Plantation Plots 2024-25',
                interactive: true,
                title: '<img src="styles/legend/WetlandPlantationPlots202425_13.png" /> Wetland Plantation Plots 2024-25'
            });
var format_GrassLandForestAreas_14 = new ol.format.GeoJSON();
var features_GrassLandForestAreas_14 = format_GrassLandForestAreas_14.readFeatures(json_GrassLandForestAreas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GrassLandForestAreas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrassLandForestAreas_14.addFeatures(features_GrassLandForestAreas_14);
var lyr_GrassLandForestAreas_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrassLandForestAreas_14, 
                style: style_GrassLandForestAreas_14,
                popuplayertitle: 'GrassLand Forest Areas',
                interactive: true,
                title: '<img src="styles/legend/GrassLandForestAreas_14.png" /> GrassLand Forest Areas'
            });
var format_GrassLandVillages_15 = new ol.format.GeoJSON();
var features_GrassLandVillages_15 = format_GrassLandVillages_15.readFeatures(json_GrassLandVillages_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GrassLandVillages_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrassLandVillages_15.addFeatures(features_GrassLandVillages_15);
var lyr_GrassLandVillages_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrassLandVillages_15, 
                style: style_GrassLandVillages_15,
                popuplayertitle: 'GrassLand Villages',
                interactive: true,
                title: '<img src="styles/legend/GrassLandVillages_15.png" /> GrassLand Villages'
            });
var format_GrassLandRanges_16 = new ol.format.GeoJSON();
var features_GrassLandRanges_16 = format_GrassLandRanges_16.readFeatures(json_GrassLandRanges_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GrassLandRanges_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrassLandRanges_16.addFeatures(features_GrassLandRanges_16);
var lyr_GrassLandRanges_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrassLandRanges_16, 
                style: style_GrassLandRanges_16,
                popuplayertitle: 'GrassLand Ranges',
                interactive: true,
                title: '<img src="styles/legend/GrassLandRanges_16.png" /> GrassLand Ranges'
            });
var format_GrassLandPlantationWRMGRSPlots202425_17 = new ol.format.GeoJSON();
var features_GrassLandPlantationWRMGRSPlots202425_17 = format_GrassLandPlantationWRMGRSPlots202425_17.readFeatures(json_GrassLandPlantationWRMGRSPlots202425_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GrassLandPlantationWRMGRSPlots202425_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrassLandPlantationWRMGRSPlots202425_17.addFeatures(features_GrassLandPlantationWRMGRSPlots202425_17);
var lyr_GrassLandPlantationWRMGRSPlots202425_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrassLandPlantationWRMGRSPlots202425_17, 
                style: style_GrassLandPlantationWRMGRSPlots202425_17,
                popuplayertitle: 'GrassLand Plantation WRM-GRS-Plots 2024-25',
                interactive: true,
                title: '<img src="styles/legend/GrassLandPlantationWRMGRSPlots202425_17.png" /> GrassLand Plantation WRM-GRS-Plots 2024-25'
            });
var format_GrassLandPlantationGLPPlots202425_18 = new ol.format.GeoJSON();
var features_GrassLandPlantationGLPPlots202425_18 = format_GrassLandPlantationGLPPlots202425_18.readFeatures(json_GrassLandPlantationGLPPlots202425_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GrassLandPlantationGLPPlots202425_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrassLandPlantationGLPPlots202425_18.addFeatures(features_GrassLandPlantationGLPPlots202425_18);
var lyr_GrassLandPlantationGLPPlots202425_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrassLandPlantationGLPPlots202425_18, 
                style: style_GrassLandPlantationGLPPlots202425_18,
                popuplayertitle: 'GrassLand Plantation GLP-Plots 2024-25',
                interactive: true,
                title: '<img src="styles/legend/GrassLandPlantationGLPPlots202425_18.png" /> GrassLand Plantation GLP-Plots 2024-25'
            });
var format_GrassCuttingGLPPlantationPoints202425_19 = new ol.format.GeoJSON();
var features_GrassCuttingGLPPlantationPoints202425_19 = format_GrassCuttingGLPPlantationPoints202425_19.readFeatures(json_GrassCuttingGLPPlantationPoints202425_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GrassCuttingGLPPlantationPoints202425_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrassCuttingGLPPlantationPoints202425_19.addFeatures(features_GrassCuttingGLPPlantationPoints202425_19);
var lyr_GrassCuttingGLPPlantationPoints202425_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrassCuttingGLPPlantationPoints202425_19, 
                style: style_GrassCuttingGLPPlantationPoints202425_19,
                popuplayertitle: 'Grass Cutting GLP Plantation Points 2024-25',
                interactive: true,
                title: '<img src="styles/legend/GrassCuttingGLPPlantationPoints202425_19.png" /> Grass Cutting GLP Plantation Points 2024-25'
            });
var format_DegradedForestAreas_20 = new ol.format.GeoJSON();
var features_DegradedForestAreas_20 = format_DegradedForestAreas_20.readFeatures(json_DegradedForestAreas_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DegradedForestAreas_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DegradedForestAreas_20.addFeatures(features_DegradedForestAreas_20);
var lyr_DegradedForestAreas_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DegradedForestAreas_20, 
                style: style_DegradedForestAreas_20,
                popuplayertitle: 'Degraded Forest Areas',
                interactive: true,
                title: '<img src="styles/legend/DegradedForestAreas_20.png" /> Degraded Forest Areas'
            });
var format_DegradedForestsVillages_21 = new ol.format.GeoJSON();
var features_DegradedForestsVillages_21 = format_DegradedForestsVillages_21.readFeatures(json_DegradedForestsVillages_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DegradedForestsVillages_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DegradedForestsVillages_21.addFeatures(features_DegradedForestsVillages_21);
var lyr_DegradedForestsVillages_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DegradedForestsVillages_21, 
                style: style_DegradedForestsVillages_21,
                popuplayertitle: 'Degraded Forests Villages',
                interactive: true,
                title: '<img src="styles/legend/DegradedForestsVillages_21.png" /> Degraded Forests Villages'
            });
var format_DegradedForestsRanges_22 = new ol.format.GeoJSON();
var features_DegradedForestsRanges_22 = format_DegradedForestsRanges_22.readFeatures(json_DegradedForestsRanges_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DegradedForestsRanges_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DegradedForestsRanges_22.addFeatures(features_DegradedForestsRanges_22);
var lyr_DegradedForestsRanges_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DegradedForestsRanges_22, 
                style: style_DegradedForestsRanges_22,
                popuplayertitle: 'Degraded Forests Ranges',
                interactive: true,
                title: '<img src="styles/legend/DegradedForestsRanges_22.png" /> Degraded Forests Ranges'
            });
var format_DegradedForestsPlantationPlots202425_23 = new ol.format.GeoJSON();
var features_DegradedForestsPlantationPlots202425_23 = format_DegradedForestsPlantationPlots202425_23.readFeatures(json_DegradedForestsPlantationPlots202425_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DegradedForestsPlantationPlots202425_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DegradedForestsPlantationPlots202425_23.addFeatures(features_DegradedForestsPlantationPlots202425_23);
var lyr_DegradedForestsPlantationPlots202425_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DegradedForestsPlantationPlots202425_23, 
                style: style_DegradedForestsPlantationPlots202425_23,
                popuplayertitle: 'Degraded Forests Plantation Plots 2024-25',
                interactive: true,
                title: '<img src="styles/legend/DegradedForestsPlantationPlots202425_23.png" /> Degraded Forests Plantation Plots 2024-25'
            });
var format_CoastalForestAreas_24 = new ol.format.GeoJSON();
var features_CoastalForestAreas_24 = format_CoastalForestAreas_24.readFeatures(json_CoastalForestAreas_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CoastalForestAreas_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastalForestAreas_24.addFeatures(features_CoastalForestAreas_24);
var lyr_CoastalForestAreas_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoastalForestAreas_24, 
                style: style_CoastalForestAreas_24,
                popuplayertitle: 'Coastal Forest Areas',
                interactive: true,
                title: '<img src="styles/legend/CoastalForestAreas_24.png" /> Coastal Forest Areas'
            });
var format_CoastalVillages_25 = new ol.format.GeoJSON();
var features_CoastalVillages_25 = format_CoastalVillages_25.readFeatures(json_CoastalVillages_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CoastalVillages_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastalVillages_25.addFeatures(features_CoastalVillages_25);
var lyr_CoastalVillages_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoastalVillages_25, 
                style: style_CoastalVillages_25,
                popuplayertitle: 'Coastal Villages',
                interactive: true,
                title: '<img src="styles/legend/CoastalVillages_25.png" /> Coastal Villages'
            });
var format_CoastalRanges_26 = new ol.format.GeoJSON();
var features_CoastalRanges_26 = format_CoastalRanges_26.readFeatures(json_CoastalRanges_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CoastalRanges_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastalRanges_26.addFeatures(features_CoastalRanges_26);
var lyr_CoastalRanges_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoastalRanges_26, 
                style: style_CoastalRanges_26,
                popuplayertitle: 'Coastal Ranges',
                interactive: true,
                title: '<img src="styles/legend/CoastalRanges_26.png" /> Coastal Ranges'
            });
var format_CoastalPlantationPlots202425_27 = new ol.format.GeoJSON();
var features_CoastalPlantationPlots202425_27 = format_CoastalPlantationPlots202425_27.readFeatures(json_CoastalPlantationPlots202425_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CoastalPlantationPlots202425_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastalPlantationPlots202425_27.addFeatures(features_CoastalPlantationPlots202425_27);
var lyr_CoastalPlantationPlots202425_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoastalPlantationPlots202425_27, 
                style: style_CoastalPlantationPlots202425_27,
                popuplayertitle: 'Coastal Plantation Plots 2024-25',
                interactive: true,
                title: '<img src="styles/legend/CoastalPlantationPlots202425_27.png" /> Coastal Plantation Plots 2024-25'
            });
var format_TeritorialAllForestAreas_28 = new ol.format.GeoJSON();
var features_TeritorialAllForestAreas_28 = format_TeritorialAllForestAreas_28.readFeatures(json_TeritorialAllForestAreas_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TeritorialAllForestAreas_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TeritorialAllForestAreas_28.addFeatures(features_TeritorialAllForestAreas_28);
var lyr_TeritorialAllForestAreas_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TeritorialAllForestAreas_28, 
                style: style_TeritorialAllForestAreas_28,
                popuplayertitle: 'Teritorial All Forest Areas',
                interactive: true,
                title: '<img src="styles/legend/TeritorialAllForestAreas_28.png" /> Teritorial All Forest Areas'
            });
var format_TeritorialAllRanges_29 = new ol.format.GeoJSON();
var features_TeritorialAllRanges_29 = format_TeritorialAllRanges_29.readFeatures(json_TeritorialAllRanges_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TeritorialAllRanges_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TeritorialAllRanges_29.addFeatures(features_TeritorialAllRanges_29);
var lyr_TeritorialAllRanges_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TeritorialAllRanges_29, 
                style: style_TeritorialAllRanges_29,
                popuplayertitle: 'Teritorial All Ranges',
                interactive: true,
                title: '<img src="styles/legend/TeritorialAllRanges_29.png" /> Teritorial All Ranges'
            });
var format_TeritorialAllDivisions_30 = new ol.format.GeoJSON();
var features_TeritorialAllDivisions_30 = format_TeritorialAllDivisions_30.readFeatures(json_TeritorialAllDivisions_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TeritorialAllDivisions_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TeritorialAllDivisions_30.addFeatures(features_TeritorialAllDivisions_30);
var lyr_TeritorialAllDivisions_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TeritorialAllDivisions_30, 
                style: style_TeritorialAllDivisions_30,
                popuplayertitle: 'Teritorial All Divisions',
                interactive: true,
                title: '<img src="styles/legend/TeritorialAllDivisions_30.png" /> Teritorial All Divisions'
            });
var format_SocialForestryAllRanges_31 = new ol.format.GeoJSON();
var features_SocialForestryAllRanges_31 = format_SocialForestryAllRanges_31.readFeatures(json_SocialForestryAllRanges_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SocialForestryAllRanges_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SocialForestryAllRanges_31.addFeatures(features_SocialForestryAllRanges_31);
var lyr_SocialForestryAllRanges_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SocialForestryAllRanges_31, 
                style: style_SocialForestryAllRanges_31,
                popuplayertitle: 'Social Forestry All Ranges',
                interactive: true,
                title: '<img src="styles/legend/SocialForestryAllRanges_31.png" /> Social Forestry All Ranges'
            });
var format_SocialForestryAllDivisions_32 = new ol.format.GeoJSON();
var features_SocialForestryAllDivisions_32 = format_SocialForestryAllDivisions_32.readFeatures(json_SocialForestryAllDivisions_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SocialForestryAllDivisions_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SocialForestryAllDivisions_32.addFeatures(features_SocialForestryAllDivisions_32);
var lyr_SocialForestryAllDivisions_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SocialForestryAllDivisions_32, 
                style: style_SocialForestryAllDivisions_32,
                popuplayertitle: 'Social Forestry All Divisions',
                interactive: true,
                title: '<img src="styles/legend/SocialForestryAllDivisions_32.png" /> Social Forestry All Divisions'
            });
var format_PERGRanges_33 = new ol.format.GeoJSON();
var features_PERGRanges_33 = format_PERGRanges_33.readFeatures(json_PERGRanges_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PERGRanges_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERGRanges_33.addFeatures(features_PERGRanges_33);
var lyr_PERGRanges_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERGRanges_33, 
                style: style_PERGRanges_33,
                popuplayertitle: 'PERG Ranges',
                interactive: true,
                title: '<img src="styles/legend/PERGRanges_33.png" /> PERG Ranges'
            });
var format_TalukaBoundaries_34 = new ol.format.GeoJSON();
var features_TalukaBoundaries_34 = format_TalukaBoundaries_34.readFeatures(json_TalukaBoundaries_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TalukaBoundaries_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TalukaBoundaries_34.addFeatures(features_TalukaBoundaries_34);
var lyr_TalukaBoundaries_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TalukaBoundaries_34, 
                style: style_TalukaBoundaries_34,
                popuplayertitle: 'Taluka Boundaries',
                interactive: true,
                title: '<img src="styles/legend/TalukaBoundaries_34.png" /> Taluka Boundaries'
            });
var format_DistrictBoundaries_35 = new ol.format.GeoJSON();
var features_DistrictBoundaries_35 = format_DistrictBoundaries_35.readFeatures(json_DistrictBoundaries_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DistrictBoundaries_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictBoundaries_35.addFeatures(features_DistrictBoundaries_35);
var lyr_DistrictBoundaries_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictBoundaries_35, 
                style: style_DistrictBoundaries_35,
                popuplayertitle: 'District Boundaries',
                interactive: true,
                title: '<img src="styles/legend/DistrictBoundaries_35.png" /> District Boundaries'
            });
var format_StateBoundary_36 = new ol.format.GeoJSON();
var features_StateBoundary_36 = format_StateBoundary_36.readFeatures(json_StateBoundary_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_StateBoundary_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBoundary_36.addFeatures(features_StateBoundary_36);
var lyr_StateBoundary_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBoundary_36, 
                style: style_StateBoundary_36,
                popuplayertitle: 'State Boundary',
                interactive: true,
                title: '<img src="styles/legend/StateBoundary_36.png" /> State Boundary'
            });
var format_GujaratRoad_37 = new ol.format.GeoJSON();
var features_GujaratRoad_37 = format_GujaratRoad_37.readFeatures(json_GujaratRoad_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GujaratRoad_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GujaratRoad_37.addFeatures(features_GujaratRoad_37);
var lyr_GujaratRoad_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GujaratRoad_37, 
                style: style_GujaratRoad_37,
                popuplayertitle: 'Gujarat Road',
                interactive: true,
                title: '<img src="styles/legend/GujaratRoad_37.png" /> Gujarat Road'
            });
var format_AllVillagesNames_38 = new ol.format.GeoJSON();
var features_AllVillagesNames_38 = format_AllVillagesNames_38.readFeatures(json_AllVillagesNames_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AllVillagesNames_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllVillagesNames_38.addFeatures(features_AllVillagesNames_38);
var lyr_AllVillagesNames_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllVillagesNames_38, 
                style: style_AllVillagesNames_38,
                popuplayertitle: 'All Villages Names',
                interactive: true,
                title: '<img src="styles/legend/AllVillagesNames_38.png" /> All Villages Names'
            });
var format_FacilitiesPoI_39 = new ol.format.GeoJSON();
var features_FacilitiesPoI_39 = format_FacilitiesPoI_39.readFeatures(json_FacilitiesPoI_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FacilitiesPoI_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FacilitiesPoI_39.addFeatures(features_FacilitiesPoI_39);
var lyr_FacilitiesPoI_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FacilitiesPoI_39, 
                style: style_FacilitiesPoI_39,
                popuplayertitle: 'Facilities PoI',
                interactive: true,
    title: 'Facilities PoI<br />\
    <img src="styles/legend/FacilitiesPoI_39_0.png" /> Agro<br />\
    <img src="styles/legend/FacilitiesPoI_39_1.png" /> Education<br />\
    <img src="styles/legend/FacilitiesPoI_39_2.png" /> Medical<br />\
    <img src="styles/legend/FacilitiesPoI_39_3.png" /> Transport/Admin<br />\
    <img src="styles/legend/FacilitiesPoI_39_4.png" /> <br />' });
var group_AdminBoundary = new ol.layer.Group({
                                layers: [lyr_PERGRanges_33,lyr_TalukaBoundaries_34,lyr_DistrictBoundaries_35,lyr_StateBoundary_36,lyr_GujaratRoad_37,lyr_AllVillagesNames_38,lyr_FacilitiesPoI_39,],
                                fold: "open",
                                title: 'Admin Boundary'});
var group_SocialForestry = new ol.layer.Group({
                                layers: [lyr_SocialForestryAllRanges_31,lyr_SocialForestryAllDivisions_32,],
                                fold: "open",
                                title: 'Social Forestry'});
var group_TerritorialForestry = new ol.layer.Group({
                                layers: [lyr_TeritorialAllForestAreas_28,lyr_TeritorialAllRanges_29,lyr_TeritorialAllDivisions_30,],
                                fold: "open",
                                title: 'Territorial Forestry'});
var group_CoastalEcosystem = new ol.layer.Group({
                                layers: [lyr_CoastalForestAreas_24,lyr_CoastalVillages_25,lyr_CoastalRanges_26,lyr_CoastalPlantationPlots202425_27,],
                                fold: "open",
                                title: 'Coastal Ecosystem'});
var group_DegradedForests = new ol.layer.Group({
                                layers: [lyr_DegradedForestAreas_20,lyr_DegradedForestsVillages_21,lyr_DegradedForestsRanges_22,lyr_DegradedForestsPlantationPlots202425_23,],
                                fold: "open",
                                title: 'Degraded Forests'});
var group_Grassland = new ol.layer.Group({
                                layers: [lyr_GrassLandForestAreas_14,lyr_GrassLandVillages_15,lyr_GrassLandRanges_16,lyr_GrassLandPlantationWRMGRSPlots202425_17,lyr_GrassLandPlantationGLPPlots202425_18,lyr_GrassCuttingGLPPlantationPoints202425_19,],
                                fold: "open",
                                title: 'Grassland'});
var group_Wetland = new ol.layer.Group({
                                layers: [lyr_WetlandForestAreas_10,lyr_WetlandVillages_11,lyr_WetlandRanges_12,lyr_WetlandPlantationPlots202425_13,],
                                fold: "open",
                                title: 'Wetland'});
var group_HWAC = new ol.layer.Group({
                                layers: [lyr_HWACSlothBearCorridorVillages_2,lyr_HWACSlothBearCorridor_3,lyr_HWACLionlandscapeCorridorVillages_4,lyr_HWACLionlandscapeCorridor_5,lyr_HWACForestAreas_6,lyr_HWACVillages_7,lyr_HWACRanges_8,lyr_HWACPlantationPlots202425_9,],
                                fold: "open",
                                title: 'HWAC'});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_OSMStandard_1,],
                                fold: "open",
                                title: 'BaseMap'});

lyr_GoogleSatellite_0.setVisible(false);lyr_OSMStandard_1.setVisible(false);lyr_HWACSlothBearCorridorVillages_2.setVisible(false);lyr_HWACSlothBearCorridor_3.setVisible(false);lyr_HWACLionlandscapeCorridorVillages_4.setVisible(false);lyr_HWACLionlandscapeCorridor_5.setVisible(false);lyr_HWACForestAreas_6.setVisible(false);lyr_HWACVillages_7.setVisible(false);lyr_HWACRanges_8.setVisible(false);lyr_HWACPlantationPlots202425_9.setVisible(false);lyr_WetlandForestAreas_10.setVisible(false);lyr_WetlandVillages_11.setVisible(false);lyr_WetlandRanges_12.setVisible(false);lyr_WetlandPlantationPlots202425_13.setVisible(false);lyr_GrassLandForestAreas_14.setVisible(false);lyr_GrassLandVillages_15.setVisible(false);lyr_GrassLandRanges_16.setVisible(false);lyr_GrassLandPlantationWRMGRSPlots202425_17.setVisible(false);lyr_GrassLandPlantationGLPPlots202425_18.setVisible(false);lyr_GrassCuttingGLPPlantationPoints202425_19.setVisible(false);lyr_DegradedForestAreas_20.setVisible(false);lyr_DegradedForestsVillages_21.setVisible(false);lyr_DegradedForestsRanges_22.setVisible(false);lyr_DegradedForestsPlantationPlots202425_23.setVisible(false);lyr_CoastalForestAreas_24.setVisible(false);lyr_CoastalVillages_25.setVisible(false);lyr_CoastalRanges_26.setVisible(false);lyr_CoastalPlantationPlots202425_27.setVisible(false);lyr_TeritorialAllForestAreas_28.setVisible(false);lyr_TeritorialAllRanges_29.setVisible(false);lyr_TeritorialAllDivisions_30.setVisible(false);lyr_SocialForestryAllRanges_31.setVisible(false);lyr_SocialForestryAllDivisions_32.setVisible(false);lyr_PERGRanges_33.setVisible(true);lyr_TalukaBoundaries_34.setVisible(true);lyr_DistrictBoundaries_35.setVisible(true);lyr_StateBoundary_36.setVisible(true);lyr_GujaratRoad_37.setVisible(false);lyr_AllVillagesNames_38.setVisible(false);lyr_FacilitiesPoI_39.setVisible(false);
var layersList = [group_BaseMap,group_HWAC,group_Wetland,group_Grassland,group_DegradedForests,group_CoastalEcosystem,group_TerritorialForestry,group_SocialForestry,group_AdminBoundary];
lyr_HWACSlothBearCorridorVillages_2.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', 'Circle': 'Circle', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Category': 'Category', });
lyr_HWACSlothBearCorridor_3.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', });
lyr_HWACLionlandscapeCorridorVillages_4.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Beat': 'Beat', 'Round': 'Round', 'Range': 'Range', 'Division': 'Division', 'Circle': 'Circle', 'Category': 'Category', 'Class1': 'Class1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_HWACLionlandscapeCorridor_5.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Beat': 'Beat', 'Round': 'Round', 'Range': 'Range', 'Division': 'Division', 'Circle': 'Circle', 'Category': 'Category', 'Class1': 'Class1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_HWACForestAreas_6.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', 'Circle': 'Circle', 'FG_Area_Ha': 'FG_Area_Ha', 'F_Type': 'F_Type', 'Section': 'Section', 'Sanctuary': 'Sanctuary', 'Area_ha': 'Area_ha', });
lyr_HWACVillages_7.set('fieldAliases', {'Id': 'Id', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'BEAT': 'BEAT', 'ROUND': 'ROUND', });
lyr_HWACRanges_8.set('fieldAliases', {'Id': 'Id', 'CIRCLE': 'CIRCLE', 'Division': 'Division', 'Range': 'Range', 'INTERV_TYP': 'INTERV_TYP', });
lyr_HWACPlantationPlots202425_9.set('fieldAliases', {'Name': 'Name', 'layer': 'layer', 'Circle': 'Circle', 'Division': 'Division', 'Range': 'Range', 'Village': 'Village', 'Module': 'Module', 'FG_AREA_Ha': 'FG_AREA_Ha', 'Year': 'Year', 'Feald_Area': 'Feald_Area', 'Area_Ha': 'Area_Ha', 'Sr_No': 'Sr_No', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Plot_ID': 'Plot_ID', });
lyr_WetlandForestAreas_10.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', 'Circle': 'Circle', 'FG_Area_Ha': 'FG_Area_Ha', 'F_Type': 'F_Type', 'Section': 'Section', 'Sanctuary': 'Sanctuary', 'Area_ha': 'Area_ha', });
lyr_WetlandVillages_11.set('fieldAliases', {'Id': 'Id', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'BEAT': 'BEAT', 'ROUND': 'ROUND', });
lyr_WetlandRanges_12.set('fieldAliases', {'Id': 'Id', 'CIRCLE': 'CIRCLE', 'Division': 'Division', 'Range': 'Range', 'INTERV_TYP': 'INTERV_TYP', });
lyr_WetlandPlantationPlots202425_13.set('fieldAliases', {'FG_AREA_Ha': 'FG_AREA_Ha', 'Circle': 'Circle', 'Division': 'Division', 'Range': 'Range', 'Village': 'Village', 'Module': 'Module', 'Year': 'Year', 'Feald_Area': 'Feald_Area', 'Area_Ha': 'Area_Ha', 'Sr_No': 'Sr_No', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Plot_ID': 'Plot_ID', });
lyr_GrassLandForestAreas_14.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', 'Circle': 'Circle', 'FG_Area_Ha': 'FG_Area_Ha', 'F_Type': 'F_Type', 'Section': 'Section', 'Sanctuary': 'Sanctuary', 'Area_ha': 'Area_ha', });
lyr_GrassLandVillages_15.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', });
lyr_GrassLandRanges_16.set('fieldAliases', {'Id': 'Id', 'CIRCLE': 'CIRCLE', 'Division': 'Division', 'Range': 'Range', 'INTERV_TYP': 'INTERV_TYP', });
lyr_GrassLandPlantationWRMGRSPlots202425_17.set('fieldAliases', {'FG_AREA_Ha': 'FG_AREA_Ha', 'Circle': 'Circle', 'Division': 'Division', 'Range': 'Range', 'Village': 'Village', 'Module': 'Module', 'Year': 'Year', 'Feald_Area': 'Feald_Area', 'Area_Ha': 'Area_Ha', 'Vidi_Name': 'Vidi_Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Sr_No': 'Sr_No', 'Plot_ID': 'Plot_ID', });
lyr_GrassLandPlantationGLPPlots202425_18.set('fieldAliases', {'FG_AREA_Ha': 'FG_AREA_Ha', 'Circle': 'Circle', 'Division': 'Division', 'Range': 'Range', 'Village': 'Village', 'Module': 'Module', 'Year': 'Year', 'Feald_Area': 'Feald_Area', 'Area_Ha': 'Area_Ha', 'Vidi_Name': 'Vidi_Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Sr_No': 'Sr_No', 'Plot_ID': 'Plot_ID', });
lyr_GrassCuttingGLPPlantationPoints202425_19.set('fieldAliases', {'CID': 'CID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GCP_Sr__No': 'GCP_Sr__No', 'Division': 'Division', 'Range': 'Range', 'Plot_ID': 'Plot_ID', 'Sr_No': 'Sr_No', });
lyr_DegradedForestAreas_20.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', 'Circle': 'Circle', 'FG_Area_Ha': 'FG_Area_Ha', 'F_Type': 'F_Type', 'Section': 'Section', 'Sanctuary': 'Sanctuary', 'Area_ha': 'Area_ha', });
lyr_DegradedForestsVillages_21.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', });
lyr_DegradedForestsRanges_22.set('fieldAliases', {'Id': 'Id', 'CIRCLE': 'CIRCLE', 'Division': 'Division', 'Range': 'Range', 'INTERV_TYP': 'INTERV_TYP', });
lyr_DegradedForestsPlantationPlots202425_23.set('fieldAliases', {'FG_AREA_Ha': 'FG_AREA_Ha', 'Circle': 'Circle', 'Division': 'Division', 'Range': 'Range', 'Village': 'Village', 'Year': 'Year', 'Feald_Area': 'Feald_Area', 'Area_Ha': 'Area_Ha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Sr_No': 'Sr_No', 'Plot_ID': 'Plot_ID', 'Modal': 'Modal', });
lyr_CoastalForestAreas_24.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', 'Circle': 'Circle', 'FG_Area_Ha': 'FG_Area_Ha', 'F_Type': 'F_Type', 'Section': 'Section', 'Sanctuary': 'Sanctuary', 'Area_ha': 'Area_ha', });
lyr_CoastalVillages_25.set('fieldAliases', {'Id': 'Id', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'BEAT': 'BEAT', 'ROUND': 'ROUND', });
lyr_CoastalRanges_26.set('fieldAliases', {'Id': 'Id', 'CIRCLE': 'CIRCLE', 'Division': 'Division', 'Range': 'Range', 'INTERV_TYP': 'INTERV_TYP', });
lyr_CoastalPlantationPlots202425_27.set('fieldAliases', {'FG_AREA_Ha': 'FG_AREA_Ha', 'Circle': 'Circle', 'Division': 'Division', 'Range': 'Range', 'Village': 'Village', 'Module': 'Module', 'Year': 'Year', 'Area_Ha': 'Area_Ha', 'Plant_Area': 'Plant_Area', 'Sr_No': 'Sr_No', 'Plot_ID': 'Plot_ID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TeritorialAllForestAreas_28.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', 'Circle': 'Circle', 'FG_Area_Ha': 'FG_Area_Ha', 'F_Type': 'F_Type', 'Section': 'Section', 'Sanctuary': 'Sanctuary', 'Area_ha': 'Area_ha', });
lyr_TeritorialAllRanges_29.set('fieldAliases', {'Id': 'Id', 'Division': 'Division', 'Range': 'Range', });
lyr_TeritorialAllDivisions_30.set('fieldAliases', {'Id': 'Id', 'Division': 'Division', 'Circle': 'Circle', 'Divi': 'Divi', });
lyr_SocialForestryAllRanges_31.set('fieldAliases', {'Id': 'Id', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', });
lyr_SocialForestryAllDivisions_32.set('fieldAliases', {'Id': 'Id', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', });
lyr_PERGRanges_33.set('fieldAliases', {'Id': 'Id', 'CIRCLE': 'CIRCLE', 'Division': 'Division', 'Range': 'Range', 'INTERV_TYP': 'INTERV_TYP', });
lyr_TalukaBoundaries_34.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', });
lyr_DistrictBoundaries_35.set('fieldAliases', {'Id': 'Id', 'District': 'District', });
lyr_StateBoundary_36.set('fieldAliases', {'Id': 'Id', });
lyr_GujaratRoad_37.set('fieldAliases', {'icon': 'icon', 'CAT': 'CAT', 'NAME': 'NAME', 'FROM_KM': 'FROM_KM', 'TO_KM': 'TO_KM', 'BSSLANE': 'BSSLANE', 'SSLANE': 'SSLANE', 'INTER': 'INTER', 'SDLANE': 'SDLANE', 'SMLTL': 'SMLTL', 'CAR_WIDTH': 'CAR_WIDTH', 'FOR_WIDTH': 'FOR_WIDTH', 'LAND_WIDTH': 'LAND_WIDTH', 'LENGTH_ROA': 'LENGTH_ROA', 'SURFACE': 'SURFACE', 'SP': 'SP', 'REMARK': 'REMARK', 'CAT_SP': 'CAT_SP', 'CAT_SURFAC': 'CAT_SURFAC', 'NEW_SURFAC': 'NEW_SURFAC', 'YEARS': 'YEARS', 'SH_NH_ID': 'SH_NH_ID', 'DISTRICT': 'DISTRICT', });
lyr_AllVillagesNames_38.set('fieldAliases', {'Id': 'Id', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'BEAT': 'BEAT', 'ROUND': 'ROUND', });
lyr_FacilitiesPoI_39.set('fieldAliases', {'STATE_ID': 'STATE_ID', 'DISTRICT_I': 'DISTRICT_I', 'BLOCK_ID': 'BLOCK_ID', 'HAB_ID': 'HAB_ID', 'FACILITY_I': 'FACILITY_I', 'FAC_DESC': 'FAC_DESC', 'FAC_CATEGO': 'FAC_CATEGO', });
lyr_HWACSlothBearCorridorVillages_2.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Category': 'TextEdit', });
lyr_HWACSlothBearCorridor_3.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', });
lyr_HWACLionlandscapeCorridorVillages_4.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Beat': 'TextEdit', 'Round': 'TextEdit', 'Range': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'Category': 'TextEdit', 'Class1': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_HWACLionlandscapeCorridor_5.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Beat': 'TextEdit', 'Round': 'TextEdit', 'Range': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'Category': 'TextEdit', 'Class1': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_HWACForestAreas_6.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'FG_Area_Ha': 'TextEdit', 'F_Type': 'TextEdit', 'Section': 'TextEdit', 'Sanctuary': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_HWACVillages_7.set('fieldImages', {'Id': 'Range', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', });
lyr_HWACRanges_8.set('fieldImages', {'Id': 'Range', 'CIRCLE': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'INTERV_TYP': 'TextEdit', });
lyr_HWACPlantationPlots202425_9.set('fieldImages', {'Name': 'TextEdit', 'layer': 'TextEdit', 'Circle': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'Village': 'TextEdit', 'Module': 'TextEdit', 'FG_AREA_Ha': 'TextEdit', 'Year': 'TextEdit', 'Feald_Area': 'TextEdit', 'Area_Ha': 'TextEdit', 'Sr_No': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Plot_ID': 'TextEdit', });
lyr_WetlandForestAreas_10.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'FG_Area_Ha': 'TextEdit', 'F_Type': 'TextEdit', 'Section': 'TextEdit', 'Sanctuary': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_WetlandVillages_11.set('fieldImages', {'Id': 'Range', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', });
lyr_WetlandRanges_12.set('fieldImages', {'Id': 'Range', 'CIRCLE': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'INTERV_TYP': 'TextEdit', });
lyr_WetlandPlantationPlots202425_13.set('fieldImages', {'FG_AREA_Ha': 'TextEdit', 'Circle': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'Village': 'TextEdit', 'Module': 'TextEdit', 'Year': 'TextEdit', 'Feald_Area': 'TextEdit', 'Area_Ha': 'TextEdit', 'Sr_No': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Plot_ID': 'TextEdit', });
lyr_GrassLandForestAreas_14.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'FG_Area_Ha': 'TextEdit', 'F_Type': 'TextEdit', 'Section': 'TextEdit', 'Sanctuary': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_GrassLandVillages_15.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', });
lyr_GrassLandRanges_16.set('fieldImages', {'Id': 'Range', 'CIRCLE': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'INTERV_TYP': 'TextEdit', });
lyr_GrassLandPlantationWRMGRSPlots202425_17.set('fieldImages', {'FG_AREA_Ha': 'TextEdit', 'Circle': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'Village': 'TextEdit', 'Module': 'TextEdit', 'Year': 'TextEdit', 'Feald_Area': 'TextEdit', 'Area_Ha': 'TextEdit', 'Vidi_Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Sr_No': 'TextEdit', 'Plot_ID': 'TextEdit', });
lyr_GrassLandPlantationGLPPlots202425_18.set('fieldImages', {'FG_AREA_Ha': 'TextEdit', 'Circle': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'Village': 'TextEdit', 'Module': 'TextEdit', 'Year': 'TextEdit', 'Feald_Area': 'TextEdit', 'Area_Ha': 'TextEdit', 'Vidi_Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Sr_No': 'TextEdit', 'Plot_ID': 'TextEdit', });
lyr_GrassCuttingGLPPlantationPoints202425_19.set('fieldImages', {'CID': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GCP_Sr__No': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'Plot_ID': 'TextEdit', 'Sr_No': 'TextEdit', });
lyr_DegradedForestAreas_20.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'FG_Area_Ha': 'TextEdit', 'F_Type': 'TextEdit', 'Section': 'TextEdit', 'Sanctuary': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_DegradedForestsVillages_21.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', });
lyr_DegradedForestsRanges_22.set('fieldImages', {'Id': 'Range', 'CIRCLE': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'INTERV_TYP': 'TextEdit', });
lyr_DegradedForestsPlantationPlots202425_23.set('fieldImages', {'FG_AREA_Ha': 'TextEdit', 'Circle': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'Village': 'TextEdit', 'Year': 'TextEdit', 'Feald_Area': 'TextEdit', 'Area_Ha': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Sr_No': 'TextEdit', 'Plot_ID': 'TextEdit', 'Modal': 'TextEdit', });
lyr_CoastalForestAreas_24.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'FG_Area_Ha': 'TextEdit', 'F_Type': 'TextEdit', 'Section': 'TextEdit', 'Sanctuary': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_CoastalVillages_25.set('fieldImages', {'Id': 'Range', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', });
lyr_CoastalRanges_26.set('fieldImages', {'Id': 'Range', 'CIRCLE': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'INTERV_TYP': 'TextEdit', });
lyr_CoastalPlantationPlots202425_27.set('fieldImages', {'FG_AREA_Ha': 'TextEdit', 'Circle': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'Village': 'TextEdit', 'Module': 'TextEdit', 'Year': 'TextEdit', 'Area_Ha': 'TextEdit', 'Plant_Area': 'TextEdit', 'Sr_No': 'TextEdit', 'Plot_ID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TeritorialAllForestAreas_28.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'FG_Area_Ha': 'TextEdit', 'F_Type': 'TextEdit', 'Section': 'TextEdit', 'Sanctuary': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_TeritorialAllRanges_29.set('fieldImages', {'Id': 'Range', 'Division': 'TextEdit', 'Range': 'TextEdit', });
lyr_TeritorialAllDivisions_30.set('fieldImages', {'Id': 'Range', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'Divi': 'TextEdit', });
lyr_SocialForestryAllRanges_31.set('fieldImages', {'Id': 'Range', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', });
lyr_SocialForestryAllDivisions_32.set('fieldImages', {'Id': 'Range', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', });
lyr_PERGRanges_33.set('fieldImages', {'Id': 'Range', 'CIRCLE': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'INTERV_TYP': 'TextEdit', });
lyr_TalukaBoundaries_34.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', });
lyr_DistrictBoundaries_35.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', });
lyr_StateBoundary_36.set('fieldImages', {'Id': 'Range', });
lyr_GujaratRoad_37.set('fieldImages', {'icon': 'TextEdit', 'CAT': 'TextEdit', 'NAME': 'TextEdit', 'FROM_KM': 'TextEdit', 'TO_KM': 'TextEdit', 'BSSLANE': 'TextEdit', 'SSLANE': 'TextEdit', 'INTER': 'TextEdit', 'SDLANE': 'TextEdit', 'SMLTL': 'TextEdit', 'CAR_WIDTH': 'TextEdit', 'FOR_WIDTH': 'TextEdit', 'LAND_WIDTH': 'TextEdit', 'LENGTH_ROA': 'TextEdit', 'SURFACE': 'TextEdit', 'SP': 'TextEdit', 'REMARK': 'TextEdit', 'CAT_SP': 'TextEdit', 'CAT_SURFAC': 'TextEdit', 'NEW_SURFAC': 'TextEdit', 'YEARS': 'TextEdit', 'SH_NH_ID': 'TextEdit', 'DISTRICT': 'TextEdit', });
lyr_AllVillagesNames_38.set('fieldImages', {'Id': 'Range', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', });
lyr_FacilitiesPoI_39.set('fieldImages', {'STATE_ID': 'TextEdit', 'DISTRICT_I': 'TextEdit', 'BLOCK_ID': 'TextEdit', 'HAB_ID': 'TextEdit', 'FACILITY_I': 'TextEdit', 'FAC_DESC': 'TextEdit', 'FAC_CATEGO': 'TextEdit', });
lyr_HWACSlothBearCorridorVillages_2.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Category': 'inline label - always visible', });
lyr_HWACSlothBearCorridor_3.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', });
lyr_HWACLionlandscapeCorridorVillages_4.set('fieldLabels', {'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Round': 'inline label - always visible', 'Range': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'Category': 'inline label - always visible', 'Class1': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_HWACLionlandscapeCorridor_5.set('fieldLabels', {'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Round': 'inline label - always visible', 'Range': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'Category': 'inline label - always visible', 'Class1': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_HWACForestAreas_6.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'FG_Area_Ha': 'inline label - always visible', 'F_Type': 'inline label - always visible', 'Section': 'inline label - always visible', 'Sanctuary': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_HWACVillages_7.set('fieldLabels', {'Id': 'no label', 'RANGE': 'inline label - always visible', 'DIVISION': 'inline label - always visible', 'CIRCLE': 'inline label - always visible', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'BEAT': 'inline label - always visible', 'ROUND': 'inline label - always visible', });
lyr_HWACRanges_8.set('fieldLabels', {'Id': 'no label', 'CIRCLE': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'INTERV_TYP': 'inline label - always visible', });
lyr_HWACPlantationPlots202425_9.set('fieldLabels', {'Name': 'no label', 'layer': 'no label', 'Circle': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'Village': 'inline label - always visible', 'Module': 'inline label - always visible', 'FG_AREA_Ha': 'inline label - always visible', 'Year': 'inline label - always visible', 'Feald_Area': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', 'Sr_No': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Plot_ID': 'inline label - always visible', });
lyr_WetlandForestAreas_10.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'FG_Area_Ha': 'inline label - always visible', 'F_Type': 'inline label - always visible', 'Section': 'inline label - always visible', 'Sanctuary': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_WetlandVillages_11.set('fieldLabels', {'Id': 'no label', 'RANGE': 'inline label - always visible', 'DIVISION': 'inline label - always visible', 'CIRCLE': 'inline label - always visible', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'BEAT': 'inline label - always visible', 'ROUND': 'inline label - always visible', });
lyr_WetlandRanges_12.set('fieldLabels', {'Id': 'no label', 'CIRCLE': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'INTERV_TYP': 'inline label - always visible', });
lyr_WetlandPlantationPlots202425_13.set('fieldLabels', {'FG_AREA_Ha': 'inline label - always visible', 'Circle': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'Village': 'inline label - always visible', 'Module': 'inline label - always visible', 'Year': 'inline label - always visible', 'Feald_Area': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', 'Sr_No': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Plot_ID': 'inline label - always visible', });
lyr_GrassLandForestAreas_14.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'FG_Area_Ha': 'inline label - always visible', 'F_Type': 'inline label - always visible', 'Section': 'inline label - always visible', 'Sanctuary': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_GrassLandVillages_15.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', });
lyr_GrassLandRanges_16.set('fieldLabels', {'Id': 'no label', 'CIRCLE': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'INTERV_TYP': 'inline label - always visible', });
lyr_GrassLandPlantationWRMGRSPlots202425_17.set('fieldLabels', {'FG_AREA_Ha': 'inline label - always visible', 'Circle': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'Village': 'inline label - always visible', 'Module': 'inline label - always visible', 'Year': 'inline label - always visible', 'Feald_Area': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', 'Vidi_Name': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Sr_No': 'inline label - always visible', 'Plot_ID': 'inline label - always visible', });
lyr_GrassLandPlantationGLPPlots202425_18.set('fieldLabels', {'FG_AREA_Ha': 'inline label - always visible', 'Circle': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'Village': 'inline label - always visible', 'Module': 'inline label - always visible', 'Year': 'inline label - always visible', 'Feald_Area': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', 'Vidi_Name': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Sr_No': 'inline label - always visible', 'Plot_ID': 'inline label - always visible', });
lyr_GrassCuttingGLPPlantationPoints202425_19.set('fieldLabels', {'CID': 'no label', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'GCP_Sr__No': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'Plot_ID': 'inline label - always visible', 'Sr_No': 'inline label - always visible', });
lyr_DegradedForestAreas_20.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'FG_Area_Ha': 'inline label - always visible', 'F_Type': 'inline label - always visible', 'Section': 'inline label - always visible', 'Sanctuary': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_DegradedForestsVillages_21.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', });
lyr_DegradedForestsRanges_22.set('fieldLabels', {'Id': 'no label', 'CIRCLE': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'INTERV_TYP': 'inline label - always visible', });
lyr_DegradedForestsPlantationPlots202425_23.set('fieldLabels', {'FG_AREA_Ha': 'inline label - always visible', 'Circle': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'Village': 'inline label - always visible', 'Year': 'inline label - always visible', 'Feald_Area': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Sr_No': 'inline label - always visible', 'Plot_ID': 'inline label - always visible', 'Modal': 'inline label - always visible', });
lyr_CoastalForestAreas_24.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'FG_Area_Ha': 'inline label - always visible', 'F_Type': 'inline label - always visible', 'Section': 'inline label - always visible', 'Sanctuary': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_CoastalVillages_25.set('fieldLabels', {'Id': 'no label', 'RANGE': 'inline label - always visible', 'DIVISION': 'inline label - always visible', 'CIRCLE': 'inline label - always visible', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'BEAT': 'inline label - always visible', 'ROUND': 'inline label - always visible', });
lyr_CoastalRanges_26.set('fieldLabels', {'Id': 'no label', 'CIRCLE': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'INTERV_TYP': 'inline label - always visible', });
lyr_CoastalPlantationPlots202425_27.set('fieldLabels', {'FG_AREA_Ha': 'inline label - always visible', 'Circle': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'Village': 'inline label - always visible', 'Module': 'inline label - always visible', 'Year': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', 'Plant_Area': 'inline label - always visible', 'Sr_No': 'inline label - always visible', 'Plot_ID': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_TeritorialAllForestAreas_28.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'FG_Area_Ha': 'inline label - always visible', 'F_Type': 'inline label - always visible', 'Section': 'inline label - always visible', 'Sanctuary': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_TeritorialAllRanges_29.set('fieldLabels', {'Id': 'no label', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', });
lyr_TeritorialAllDivisions_30.set('fieldLabels', {'Id': 'no label', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'Divi': 'inline label - always visible', });
lyr_SocialForestryAllRanges_31.set('fieldLabels', {'Id': 'no label', 'RANGE': 'inline label - always visible', 'DIVISION': 'inline label - always visible', 'CIRCLE': 'inline label - always visible', });
lyr_SocialForestryAllDivisions_32.set('fieldLabels', {'Id': 'no label', 'DIVISION': 'inline label - always visible', 'CIRCLE': 'inline label - always visible', });
lyr_PERGRanges_33.set('fieldLabels', {'Id': 'no label', 'CIRCLE': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'INTERV_TYP': 'inline label - always visible', });
lyr_TalukaBoundaries_34.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', });
lyr_DistrictBoundaries_35.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', });
lyr_StateBoundary_36.set('fieldLabels', {'Id': 'no label', });
lyr_GujaratRoad_37.set('fieldLabels', {'icon': 'no label', 'CAT': 'no label', 'NAME': 'inline label - always visible', 'FROM_KM': 'no label', 'TO_KM': 'no label', 'BSSLANE': 'no label', 'SSLANE': 'no label', 'INTER': 'no label', 'SDLANE': 'no label', 'SMLTL': 'no label', 'CAR_WIDTH': 'no label', 'FOR_WIDTH': 'no label', 'LAND_WIDTH': 'no label', 'LENGTH_ROA': 'no label', 'SURFACE': 'no label', 'SP': 'no label', 'REMARK': 'no label', 'CAT_SP': 'no label', 'CAT_SURFAC': 'no label', 'NEW_SURFAC': 'no label', 'YEARS': 'no label', 'SH_NH_ID': 'no label', 'DISTRICT': 'no label', });
lyr_AllVillagesNames_38.set('fieldLabels', {'Id': 'no label', 'RANGE': 'inline label - always visible', 'DIVISION': 'inline label - always visible', 'CIRCLE': 'inline label - always visible', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'BEAT': 'inline label - always visible', 'ROUND': 'inline label - always visible', });
lyr_FacilitiesPoI_39.set('fieldLabels', {'STATE_ID': 'no label', 'DISTRICT_I': 'inline label - always visible', 'BLOCK_ID': 'inline label - always visible', 'HAB_ID': 'no label', 'FACILITY_I': 'inline label - always visible', 'FAC_DESC': 'inline label - always visible', 'FAC_CATEGO': 'inline label - always visible', });
lyr_FacilitiesPoI_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});