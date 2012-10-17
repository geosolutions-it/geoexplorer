
/**
 *  this class contains info about cruise configurations
 */
var Configuration = function( config, builder ){
	this.builder_ = builder;
	this.config_ = config;
};

Configuration.prototype.setParam = function(name, value){
	this.config_[name]=value;
};

Configuration.prototype.build = function(){
	return this.builder_.toString( this.config_ );
};

/**
 *  this class is a builder for Configuration
 */
var ConfigurationBuilder =  {
	
	
	createVehicleConfiguration: function( selected ){
		var result = '';
		
		for (var i=0; i<selected.length; i++){
			
			var item = selected[i].data;
			
			result += '[';
			result += 'true,';
			result +=  '"' + item.text + '",';
			result +=  '"' + item.url + '",';
			result += 'false';
			result += ']';
			
			if ( i < selected.length - 1){
				result += ', ';
			}
		}
		
		return result;
	},
	
	createModelConfiguration: function( selected ){
		var result = '';
		for (var i=0; i<selected.length; i++){
			
			var item = selected[i].data;
			
			result += '{';
					result +=  '"format": "' + item.format + '",'
				             + '"group": "' + item.group + '",'
				             + '"name": "' + item.name + '",'
				             + '"opacity": ' + item.opacity + ','
				             + '"selected": ' + item.selected + ','
				             + '"source": "'+ item.source + '",'
				             + '"title":"' + item.title + '",'
				             + '"transparent": ' + item.transparent + ','
				             + '"visibility": ' + item.visibility + ','
				             + '"ratio": ' + item.ratio +  ','
				             + '"elevation": ' + item.elevation +   ','
				             + '"styles":"' + item.styles +  '"';
				if ( item.style ){
					result += ', "style":"' + item.style + '"';
				}
				
			result += '}';
			
			if ( i < selected.length - 1){
				result += ', ';
			}
		}
		
		return result;
	},
	
	createBackgroundConfiguration: function( selected ){
		var result = '';
		// var selected =  selector.toMultiselect.store.data.items;
		
		for (var i=0; i<selected.length; i++){
			
			var item = selected[i].data;
			
			result += '{';
			result +=  '"format": "image/jpeg",'
		             + '"transparent": false,'
		             + '"source": "GEOSIII",'
		             + '"group": "background",'
		             + '"name": "' + item.value +  '",'
		             + '"title": "' + item.text + '"'
			result += '}';
			
			if ( i < selected.length - 1){
				result += ', ';
			}
		}
		
		return result;
	},
	
	create: function( params ){
		return new Configuration( params, this );
	},
	
	toString: function( params ){
			var conf = new Object;
			conf.name = params.name;
			conf.description = params.name;
			conf.blob = '{ '
						+ '"cruiseName":"'+ params.name + '",'
						+ '"timeRange":["'+ params.timeRange[0] 
								+ '","'+ params.timeRange[1]  + '"],'
					    + '"timeStep":"' + params.timeStep  + '",'
						+ '"timeFrameRate":"' + params.timeFrameRate + '",'
						+ '"timeUnits":"' + params.timeUnits + '",'
						 + '"models":['+ this.createModelConfiguration( params.models ) + '],'
						+ '"backgrounds":['+ this.createBackgroundConfiguration( params.backgrounds ) + '],'
				 	   + '"watermarkUrl":"'+ params.watermarkUrl + '",'
						+ '"watermarkPosition":"'+ params.watermarkPosition + '",'

						+ '"bounds":['  
						+	params.bounds[0] + ','
						+   params.bounds[1] + ','
						+   params.bounds[2] + ','
						+   params.bounds[3]
						+ '],'

					   + '"vehicleSelector": {' 
					   +	'"data":['
								+ this.createVehicleConfiguration( params.vehicles )
					   + '],'
					   +	'"refreshIconPath": "../theme/app/img/silk/arrow_refresh.png",'  
					   +	'"geoserverBaseURL": "' + params.geoserverBaseUrl + '",'		
					   +	'"gliderPropertyName": "glider_name",'	
					   +	'"cruisePropertyName": "cruise_name",'	
					   +	'"glidersFeatureType": "GlidersTracks",'	
					   +	'"glidersPrefix": "it.geosolutions",'
					   +    '"wfsVersion": "1.1.0"'
					   + '}'					
					+' }';					
			conf.owner = 'admin';
			return conf;
	}
};