# Portrolio
A responsive portfolio layout with vertical overlay, dynamic height calculation, tooltips, colour schemes and more!

Demo: http://tonybarnes.me/showcase/code-snippets/portrolio/demo/index.html

!! Please note, this installation has not been tried and tested; in terms of integrating into a pre-built project.


## About

Portrolio was primarily built to provide a nice 'vertical showcase reel' style view/layout for mobile devices. This quickly evolved into a portfolio or gallery-type showcase page plugin with tooltips and dimming; supporting large and small scale screens. Features:

- Great for Portfolio-type pages; for example linking to individual project pages.
- Responsive - 3 main breakpoints
- Responsive/dynamic height calculation and resizing
- Responsive Vertical Overlay (scrolling a list of vertical images will always show 3x images, with a fixed overlay. This overlay will show/hide depending on the before() and after() elements from the overall portrolio div wrapper (these elements can be changed in the plugin options)
- Active Hover States with Dimming, ToolTip and Popup
- Columns handler (3,6)
- Colour schemes (light/dark blue, black, white, grey, or none)

This is my first jQuery plugin, so it's not perfect! This is a work in progress. 

I would love to hear about any feedback - suggestions, improvements and bugs. Please contact me here: tony@tonybarnes.me


## Requirments
- jQuery 2.0: http://jquery.com/download/
- Media.match: http://github.com/weblinc/media-match
- Inview: http://github.com/protonet/jquery.inview


## Installation and usage

### 1. HTML

a) Portrolio relies on two div container wrappers. Wrap all of your Portrolio items with these 2 divs:
<div class="portrolio" id="portrolioWrapper">
	<div class="portrolioInnerWrapper"> 

b) Each Portrolio item requires a div container with the class name 'item'. For example:
<div class="item">
	<img src="img/portrolio/main/001.jpg" alt="Thailand" />
	<span class="title">Thailand</span>
</div>


### 2) CSS

We have two stylesheets - portrolio.css and demo.css.

- demo.css is not required, this is for demo purposes only.
- portrolio.css contains all of the necessary styles (including responsive) for Portrolio.
- compressed and uncompressed versions are included.
  

### 3) jQuery/JavaScript 

a) Integrate all of the required libraries/scripts into your project:
	- jQuery 2.0: http://jquery.com/download/
	- Media.match: http://github.com/weblinc/media-match
	- Inview: http://github.com/protonet/jquery.inview


b) Load the scripts in the following order:
	<script type="text/javascript" src="js/jquery-2.0.3.min.js"></script>
	<script type="text/javascript" src="js/jquery.inview.min.js"></script>
	<script type="text/javascript" src="js/media.match.min.js"></script>
	<script type="text/javascript" src="js/portrolio.1.1.2.min.js"></script>


c) Finally, initialise Portrolio:
$('#portrolioWrapper').Portrolio();


d) Alternatively, define your Portrolio options:
$('#portrolioWrapper').Portrolio({
	columnsNo:3, //3, 6
	activeHoverStates: {
		dim:false,
		toolTip:true,
		toolTipSlide:false,
		popup:true
	},
	//colorScheme:'darkBlue'
	//colorScheme:'lightBlue'
	//colorScheme:'black'
	//colorScheme:'white'
	//colorScheme:'grey'
	//colorScheme:'none'
});
      
      
## Testing, compatibility

In progress. Initial testing shows the majority of features working in the following:

- Mac OS X:
  - Chrome 27.0.1453.116
  - Firefox 22.0
  - Safari 6.0.4
  - Opera 12.15

- Windows OS 7 64-bit:
  - Chrome 28.0.1500.72
  - Firefox 22.0
  - Safari 5.1.7
  - Opera 12.15
  - IE10 10.0.9200
  - IE9
  - (IE8 and below are not supported)

- Mobile:
  - iPhone 4 portrait Safari
  - iPhone 4 landscape Safari
  - iPhone 5 portrait Safari
  - iPhone 5 landscape Safari
  - iPhone 5 portrait Chrome
  - iPhone 5 landscape Chrome

A full testing document is avaliable here:
- https://docs.google.com/spreadsheet/pub?key=0Ao2Okl00EaifdHdJQmZZWld5eGp0Nlh2b09oZXMwUGc&output=html


## Roadmap

- Image popups, thumbnails
- Cleaner markup
- Further testing, QA
- Different versions of the plugin (e.g. 'skeleton' versions)
- More Tooltip options

      
## Contributions

Contributions are very welcome! Please contact me to discuss: tony@tonybarnes.me

