Portrolio
A responsive portfolio layout with vertical overlay, dynamic height calculation, tooltips, colour schemes and more!

!! Please note, this installation has not been tried and tested; in terms of integrating into a pre-built project.

h2.Installation:

1) HTML

  - Portrolio relies on two div container wrappers. Wrap all of your Portrolio items with these 2 divs:

      <div class="portrolio" id="portrolioWrapper">
        <div class="portrolioInnerWrapper"> 

  - Each Portrolio item requires a div container with the class name 'item'. For example:

        <div class="item">
          <img src="img/portrolio/main/001.jpg" alt="Thailand" />
            <span class="title">Thailand</span>
        </div>

  (The caption/title is optional)
  


2) CSS

  - We have two stylesheets. portfolio.css and demo.css. 

  - demo.css is not required, this is for demo purposes only.
  - portfolio.css contains all necessary styles (including responsive) for Portrolio.
  


3) jQuery/JavaScript 

  - Integrate all of the required libraries/scripts into your project:
    - jQuery 2.0: http://jquery.com/download/
    - Media.match: http://github.com/weblinc/media-match
    - Inview: http://github.com/protonet/jquery.inview


  - Load the scripts in the following order:

    <script type="text/javascript" src="js/jquery-2.0.3.min.js"></script>
    <script type="text/javascript" src="js/jquery.inview.min.js"></script>
    <script type="text/javascript" src="js/media.match.min.js"></script>
    <script type="text/javascript" src="js/portrolio.1.1.1.min.js"></script>


  - Finally, initialise Portrolio:

      $('#portrolioWrapper').Portrolio();


  - Alternatively, define your Portrolio options:

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
