import { onRender } from '../common';


const DEFAULT_MAP_OPTIONS = {
  center: new naver.maps.LatLng(37.5666805, 126.9784147),
  zoom: 15,
  mapTypeId: naver.maps.MapTypeId.NORMAL,
};

const Map = ({
  id = 'map',
  width = '100vw',
  height = '80vh',
  options = DEFAULT_MAP_OPTIONS,
} = {
    id: 'map',
    width: '100vw',
    height: '80vh',
    options: DEFAULT_MAP_OPTIONS,
  }) => {
  let map;

  onRender(() => {
    map = new naver.maps.Map(id, options);
  });

  return `<div id="${id}" style="width:${width};height:${height};"></div>`;
}

export default Map;
