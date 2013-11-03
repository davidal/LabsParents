var DesenhoView = function(employee) {
 
   this.initialize = function() {
        this.el = $('<div/>');
        this.el.on('click', '.add-location-btn', this.addLocation);
        this.el.on('click', '.change-pic-btn', this.changePicture);
    };
 
    this.initialize();
 
 	this.render = function() {
	    this.el.html(DesenhoView.template(employee));
	    return this;
	};

	this.changePicture = function(event) {
	    //event.preventDefault();
	    console.log('getting camera');
	     app.showAlert("teste", "testeeeee");
	    if (!navigator.camera) {
	        app.showAlert("Camera API not supported", "Error");
	        return;
	    }
	    var options =   {   quality: 25,
	                        destinationType: Camera.DestinationType.DATA_URL,
	                        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
	                        mediaType: 0,
	                        targetWidth: 100,
  							targetHeight: 100 
	                    };
	 
	    navigator.camera.getPicture(
	        function(imageData) {
	            $('.employee-image', this.el).attr('src', "data:image/jpeg;base64," + imageData);
	        },
	        function() {
	            app.showAlert('Error taking picture', 'Error');
	        },
	        options);
	 
	    return false;
	};

	this.addLocation = function(event) {
	    event.preventDefault();
	    console.log('addLocation');
	    navigator.geolocation.getCurrentPosition(
	        function(position) {
	            $('.location', this.el).html(position.coords.latitude + ',' + 
	                                         position.coords.longitude);
	        },
	        function() {
	            alert('Error getting location');
	        });
	    return false;
	};

}
 
DesenhoView.template = Handlebars.compile($("#desenho-tpl").html());

