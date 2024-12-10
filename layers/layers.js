ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([67.928645, 20.045082, 75.067233, 24.830664]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HWAC_Forest_Areas_2 = new ol.format.GeoJSON();
var features_HWAC_Forest_Areas_2 = format_HWAC_Forest_Areas_2.readFeatures(json_HWAC_Forest_Areas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HWAC_Forest_Areas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HWAC_Forest_Areas_2.addFeatures(features_HWAC_Forest_Areas_2);
var lyr_HWAC_Forest_Areas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HWAC_Forest_Areas_2, 
                style: style_HWAC_Forest_Areas_2,
                popuplayertitle: "HWAC_Forest_Areas",
                interactive: true,
                title: '<img src="styles/legend/HWAC_Forest_Areas_2.png" /> HWAC_Forest_Areas'
            });
var format_HWAC_Villages_3 = new ol.format.GeoJSON();
var features_HWAC_Villages_3 = format_HWAC_Villages_3.readFeatures(json_HWAC_Villages_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HWAC_Villages_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HWAC_Villages_3.addFeatures(features_HWAC_Villages_3);
var lyr_HWAC_Villages_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HWAC_Villages_3, 
                style: style_HWAC_Villages_3,
                popuplayertitle: "HWAC_Villages",
                interactive: true,
                title: '<img src="styles/legend/HWAC_Villages_3.png" /> HWAC_Villages'
            });
var format_HWAC_Ranges_4 = new ol.format.GeoJSON();
var features_HWAC_Ranges_4 = format_HWAC_Ranges_4.readFeatures(json_HWAC_Ranges_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HWAC_Ranges_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HWAC_Ranges_4.addFeatures(features_HWAC_Ranges_4);
var lyr_HWAC_Ranges_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HWAC_Ranges_4, 
                style: style_HWAC_Ranges_4,
                popuplayertitle: "HWAC_Ranges",
                interactive: true,
                title: '<img src="styles/legend/HWAC_Ranges_4.png" /> HWAC_Ranges'
            });
var format_Wetland_Forest_Areas_5 = new ol.format.GeoJSON();
var features_Wetland_Forest_Areas_5 = format_Wetland_Forest_Areas_5.readFeatures(json_Wetland_Forest_Areas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wetland_Forest_Areas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wetland_Forest_Areas_5.addFeatures(features_Wetland_Forest_Areas_5);
var lyr_Wetland_Forest_Areas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wetland_Forest_Areas_5, 
                style: style_Wetland_Forest_Areas_5,
                popuplayertitle: "Wetland_Forest_Areas",
                interactive: true,
                title: '<img src="styles/legend/Wetland_Forest_Areas_5.png" /> Wetland_Forest_Areas'
            });
var format_Wetland_Villages_6 = new ol.format.GeoJSON();
var features_Wetland_Villages_6 = format_Wetland_Villages_6.readFeatures(json_Wetland_Villages_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wetland_Villages_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wetland_Villages_6.addFeatures(features_Wetland_Villages_6);
var lyr_Wetland_Villages_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wetland_Villages_6, 
                style: style_Wetland_Villages_6,
                popuplayertitle: "Wetland_Villages",
                interactive: true,
                title: '<img src="styles/legend/Wetland_Villages_6.png" /> Wetland_Villages'
            });
var format_Wetland_Ranges_7 = new ol.format.GeoJSON();
var features_Wetland_Ranges_7 = format_Wetland_Ranges_7.readFeatures(json_Wetland_Ranges_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wetland_Ranges_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wetland_Ranges_7.addFeatures(features_Wetland_Ranges_7);
var lyr_Wetland_Ranges_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wetland_Ranges_7, 
                style: style_Wetland_Ranges_7,
                popuplayertitle: "Wetland_Ranges",
                interactive: true,
                title: '<img src="styles/legend/Wetland_Ranges_7.png" /> Wetland_Ranges'
            });
var format_Wetland_Plantation_Plots_8 = new ol.format.GeoJSON();
var features_Wetland_Plantation_Plots_8 = format_Wetland_Plantation_Plots_8.readFeatures(json_Wetland_Plantation_Plots_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wetland_Plantation_Plots_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wetland_Plantation_Plots_8.addFeatures(features_Wetland_Plantation_Plots_8);
var lyr_Wetland_Plantation_Plots_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wetland_Plantation_Plots_8, 
                style: style_Wetland_Plantation_Plots_8,
                popuplayertitle: "Wetland_Plantation_Plots",
                interactive: true,
                title: '<img src="styles/legend/Wetland_Plantation_Plots_8.png" /> Wetland_Plantation_Plots'
            });
var format_GrassLand_Forest_Areas_9 = new ol.format.GeoJSON();
var features_GrassLand_Forest_Areas_9 = format_GrassLand_Forest_Areas_9.readFeatures(json_GrassLand_Forest_Areas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GrassLand_Forest_Areas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrassLand_Forest_Areas_9.addFeatures(features_GrassLand_Forest_Areas_9);
var lyr_GrassLand_Forest_Areas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrassLand_Forest_Areas_9, 
                style: style_GrassLand_Forest_Areas_9,
                popuplayertitle: "GrassLand_Forest_Areas",
                interactive: true,
                title: '<img src="styles/legend/GrassLand_Forest_Areas_9.png" /> GrassLand_Forest_Areas'
            });
var format_GrassLand_Villages_10 = new ol.format.GeoJSON();
var features_GrassLand_Villages_10 = format_GrassLand_Villages_10.readFeatures(json_GrassLand_Villages_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GrassLand_Villages_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrassLand_Villages_10.addFeatures(features_GrassLand_Villages_10);
var lyr_GrassLand_Villages_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrassLand_Villages_10, 
                style: style_GrassLand_Villages_10,
                popuplayertitle: "GrassLand_Villages",
                interactive: true,
                title: '<img src="styles/legend/GrassLand_Villages_10.png" /> GrassLand_Villages'
            });
var format_GrassLand_Ranges_11 = new ol.format.GeoJSON();
var features_GrassLand_Ranges_11 = format_GrassLand_Ranges_11.readFeatures(json_GrassLand_Ranges_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GrassLand_Ranges_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrassLand_Ranges_11.addFeatures(features_GrassLand_Ranges_11);
var lyr_GrassLand_Ranges_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrassLand_Ranges_11, 
                style: style_GrassLand_Ranges_11,
                popuplayertitle: "GrassLand_Ranges",
                interactive: true,
                title: '<img src="styles/legend/GrassLand_Ranges_11.png" /> GrassLand_Ranges'
            });
var format_GrassLand_Plantation_Plots_12 = new ol.format.GeoJSON();
var features_GrassLand_Plantation_Plots_12 = format_GrassLand_Plantation_Plots_12.readFeatures(json_GrassLand_Plantation_Plots_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GrassLand_Plantation_Plots_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrassLand_Plantation_Plots_12.addFeatures(features_GrassLand_Plantation_Plots_12);
var lyr_GrassLand_Plantation_Plots_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrassLand_Plantation_Plots_12, 
                style: style_GrassLand_Plantation_Plots_12,
                popuplayertitle: "GrassLand_Plantation_Plots",
                interactive: true,
                title: '<img src="styles/legend/GrassLand_Plantation_Plots_12.png" /> GrassLand_Plantation_Plots'
            });
var format_Degraded_Forest_Areas_13 = new ol.format.GeoJSON();
var features_Degraded_Forest_Areas_13 = format_Degraded_Forest_Areas_13.readFeatures(json_Degraded_Forest_Areas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Degraded_Forest_Areas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Degraded_Forest_Areas_13.addFeatures(features_Degraded_Forest_Areas_13);
var lyr_Degraded_Forest_Areas_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Degraded_Forest_Areas_13, 
                style: style_Degraded_Forest_Areas_13,
                popuplayertitle: "Degraded_Forest_Areas",
                interactive: true,
                title: '<img src="styles/legend/Degraded_Forest_Areas_13.png" /> Degraded_Forest_Areas'
            });
var format_Degraded_Forests_Villages_14 = new ol.format.GeoJSON();
var features_Degraded_Forests_Villages_14 = format_Degraded_Forests_Villages_14.readFeatures(json_Degraded_Forests_Villages_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Degraded_Forests_Villages_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Degraded_Forests_Villages_14.addFeatures(features_Degraded_Forests_Villages_14);
var lyr_Degraded_Forests_Villages_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Degraded_Forests_Villages_14, 
                style: style_Degraded_Forests_Villages_14,
                popuplayertitle: "Degraded_Forests_Villages",
                interactive: true,
                title: '<img src="styles/legend/Degraded_Forests_Villages_14.png" /> Degraded_Forests_Villages'
            });
var format_Degraded_Forests_Ranges_15 = new ol.format.GeoJSON();
var features_Degraded_Forests_Ranges_15 = format_Degraded_Forests_Ranges_15.readFeatures(json_Degraded_Forests_Ranges_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Degraded_Forests_Ranges_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Degraded_Forests_Ranges_15.addFeatures(features_Degraded_Forests_Ranges_15);
var lyr_Degraded_Forests_Ranges_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Degraded_Forests_Ranges_15, 
                style: style_Degraded_Forests_Ranges_15,
                popuplayertitle: "Degraded_Forests_Ranges",
                interactive: true,
                title: '<img src="styles/legend/Degraded_Forests_Ranges_15.png" /> Degraded_Forests_Ranges'
            });
var format_Degraded_Forests_Plantation_Plots_16 = new ol.format.GeoJSON();
var features_Degraded_Forests_Plantation_Plots_16 = format_Degraded_Forests_Plantation_Plots_16.readFeatures(json_Degraded_Forests_Plantation_Plots_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Degraded_Forests_Plantation_Plots_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Degraded_Forests_Plantation_Plots_16.addFeatures(features_Degraded_Forests_Plantation_Plots_16);
var lyr_Degraded_Forests_Plantation_Plots_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Degraded_Forests_Plantation_Plots_16, 
                style: style_Degraded_Forests_Plantation_Plots_16,
                popuplayertitle: "Degraded_Forests_Plantation_Plots",
                interactive: true,
                title: '<img src="styles/legend/Degraded_Forests_Plantation_Plots_16.png" /> Degraded_Forests_Plantation_Plots'
            });
var format_Coastal_Forest_Areas_17 = new ol.format.GeoJSON();
var features_Coastal_Forest_Areas_17 = format_Coastal_Forest_Areas_17.readFeatures(json_Coastal_Forest_Areas_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Coastal_Forest_Areas_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coastal_Forest_Areas_17.addFeatures(features_Coastal_Forest_Areas_17);
var lyr_Coastal_Forest_Areas_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coastal_Forest_Areas_17, 
                style: style_Coastal_Forest_Areas_17,
                popuplayertitle: "Coastal_Forest_Areas",
                interactive: true,
                title: '<img src="styles/legend/Coastal_Forest_Areas_17.png" /> Coastal_Forest_Areas'
            });
var format_Coastal_Villages_18 = new ol.format.GeoJSON();
var features_Coastal_Villages_18 = format_Coastal_Villages_18.readFeatures(json_Coastal_Villages_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Coastal_Villages_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coastal_Villages_18.addFeatures(features_Coastal_Villages_18);
var lyr_Coastal_Villages_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coastal_Villages_18, 
                style: style_Coastal_Villages_18,
                popuplayertitle: "Coastal_Villages",
                interactive: true,
                title: '<img src="styles/legend/Coastal_Villages_18.png" /> Coastal_Villages'
            });
var format_Coastal_Ranges_19 = new ol.format.GeoJSON();
var features_Coastal_Ranges_19 = format_Coastal_Ranges_19.readFeatures(json_Coastal_Ranges_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Coastal_Ranges_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coastal_Ranges_19.addFeatures(features_Coastal_Ranges_19);
var lyr_Coastal_Ranges_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coastal_Ranges_19, 
                style: style_Coastal_Ranges_19,
                popuplayertitle: "Coastal_Ranges",
                interactive: true,
                title: '<img src="styles/legend/Coastal_Ranges_19.png" /> Coastal_Ranges'
            });
var format_Coastal_Plantation_Plots_20 = new ol.format.GeoJSON();
var features_Coastal_Plantation_Plots_20 = format_Coastal_Plantation_Plots_20.readFeatures(json_Coastal_Plantation_Plots_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Coastal_Plantation_Plots_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coastal_Plantation_Plots_20.addFeatures(features_Coastal_Plantation_Plots_20);
var lyr_Coastal_Plantation_Plots_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coastal_Plantation_Plots_20, 
                style: style_Coastal_Plantation_Plots_20,
                popuplayertitle: "Coastal_Plantation_Plots",
                interactive: true,
                title: '<img src="styles/legend/Coastal_Plantation_Plots_20.png" /> Coastal_Plantation_Plots'
            });
var format_Teritorial_All_Forest_Areas_21 = new ol.format.GeoJSON();
var features_Teritorial_All_Forest_Areas_21 = format_Teritorial_All_Forest_Areas_21.readFeatures(json_Teritorial_All_Forest_Areas_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Teritorial_All_Forest_Areas_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Teritorial_All_Forest_Areas_21.addFeatures(features_Teritorial_All_Forest_Areas_21);
var lyr_Teritorial_All_Forest_Areas_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Teritorial_All_Forest_Areas_21, 
                style: style_Teritorial_All_Forest_Areas_21,
                popuplayertitle: "Teritorial_All_Forest_Areas",
                interactive: true,
                title: '<img src="styles/legend/Teritorial_All_Forest_Areas_21.png" /> Teritorial_All_Forest_Areas'
            });
var format_Teritorial_All_Ranges_22 = new ol.format.GeoJSON();
var features_Teritorial_All_Ranges_22 = format_Teritorial_All_Ranges_22.readFeatures(json_Teritorial_All_Ranges_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Teritorial_All_Ranges_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Teritorial_All_Ranges_22.addFeatures(features_Teritorial_All_Ranges_22);
var lyr_Teritorial_All_Ranges_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Teritorial_All_Ranges_22, 
                style: style_Teritorial_All_Ranges_22,
                popuplayertitle: "Teritorial_All_Ranges",
                interactive: true,
                title: '<img src="styles/legend/Teritorial_All_Ranges_22.png" /> Teritorial_All_Ranges'
            });
var format_Teritorial_All_Divisions_23 = new ol.format.GeoJSON();
var features_Teritorial_All_Divisions_23 = format_Teritorial_All_Divisions_23.readFeatures(json_Teritorial_All_Divisions_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Teritorial_All_Divisions_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Teritorial_All_Divisions_23.addFeatures(features_Teritorial_All_Divisions_23);
var lyr_Teritorial_All_Divisions_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Teritorial_All_Divisions_23, 
                style: style_Teritorial_All_Divisions_23,
                popuplayertitle: "Teritorial_All_Divisions",
                interactive: true,
                title: '<img src="styles/legend/Teritorial_All_Divisions_23.png" /> Teritorial_All_Divisions'
            });
var format_SocialForestry_All_Ranges_24 = new ol.format.GeoJSON();
var features_SocialForestry_All_Ranges_24 = format_SocialForestry_All_Ranges_24.readFeatures(json_SocialForestry_All_Ranges_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SocialForestry_All_Ranges_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SocialForestry_All_Ranges_24.addFeatures(features_SocialForestry_All_Ranges_24);
var lyr_SocialForestry_All_Ranges_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SocialForestry_All_Ranges_24, 
                style: style_SocialForestry_All_Ranges_24,
                popuplayertitle: "Social Forestry_All_Ranges",
                interactive: true,
                title: '<img src="styles/legend/SocialForestry_All_Ranges_24.png" /> Social Forestry_All_Ranges'
            });
var format_SocialForestry_All_Divisions_25 = new ol.format.GeoJSON();
var features_SocialForestry_All_Divisions_25 = format_SocialForestry_All_Divisions_25.readFeatures(json_SocialForestry_All_Divisions_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SocialForestry_All_Divisions_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SocialForestry_All_Divisions_25.addFeatures(features_SocialForestry_All_Divisions_25);
var lyr_SocialForestry_All_Divisions_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SocialForestry_All_Divisions_25, 
                style: style_SocialForestry_All_Divisions_25,
                popuplayertitle: "Social Forestry_All_Divisions",
                interactive: true,
                title: '<img src="styles/legend/SocialForestry_All_Divisions_25.png" /> Social Forestry_All_Divisions'
            });
var format_PERG_Ranges_26 = new ol.format.GeoJSON();
var features_PERG_Ranges_26 = format_PERG_Ranges_26.readFeatures(json_PERG_Ranges_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PERG_Ranges_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERG_Ranges_26.addFeatures(features_PERG_Ranges_26);
var lyr_PERG_Ranges_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERG_Ranges_26, 
                style: style_PERG_Ranges_26,
                popuplayertitle: "PERG_Ranges",
                interactive: true,
                title: '<img src="styles/legend/PERG_Ranges_26.png" /> PERG_Ranges'
            });
var format_Taluka_Boundaries_27 = new ol.format.GeoJSON();
var features_Taluka_Boundaries_27 = format_Taluka_Boundaries_27.readFeatures(json_Taluka_Boundaries_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Taluka_Boundaries_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taluka_Boundaries_27.addFeatures(features_Taluka_Boundaries_27);
var lyr_Taluka_Boundaries_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taluka_Boundaries_27, 
                style: style_Taluka_Boundaries_27,
                popuplayertitle: "Taluka_ Boundaries",
                interactive: true,
                title: '<img src="styles/legend/Taluka_Boundaries_27.png" /> Taluka_ Boundaries'
            });
var format_District_Boundaries_28 = new ol.format.GeoJSON();
var features_District_Boundaries_28 = format_District_Boundaries_28.readFeatures(json_District_Boundaries_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_District_Boundaries_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_Boundaries_28.addFeatures(features_District_Boundaries_28);
var lyr_District_Boundaries_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_Boundaries_28, 
                style: style_District_Boundaries_28,
                popuplayertitle: "District_ Boundaries",
                interactive: true,
                title: '<img src="styles/legend/District_Boundaries_28.png" /> District_ Boundaries'
            });
var format_StateBoundary_29 = new ol.format.GeoJSON();
var features_StateBoundary_29 = format_StateBoundary_29.readFeatures(json_StateBoundary_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_StateBoundary_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBoundary_29.addFeatures(features_StateBoundary_29);
var lyr_StateBoundary_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBoundary_29, 
                style: style_StateBoundary_29,
                popuplayertitle: "State Boundary",
                interactive: true,
                title: '<img src="styles/legend/StateBoundary_29.png" /> State Boundary'
            });
var format_Gujarat_Road_30 = new ol.format.GeoJSON();
var features_Gujarat_Road_30 = format_Gujarat_Road_30.readFeatures(json_Gujarat_Road_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Gujarat_Road_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gujarat_Road_30.addFeatures(features_Gujarat_Road_30);
var lyr_Gujarat_Road_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gujarat_Road_30, 
                style: style_Gujarat_Road_30,
                popuplayertitle: "Gujarat_Road",
                interactive: true,
                title: '<img src="styles/legend/Gujarat_Road_30.png" /> Gujarat_Road'
            });
var format_All_VillagesNames_31 = new ol.format.GeoJSON();
var features_All_VillagesNames_31 = format_All_VillagesNames_31.readFeatures(json_All_VillagesNames_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_All_VillagesNames_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_VillagesNames_31.addFeatures(features_All_VillagesNames_31);
var lyr_All_VillagesNames_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_All_VillagesNames_31, 
                style: style_All_VillagesNames_31,
                popuplayertitle: "All_Villages Names",
                interactive: true,
                title: '<img src="styles/legend/All_VillagesNames_31.png" /> All_Villages Names'
            });
var group_AdminBoundary = new ol.layer.Group({
                                layers: [lyr_PERG_Ranges_26,lyr_Taluka_Boundaries_27,lyr_District_Boundaries_28,lyr_StateBoundary_29,lyr_Gujarat_Road_30,lyr_All_VillagesNames_31,],
                                fold: "open",
                                title: "Admin Boundary"});
var group_SocialForestry = new ol.layer.Group({
                                layers: [lyr_SocialForestry_All_Ranges_24,lyr_SocialForestry_All_Divisions_25,],
                                fold: "open",
                                title: "Social Forestry"});
var group_TerritorialForestry = new ol.layer.Group({
                                layers: [lyr_Teritorial_All_Forest_Areas_21,lyr_Teritorial_All_Ranges_22,lyr_Teritorial_All_Divisions_23,],
                                fold: "open",
                                title: "Territorial Forestry"});
var group_CoastalEcosystem = new ol.layer.Group({
                                layers: [lyr_Coastal_Forest_Areas_17,lyr_Coastal_Villages_18,lyr_Coastal_Ranges_19,lyr_Coastal_Plantation_Plots_20,],
                                fold: "open",
                                title: "Coastal Ecosystem"});
var group_DegradedForests = new ol.layer.Group({
                                layers: [lyr_Degraded_Forest_Areas_13,lyr_Degraded_Forests_Villages_14,lyr_Degraded_Forests_Ranges_15,lyr_Degraded_Forests_Plantation_Plots_16,],
                                fold: "open",
                                title: "Degraded Forests"});
var group_Grassland = new ol.layer.Group({
                                layers: [lyr_GrassLand_Forest_Areas_9,lyr_GrassLand_Villages_10,lyr_GrassLand_Ranges_11,lyr_GrassLand_Plantation_Plots_12,],
                                fold: "open",
                                title: "Grassland"});
var group_Wetland = new ol.layer.Group({
                                layers: [lyr_Wetland_Forest_Areas_5,lyr_Wetland_Villages_6,lyr_Wetland_Ranges_7,lyr_Wetland_Plantation_Plots_8,],
                                fold: "open",
                                title: "Wetland"});
var group_HWAC = new ol.layer.Group({
                                layers: [lyr_HWAC_Forest_Areas_2,lyr_HWAC_Villages_3,lyr_HWAC_Ranges_4,],
                                fold: "open",
                                title: "HWAC"});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_OSMStandard_1,],
                                fold: "open",
                                title: "BaseMap"});

lyr_GoogleSatellite_0.setVisible(false);lyr_OSMStandard_1.setVisible(false);lyr_HWAC_Forest_Areas_2.setVisible(false);lyr_HWAC_Villages_3.setVisible(false);lyr_HWAC_Ranges_4.setVisible(false);lyr_Wetland_Forest_Areas_5.setVisible(false);lyr_Wetland_Villages_6.setVisible(false);lyr_Wetland_Ranges_7.setVisible(false);lyr_Wetland_Plantation_Plots_8.setVisible(false);lyr_GrassLand_Forest_Areas_9.setVisible(false);lyr_GrassLand_Villages_10.setVisible(false);lyr_GrassLand_Ranges_11.setVisible(false);lyr_GrassLand_Plantation_Plots_12.setVisible(false);lyr_Degraded_Forest_Areas_13.setVisible(false);lyr_Degraded_Forests_Villages_14.setVisible(false);lyr_Degraded_Forests_Ranges_15.setVisible(false);lyr_Degraded_Forests_Plantation_Plots_16.setVisible(false);lyr_Coastal_Forest_Areas_17.setVisible(false);lyr_Coastal_Villages_18.setVisible(false);lyr_Coastal_Ranges_19.setVisible(false);lyr_Coastal_Plantation_Plots_20.setVisible(false);lyr_Teritorial_All_Forest_Areas_21.setVisible(false);lyr_Teritorial_All_Ranges_22.setVisible(false);lyr_Teritorial_All_Divisions_23.setVisible(false);lyr_SocialForestry_All_Ranges_24.setVisible(false);lyr_SocialForestry_All_Divisions_25.setVisible(false);lyr_PERG_Ranges_26.setVisible(false);lyr_Taluka_Boundaries_27.setVisible(true);lyr_District_Boundaries_28.setVisible(true);lyr_StateBoundary_29.setVisible(true);lyr_Gujarat_Road_30.setVisible(false);lyr_All_VillagesNames_31.setVisible(false);
var layersList = [group_BaseMap,group_HWAC,group_Wetland,group_Grassland,group_DegradedForests,group_CoastalEcosystem,group_TerritorialForestry,group_SocialForestry,group_AdminBoundary];
lyr_HWAC_Forest_Areas_2.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', 'Circle': 'Circle', 'FG_Area_Ha': 'FG_Area_Ha', 'F_Type': 'F_Type', 'Section': 'Section', 'Sanctuary': 'Sanctuary', 'Area_ha': 'Area_ha', });
lyr_HWAC_Villages_3.set('fieldAliases', {'Id': 'Id', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'BEAT': 'BEAT', 'ROUND': 'ROUND', });
lyr_HWAC_Ranges_4.set('fieldAliases', {'Id': 'Id', 'CIRCLE': 'CIRCLE', 'Division': 'Division', 'Range': 'Range', 'INTERV_TYP': 'INTERV_TYP', });
lyr_Wetland_Forest_Areas_5.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', 'Circle': 'Circle', 'FG_Area_Ha': 'FG_Area_Ha', 'F_Type': 'F_Type', 'Section': 'Section', 'Sanctuary': 'Sanctuary', 'Area_ha': 'Area_ha', });
lyr_Wetland_Villages_6.set('fieldAliases', {'Id': 'Id', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'BEAT': 'BEAT', 'ROUND': 'ROUND', });
lyr_Wetland_Ranges_7.set('fieldAliases', {'Id': 'Id', 'CIRCLE': 'CIRCLE', 'Division': 'Division', 'Range': 'Range', 'INTERV_TYP': 'INTERV_TYP', });
lyr_Wetland_Plantation_Plots_8.set('fieldAliases', {'FG_AREA_Ha': 'FG_AREA_Ha', 'Circle': 'Circle', 'Division': 'Division', 'Range': 'Range', 'Village': 'Village', 'Module': 'Module', 'Year': 'Year', 'Feald_Area': 'Feald_Area', 'Area_Ha': 'Area_Ha', 'Sr_No': 'Sr_No', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_GrassLand_Forest_Areas_9.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', 'Circle': 'Circle', 'FG_Area_Ha': 'FG_Area_Ha', 'F_Type': 'F_Type', 'Section': 'Section', 'Sanctuary': 'Sanctuary', 'Area_ha': 'Area_ha', });
lyr_GrassLand_Villages_10.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', });
lyr_GrassLand_Ranges_11.set('fieldAliases', {'Id': 'Id', 'CIRCLE': 'CIRCLE', 'Division': 'Division', 'Range': 'Range', 'INTERV_TYP': 'INTERV_TYP', });
lyr_GrassLand_Plantation_Plots_12.set('fieldAliases', {'FG_AREA_Ha': 'FG_AREA_Ha', 'Circle': 'Circle', 'Division': 'Division', 'Range': 'Range', 'Village': 'Village', 'Module': 'Module', 'Year': 'Year', 'Feald_Area': 'Feald_Area', 'Area_Ha': 'Area_Ha', 'Vidi_Name': 'Vidi_Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Sr_No': 'Sr_No', });
lyr_Degraded_Forest_Areas_13.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', 'Circle': 'Circle', 'FG_Area_Ha': 'FG_Area_Ha', 'F_Type': 'F_Type', 'Section': 'Section', 'Sanctuary': 'Sanctuary', 'Area_ha': 'Area_ha', });
lyr_Degraded_Forests_Villages_14.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', });
lyr_Degraded_Forests_Ranges_15.set('fieldAliases', {'Id': 'Id', 'CIRCLE': 'CIRCLE', 'Division': 'Division', 'Range': 'Range', 'INTERV_TYP': 'INTERV_TYP', });
lyr_Degraded_Forests_Plantation_Plots_16.set('fieldAliases', {'FG_AREA_Ha': 'FG_AREA_Ha', 'Circle': 'Circle', 'Division': 'Division', 'Range': 'Range', 'Village': 'Village', 'Module': 'Module', 'Year': 'Year', 'Feald_Area': 'Feald_Area', 'Area_Ha': 'Area_Ha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Sr_No': 'Sr_No', });
lyr_Coastal_Forest_Areas_17.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', 'Circle': 'Circle', 'FG_Area_Ha': 'FG_Area_Ha', 'F_Type': 'F_Type', 'Section': 'Section', 'Sanctuary': 'Sanctuary', 'Area_ha': 'Area_ha', });
lyr_Coastal_Villages_18.set('fieldAliases', {'Id': 'Id', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'BEAT': 'BEAT', 'ROUND': 'ROUND', });
lyr_Coastal_Ranges_19.set('fieldAliases', {'Id': 'Id', 'CIRCLE': 'CIRCLE', 'Division': 'Division', 'Range': 'Range', 'INTERV_TYP': 'INTERV_TYP', });
lyr_Coastal_Plantation_Plots_20.set('fieldAliases', {'DNAME': 'DNAME', 'TNAME': 'TNAME', 'F_SNO': 'F_SNO', 'F_TYPE': 'F_TYPE', 'FG_AREA_Ha': 'FG_AREA_Ha', 'Circle': 'Circle', 'Division': 'Division', 'Range': 'Range', 'Village': 'Village', 'Module': 'Module', 'Year': 'Year', 'Area_Ha': 'Area_Ha', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Plant_Area': 'Plant_Area', 'Sr_No': 'Sr_No', });
lyr_Teritorial_All_Forest_Areas_21.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', 'Circle': 'Circle', 'FG_Area_Ha': 'FG_Area_Ha', 'F_Type': 'F_Type', 'Section': 'Section', 'Sanctuary': 'Sanctuary', 'Area_ha': 'Area_ha', });
lyr_Teritorial_All_Ranges_22.set('fieldAliases', {'Id': 'Id', 'Division': 'Division', 'Range': 'Range', });
lyr_Teritorial_All_Divisions_23.set('fieldAliases', {'Id': 'Id', 'Division': 'Division', 'Circle': 'Circle', });
lyr_SocialForestry_All_Ranges_24.set('fieldAliases', {'Id': 'Id', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', });
lyr_SocialForestry_All_Divisions_25.set('fieldAliases', {'Id': 'Id', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', });
lyr_PERG_Ranges_26.set('fieldAliases', {'Id': 'Id', 'CIRCLE': 'CIRCLE', 'Division': 'Division', 'Range': 'Range', 'INTERV_TYP': 'INTERV_TYP', });
lyr_Taluka_Boundaries_27.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', });
lyr_District_Boundaries_28.set('fieldAliases', {'Id': 'Id', 'District': 'District', });
lyr_StateBoundary_29.set('fieldAliases', {'Id': 'Id', });
lyr_Gujarat_Road_30.set('fieldAliases', {'icon': 'icon', 'CAT': 'CAT', 'NAME': 'NAME', 'FROM_KM': 'FROM_KM', 'TO_KM': 'TO_KM', 'BSSLANE': 'BSSLANE', 'SSLANE': 'SSLANE', 'INTER': 'INTER', 'SDLANE': 'SDLANE', 'SMLTL': 'SMLTL', 'CAR_WIDTH': 'CAR_WIDTH', 'FOR_WIDTH': 'FOR_WIDTH', 'LAND_WIDTH': 'LAND_WIDTH', 'LENGTH_ROA': 'LENGTH_ROA', 'SURFACE': 'SURFACE', 'SP': 'SP', 'REMARK': 'REMARK', 'CAT_SP': 'CAT_SP', 'CAT_SURFAC': 'CAT_SURFAC', 'NEW_SURFAC': 'NEW_SURFAC', 'YEARS': 'YEARS', 'SH_NH_ID': 'SH_NH_ID', 'DISTRICT': 'DISTRICT', });
lyr_All_VillagesNames_31.set('fieldAliases', {'Id': 'Id', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'BEAT': 'BEAT', 'ROUND': 'ROUND', });
lyr_HWAC_Forest_Areas_2.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'FG_Area_Ha': 'TextEdit', 'F_Type': 'TextEdit', 'Section': 'TextEdit', 'Sanctuary': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_HWAC_Villages_3.set('fieldImages', {'Id': 'Range', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', });
lyr_HWAC_Ranges_4.set('fieldImages', {'Id': 'Range', 'CIRCLE': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'INTERV_TYP': 'TextEdit', });
lyr_Wetland_Forest_Areas_5.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'FG_Area_Ha': 'TextEdit', 'F_Type': 'TextEdit', 'Section': 'TextEdit', 'Sanctuary': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_Wetland_Villages_6.set('fieldImages', {'Id': 'Range', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', });
lyr_Wetland_Ranges_7.set('fieldImages', {'Id': 'Range', 'CIRCLE': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'INTERV_TYP': 'TextEdit', });
lyr_Wetland_Plantation_Plots_8.set('fieldImages', {'FG_AREA_Ha': 'TextEdit', 'Circle': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'Village': 'TextEdit', 'Module': 'TextEdit', 'Year': 'TextEdit', 'Feald_Area': 'TextEdit', 'Area_Ha': 'TextEdit', 'Sr_No': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_GrassLand_Forest_Areas_9.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'FG_Area_Ha': 'TextEdit', 'F_Type': 'TextEdit', 'Section': 'TextEdit', 'Sanctuary': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_GrassLand_Villages_10.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', });
lyr_GrassLand_Ranges_11.set('fieldImages', {'Id': 'Range', 'CIRCLE': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'INTERV_TYP': 'TextEdit', });
lyr_GrassLand_Plantation_Plots_12.set('fieldImages', {'FG_AREA_Ha': 'TextEdit', 'Circle': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'Village': 'TextEdit', 'Module': 'TextEdit', 'Year': 'TextEdit', 'Feald_Area': 'TextEdit', 'Area_Ha': 'TextEdit', 'Vidi_Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Sr_No': 'TextEdit', });
lyr_Degraded_Forest_Areas_13.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'FG_Area_Ha': 'TextEdit', 'F_Type': 'TextEdit', 'Section': 'TextEdit', 'Sanctuary': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_Degraded_Forests_Villages_14.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', });
lyr_Degraded_Forests_Ranges_15.set('fieldImages', {'Id': 'Range', 'CIRCLE': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'INTERV_TYP': 'TextEdit', });
lyr_Degraded_Forests_Plantation_Plots_16.set('fieldImages', {'FG_AREA_Ha': 'TextEdit', 'Circle': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'Village': 'TextEdit', 'Module': 'TextEdit', 'Year': 'TextEdit', 'Feald_Area': 'TextEdit', 'Area_Ha': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Sr_No': 'TextEdit', });
lyr_Coastal_Forest_Areas_17.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'FG_Area_Ha': 'TextEdit', 'F_Type': 'TextEdit', 'Section': 'TextEdit', 'Sanctuary': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_Coastal_Villages_18.set('fieldImages', {'Id': 'Range', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', });
lyr_Coastal_Ranges_19.set('fieldImages', {'Id': 'Range', 'CIRCLE': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'INTERV_TYP': 'TextEdit', });
lyr_Coastal_Plantation_Plots_20.set('fieldImages', {'DNAME': 'TextEdit', 'TNAME': 'TextEdit', 'F_SNO': 'TextEdit', 'F_TYPE': 'TextEdit', 'FG_AREA_Ha': 'TextEdit', 'Circle': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'Village': 'TextEdit', 'Module': 'TextEdit', 'Year': 'TextEdit', 'Area_Ha': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Plant_Area': 'TextEdit', 'Sr_No': 'TextEdit', });
lyr_Teritorial_All_Forest_Areas_21.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'FG_Area_Ha': 'TextEdit', 'F_Type': 'TextEdit', 'Section': 'TextEdit', 'Sanctuary': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_Teritorial_All_Ranges_22.set('fieldImages', {'Id': 'Range', 'Division': 'TextEdit', 'Range': 'TextEdit', });
lyr_Teritorial_All_Divisions_23.set('fieldImages', {'Id': 'Range', 'Division': 'TextEdit', 'Circle': 'TextEdit', });
lyr_SocialForestry_All_Ranges_24.set('fieldImages', {'Id': 'Range', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', });
lyr_SocialForestry_All_Divisions_25.set('fieldImages', {'Id': 'Range', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', });
lyr_PERG_Ranges_26.set('fieldImages', {'Id': 'Range', 'CIRCLE': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'INTERV_TYP': 'TextEdit', });
lyr_Taluka_Boundaries_27.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', });
lyr_District_Boundaries_28.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', });
lyr_StateBoundary_29.set('fieldImages', {'Id': 'Range', });
lyr_Gujarat_Road_30.set('fieldImages', {'icon': 'TextEdit', 'CAT': 'TextEdit', 'NAME': 'TextEdit', 'FROM_KM': 'TextEdit', 'TO_KM': 'TextEdit', 'BSSLANE': 'TextEdit', 'SSLANE': 'TextEdit', 'INTER': 'TextEdit', 'SDLANE': 'TextEdit', 'SMLTL': 'TextEdit', 'CAR_WIDTH': 'TextEdit', 'FOR_WIDTH': 'TextEdit', 'LAND_WIDTH': 'TextEdit', 'LENGTH_ROA': 'TextEdit', 'SURFACE': 'TextEdit', 'SP': 'TextEdit', 'REMARK': 'TextEdit', 'CAT_SP': 'TextEdit', 'CAT_SURFAC': 'TextEdit', 'NEW_SURFAC': 'TextEdit', 'YEARS': 'TextEdit', 'SH_NH_ID': 'TextEdit', 'DISTRICT': 'TextEdit', });
lyr_All_VillagesNames_31.set('fieldImages', {'Id': 'Range', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', });
lyr_HWAC_Forest_Areas_2.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'FG_Area_Ha': 'inline label - always visible', 'F_Type': 'inline label - always visible', 'Section': 'inline label - always visible', 'Sanctuary': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_HWAC_Villages_3.set('fieldLabels', {'Id': 'no label', 'RANGE': 'inline label - always visible', 'DIVISION': 'inline label - always visible', 'CIRCLE': 'inline label - always visible', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'BEAT': 'inline label - always visible', 'ROUND': 'inline label - always visible', });
lyr_HWAC_Ranges_4.set('fieldLabels', {'Id': 'no label', 'CIRCLE': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'INTERV_TYP': 'inline label - always visible', });
lyr_Wetland_Forest_Areas_5.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'FG_Area_Ha': 'inline label - always visible', 'F_Type': 'inline label - always visible', 'Section': 'inline label - always visible', 'Sanctuary': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_Wetland_Villages_6.set('fieldLabels', {'Id': 'no label', 'RANGE': 'inline label - always visible', 'DIVISION': 'inline label - always visible', 'CIRCLE': 'inline label - always visible', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'BEAT': 'inline label - always visible', 'ROUND': 'inline label - always visible', });
lyr_Wetland_Ranges_7.set('fieldLabels', {'Id': 'no label', 'CIRCLE': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'INTERV_TYP': 'inline label - always visible', });
lyr_Wetland_Plantation_Plots_8.set('fieldLabels', {'FG_AREA_Ha': 'inline label - always visible', 'Circle': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'Village': 'inline label - always visible', 'Module': 'inline label - always visible', 'Year': 'inline label - always visible', 'Feald_Area': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', 'Sr_No': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_GrassLand_Forest_Areas_9.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - visible with data', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'FG_Area_Ha': 'inline label - always visible', 'F_Type': 'inline label - always visible', 'Section': 'inline label - always visible', 'Sanctuary': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_GrassLand_Villages_10.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', });
lyr_GrassLand_Ranges_11.set('fieldLabels', {'Id': 'no label', 'CIRCLE': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'INTERV_TYP': 'inline label - always visible', });
lyr_GrassLand_Plantation_Plots_12.set('fieldLabels', {'FG_AREA_Ha': 'inline label - always visible', 'Circle': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'Village': 'inline label - always visible', 'Module': 'inline label - always visible', 'Year': 'inline label - always visible', 'Feald_Area': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', 'Vidi_Name': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Sr_No': 'inline label - always visible', });
lyr_Degraded_Forest_Areas_13.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'FG_Area_Ha': 'inline label - always visible', 'F_Type': 'inline label - always visible', 'Section': 'inline label - always visible', 'Sanctuary': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_Degraded_Forests_Villages_14.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', });
lyr_Degraded_Forests_Ranges_15.set('fieldLabels', {'Id': 'inline label - always visible', 'CIRCLE': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'INTERV_TYP': 'inline label - always visible', });
lyr_Degraded_Forests_Plantation_Plots_16.set('fieldLabels', {'FG_AREA_Ha': 'inline label - always visible', 'Circle': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'Village': 'inline label - always visible', 'Module': 'inline label - always visible', 'Year': 'inline label - always visible', 'Feald_Area': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Sr_No': 'inline label - always visible', });
lyr_Coastal_Forest_Areas_17.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'FG_Area_Ha': 'inline label - always visible', 'F_Type': 'inline label - always visible', 'Section': 'inline label - always visible', 'Sanctuary': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_Coastal_Villages_18.set('fieldLabels', {'Id': 'no label', 'RANGE': 'inline label - always visible', 'DIVISION': 'inline label - always visible', 'CIRCLE': 'inline label - always visible', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'BEAT': 'inline label - always visible', 'ROUND': 'inline label - always visible', });
lyr_Coastal_Ranges_19.set('fieldLabels', {'Id': 'no label', 'CIRCLE': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'INTERV_TYP': 'inline label - always visible', });
lyr_Coastal_Plantation_Plots_20.set('fieldLabels', {'DNAME': 'inline label - always visible', 'TNAME': 'inline label - always visible', 'F_SNO': 'inline label - always visible', 'F_TYPE': 'inline label - always visible', 'FG_AREA_Ha': 'inline label - always visible', 'Circle': 'inline label - always visible', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', 'Village': 'inline label - always visible', 'Module': 'inline label - always visible', 'Year': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Plant_Area': 'inline label - always visible', 'Sr_No': 'inline label - always visible', });
lyr_Teritorial_All_Forest_Areas_21.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'inline label - always visible', 'Beat': 'inline label - always visible', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', 'FG_Area_Ha': 'inline label - always visible', 'F_Type': 'inline label - always visible', 'Section': 'inline label - always visible', 'Sanctuary': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_Teritorial_All_Ranges_22.set('fieldLabels', {'Id': 'no label', 'Division': 'inline label - always visible', 'Range': 'inline label - always visible', });
lyr_Teritorial_All_Divisions_23.set('fieldLabels', {'Id': 'no label', 'Division': 'inline label - always visible', 'Circle': 'inline label - always visible', });
lyr_SocialForestry_All_Ranges_24.set('fieldLabels', {'Id': 'no label', 'RANGE': 'inline label - always visible', 'DIVISION': 'inline label - always visible', 'CIRCLE': 'inline label - always visible', });
lyr_SocialForestry_All_Divisions_25.set('fieldLabels', {'Id': 'no label', 'DIVISION': 'inline label - always visible', 'CIRCLE': 'inline label - always visible', });
lyr_PERG_Ranges_26.set('fieldLabels', {'Id': 'no label', 'CIRCLE': 'inline label - visible with data', 'Division': 'inline label - visible with data', 'Range': 'inline label - always visible', 'INTERV_TYP': 'inline label - always visible', });
lyr_Taluka_Boundaries_27.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', });
lyr_District_Boundaries_28.set('fieldLabels', {'Id': 'no label', 'District': 'inline label - always visible', });
lyr_StateBoundary_29.set('fieldLabels', {'Id': 'no label', });
lyr_Gujarat_Road_30.set('fieldLabels', {'icon': 'no label', 'CAT': 'no label', 'NAME': 'inline label - always visible', 'FROM_KM': 'no label', 'TO_KM': 'no label', 'BSSLANE': 'no label', 'SSLANE': 'no label', 'INTER': 'no label', 'SDLANE': 'no label', 'SMLTL': 'no label', 'CAR_WIDTH': 'no label', 'FOR_WIDTH': 'no label', 'LAND_WIDTH': 'no label', 'LENGTH_ROA': 'no label', 'SURFACE': 'no label', 'SP': 'no label', 'REMARK': 'no label', 'CAT_SP': 'no label', 'CAT_SURFAC': 'no label', 'NEW_SURFAC': 'no label', 'YEARS': 'no label', 'SH_NH_ID': 'no label', 'DISTRICT': 'no label', });
lyr_All_VillagesNames_31.set('fieldLabels', {'Id': 'no label', 'RANGE': 'inline label - always visible', 'DIVISION': 'inline label - always visible', 'CIRCLE': 'inline label - always visible', 'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'BEAT': 'inline label - always visible', 'ROUND': 'inline label - always visible', });
lyr_All_VillagesNames_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});