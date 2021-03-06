/**
 * Copyright (c) 2009-2010 The Open Planning Project
 */
/*
	NOTE: configuration customization could override
	these strings
*/
GeoExt.Lang.add("en", {
    "GeoExplorer.prototype": {
        zoomSliderText: "<div>Zoom Level: {zoom}</div><div>Scale: 1:{scale}</div>",
        loadConfigErrorText: "Trouble reading saved configuration: <br />",
        loadConfigErrorDefaultText: "Server Error.",
        xhrTroubleText: "Communication Trouble: Status ",
        layersText: "Layers",
        titleText: "Title",
        zoomLevelText: "Zoom level",
        saveErrorText: "Trouble saving: ",
        bookmarkText: "Bookmark URL",
        permakinkText: "Permalink",
        appInfoText: "Credits",
        aboutText: "About GeoExplorer",
        mapInfoText: "Map Info",
        descriptionText: "Description",
        contactText: "Contact",
        aboutThisMapText: "About this Map",
        cleanTempFilesTooltip: "Cleanup temp files",
        cleanTempFilesConfirmMsg: "Are you sure you want to cleanup all temp files?",
		resetButtonTooltip: "Reset Page",
		helpButtonTooltip: "Help",
        searchTabTitle : "Search",
        viewTabTitle : "View",
        portalTabTitle : "Portal"
    },
    
    "GeoExplorer.Composer.prototype": {
        loadMapText: "Import KML or Map file",
        saveMapText: "Export Map",
		loadMapEmptyText: "Select a KML or a Map context file",
		loadMapUploadText: "Uploading your file...",
		uploadText: "Upload",
		loadMapWindowTitle: 'File Upload Form',
		loadMapErrorText:'File Upload Error',
        toolsTitle: "Choose tools to include in the toolbar:",
        previewText: "Preview",
        backText: "Back",
        nextText: "Next",
        loginText: "Login",
        loginErrorText: "Invalid username or password.",
        userFieldText: "User",
        passwordFieldText: "Password",
        fullScreenText: "Full Screen"
    },

    "gxp.menu.LayerMenu.prototype": {
        layerText: "Layer"
    },

    "gxp.plugins.AddLayers.prototype": {
        addActionMenuText: "Add layers",
        addActionTip: "Add layers",
        addServerText: "Add a New Server",
        addButtonText: "Add layers",
        untitledText: "Untitled",
        addLayerSourceErrorText: "Error getting WMS capabilities ({msg}).\nPlease check the url and try again.",
        availableLayersText: "Available Layers",
        expanderTemplateText: "<p><b>Abstract:</b> {abstract}</p>",
        panelTitleText: "Title",
        layerSelectionText: "View available data from:",
        doneText: "Done",
        removeFilterText: "Clear filter", 
        filterEmptyText: "Filter",
        uploadText: "Upload Data"
    },
    
	 "gxp.plugins.RemoveOverlays.prototype": {
	    removeOverlaysMenuText: "Remove overlays",
	    removeOverlaysActionTip: "Removes all overlays from the map",
	    removeOverlaysConfirmationText: "Are you sure you want to remove all loaded overlays from the map?"
    }, 

    "gxp.plugins.BingSource.prototype": {
        title: "Bing Layers",
        roadTitle: "Bing Roads",
        aerialTitle: "Bing Aerial",
        labeledAerialTitle: "Bing Aerial With Labels"
    },

    "gxp.plugins.GoogleEarth.prototype": {
        apiKeyPrompt: "Please enter the Google API key for ",
        menuText: "3D Viewer",
        tooltip: "Switch to 3D Viewer"
    },
    
    "gxp.plugins.GoogleSource.prototype": {
        title: "Google Layers",
        roadmapAbstract: "Show street map",
        satelliteAbstract: "Show satellite imagery",
        hybridAbstract: "Show imagery with street names",
        terrainAbstract: "Show street map with terrain"
    },

    "gxp.plugins.LayerProperties.prototype": {
        menuText: "Layer Properties",
        toolTip: "Layer Properties"
    },
    
    "gxp.plugins.LayerTree.prototype": {
        rootNodeText: "Layers",
        overlayNodeText: "Default",
        baseNodeText: "Background"
    },

    "gxp.plugins.Legend.prototype": {
        menuText: "Show Legend",
        tooltip: "Show Legend"
    },    
    
    "gxp.plugins.Measure.prototype": {
        lengthMenuText: "Length",
        areaMenuText: "Area",
        lengthTooltip: "Measure length",
        areaTooltip: "Measure area",
        measureTooltip: "Measure"
    },

    "gxp.plugins.Navigation.prototype": {
        menuText: "Pan Map",
        tooltip: "Pan Map"
    },

    "gxp.plugins.NavigationHistory.prototype": {
        previousMenuText: "Zoom To Previous Extent",
        nextMenuText: "Zoom To Next Extent",
        previousTooltip: "Zoom To Previous Extent",
        nextTooltip: "Zoom To Next Extent"
		
    },

    "gxp.plugins.OSMSource.prototype": {
        title: "OpenStreetMap Layers",
        mapnikAttribution: "Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>",
        osmarenderAttribution: "Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>"
    },

    "gxp.plugins.Print.prototype": {
        menuText: "Print Map",
        tooltip: "Print Map",
        previewText: "Print Preview",
        notAllNotPrintableText: "Not All Layers Can Be Printed",
        nonePrintableText: "None of your current map layers can be printed",
        notPrintableLayersText: "Following layers can not be printed:"
    },

    "gxp.plugins.MapQuestSource.prototype": {
        title: "MapQuest Layers",
        osmAttribution: "Tiles Courtesy of <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        osmTitle: "MapQuest OpenStreetMap",
        naipAttribution: "Tiles Courtesy of <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        naipTitle: "MapQuest Imagery"
    },

    "gxp.plugins.RemoveLayer.prototype": {
        removeMenuText: "Remove layer",
        removeActionTip: "Remove layer"
    },

    "gxp.plugins.WMSGetFeatureInfo.prototype": {
        infoActionTip: "Get Feature Info",
        popupTitle: "Feature Info"
    },

    "gxp.plugins.Zoom.prototype": {
        zoomInMenuText: "Zoom In",
        zoomOutMenuText: "Zoom Out",
        zoomInTooltip: "Zoom In",
        zoomOutTooltip: "Zoom Out"
    },
    
    "gxp.plugins.ZoomToExtent.prototype": {
        menuText: "Zoom To Max Extent",
        tooltip: "Zoom To Max Extent"
    },
    
    "gxp.plugins.ZoomToDataExtent.prototype": {
        menuText: "Zoom to layer extent",
        tooltip: "Zoom to layer extent"
    },

    "gxp.plugins.ZoomToLayerExtent.prototype": {
        menuText: "Zoom to layer extent",
        tooltip: "Zoom to layer extent"
    },
    
    "gxp.WMSLayerPanel.prototype": {
        aboutText: "About",
        titleText: "Title",
        nameText: "Name",
        descriptionText: "Description",
        displayText: "Display",
        opacityText: "Opacity",
        formatText: "Format",
        transparentText: "Transparent",
        cacheText: "Cache",
        cacheFieldText: "Use cached version",
        stylesText: "Styles",
        idaRasterRiskSummaryText: "Statistics",
        idaRasterRiskSummaryInfoText: "Current Viewport Raster Statistics",
        loadMaskMsg:"Fetching data..",
        noDataMsg: "No data available in current view",
        refreshText: "Refresh"
    },

    "gxp.NewSourceWindow.prototype": {
        title: "Add New Server...",
        cancelText: "Cancel",
        addServerText: "Add Server",
        invalidURLText: "Enter a valid URL to a WMS endpoint (e.g. http://example.com/geoserver/wms)",
        contactingServerText: "Contacting Server..."
    },

    "gxp.ScaleOverlay.prototype": { 
        zoomLevelText: "Zoom level"
    },
    
    "gxp.plugins.AddGroup.prototype": { 
	    addGroupMenuText: "Add Group",
	    addGroupActionTip: "Add a new group in the layer tree",   
	    addGroupDialogTitle: "New Group", 
	    addGroupFieldSetText: "Group Name",
	    addGroupFieldLabel: "New Group",
	    addGroupButtonText: "Add Group",
	    addGroupMsg: "Please enter a group name"	
    },
    
    "gxp.plugins.RemoveGroup.prototype": { 
	    removeGroupMenuText: "Remove Group",
	    removeGroupActionTip: "Remove a group from the layer tree",
	    removeGroupActionTip: "Removes the selected group and own layers from the map",
	    removeGroupConfirmationText: "Are you sure you want to remove the selected group ? The all layers inside this group will be removed from the map."
    },
    
    "gxp.plugins.SaveDefaultContext.prototype": { 
	    saveDefaultContextMenuText: "Save default context",
	    saveDefaultContextActionTip: "Save current context as default one",
	    contextSaveSuccessString: "Context saved succesfully",
	    contextSaveFailString: "Context not saved succesfully"
    },
    "gxp.plugins.FDHGeoCoder.prototype": {
        initialText: "Select an area",
        menuText: "FDH Geo Coding",
        tooltip: "FDH Geo Coding"
    },
    "gxp.plugins.ZoomBox.prototype":{
        zoomInMenuText: "Zoom Box In",
        zoomOutMenuText: "Zoom Box Out",
        zoomInTooltip: "Zoom Box In",
        zoomOutTooltip: "Zoom Box Out"
    },
    "GeoExt.ux.PrintPreview.prototype":{
        paperSizeText: "Paper size:",
        resolutionText: "Resolution:",
        printText: "Print",
        emptyTitleText: "Enter map title here.",
        includeLegendText: "Include legend?",
        legendOnSeparatePageText: "Legend on separate page?",
        compactLegendText: "Compact legend?",	
        emptyCommentText: "Enter comments here.",
        creatingPdfText: "Rendering Layout..."
    },
    "gxp.plugins.GeonetworkSearch.prototype":{
        geonetworkSearchText: "View metadata",
        geonetworkSearchActionTip: "View metadata"
    },
    "gxp.plugins.GroupProperties.prototype":{
        groupPropertiesMenuText:  "Group Properties",
        groupPropertiesActionTip:  "Group Properties",
        groupPropertiesDialogTitle: "Group Properties - ",
        groupPropertiesFieldSetText: "Group Name",
        groupPropertiesFieldLabel: "New Group Name",
        groupPropertiesButtonText: "Done",
        groupPropertiesMsg: "Please enter a group name"
    },
    "gxp.plugins.Login.prototype":{
        loginText: "Login",
        loginErrorText: "Invalid username or password.",
        userFieldText: "User",
        passwordFieldText: "Password"
    },
    "gxp.plugins.FeatureGrid.prototype": {
        displayFeatureText: "Display on map",
        firstPageTip: "First page",
        previousPageTip: "Previous page",
        zoomPageExtentTip: "Zoom to page extent",
        nextPageTip: "Next page",
        nextPageTip: "Last page",
        totalMsg: "Total: {0} records"
    },
	"Ext.DatePicker.prototype":{
		todayText         : "Today",
		minText           : "This date is before the minimum date",
		maxText           : "This date is after the maximum date",
		disabledDaysText  : "",
		disabledDatesText : "",
		monthNames : [
		  "January",
		  "February",
		  "March",
		  "April",
		  "May",
		  "June",
		  "July",
		  "August",
		  "September",
		  "October",
		  "November",
		  "December"
		],
		dayNames : [
		  "Sunday",
		  "Monday",
		  "Tuesday",
		  "Wednesday",
		  "Thursday",
		  "Friday",
		  "Saturday"
		],
		nextText          : 'Next Month (Control+Right)',
		prevText          : 'Previous Month (Control+Left)',
		monthYearText     : 'Choose a month (Control+Up/Down to move years)',
		todayTip          : "{0} (Spacebar)",
		format            : "m/d/y",
		okText            : "&#160;OK&#160;",
		cancelText        : "Cancel",
		startDay          : 0		
	
	},	
	"gxp.plugins.IDAQueryForm.prototype": {
        queryActionText: "Query",
        queryMenuText: "Query layer",
        queryActionTip: "Query the selected layer",
        queryByLocationText: "Region Of Interest",
        currentTextText: "Current extent",
        queryByAttributesText: "Query by attributes",
        queryMsg: "Querying...",
        cancelButtonText: "Reset",
        noFeaturesTitle: "No Match",
        noFeaturesMessage: "Your query did not return any results.",
        title: "Search",
        northLabel:"North",
        westLabel:"West",
        eastLabel:"East",
        southLabel:"South",
        setAoiText: "SetROI",
        setAoiTooltip: "Enable the SetBox control to draw a ROI (BBOX) on the map",
        attributeEnablement: "Query by Attribute",
        attributeEnablementMsg: "Invalid search Type! To use this you have to select 'Feature' type and to select a vector layer before.",
        searchType: "Base Settings",
        typeLabel: "Type",
        featureLabel: "Max Features",
        spatialLabelText: "Without setting a ROI you query the entire set of data in the current Map extent.",
	    featureLabelText: "With an high number of features the server can take a long time to respond. Limit your search!",
		spmText:"SPM",
		sourcedepthLabel : "Source Depth (m)",
		sourcefrequencyLabel : 'Source Frequency (kHz)',
		sourcepressurelevelLabel : 'Source Pressure Level (dB)',
		modelnameLabel : 'Model Name',
		seasonLabelText: 'Season',
		securityLevelLabelText : 'Security Level',
		allText: 'All',
		springText : "Spring",
		winterText : "Winter",
		fallText : "Fall",
		summerText : "Summer",
		modelRunDateText:'Model Run Date',
		modelEndDateText:'Model End Date',
		qualityLabel: "Quality",
		bottomTypeLabel: "Bottom Type",
		tlModelLabel: "TL Model"
    },	
    "gxp.plugins.QueryForm.prototype": {
        queryActionText: "Query",
        queryMenuText: "Query layer",
        queryActionTip: "Query the selected layer",
        queryByLocationText: "Region Of Interest",
        currentTextText: "Current extent",
        queryByAttributesText: "Query by attributes",
        queryMsg: "Querying...",
        cancelButtonText: "Reset",
        noFeaturesTitle: "No Match",
        noFeaturesMessage: "Your query did not return any results.",
        title: "Search",
        northLabel:"North",
        westLabel:"West",
        eastLabel:"East",
        southLabel:"South",
        setAoiText: "SetROI",
        setAoiTooltip: "Enable the SetBox control to draw a ROI (BBOX) on the map",
        attributeEnablement: "Query by Attribute",
        attributeEnablementMsg: "Invalid search Type! To use this you have to select 'Feature' type and to select a vector layer before.",
        searchType: "Base Settings",
        typeLabel: "Type",
        featureLabel: "Max Features"
    },
	"gxp.plugins.GeoReferences.prototype": {
        initialText: "Select an area",
        menuText: "GeoReferences",
        tooltip: "GeoReferences"
    },
	"gxp.plugins.IDASpm.prototype":{
		title: "SPM Create",
		pointSelectionButtonLabel: '',
		springText : "Spring",
		winterText : "Winter",
		fallText : "Fall",
		summerText : "Summer",
		soundPropagationModelParamText: 'Sound Propagation Model param...',
		soundSourcePointText: 'Sound Source Location',
		svpsoundSourcePointText: 'Sound Velocity Profile Location',
		svpUploadDialogTitle: "Sound Velocity Profile",
		sourcedepthLabel : "Source Depth (m)",
		sourcefrequencyLabel : 'Source Frequency (kHz)',
		sourcepressurelevelLabel : 'Source Pressure Level (dB)',
		modelnameLabel : 'Run Name',
		pointSelectionButtionTip: 'Enable Point Selection',
		seasonLabelText: 'Season',
		securityLevelLabelText : 'Security Level',
		applyText: 'Run',
		resetText: 'Reset',
		settingColorTitle: 'Color',
		spmList: "Models Submits",
		spmTooltip: "Show the Models Submits List",
		missingParameterTitle:"Missing Parameters",
		missingParameterMsg:"Please set all mandatory parameters",
		userInput: "User Input",
		applyMultiText: 'Run All',
		saveText: 'Save SPM',
		spmSaveTooltip: "Save Sound Propagation Model run",
		spmExecuteTooltip: "Execute Sound Propagation Model run/runs",
		spmResetTooltip: "Reset SPM Inputs",
		spmExecuteMessage: "Sound Propagation Model run requests sent.",
		spmSaveMessage: "Sound Propagation Model run <b>{modelName}</b> saved",
		spmXMLImportMsg: "All SPM XML runs are added",
		svpImportMsg: "Sound Velocity Profile successfully imported",
		svpFileMissingMsg: "SVP file is mandatory for \"User Input\" season",
		spmBatchComposerMsg: "Composer Runs",
		composerErrorMsg:"Composer Error",
		removeMsg: "Remove",
		runNameMsg: "Run Name",
		runListFieldSetName: "Run List (Click Run All to START)",
		runListNoRunMsg: "No SPM run to execute",
		composerErrorTitle:"Enter at least two SPM runs to use the composer",
		svpFileImportErrorTitle: "SVP Upload Error.",
		svpFileImportErrorMsg: "SVP file is not correctly loaded.",
		xmlRunListImportWinTitle: "Import Runs from XML",
		xmlRunListExportWinTitle: "Export Runs as XML",
		importRunButton: "Import Runs",
		exportRunButton: "Export Runs",
        errorDoubleLayerNameMsg: "A Model with this name already exists",
		errorLayerNameMsg: "The Model Name can not start with a digit, </br> can not contain blank spaces </br> and can not contain characters '*', '%', '-'",
		advancedTitle: "Advanced Mode",
		advancedTitleA: "Advanced Input 1",
		advancedTitleB: "Advanced Input 2",
		batchModeTitle: "Batch Mode",
		tlModelLabelText: "TL Model",
		tlModelEmptyText: "TL Model Selection",
		bottomTypeEmptyText: "Bottom type Selection",
		bottomTypeLabelText: "Bottom Type",
		qualityEmptyText: "Quality Selection",
		qualityLabelText:	 "Quality",		
		maxRangeText: "Max Range (km)"
	},
	/*-------------------------------------------------------------*/
	
	"gxp.FilterBuilder.prototype": {
        builderTypeNames: ["any", "all", "none", "not all"],
        preComboText: "Match",
        postComboText: "of the following:",
        addConditionText: "add condition",
        addGroupText: "add group",
        removeConditionText: "remove condition"
    },
	
    "gxp.IDAFilterBuilder.prototype": {
        builderTypeNames: ["any", "all", "none", "not all"],
        preComboText: "Match",
        postComboText: "of the following:",
        addConditionText: "add condition",
        addGroupText: "add group",
        removeConditionText: "remove condition"
    },
	
	"gxp.plugins.IDAAttribute.prototype": {
        title: "Layer Attribute",
		settingsTitle: "Base Settings",
		settingNameTitle: "Name",
		settingColorTitle: "Color",
		settingClassificationTitle: "Classification",
		filterTitle: "Filter",
		reloadLayerText: "Reload Layers",
		applyFilterText: "Run",
		resetText: "Reset",
        rasterAlgebraExecuteMessage: "Layer Attribute run request sent.",
        filterApplyTitle: "Filter Apply",
        filterApplyMsg: "Your filter is empty or not properly formatted!"
    },
    
    "gxp.plugins.WFSGrid.prototype":{
	    displayMsgPaging: "Displaying topics {0} - {1} of {2}",
        emptyMsg: "No topics to display",
        addLayerTooltip: "Add Layer to Map",
        detailsTooltip: "View Details",
        detailsHeaderName: "Property Name",
        detailsHeaderValue: "Property Value",
        detailsWinTitle: "Details",
        deleteTooltip: "Delete Feature",
        deleteConfirmMsg: "Are you sure you want delete this feature?"
     }
});
