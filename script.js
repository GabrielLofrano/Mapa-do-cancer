document.addEventListener("DOMContentLoaded", async function() {
  function stateInitialsToName(initial) {
    const list = {
      'AC': 'Acre',
      'AL': 'Alagoas',
      'AP': 'Amapá',
      'AM': 'Amazonas',
      'BA': 'Bahia',
      'CE': 'Ceará',
      'DF': 'Distrito Federal',
      'ES': 'Espírito Santo',
      'GO': 'Goiás',
      'MA': 'Maranhão',
      'MT': 'Mato Grosso',
      'MS': 'Mato Grosso do Sul',
      'MG': 'Minas Gerais',
      'PA': 'Pará',
      'PB': 'Paraíba',
      'PR': 'Paraná',
      'PE': 'Pernambuco',
      'PI': 'Piauí',
      'RJ': 'Rio de Janeiro',
      'RN': 'Rio Grande do Norte',
      'RS': 'Rio Grande do Sul',
      'RO': 'Rondônia',
      'RR': 'Roraima',
      'SC': 'Santa Catarina',
      'SP': 'São Paulo',
      'SE': 'Sergipe',
      'TO': 'Tocantins'
    };
    
    return list[initial].toLowerCase();
  }

  const states = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
    ];
  const data = await (await fetch('./index-data.json')).json();
  const geoJsons = await Promise.all(states.map(function(item) {return fetch(`states/${item}.json`).then(function(res) {return res.json();})}));

  function onStyleFeature(feature) {
    const cityName = feature.properties.NOME.toLowerCase();
    const stateInitials = feature.properties.UF;

    const dataHandler = data[stateInitialsToName(stateInitials)] || null;
    const total = !dataHandler ? null : dataHandler[cityName]?.total || null;

    const color = total === null ? "d0d0d0" : total >= 101 ? "B30000" : total >= 51 ? "FF3333" : total >= 11 ? "FF6666" : "FFCCCC";

    return {
      opacity: 1,
      fillColor: `#${color}`,
      weight: 0.3,
      stroke: true,
      color: "white",
      fillOpacity: 1,
    }
  }

  function onFeatureHover(event) {
    const layer = event.target;

    const cityName = layer.feature.properties.NOME.toLowerCase();
    const stateInitials = layer.feature.properties.UF;
    
    const dataHandler = data[stateInitialsToName(stateInitials)] || null;
    const total = !dataHandler ? null : dataHandler[cityName]?.total || null;

    const color = total === null ? "7c7c7c" : total >= 1000 ? "7d0101" : total >= 100 ? "8a1c1c" : total >= 10 ? "692b2b" : "705b5b" 

    layer.setStyle({
      fillColor: `#${color}`
    });
  }

  function onFeatureClick(feature, event) {
    const cityName = feature.properties.NOME.toLowerCase();
    const stateInitials = feature.properties.UF;
    
    if (!data[stateInitialsToName(stateInitials)][cityName]) {
      return;
    }
    
    const total = data[stateInitialsToName(stateInitials)][cityName]?.total || 0;
    const death = data[stateInitialsToName(stateInitials)][cityName]?.death || 0;

    const modalTitle = document.querySelector("#modal-title");
    modalTitle.innerHTML = `${cityName}, ${stateInitialsToName(stateInitials)}`;
    
    const modalBody = document.querySelector("#modal-body");
    modalBody.innerHTML = `Numero de casos: ${total}<br>Numero de obitos: ${death}`;
    
    const modalLink = document.querySelector("#modal-link");
    modalLink.href = `/testemapa/detalhes.php?cidade=${cityName}&estado=${stateInitialsToName(stateInitials)}`;

    $('#modal').modal();
  }

  const map = new GeoJsonMap({
    geoJsons: geoJsons,
    element: document.querySelector("#map"),
    onStyleFeature: onStyleFeature,
    onFeatureHover: onFeatureHover,
    onFeatureClick: onFeatureClick
  });

  const citiesSearchInput = document.querySelector("#input-cities-options");
  const citiesSearchOptions = document.querySelector("#cities-options");

  let citiesOptions = [];

  Object.keys(data).forEach(function(state) {
    Object.keys(data[state]).forEach(function(city) {
      citiesOptions.push(`<option value="${city.replace(/\b\w/g, function(c) {return c.toUpperCase();})}, ${state.replace(/\b\w/g, function(c) {return c.toUpperCase();})}"/>`);
    });
  });

  citiesSearchOptions.innerHTML = citiesOptions.join(" ");

  citiesSearchInput.addEventListener("input", function(event){
    let [cityName, state] = event.target.value.split(', ');
    cityName = cityName.toLowerCase();
    state = state.toLowerCase();

    if (!data[state][cityName]) {
      return;
    }

    const total = data[state][cityName]?.total || 0;
    const death = data[state][cityName]?.death || 0;

    const modalTitle = document.querySelector("#modal-title");
    modalTitle.innerHTML = `${cityName}, ${state}`;
    
    const modalBody = document.querySelector("#modal-body");
    modalBody.innerHTML = `Numero de casos: ${total}<br>Numero de obitos: ${death}`;
    
    const modalLink = document.querySelector("#modal-link");
    modalLink.href = `/testemapa/detalhes.php?cidade=${cityName}&estado=${state}`;

    $('#modal').modal();
  });
});