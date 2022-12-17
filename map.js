class GeoJsonMap {
  #map;
  #geoJsons;
  #geoJsonTiles;
  #initialZoom;

  #element;
  #maxZooms;
  #zoomStep;
  #onStyleFeature;
  #onFeatureHover;
  #onFeatureClick;

	constructor({
    element,
    geoJsons = [],
    maxZooms = 5,
    zoomStep = 1,
    onStyleFeature,
    onFeatureHover,
    onFeatureClick
  }) {
    this.#element = element;
    this.#geoJsons = geoJsons;
    this.#maxZooms = maxZooms;
    this.#zoomStep = zoomStep;
    this.#onStyleFeature = onStyleFeature;
    this.#onFeatureHover = onFeatureHover;
    this.#onFeatureClick = onFeatureClick;

    this.#initializeMap();
	}

  #highlightFeature(event) {
    this.#onFeatureHover(event);
  }
  
  #resetHighlight(event) {
    this.#geoJsonTiles.map(function(tile) {tile.resetStyle(event.target);});
  }
  
  #onEachFeature(feature, layer) {
    const that = this;

    layer.bindTooltip(`${feature.properties.NOME}`, {
        direction: 'top',
        sticky: true,
        opacity: 1,
        className: 'leaflet-tooltip-own' 
    });
  
    layer.on({
      mouseover: this.#highlightFeature.bind(this),
      mouseout: this.#resetHighlight.bind(this),
      click: function(event) {
        that.#onFeatureClick(event.target.feature, event);
      },
    });
  }
  
  #style(feature) {
    return this.#onStyleFeature(feature);
  }
  
  #createMap({ layers, center, maxBounds, legends }) {
    this.#map = L.map(this.#element, {
      center: center,
      layers: layers,
      scrollWheelZoom: false,
      attributionControl:false,
      maxBounds: maxBounds,
      zoomSnap: 1.2,
      doubleClickZoom: false,
      boxZoom: false,
    });

    const that = this;

    legends.forEach(function(legend) {
      legend.addTo(that.#map);
    });
  }

  #createCasesLegend() {
    const legend = L.control({position: 'topright'});
    legend.onAdd = function() {
      const root = document.createElement("div");
      root.classList.add("my-legend");
      
      let label =
      `<div class='legend-title'>Incidência de casos de câncer de mama, próstata e pulmão entre 1997 e 2018 nos municípios brasileiros</div>
      <div class='legend-scale'>
          <ul class='legend-labels'>
          <p>Sem dados:</p>
            <li><span style='background:#d0d0d0;'></span>Municípios sem dados </li>
          <br>
          <p>Escala de casos:</p>
            <li><span style='background:#FFCCCC;'></span>1 - 10 casos</li>
            <li><span style='background:#FF6666;'></span>11 - 50 casos</li>
            <li><span style='background:#FF3333;'></span>51 - 100 casos</li>
            <li><span style='background:#B30000;'></span>101 - 10000 casos</li>
          </ul>
      </div>`;

      root.innerHTML = label;

      return root;
    };

    return legend;
  }


  #initializeMap() {
    this.#geoJsonTiles = this.#geoJsons.map((json) => {
      return L.geoJSON(json, {
        style: this.#style.bind(this),
        onEachFeature: this.#onEachFeature.bind(this),
      });
    })

    let geoJsonTileBounds = L.polygon(this.#geoJsonTiles.map(function(layer) {
      const layerCenter = layer.getBounds().getCenter();

      return layerCenter;
    })).getBounds();
    
    this.#createMap({
      layers: this.#geoJsonTiles,
      center: geoJsonTileBounds.getCenter(),
      maxBounds: geoJsonTileBounds,
      zoomDelta: this.#zoomStep,
      legends: [
        this.#createCasesLegend()
      ]
    });

    this.#map.fitBounds(geoJsonTileBounds);
    
    this.#initialZoom = this.#map.getZoom();
    
    this.#map.setMinZoom(this.#initialZoom);
    this.#map.setMaxZoom(this.#initialZoom + this.#maxZooms);
    
  }
}
