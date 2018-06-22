mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/devseed/cjfwup8c518vc2slcclpfw3sp',
  center: [0, 0],
  zoom: 2,
  maxZoom: 22
});

var draw = new MapboxDraw({
  displayControlsDefault: false,
  clickBuffer: 3,
  controls: {
    polygon: true,
    trash: true,
    combine_features: true,
    uncombine_features: true
  }
});
map.addControl(draw, 'top-left');
var objlayers = {};
var queries = function() {
  var vars = [],
    hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
};

function print(result) {
  map.fitBounds(turf.bbox(result));
  menu(result, objlayers);
  draw.add(result);
}
map.on('draw.create', updategeo);
map.on('draw.delete', updategeo);
map.on('draw.update', updategeo);

function menu(geo, objlayers) {
  var table = document.getElementById("table");
  $('#menu').empty();
  //Sort by sez_Country
  sortObj(geo.features, 'sez_Country')
  for (var i = 0; i < geo.features.length; i++) {
    var name = geo.features[i].properties.sez_Zone;
    var link = document.createElement('a');
    link.href = '#';
    link.textContent = name;
    link.b = turf.bbox(geo.features[i]);
    link.objectId = geo.features[i].properties['@id'];
    link.sez_name = geo.features[i].properties.sez_Zone;

    link.onclick = function(e) {
      // map;
      map.fitBounds(this.b);
      $('#entry_1').attr('value', this.objectId);
      $('#sez_name').text( this.sez_name);
      e.preventDefault();
      e.stopPropagation();
    };
    var row = table.insertRow(i + 1);
    //Agregar mas colums
    row.insertCell(0).innerHTML = geo.features[i].properties.sez_Region;
    row.insertCell(1).innerHTML = geo.features[i].properties.sez_Country;
    row.insertCell(2).innerHTML = geo.features[i].properties['sez_Zone ID'];
    row.insertCell(3).appendChild(link);
    row.insertCell(4).innerHTML = geo.features[i].properties['sez_Size (ha)'];
    row.insertCell(5).innerHTML = geo.features[i].properties['sez_Size OSM (ha)'];
<<<<<<< HEAD
    row.insertCell(6).innerHTML = "";
=======
>>>>>>> master
  }
}

//Loading files
function loadfile(input) {
  fr = new FileReader();
  fr.onload = function(e) {
    var str = e.target.result;
    print(JSON.parse(str));
  };
  fr.readAsText(input.files[0]);
}

$(document).ready(function($) {
  var url = queries()['url'];
  $.getJSON(url, function(result) {
    setTimeout(function() {
      print(result);
    }, 2000)
  });
});

function updategeo(e) {
  var data = draw.getAll();
  data.features.forEach(function(f) {
    delete f.id;
    delete f.properties.id;
  });
  var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
  document.getElementById('export').setAttribute('href', 'data:' + convertedData);
  document.getElementById('export').setAttribute('download', 'data.geojson');
}

function sortObj(list, key) {
  function compare(a, b) {
<<<<<<< HEAD
    a = a.properties[key];
    b = b.properties[key];
    var type = (typeof(a) === 'string' ||
      typeof(b) === 'string') ? 'string' : 'number';
    var result;
    if (type === 'string') result = a.localeCompare(b);
    else result = a - b;
    return result;
=======
      a = a.properties[key];
      b = b.properties[key];
      var type = (typeof(a) === 'string' ||
                  typeof(b) === 'string') ? 'string' : 'number';
      var result;
      if (type === 'string') result = a.localeCompare(b);
      else result = a - b;
      return result;
>>>>>>> master
  }
  return list.sort(compare);
}
