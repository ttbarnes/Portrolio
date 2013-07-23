# Portrolio
A responsive portfolio layout with vertical overlay, dynamic height calculation, tooltips, colour schemes and more!

!! Please note, this installation has not been tried and tested; in terms of integrating into a pre-built project.


## About:

Portrolio was primarily built to provide a nice 'vertical showcase reel' style view/layout for mobile devices. This quickly evolved into a portfolio or gallery-type showcase page plugin with tooltips and dimming; supporting large and small scale screens. Features:

- Great for Portfolio-type pages; for example linking to individual project pages.
- Responsive - 3 main breakpoints
- Responsive/dynamic height calculation and resizing
- Responsive Vertical Overlay (scrolling a list of vertical images will always show 3x images, with a fixed overlay. This overlay will show/hide depending on the before() and after() elements from the overall portfolio div wrapper (these elements can be changed in the plugin options)
- Active Hover States with Dimming and ToolTip (also with sliding)
- Columns handler (2,3,6)
- Colour schemes (light/dark blue, black, white, grey, or none)

This is my first jQuery plugin, so it's not perfect! This is a work in progress. 

I would love to hear about any feedback - suggestions, improvements and bugs. Please contact me here: tony@tonybarnes.me


## Requirments

a) jQuery 2.0: http://jquery.com/download/
b) Media.match: http://github.com/weblinc/media-match
c) Inview: http://github.com/protonet/jquery.inview


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
    <script type="text/javascript" src="js/portrolio.1.1.1.min.js"></script>


  c) Finally, initialise Portrolio:

      $('#portrolioWrapper').Portrolio();


  d) Alternatively, define your Portrolio options:

      $('#portrolioWrapper').Portrolio({
        columnsNo:3, //3, 6
  			activeHoverStates: {
					dim:false,
					toolTip:true,
					toolTipSlide:false,
				},
				//colorScheme:'darkBlue'
				//colorScheme:'lightBlue'
				//colorScheme:'black'
				//colorScheme:'white'
				//colorScheme:'grey'
				//colorScheme:'none'
      });
      
      
## Testing, compatibility:

In progress. Initial testing shows the majority of features working in:

- asfasdf
- - asfasdf
- - asfasdf
- - asfasdf
- - asfasdf

## Roadmap:

- Image popups, thumbnails
- Cleaner markup
- Further testing, QA
- Different versions of the plugin (e.g. 'skeleton' versions)
- More Tooltip options

      
## CONTRIBUTE:

Contributions are very welcome! Please contact me to discuss.


