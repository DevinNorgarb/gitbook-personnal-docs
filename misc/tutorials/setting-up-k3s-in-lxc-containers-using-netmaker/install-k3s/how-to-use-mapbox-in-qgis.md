# How to Use Mapbox in QGIS

[Caitlin Dempsey ↗](https://www.gislounge.com/author/caitlin/) | January 18, 2018 | [GIS Learning ↗](https://www.gislounge.com/gis-101/)

Mapbox is a provider of a service that lets you create and serve custom online web maps. Users can customize any of the standard map styles and upload their own data to add to those maps. Low volume users can take advantage of the free plan level to access satellite and street base maps to build upon.

These map styles can also be loaded into the free and open source desktop GIS software program, QGIS. This tutorial shows how to take a map style you have created in Mapbox and load it into a QGIS session. You can also view a video version of this tutorial at the bottom of the original page.

This tutorial requires that you have an existing Mapbox account and have set up at least one map style. To get started with Mapbox, sign up for free ↗: https://www.mapbox.com/signup/?referrer=gislounge.com

{% stepper %}
{% step %}
### Create a Map Style in Mapbox

The first thing you will need to do in Mapbox is to create a map style in your studio ↗: https://www.mapbox.com/studio/. To familiarize yourself with how to do that, visit the Mapbox tutorial on creating styles ↗: https://www.mapbox.com/help/create-a-custom-style/. If you are just interested in a predesigned basemap, select one of the style templates. Type in the name for your new map style.

![Map style editor](<../../../../.gitbook/assets/image (47)>)

Either customize the map style in the editor or use the default template style. From your styles page, click on the menu option for the style you want to load into QGIS.

![Map styles list](<../../../../.gitbook/assets/image (48)>)

Select “Share, develop & use”. Scroll down to the section that says “Use with WMTS service”. Click the toggle button to select QGIS. Then copy the URL provided in the WMTS endpoint box — you will need this URL when you open QGIS.

![WMTS endpoint URL](<../../../../.gitbook/assets/image (49)>)
{% endstep %}

{% step %}
### Loading the Mapbox Style in QGIS Using WMTS Service

Open QGIS. On the far left are icons for loading different data types into QGIS. Select the globe icon to load a layer from a WMTS Server.

![WMTS icon in QGIS](<../../../../.gitbook/assets/image (50)>)

Make sure the Layer option is highlighted and then select “New”. Under Connection Details type in a name for the service (e.g. Mapbox) and paste in the URL you copied from Mapbox. Hit OK.

![WMTS connection dialog](<../../../../.gitbook/assets/image (51)>)

This returns you to the “Add Layer(s) from a WM(T)S Server” dialog. The “Connect” button should now be highlighted. Click “Connect” and you should see your Mapbox style name listed.

![Connect to Mapbox WMTS](<../../../../.gitbook/assets/image (52)>)

Highlight the entry, give the layer a name for the QGIS Layers panel, then click Add and then Close.

![Map style added to QGIS](<../../../../.gitbook/assets/image (53)>)

Your Mapbox style will now be added to the layers panel in QGIS.

![Mapbox style in QGIS layers](<../../../../.gitbook/assets/image (54)>)

Notes:

* The style loads as a flat (raster) layer: you can pan and zoom, but you cannot toggle individual Mapbox style layers on/off from QGIS as you can in Mapbox Studio. Style behaviors such as scale-dependent rendering and labeling are preserved; zooming will show style changes.
* You can load other GIS data on top of the Mapbox style and change the projection. In the example shown, a shapefile of ocean debris landings was added and reprojected from Mapbox’s default Web Mercator to a Pacific-centric WGS 1984 PDC Mercator projection.

![Reprojected data over Mapbox style](<../../../../.gitbook/assets/image (55)>)
{% endstep %}
{% endstepper %}
