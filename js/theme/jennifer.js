jui.define("chart.theme.jennifer", [], function() {

    /**
     * @class chart.theme.jennifer
     * Jennifer Theme
     * @singleton
     */
    var themeColors = [
        "#7977C2",
        "#7BBAE7",
        "#FFC000",
        "#FF7800",
        "#87BB66",
        "#1DA8A0",
        "#929292",
        "#555D69",
        "#0298D5",
        "#FA5559",
        "#F5A397",
        "#06D9B6",
        "#C6A9D9",
        "#6E6AFC",
        "#E3E766",
        "#C57BC3",
        "#DF328B",
        "#96D7EB",
        "#839CB5",
        "#9228E4"
    ];

    return {
        fontFamily : "arial,Tahoma,verdana",
    	backgroundColor : "white",
        colors : themeColors,

        // Axis styles
        axisBackgroundColor : "white",
        axisBackgroundOpacity : 1,
        axisBorderColor : "#dcdcdc",
        axisBorderWidth : 1.5,
        axisBorderRadius : 5,

        // Grid styles
        gridXFontSize : 11,
        gridYFontSize : 11,
        gridZFontSize : 10,
        gridCFontSize : 11,
    	gridXFontColor : "#333",
        gridYFontColor : "#333",
        gridZFontColor : "#333",
        gridCFontColor : "#333",
        gridXFontWeight : "normal",
        gridYFontWeight : "normal",
        gridZFontWeight : "normal",
        gridCFontWeight : "normal",
        gridXAxisBorderColor : "#bfbfbf",
        gridYAxisBorderColor : "#bfbfbf",
        gridZAxisBorderColor : "#bfbfbf",
        gridXAxisBorderWidth : 2,
        gridYAxisBorderWidth : 2,
        gridZAxisBorderWidth : 2,

        // Full 3D 전용 테마
        gridFaceBackgroundColor: "#dcdcdc",
        gridFaceBackgroundOpacity: 0.3,

    	gridActiveFontColor : "#ff7800",
        gridActiveBorderColor : "#ff7800",
        gridActiveBorderWidth : 1,
        gridPatternColor : "#ababab",
        gridPatternOpacity : 0.1,
        gridBorderColor : "#ebebeb",
    	gridBorderWidth : 1,
        gridBorderDashArray : "none",
        gridBorderOpacity : 1,
        gridTickBorderSize : 3,
        gridTickBorderWidth : 1.5,
        gridTickPadding : 5,

        // Brush styles
        tooltipPointRadius : 5, // common
        tooltipPointBorderWidth : 1, // common
        tooltipPointFontWeight : "bold", // common
        tooltipPointFontSize : 11,
        tooltipPointFontColor : "#333",
        barFontSize : 11,
        barFontColor : "#333",
        barBorderColor : "none",
        barBorderWidth : 0,
        barBorderOpacity : 0,
        barBorderRadius : 3,
        barPointBorderColor : "white",
        barDisableBackgroundOpacity : 0.4,
    	gaugeBackgroundColor : "#ececec",
        gaugeArrowColor : "#666666",
        gaugeFontColor : "#666666",
        gaugeFontSize : 20,
        gaugeFontWeight : "bold",
        gaugeTitleFontSize : 12,
        gaugeTitleFontWeight : "normal",
        gaugeTitleFontColor : "#333",
        bargaugeBackgroundColor : "#ececec",
        bargaugeFontSize : 11,
        bargaugeFontColor : "#333333",
    	pieBorderColor : "#ececec",
        pieBorderWidth : 1,
        pieOuterFontSize : 11,
        pieOuterFontColor : "#333",
        pieOuterLineColor : "#a9a9a9",
        pieOuterLineSize : 8,
        pieOuterLineRate : 1.3,
        pieActiveDistance : 5,
    	areaBackgroundOpacity : 0.5,
        areaSplitBackgroundColor : "#929292",
        bubbleBackgroundOpacity : 0.5,
        bubbleBorderWidth : 1,
        candlestickBorderColor : "black",
        candlestickBackgroundColor : "white",
        candlestickInvertBorderColor : "red",
        candlestickInvertBackgroundColor : "red",
        ohlcBorderColor : "black",
        ohlcInvertBorderColor : "red",
        ohlcBorderRadius : 5,
        lineBorderWidth : 2,
        lineBorderDashArray : "none",
        lineDisableBorderOpacity : 0.3,
        linePointBorderColor : "white",
        lineSplitBorderColor : null,
        lineSplitBorderOpacity : 0.5,
        pathBackgroundOpacity : 0.5,
        pathBorderWidth : 1,
        scatterBorderColor : "white",
        scatterBorderWidth : 1,
        scatterHoverColor : "white",
        waterfallBackgroundColor : "#87BB66",
        waterfallInvertBackgroundColor : "#FF7800",
        waterfallEdgeBackgroundColor : "#7BBAE7",
        waterfallLineColor : "#a9a9a9",
        waterfallLineDashArray : "0.9",
        focusBorderColor : "#FF7800",
        focusBorderWidth : 1,
        focusBackgroundColor : "#FF7800",
        focusBackgroundOpacity : 0.1,
        pinFontColor : "#FF7800",
        pinFontSize : 10,
        pinBorderColor : "#FF7800",
        pinBorderWidth : 0.7,
        topologyNodeRadius : 12.5,
        topologyNodeFontSize : 14,
        topologyNodeFontColor : "white",
        topologyNodeTitleFontSize : 11,
        topologyNodeTitleFontColor : "#333",
        topologyEdgeColor : "#b2b2b2",
        topologyActiveEdgeColor : "#905ed1",
        topologyHoverEdgeColor : "#d3bdeb",
        topologyEdgeFontSize : 10,
        topologyEdgeFontColor : "#666",
        topologyEdgePointRadius : 3,
        topologyTooltipBackgroundColor : "white",
        topologyTooltipBorderColor : "#ccc",
        topologyTooltipFontSize : 11,
        topologyTooltipFontColor : "#333",

        timelineTitleFontSize: 11,
        timelineTitleFontColor: "#333",
        timelineColumnFontSize: 10,
        timelineColumnFontColor: "#333",
        timelineColumnBackgroundColor: "linear(top) #f9f9f9,1 #e9e9e9",
        timelineEvenRowBackgroundColor: "#fafafa",
        timelineOddRowBackgroundColor: "#f1f0f3",
        timelineActiveBarBackgroundColor: "#9262cf",
        timelineHoverBarBackgroundColor: null,
        timelineLayerBackgroundOpacity: 0.15,
        timelineActiveLayerBackgroundColor: "#A75CFF",
        timelineActiveLayerBorderColor: "#caa4f5",
        timelineHoverLayerBackgroundColor: "#DEC2FF",
        timelineHoverLayerBorderColor: "#caa4f5",
        timelineVerticalLineColor: "#c9c9c9",
        timelineHorizontalLineColor: "#d2d2d2",

        // Widget styles
        titleFontColor : "#333",
        titleFontSize : 13,
        titleFontWeight : "normal",
        legendFontColor : "#333",
        legendFontSize : 12,
        legendSwitchCircleColor : "white",
        legendSwitchDisableColor : "#c8c8c8",
        tooltipFontColor : "#333",
        tooltipFontSize : 12,
        tooltipBackgroundColor : "white",
        tooltipBackgroundOpacity : 0.7,
        tooltipBorderColor : null,
        tooltipBorderWidth : 2,
        tooltipLineColor : null,
        tooltipLineWidth : 0.7,
        scrollBackgroundSize : 7,
        scrollBackgroundColor : "#dcdcdc",
        scrollThumbBackgroundColor : "#b2b2b2",
        scrollThumbBorderColor : "#9f9fa4",
        zoomBackgroundColor : "red",
        zoomFocusColor : "gray",
        zoomScrollBackgroundSize : 50,
        zoomScrollBackgroundColor : "#000",
        zoomScrollFocusColor : "#fff",
        zoomScrollBrushColor : "#000",
        crossBorderColor : "#a9a9a9",
        crossBorderWidth : 1,
        crossBorderOpacity : 0.8,
        crossBalloonFontSize : 11,
        crossBalloonFontColor : "white",
        crossBalloonBackgroundColor : "black",
        crossBalloonBackgroundOpacity : 0.5,
        dragSelectBackgroundColor : "#7BBAE7",
        dragSelectBackgroundOpacity : 0.3,
        dragSelectBorderColor : "#7BBAE7",
        dragSelectBorderWidth : 1,

        // Map Common
        mapPathBackgroundColor : "#67B7DC",
        mapPathBackgroundOpacity : 1,
        mapPathBorderColor : "white",
        mapPathBorderWidth : 1,
        mapPathBorderOpacity : 1,
        // Map Brushes
        mapBubbleBackgroundOpacity : 0.5,
        mapBubbleBorderWidth : 1,
        mapBubbleFontSize : 11,
        mapBubbleFontColor : "#fff",
        mapSelectorHoverColor : "#5a73db",
        mapSelectorActiveColor : "#CC0000",
        mapFlightRouteAirportSmallColor : "#CC0000",
        mapFlightRouteAirportLargeColor : "#000",
        mapFlightRouteAirportBorderWidth : 2,
        mapFlightRouteAirportRadius : 8,
        mapFlightRouteLineColor : "red",
        mapFlightRouteLineWidth : 1,
        mapWeatherBackgroundColor : "white",
        mapWeatherBorderColor : "#a9a9a9",
        mapWeatherFontSize : 11,
        mapWeatherTitleFontColor : "#666",
        mapWeatherInfoFontColor : "red",
        mapCompareBubbleMaxLineColor : "#fff",
        mapCompareBubbleMaxLineDashArray : "2,2",
        mapCompareBubbleMaxBorderColor : "#fff",
        mapCompareBubbleMaxFontSize : 36,
        mapCompareBubbleMaxFontColor : "#fff",
        mapCompareBubbleMinBorderColor : "#ffff00",
        mapCompareBubbleMinFontSize : 24,
        mapCompareBubbleMinFontColor : "#000",
        // Map Widgets
        mapControlButtonColor : "#3994e2",
        mapControlScrollColor : "#000",
        mapControlScrollLineColor : "#fff",

        // Polygon Brushes
        polygonColumnBackgroundOpacity: 0.6,
        polygonColumnBorderOpacity: 0.5,
        polygonScatterRadialOpacity: 0.7,
        polygonScatterBackgroundOpacity: 0.8,
        polygonLineBackgroundOpacity: 0.6,
        polygonLineBorderOpacity: 0.7
    }
});