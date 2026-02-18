# The Battle of Interactive Geographic Visualization Part 4

PYTHON. DATA SCIENCE. GEOVISUALIZATION.

Using the Altair Package to Create Beautiful, Interactive Geoplots

![](<../../../../.gitbook/assets/image (15)>)\
Photo by [Clay Banksarrow-up-right](https://unsplash.com/@claybanks?utm_source=medium\&utm_medium=referral) on [Unsplasharrow-up-right](https://unsplash.com/?utm_source=medium\&utm_medium=referral)

## Where we left off

In this series, three ways of making beautiful geoscatter plots were identified:

* Holoviews — [The Battle of Interactive Geographic Visualization Part 1 — Interactive Geoplot Using One Line of Codearrow-up-right](https://towardsdatascience.com/the-battle-of-interactive-geographic-visualization-part-1-interactive-geoplot-using-one-line-of-8214e9ed1bb4)
* Plotly Express — [The Battle of Interactive Geographic Visualization Part 2- Interactive Geoplot Using One Line of Codearrow-up-right](https://towardsdatascience.com/the-battle-of-interactive-geographic-visualization-part-2-interactive-geoplot-using-one-line-of-2118af59a77c)
* Plotly Go — [The Battle of Interactive Geographic Visualization Part 3- Plotly Graph Objects (Go)arrow-up-right](https://towardsdatascience.com/the-battle-of-interactive-geographic-visualization-part-3-plotly-graph-objects-go-c3d3f2a00132)

This article shows how to create a similar plot using Altair.

## Altair as a package

Altair is a high-level declarative visualization library (similar in spirit to Plotly Express, seaborn, holoviews, and ggplot). It uses a graphical grammar that makes combining charts straightforward (similar to composing words into sentences). This makes Altair's syntax close to ggplot, which may be convenient for R users.

Altair also provides an “interaction grammar” that simplifies creating interactions between widgets and plots or between multiple plots. For example, linked interactions across chart views are easy to specify.

When resizing plots, Altair preserves elements of the plot layout as more categories are added, which helps avoid distortions that can occur with some other libraries.

## Coding

### Preliminaries

Load the required packages:

{% code title="imports.py" %}
```python
import pandas as pd
import altair as alt
import geopandas as gpd
from shapely.geometry import Point

alt.renderers.enable('default')  # Allows the map to be displayed in the notebook/Jupyterlab
```
{% endcode %}

### Load the dataset

Load the dataset:

{% code title="load_data.py" %}
```python
df = pd.read_csv('data/Coffee Brands Footprint.csv', index_col=0)
df.head()
```
{% endcode %}

![](<../../../../.gitbook/assets/image (16)>)\
Image by Author: The first five observations of our dataset.

{% hint style="warning" %}
A bit of warning when using Altair: Altair uses data transformers and requires all columns to be JSON-serializable. Do not include geometric (non-JSON-serializable) data types among your dataframe columns.
{% endhint %}

Unlike Plotly, with Altair you typically import your own shapefiles to provide map boundaries. GADM (https://gadm.org/) is a common source for shapefiles.

### Load the shapefile

Load a GeoDataFrame and create a geoshape for the Philippines:

{% code title="load_shapefile.py" %}
```python
# Load the geodataframe
gdf = gpd.read_file('Shapefiles/gadm36_PHL_shp/gadm36_PHL_1.shp')

# Options when it comes to boundaries of the shapefile
philippines = alt.Chart(gdf).mark_geoshape(stroke='white', fill='lightgray').encode().properties(
    width=400,
    height=800
).project('mercator')

philippines
```
{% endcode %}

![](<../../../../.gitbook/assets/image (17)>)\
Image by the Author: Shapefile of the Philippines displayed in Jupyterlab

Notes on the options used:

* alt.Chart — creates an Altair chart from the supplied dataset (here a GeoDataFrame).
* mark\_geoshape — instructs Altair to render geographic shapes.
* stroke — boundary line color for the geoshape.
* fill — fill color for the geoshape.
* encode — maps dataframe columns to visual attributes.
* properties — set width, height, and other figure properties.
* project — projection type (e.g., 'mercator').

### Plotting the geoscatterplot

Create the scatter points using longitude and latitude columns:

{% code title="points.py" %}
```python
points = alt.Chart(df).mark_circle(opacity=0.7).encode(
    longitude='lng:Q',
    latitude='lat:Q',
    size=alt.value(10),
    color='brand',
    tooltip=['brand', 'vicinity']
)

points
```
{% endcode %}

![](<../../../../.gitbook/assets/image (18)>)\
GIF by Author: Scatter points generated are not bounded by the shapefile.

Notes:

* For geoscatterplots, supply longitude and latitude with the format "column\_name:Q" (e.g., `lng:Q`). The `:Q` designates a quantitative field and is required.
* Use `alt.value(...)` when providing a constant value (e.g., fixed point size).

### Combining the two plots

Altair makes composing charts straightforward. For example, to show the geoshape and the points side-by-side / combined:

{% code title="combine.py" %}
```python
points | philippines + points
```
{% endcode %}

![](<../../../../.gitbook/assets/image (19)>)\
GIF by the Author: Two graphs can be added by simply using the ‘+’ sign.

## Final remarks

Altair is a high-level declarative library whose ease of use is comparable to Plotly Express. Because it can read and render imported shapefiles with fine boundaries, it can produce elegant maps—especially where lower-level boundaries matter.

Altair is effective for geoscatterplots and is also well suited for choropleths. Stay tuned for more comparisons of choropleth creation across different packages.

Thanks for reading!

Please check out the related articles:

* [The Battle of Interactive Geographic Visualization Part 1 — Interactive Geoplot Using One Line of Codearrow-up-right](https://towardsdatascience.com/the-battle-of-interactive-geographic-visualization-part-1-interactive-geoplot-using-one-line-of-8214e9ed1bb4)
* [The Battle of Interactive Geographic Visualization Part 2- Interactive Geoplot Using One Line of Codearrow-up-right](https://towardsdatascience.com/the-battle-of-interactive-geographic-visualization-part-2-interactive-geoplot-using-one-line-of-2118af59a77c)
* [The Battle of Interactive Geographic Visualization Part 3- Plotly Graph Objects (Go)arrow-up-right](https://towardsdatascience.com/the-battle-of-interactive-geographic-visualization-part-3-plotly-graph-objects-go-c3d3f2a00132)
* [Mapping Your Favorite Coffee Shop in the Philippines using Google Places API and Foliumarrow-up-right](https://towardsdatascience.com/mapping-your-favorite-coffee-shop-in-the-philippines-using-google-places-api-and-folium-2f9d5ad697bf?source=your_stories_page----------------------------------------)
* [Visualizing the Philippines’ Population Density using GeoPandasarrow-up-right](https://towardsdatascience.com/psvisualizing-the-philippines-population-density-using-geopandas-ab8190f52ed1?source=your_stories_page----------------------------------------)

## References

* [STACKOVERFLOW: Altair vs Plotly Expressarrow-up-right](https://stackoverflow.com/questions/59845407/plotly-express-vs-altair-vega-lite-for-interactive-plots)

Last updated 3 years ago
