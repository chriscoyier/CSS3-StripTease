function striptease() {
		
	//remove conflicts with other javascript libraries
	var $ = jQuery;
	
	var div = document.createElement('div'),
	    ref = document.getElementsByTagName('base')[0] || 
	          document.getElementsByTagName('script')[0];
	
	div.innerHTML = '&shy;<style>						   \
	* {													   \
	  -webkit-border-radius: 0              !important;    \
	  -moz-border-radius:    0              !important;    \
	  border-radius:         0              !important;    \
                                                           \
	  -webkit-box-shadow: 0                 !important;    \
	  -moz-box-shadow:    0                 !important;    \
	  box-shadow:         0                 !important;    \
                                                           \
	  -webkit-transition: none              !important;    \
	  -moz-transition:    none              !important;    \
	  -ms-transition:     none              !important;    \
	  -o-transition:      none              !important;    \
	  transition:         none              !important;    \
                                                           \
	  -webkit-transform: none               !important;    \
	  -moz-transform:    none               !important;    \
	  -ms-transform:     none               !important;    \
	  -o-transform:      none               !important;    \
	  transform:         none               !important;    \
                                                           \
	  -webkit-animation: none               !important;    \
	  -moz-animation:    none               !important;    \
	  animation:         none               !important;    \
                                                           \
	  text-shadow: none                     !important;    \
                                                           \
	  -webkit-box-shadow: none              !important;    \
	  -moz-box-shadow:    none              !important;    \
	  box-shadow:         none              !important;    \
                                                           \
	  -webkit-background-size: 100% 100%    !important;    \
	  -moz-background-size:    100% 100%    !important;    \
	  background-size:         100% 100%    !important;    \
                                                           \
	  -webkit-background-clip: border-box   !important;    \
	  -moz-background-clip:    border-box   !important;    \
	  background-clip:         border-box   !important;    \
                                                           \
	  -webkit-background-origin: 0 0        !important;    \
	  -moz-background-origin:    0 0        !important;    \
	   background-origin:        0 0        !important;    \
                                                           \
	  -webkit-border-image: none            !important;    \
	  -moz-border-image:    none            !important;    \
	  border-image:         none            !important;    \
                                                           \
	  -ms-filter: none                      !important;    \
	  filter:     none                      !important;    \
	}                                                      \
	</style>';                                             
	
	ref.parentNode.insertBefore(div,ref);
	
	$("*").each(function() {
	
		// Loop over every single element and test for like
		// $(this).css("background-image")   [ starts with]  "rgba" or "-webkit-gradient" and stuff
		
	});
	
};