export const PinIcon = (props) => {
  const svg = `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" x="0px" y="0px" viewBox="0 0 87 123" style="enable-background:new 0 0 44 62" xml:space="preserve"><style type="text/css"><![CDATA[
	.st0{fill-rule:evenodd;clip-rule:evenodd;fill:${props.colorStroke};}
	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:${props.colorFill};stroke:${props.colorStroke};stroke-width: 3px;
  stroke-linejoin: bevel;}
]]></style><g><path class="st1" d="M27.81,96.57c4.42,7.04,9.2,15.57,13.92,23.86c1.75,3.06,3.33,3.52,5.43-0.11c4.56-7.91,9.04-16.1,13.76-23.74 c14.33-23.19,37.78-45.8,19.13-77.01C63.49-8.14,18.45-5.18,4.98,20.62C-10.46,50.19,13.65,74.03,27.81,96.57L27.81,96.57z"/><path class="st0" d="M43.46,25.59c9.31,0,16.86,7.55,16.86,16.86s-7.55,16.86-16.86,16.86c-9.31,0-16.86-7.55-16.86-16.86 S34.15,25.59,43.46,25.59L43.46,25.59z"/></g></svg>`;

  const toReturn = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  return toReturn;
};
