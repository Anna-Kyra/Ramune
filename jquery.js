(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.templateMupi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Laag_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Egimg4xMBFNAAAQBoAABJBJQBJBKAABnMAAABpvQAABnhJBJQhJBKhoAAMhFNAAAQhoAAhJhKQhJhJAAhnMAAAhpvQAAhnBJhKQBJhJBoAAgEghAg3NMBCAAAAQBjAABGBHQBGBHAABlMAAABm1QAABkhGBHQhGBIhjAAMhCAAAAQhjAAhGhIQhGhHAAhkMAAAhm1QAAhlBGhHQBGhHBjAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,167,221,0.059)").s().p("EghAA3OQhiAAhGhIQhGhHAAhkMAAAhm0QAAhlBGhIQBGhHBiAAMBCBAAAQBjAABFBHQBGBIAABlMAAABm0QAABkhGBHQhFBIhjAAg");
	this.shape_1.setTransform(-0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EgimA4yQhoAAhJhKQhJhJAAhnMAAAhpvQAAhnBJhKQBJhJBoAAMBFNAAAQBoAABJBJQBJBKAABnMAAABpvQAABnhJBJQhJBKhoAAgEgjpg2GQhGBHAABlMAAABm1QAABkBGBHQBGBIBjAAMBCAAAAQBjAABGhIQBGhHAAhkMAAAhm1QAAhlhGhHQhGhHhjAAMhCAAAAQhjAAhGBHg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.templateMupi, new cjs.Rectangle(-249,-365.8,498.1,731.7), null);


(lib.merknaam = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Laag_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AMdFuQgFgDgCgEQgDgFAAgGIACggIACgnIACgmIABgYIAAiMQg4Amg9AgIAAABQhOAphZAfQgGACgGgCQgGgCgEgFIgTgZIgBgBQgIgKgKgKQgGgFgBgHQAAgHADgGQAEgGAHgCQBDgVBDgdQBDgeA/glQA/gkA4gsQAlgeAgghIhsAAIguABIgBAAIg2AAIAAAAIg/ABIhLABQgFAAgFgCQgFgDgDgEQgCgFAAgFIAAg7QAAgJAFgFQAGgGAIAAIDpAAIAAguQAAgNgCgTIAAAAIgFgtQAAgGACgFQADgFAFgDQAGgDAGAAIBIAHQAGAAAFAFQAFAEABAGQACAGgDAGIgCAGIAAAAIAAABIgBAPIAAgBIgBATIAAABIgBAQIAAABIgBAPIAAABIAAAHIAAAeIALAAQASAAAOgCIAYgDIABAAQAJgCAHgDIAMgGQAGgEAGABQAHAAAEAEIBAA1QAFAEABAGQACAGgCAGQgCAGgGADQgPALgPAOIgBAAQgPAOgRARIABAAQgOAPgRAQIAAAAIggAcIgBAAIggAaIAAAAIgXARIAADUIABAtIAAABQAAASABAPIAAABIACAbIAAgBIAEAYQABAFgCAGQgCAFgFAEQgFADgGAAIhJAAIAAAAQgFAAgFgDgAuyFnQgFAAgFgDIgagSQgPgIgQgNQgFgFgCgGQgBgHADgGQADgHAGgCQBFgfA5glIAAAAQA4glAtgsIAAABQAtgtAjgyIgBAAQAbgoAVgsIlHAAIgcABIgBAAIgoACIgBAAIgtACIgsACQgFAAgFgDQgEgCgDgFQgDgFAAgFIAAhEQAAgGADgEQADgFAFgDQAEgDAGABIA6ACIAqACIAeABIATAAIF1AAIAJgEIABgBQAFgEAGAAQAGgBAFADQAXANARAMQATAOANAOQADAEABAGQABAFgCAFQgCAFgEAEQgQAMgLAOIAAAAQgLAPgJAUIgBABQgeA4glA1IgBABQglA1guAvIAAAAQguAug3AnIAAAAQg3AlhAAcQgEABgEAAIgCAAgAliEwQgFgBgFgEQgEgDgCgGIgNgsIABAAIgOgtQgCgGACgGQACgGAFgDQAGgEAGAAIAwgCQAbgCAigHQBJiNAth1IAAABQAvh4AShhQABgGAEgEQAEgEAFgBQAGgCAFACQAdAIAZAJIAAAAQAYAJASAJQAGACADAHQADAGgBAHQgCAHgFAEQgMAJgHAKIAAAAQgIAKgFALQgGALgCAKIgBABIgJAXIgBABIgmBkIgpBfIAAAAQgVAugUArIgYAtIBXgJQA6gIAwgIIBagQIgBAAIAugJIgMgPIAAAAIgbggIgBAAIgYgcIAAAAIgXgYQgEgEgBgGQgBgEACgGQACgFAEgDIAsgiQAFgFAIAAQAHABAFAEQAZAXAZAcIAAAAQAZAZAaAhIAAAAQAZAgAbAjIAAAAIA3BLQAFAHgBAHQgBAIgGAFIg9A2QgFADgGABQgFABgGgDQgFgCgDgGIgbgwIAAAAIgQgdIg+ANIAAAAIhbAQIgBAAIhpAQIAAAAIh2ARIhHAKIgBAAQgbADgRADIgBABQgQACgIACIgBABIgPAEIgNAHIgBAAIgXALQgDABgFAAIgDAAgARBCYIhHg2IAAAAQgjgagjgWQgFgEgDgFQgCgFABgGQABgFADgFIAjgnQAEgFAHgCQAGgBAGADQAcANAWANIAAAAQAXAOASANIAiAaIABAAIAbAVQAEAEACAFQACAFgBAGQgBAFgEAFIgoAsQgFAFgIABIgBAAQgHAAgGgEgAwtjgQgGgCgDgFQgDgFAAgGIAAhLQAAgGADgFQADgFAGgDQAGgCAFABQAMACASACIAoACIApAAIAhAAIC5AAIA0AAIAegDIAPgDQAHgCAJgBQAFAAAFADQAFACADAFQADAFAAAFIAABHQAAAFgDAFQgCAFgFACQgFADgFAAIgYgCIgYgCIgfgBIgmgBIizAAIg0ABIAAAAIgjACIgBAAQgOABgMACIgBABIggAGIgEAAQgEAAgDgCg");
	this.shape.setTransform(164.055,61.3967);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47.9,24.6,232.4,73.69999999999999);


// stage content:
(lib.ramune = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {pagina1:0,pagina2:14,pagina3:25};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,13,24,42];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var self = this;
		
		//window.addEventListener("keydown", keyPressed);
		window.addEventListener("keydown", keyPressed.bind(this));
		function keyPressed(evt) {
		var theKey = evt.key.toLowerCase();
			if (theKey == "m") {
				//alert("m");
				self.gotoAndPlay("pagina1");	
			}
			if (theKey == "b") {
				//alert("b");
				self.gotoAndPlay("pagina2");
			}
				if (theKey == "f") {
				//alert("f");
				//self.gotoAndStop("pagina3");
				self.gotoAndPlay("pagina3");
					
			}
		}
	}
	this.frame_13 = function() {
		this.gotoAndStop("pagina1");
		//deze code stuurt de speler terug naar begin van pagina 1 en staat dan stil
	}
	this.frame_24 = function() {
		this.gotoAndPlay("pagina2");
		//deze code stuurt de speler terug naar begin van pagina 2 en laat het afspelen
	}
	this.frame_42 = function() {
		this.gotoAndPlay("pagina1");
		//deze code stuurt de speler terug naar begin van pagina 3 en laat het afspelen
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(11).call(this.frame_24).wait(18).call(this.frame_42).wait(1));

	// Laag_11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D4D4").s().p("AANACIgdAAIAAgDIAdAAIAEAAIAAADIgEAAg");
	this.shape.setTransform(152.175,485.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBDADA").s().p("AAnACIhRAAIAAgDIBRAAIAEAAIAAADIgEAAg");
	this.shape_1.setTransform(194.85,485.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DDDDDC").s().p("AAzACIhpAAIAAgDIBpAAIADAAIAAADIgDAAg");
	this.shape_2.setTransform(185.1,485.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DDDCDC").s().p("AAvACIhhAAIAAgDIBhAAIAEAAIAAADIgEAAg");
	this.shape_3.setTransform(170.5,485.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DAD9D9").s().p("AANACIgdAAIAAgDIAdAAIAEAAIAAADIgEAAg");
	this.shape_4.setTransform(163.775,485.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D8D7D7").s().p("ADyACIhHAAIAAgDIBHAAIADAAIAAADIgDAAgAjLACIgpAAIAAgDIApAAIAEAAIAAADIgEAAg");
	this.shape_5.setTransform(182.1,485.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D6D6D5").s().p("AEZACIgmAAIAAgDQAVAAAUABIAAACIgDAAgAj9ACIgeAAIAAgDQARAAAQABIABACIgEAAg");
	this.shape_6.setTransform(182.275,485.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B9B8B8").s().p("AgIgIQADALALACIAEABIgBACIgIABQgMAAADgRg");
	this.shape_7.setTransform(161.126,416.5621);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9C9C9C").s().p("AgKAZIgIgDQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQgCgJAAgJIAEgDIAEAAIAOgTIAAgDIAAgCQAyANg5AhIAAADIgDAAg");
	this.shape_8.setTransform(178.9877,393.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A1A1A0").s().p("AgQgBIAdAAIAEAAIAAABIghACIAAgDg");
	this.shape_9.setTransform(204.575,386.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A4A4A4").s().p("AExAaIAAgEIAMgHIADAAIgBADQgFAIgJAEIAAgEgAkvgIQgKgJgGgMQANAGAFANIABADIgDgBg");
	this.shape_10.setTransform(206.8,407.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCBCB").s().p("AAAAhQgBghAAghIADAAIAAA/IAAAEIgCgBg");
	this.shape_11.setTransform(230.375,394.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3B2B2").s().p("Ah+BAQgYgFgRgKQAYAFAUAHIABADIgEAAgACdgsIAAgEQAIgEABgKIACAAIAAADQAAAOgLAFIAAgEg");
	this.shape_12.setTransform(291.15,398.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A8A8A7").s().p("AgFAGIAAgHIAHgHIADAAIgBADQgDAIgGAGIAAgDg");
	this.shape_13.setTransform(328.8,372.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B6B5B5").s().p("AgDAJIAAgHQAGgCgBgMIACAAIAAAEQABAPgIAGIAAgEg");
	this.shape_14.setTransform(314.3857,371.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A2A2A2").s().p("AABAPQABgSgFgLIADAAQAGAIgCARIAAAEg");
	this.shape_15.setTransform(309.9347,368.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C6C6C5").s().p("AooDJQgNgGgVADIAAgEQAXgDANAIIABACIgDAAgAEkCOQgQgDABgUQAFAOAMAGQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABIgEAAgABaBdQABgSgNgFQAVAAgHAaIgCABIAAgEgAJHjCIgdAAIAAgEQAQgFARAGIAAADIgEAAg");
	this.shape_16.setTransform(268.375,386.524);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A2A1A1").s().p("AgbDIIAAgBIADABgAhtDBIgDAAIAAgEQA2gHAdAPQgkgHgsADgACChTQACgSgGgIIAAgEQAQADgKAeIgCABIAAgEgAh3i1QgLgGgFgMQANAEAFALIABAEIgDgBg");
	this.shape_17.setTransform(302.5211,374.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BDBDBD").s().p("AgBAVIAAgsQAGATgFAcIgBAAIAAgDg");
	this.shape_18.setTransform(314.192,349.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A2A2A1").s().p("AqBCoIAAgEQANAAAGgGIADgBIgBADQgFAJgNAAIgDgBgABbgsQAyAGA7gDIADAAIAAADQgWACgUAAQgnAAgfgIgAJ9iKIAAgeIAEAAIAAAEQADAUgHAKIAAgEg");
	this.shape_19.setTransform(246.1597,373.005);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C3C3C3").s().p("AiwAoIAAgFIAZAAIAEAAIAAACQgTAAgKAGIAAgDgACigUIAAgHQAJgFAFgJIABgBIAAADQgEAOgLAJIAAgEg");
	this.shape_20.setTransform(277.9,361.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1D1D0").s().p("AAAAcQgBgcgBgbQAGAVgCAeIgBAEg");
	this.shape_21.setTransform(255.1079,292.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B1B0B0").s().p("AgDALIAAgNQAGgCgBgKIACAAIAAAEQgBAPgGAKIAAgEg");
	this.shape_22.setTransform(264.625,299.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D0D0CF").s().p("AGsFtIgaAAIAAgEQAPAAAPACIAAACIgEAAgAFiFtIhHAAIAAgEIBHAAIADAAIAAAEIgDAAgAo6FDIAAgDIAfAAIADAAIAAACQgNABgOAAIgHAAgAHICFIgBhLIADAAIAABHIAAAEgAI3lCIAAgqQAGASgEAbIgCAAIAAgDg");
	this.shape_23.setTransform(263.667,353.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C1C0C0").s().p("AjHEnQgIgOACgXIAIAiIAAAEIgCgBgAgODhIAAgEIASgHIAEgBIgBACQgLAGgKAHIAAgDgAC4kfQAMgBAHgGIADgBIgBAEQgFAHgHAAQgEAAgFgDg");
	this.shape_24.setTransform(288.5202,343.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CACAC9").s().p("AADASQgIgOAAgWQAGAQAEARIABAEIgDgBg");
	this.shape_25.setTransform(325.775,312.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C3C2C2").s().p("ApYGTIAiAAIAEAAIAEAAIgBABQgUACgVAAIAAgDgAGhFpQApAAApACIAAACIgDAAIgbAAQgcAAgYgEgAEiAiQgLgCAEgTIAHAAIADAAIAAACQgDACgEAAQgCANAJADIAAACIgDgBgAJKmDIAAgDQAFgIAGgGIAEgBIgBADIgDABIAAADIgBADQgEAIgGAFIAAgFg");
	this.shape_26.setTransform(226.275,357.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A7A7A7").s().p("AgMgDQALADAOACIAAABIgEABIgFAAQgLAAgFgHg");
	this.shape_27.setTransform(286.9,309.7667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#ABABAB").s().p("AkyByIAeAAIAEAAIAAACQgRACgRAAIAAgEgAEZhlIAAgFQAMgEAKgGIAEgBIgBADIgZAQIAAgDg");
	this.shape_28.setTransform(205.875,375.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B9B9B9").s().p("ADQHFIAlAAIAEAAIgBACQgKABgJAAQgMAAgJgDgArpHEQgMgCAAgQQAGAJAIAHIABADIgDgBgAHVEKIAAgEIAAgEIAAgeQAHANgDAVIAAAEIgEAAgAmGhNQABgQgJgDQASAAgIAWIgCAAIAAgDgALzmfQgJgQAAgYQAGASAFATIABAEIgDgBg");
	this.shape_29.setTransform(252.474,363.642);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9A9A9A").s().p("AAYAsQgdgGgLgqIgBgDQgEgKgGgJIAAgEIAAgLQAegJANAcIAAADQAHAJADANIACAAIAAAlIAAAEIgEAAg");
	this.shape_30.setTransform(230.4,348.0155);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C5C5C5").s().p("AADAKQgIgGABgOQAFAJADAJIABADIgCgBg");
	this.shape_31.setTransform(228.15,346.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9C9C9B").s().p("AmHDmIhVAAIgEgBIgLgGQA1AIAzgIIAEAAIAAADIgEAAIAAAEIgEAAgAHkjEIADAAIABgDIAAgEQACgRgGgJQAPAOgMAXIgDAAIAAgEg");
	this.shape_32.setTransform(237.5341,336.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C6C6C6").s().p("AAVAFIgEgDIgDAAQgSgIgTAIIAAgDIAAgDQAfgEAQALIAAADIgDgBg");
	this.shape_33.setTransform(164.875,352.2015);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BEBDBD").s().p("AIXDxQgCgYAAgYIAEAAIAAAtIAAADgAoYDTIAiAAIAEAAIgBACQgSACgTAAIAAgEgAmZjwIAbAAIAEAAIgBACQgOABgQAAIAAgDg");
	this.shape_34.setTransform(233.725,378.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A9A9A9").s().p("AAEAIQgIgFgCgLQAIAFAFAJIAAADIgDgBg");
	this.shape_35.setTransform(177.825,343.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C8C7C7").s().p("AgOAEIAAgEIAAgDQAOAAAPACIAAABIgEAAIgVAAIAAAEIgEAAg");
	this.shape_36.setTransform(158.725,312.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B8B8B8").s().p("AiuGbQgFgMgDgNQAKAGAAAPIAAAFIgCgBgAhDGFIAAgDIAeAAIAEAAIAAABQgOACgOAAIgGAAgAhzgWQgPgDAEgXIAEAAQgDAUANAEIAAACIgDAAgAkQlQIAAgDQAJgFAJgCIAAADQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgGAIgKACIAAgEgAEPl2QgEgQgCgVIAEAAIAEAjIAAACg");
	this.shape_37.setTransform(266.5,353.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDEDEC").s().p("AgOgBIAZAAIAEAAIAAABQgPACgOAAIAAgDg");
	this.shape_38.setTransform(227.575,189.075);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#ECECEB").s().p("ApZAGIgaAAIAAgEIAaAAIADAAIAAAEIgDAAgAJTgBIAAgEIAdAAIAFAAIAAADQgOABgNAAIgHAAg");
	this.shape_39.setTransform(219.35,189.075);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EAEAEA").s().p("AgOAAIAZAAIAEAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgOACgOAAIAAgCg");
	this.shape_40.setTransform(326.725,188.3375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C8C8C8").s().p("AK9CIIAAgEIApgCQgJAHgQAAIgQgBgALmCAIACAAIgCACgACXBqIAiAAIADAAIAAACQgTACgSAAIAAgEgArmiIIAwAAIADAAIAFAAIADAAIAAACQgOACgNAAQgSAAgOgEg");
	this.shape_41.setTransform(190.05,380.3698);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AFAEAE").s().p("Ai8AYIAlAAIAEAAIAAACQgUACgVAAIAAgEgAC2gHQAGgIgHgMQAOAIgLAOIgDAAIABgCg");
	this.shape_42.setTransform(151.092,362.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C7C6C6").s().p("APPDbIAAgPQAGgBgBgKIACAAIAAAEQAAAQgHAKIAAgEgAmrC8QgHgHgFgLQAMAEADALIABAEIgEgBgAvVjaIAlgDIAEgBIAAACQgUAFgVABIAAgEg");
	this.shape_43.setTransform(219.525,384.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BBBBBB").s().p("AOQD4QgHgIACgSQAGgHADgKIACgBIAAADQgBANgGAGQgBANAEAHIABADQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAgAkGC5QgHgWACgfIAEAAQgCAdAFAUIABAFIgDgBgAn+BvQAoAEgJgMIAAgEIAHAEIADAAIAAAEIAAAEIAAABQgVACgUABIAAgEgAPaBQIAAgOQAHgEgCgLIADAAIAAADQAAAUgIAKIAAgEgAvgj0QAUgDAZgBIADAAIAAACIgwAFIAAgDg");
	this.shape_44.setTransform(225.15,385.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CACACA").s().p("AIIGyIAAgTIgBgDIgCgEQAMAGgHAXIgCABIAAgEgAOjFkIABAAIAAABIgBgBgAOcEkIAEAAQAAAgACAgQgLgQAFgwgArCEvQgQgHgZADIAAgDQAbgDARAIIABACIgEAAgAujDwIAqAAIAEAAIADAAIAAABIgxACIAAgDgAFTmMQgCgUAAgVIADAAIAAAeIAAAEIAAAEIAAAEIgBgBg");
	this.shape_45.setTransform(220.825,329.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C5C4C4").s().p("AgOgBIAaAAIADAAIAAABQgIACgGAAQgJAAgGgDg");
	this.shape_46.setTransform(125.775,353.7295);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CECECD").s().p("AhIBCIAiAAIAEAAIgBABQgSACgTAAIAAgDgAAkhEIAhAAIAEAAIAAABQgTADgSAAIAAgEg");
	this.shape_47.setTransform(128.975,359.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B7B7B6").s().p("AORGnIgxAAIAAgEQAbAAAaACIAAACIgEAAgAL5GJQgCgYAAgZIAFAAIAAAtIAAAEgAJPECQAAgNgHgGQAQABgHAVIgCABIAAgEgAxiBPQAIg2gEg9IAAgEIADAAQAHBGgOA0IAAgDgARehVIg0AAIAAgEIA0AAIAEAAIAAAEIgEAAgAi9hZIAlAAIADAAIAAACQgUACgUAAIAAgEgAIviCQACgagSgEQAZgDgGAdIgBAEgACPmXQgQgCgEgNIAWANIABACIgDAAg");
	this.shape_48.setTransform(214.85,363.275);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A6A6A6").s().p("AhkJBIgPgOQAOABAEAKIABAEIgEgBgAMwFSIguAAIAAgEQAZAAAYADIABABIgEAAgABLFOIApAAIAEAAIAAADQgWABgXAAIAAgEgAhKFSIgtAAIAAgEQAZAAAYADIAAABIgEAAgAk1DDQgMgEgDgNIAEgEIADAAQABAOAJAGIABACIgDgBgAsyA+QAPgEAIgKQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIgBADQgIANgKAAIgHgBgAKKoNQgDgaAAgaQAGATgCAdIAAAEg");
	this.shape_49.setTransform(190.9,353.375);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CCCCCB").s().p("ADVGCIhEAAIgDAAIgEAAIAAgEQAnAAAoACIAAACIgEAAgAt0BwQgCgLAAgLQAGAAAAgIIABAAIABAEQACAIgGAAIAAAPIAAADIgCAAgANzl6QgNgFgVADIAAgEQAYgDANAIIABACIgEgBg");
	this.shape_50.setTransform(196.175,347.1688);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#ABABAA").s().p("AIxE+IAAgEIAPgLIADAAIAAACIgSARIAAgEgAnMhDIAAgDIAPgHIAEgBIgBACIgSANIAAgEgAJuiOQgIgzADg9IAHBtIAAAEQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAgAxRjVQgCgPAAgPIAEAAIAAAbIAAADIgCAAgASWj3IAAgDIAAg8IAEAAIAAAPIAAAEIAAAaIAAAEIAAADQADAMgHADIAAgEgAgpj6IAAgEQAkAAAiACIAAACIgDAAIghAAIgiAAgAyaknQAGAHANAAIADAAIAAAEIgDABIgGAAQgNAAAAgMgAJOk9IgwAAIAAgEQAaAAAaACIAAACIgEAAg");
	this.shape_51.setTransform(209.6597,379.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9D9C9C").s().p("AIBF0IAAgEIADAAQARAAARgCIAAgBIAEAAIADAAIAAACQgNAGgSAAIgNgBgAosABIAAgCIAWAAIAEAAIAAABQgRAAgJAFIAAgEgAA8lwIgiAAIAAgEIAXAAIADAAQAGAAAFACIABACIgEAAg");
	this.shape_52.setTransform(154.975,349.2563);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9B9A9A").s().p("AQoDdIAAgEIAAhHIAEAAIAABHIAAAEIgEAAgAsxDZIgEAAIAAgDQARgHAZACIAEABIAAAEIgEAAIgiAAIAAADIgEAAgAwriyIAAAAIAAgBIAAgDIAAgmQAGAPgCAXIgBAEIgDAAg");
	this.shape_53.setTransform(203.075,344.925);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CDCCCC").s().p("AGRFaQAjgDAWAGIgBAAIgEAAIgSABQgTAAgPgEgAIUFaIBAAAIADAAIAAABQghACgiAAIAAgDgApPkaIgCgHIADADIAAAEIgBAAgApWldQAHADgCAMIgBADIAAAmIAAADQgFgaABghg");
	this.shape_54.setTransform(155.7,356.0224);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#ACACAB").s().p("ASlIUIAAgIQAIgEAEgKIADgBIgBAEQgFANgJAJIAAgDgAmMH8QgNgEgCgOIARAQIABADIgDgBgALcFrIAAgDIAAgnQAHANgDAVIAAAFIAAADIgEAAgAyrnpIABAAIAAACIgBgCgAyxoWQAGASgBAbQgKgOAFgfg");
	this.shape_55.setTransform(218.3302,353.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B6B6B5").s().p("AMEGrIAAgEQAZADAPgIQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIADAAQgGAOgUAAQgIAAgKgDgAGlA9IATgHIADgBIgBADQgJAGgMACIAAgDgALuhJQAlgHAtADIAEAAIAAAEIgEAAQgtgDglAHIAAgEgAtDkqIAAiDIADAAIAAAEIAAAEQADBEgGA7IAAgEgAjrl1QgFgNgBgRQAIALAAAQIAAAEIgCgBg");
	this.shape_56.setTransform(184,358.7061);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#ABAAAA").s().p("AllIVIAAgEQAHgGgDgQIAAgDIACAAQAGAYgMAJIAAgEgAPwgiIAAgaIAEAAIAAADQACASgGAIIAAgDgAAMnvQAQAAAOACIABACIgEAAIgJABQgLAAgHgFgAvunzIgGglQAKALgCAXIAAADg");
	this.shape_57.setTransform(209.4618,359.325);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A3A3A3").s().p("AgJAGIAAgEQAKgDAGgGIACgBIAAADQgGAKgMAEIAAgDg");
	this.shape_58.setTransform(78.45,323.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#AEAEAE").s().p("AiGH/IAAgTQAGgBAAgKIACAAIgBAEQgBASgGAMIAAgEgARZB9QgEgOgRAAQAXgGAAARIAAAEIgCgBgAwxn3QgOgJgbADIAAgEQAdgDAPAMIABACIgEgBg");
	this.shape_59.setTransform(215.9505,346.97);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C9C8C8").s().p("ASGIuQgMgJABgYQAFASAJANIABADIgEgBgAgyIRIAiAAIAEAAIAAACQgKACgIAAQgLAAgJgEgAyJogIAAgDIAAgIQALgFATADIAAACIgEAAIgTAAIAAAEIgBAAQAAAHgFAAIgBAAg");
	this.shape_60.setTransform(210.925,353.3819);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCCCCC").s().p("AnABHIAAgEIAAgdIAAgEIAAgXQAGAZgEAjgAGMATIAxAAIAEAAIAAACQgNACgLAAQgQAAgNgEgAFvg3IgBgDQgDgFAAgHQAKAAAJACIAAACIgCAAQgBAQgFAAQgDAAgEgFg");
	this.shape_61.setTransform(192.4,321.725);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#9B9B9A").s().p("AgFAOQALgJgCgXIACAAIAAAcIAAAEQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgCAEgBAAQgDAAgCgFg");
	this.shape_62.setTransform(146.925,327.4079);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B4B4B4").s().p("AnXG6IAAgaQAEADADAFIABADIgCAAQABANgHAFIAAgDgAQ3GqQgEgPgBgSQAHALAAATIAAAEQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAgAFjEvIAbAAIADAAIAAACQgIACgHAAQgJAAgGgEgAtQAXIAeAAIADAAIAAABQgRADgQAAIAAgEgAnihGIAAgPQAHgBgBgKIACAAIAAAEQgBAQgHAKIAAgEgAw4hYIAAgbIAEAAIAAAEQACASgGAIIAAgDgAF2mWQAIAGAPABIADAAIAAACIgLABQgMAAgDgKgArtmiQgFgMgBgOQAHAHAAAQIAAADIgBAAg");
	this.shape_63.setTransform(221.225,362.125);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A4A4A3").s().p("ADcGPIAAgIQAFgHAHgDIAEgBIgBADQgIAJgHALIAAgEgAPNBCIAAgEQAGgKgCgUIAAgDIABAAQAHAdgMAMIAAgEgAvKjIQgFgHgBgKIAAgEIgDgDIAAgBIAAAAIADAAQAGAJACANIAAAEIgCgBgAqojlIAAgLQAJgYAEggIACAAIAAAEQgCAngNAcIAAgEgAL5kaQgFgLgIgHQAPABAAAOIAAAEIgCgBgAjYmKQgPgDgTAAIAAgEQAVgBAQAGIABACIgEAAg");
	this.shape_64.setTransform(194.2892,349.5981);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#ADADAD").s().p("AAmB5QABgRgGgJIAEAAQAGAGgCARIAAADgAgphjIAAgHQAGgGADgIIACgBIAAADQgDAPgIAIIAAgEg");
	this.shape_65.setTransform(107.5097,314.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D2D2D1").s().p("AgBATIAAgpQAFASgEAaIgBABIAAgEg");
	this.shape_66.setTransform(116.2512,324.725);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9F9F9E").s().p("AMPGYQgHgIACgVQAHAFgDAOIAAAEIADAEIABADIgDgBgAsRgbIAAgEIAAgtIADABIABADIAAApIAAAEIgEAAgAJjlWIgBgDIAAgEQADgfgHgVIAAgEIAAgEQANAXgFApIgBAEIgCgBg");
	this.shape_67.setTransform(194.275,329.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C4C4C3").s().p("ANuEGIAAgEIAPgKIADgBIgBADIgRAQIAAgEgAKEDGQgCgPAAgOIADAAIAAAaIAAADgAt5jnQgGgOAAgUQAGANABARIAAAEIgBAAgANijuIgBgEQgFgJgJgGQATgBAAAQIAAAEIgEAAg");
	this.shape_68.setTransform(203.4481,336.325);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#AAA9A9").s().p("AP/IKIAAgIIAQgKIADgBQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgKAKgIALIAAgEgAoNGlIAAgDQAHgEgDgMIgBgDIADAAQAFAVgLAFIAAgEgAOfC0QgGgLACgSQAEAMADAPIAAADQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBgAoNlOIAAgHQAGgHADgIIACAAIAAADQgCAPgJAIIAAgEgAQHmvQALgGAPgBIAEgBQAAABAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQgPAGgJAAIgFgBgAwenrQgFgQgBgRQAHAKAAATIAAAEIgBAAg");
	this.shape_69.setTransform(218.05,354.85);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AEADAD").s().p("AlgDmIAAgPQAJgSACgbIAAgDIADAAIAAADQgCAlgMAbIAAgEgAvbB5QgIgXgnAJIAAgEQApgJAIAYIABAEIgDgBgAQIieQgIgGgMAGIAAgEQANgIAJAJIABADIgDAAgAsOjeQgOgIgYABIAAgEQAagBAOAKIABACIgDAAg");
	this.shape_70.setTransform(212.025,333.1406);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E2E2E1").s().p("AgBALIAAgZIACAAIABAEQACAQgFAJIAAgEg");
	this.shape_71.setTransform(59.4485,328.85);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E6E5E5").s().p("AAAAPQgBgPAAgOQAFAJgCAQIAAAEg");
	this.shape_72.setTransform(59.7985,297.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F6F6F5").s().p("AALACIgZAAIAAgDIAZAAIAEAAIAAADIgEAAg");
	this.shape_73.setTransform(154.975,189.45);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D9D9D8").s().p("AAAAcIgBg3IADAAIAAAzIAAAEg");
	this.shape_74.setTransform(439.875,377.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D8D8D7").s().p("AAAAaQgBgaAAgZIADAAIAAAwIAAADg");
	this.shape_75.setTransform(439.5125,314.25);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#DEDEDD").s().p("AyyXIIglAAIAAgEIAlAAIAEAAIAAAEIgEAAgAV1j/IAAgEIAAg8IAEAAIAAA8IAAAEIgEAAgA143HIAaAAIAEAAIAAADQgPABgPAAIAAgEg");
	this.shape_76.setTransform(299.575,337.25);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B7B6B6").s().p("Au0HaQgGgVABgaQAGATABAaIAAADIgCgBgAO2mtQACgUgGgKQANAHgHAaIgCAAIAAgDgAgSnSIAAgFQAIgDAKAAIADAAIAAACQgNACgIAHIAAgDg");
	this.shape_77.setTransform(323.0343,355.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E5E5E5").s().p("AgBAkIAAgEIAAhCIADAAIAABCIAAAEIgDAAg");
	this.shape_78.setTransform(439.5,301.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EBEBEB").s().p("AgBApIAAgDIAAhOIADAAIAABOIAAADIgDAAg");
	this.shape_79.setTransform(439.5,294.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F1F1F0").s().p("AgBAWIAAgDIAAgoIADAAIAAAoIAAADIgDAAg");
	this.shape_80.setTransform(439.5,284.325);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#ACABAB").s().p("AgQACQAOgEAPgCIAEgBIgBACQgQAFgQADIAAgDg");
	this.shape_81.setTransform(400.625,375.05);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B2B2B1").s().p("AAFAIQgNgBgBgOQAIAHAJAGQABAAAAAAQAAAAAAAAQAAAAAAABQABAAAAABIgFAAg");
	this.shape_82.setTransform(392.4,370.75);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B4B3B3").s().p("AGpB0QALAGALgFIAEgBIgBADQgIAEgFAAQgIAAgEgHgAm1hoQgGgLgHgHQAOAAABAPIAAAEQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAg");
	this.shape_83.setTransform(335.15,362.4846);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#A3A3A2").s().p("AT9A0IAAgIIAJgKIADgBIAAAEQgFAKgHAJIAAgEgA0IAMIAaAAIAEAAIAAABQgPACgPAAIAAgDgAoqg3IBCAAIAFAAIAAABQgkACgjABIAAgEg");
	this.shape_84.setTransform(254.7,364.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C1C1C0").s().p("AK6BNIAAgEQAJgIAEgOIACAAIgBADQgCASgMAIIAAgDgArIg9IAAgDQAKgGAHgJIACgBIAAAEQgHAMgMAHIAAgEg");
	this.shape_85.setTransform(308.2,361.95);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#A9A8A8").s().p("AA5IvQgKgGgGgJQAMADAGAJIABAEIgDgBgAhGHzQANACADgJIADAAIgBADQgEAMgFAAQgEAAgFgIgAg5GkQgGgKAAgPQAGAIACAOIAAAEIgCgBgAzzBjIAeAAIAEAAIgBACQgQACgRAAIAAgEgAnpAkIAAgFQAkAEAVgLIADAAIgBADQgRAJgaAAIgQAAgATLAfQAVAAAUACIAAADIgDAAIgMAAQgQAAgKgFgAhrgYIAAgdQAGAMgEAVIgCAAIAAgEgAB4n+IAAgEIAQgsIACAAIAAADIgPAtIgDAAg");
	this.shape_86.setTransform(255.625,355.25);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B7B7B7").s().p("AODGkQgDgLgKgEIAAgDQAPABAAAOIAAAEIgCgBgAMvF4IAAgPQAHgBgBgLIACAAIAAAFQgBAPgHALIAAgEgAKLE1IgBgEQgFgLACgTQAEANADANIAAAEIAAAEIgDAAgA2cB2QAQgBAOgDIADAAIAAACQgOAGgTAAIAAgEgAWVAgIAAgLQAGgEgBgLIACAAIABADQAAASgIAIIAAgDgAGmldQAbAGAagGIAEAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgPAFgMAAQgQAAgNgHgAMLmHQgGgNgDgQQAJAKACAQIABAEQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_87.setTransform(238.4514,359.35);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C1C1C1").s().p("AigHNQgGgJABgQQAFAJACAOIAAADIgCgBgAWgCBQgEgMgBgOIADAAIAEAXIAAADIgCAAgAh1hEIAAgmQAHAQgFAaIgCAAIAAgEgAv+haQABgPgJgEQARgBgHAXIgCAAIAAgDgA2hiLQAQgDARgBIAEAAIgBACIgkAGIAAgEgAF4mJQgOgBgBgPQAHAIALAGIABACIgEAAgAh1mvIAAgEIAAgaQAHALgFATIgCAAg");
	this.shape_88.setTransform(244.975,358.95);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#AAAAAA").s().p("ArEHRQgCgPAAgPIADAAIAAAbIAAAEQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAgArzG4IAAgIQAEgKALgDIAAACIgEAAIAAADIAAAEIgCABQgCAKgHAEIAAgDgAHbGgQgNgDACgSQAEAMAKAHQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAIgEgBgA3FB5QAUACAOgFIADAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQgKAGgKAAQgIAAgIgEgAW+g5IAAgHQAHgCgDgKIAAgEIAEAAIAAAEQABAQgJAHIAAgEgAwpm0QgIgKAAgTQAGAMAFAOIAAAEQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAgBAAg");
	this.shape_89.setTransform(244.8107,363.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#A5A5A4").s().p("AGlD8QgSgHgTAHIAAgDQATgIASAIIADAAIAAADIgDAAgARVAJIAeAAIAEAAIgBADIgOACQgLAAgIgFgAx2hTIAAgDIAPgLIADgBIgBADIgRAQIAAgEgAPwiLIAAgSIAeAAQgVAGgJAPIAAgDgAQkigIAFgBIADgBIAAACIgIAAgAP4j8QgFApAcAIIACAAIAAADIgCAAQglAAAOg0g");
	this.shape_90.setTransform(284.65,374.65);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BCBBBB").s().p("AF0D8QgCgHAAgHQAKgIARAAIAEAAIgBACQgRACgJAIIAAAHIAAAEIgCgBgASti4IAxgEIAEAAIAAACQgaAEgbABIAAgDgAzhj4IAAgEIAeAAIAEAAIAAACQgOACgOAAIgGAAg");
	this.shape_91.setTransform(258.625,373.175);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C7C7C6").s().p("AxTEdIAAgEIAAg0IAFAAIAAA0IAAAEIgFAAgAncjNQgDgOgHgJQANACgBARIAAAEgARQkRQgOAAgFgKIAWAJIAAABIgDAAg");
	this.shape_92.setTransform(280.7,368.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C2C2C2").s().p("AgwFaQAJAIARABIABACIgEAAIgHABQgOAAgCgMgAHzFHQAFgXgRABIAAgEQAVgDgGAaIgBADgAxlD1IAHAAIAEAAIAKgCIABgCIAEAAIAEADIADABIAAABQgRADgQAAIAAgEgAwtCTQAYgFgHgnIACAAIAAADQAKArgdACIAAgEgARjlSQgNgFgCgOIARAQQAAABABAAQAAAAAAAAQAAABAAAAQAAABAAAAIgDAAg");
	this.shape_93.setTransform(275.475,373.209);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#BDBDBC").s().p("ANIHdIAAgEIATgHIAEAAIgBACIgWANIAAgEgA2uAFQgCgVgEgTQAKANgCAYIgBAEIgBgBgABJgEIAeAAIAEAAIgBABQgQACgRAAIAAgDgArphAIAAgPQAGgBgCgLIgBgDIAEAAIAAADQAAATgHAMIAAgEgAWbjhQAQADAHgDIADAAIgBACQgGAEgFAAQgHAAgHgGgAHWl3QAHAFAMACIADABIAAABIgJACQgLAAgCgLgAjpnRIAAgDQAJgJAOgCIAEgBIgBACQgQAGgKALIAAgEg");
	this.shape_94.setTransform(248.325,358.575);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#AAAAA9").s().p("AA4E3IBHAAIAEAAIAAACQglACgmAAIAAgEgAECAWQALgBAIgFIAEgBIgBADQgIAHgOABIAAgEgA0Gg3IAAgEIAiAAIADAAIAAACQgPACgQAAIgGAAgAUDkuQgOgBgFgLIAXAJIAAADIgEAAg");
	this.shape_95.setTransform(263.125,366.25);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#BBBBBA").s().p("Al7EVIAAgEIAQgGIADgBIgBACIgSAMIAAgDgArLDsIAAgEIAAgiIADAAIAAAiIAAAEIgDAAgATciNQALgGATACIAEAAIAAACQgUABgOAFIAAgEgA08iRIA8AAIAEAAIgBACQgfACggAAIAAgEgAUckYIAeAEIADAAIAAADIgLAAQgOAAgIgHg");
	this.shape_96.setTransform(273.775,378.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#999999").s().p("AHcFYIgFgBQgPgIgHgRIAAgDQgKgOgFgRIAAgDQAHgagVADIAAAEIgEAAIgPALIAAADIgEABIgQALIAAAHIAAAEIgBAAQgIA0gcgSIgBgDQgEgHACgNQAFgHACgMIAAgDQAHgKAAgQIABgEQANgaAHgiIACAAQAHgKABgQIAAgEQAGgKABgQIAAgEQANhAAaAXIgCAAIgBAAQAAAOgGAFIAAAPIAAADIgCAAQABAMgHADIAAAPIAAAEIgCAAQgDAcgJAUQgDAJAGAAIAEgBQAUgHASAGIADABQAKADADAMIACAAQABASAEAPQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAQAGAhAVgOIADgBIAWgMIABgDIAAgDQAvgogFAkIgBAEIgCABQgFAJgIAFIAAAHIAAAEIgCAAQgKAighALIAAADIgEABIgIAAQgLAAgGgEgAySDGIgDgBQgIgJgQgBIgCgBIgBgDIAAgCQgOgGACgWIAMAAIADAAIAEAAIAUALIADAAIAHAFIAAADIABADQACAMgHAEIAAADIAAAEIgDAAgAzDgsIgBgDQgJgFgBgPIAAgDIAAgEIAEgDIADgBIAXgJIAAgCQAlgeAhgiIABgEIADAAQALgOgOgIIgDgBQgigggfgmQATgJATAJIAEAAQAFAMAOADIADAAQAYAcAOgMIAEgBQAGgKABgQIAAgEQAIgLgBgTIAAgEQAHgGgCgQIgBgEQABgbASgJIAEgBQACAMAJAFIAEABQADANAAAOIAAADIgCABQgGAJgDAJIAAAEIAAADQgCAbgJASIAAAPIAAAEIgCAAQgBAVgMAJQAKAdAPAYIABADIAAAEQACAYgNAJIAAAEIAAAEQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgXgXgUgYIgEAAIgOALIAAAEIAAADIgBACQgKABgFAEIAAAEQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgGAGgHAEIAAAEIAAAEIgDABQgFAIgLACIAAAEIgDABIgPAHIAAADIAAAEIgDABQgIAGgJAAQgHAAgHgDgApKhDQgNAAgKgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgDgEABgIIAJgIQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAgEQAWgHASgNQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAMgCAJgGIABgDIAAgEQANgFALgJIACgBIASgMIABgDIAAgDQAGgCADgFIACgBIASgQIABgDIAAgDQAKABABgJIAAgEQAMgHAHgMIAAgDIAAgEQASgqAqADIAAACIAAAeIAAAEIgDAAQgCALgHAHIAAAIIAAADIgBABQgBAKgJABIAAADIgCABQgHAJgJAFIAAAEIAAAEIgBADQgFAFgFADIgEABIgPAKIAAAEIAAAEQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAgBAAQgDAFgHAEIgDABQgKAGgNAEIAAAEIAAAEIgDAAQgQANgWAJIgEAAQgKACgIAFIAAAEIgDABQgQAIgTAGIgDAAgAALhdQASgKAQgMIADAAQAKgHANgGIAAgCIAAgEQAIgFAIgFIADgBIARgQIABgDIAAgEQAHgBACgFIACgBQALgKAEgNIAAgDQAOgSAHgbIADAAQAEgOARgBIAEAAQAEABACAEIABACIAAAiIAAAEIgCAAQgLAjgQAcIgDABQgNAJgLANIAAAEIgCAAIgQAHIAAAEIAAAEIgDAAQgKAJgNAFIgDABQgJAFgKACIAAADIgFABQgHADgMAAIAAAEIAAAEIgCAAQgIADgGAAQgPAAgCgWgABajRIgEAAIAAgDQgGgMgMgEIgEAAQgSgbgJgkQAegLALAaIABADQAHAHAFALQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAEABQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIAAAEQACATgHALIAAADIAAAEIgDAAgASqjgIgBgDQgGgIgMgEIgDgBIgJgKIAAgEIAAgLQAVgBANAEIAEABQAMAFAIAJIACABQAGAMACAOIAAAEIgEAAIgIABQgNAAgMgJg");
	this.shape_97.setTransform(282.2,377.525);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#999998").s().p("AmxH9IgaAAIgBgCQghgUgLgqIAAgDQgCgNgFgKIgBgDQgBgZgGgUIAAgEIAAgmIAAgDQAHgIgDgSIAAgEQAFgTAJgQIAAgDQAZAHgNAjIAAADIgEAAQAAAiACAhIACABQABAVAFATIABABQACAVAHAPQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAMAaASgOIADgBIASgMIABgDIAAgDIATgPIAEAAIAAAlIAAAEIgDAAQgCALgHAEIAAAEIgDAAIgMAHIAAAEIAAAEIAAACIgHACIAAADIgEAAgAUAhgIgegEIgBgCQgLgEgHgFIgBgDQgDgFAAgLQAVgBANAEIAEABQALAMAHAPIAAADIgDAAgAzZlIIgTgHIgBgEQgGgOgEgQIAAgEQgBgQgGgKIgBgEQgEgUABgZQAKgIAJAHIADABQAEAUAHgYIAAgDQAKgPANgKIAEgBIADAAIAiAAIAEAAIAEADIADAAQAEAMAFAKQAAAAAAAAQABAAAAABQAAAAABAAQAAAAABAAQAPgHAFgTIACAAQAJgIAIgIIABgDIAAgEQALABAFgEIADgBQATAAAPAEIAEAAQAgAYAJAvIAAAEIAAA8IAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgDABIgDAAQgKgEgGgHIAAgDQgRghgNgnIAAgDQgBgOgRACIAAAEIgBADQgRAUgQAWIgCAAQgEAJgFAGIAAAIIAAADIgBAEIgKAPIAAADIAAAEIgEAAIgXgEIAAgDQgFgLgGgLIAAgEQAAgQgHgLIAAgDQACgSgRADIAAADIAAAEQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgDABIgCAAQABAKgGABIAAAXIAAAEIAAADIgEAAIAAAmIAAADIgCAAQAAANgJACIAAAEIgEAAg");
	this.shape_98.setTransform(279.5722,360.625);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#BAB9B9").s().p("AjwC7IAAgTQAHgDgCgLIACAAIAAADQAAAUgHAOIAAgEgAKgCyQgGgGACgPQAYgCAQAHIABACIgDAAQgOgFgVACQAAAKADAFIABADIgDgBgArEikIAAgLQADgIALACIABACIgCABQgIAIgFAKIAAgEgAmKi6QAIADACgGIACgBIgBAEQgEAKgCAAQgDAAgCgKg");
	this.shape_99.setTransform(335.15,331.475);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#C4C3C3").s().p("AIOGXQgKgFACgUIALAWIAAAEIgDgBgAMMhCIAAg8IAEAAIAAAEQACAjgGAYIAAgDgAY7krIAAgCQAKgJADgOIADgBIAAAFQgDASgNAHIAAgEgA5KmXIAaAAIAEAAIAAACIgNACQgKAAgHgEg");
	this.shape_100.setTransform(235.625,364.75);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#AFAFAF").s().p("ADEEzQAMAGAFgJQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIgBADQgEAIgFAAQgEAAgFgHgA3pD/IAAgEIAAh0QAHA3gFBBgAMAC7IAAgdQAHALgEAVIgDABIAAgEgAWMClIAsAAIAEAAIAEAAIAAACIg0ABIAAgDgAyvClIAiAAIAEAAIAAACQgTABgTAAIAAgDgAH6B0IAAgEIAAghQAHAOgEAXgAkDAhQgIgFgPACIAAgDQARgDAIAHIABADIgDgBgAXihgIgBgLQAHgDgBgMIACAAIAAADQABASgJAIIABgDgAzJkMIAAgEQAJgBABgKIABAAIAAADQABAOgMABIAAgDgA3akfIAAgaIAEAAIAAAEQADARgHAJIAAgEg");
	this.shape_101.setTransform(250.6014,344.1689);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#A1A0A0").s().p("AjuD4QALACAKAEIABACIgDAAIgHABQgKAAgCgJgAnVD/QgEgMgBgOQAIAIgBAPIAAAEIgCgBgAm1DiIgCgBIgFgdQAGAMAFAOIAAAEIgEAAgAKEhQIAAgMQAPgIAGAQIABAEIgDAAIgBgDQgNgOgFAVIAAgEgAqZjbIAAgHQAKgHgDgTIAAgEIACAAQAFAdgOANIAAgFg");
	this.shape_102.setTransform(294.55,378.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D1D1D1").s().p("AMsDyIADAAIABgDQAHgKATACIAEAAIAAADIAEABIAAAEQgBALgHADIAAAEIAAAEIgEABQgIAEgFAAQgOAAABgYgAtPjoIgBgEQARgtAeAYIABADQgNAtgOAAQgKAAgKgXg");
	this.shape_103.setTransform(270.6,342.7658);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C0C0BF").s().p("ANAHZIAaAAIAEAAIAAACIgeACIAAgEgAl3FeIAAgHQAGgFAGgGIACgBIAAAEIgOATIAAgEgACBE9IAAgPQAEgLAIgIIACAAIAAACQgJAQgFATIAAgDgAVXAVQAVAAAUABIABACIgEAAIgEABIgLABQgOAAgJgFgA2Am6QARgEAUACIAAACIgEAAQgQADgRABIAAgEgAnvnNIAAgDIAPgLIADgBIgBADQgIAJgJAHIAAgEg");
	this.shape_104.setTransform(215.075,358.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C3C3C2").s().p("AMQEvQgDgOgGgIQAMACgBAQIAAAEgA0ZCrQgKgDADgSIALAAIAEAAIgBACQgFACgFAAQgDANAJADIABACIgEgBgAUDA4IAAgEQAWAGAEgNIABgEIAEAAIgBAEQgBANgPAAQgGAAgIgCgAvxkuQAFAJAOACIADAAIAAACIgJACQgNAAAAgPg");
	this.shape_105.setTransform(224.5667,356.525);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#BABABA").s().p("APIFBQgUgEgSgHQAYAAAQAKIABACIgDgBgAhiEdQAVgEAYAAIADAAIAAABIgwAGIAAgDgAmkD+IAAgDIAPgHIAEgBIgBADIgSAMIAAgEgASoC7IgDgBQgLgIgUABIAAgDQAYgBANAKIABACIgEAAgAyrjNQALADgBgKIACAAIgBADQgEANgCAAQgDAAgCgJgAg5kqIAAgMQAGABgCgIIAAgEIADAAIAAAEQAAAPgHAIIAAgEg");
	this.shape_106.setTransform(273.025,336.325);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#BFBFBE").s().p("AkzCvIAmAAIAEAAIAAAEIgEAAIgNABQgPAAgKgFgAsYBUQgJgHABgSIAKAXIABAEQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBgAMgiZIAAAAIACAAgAKsikQBFgIArARIhwgJgAF5ioQgMgDgGgIIADAAIASAIIABADIgEAAg");
	this.shape_107.setTransform(324.9486,388.02);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#A5A5A5").s().p("AOVAwQgKgFgFgJQAMADAGAJIAAADIgDgBgAuXALIAAgEQAHgEAFgFQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAAADQgGAJgJAGIAAgEgAKAgwIAlAAIAEAAIAAADQgVABgUAAIAAgEg");
	this.shape_108.setTransform(259.35,368.125);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B0B0AF").s().p("AjcGHIgJgeQALAIABASIAAAEIgDAAgAKrB9IAeAAIAEAAIAAACQgJACgHAAQgKAAgIgEgAIsAYIAdAGIAAACIgDAAIgGAAQgOAAgGgIgAUfiSIAAgFQAJgDAEgHIADgBIgBAEQgFAKgKAFIAAgDgA0oklQgFgNAAgRQAGALABAPIAAAFIgCgBgAxFlRIAAgXQAGgBgBgKIADAAIgBADQgBAUgGAOIAAgDgAyAlWQgFgVABgbIADAAQAAAZADAUIABAEIgDgBg");
	this.shape_109.setTransform(266.65,354.85);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#BBBABA").s().p("ARdE1QgOgBgBgOQAHAIALAEIABADIgEAAgAw6CfIAAgMQAHgCgBgMIACAAIAAADQAAATgIAIIAAgEgAxUB2QAOgjgagGIAAgEQAjgEgVA1IgCAAIAAgEgAxYkGIAAgFQgEgRAAgYQAHAUgBAag");
	this.shape_110.setTransform(220.625,340.25);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#BABAB9").s().p("ArVDCQgCgDAAgEIAtAAIAEAAIAAACQgXACgWAAIAAADIgCAAgAs/BEIAhAAIAEAAIAAABIglACIAAgDgAM/ikQgCgOAAgPIADAAIAAAaIAAADIgBAAg");
	this.shape_111.setTransform(247.975,381.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B9B9B8").s().p("AL3IqQgOgBgBgOQAHAIALAFQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgEAAgADzITIAAglQAHAQgFAYIgCABIAAgEgAQbBwIAAgDQAFgGAKgCIAEAAIgBACQgLAFgHAIIAAgEgASEBOIAAgaQAHALgFATIgCAAIAAgEgAM/lbIAAgTIADgDIAEgBIAAAEIgHAXIAAgEgAJamAIAAgEQAGgJADgNIACgBIAAAEQgBANgGAKIgEAAgAyHoLIAAgEQAIgLAFgOIACgBIAAAEQgEATgLALIAAgEg");
	this.shape_112.setTransform(215.6042,353.925);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#BCBCBC").s().p("AuqFsQgIgEAAgOQAFgEAKAAIAEAAIAAADQgKAAgFAFQACAIAEAEIABADIgDgBgAOvCeQgKgMACgYIAEAAQgCAWAJAMIABADIgEgBgAjNlhQgOAAgFgLQAMAEAKAGQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgEAAg");
	this.shape_113.setTransform(254.5236,354.85);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C0BFBF").s().p("AIcEeQgFgbgTAUIAAgEIAAgIQAcgHgCAXIAAADIgCAAgABsEAIAAgDIANgWIACgBIgBADQgEANgGAKIgEAAgAoDkWQgLgEgQABIAAgEQASgBALAGQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgDAAg");
	this.shape_114.setTransform(337.2038,341.3683);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#BFBEBE").s().p("ADsEOQgIgMACgVQAFAPACAQIABADIgCgBgAtSCfQAvAAAvACIAAACIgEAAIgEAAQgUADgRAAQgcAAgVgHgAj3gxQAJADANAAIADAAIAAADIgLABQgLAAgDgHgANSjaQgFgZgBgbQAIAVgBAcIAAADIgBAAg");
	this.shape_115.setTransform(246.0766,375.425);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#ADADAC").s().p("AsrHuQAQABABgQIACAAIAAAEQgCAOgIAAQgEAAgFgDgAMOhzQAOAEAQACIAAABIgEABIgHAAQgNAAgGgIgAklh/QgIgIgBgOQAIAIACALIABAEIgCgBgACTnbQgHgHgBgOQAHAHADAMIAAADIgCgBg");
	this.shape_116.setTransform(253,365.1446);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#ADACAC").s().p("AxnDiIAmgDIADgBIAAACQgUAFgVABIAAgEgARODbIAAgHQANgBANACIAAACIgDAAQgSgCgFAJIAAgDgALYg9QAKgSABgbIAAgDIACAAQAEAkgRAQIAAgEgAQujAQgEgTgBgSQAIAMgBAVIAAAEIgCAAg");
	this.shape_117.setTransform(217.275,325.675);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B8B8B7").s().p("An+HHIgeAAIAAgEIAeAAIAEAAIAAAEIgEAAgAKeFeQgCgMAAgKQAJgGAQADIABADIgEgBQgMgBgGAFIAAAPIAAAEgAUYA+QAPAAAPABIAAADIgEAAIgJAAQgLAAgGgEgAEMA+IBHAAIADAAIAAABQglADglAAIAAgEgA0WAjQgJgMgSAJIgEAAIAAgEQAWgKALAPIABACIgDAAgADzmRQgCgaAAgbQAHAUgDAdIAAAEg");
	this.shape_118.setTransform(232.25,351.475);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#A0A09F").s().p("AuQEnIAAgDIAAgaIAEAAIAAAaIAAADIgEAAgAjWCKQgFgNgIgJQAPADAAAQIAAAEIgCgBgANohrIAAgEQALgGATAEQAAAAAAAAQAAAAAAAAQAAABAAAAQABABAAAAIgFAAQgTgCgHAKIAAgEgAPVjnQgLgDgEgIQANAAAFAIIAAADIgDAAgAvEjnQgOgDgFgMIAFADIADABIAOAIIABADIgEAAgAtmkQIAAgEQADgJAGgIIACgBIgBADIgHATIgDAAg");
	this.shape_119.setTransform(264.95,377.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#A3A2A2").s().p("AusEAIA4AAIAEAAIAAACQgeACgeAAIAAgEgAUNDaIAAgDQAJgCAGgFQABAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAAADQgIAHgKAGIAAgFgAy9hqIAAgEIAAgZQAGAHgCASIAAAEIgEAAgA0ejaIAAgXQADgJAFgJIADAAIAAADIgLApIAAgDg");
	this.shape_120.setTransform(232.25,334.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B0B0B0").s().p("AxsGyIA/AAIADAAIAAACQgPACgOAAQgVAAgQgEgAhsGJQATAAATABIAAADIgEAAIgLABQgOAAgJgFgAhsEvIAAgEQASACAJgFIADgBIgBADQgHAFgOAAIgIAAgAvjD+QALAXAOAVQAAABAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIAAACQgagKgBglgARmA/IAAgPQAHgCgBgNIACAAIAAAEQAAATgIALIAAgEgAMOgDIAxAAIAEAAIgBACQgaABgaAAIAAgDgAkcgSIAAgIQAHgGACgMIADAAIAAAEQgCAQgKAKIAAgEgArRghIAAgEIA0AAIAEAAIAAACQgWACgXAAIgLAAgAh7hkIAAgEIAmAAIAEAAIAAACQgSACgRAAIgHAAgAgJmfQgJgIgEgOQAKAIAFALIABADIgDAAg");
	this.shape_121.setTransform(272.1,357.667);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#CDCDCC").s().p("AnJEPQAJAGARgCIAEgBIgBADQgIACgGAAQgLAAgEgIgAGskWIAbAAIADAAIAAAEIgDAAIgIABQgMAAgHgFg");
	this.shape_122.setTransform(307.825,384.0756);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#9C9B9B").s().p("ARQASIgbAAIgDAAQgGgBgCgGQARAFAYABIAAABIgDAAgAxSgKIAAgEIAAgEIAlAAIAEAAIAAAEIgEAAIgiAAIAAAEIgDAAg");
	this.shape_123.setTransform(242.925,354.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#CBCBCB").s().p("AuXEwQgJgeADgoIAAgEIAAgEIAEAAQgDArAGAgIABAEIgCgBgAg5ilIAAgEIAaAAIAEAAIAAAEIgEgBQgRgBgJAGIAAgEgAObksIguAAIAAgEIAuAAIADAAIAAAEIgDAAg");
	this.shape_124.setTransform(262.9109,382.525);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C5C5C4").s().p("AuaErIgUgLQARgCAFAKIABADIgDAAgAPYh3IAAgDIAAgmIAIAAIADAAIAAAEQgKAQgBAZIAAgEgA0CiVIAAgEIAtgDIADAAIAAACQgbACgVAHIAAgEgAUAkYQgHgHgFgLIAEAAIAKAPIABADIgDAAg");
	this.shape_125.setTransform(257.125,364.025);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C2C1C1").s().p("AGqGJIAAgPQAHgCgBgJIACAAIAAAEQgBAQgHAJIAAgDgAt2ADIAeAAIADAAIAAADQgQABgRABIAAgFgANzlMQACglgGgaQANAYgIAqIgBABIAAgEg");
	this.shape_126.setTransform(278.1122,354.65);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B1B1B1").s().p("AjnGcIAAgiIAEAAIAAADQADAWgHAMIAAgDgAtlGfQgCgVAAgUIAEAAIAAAmIAAADIgCAAgACnAdQgCgHAAgHQANAAAKgDIADgBIgBACQgIAGgOAAIAAAHIAAAEIgBgBgAHFALQAPAAAOACIABACIgEAAIgKABQgKAAgGgFgANkgLQgKgEgFgKQAMADAGAJIABACIgEAAgAHVmBQgDgOgCgPQAJAIgBASIAAADIgDAAg");
	this.shape_127.setTransform(314.375,356.175);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#A7A7A6").s().p("AU1FyQAWACAMgJIADAAIgBADQgKAIgLAAQgHAAgIgEgATTjrIAAgEQANAAANACIAAACIgEAAQgOgCgIAGIAAgEgA1AlbQAFgdgdAGIAAgDIATAAIADAAQAHAHgCAPIgBAEg");
	this.shape_128.setTransform(232.4,335.217);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C7C7C7").s().p("ApqBFIAhAAIAFAAIAAAEIgFAAIgLAAQgOAAgIgEgAJGhFIAAgDQASAAATACIAAABIgDAAQgWgCgMAGIAAgEg");
	this.shape_129.setTransform(297.35,312.9868);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#A5A4A4").s().p("ApwDvIAAgDQAJgGAHgJIACAAIAAADQgHAMgLAHIAAgEgADuivIgGgiQAJAKgCAUIAAAEgAJtjgQgJgEABgPQAIAGADAJIABAEIgEAAg");
	this.shape_130.setTransform(303.175,335.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#B3B3B2").s().p("Ah7GzQgFgJABgMQApgLABAdIgCAAIAAgDQgGgTggAHIAFAPIAAAEIgDgBgAwVF8IAAgCIACACgAw6F4IAAgEQAbgFAKALQgTgCgSAAgAQwBcIAAgEQAIgEABgLIACAAIAAAEQAAAOgLAEIAAgDgALjmgQAQAIAIgLIACgBIgBADQgGAJgGAAQgGAAgHgIgAAAmaQgDgLgBgOQAGAIAAAOIAAAEIgCgBg");
	this.shape_131.setTransform(273.75,363.475);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#AEAEAD").s().p("AlMHiQgQABgHgIQAOACAMADIAAACIgDAAgANvE+IAAgDQgCgMgJgDQATgDgFAVgAz7iFIAXgEIADAAIgBACQgLAEgOABIAAgDgAT5mFQgGgKgGgLQAMAEADAOIAAAEQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAgAN+mXIAAgDIAQgLIADgBQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgSAQIAAgEgALFnLQgDgPgGgIIADAAQAJAFgBAOIAAAEIgCAAg");
	this.shape_132.setTransform(220.1,360.65);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#A6A6A5").s().p("ArlGEIAAgMQAEgEAEgGIACgBIAAADQgFANgFAKIAAgDgAAOlHQgIgHgEgLQALAEADAMIABACIgDAAgALYlcIgBgMIANgeIADAAIgBAEQgFAXgKASIABgDg");
	this.shape_133.setTransform(277.55,355.95);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B2B1B1").s().p("AFtC5QgUgHgdAAIgEAAIAAgEQAigBAWAKIAAACIgDAAgAlwi4IAUAHIADAAIAAACIgIABQgLAAgEgKg");
	this.shape_134.setTransform(366.2,342.875);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#BEBEBE").s().p("AwXGMIAbAAIAEAAIgBADQgOABgQAAIAAgEgAE7AiIAAgIQAHgJASADIAAACIgDAAQgSACgEANIAAgDgAKWkFIAAgEQABgTgFgPQAMAMgGAagAQJluIAAgLIAMgWIADAAIgBADQgGARgIARIAAgEg");
	this.shape_135.setTransform(266.475,349.075);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B1B1B0").s().p("AACAOQgFgNAAgPQAGAKAAAPIABAEQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_136.setTransform(330.475,313.15);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CFCFCE").s().p("AgZINIAZAAIAEAAIAAADQgHACgGAAQgKAAgGgFgACWG7IAAgaQAGAKgEAUIgCAAIAAgEgAKlFnIAAgCIADAAIABAAIAWAAIAEAAIAAACQgPACgPAAIAAgCgAnPAGIBWAAIAEAAIAAABQgWADgTAAQgaAAgXgEgAvMk/IAAg0QAHAXgFAgIgCABIAAgEgAPJoNIgtAAIAAgEQAZAAAYACIAAACIgEAAg");
	this.shape_137.setTransform(236.175,358.963);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#9F9E9E").s().p("AAUACQgaABgSgGIAsAAIADAAIACAAQABAGgGABg");
	this.shape_138.setTransform(331.1269,306.775);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#B4B4B3").s().p("AjoG5IAdAAIADAAIAAACQgIADgHAAQgKAAgHgFgAihlZQgIgHAAgOQAHAHAEALIAAAEIgDgBgADnmjQgEgMgBgOQAIAHgBAPIAAAEIgCAAg");
	this.shape_139.setTransform(321.3,356.6154);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#BDBCBC").s().p("AAEAKIgIgUQAJAEABAOIAAADIgCgBg");
	this.shape_140.setTransform(346.75,309.75);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#C2C2C1").s().p("Aj0HGIAAgSQAGgCAAgJIABAAIAAADQgBATgGALIAAgEgABrA6IAAgDIAPgMIADAAIAAADIgSAQIAAgEgA0MgfIAaAAIAEAAIAAACIgeACIAAgEgAgPgqQgHgFADgNIAHAAIAEAAIgBABQgDACgEAAQgCAKAFADQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgDAAgAvOmZIAAgDQAGgIAKgDIADgBIgBADQgKAHgIAJIAAgEgAT2m6IAAgEQAJgGAKgEIAEgBIgBACQgMAIgKAIIAAgDg");
	this.shape_141.setTransform(223.275,353.35);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#BCBCBB").s().p("AEbIbQACgSgKgFQASACgJAYIgCAAIABgDgAjSFZQAMgDAOgBIAEAAIgBACQgOAEgPABIAAgDgAGwDOQgOAAgBgPQAHAIALAEIABADIgEAAgAFAC/QAEAJALACIADAAIAAACIgJABQgLAAACgOgARhBaQAFAOAVgBIAAACIgEAAIgIABQgQAAACgQgAGtAhQgLgHADgXIAEAAIAAAFQgCAQAIAHQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgDgBgAzFkbIAAglIAEAAIAAADQADAXgHAPIAAgEgAyUkrIAXAFIADAAIAAABIgLACQgKAAgFgIgATElQIgGgaQAJAGgBARIgBADIgBAAgAyHmFQgGgKgDgLQAKAEABAOIAAAEQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAgAD+mjQgNgNgeADIAAgEQAhgEALAQIABADIgCgBgAHioEIgJgaQALAGAAARIAAAEIgCgBg");
	this.shape_142.setTransform(279.0357,353.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#ACACAC").s().p("AxyHZQgCgXAAgWQAGAOgCAYIgBADIAAAEIgBAAgAENDEIAAgPQAHgDgBgMIACAAIAAAEQAAATgIALIAAgEgARzkIQgEgPgCgSQAIALAAATIAAAEIgCgBgAGSm/QgEgMgCgNQAIAHAAAPIAAADIgCAAg");
	this.shape_143.setTransform(287.8015,350.025);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#C8C8C7").s().p("AxtH0IAAgIQAHgFAFgFIADgBIgBACIgOAUIAAgDgAGVCEQgIgIADgSIADAAQgCAQAGAIIAAADIgCgBgAylB6QAIgGAKgCIAEAAIAAACIgWAJIAAgDgAF2nDQgNgFgVADIAAgFQAYgCANAIIABACIgEgBgASjndQgBgOgEgLQALAEgDATIgBACIgCAAg");
	this.shape_144.setTransform(278.8821,357.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#A8A7A7").s().p("AEbIIIAAgEQASACAMgFIADAAIgBACQgJAFgPAAIgIAAgASdCkQAPACAOAEIAAACIgEAAIgGABQgOAAgFgJgAh5AhQAeAAAeACIAAACIgEAAIgRABQgVAAgSgFgA1ig7IAAgEQAdACARgJIADAAIgBACQgOAJgXAAIgLAAgATRkrIAAgDQgDgXgBgaQAIAWgCAegAwEmqQgDgMgOABIAAgEQASgCABAOIAAADgAVhnIQgGgMgHgKQANADABAQIABADIgCAAgANmn8QgQAAgDgLIAWAJQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAABIgEAAg");
	this.shape_145.setTransform(274.525,358.4461);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#C9C9C9").s().p("AJXFFIAeAAIAEAAIgBACQgIACgIAAQgKAAgHgEgAyhBSIAAgEQAGgGAAgQIABAAIABAEQACAQgGAGIgEAAgASckuQgBgNAAgNIADAAIAEAAIgBADIgDABIAAASIAAAEg");
	this.shape_146.setTransform(292.675,340.8292);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#A7A6A6").s().p("ApUIGQANgEAHgKIADgBIgBADQgFAOgRACIAAgEgA2ym6IACAAIAAABIgCgBgA27nRQAMADgDAUQgKgGABgRgAWXnCQATAIAQgLIACgBIgBADQgJAJgKAAQgIAAgJgIgAUEnGQgDgFAAgGQAHgBgCgKIAAgEQAHALgHAMIAAADIgCAAgAW1n/QgOgJgbADIAAgEQAdgDAPAMIABACIgEgBg");
	this.shape_147.setTransform(270.4,358.9605);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#BFBFBF").s().p("AsMGBQAAgNgKgBQAUgFgHAWQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIAAgEgAv3FqQgQgGAFgbIASACIAAABIgDAAIgMAAQgCAWANAHIABACIgEgBgAmnBrQgGgFABgNQAGgEAGgCIAEgBQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgKAIQAAAIADAEQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABIgDgCgAxWlnQgGgNAAgQQAHAJAAAQIABAFIgCgBgARZl1QgRAAgCgPQAJAIANAFIABACIgEAAg");
	this.shape_148.setTransform(263.325,359.55);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B2B2B2").s().p("Ao2DdIAGABIgGADIAAgEgAonDRIAAgDIAAgaIAAgEQADgMgHgDIAAgEQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAPAkgNATIAAgEgAoHC3QgCgQAAgRQAHAKgDAUIAAADIgCAAgAIGiCQAaACATgFIAEAAIgBACQgMAFgNAAQgLAAgMgEgAnTidQgFgSAAgWIADAAQABAUADARIAAAEIgCgBgAHTizQgGgTABgZIAEAAQgBAXAEASIAAAEIgCgBg");
	this.shape_149.setTransform(323.175,335.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#A8A8A8").s().p("AFRGuIgBgDIgDgBIgEABQgQACgGgGQAagFAGAMgAMZDSIAiAAIAEAAIAAABQgKACgJAAQgLAAgIgDgAsJC3IAAgEQANgJgCgYIAAgEIACAAQAGAigTALIAAgEgA12jcIAAgEQAJgBAAgNIACAAIAAADQABAQgMADIAAgEgAIQkUQAJgIADgOIADAAIAAAEQgCARgNAFIAAgEgAy2kcQABgQgGgJQAMACgFAUIAAADgATxkuIAAgEQAKgDADgLIABgBIAAAEQgCAOgMAFIAAgEgAVZk1IAbgEIAEAAIgBACQgKAEgIAAQgGAAgGgCgAuzlFQgBgTgMAIIAAgEIAAgDQARgDgCASIgBADgALxmmIAAgDQAKgBAIgDIADAAIAAACQgMAEgJAFIAAgEg");
	this.shape_150.setTransform(254.5,350.925);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#B6B6B6").s().p("AhsHCQgHgQgCgVQAIAOADAUIABAEQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAgApmFpQAJgGARAEIAAACIgEAAQgNAAgJAEIAAgEgAZWguIAAgEQgCgOgFgMQANAHgEAXgAt/lOIATAHIAEABIgBABIgHABQgMAAgDgKgA5YmdIAAglQAGAQgFAZIgBAAIAAgEgAV5mvQAHgHACgMIADAAIAAAEQAAAPgMADIAAgDg");
	this.shape_151.setTransform(243.0563,360.475);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#A6A5A5").s().p("AAEE2QAIgFALgCIADAAIAAACIgWAJIAAgEgABpD3IAAgEIAQgKIADgBIgBADQgIAIgKAIIAAgEgAUqCGQgHgJACgUIAHAaIABAEIgDgBgAJXiRIAPgKIAEgBQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQgFAIgMAEIAAgEgA4SioQgHgPACgWIAEAAQgBAVAEANIAAAEIgCgBgAgXjKQgHgRABgbIAEAAQgCAYAFASIABADIgCgBgAOejNQgCgQgEgOQALAHgCATIgBAEgAAQjZQgGgFACgNQAVgEADAMIgCAAIAAgCQgJgCgKAAQAAAHADAFIABADIgDgBgAYVkrQgLgDgEgLQAKAFAIAHIAAADIgDgBg");
	this.shape_152.setTransform(227.1618,337.825);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#C4C4C4").s().p("AIMH9QAJAGARgCIAEgBIgBADQgIACgGAAQgLAAgEgIgAi5HbQgKgGACgQIAKATIABADIgDAAgABlFvIAAgXQAGgCgCgNIAAgEIACABIACADIAAAEQgBAVgHARIAAgEgAwAl5QAGAHAJAEIAEAAIgBACIgHABQgMAAABgOgAAAntIAAgEIAQgKQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgSAQIAAgEgAP/n1QgEgLgMAAIAAgEQARgEgBAQIACAAIAAADIgCAAg");
	this.shape_153.setTransform(277.3244,361.0065);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#9A9A99").s().p("AqGHSIAAgEIAAgaIAEAAIAAAaIAAAEIgEAAgAh2FLIADAAIAaAAIAEAAIAAAEIgEAAIgKABQgMAAgHgFgAjuFLIAEAAIBHAAIADAAIAEAAIAAACQgTACgRAAQgZAAgVgEgAB4guIAAgaQAGAKgEATIgCABIAAgEgAKEmzIAAgaIAAgEQAGANgEAUIgCABIAAgEg");
	this.shape_154.setTransform(315.492,357.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#B5B4B4").s().p("AAtC2QAaAGAWgGIAFAAIgBACQgOAFgMAAQgOAAgMgHgAhOi1QgMgDgHAEIAAgEIAAgEIAXAGIABACIgFgBg");
	this.shape_155.setTransform(386.95,323.3895);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#B0AFAF").s().p("ACgHyIgBgeQAGAIgDARIAAAFgAIZHQQADgNAIgIIAAACIAAAEQAAAPgLAEIAAgEgAImG6IACgCIAAACIgCAAgALyGRIAAgQQAGgFgBgOIACAAIAAAFQABAVgIAMIAAgDgAvdB4IAAgLQAHgEgDgMIAAgDIABAAQAFAWgKALIAAgDgABYBtQAUAAAVACIAAABIgEAAIgMABQgPAAgKgEgAA9AHIAiAAIAEAAIAAAFIgEAAIgLAAQgOAAgJgFgA1LAAIAAgDIAAgwQAGAVgFAegACBkuIAAgIQAGgHADgLIACAAIAAADQgCARgJAKIAAgEgAVKmEQgCgOgHgJQANACgCARIAAAEIgCAAgABHm9QgCgaAAgaQAGAUgCAdIgBADg");
	this.shape_156.setTransform(249.1195,350.55);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#AFAFAE").s().p("AxKGsIgOgNQAQACAIAJIADABIgBACIgKABQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAgADJBwIAAgDIAPgHIADgBIgBACIgRANIAAgEgAJeAQQALgMgMgHQAVAFgSAPIgDACIABgDgARSmMIAAgSQAHgBgDgLIAAgDIACAAQACAWgIAPIAAgEgAMUmPIAAgEQAEgHAIgEIADAAIgBACIgOAQIAAgDg");
	this.shape_157.setTransform(273.72,354.675);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#B5B5B5").s().p("AmkGQIAAgaIAEAAIAAAEQADASgHAIIAAgEgAIRDZIApAAIAEAAIAAACQgLACgJAAQgOAAgLgEgATJDdQgPgCgEgOIAWAOIABACIgEAAgATYB0IApAAIAEAAIAAAEIgEAAIgNABQgQAAgMgFgAUHgDQgCgJAAgKQAYgBARAHIAAACIgDAAQgOgFgUABIAAAMIAAADIgCAAgAiAgzIAaAAIAEAAIgBACQgOABgPAAIAAgDgA0BgwIgsAAIAAgDQAYAAAYACIAAABIgEAAgAR3i6IAAgEIAAgaIAEAAIAAAaIAAAEIgEAAgAudkgIAAgDIAAg8QAHAcgFAjgASWluQgHgQgBgVIADAAIAAAEQADAPAEAPIABADIgDAAg");
	this.shape_158.setTransform(269.675,352.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#B3B3B3").s().p("AmsHZQgHgKgCgMIAEAAIAHASIABAFQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAgA2FiAIAmgEIACAAIAAACQgTAEgVABIAAgDgAV/m+IAAgEIAAgPQAGAAAAgHIACAAIgBADQgCAPgFALIAAgDgAiRnOQgPgEgWABIAAgEQAYgCARAIIAAACIgEgBg");
	this.shape_159.setTransform(245.9,357.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#A4A3A3").s().p("AALIrQAsAIAugEIAEAAIgBABQgUAEgTAAQgdAAgZgJgAxLINQAIAHAOACIAAACIgDAAIgFAAQgNAAgBgLgAg4CXIAAgEQALgBAIgCIAEgBIAAACIgXAJIAAgDgARIjiIAAgEIAAhPQAHAlgFAugAQyl8QgJgJABgVIAKAbQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIgEAAgAP9mhIAAgeIAEAAIAAADQADAUgHALIAAgEgAFRopQgIgIgTACIAAgEQAWgCAIAKIAAADIgDgBg");
	this.shape_160.setTransform(292.313,354.5664);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#D0D0D0").s().p("AiWEcQAFgDAEgHIACgBIAeAAIAEAAIgBAEQgKAcgMAAQgKAAgMgVgAojjJIAAgCQgLgFgIgIIgBAAQgEgLgCgLQAHgSAQgIIADAAQAQgBALAEIADAAQAGAKgCAQIAAAEIgDABQgHAHgFAHIAAAEIAAAEIgBACQgHAHgFAAQgDAAgDgCgAFqj9QAJggAcgMIAEgBQAMAAAEAKIACABIAAAaIAAAEIgCABQgPAegOAAQgOAAgOgbgAISkQQALgPAOgMQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAIgDAKABIAAACIAAADIgDABIgEAAIAAAeIAAAEIgCAAQgLARgIAAQgKAAgGgZg");
	this.shape_161.setTransform(337.725,339.6866);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#A09F9F").s().p("AuCGWIAAgDIAwAAIAFAAIAAABQgfAAgWAGIAAgEgA0HjPIAAgDQALgagEgpIAAgEIADABIABADIAAA0IAAAEIgCAAQABAQgKACIAAgEgAISkHIAAgOQAHgQgDgaIAAgDIADAAIAAApIAAAEIAAADIgHAPIAAgEgAlbk4QgBgEAAgGQAEgEAEgDIADgBIgBAEQAAAGgHABIAAAEIAAAEIgCgBgAUGmRIAAgCQgLgBgHADIAAgDIAAgEQATgFABAMg");
	this.shape_162.setTransform(266.6,349.5617);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#989898").s().p("As+KUQgMgDgDgMIgCAAQgCgLAAgLQAigWAWgiIAAgEIAPgUIAAgCIAAgEQAMgQAJgRIACAAIABAAIgBgCIAAgBIAAAAQgLgKgbAFIAAADIgDAAIhAAAIAAgBQgGgBADgJQARgMAXgGIAEAAQARAAARgCIAAgCQAVAAAUgCIAAgBIAAgEIAAg0IAAgDQgvgCgvAAIgBgDQgEgEgCgHQAFgFAKgBIAAgCQAPAAAPgBIAAgDIAlgCIAAgBQAdgDgJgqIgBgEQAHgJAPADIAAACQABAkAaALIAAgCQAQAAARgCIAAgCIAEAAIAtAAIAEAAQALAAgGAOIgBABIgEABQgGAGgNAAIAAAFIgEAAIgwAAIAAADIAAAEIgEAAQgQAAgKAEIAAAPIAAADQAAAXACAWIABABQAVgBAUgCIAAgBIAfAAIADAAQAJgFAOABIAEAAQAKABAAAOIAAADIgBAAQgDAKgKABIAAAEIgEAAIgiAAIAAAEIgEAAIgsAAQAAAEABADIACAAQAFALAHAHIAEABQACAOANAEIADABQAMAPASAHIAEABQABANASgDIADAAQAHAIAQAAIADAAIAAAEQgCAwg5gdIgBgEQgEgKgOgBIgEgBQgGAAgCgHIAAgCQgIgIgGgIIgBgEQgFgNgNgGIgBgDQgDgEgEgEIgDAAIAAAaIAAADQAAAPACAPQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIABADQACAQgGAHIAAADIAAAEIgCAAQgBAQgQgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQgFgDABgLIgBgEQgGggADgqIAAgCQgLADgEAKIAAAIIAAADIgBAEQgbA1grAlIAAADIgEAAgACsJZIgEAAIgBgDQgGgKgMgCQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBgHgEgEIgBgDIgKgTIAAgEIAAgTQAJgSAYgFIAAgCQAkAHAHgTIgCAAIAAgEQADgRgGgIIAAgDQgTgBgTAAIgDAAQgbABAEgcQAIAAAHgCIAAgCQAdAFAMgKIAAAAIAAAAIACgCIgCAAIABgDQACgQgOAFIAAADIgEAAIgeAAIAAAEIgDAAIgbAAIgBgDQgJgIgBgPQAJgIANgBIABgDQAPgBAOgEIABgCIADAAQATABAKgHIABgCIAAgEIAAgOQAigXACApIABAAIAuAAIADAAIAEAAQAHAGAAANIAAADIgCABQgHAJgJAGIgEAAIgmAIIAAAKIAAAEQAjAGAsgCIAEAAQAMAEgBASIAAAEIgBADQgDAEgHABIAAAEIgEAAIhHAAIAAADQAAAHACAHIACAAQgCAWAHAMIACABQAEgBADACIABACQACALARgDIADAAIALAAIAEAAQASAKAXAFIAEAAIABACQAZAYgpAHIAAAEIgEAAIglAAIAAgCQgRgBgJgIIgDgBQgVgOgGAaIAAAEIgEAAIgPAMIAAADIAAAEIgEAAIgDAAIAAADIgEABIgIAAQgLAAgHgEgAChIZQgBANAGAJIACABQASAQANgUIADgBIABAAQAAgUgXAAQgIAAgLACgAnIIWIgBgFQgFgUACgdQAHgLABgSIAAgEQALgVAHgYIABgDIABAAQgXgHgiADQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAAAgBQgJgGACgRQAJgKAVACIADAAQAXAAAWgBIABgDIAhgCIAAgBQAbACARgIIABgCIBDAAIAEAAIAAAPIAAAEIgDABQgHADgFAHIAAAHIAAAFIgBACQgCAEgEABIgEAAIg/AAIAAAEIgEAAIgiAAIAAADIgCAAQABAJgHgBIAAAEIgCABQgDAGgFAEIAAALIAAADIgDAAQABALgGABIAAATIAAADIgEAAIAAAiIAAAEQACAMAHAKQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAGAOAQAEIADAAQAOAHAYgFIAAgCQAVgDANAGIADAAIACABQAEARgJAFIAAAEIgDAAQgHALgNAEIAAAEIgEAAIgRABQhKAAgVhEgAHmJNIgEAAQgKABgBgIQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQgLgFgHgIIgCgBIgNgWIAAgDIgLgXIAAgDIAAgtQAHgQABgWIAAgEIACAAQgHgMgZAFIgDgBQgGgFABgNQAcgEASgOIADgBQgGgjAcAAIAAABIAAAnIAAADQAlAGAtgEIAAgCIABgDQADgWgHgMIAAgFIAAgOQAGgFAMABIAEAAIABADIADABQAHAIACAOIACAAQgCATAFAMIABADQAKAGAUgCIAEAAQAJADACAMIAAAEIgCAAQgCAKgHAEIAAAEIAAAEIgEAAIgWAAIAAgBIgCABIg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gHQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAAAAAgBIgSgQIgBgCQgHgCAAgKIgBgEIgKgPIAAgEIAAgaIAAgEQAWgCAcAqIACABQAFALAOABIAEAAQAMAKANgIIABgCQAGAAAAgIIABAAQANgIADgSIAAgEQAKgMgBgaIACAAIACAAQACgdgIgXIgBAAQAAgygdANIgDABIgbADIgDgBQgbgKgLgbIAAgDQgFgPgCgQQAFgLACgPIAAgDQAQgbAggNIABgCQATgCALAFIADABQAKgBADAIIACABQAFALABAOIACAAQAMAAgBAMIAAAEIABADQACALgHABQAAAGACAFIACAAQgBAUAJAJIAEABQgDAIAGABIAAACIAGAaIABAAQACASAEAPIACABIAABPIAAADIgCAAQABANgHADIABALIgBADIgBABQgEAVgNAMIAAAEIgDABQgEAHgIADIAAAEIAAAEIgCAAQgDAFgGACIAAADIgEABQgLADgMAAQgMAAgOgEgAXNmoIAAAFIAAACQAAABAAABQAAAAAAABQAAAAAAAAQAAAAgBABQgOALgLAQQALAuAYgmIACgBQAHgKgDgUIAAgDIADgBIAAgEIADAAQgBgIgKAAIgKABgA3CjWIAAgEQgBgNgGgJIAAgEQACgXgGgPIABgDQACgMgHgDIAAgDQgOhegEhpIAGgPIABgEQAGAAAAgHIABAAQAegHgFAdIACAAQgFAfAKAOIABAAIABACIAAgCIAAgEIAAgIQAFgFACgKIABgDQALgLAEgTIAAgEQAKgSAUgHIADgBQAbgDAPAKIADAAQALALAIANIAAADQAHAKACAQQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIAAAEQABARAFAQIACAAQAGASAFAUIAAAEQAAATAGAOIABAAQAiAQgZAaIgBADIAEApIAAAEIAAAtIAAAEIgCAAQAAANgKABIAAAEIAAAEIgDgBQgTgHgHgWIAAgDQACgRgGgGIAAgEQADgSgHgHIgGgCQg9AIgegwIADgBIABgDIAAgEQAjgKAngIIAEAAIACAAQABgagHgUIABgCQABgYgJgLIAAgDQgGg5ggAUIAAADIgCABQgDAIgGAGIAAAHIAAAEIAAAEQgCAOgJAJIAAAHIAAAEIgCAAQgFAJgEAJIAAAXIAAADIgEAAIAAA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");
	this.shape_163.setTransform(244.815,351.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#C0C0C0").s().p("AP4FYIAAgEQAHgDABgLIAAgEIABAAQAEAUgNAGIAAgEgAwuEoIAgAAIAFAAIAAABQgUACgRAAIAAgDgAAKCOQAHgFAOABIAFAAIAAACQgQACgKAEIAAgEgAmNhZIAAglQAGAQgEAZIgCAAIAAgEgABUkIIAAgEQALgZAJgbIADAAIgBADQgHAggPAYIAAgDgAWNkYQgMgGgTADIAAgEQAWgDALAIIAAACIgCAAgA2FlBQgDgPgGgLQANAEgCATIAAAEQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_164.setTransform(253.2,334.075);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F4F4F4").s().p("AgBAPIAAgDIAAgaIADAAIAAAaIAAADIgDAAg");
	this.shape_165.setTransform(439.5,276.075);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F5F5F5").s().p("AgBAYIAAgEIAAgrIADAAIAAArIAAAEIgDAAg");
	this.shape_166.setTransform(439.5,272.175);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F3F3F3").s().p("AgBBdIAAgEIAAgpIADAAIAAApIAAAEIgDAAgAgBgdIAAgEIAAg7IADAAIAAA7IAAAEIgDAAg");
	this.shape_167.setTransform(439.5,272.75);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F1F1F1").s().p("AgBARIAAgEIAAgdIADAAIAAAdIAAAEIgDAAg");
	this.shape_168.setTransform(439.5,261.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#EEEEEE").s().p("AAAJLIAAgDIAAgaQAGAHgCATIgBADIgDAAgAgDkBIAAgDIAAgfIADAAIAAAfIAAADIgDAAgAgDosIAAgFIAAgZIADAAIAAAZIAAAFIgDAAg");
	this.shape_169.setTransform(439.7485,315.75);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#E9E8E8").s().p("AgBAVIAAgEIAAglIADAAIAAAlIAAAEIgDAAg");
	this.shape_170.setTransform(439.5125,254.925);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E0E0DF").s().p("AgBAWIAAgDIAAgoIADAAIAAAoIAAADIgDAAg");
	this.shape_171.setTransform(439.5,250.625);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#D2D2D2").s().p("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ANAGAIIACABQACAGAGABIADAAQAJAHASgCIADgBQAOgDAEAHIABAEIgDAAIgyAAIAAADIgDAAQgDAYAWABIAAACQAMAGAWgCIADgBIAAAEQgEANgWgGIAAAEgAtkCQIAAADIAAAEQAeAmAjAgIADABQAGAMgFAIIgBACIgBAEQghAiglAeIgEAAQgLACgIAFIAAAEIgDABIgEADIAAAEIAAADIgEABIgDADQADAOAMAEIADABQARAHAOgKIADgBIASgNIAAgCIAAgEQALgCAFgIIADgBQAJgGAGgJIAAgEIAAgEQAFgEAKgBIAAgCIASgQIABgCQAUAYAWAXQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAQASgLgFgiIgCAAIgBgDQgPgYgKgdQALgJACgVIACAAQAMgbACglIAAgDIAHgTIABgEIAAgDQgBgOgDgNIAAgDQgFgKgJgFIgEABQgSAJgBAbIgCAAQABAQgHAGIAAAEIABAEQACAKgGABIAAAPIAAAEIgCAAQABAKgHABIAAAPIAAAEIgDABQgOAMgYgcIgBgDIgOgIIgBgDQgMgJgVAAIgPABgAiGDLIgEABIgPALIAAADIAAAEIgCABQgDAFgGACIAAADIgEABIgPAHIAAADIAAAEIgDABQgKAJgNAFIAAAEIgEABIgSAHIAAADQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQgRANgWAHIAAAEIgEABQgGADgGAEQgBANAGAFIADABQAFALAUgFIABgDQASgGAQgIIAEgBIAVgJIABgCQAVgJARgNIADAAIAagQIAAgDQAGgEAEgFQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAKgIAIgIIABgDQAGgDAFgFIABgDQALgIAGgLIABgEIAAgDQAJgBABgKIABgBQAJgJADgRIAAgDIACgBQAEgVgGgMIAAgCQgqgDgSAqIAAAEIgDABQgGAJgKAFIAAAEIAAADIAAAEQgBAJgKgBIAAADgAHPDIIgCAAQgEAKgJAFIAAAHIAAAEIgCABQgDAFgGABIAAAEIgDABIgPAKIAAAEIAAAEIgEABQgHAFgIAFIAAAEIgEAAIgTAHIAAAEIAAAEIgDAAQgQAMgSAKQACAeAcgLIADAAIAXgJIAAgDQAOAAAIgIIABgDQANgFAKgJIADAAI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");
	this.shape_172.setTransform(249.3218,337.3126);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#DDDCDC").s().p("AAuACIhfAAIAAgDIBfAAIAEAAIAAADIgEAAg");
	this.shape_173.setTransform(170.975,484.225);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#DDDDDC").s().p("AAyACIhnAAIAAgDIBnAAIAEAAIAAADIgEAAg");
	this.shape_174.setTransform(185.475,484.225);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#D8D7D7").s().p("AjzACIAAgDIAqAAIADAAIAAADIgDAAIgVAAIgVAAgADwACIhHAAIAAgDIBHAAIADAAIAAADIgDAAg");
	this.shape_175.setTransform(182.5,484.2375);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#D6D6D5").s().p("AEXACIglAAIAAgDQAUAAAUABIAAACIgDAAgAj7ACIgeAAIAAgDQARAAAQABIAAACIgDAAg");
	this.shape_176.setTransform(182.675,484.225);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#B9B9B8").s().p("AACAPQgDgOgCgPQAIAJgBAQIAAAEg");
	this.shape_177.setTransform(275.5803,324.65);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#A5A4A4").s().p("AAAANIAAgDQgEgHABgLIAAgEQAFAIACANIAAAEIgEAAg");
	this.shape_178.setTransform(271.0659,326);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#BEBDBD").s().p("AgIgGQAEAIAKACIADAAIAAACIgIABQgLAAACgNg");
	this.shape_179.setTransform(261.6159,330.972);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#ABABAB").s().p("AACAQIgFggQAIAKgBATIgBAEIgBgBg");
	this.shape_180.setTransform(263.3102,323.025);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#C8C8C7").s().p("AAAAPQgBgPAAgOIADAAIAAASIAAADIAAAEIAAAEg");
	this.shape_181.setTransform(265.725,304.625);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#9C9C9C").s().p("AgHASIgBgDIgBgDQgFgHADgPIAAgEQAYgLABAdIAAADQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQgFAKgLAAIgDAAg");
	this.shape_182.setTransform(284.2471,313.5407);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#C4C4C4").s().p("AABAMQgGgIADgQIACAAQgCAPAFAHIABADIgDgBg");
	this.shape_183.setTransform(282.9571,313.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#A6A6A5").s().p("AgSgFIAkAIIABACIgEAAIgCABQgVAAgKgLg");
	this.shape_184.setTransform(273.325,311.501);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#B7B7B6").s().p("AAFAJQgCgNgKgEQARgDgDARIAAADg");
	this.shape_185.setTransform(268.9156,303.678);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#C6C6C6").s().p("AACAQQgHgMADgUIADAAIADAAIgBADIgCABIAAARIAAAEQACACAAACIABAEIgCgBg");
	this.shape_186.setTransform(311.1952,322.275);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#B4B4B3").s().p("AjnAUIAAgIQAGgEgCgNIAAgEIABAAQAGAXgLAJIAAgDgADZgNQAFgOAJAIIABADIgCABQgEAFgJABIAAgEg");
	this.shape_187.setTransform(298.775,327.1828);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#A9A9A9").s().p("AgDALIABgDQADgLgEgHIADAAQAIAIgIAKIAAADIgDAAg");
	this.shape_188.setTransform(287.1315,328.025);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#AAA9A9").s().p("AACAMQgFgKAAgOQAFAJACAMIAAAEIgCgBg");
	this.shape_189.setTransform(292.625,324.875);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#C7C6C6").s().p("AgMAAQAKgFAPAEIAAABIgEAAQgMAAgJADIAAgDg");
	this.shape_190.setTransform(284.65,319.5069);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#CACACA").s().p("AAAASQgBgSAAgSIADAAIAAAgIAAAFIgCgBg");
	this.shape_191.setTransform(291.725,321.725);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#AAAAAA").s().p("AAUAgIAAgIQAGgKAKgIIADgBIgBAEQgKAMgIAOIAAgDgADDgFIAEAAQADARAJALIADABIAAACQgUgFABgagAjPgJQgFgLgBgOQAIAHAAAPIAAAEIgCgBg");
	this.shape_192.setTransform(295.075,322.625);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#C1C0C0").s().p("AgSADIAAgDQAUABANgEIAEgBIgBADQgHAGgNAAQgHAAgJgCg");
	this.shape_193.setTransform(294.125,319.2195);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#BDBCBC").s().p("AAXAFQgSgJgeAEIAAgEQAhgEARALIABADIgDgBg");
	this.shape_194.setTransform(301.575,317.0404);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#ADADAD").s().p("AgegDQAeAHAcgGIAEgBIgBADQgQAEgOAAQgRAAgOgHg");
	this.shape_195.setTransform(176.55,329.8967);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#A1A1A0").s().p("AgPgDQAHgCACAFIABAAIASAAIADAAIAAACQgIACgGAAQgMAAgFgHg");
	this.shape_196.setTransform(174.7,324.3012);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#ADACAC").s().p("AIXAPQAJADANAAIAEAAIAAACQgHACgGAAQgKAAgDgHgAooAAQgGgJgCgMIAEAAQAEAIACAKIABADIgDAAg");
	this.shape_197.setTransform(240.3,325.8279);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#9D9C9C").s().p("AgBARIAAgEIAAgHIAAgFIAAgRIADAAIAAAdIAAAEIgDAAg");
	this.shape_198.setTransform(184.375,321.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#C9C8C8").s().p("AgBANQgCgNAAgMIADAAIAEAAIAAAEIgEAAIAAARIAAAEIgBAAg");
	this.shape_199.setTransform(184.175,321.15);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#AFAFAE").s().p("AD5AJQAKgQgSgBIAAgEQAZABgPAYIgDAAIABgEgAkAAGQAIgFAFgJIACAAIAAAEQgCAMgNABIAAgDg");
	this.shape_200.setTransform(205.7598,328.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#AFAEAE").s().p("AADALQgDgLgFgKQALADgBAPIAAADIgCAAg");
	this.shape_201.setTransform(232.301,326.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#C3C3C2").s().p("AiBBSIAAgPIADAAQAHgHgBgQIACAAQgDASAFAJIABADIgDgBQgIgDgDAQIAAgEgACAg3QgEgPgCgOQAIAIAAASIgBADIgBAAg");
	this.shape_202.setTransform(258.5014,316.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#ACACAB").s().p("AgDALIAAgZIADAAIADAFIABADIgCAAQABAPgGAGIAAgEg");
	this.shape_203.setTransform(246.225,321.675);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#A6A6A6").s().p("AiVBdIAAgEIAAghQAGAOgFAXgACUg7QgKgLABgWIALAeIAAAEIgCgBg");
	this.shape_204.setTransform(255.675,313.875);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#CFCFCF").s().p("AgVAAQAOgVAagIIADgBIAAAgIAAAEIgCABQgNAYgJAAQgLAAgIgfg");
	this.shape_205.setTransform(238.425,322.5821);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#9F9F9E").s().p("AAJAGQgQAAgFgLIAEAEIADAAQAKABAHADIABADIgEAAg");
	this.shape_206.setTransform(241.575,315.575);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#BDBDBC").s().p("AgBALIgCgBQgCgEABgGIAHgJIACgBIAAADIgDAAIAAAPIAAADIgDAAg");
	this.shape_207.setTransform(246.05,319.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#999898").s().p("AARBQIgoAAIgBgCQgXgIgJgUIAAgDQAAgQgLgDIAAgEIAAgDIgBgEQgGgHADgOQAEgJADgKIAAgEQAJgGAGgJIAAgEIAAgDIADgBIABgDQALgEAKgFQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgDQAQgCAKgGIADAAQAIACABgFIACgBQAFAMARAAIAEAAQASAHAGAVIACABQAAAGACAEIACABIAAAaIAAADIgEAAIAAAPIAAAEIAAADQgJAYgRARIgDABQgGAHgNgBIAAAEIAAAEIgEAAgAARghQgZAHgPAWQAPA7Aag0IADgBIABAAQAFgXgGgNIgEABg");
	this.shape_208.setTransform(238.5609,323);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#ABABAA").s().p("AgMACIAAgCQAMAAAKgEIADgBIgBACIgYAIIAAgDg");
	this.shape_209.setTransform(226.325,332.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#B2B1B1").s().p("AAEAKQgGgJgDgLIAEAAIAGARIAAAEQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_210.setTransform(215.2,326.175);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#B4B3B3").s().p("AABAYQgEgOgEgPQAFgKAHgHQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAADIgHAIQAAATADAOIABADIgDAAg");
	this.shape_211.setTransform(219.85,323.375);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#BCBCBC").s().p("AtjBHIgJgVQALAEAAAOIABAFQgBAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAgBgANpAuIAAgEIAAgrQAGASgEAdIgCAAgAEeg8IAQgLIADgBIgBAEQgIALgFAAQgDAAgCgDg");
	this.shape_212.setTransform(220.5762,324.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#C2C2C1").s().p("AACAaQgFgXAAgcQAFAXACAYIAAAEIgCAAg");
	this.shape_213.setTransform(131.7731,325.775);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#A8A7A7").s().p("AF+BCIAAgHQAGgPAEgRIACgBIAAADQgBAZgLARIAAgFgAOWA/IAAgEQAKAAAJgDIADgBIAAADIgWAIIAAgDgAurgoIAAgDIAAgbQAGAJgBASIgBADIgEAAg");
	this.shape_214.setTransform(224.65,323.95);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#B6B5B5").s().p("AAAAQQgBgQAAgQQAFALgCASIAAAEIgCgBg");
	this.shape_215.setTransform(135.7347,315.575);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#B7B7B7").s().p("At8AXQgGgIgCgOQAIAHADANIAAADIgDgBgAODABIgJgYIADAAQAGAJACANIAAACIgCAAg");
	this.shape_216.setTransform(194.775,327.85);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#CCCCCB").s().p("At+AnQgCgRAAgQIAEAAIAAAeIAAADgAOAACQgCgUgBgUIAEAAIAAAeIAAADIAAAFIAAACIgBAAg");
	this.shape_217.setTransform(193.65,323.75);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#B8B8B7").s().p("AvrA4IAAgEIgDgIQAGgNgDgXIAAgEQAHAVgFAfgAPqgOIAAgEIAAglQAHAOgCAXIgBAEIgEAAg");
	this.shape_218.setTransform(214.3235,323.575);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#C7C7C7").s().p("AALADIgEgDIgDAAIgSAAIAAgCQATgDAJAHIABACIgEgBg");
	this.shape_219.setTransform(109.5,321.6591);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#A5A5A4").s().p("AgMgFIAEADIAEABQAJABAHADIABACIgDAAIgCABQgPAAgFgLg");
	this.shape_220.setTransform(111.525,322.251);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#C0C0C0").s().p("ANDBAQgJgKgWADIAAgDQAZgEAIAMIABADQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAgAtDgfQgCgQAAgRQAHAKgDAUIAAADg");
	this.shape_221.setTransform(218.925,317.075);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#CECECD").s().p("AAAARQgBgRAAgQIADAAIAAAdIAAAEIgCAAg");
	this.shape_222.setTransform(130.1,314.85);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#A3A2A2").s().p("AIyCAQAUADACgSIABAAIAAAEQgCAPgJAAQgFAAgHgEgApIhXIAAgDIAAgpQAHAQgEAZIAAADIgDAAg");
	this.shape_223.setTransform(192.55,315.2195);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#9B9B9A").s().p("AACATQAAgVgFgQIADAAIADAAIAAAhIAAAEg");
	this.shape_224.setTransform(134.4,308.325);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#C0C0BF").s().p("AK4CtQgKgHgDgNIAEAAQAEAKAHAJIABACIgDgBgACKA4IAAgEQAFgGAJgBIAEAAIAAACQgMAFgGAHIAAgDgAq5imIASgHIAEgBIgBADQgJAGgMADIAAgEg");
	this.shape_225.setTransform(202.75,312.05);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#BBBBBA").s().p("AoeA7QAHAPANAKIADABIAAABQgYAAABgbgAIYg7QAIgMgJgOQAPAKgNASIgCABIABgDg");
	this.shape_226.setTransform(221.7297,320.675);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#C8C8C8").s().p("AAPAEQgCgFgHABIgEAAQgNADgFgFQAVgDALAGIABADIgCAAg");
	this.shape_227.setTransform(172.475,323.9321);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#A8A8A8").s().p("AF8AqQgKgLACgWQAEAQAGAOIAAAEIgCgBgAlggiIgegEIAAgEQASABAQAFIAAACIgEAAg");
	this.shape_228.setTransform(209.8,323.025);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#AEADAD").s().p("AkbANQgCgMAAgJIALAAIAEAAIAAACQgGABgFAAIAAAOIAAAEgADygIIAAgEQAdAHAMgGIADgBQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgHAGgMAAQgLAAgNgEg");
	this.shape_229.setTransform(198.65,320.05);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#C5C5C5").s().p("ApxAqQAJAGARgCIAEAAIgBACQgHACgGAAQgMAAgEgIgAJwgNQgKgMABgYQAHANACAUIACAAIAAAEIgCgBg");
	this.shape_230.setTransform(208.1,326.3862);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#A2A2A1").s().p("AHUA0IAAgEIAAgEQANABAGgHIAEgBIgBADQgGAIgMAAIAAAEIgEAAgAnogWIgBgdIADAAIAAAaIAAAEIgCgBg");
	this.shape_231.setTransform(193.85,325.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#A2A1A1").s().p("AACAOQgHgJADgTQAFAJgBAQIACAAIAAAEIgCgBg");
	this.shape_232.setTransform(136.5841,321.325);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#C7C7C6").s().p("AgDAJIAAgOQAFABAAgIIACAAIgBAEQgBAMgFAJIAAgEg");
	this.shape_233.setTransform(140.725,318.925);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#B9B9B9").s().p("ACCBmIAAgaQAHAKgFATIgCABIAAgEgAh8g1QAEghgNgQIAAgDQATALgHAlIgBAEg");
	this.shape_234.setTransform(141.842,313.75);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#C4C4C3").s().p("AADALQgBgPgHgGQAOAAgEARIAAAEg");
	this.shape_235.setTransform(154.3081,320.225);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#9E9D9D").s().p("AJYBIIglAAIAAgBQgIABAAgGQAYAHAVgHIAEAAIAAADIAAADIgEAAgApbAVIAAgEIAAgcIAEAAIAAAcIAAAEIgEAAgAiUgxQgBgNgEgKQALABgDASIgBAEg");
	this.shape_236.setTransform(164.675,325.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#D1D1D1").s().p("AgQAeIgBgDIgGgIIAAgEIAAgZQAMgSAYgEIAEAAQAEAJABANIACAAIAAAEIAAAEIgCAAQgEANgJAIIAAAEIAAAEIgDAAIAAADIgDABQgDACgFAAQgFAAgGgDg");
	this.shape_237.setTransform(147.575,321.6566);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#A8A8A7").s().p("AAGAHQgLgDgDgLQAJAFAHAGIABAEIgDgBg");
	this.shape_238.setTransform(152.775,318);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#B0B0AF").s().p("AAYAFQgTgIggACIAAgDQAhgDAVAKIABADIgEgBg");
	this.shape_239.setTransform(147.95,314.419);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#B3B3B3").s().p("AgKACIAAgDQAKgBAHgCIAEgBIAAACQgLADgKAGIAAgEg");
	this.shape_240.setTransform(141.825,297.375);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#AEAEAD").s().p("AMeDBQgFgLgDgLQAKAEABAOIAAAEIgDAAgAsgiuIAAgLQAHABgBgIIACAAIAAADQABAOgJAFIAAgEg");
	this.shape_241.setTransform(226.325,311.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#B2B2B1").s().p("AACAUQgDgUgCgTQAHAOAAAWIAAADIgCAAg");
	this.shape_242.setTransform(168.1765,310);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#9E9E9D").s().p("AAAAPIAAgEIAAgRIgBgEIgCgEQALAFgFAVIAAADIgDAAg");
	this.shape_243.setTransform(164.9464,314.65);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#A7A7A7").s().p("AAAATQgBgTAAgSQAFANgCAUIAAAEg");
	this.shape_244.setTransform(163.2347,302.375);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#CDCCCC").s().p("AAAAcQgBgcAAgbQAFAWgCAdIAAAEg");
	this.shape_245.setTransform(162.4847,297.375);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#A09F9F").s().p("AABAeIgBgCIAAgEQACgdgFgWIAAgDQALAUgFAmIAAADIgCgBg");
	this.shape_246.setTransform(162.6964,297.375);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#B0AFAF").s().p("ALcChIgJgWIAEAAQAGAHABAMIAAADIgCAAgAB5CIQAGgRANgIIADgBIgBADIgVAaIAAgDgAFWBEQgCgJAAgJIAMgHIADAAIAAAEQgDAGgIABIAAALIAAAEIgCgBgArbh7QgCgTAAgSQAHALgCAWIgBAEg");
	this.shape_247.setTransform(239.325,311.85);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#A4A4A4").s().p("AtwChQATACAOgCIAEAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQgKAFgIAAQgKAAgIgGgANsBeIABgEQACgKgHgBIAAgEIAAgEQAMABgEASIAAAEIgEAAgAiqAEQgSgBgFgNQALAIAPAEIAAADIgDgBgAkniIQgCgPAAgPQAHAHgDAQIAAAEIAAADIgCAAg");
	this.shape_248.setTransform(196.125,316.0826);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#E2E2E1").s().p("AgBALIAAgZIADAAIAAAEQACAQgFAJIAAgEg");
	this.shape_249.setTransform(60.6847,329.125);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#E6E5E5").s().p("AAAAPQgBgPAAgOQAFAIgDARIAAAEg");
	this.shape_250.setTransform(61.0724,298.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#C5C4C4").s().p("AFbDMIApAAIAEAAIAEAAIAAACQgMACgKAAQgPAAgMgEgAmJifQgBgYAAgYIADAAIAAAoIAAAFIAAADIgCAAg");
	this.shape_251.setTransform(201.45,310.567);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#BEBEBD").s().p("AgJCwQgHgYACgfIAEAAQgCAdAFAXIAAADIgCAAgAgKikIAAgEQAJgFAMgCIAEAAIgBABQgPAFgJAIIAAgDg");
	this.shape_252.setTransform(141.4528,308.15);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#ECECEB").s().p("ApVAFIgaAAIAAgDIAaAAIADAAIAAADIgDAAgAJOgEIAeAAIAEAAIAAABQgQACgSAAIAAgDg");
	this.shape_253.setTransform(219.475,190.35);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#D9D9D8").s().p("AAAAcQgBgcAAgbIADAAIAAAzIAAAEg");
	this.shape_254.setTransform(438.475,377.25);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#D8D8D7").s().p("AAAAZQgBgZAAgZIADAAIAAAvIAAAEIgCgBg");
	this.shape_255.setTransform(438.1,314.65);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#DEDEDD").s().p("AzOW9IAAgDIAlAAIADAAIAAADIgDAAIgTAAIgSAAgAVsj9IAAgEIAAg7IADAAIAAA7IAAAEIgDAAgA1u25IAAgDIAaAAIADAAIAAACQgMABgLAAIgGAAg");
	this.shape_256.setTransform(299.15,337.4875);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#E5E5E5").s().p("AgBAjIAAgDIAAhDIADAAIAABDIAAADIgDAAg");
	this.shape_257.setTransform(438.1,302.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#B1B1B0").s().p("AAEANIgJgZQAKAFAAARIAAADIgBAAg");
	this.shape_258.setTransform(355.25,326.35);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#CECDCD").s().p("AI3gBIAwAAIADAAIAAABQgMACgLAAQgQAAgMgDgApqgBIAlAAIAFAAIgBABQgKACgJAAQgMAAgKgDg");
	this.shape_259.setTransform(282.8,333.042);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#9B9A9A").s().p("AgmAAQAoACAigFIADAAIgBACQgVAFgUAAQgRAAgSgEg");
	this.shape_260.setTransform(343.75,328.4025);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#A2A2A2").s().p("AADALQgJgFACgQIADAAIADAAIgBADIgCABQACAHAEAHIABADIgDAAg");
	this.shape_261.setTransform(358.9333,324.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#B3B3B2").s().p("AwZATQALAFAJgFIADAAIgBACQgGAFgFAAQgGAAgFgHgAQTgDIAAgPQAGABgBgIIABAAIAAAEQgBANgFAIIAAgDg");
	this.shape_262.setTransform(250.85,322.8219);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#A1A0A0").s().p("AANAFIgvAAIAAgDQAnADAbgJIADgBQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgKADgIAFIgDAAg");
	this.shape_263.setTransform(343.025,332.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#C1C1C1").s().p("AIIA2QgIgEgDgJIAAgEQAIAGAGAJIABAEIgEgCgAoLgwQAIgFALgCIADAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQgKAFgLAEIAAgEg");
	this.shape_264.setTransform(286.35,322.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#B5B5B4").s().p("AAGAHQgOAAAAgNQAHAGAKAGIAAABIgDAAg");
	this.shape_265.setTransform(325.525,329.125);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#BEBEBE").s().p("ADPAkQgEgKgEgLQAKAEABAOIAAAEIgDgBgAjMgLQABgQgGgJQAMACgEAUIAAADg");
	this.shape_266.setTransform(306.95,323.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#C1C1C0").s().p("AADAKQgEgKgEgKQAJAEABANIAAAEIgCgBg");
	this.shape_267.setTransform(329.25,328.75);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#BBBBBB").s().p("ApsBUQADgbgGgSQANAPgIAhIgCAAIAAgDgAMnBAQgGgJgCgMQAIAGADAMIAAAEIgDgBgAksAyIAAgEQAFgNAIgMIACgBIgBAEIgKAaIgEAAgApZAcIAAgEIALgHIAEAAIgBADQgFAHgJAFIAAgEgAoWAIQgLgFgTADIAAgEQAVgCAMAHIABACIgEgBgAjxgQQATgDAWABIAAACIgEABIglADIAAgEgAsng1QgCgQAAgRQAHAKgEATIAAAEIgBAAg");
	this.shape_268.setTransform(244.75,316.325);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#999999").s().p("AgUDSIgEgBQgdgPgMggIAAgEIgHgTIAAgDIAAgiIAKgaIABgEIACAAIACgDQAGgIAMgFIAAgCIAAgEQAKgFAMgEIAAgCIAkgDIAEgBQAcAEgBAhIgBAEIgDABQgMAHgdgIIAAAEIgBACQgMAFgJAIIAAADQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgIAIgFAKQAEAPAFAOIADABQAPAOAYAEIAEAAQAZAJAagKIABgCQATAAgLASIgBAEIAAADQgKAMgTAEIAAADIgDABQgKADgNAAIgEAAQgKAEgLAAQgLAAgLgEgAtvDSIgDAAIAAgEQgBgOgKgFIAAgDQgCgHgGgEIAAgEQgCgagGgXIABgDQADgUgHgKIABgDQABgSgGgIIAAgEQADgWgGgMIgFAAIABgDQADgYgHgQIAAgEIAAgDQAIgmgTgLIAAAEQgSALgSAOQg+AwgoggQBLhKBrgrIABgCQAMgCAJgHIABgCQAagLAXgPIADAAQAKgJAQgEIAAgCIAAgEQAogOADAhIgDAAIgCAAQABAIgGgBIAAALIAAAEIgCABQgGAUgZABIAAAEIgEAAQgIADgLABIAAADIgDABQgLABgIAGIAAADIgCABQgTANgXAJIAAAHIAAAEIAAApIAAADQAFAQABAWIABAAIABADIADAAQAAAQABARIADAAQAAARACAQIABAAQAHAHgDAQIAAADQgDAUAIAJIACABIAABDIAAADIgBAAQAAALgGABIgCAAQgBALgMAAIgEAAgAQRC7IAAgBQgMgGgGgHIgEgBQgNgMgJgRIgBgDQgKgIgFAPIAAADIAAAEQgFATgNALIgDAAQgJADgKAAIAAAEIAAAEIgEgBQgWgGgMgTIAAgEQgBgMgFgGIAAgEQADgbgLAEIAAgDIAAgTIACgBIABgCIAAgEIAAgTIAEgEIABgDQAPgDAHAGIADABIAAAlIAAADQAAAbATAFIAAgCIAAgDIAAgEQARgMAEgdIABAAQAEgUANgLIABgCQAOgDAGAFIADABQAHAIACAOIADABIAGAHIABAEQACAMAGAJIADABQACAKAIAGIABADQAEALAEAKIADABIAFAGIACABQAEALAFALIACAAIADAAQgHAMgJAAQgJAAgLgMgAjwDHIg7AAIAAgCQgPgBgLgFIAAgCQgggNgMgdIgBgEQgDgKgEgIIAAgFIAAgdIAAgEIAAgDQAJgFAFgHIABgDQAJgFAMgEIABgCQATgDALAFIAEABQAMABAEAKIACAAIAAAiIAAADIgDAAIAAAEIAAAEIgEABQgHADgEAHQgEANALgCIAEAAQAPANAaAEIAAACQAJAJAUgEIABgBIADAAQAfAFgtAcIAAAEIgFAAg");
	this.shape_269.setTransform(222.35,311.1267);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#AFAFAF").s().p("AADALQgCgNgGgIIAEAAQAHAFAAAMIAAAEIgDAAg");
	this.shape_270.setTransform(323.3264,318.375);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#A7A7A6").s().p("AvMAiQAOgCAMgFIADgBIgBADQgLAHgRABIAAgDgAO4gZIgBgDQANgBAGgGIADgBIgBADQgEAIgNABIgDgBg");
	this.shape_271.setTransform(246.225,326.875);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#BAB9B9").s().p("AgQgDQAMAFARgEIAEgBIgBADQgKAEgHAAQgJAAgGgHg");
	this.shape_272.setTransform(340.05,325.0719);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#A0A09F").s().p("AQHBoQgCgMAAgNIAEAAIADAAIAAADIAAAEIgDAAIAAALIAAADIAAAEgAMIBkIAAgDIAAgPIgBgDQAAgDgCgCQALgFgDAcIAAADIgFAAgAwKAKIgBgCIAAgEIAAgdQAGAMgDAVIAAADIgCgBgAFEhQIAAgFQACgJgHgCIAAgDIAAgEQANABgFARIAAAFIgDAAg");
	this.shape_273.setTransform(233.95,315.75);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#C9C9C9").s().p("AwVB1IAAgEIAAhCIAAgEQAHAggFAqgAPXBnIAAgCQgIAAAAgGQAtAIAsgIIAEAAIgBACIgGABIgEABQgXAEgcAAIgXAAgAPAA+IAAgEIAAgDQAJgKANgHIABgDQAJgCABAGIABAEIgBADQgLAJgSADIAAAEIgEAAgAwqhLIgBgDIAAgEIAAgiQAGAOgCAYIAAADIgDAAg");
	this.shape_274.setTransform(241.575,318.15);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#D1D1D0").s().p("AMsAlQgCgPAAgOIAEAAIAAADIAAAWIAAAEIgCAAgAr1APIgTAAIAAgDQgMgHgVADIAAgEQACgNgFgFIAAgEIAAgOQAFAAAFgCIAAgCIAeAEIAEAAQApARgXAdQgBABAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgDAAg");
	this.shape_275.setTransform(251.8,322.825);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#A3A3A3").s().p("AACATQAAgKgFgCIAAgDIAAgWIADAAQAAASADAPIABAEg");
	this.shape_276.setTransform(333.525,325.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#CCCBCB").s().p("AByAEIAAgDIAAgDQAUAAAUACIAAABIgEAAIghAAIAAADIgDAAgAiCADQgHgEgQACIAAgDQARgDAIAHIAAACIgCgBg");
	this.shape_277.setTransform(327.4,317.5938);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#A6A5A5").s().p("AAXAFQgSgJgeADIAAgEIAgAAIAEAAIAOAHIABAEIgDgBg");
	this.shape_278.setTransform(341.7,318.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#A3A3A2").s().p("ATMCIQATAEAagBIADAAIAAACQgLACgJAAQgRAAgLgHgAz7iHQAIgFALgCIADAAIAAAEIgDAAQgIAFgLACIAAgEg");
	this.shape_279.setTransform(266.075,311.8779);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#B2B2B2").s().p("AJTAiQgKgFgCgNQAJAHAFAJIABADIgDgBgAAtAYIAAgDQAEgOAIgLIACgBIAAAEIgLAZIgDAAgApPgBQgFgQgBgRQAHALAAASIAAAEIgBAAg");
	this.shape_280.setTransform(328.7,321.525);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#B1B1B1").s().p("AodAYIAAgDIAAgsQAHASgDAaIAAADIgEAAgAIQANIAAgDQAMABgBgLIAAgEIACAAQAFASgPAAIgDgBg");
	this.shape_281.setTransform(340.9367,324.475);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#C6C5C5").s().p("AgUACIAAgDQAXgHARAIIABACIgEgBQgRgEgUAIIAAgDg");
	this.shape_282.setTransform(390.175,317.4669);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#A9A8A8").s().p("AOFBUQAOAHAGgKIADgBIgBADQgGAIgFAAQgGAAgFgHgAuaAGQAFgGAHgEIADgBIgBAEQgDAGgHAFQAAAGAIgBIAAACIgEAAIgDAAQgIAAADgLgAj/AQIgFgYQAJAGgCAPIAAAEIgCgBgAj1hEQgXgFgeACIAAgEQAggCAYAHIAAADIgDgBgAAAhPQALgBAEgJQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIAAAEQgEAKgGAAQgEAAgDgDg");
	this.shape_283.setTransform(283.8828,323.3629);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#BFBEBE").s().p("AEIBMQgMgDABgQQAGAKAHAHQABAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAIgEAAgAj0hEIgDgBQgGgFgOADIAAgEQARgCAJAHIABACIgEAAg");
	this.shape_284.setTransform(347.25,324.1171);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#B4B4B4").s().p("ASwAnQgEgMgFgKQALADAAAQIAAADIgCAAgAysgFQABgVgGgMIAEAAQAGAKgCAUIgBADg");
	this.shape_285.setTransform(250.851,323.75);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#C6C6C5").s().p("AocBtIA8AAIAEAAIgBACQgOACgNAAQgUAAgQgEgARoBtIAlAAIADAAIAAACIgSACQgNAAgJgEgAGBBPIAPALIADABIAEAAIgBABIgHABQgNAAgBgOgAiUAxQgIgIADgRIAEAAQgDAPAGAIIAAADIgCgBgAvSAnIAAgEQAJgIAEgOIACAAIgBADQgBATgNAIIAAgEgAsxg+QgIgJADgTQAGAEgCAOIAAAEIADAEIABADIgDgBgAyNhEQgCgWgBgWQAHAPgCAZIgBAEg");
	this.shape_286.setTransform(246.4,320.067);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#AAAAA9").s().p("APUBHIgBgCQANAAAGgHIADgBIgBADQgEAIgNAAIgDgBgAgsBEQgEgMgFgKQAMAEgBAPIAAAEIgCgBgAvkgtIAAgEQABgPgFgHIAEAAQAGAGgCAQIgBAEIgDAAg");
	this.shape_287.setTransform(264.975,323.375);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#B5B4B4").s().p("APmAvIAAgIQAIgBAAgKIACAAIAAADQgCAMgIAHIAAgDgAq0AfQAOABAMADIAEABIgBABIgKABQgMAAgHgHgAvqgQQgBgTgFgOIAEAAQAGALgCASIAAAEg");
	this.shape_288.setTransform(266.1,323.75);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#C0BFBF").s().p("AMLAaIAAgPQANAAABAMIAAADIgCgBQgIgLgEAQIAAgEgAvHAHIAAgEIAAggQAHAOgFAWgAO/ADQgCgMAAgMIAIgEIADAAIgBACIgGAFIAAASIAAADg");
	this.shape_289.setTransform(290.225,321.35);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#AEAEAE").s().p("AkpAkIgJgVQALAFABANIAAAEIgDgBgAEvgOQABgPgFgHQAMAEgHAVIgBABIAAgEg");
	this.shape_290.setTransform(333.7256,322.45);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#9C9C9B").s().p("AANACIgdAAIAAgDIAhABIAAACIgEAAg");
	this.shape_291.setTransform(361.95,315.55);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#CBCBCB").s().p("APXBEIAAgCIgigBIAAADIgDAAIAAgDIAAgEQAZgCAOAHQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgDAAgAvUgmQABgRgHgJIAAgEQANAEgFAWIAAAEg");
	this.shape_292.setTransform(265.35,308.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#D0D0D0").s().p("AgSAiIAAgDQgFgHgCgIIADgBIABgEIAAgDIAAgIQANgbAegHIAAACQAGAIgCAOIAAAEIgCAAQgCASgLALIgCAAQgFAMgPAAIgHgBg");
	this.shape_293.setTransform(361.3911,322.0195);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#BFBFBF").s().p("ArwAuQAdACAUgFIAEAAIgBACQgOAFgOAAQgMAAgMgEgAJUAYQAWADAGgOIACAAIgBADQgHANgJAAQgGAAgHgFgALuAbQgCgQgEgMQALAGgDATIAAAEIgCgBgAqlgfIAAgDQAHgFAFgGIACgBIAAAEQgFAJgJAGIAAgEgAlqgxQALAEAQgBIADAAIAAACQgIACgGAAQgLAAgFgHg");
	this.shape_294.setTransform(299.924,323.0327);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#B7B6B6").s().p("AABAMQgDgLgBgNQAHAIAAANIAAAEIgDgBg");
	this.shape_295.setTransform(370.675,313.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#C4C3C3").s().p("AwBA3QgLgLACgZQAEASAHAQIAAADIgCgBgALtAPIAAgZQAGAKgEASIgCABIAAgEgAQJgGQgDgPgGgLQAMAEgBASIAAAEIgCAAgAkugvIAAgEIAAgDQAOgDAEAHIABADIgDAAIgFgEIgBABQgBAEgEAAIgFgBg");
	this.shape_296.setTransform(269.4306,320.1903);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#ACACAC").s().p("AysCAQAPACACgNIACAAIgBADQgBAMgHAAQgEAAgGgEgASpAXQgFgJAAgMQAJAEgBAOIAAAEIgDgBgARNhmQgEgOgCgPQAJAJgBARIAAAEIgCgBg");
	this.shape_297.setTransform(254.0514,319.3267);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#BABAB9").s().p("AIWCXIAAgLQACgPANgDIAEgBIgBADQgNAKgFAUIAAgDgAPcBtQAGgJgCgUIgBgEIAAgEIAAgdQAHAKgDATIAAAEIAAAEQAEAegKAAIgBgBgAt3BlQgYgEggABIAAgDQAigCAYAHQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgDgBgAvhhbQgCgeAAggQAGAZgDAjIAAADIgBgBg");
	this.shape_298.setTransform(265.2266,304.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#B6B6B6").s().p("AABAPIgEgdQAIAJgBAQIAAAEIgDAAg");
	this.shape_299.setTransform(368.4803,306.825);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#B1B0B0").s().p("AL1BvQgBgGgJADIAAgEQAZgIgMATIgCAAIgBgEgAAPAPQAGgWgKgZIAEAAQALAZgJAZIgCABIAAgEgAv3ggIgCgiQAHAKgDAUIAAAEgAP4hZQgFgLgBgOQAIAHAAAPIAAAEQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_300.setTransform(265.175,310.925);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#C8C7C7").s().p("AABAMIgEgYQAIAFgBAQIgBAEIgCgBg");
	this.shape_301.setTransform(365.8602,297.75);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#BBBABA").s().p("AKTB7QgGgDABgKQAMgPgIgUIAAgCQALAYgHAYIAAADIgDgBgAqOBiQgDgOgHgIQANACgBAQIgBAFIgBgBgAFYhIQgEgdgJgWIAEAAQAJATACAdIAAAEIgCgBg");
	this.shape_302.setTransform(328.2743,311.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#A4A3A3").s().p("ArfCPIAAgDIAAgiIAEAAIAAAiIAAADIgEAAgALch0IAAgEQAAgMgEgKIAEAAQAFAHgCAPIAAAEIgDAAg");
	this.shape_303.setTransform(288.2173,310.75);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#C2C2C2").s().p("AgOABIAAgCQARgHALAIIABABIgDgBQgMgEgOAJIAAgEg");
	this.shape_304.setTransform(362.875,295.5617);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#989898").s().p("AGaHnQhqhKhAh0IgBgDQBYhZBnhKIACgBQgvBqheBMIgEABQBVBCBDBTIABADQgHAVgXADgAmuHOIgCgBQB5grA+hlIADgBQAAgegCgdIgCAAQgJgRgYgDIAAgDQhpAQg/AAQgGAAACgMQBvhVB2BGQAOAJAHASQgFC+ifAmIAAACIgMAAQgiAAgPgSgAiGG+IgBgEQCHgTA2hhQAYgqgRguQhlgIhUAaIgDABQA6hbCGAUIADAAQAcARALAjIACAAQABDejMAQIgEAAQgagHgKgXgACaDuQgnglgQg7IgBgEQBGgCAIBQIAAAEQgJASgJAAIgEAAgADdDKIgEgBQgdgdgLgtIgBgEQBDgCAABBIAAAEQgDAOgKAAQgEAAgFgCgAOBgnIgEgBQgWgJgTgNIAAgDQgEgNgHgKIAAgDQgDgPAAgTIAKgaIABgEIAAgDIAlgZIAEgBIADAAQAfgDASAJIADABIAAAEIAAAaIAAADIgCAAQABAJgGgBIAAADIgDABQgHAHgMAAIAAADIADABIAAAEIgDAAQgSAGgMgGIgDgBIgBgDIAAgEQASgCALgKIABgDIACAAQAMgTgZAIIAAAEIgBACQgNAHgJAKIgEAAIgDAAQAAANACAMIABAAQAEAKAIAEIAEABIADAAQAAAGAIAAIAAACQAnAJAmgLIABgCIAGgBIABgDIACABQAMAeggAHIAAADIgEABQgUAIgdAAIgSgBgA2JgrQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgJgKgLgIIAAgDQgDgNgIgGIAAgEIAAgDIAAgeIAAgEIAAgDQAKgOAXgDIAAgCIATAAIADAAQAGALARAAIAEAAQADAGAFAEIADABIAAAEQADAXgHAOIADAIIABADIgCAAQgDAYgRAGIgEAAIgPABIgTgBgATagvQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQgHgHgGgKIgCAAQgDgPgKgHIAAgDQAAgQgLgDIgBgDQgDgFAAgHIAAgDQgCgMgNAAIAAAPIAAAEIgCAAQgCAPgHAHIgCAAQgBAKgIABIAAAIIAAADIgEABIgEADIAAAEIgDABQgGAGgNAAIABADIADABIAAAEIgEAAIglAAIgBgDQgVgLgMgUIAAgDQAAgRgLgGIAAgDIAAgQIADAAIABgDQAGgJABgNIAAgEQAIgIADgLIABgDQAQgIALgOIACgBIAEAAIAeAAIADAAIAEAAQAMACgEgfIAAgEIAAgEQACgTgGgKIAAgEQABgRgJgJIAAgDIgHgQIAAgDQgCgdgJgUIAAgEQABgOgFgIIAAgDQAPgKAMAFIADABQAKgDgBAKIACAAIAFAaIACAAIAAAEQABAOAFALQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAGAPAEAPIABADIAFAeIADAAIAOAlIAAAEQABAOAEALIADABQAFAGACAJIAAAEQAHAKACAPIACABQAAAMAFAJIADABIAHAIIAAADQAEANACAQIACABQAHAYADAcIABAEIgDAAQgDAGgHAAQgEAAgGgDgARGhvIADABQATANAKgVIABgDQALgLACgTIACAAIACAAQAHgVgNgFIAAgCQgfAHgNAcIAAAIIAAADIgEAAIgEAAQgCARAKAFgAB8gzQgLgCgEgJIAAgEQABgOgMgEIgBgDQgGgMgEgPIAAgDQACgRgJgGIgBgCQgTgNgVAPIAAAEIgEABQgNAIgFARIAAAEIgBADIgDAEIgCAAQgBASgTgDIgDgBIgEgGIgBgEQgGgOgEgQIgBgDQgGgJADgSIgBgDIgDgEIAAgEIAAgPIADAAIABgDQARgKAIAOIABADQAFALAMgTIABgDIAagOIADgBQAegCAXAGIADAAQAMAKAJANIABADQAHAIADAOIABAAIAGAhIACABQAEAEAAAKIAAAEIgCABQgEARgGAPIAAAIIAAAEIAAADIgDABIgEgBgAwSg6IgDgBQgggOgNghIAAgEQgFgXACgdQAFgJACgNIAAgEQANgXAbgIIABgDQAhgCATAJIAEABQAKAFABAOIAAADQADALAMAEIADAAIAAAEQAJAGABAQIACAAIAAAaIAAAEIgDAAQgDAkgYAMIAAAEIgEABQgMAEgOACIAAAEIgEAAIAAAEIgDAAIgIAAQgLAAgIgEgAwXiBIACABIAGAHIABAEQAIANAOgLIABgCIAAgEIADAAQANgIACgSIAAgEIAAgEIAAgDIABgEQADgSgLgBIgEAAQgZAFgMASIgEAAIACAdgADkhFIgBgDQgGgIgEgLIAAgEQgCgOgGgIIgBgBQgDgUgHgNIAAgEQABgSgIgLIgEgBQgMgBgGAFIgEAAQgQABgKgEIgBgDQgLgLgDgUQARgNAYgFIAEAAIACgBQAJgagLgZIAAgEQAEgSgMgBIAAgDIAAgTQAIgDALAAIAEAAQALADACAPIABAAQgBAVAKALIACABQACAPAEAPIACAAQAKAMAYgBIADAAQAJAOgIANIgBADIgBADIgCAEIAAAEIgEABIgLAHQAAAJACAJIABAAIAAAEQABAOAFALIACABQAEAFACAGIABADQACAQAEAOIACAAIAAAEQACAOgGAFIAAAHIAAAEIgBADQgHAKgHAAQgIAAgHgNgAI2g6IAAgEQgBgOgKgEIAAgEQgEgKgHgJIAAgDQgBgOgKgFIgDgBIgBgCIgBgEQgIgMgYAEIAAAEIgBADIgDAAIgDABQgKAIgGAKIAAAIIAAADIgBAAQAAAIgGAAIAAAEIAAADIgEAAQgNAAgJgDIgBgEIgHgIIAAgDQgBgOgGgIIgEAAIAAgFIAAghIADgBIABgCQAaAFAKgKIABgDIAAgEQALgJASgDIABgCQAfgEASAKIADABQAkAQgBA3IACAAIAAAsIAAAEIAAADQgCAIgKAAIgDAAgAr7hFIgBgDQgUgOgQAJIAAAEIgDgBQgMgJgHgQIgDgBQgBgDAAgDIAAgEQgHgPgEgTIAAgDQACgTgGgLIABgEQACgPgGgHIAAgDQAFgWgNgFIABgDQACgOgHgFIAAgEQADgTgGgKIAAgEQADgUgHgKIAAgDQADgWgHgMIAAgEQAFgngMgUIAAgEIAAgpQAQgpAPAlQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQAAAfACAfIACABQAAASACATIACAAQAAAPABAOIACABQAHAIgBASIACAAQgDARAGAJIAAADQACAVAEAUIACAAQgCAcAYAAIAAgCQAggCAYAFIAEABQAFAOARABIAEAAQAUALAJAXIAAADQAHASgDAbIAAADIgBAEQgGAIgEALIgCAAQgFAKgIAEIAAAEIgEAAIAAAEIgDAAQgOAEgPAAQgPAAgQgEgAr+h9QAIAMAZgGIAAgCQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAXgegpgRIAAgCQgQgFgRgBIAAAEIgEAAIgLAAQAAALACALIACAAQAGAFgDAOIAAAEQAFAGAOgDIAEAAgAFuhKIgPgKIAAgEQgCgNgGgJIABgEQAEgRgMgCIAAgDIAAgeQAJgDANAAIAEAAQAGAJgBAQIADAAIgBAtIABAEQAFAHgFAMIAAADIgEgBgAVvhuIgDgBIgBgDIAAgDQgGgJgJgHIAAgDQgBgHgGgEIAAgEIAAgSIAGgFIABgDIAAgEIAIgDIADAAQAUgKASAGIAEAAQAKACAHAGIABADIAAADQAIAUgMAOQgBAKAGAEIADABIADAAIAAAEQABAMgMgBIAAAEIgDAAIgJAAQgUAAgQgEg");
	this.shape_305.setTransform(249.7538,336.503);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#EBEBEB").s().p("AgBApIAAgEIAAhNIADAAIAABNIAAAEIgDAAg");
	this.shape_306.setTransform(438.1,294.575);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#F1F1F0").s().p("AgBAWIAAgDIAAgpIADAAIAAApIAAADIgDAAg");
	this.shape_307.setTransform(438.1,284.95);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#F4F4F4").s().p("AgBAPIAAgEIAAgZIADAAIAAAZIAAAEIgDAAg");
	this.shape_308.setTransform(438.1,276.725);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#F3F3F3").s().p("AgBBdIAAgEIAAgpIADAAIAAApIAAAEIgDAAgAgBgdIAAgDIAAg8IADAAIAAA8IAAADIgDAAg");
	this.shape_309.setTransform(438.1,273.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#F1F1F1").s().p("AgBAQIAAgDIAAgcIADAAIAAAcIAAADIgDAAg");
	this.shape_310.setTransform(438.1,262.45);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#EEEEEE").s().p("AAAJHIAAgDIAAgaQAGAHgCATIgBADIgDAAgAgDj/IAAgEIAAgeIADAAIAAAeIAAAEIgDAAgAgDooIAAgFIAAgZIADAAIAAAZIAAAFIgDAAg");
	this.shape_311.setTransform(438.3347,316.15);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#EAEAEA").s().p("AgOgBIAZAAIAEAAIAAABQgPACgOAAIAAgDg");
	this.shape_312.setTransform(326.1,189.625);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#D2D2D2").s().p("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MACgKAFIAAAEIAAAEIgDAAQgXAPgaALIgEAAIgSAHIAAAEIgBACQhqArhLBKQAnAgA+gwQASgOASgLQANAPgEAhgASxiIIACABQAAAHADAFIABADQAFAKAEAMIACAAQAKAHADAPIACAAQAAAQAMADIADAAQALAPAKgQIABgCIAAgEQgEgcgHgYIAAgEQADgTgLgHIAAgDIgHgIIABgEQAAgOgIgEIAAgEQABgSgMgEIgBgEQgCgJgFgGIAAgEQAAgPgHgHIgBgEIgOglIAAgEQABgRgIgJIgBgDQgFgPgGgPIAAgEQAAgPgHgHIAAgEIAAgEQACgQgKgGIgBAAQAAgKgKADIgBgDQgLgIgRAHIAAAEIAAAEIAAADIgEAAQAEAKAAAMIAAAEQAIAXAFAdIACAAIAGAQIABADQACAPADAOIACABIAAAdIAAAEIABAEQACATgGAKQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgPgIgZADIAAADIAAAEIgDABQgKAOgRAIIAAADQgEALgHAIIgCAAQABAIgGgBIAAAPIAAAEIgBADIgDAAIAAAQIAAADIAJAaIACAAQAMAUAVALIAAADQAQAGAZgEIAAgCIAAgEQANAAAFgIIABgDIAAgEIAEgDIADgBQAJgGACgMIAAgEQAIgHABgPIADAAQACgJAEAAQACAAAEAEgABUiYIABACIAFAaIADAAQAEAPAGAMIABADQAFAKAEAMIACAAQgCATAUgGIAAgBIADgBIABgDQAKgRABgYIAAgEIABgEQAAgKgFgEIABgEQABgUgJgKIAAgEQACgQgNgCIgBgDQgJgNgMgKIgBgCQgXgIggACIAAAEIgDABIgbAOIgDABIgPAKIAAgDQgJgOgQAKIgDABIgIAKIgCgBQgHgVgRgIIgBgCQgIgFgKgBIgBgDQgEgGgOACIAAAEIAAADIgDABQgKAGgQABIAAAEIgEAAQgLACgIAFIAAAEIgBADIgDABIAAADIgCABQgFAGgHAFIAAADIAAAEIgBAEQgCAKgFAIIgDAAQgDASAHAHIADABIAAAEIAAAEQAFAJAEAMIACABQAKAUAXAIIABACQATAGAdgEIAAgCIAAgEQANAAAFgIIABgDQAQgRAJgYIABgEQADgPAIADIADABQgCAWALALIACABIAFAGIADABQASALADgWIAAgEIADgEIABgDIAVgbIABgDIAAgEQALgIALAAQAJAAAJAGgAw+h1IACABQAMAhAhAOIADABQAGAMAXgGIABgCIAAgEIAEAAQARgBALgIIABgCIAAgEQAZgMADgkIACAAIACAAQAFgTgHgLIAAgEQAEgSgPAAIAAgEIgBgDQgIgHgKgFIAAgDQgBgOgKgFIgBgDQgUgLgjADIAAADIAAADQgcAIgMAXIgCAAQAAAIgGgBIAAAPIAAAEIgDAAQgCAfAHAYgAqMiWIADAAIAAAHIAAAFQACAMAGAJIADABQANAdAfANIAAACQALAFAPABIAAACQAbAGAkgEIABgCIAAgEQAugcgggFIgDAAIgEgBQgMgCgOgBIAAgCQgagEgPgNIAAgBQgIAAABgGQAGgFAEgHIABgDIAAgEIAAgEIADAAIACAAQAFgXgHgOIgCAAQgEgKgMgBIgBgCQgLgIgWADIAAAEIAAACQgMAEgKAFIgDAAIgMAHIAAAEIAAAEIAAADIgDAAIgEAAQAAANABANgALvhbIADABQAAAOAPAAIADAAQAWAXAOgXIgCAAIAAgDQgBgOgKgFIgDgBIgFgGIAAgEQgBgOgKgEIgBgDQgIgGgCgKIAAgEQgCgMgJgGIgBgEIgGgHIAAgEQAAgOgIgFIgBgCQgIgHgRACIAAAEIgEAAQgNADgCAPIAAALIAAAEIgBAAQgDAdgSAMIAAAEIAAADIgCgBQgKgLgDgSIABgDQACgXgHgOIgBgDQgHgHgRACIAAAEIgBADIgDAEIAAATIAAAEIgEAAIgEAAQgCAVAIALIACABIAAAPIAAAEIAJAVIACABQALATAXAGIADABIAWgJIAAgCQAOgLAEgTIABgEQAIAAAEgGIADgBQAJARAOAMgADBjDIAEABQABARAEAQIACAAQgBAYAKAMIACABQgBANAEAGIABAEQACAOAKAHIADABQAMAXARgUIAAgDQALgKgFgXIgCgBIAAgDQABgSgIgJIgBgDQgDgGgEgFIAAgEQAAgPgHgHIAAgEIAAgEIAAgLQAIgBADgGIAAgEIAAgEIADgEIABgDIACgBQANgSgPgLIgBgCIglgJIABgEQAAgRgIgJIAAgDIgLgeIAAgEQADgRgSADIgEAAQgKAAgIADIgEAAQAAAPACAPIACAAQAGABgCAKIAAAEQAKAZgGAXIgBAEIgDAAQgZAFgQANQACAUALALIABADQAIALAWgGIAAgCQAFgEAKAAIAEAAgAIUiLQAAAAAAAAQABAAAAABQAAAAABAAQAAAAABAAIABACIACABIAJAWIADAAQAGAJAEAKIABAEQADALAFAKIADABQAMABACgJIAAgDIADAAQAEgdgHgTIgBAAQABg3gkgQIgBgDQgSgMgiAEIAAAEIAAACQgTADgKAJIAAAEIgEABQgNAFgVgCIAAAEIAAACIgDABIgEAAQAAATACASIACABIADAAQAAAPAGAKIACAAIAHAIIAAAEQAGALAUgGIABgCIAAgDIAAgEQAGAAgBgIIACAAQAIgOAJgMIABgEIADAAIABgDIAKgBQAOAAAHAIgAr2hSIABADQAbAOAjgMIABgCIAAgEIAEAAQANgCABgNIAAgDQAFgLAGgIIAAgEIADAAQAHghgNgPIgBgDQgIgXgVgLIAAgCQgPgGgLgHQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgYgIgiACIAAAEIAAACQgZAAACgcIAAgDQABgXgIgPIgBgDQgGgJADgRIABgEQAEgWgMgEIAAgEQADgQgHgGIABgEQACgVgHgMIAAgEQADgigGgZQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgPglgQApIgDAAQAAAYACAYIABABQAAAcACAbIACAAIABADIADABQAAATACASIACAAIABAiIACAAQAAARACAQIACAAQgDAUAIAJIACABIAAASIAAAEQAGAIgCAOIAAAEQAFAOABATIABAAQgCAZALAMIACABQAAADACADIACABQgBAbAYABIAAgCIAAgEQAGgDAGAAQALAAANAIgAFUiHIABAAQAHABgCAKIgBAEIAJAZIACABQACARAUgEIABgCIAAgDQAIgLgIgIIAAgEQADgbgHgSIAAgDQAFgUgNgCIAAgCQgQgEgKAGIAAADIgDAAQAAAVACAUgAVtjKIAAAEIAAAEIgDAAIgIADIAAAEIgDABIgIADQAAANACANIACAAQAFAEABAHIABADQACANAJAFIAEABIABADIACABQARAMAfgGIABgCQATACgGgUIgCgBIgEAAIABgDQAGgYgKgZIgBgDQgHgGgLgCIgBgCQgJgFgMAAQgJAAgKADgAFTjhIACABIABADIADAAQANAJAFgQIABgEIAAgDQgBgegZALIAAAEIgEAAQgDARAIAIg");
	this.shape_313.setTransform(249.2469,337.5236);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#DBDADA").s().p("AAoACIhSAAIAAgDIBSAAIADAAIAAADIgDAAg");
	this.shape_314.setTransform(196,486.075);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#DDDDDC").s().p("AAzACIhoAAIAAgDIBoAAIADAAIAAADIgDAAg");
	this.shape_315.setTransform(186.25,486.075);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#C8C7C7").s().p("AgSgBIAhAAIAEAAIAAABQgSACgTAAIAAgDg");
	this.shape_316.setTransform(266.275,458.325);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#D8D7D7").s().p("ADyACIhHAAIAAgDIBHAAIAEAAIAAADIgEAAgAjMACIgpAAIAAgDIApAAIAFAAIAAADIgFAAg");
	this.shape_317.setTransform(183.225,486.075);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#D6D6D5").s().p("AEZACIglAAIAAgDIApABIAAACIgEAAgAj+ACIgeAAIAAgDIAhABIAAACIgDAAg");
	this.shape_318.setTransform(183.425,486.075);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#BBBBBA").s().p("AgQgCQASgBALAEIAEAAIAAACIgDAAQgQAAgOgFg");
	this.shape_319.setTransform(241.375,460.9596);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#9B9A9A").s().p("AgBANIAAgdQAGANgFATIgBABIAAgEg");
	this.shape_320.setTransform(244.742,439.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#C5C4C4").s().p("AAAAPQgBgPAAgOIADAAIAAAEIAAAVIAAAEIgCAAg");
	this.shape_321.setTransform(243.975,442.725);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#C1C0C0").s().p("AgQALQgCgJAAgIQAOgFATABIAEAAIAAACQgTABgOAFIAAAKIAAADg");
	this.shape_322.setTransform(238.525,429.1827);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#C6C6C6").s().p("AgbgBIA3ABIAAABIgEAAIgRABQgTAAgPgDg");
	this.shape_323.setTransform(241,431.7118);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#BCBCBC").s().p("AgMAEIAAgEQAMAAAKgCIADgBQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgJAFgNAAIgCAAg");
	this.shape_324.setTransform(241.725,434.8519);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#9A9A9A").s().p("AARAbQgpgHgHgpIAEAAQAJgGARACIADABIABACIACABQAFAKAOABIAEAAIABAEQAKAVgSAMIgEAAg");
	this.shape_325.setTransform(252.6391,437.785);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#B6B6B5").s().p("AgQAAQANgBANABIADAAIAEAAIAAAAQgRACgQAAIAAgCg");
	this.shape_326.setTransform(242.1,427.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#BFBFBE").s().p("AACASQgHgNACgXIAHAhIAAAEIgCgBg");
	this.shape_327.setTransform(208.5039,414.575);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#CACACA").s().p("AAAAcQgBgaAAgZIAAgEQAGAWgDAdIAAAEIgCAAg");
	this.shape_328.setTransform(211.795,407.275);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#C3C2C2").s().p("AiKC+QAQACAOADIAAABIgDAAIgGABQgOAAgHgHgACHiqIAAgaQAHAKgFATIgCABIAAgEg");
	this.shape_329.setTransform(242.6792,439.1618);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#BCBBBB").s().p("AAEAKIgIgUQAKADgBAPIAAADQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_330.setTransform(254.15,416.075);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#BCBCBB").s().p("AgKgEQAHAEALACIADAAIAAACIgJABQgKAAgCgJg");
	this.shape_331.setTransform(238.55,422.6158);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#C9C9C8").s().p("AgMAAIAWgCIADgBQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgLAEgNABIAAgEg");
	this.shape_332.setTransform(237.25,417.575);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#B9B8B8").s().p("AgGAHIAAgDIALgOIACgBIAAAEQgFALgIAIIAAgFg");
	this.shape_333.setTransform(243.425,410.85);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#CFCFCE").s().p("AgZgBIAwAAIADAAIAAABQgNACgLAAQgOAAgNgDg");
	this.shape_334.setTransform(246.05,391.5042);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#A0A0A0").s().p("AAVAEIgwAAIgCgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAiADAagFIADgBIAAADIgBACQgCACgFAAIgDAAg");
	this.shape_335.setTransform(246.225,390.925);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#CBCACA").s().p("AgkABQAKAAALgBIAAgCIALAAIAEAAIAiAAIADAAIAAADIgDAAQgVACgQAAQgSAAgPgCg");
	this.shape_336.setTransform(246.45,396.1125);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#B8B7B7").s().p("AgFANQAHgLABgSIACAAIAAAEQADAWgNAHIAAgEg");
	this.shape_337.setTransform(287.5195,437.675);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#C0C0C0").s().p("AjBCdIAAgEQAmADAegGIAEAAIAAADIgEABQgUAEgYAAIgYgBgAC9iDIAAgaIAEAAIAAAEIAAADQACAQgGAHIAAgEg");
	this.shape_338.setTransform(266.9118,441.6474);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#B6B6B6").s().p("AgDAVIAAgWQAFgGAAgQIABAAIAAADQABAagHASIAAgDg");
	this.shape_339.setTransform(289.9516,427.15);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#A8A7A7").s().p("Ag3BHQAIgGALgBIADgBIgBADQgKAFgLAEIAAgEgAApgkIAAgMIANgZQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAAAEQgHATgIASIAAgDg");
	this.shape_340.setTransform(281.325,447.975);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#C2C1C1").s().p("AELBZIAAgFIATgCIADgBQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgMAEgJAFIAAgDgAkYBGQgCgNgGgKIAEAAQANANgIANQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAIAAgEgAAthXIAAgEQAPAAAOACIABACIgEgBQgQgBgKAGIAAgEg");
	this.shape_341.setTransform(245.3,444);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#BBBBBB").s().p("AgLABIAAgCQAJgDAJgBIAFAAIgBACQgNADgJAGIAAgFg");
	this.shape_342.setTransform(277.55,450.425);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#B4B4B3").s().p("AGgAaIAAgDQAGgUgBgcIADAAIAAAEQACAbgHAUIgDAAgAmlAaQgCgaAAgZQAGATgCAdIgBADg");
	this.shape_343.setTransform(250.2329,410.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#CBCBCB").s().p("AlcDPQgCgGAAgIIgBgDQgFgEACgMQAJAKgBAUIAAAEQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBgAFbiTIAAgEIAAgEQAHgVgBgfIACAAIAAADQACAggHAVIAAAEIgDAAg");
	this.shape_344.setTransform(253.3688,425.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#CAC9C9").s().p("AADAaQgEgZgEgaIAEAAIADAAIABAwIADAAIAAADIgDAAg");
	this.shape_345.setTransform(288.625,376.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#BFBFBF").s().p("AllEnQAAgTgGgLQAMAEgEAWIgBAEgAF6CQIAAghIAEAAIABADQACAVgHANIAAgEgAl8CUQgCgSAAgTQAHAMgDAVIAAAEgAF6j8IAAgEIAAglQAHANgCAYIgBAEIgEAAg");
	this.shape_346.setTransform(250.2485,399.4);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#A6A6A5").s().p("AApEDIAAgXQAEgPAGgOQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIAAAEIgCAAQgBAfgJAVIAAgDgAg0j3IAAgDIAXgLIAEAAIgBACQgMAJgOAHIAAgEg");
	this.shape_347.setTransform(286.175,398.475);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#ADACAC").s().p("AhQBrIAAgiQAHAOgFAXQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIAAgEgAA2hmIAAgEIAXgEIAEAAIAAACQgQADgLAGIAAgDg");
	this.shape_348.setTransform(262.75,385.525);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#B5B5B5").s().p("AlYHeQgFgQgBgSQAIAMAAASIAAAEIgCAAgAFdmmQgSgUgOgUIAAgDQAEgCgEgKQAHAEADAHIABAEQAIAKAGALQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAIAPIAAAEIgCgBg");
	this.shape_349.setTransform(247,390.025);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#B1B1B1").s().p("AlTGoQgEgYgBgZQAIASAAAcIAAADgAFVkVQAAgNgDgJIABABIABABIAFAHQABAGgDALQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIAAgFgAB/mnQAIABAEADIAEAAQAFAAAFACIABACIgEAAIgJABQgLAAgDgJg");
	this.shape_350.setTransform(244.1643,384.925);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#B3B2B2").s().p("AgEGxIAAgWQAEgFAAgOIACAAIAAAEQgBAYgFARIAAgEgAADmeQgGgKgBgMQAHAGACAMIAAAFIgCgBg");
	this.shape_351.setTransform(285.65,389.65);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#9C9B9B").s().p("AgVADIAAgDIAEAAQASAAASgBIAAgCIAEAAIgBACQgNAFgRAAIgNgBg");
	this.shape_352.setTransform(250.9,386.8641);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#CACAC9").s().p("AgRgBIAfAAIAFAAIAAABQgTACgRAAIAAgDg");
	this.shape_353.setTransform(250.95,386.625);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#B7B7B7").s().p("AibBnIghAAIAAgEIAhAAIAEAAIAAAEIgEAAgAC7hBQgJgPABgWIAKAiIAAAEIgCgBg");
	this.shape_354.setTransform(271.75,367.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#B3B3B3").s().p("AiMIrIAbAAIADAAIAAACIgOACQgJAAgHgEgAi5g0IAAgCQgTACgLgHQASAAAQACIAAACIAAADIgEAAgADWoVQgGgMgDgNQAKAHABAQIAAADQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBg");
	this.shape_355.setTransform(253.375,383.455);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#B1B1B0").s().p("Aj1IeQgOAAgIgHQAOAAAMAFQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAIgFAAgAkdjqQgOgBgKgGQARAAAJAFQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIgDgBgAEglTIgBgDQANgBAHgGIADgBIgBAEQgFAIgNAAIgDgBgADFoPQgLgCgDgMQAJAFAIAHQAAABAAAAQAAAAABABQAAAAAAAAQAAABAAAAIgEgBg");
	this.shape_356.setTransform(251.1,403.125);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#ABABAB").s().p("AgWGaQASABAPAFIAAACIgEAAIgCAAQgRAAgKgIgABlGHIAbAAIADAAIAAAEIgDAAIgKABQgLAAgGgFgAkNlmIAAgDIAAgEIAAg0IAEAAIAAADQACAjgGAZIAAgEgAgSlpQAPAAAOABIAAACIgEAAIgIABQgLAAgGgEgAEKlmIgaAAIAAgDIAaAAIAEAAIAAADIgEAAgAgdmTQgYAAgRgIQAXABAVAFIABACIgEAAg");
	this.shape_357.setTransform(234.45,417.8014);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#9A9A99").s().p("AgBAWIAAgDIAAgoIADAAIAAAoIAAADIgDAAg");
	this.shape_358.setTransform(211.375,376.325);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#C8C8C8").s().p("AFjE9IAAgEIAAgEQADgJAGgIIACgCIgBAEIgGATIAAAEIgEAAgAgqC6IAAgEQANgBAMADQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAAQgQgCgHAFIAAgDgAlskPIAAgEIAAgpIAGAEIABADIgCAAQABAagGAQIAAgEg");
	this.shape_359.setTransform(248.1,405.775);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#B5B5B4").s().p("AAtGoIAhAAIAEAAIAAACIglABIAAgDgAGGiyIAAgFIAAgaIAEAAIAAAXIAAADIAAAFIgEAAgAmKiyIAAgFIAAgDIAAgFIAAgSIAFAAIAAAaIAAAFIgFAAgAjKlJIAAgDQAJAFARAAIAAACIgDAAIgIAAQgKAAgFgEgAGjl9IAAgEQABgVgBgVQAHAQgCAaIAAAEIgFAAgAmnmBIAAgqIADAAIABAEQACAZgGARIAAgEg");
	this.shape_360.setTransform(250.2329,414.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#BDBCBC").s().p("AAAAPIgDgaQAFABgBgIIACAAIABAEQABAIgFAAQAEAJgDAPIgBABIAAgEg");
	this.shape_361.setTransform(208.215,369.575);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#C7C7C6").s().p("Ag0HgIAAgDIAXAAIADAAIAEAAIAEAAIAAACQgNABgOAAIgHAAgAhwAmIAAgEQAEgHAIgDIADgBIgBADIgOAQIAAgEgAGenBQgCgPAAgPQAHAJgDARIAAAEIgCAAgAmgnFIAAgaIAEAAIAAAEIAAAEIAAAEQADAOgHAEIAAgEg");
	this.shape_362.setTransform(250.2224,412.68);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#A7A7A7").s().p("AgYHkIAAgEIgGgTQAKAEABAPIAAAEIgFAAgAARmyIADgBQAMgKgPgEIAAgEQAGgMADgSIACAAIABAEQACAKgGABQgBAWAFgOIADAAIAAADQAAAYgLAAIgEgBg");
	this.shape_363.setTransform(218.85,400.325);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#C2C2C2").s().p("ADUJEQAOgBAMgDIAEAAIgBACQgMAEgRABIAAgDgAjxo4IAAgDQAHgEAGgGQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBABAAIgBAEQgFAKgJAFIAAgEg");
	this.shape_364.setTransform(242.875,397.15);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#C5C5C5").s().p("AgFAHIAAgHIAIgKIADAAIgBAEQgEAIgGAJIAAgEg");
	this.shape_365.setTransform(213.25,350.45);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#AAAAAA").s().p("ACPDrQATgDAWgBIADgBIAAADQgWAEgWABIAAgDgACihfQgQAAgHgIQAOACALAEQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgDAAgAi6jUQAHgJACgQIACAAIAAAEQABATgMAHIAAgFg");
	this.shape_366.setTransform(245.675,353.65);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#C1C1C0").s().p("ABtGqIAAgEQAEgagfAIIAAgEQAmgJgJAjgAhwl/IAAgMQAJgMAFgRQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIgBAEQgEAYgLASIAAgEg");
	this.shape_367.setTransform(236.6621,368.225);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#BABAB9").s().p("ABAFiIAwAAIAEAAIAAADQgaABgaABIAAgFgAhzlLIAAgLQAGgDgBgNIACAAIAAAFQABARgIAJIAAgEg");
	this.shape_368.setTransform(239.325,357);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#9B9B9A").s().p("AmBFWQgHgbgDgcIAEAAIAEAAQAAAaACAaIACABIAAADIgCgBgAGICnIAAgFIAAgVIAAgEIAAgEQAGALgCATIAAAEIgEAAgAGCAcIgBgvQAGARgDAaIAAAEIgCAAgABNlMQgEgCgIgBIgDABQgKAAgFgFIAAgDQASACAPAHQAAAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAIgEgBg");
	this.shape_369.setTransform(250.3868,376.15);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#A2A2A2").s().p("AgKACIAAgDIASgDIADAAIAAABQgLADgKAFIAAgDg");
	this.shape_370.setTransform(231.025,346.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#9D9C9C").s().p("AhxCiQAJAFANAAIAEAAIAAACIgEABIgDABIgHAAQgLAAgBgJgABViqIAaAAIADAAIAAACQgOABgPAAIAAgDg");
	this.shape_371.setTransform(233.45,359.3395);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#AAAAA9").s().p("ACrAPQgNgCgCgNIASANIABACIgEAAgAitgLIAXgDIADAAIAAACQgMAEgOACIAAgFg");
	this.shape_372.setTransform(251.45,342.575);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#999999").s().p("Ag3IFIAAgEIAAgXIAEAAIACAAQAEgVgGgNIgEAAIgEAAIAAAEIgDAAQgGABgGgBIAAAEIgDAAIgbAAIgDgBQgNgFACgUQAKgHAPgCIAAgCQAQAAAKgGQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBQAMgKARgHIAAgCIADAAQAIgQghAJIAAgDIg4gBIgBgDQgEgFgGgEIAAgDIAAgLQANgFAUgBIAAgCQASAAAQgCIAAgBIAAgFIAAgaQAIgFAPACIAEAAQAIAKgBATIAAAFQAZAGAigDIAEAAIgBAEQgLA0grATIgEAAQAAAYACAZIACAAIAAAmIAAADIgDABQgHARgJAAQgJAAgKgVgAglCGIgDAAQgUgDAFgbQAjgOAXgZIABgDQAMgHgBgSIAAgFIACAAQgSgGgfADIAAADIgFAAIgLAAIgDAAQgIgCgLgBIAAADIgEAAQgTAAAAgWIAEAAIAEAAQASgGAbABIAAgCQAaAAAagCIAAgCIAaAAIAEAAIAEADIADABIAAAiIAAADIgCAAQABAfgOAOIgCAAQgBALgIAAIAAAIIAAADIgBADQgIAJgKAHIgDABQgMAHgTAAIgHAAgAD8lwIAAgEQgCgOgJgEIgDgBQgIgUgQgJQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgIgIgJgFIgDAAQgYgigtgOQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgLgEgOgCIgBgCQgFgBgFAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgPgHgSgCIgEAAQgNgBgNABIgEgBQgOgGgWACIAAAFIgEAAQgNgBgOABIAAADIgDAAIgaAAIAAAEIAAACQgTAEgTABIAAAEIgDAAQgOAAgJAEIAAADIgBACIghAKIAAAEIgEAAIgTADIAAAEIAAAEQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgsAcggAqIgCABQgFAOAAgWQAHgCgCgKIgBgDIAKgQIABgDIAPgQIAAgDIAAgEQAHAAACgHIACAAIASgNIABgCIAAgEQAjgPAggQIAAgCQAPgCALgEIABgCQAOgHAUgDIAAgBQAZgBAXgFIAAgCQAQAAAOgCIABgCIAZAAIAEAAQAOAHAXgDIAEAAQAJAHARgDIAEAAQANAHAVAAIAEAAQgBAHAIgCIAEgBQAKAMAUADIADAAIAEADIAEABQACANANACIADAAQAeAVAXAbQAWAaAPAfIABACIAAACQADAJAAANIAAAEIgDAAIgEABQgQAAgKgUg");
	this.shape_373.setTransform(249.7979,392.5527);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#A5A5A4").s().p("ACNEXIAAgDIASgDIAEgBIAAACQgNAEgJAFIAAgEgAiikaIAeABIAAACIgEAAIgJABQgLAAgGgEg");
	this.shape_374.setTransform(259.75,349.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#A0A09F").s().p("AGoGRIAAgDQAJhigJhiIADAAQAHBcgDBkIAAAEIgEAAIAAADIgDAAgAmuGMIgBgCIAAgEIAAi4IAEAAIAAC8IAAAEQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBgAGKFOIAAgXIAAgDIADAAIAAADQADASgGAIIAAgDgAmLFNQgCgQAAgRIADAAIAAAIIAAADIAAATIAAAEIgBgBgAFdg4IgBgDQgEgKAAgMQAKAFgCARIAAADIgDAAgAADmKIgkgGIAkAAIAEAAIAAAEIAAADIgEgBg");
	this.shape_375.setTransform(250.2347,362.075);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#9C9C9B").s().p("AFNG3QAHgVgCggIAAgDIADAAIAEAAIAAADQgBAhgLAYIAAgEgAlYhhIAAgLQAOAEgLALIgDABIAAgFgAgomyIAAgDIAAgFQAFAFAKgEIADgBIAAAFIgCAAQgDAEgHAAIgGgBg");
	this.shape_376.setTransform(255.075,366.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#A5A5A5").s().p("AizKBQgKgMABgWIAHANIAAADQgCALAFAFIABADIgCgBgAi8hDQALAGAPAEIAAABIgDABIgEAAQgQAAgDgMgACVmgIAlAAIAEAAIAAAFIgEAAIgNAAQgPAAgJgFgABYmgIAbAAIAEAAIgBADQgOACgQAAIAAgFgACCqBIAlAAIAEAAIAAADQgLABgIAAQgNAAgJgEg");
	this.shape_377.setTransform(236.0988,380.45);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#A4A4A4").s().p("AgDANIAAgSQAFAAAAgLIACAAIAAAEQgCARgFAMIAAgEg");
	this.shape_378.setTransform(246.075,309.75);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#A8A8A8").s().p("AAIAFQgOgBgEgJIAVAIIAAADIgDgBg");
	this.shape_379.setTransform(238.55,319.125);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#9D9D9C").s().p("AgoFNIAEAAIAhAAIADAAIAAAEIgDABIgLAAQgPAAgLgFgAAmk3IgBgEIgDgWIAEAAQADAKAAAMIAAAEIgDAAg");
	this.shape_380.setTransform(238.925,344.85);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#B4B3B3").s().p("ADIMOQAZADARgGIAEAAIAAADIAAACQgXACgXAAIAAgEgAAFGXQgMgCgCgNIARANIABACIgEAAgAj1kLIAAgMQAHAAgBgLIABAAIAAAEQAAAPgHAIIAAgEgADJsGQgMgHgPgDQAWgEAHALIABAEIgDgBg");
	this.shape_381.setTransform(236.525,380.6328);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#ABABAA").s().p("AGnILIAAgxIAEAAIABAEQACAcgHAVIAAgEgAmpIPQgCgaAAgbQAGATgCAeIAAAEgAGnETIAAgDQADgjgHgZIAEAAQAHAWgDAiIAAAEIAAADIgEAAgAkMn1IgJgZQALAFAAARIAAADg");
	this.shape_382.setTransform(250.25,354.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#BDBDBD").s().p("AA4NWQgUgBgNgHQAUABARAEIAAADIgEAAgAg7sgIAAghQAGgFAAgPIABAAIAAAEQgBAdgGAYIAAgEg");
	this.shape_383.setTransform(227.3,369.75);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#A9A9A9").s().p("AgEANIAAgLQAFgGADgMIACAAIAAAEQgDAQgHANIAAgEg");
	this.shape_384.setTransform(227.85,280.85);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#BEBEBD").s().p("AgFAIIAAgIQAFgCADgHQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAIAAADQgEAKgGAIIAAgDg");
	this.shape_385.setTransform(228.25,271.275);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#BEBDBD").s().p("AAhPHIAAgDIAeAAIADAAIAAACIgWACIgLgBgAFUIZIAAgfIAEAAIABAEQACAUgHAKIAAgDgAFXBdQgDgSAAgTQAHAMgCAWIgBAEIgBgBgADAkSQgHgKgGgMQAMAGADAOIAAADIgCgBgAlZkUIAAgEQAGgIAGgGIADgCIgBAEQgFAMgJAHIAAgDgAkZupIAAgDQAJgKAEgRIACAAIAAAEQgCAUgNAKIAAgEg");
	this.shape_386.setTransform(257.7579,362.0667);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#C5C5C4").s().p("AiMHuIAEAAQAXAGAigCIADAAIAAAEIgDAAQgMACgKAAQgYAAgPgKgACLnOQgCgUAAgVIAEAAIAAAmIAAADg");
	this.shape_387.setTransform(257.875,367.4068);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#A8A8A7").s().p("AApJ+QgOgBgFgKIAWAJIABACIgEAAgAALEsIAAgHQAIgBABgKIACAAIAAADQgDANgIAGIAAgEgAAHkzQgPgEgVABIAAgEQAXgCANAFIAEABIAAAEIgEgBgAhZoqQgPgCgIgJQAPADAKAGIABACIgDAAgAjZpbQASgEgKgaIgBgEQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAMAigRAAIgFgBgADTpbQgBgJAAgJQAGgDAAgNIABAAIABAFQACALgHADIAAAMIAAADIgCAAg");
	this.shape_388.setTransform(250.9735,372.925);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#D2D2D1").s().p("AAFA0IgkAAIAAgCQgRgBgGgLIgBgEQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAIAAgFQAhAKAYgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAFgRgBgUIAAgEQgGgLgEgPIAAgDQAMgBANABIAEAAQAtAPgOAoIgBADIgCABQgEAKgJAEIAAAEIAAAFIgDAAIgQAKIAAAEIgBABQgCAFgIgCIAAADIgEAAg");
	this.shape_389.setTransform(252.2675,311.05);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#9E9D9D").s().p("AguFdIAAgEIAiAAIAEAAIAAACQgPACgPAAIgIAAgAAskzIAAgpQAGASgFAbIgBAAIAAgEg");
	this.shape_390.setTransform(257.4964,343.68);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#A2A2A1").s().p("AhKJaQALABAJgHIACgBIAAADQgFAIgHAAQgEAAgGgEgAhSmhIAAgEQAbABAWgEIAEAAIAAACQgVAFgbAAIgFAAgABApSIAPgKIAEgBQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQgGAIgLADIAAgEg");
	this.shape_391.setTransform(261.075,364.142);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#BABABA").s().p("AlSJsQAAgogGgnQApAaAKBPQAPB2BBBGQByAIBmAUIABABQgDAXgTAGIAAACQgXACgVAAQkSAAgCkUgAgQL6QgCgYAAgYIAEAAIAAAtIAAADgAEoKcIAAgDQAditAHjGIABAAQAhDhg5C3IgCAAQgMgKABgYgAgiKqQgPAAgHgGQAhgIgIAPIgDABgAClp8IgBgDQgGgNgBgSQAHAQAOAJQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAEIAAADIgDABQgCADgDAAQgDAAgEgEgAjztoIAAgEQAHgHAFgLIADgBIAAAEQgFAPgKAIIAAgEg");
	this.shape_392.setTransform(249.4651,364.2077);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#AFAFAF").s().p("AgMAGIAAgEQAMgCADgIIADAAIAEAAIADAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgLAIgNAHIAAgDg");
	this.shape_393.setTransform(268.75,299.625);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#ADADAC").s().p("ABmF7IAAgEIAOgKIAEgBQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIgRAQIAAgEgAhZCWQgUgDgKgMQASAFAPAIQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAIgEAAgAhdlnQAAgHAAgIQAHABgBgJIACAAIAAAEQgCAOgGAJIAAgEg");
	this.shape_394.setTransform(274.95,327.175);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#A1A0A0").s().p("AjoF4IAEAAIAAgDQAJAGASAAIAAABIgEABIgIAAQgMAAgHgFgAlFCuIAAgLQAGgCgBgJIADAAIAAADQAAAPgIAHIAAgDgAE/liIAAgLQAGgBgBgLIACAAIAAAEQAAAPgHAIIAAgEgAiYljQgGgJgCgQQAJgBAFAFIABADIgEAAIgEAAQgBALAEAFIABADQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAgBAAg");
	this.shape_395.setTransform(247.55,338.671);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#ADADAD").s().p("Ag5JPIAAgEIALgOIADgBIgBAEQgEALgJAHIAAgDgADcjfQgKgJABgUIALAaIABAEIgDgBgAAYoRQgNgBgMABIAAgFQANAAAQACIAAADIgEAAgAEBo3IAAgaIADAAIAAADIABAEQACAQgGAHIAAgEgAj/ozQAAgTgFgLIADAAQAHAIgCASIAAAEg");
	this.shape_396.setTransform(251.175,355.125);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#B0B0B0").s().p("AgKJ+IAAgEIgBgEQgJgRACgcIAEAAQAAAdAGAYgADEkZQgGgLgDgPIAEAAQADAMAEALIABADIgDAAgAEDpBIAAgDIAAgFIAAg0QAGAagEAigAkGpEIAAgFIAAg0IAEAAIAAA0IAAAFIgEAAg");
	this.shape_397.setTransform(251.317,353.85);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#ACACAC").s().p("ADOG4IAAgDQALgCAJgFIADgBIgBADIgWANIAAgFgACeGeIAWgHIAEAAIgBACQgLAHgOACIAAgEgAjgiUQgHgFADgNQAPgHAOAIQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIgEgBQgMgEgLAFQgDAJAGADIABACIgEAAgADBmeIgBgeQAGAJgCARIgBAFIgCgBg");
	this.shape_398.setTransform(257.655,331.525);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#A7A6A6").s().p("AiRCZQgMgLAAgWIAEAAQAEALABAPQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAABIABADIgDgBgACbh7IgGgeQAJAIgBATIAAADg");
	this.shape_399.setTransform(261.1014,299.425);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#C4C3C3").s().p("AjHIgIAAgEIAqAAIAEAAIAAACQgcAAgSAGIAAgEgAgtHfQgMgFgWACIgDAAIAAgDQAZgEAPAJIABACIgEgBgADFoIQAAgSgHgJQANADgEAUIgBAEg");
	this.shape_400.setTransform(261.1235,338.825);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#A3A3A2").s().p("AmPLSIgCgeQAHAJgDASIAAADgAGNGQIAAgEIAAhqIAAgDQAHAugDA3IAAAEIAAAEIAAAEIgEAAgAAtFEIAAgDIAAgEIApAAIAEAAIAAACQgZAAgRAFIgDAAgAD5q7IgJgWQALADAAAQIAAADIgCAAg");
	this.shape_401.setTransform(249.4847,350.25);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#A7A7A6").s().p("AkhNRQgDgLgBgLIAAgEQAHAIgBAOIAAAFIgCgBgAgEF1IAAgDQAJAAAIACIADABIAAACQgLACgJAAIAAgEgAgWFEQgGgJgDgNIADAAIAIATIAAADIgCAAgAAEmpQgEgNgEgKIADAAQAFAHACAMIAAAEIgCAAgAgcoWIAAgEQAIgEACgKIACAAIAAADQABAQgNADIAAgEgAEks4QgGgKgDgPQAJAIACAPIAAAEIgCgCg");
	this.shape_402.setTransform(243.25,358.525);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#A3A3A3").s().p("AEJE6QgGgLgIgKQAOADAAAQIABADQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAgAkJCVIAAgKQAGgCgBgJIACAAIAAADQAAAPgHAIIAAgFgABAA4IAAgEQALgCAIgFIADAAIgBACQgKAHgLAFIAAgDgACEkjQAEgMgFgLQAOAIgLARIgDABIABgDg");
	this.shape_403.setTransform(254.7,314.45);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#D1D1D1").s().p("AAAAJIAAgDQgEgEgCgHQATgJgJATIAAAEIgEAAg");
	this.shape_404.setTransform(262.9123,272.2853);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#BDBDBC").s().p("AACAUQgFgRAAgXQAGAQABARIAAAEIAAAEQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_405.setTransform(268.1731,265.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#B0AFAF").s().p("Ai1FTQgOgCgIgJQAPADAKAGQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIgEgBgABrByIAAgDQgBgTgOAPIAAgEIAAgEQAWgNgFAcgADJBNIAAg0QAGAWgEAhIgCABIAAgEgABAj1QgCgvAAgvIAEAAIAABaIAAAEg");
	this.shape_406.setTransform(261.2464,287.625);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#B2B2B2").s().p("Ah1OsIAAgmQAGAQgEAZIgCAAIAAgDgAg8GlIgbAAIAAgDQAPAAAPACIAAABIgDAAgABcEiIAWgDIAEAAIAAACQgMAEgOABIAAgEgAgfEUIAAgEQATACALgFIADgBIAAAEIgDAAQgHAFgMAAIgLgBgAARhjQgUAAgNgHQAVgBAPAGQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIgEAAgABpt6QgCgbAAgZIAEAAIAAAwIAAAEg");
	this.shape_407.setTransform(259.75,350.275);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#AFAFAE").s().p("AkcNEQgFgVgBgXQAIAQAAAZIAAAEIgCgBgAEhsuQgGgJgDgNQAJAHACAMIAAAEIgCgBg");
	this.shape_408.setTransform(243.575,349.7);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#D0D0CF").s().p("AGvMUQADhkgHhcIAAgDQANBagHBsIgCABIAAgEgAmwMUQgChgAAhgQAGABgBgIIACAAIAAAEIAAADIAAAEIgEAAIAAC4IAAAEgADSrXIAAhAIADAAIAAAFQADAkgGAbIAAgEg");
	this.shape_409.setTransform(250.2372,322.675);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#A1A1A1").s().p("AgLACIAAgCQAMAAAHgEIAEgBIAAAFIgEAAQgDAGgFAAQgFAAgGgEg");
	this.shape_410.setTransform(272.7,240.3063);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#C4C4C3").s().p("AgBAYIAAgDIAAgwQAFAXgEAgQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAIAAgFg");
	this.shape_411.setTransform(274.0089,237.35);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#ABAAAA").s().p("AgDAYIAAgzIADAAIAEAAIgBADIgGA0IAAgEg");
	this.shape_412.setTransform(270.825,253.125);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#B8B8B8").s().p("ABDDZQgCgQAAgRQAHAKgDATIAAAFQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAhBiSIgEAAIAAgDQAHgbgDglIAAgEQAGAfgEAog");
	this.shape_413.setTransform(274.4329,268.3);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#B1B0B0").s().p("AgnLUQASgGAXACIADAAIAAACQgYABgUAFIAAgEgAjojGQgCgcAAgcIAEAAIAAA0IAAAFIgCgBgADoqxQgBgSAAgUQAGAMgDAWIAAAEg");
	this.shape_414.setTransform(244.3974,315.55);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#A6A6A6").s().p("AFzPPIAAgTQAGgFAAgNIACAAIAAAEQAAAWgIAPIAAgEgAg8HrIAjAAIADAAIAAADIgmABIAAgEgAlnFZQgOgBgFgKQALADAKAGQABAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIgDAAgACju4QgCgJAAgKIAAgCQgGgBgFAAIAAgEQAWgDgHAZIAAAEg");
	this.shape_415.setTransform(250.95,338.0839);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#D1D1D0").s().p("AAgACIhDAAIAAgDIAEAAIA0AAIADAAQAGAAAFABIAAACIgDAAg");
	this.shape_416.setTransform(263.5,240.725);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#AEAEAE").s().p("AFzOQIAAgaIAEAAIAAADQADASgHAJIAAgEgAl3OUIAAgEIAAgaQAHAIgDASIAAAEIgEAAgAgpMBQAYACAOgJIADAAIAAACQgLAJgNAAQgIAAgJgEgAFqFOQgFgggIgcIADAAQAJAZACAgIAAADgAFSDsIgFAAIAAgCQgGgGADgOIAKAUIABACIgDAAgACakcQgJgQABgZIADAEIAAADQACASAFANIABADIgDAAgAhumQIgJgWQALADAAAPIAAAEgADHuLIgbgHQAUgCAKAHIAAADIgDgBg");
	this.shape_417.setTransform(250.22,329.0438);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#A9A8A8").s().p("AD4JcQgGgLgDgMQAJAFABAOIAAAEIgBAAgAhuBIIAAgEIAAglQAHAPgFAaIgCAAgAhVApQgCgTgBgSQAIAMgDAWIAAADIgCAAgAj4gzIAAgFQAFgTAEgZIACgBIAAAFQgBAYgHAVIgDAAgADSk3QgIgKACgTIAIAaIAAAEQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAgABFpbIBlAAIAFAAIAAAEIgFAAIghAAQgkAAgggEg");
	this.shape_418.setTransform(250,295.3);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#ACABAB").s().p("AgbG5QgMgEABgOQAFAIAJAHIAAADIgDAAgAAmmKQgEgXgCgXQAJAQgCAaIAAAEg");
	this.shape_419.setTransform(266.8847,259.85);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#C3C3C2").s().p("Aj2GLQgIgIADgRQAEALADALIABAEQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAgAD7leIgBgDIgDgqQAJASgEAbg");
	this.shape_420.setTransform(246.8928,261.725);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#C4C4C4").s().p("AhaTDIgbAAIAAgDQAOAAAQACIAAABIgDAAgAB0y4QgOgGgRgEQAXgDAKALIAAAEQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_421.setTransform(256.35,335.0179);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#BEBEBE").s().p("AkBQ8QgHgIACgSIAHAWIABAEIgDAAgAkJGGIAAgPQAHgNACgVIACAAIAAAEQgCAdgJATIAAgDgADChOIAAgEQAJgEAFgKIACgBIgBAEQgCANgNAHIAAgFgADvwzIAAgEQALgEANAAIADAAIAAACQgRACgKAHIAAgDg");
	this.shape_422.setTransform(236.7,321.55);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#ECECEB").s().p("ApbAFIgaAAIAAgDIAaAAIAEAAIAAADIgEAAgAJUgEIAfAAIADAAIAAABIgiABIAAgCg");
	this.shape_423.setTransform(220.55,189.35);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#AAA9A9").s().p("AhLMjIAAgEQAiADAbgGIADgBIAAACQgWAGgbAAIgPAAgAgSEdIAAgEQALAGASAAIAAACIgEAAIgIABQgLAAgGgFgABhraIjrAAIAAgEQB4AAB3ACIAAACIgEAAgACFsEIgCgTQAGgBAAgKIABAAIABAEQACAKgGACIAAALIAAADg");
	this.shape_424.setTransform(256.975,310.6961);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#C9C9C9").s().p("AhJLFIBrAAIAEAAIADAAIAAACQgbACgYAAQgiAAgdgEgAhhLBIADAAIAGABIAAABIgJgCgAA4rAIAAgEIAEAAIAigEIAEAAIAAAEIgEAAQgOAEgTAAIgFAAg");
	this.shape_425.setTransform(250.175,311.8413);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#C7C7C7").s().p("ADuN4IAAgDIAAgaIADAAIAAADQADAVgGAKIAAgFgAh5t4Ih4AAIAAgEIB4AAIADAAIAAAEIgDAAg");
	this.shape_426.setTransform(267.6724,330.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#A5A4A4").s().p("AlVOwQgGgPgDgSIAEAAIAHAfIABADQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBgAliGNIAAgaQAHgSACgXIACAAIAAADQgCAlgJAgIAAgFgAFgDRQgEgOgFgMQANAFgCATIAAADQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAgAjfBEIAAgIQAHgEADgLIACAAIAAADQgDAQgJAHIAAgDgAhbk2IAAgFQgBgXgDgWQAKARgCAcIAAAFIgEAAgAA2utIgTAAIAAgEIAbAAIADAAQAAABAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIgGABIgEAAg");
	this.shape_427.setTransform(247.7578,329.45);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#B0B0AF").s().p("ACYKRIAAgEQAKgCAGgFIADAAIgBACQgHAHgLAFIAAgDgAipqTIADAAIAEAAIATAAIAEAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQgOACgPAAIAAgEg");
	this.shape_428.setTransform(267.6,301.275);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#ACACAB").s().p("AAeQRIAeAAIAEAAIAAACQgRACgRAAIAAgEgAGGF9IAAgEIAAgaIAEAAIAAAWIAAAEIAAAEIgEAAgAmJF9IAAgEIAAgHIAAgEIAAgPIAEAAIAAAaIAAAEIgEAAgAkRg1IAAgEQAFgHAHgDIADgBIAAADIgPAQIAAgEgAjKlAIAAhDQAHAfgEAoIgDAAIAAgEgADHlAIAAgDIAAhAIAEAAIAABAIAAADIgEAAgAi1vgQgCgZAAgbIAEAAIAAAxIAAAEQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBg");
	this.shape_429.setTransform(250.175,355.125);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#9F9F9E").s().p("AAAAlIAAgDQgFgfADgnIAGBGIAAADIgEAAg");
	this.shape_430.setTransform(231.7526,246.9);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#CECECD").s().p("AAHAlQAAgsgQgdIAEAAIAHAAIAEAAQgDAnAHAfIAAADg");
	this.shape_431.setTransform(230.85,246.9);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#B7B7B6").s().p("AkxQMQgKgOABgWQAGAQAEARIABAEQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAgAgdMwQAfAAAfACQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIgFAAIgTAAQgWAAgRgEgAF3LHIAAgeIADAAIAAADQADAUgGALIAAgEgAl4LKQgCgQAAgRQAGAKgCAUIgBAEIgBgBgAAUKdQgGgKgRADIAAgDQAUgFAEAMIABAEIgCgBgABwFjIAAgEIAaAAIAEAAIAAACQgTAAgLAFIAAgDgAibucQgCg4AAg4IAEAAIAABtIAAADg");
	this.shape_432.setTransform(250.2224,346.125);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#A4A4A3").s().p("AgpH+QAOgBANABIAEAAIgBACQgOACgQAAIAAgEgADmGFQgEgNgBgQQAHAKAAAQIAAAEQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBgAjjBsQgGgLACgSQAFALACAPIAAADIgDAAgAi/ncIAAgDQgJgLACgXIAEAAQgBAVAHANIABADIgEAAg");
	this.shape_433.setTransform(249.06,290.825);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#A6A5A5").s().p("ACxGKQATgfgfAEIAAgDQAlgGgXAnIgCAAIAAgDgAhwCHIAAgEQgCgLgFgHQAOABgDARIAAAEIgEAAgAiZhCIAAgIIAJgKIACgBIAAADQgEALgHAIIAAgDgAi3l2QAAgLgEgIIAAgEQALAIgFASIgBABIgBgEg");
	this.shape_434.setTransform(247.9158,276.55);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#C6C6C5").s().p("Ai3QHQgKgLABgWQAHAMACASIADAAIAAADIgDAAgAC3JdQAMgSgNgFIAAgEIAIAAIADAAIAAAEQABATgMAGIABgCgAgjisIAAg/IAEAAIAAAEQADAkgHAbIAAgEgAgfvxQgGgEACgOIAJgDIADgBQAAABAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgHAGQAAAFACAEIACABIAAAEIgEgBg");
	this.shape_435.setTransform(231.9748,338.05);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#A1A1A0").s().p("ABXRWIgEAAIAAgDIAAgEIA1AAIADAAIAAACIgwACIAAADIgEAAgAAVFMIAAgBIACABIgCAAgAgkFGQAdgCAWAGIgDAAIgEAAIgOABQgRAAgNgFgAkuCeIAAgFQAHgEgCgOIACAAIABAEQAEATgMADIAAgDgACbhGIgbAAIAAgEQAOgBANABIADAAIAAAEIgDAAgAAfl+IAAgDIAAgEQAGgMADgSIACAAIAAAEQgCATgFAOIgEAAgAEtseIgBgEQAAgMgHgGIAAgFQAOAGgFAVgAEIw/Ig1AAIAAgDIA1AAIADAAIAAADIgDAAgAhRxVIAEAAQgCAPAVgHIADgBIAAADQgKAEgGAAQgLAAABgOg");
	this.shape_436.setTransform(239.2408,349.325);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#BBBABA").s().p("AgQAAQATADAKgFIAEgBIAAADIgBACIggACIAAgEg");
	this.shape_437.setTransform(241.75,241.275);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#AEAEAD").s().p("AiVHoIAtgEIADAAIAAACQgXAEgZABIAAgDgADACOIAAgEQAFgHAEgKIACgBIAAAEQgBAQgKAGIAAgEgAiLAxQAAgSgHgJQANAEgEATIgBAEgAjJnnIAwgEIAEAAIAAACIg0AGIAAgEg");
	this.shape_438.setTransform(255.05,290.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#9F9E9E").s().p("AkPIrIAAgLQAGABAAgJIABAAIAAAEQABAOgIAFIAAgEgAhXBTQAKAEANACIAEABIgBACIgJABQgNAAgEgKgAEJm2IAAgEIAAhDIADAAIAEAAIAAADIgEAAIAABAIAAAEIgDAAgAhqonIAAgDIAXAAIAEAAIADgDIAEgBIgBACQgIAGgOAAIgLgBg");
	this.shape_439.setTransform(244.35,294.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#A3A2A2").s().p("AhxLMIAAgDIAEAAQA9AGBFgCIAEgBIAAACQgeACgdAAQgpAAgmgEgAACE/IgZAAIAAgEQAPAAAOACIAAACIgEAAgAjDlRIAIgKIADgBIgBAEIgHALIAAAEIAAACIgBAAQgFAAADgKgACrrMIAAgDQALAEAPABIAAADIgDAAIgFAAQgLAAgHgFgAAArHIhLAAIAAgFIBLAAIACAAIAAAFIgCAAg");
	this.shape_440.setTransform(250.3276,306.9292);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#AEADAD").s().p("ABPRGIAagBIAEABIAAABQgPACgPAAIAAgDgAA8GmIAAgEQAGgDgCgMIgBgEIACABQAGAUgLAGIAAgEgAhsxEQAUADAKgHIAEAAIAAAEIAAABQgRACgRAAIAAgDg");
	this.shape_441.setTransform(250.575,346.875);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#B9B9B9").s().p("AE5QtIAAgPQAHgDgBgLIACAAIAAADQAAATgIALIAAgEgAg9NYIAAgFIAAgaIAEAAIAAAaIAAAFIgEAAgAhmFoIgEAAIgEAAIghAAIAAgDIgBgCQgQgCgRAAIgBgCQgVgFgXgBIAAgBQgRAAgKgGIgDAAQgNAAgKgEIgEAAQgLgCgHgGIAAgBQgQgEgLgGIgDAAQgLgDgEgIQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAAAAAQgLgGgLgDIAAgCQgJgEACgNQAIgfADglIAAgDQAIgcAGgcIABgFQAIgHAAgPIAAgDQALgNADgVIAAgEQAJgFgBgOIAAgEQALgUAPgSIAAgDIASgTQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgDIAAgEQATgOAJgaQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAQAJgIACgPIAAgDQAGAAgCgIIAAgEQANgGgCgUIAAgDQAIgIAAgPIAAgEIAAgEQAIgMABgVIACAAIACgBQAEgngGggIgCAAQgDgLgGgHIgBgEQgFgKgCgNQAEAEAHACIAAACQAYAFgOgmQAAgBAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCAAQgLgrgVggIAAgEQgBgOgGgMIAAgDQADgSgHgJIAAgEIAAg0QAGgVACgYIAAgEQAIgJABgRQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAIgMADgRIAAgEQAhgcBBACQDJAGCDgkQADAOAGALIACABQAGAGACAJIAAAEIAJAWIACAAIAPAiIAAAEIAGAeIACAAIABAdIADABIAAA0IAAAEIgEAAIAAAbIAAADIgCAAQgBAbgMAOIgCABQgDALgGAHIAAAEIAAADIgBAEQgJAPgGATIgBAAQABAMgHADQAAAKACAIIACABIAIAAIADAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQgMAFgCAPIAAATIAAAEIgEAAIAAgEQACgjgNAfIgEAAIAABAIAAAEQADAPAGAKIADABQAAAGABAFIACAAQABARAFANQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAQgBAUAJAJIADAAQAUAzAeAqIADAAQAEALgEACIAAACQgsglgWg6QgahFgvgHQAkB8A6BjQgXgbgegVIgBgCIgSgNIgDgBIgEgDQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgPgIgSgFIgDABQgJACABgHQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAQgPgGgWABIAAgCQgTAAgLgGIgDAAIgmAAIAAgBQgOgCgPAAIAAADIgEAAIgaAAIAAAEIgEAAIgtAEIAAAEIAAABQgUADgOAHIgDAAIgXADIAAAFIgBACQggAPgiAPIAAAEIgEABIgPAGIAAAEIAAAEIgCAAQgDAHgGAAIAAAEIgEABQgHAEgEAHIAAADIAAAEIgBADIgLAQIgCAAQgCARgHANIAAADIAAALIAAAFQAPAEAAgbIAAgEQAfgqAtgcQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAKgFAMgEIAAgCIAAgEIAigKIAAgCIAagFQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAgEQASgBATgEIAAgCQAPAAAPgCIAAgCQAPAAAPgBIAAgBQAUgBARADIADAAIAbAAIADAAQAFAFAKgBIAEAAQADAMAUgEIADgBQAIAIAPAAIAEAAQAsAOAYAiIADAAQAEAMALADIAEABQAQAJAHAUIADABQAEALAFALIACAAQAMAWASgDIAEAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAgBAAAAQACgLgBgGQAPAVABAbQABAXAKALQASgKAGgXQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgpgFgiIAAgEIAFAAIADAAQAAAGABAFIACABQAAAMAEAKIABADQAIAcAFAhIABAAQAGgBgCAIIAAAEIgDABIgPAKIAAAEIAAAEIgFAAIAAAEIgCAAQgHAFgJACIAAAEIAAADIgEABIgEADIAAAEIgDABQgGAGgNABIABACIACABIAAADQgPARgaAGIAAAFIgDAAIgXAGIAAAFIgBACQgLAEgOABIAAAEIgEAAIgXADIAAAEIAAAEIgCABQgOAHgVgBIAAAEIgEABQgVAAgUADIgDABQgMAFgTgCIAAAEIgEAAIghAAIAAADIAAAEIgEAAIgiABQgzAAgtgFgAgfjJIAEAAIAkAGIAEABQAMADAEgGIADAAQAdAAAXgGIAAgCIAAgEQARABAKgHQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQALgFAKgHIABgCQAQgHAFgTQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIACAAQAXgnglAFIAAAEIgBADQgXAUgOgIQANABgBgMIAAgEIACAAQAEgbgGgSQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgSgggegVIgBgDQgHgLgWADIAAgCQgPgCgPAAIAAAEIAAABIgdAGIgBADQgcAQgQAaIgCABQgDARgGANIAAADIAAAEIADAWIABAEQAFAKAEAMIACABQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAQAWAmgngZIgBgCQgLgGgOgDIgBgCQgOAAgEgJQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAgBQgOgHgPAGQgDAOAHAEIADABQAGAMAMAEIABADQAFAKAOABIAEAAIAHAHIAEAAQAIAJAOACIAEABQAJAGASgCIADAAgAi1mfQACAQAHAJQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAMAaAeAHIADAAQAKAHAPgIQABAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBIAAgDQABgDADgBIADgBQAMgCAAgQIAAgEIABgBQAFgWgGgOIAAgEQACgWgHgMIABgEQAEgTgMgDIAAgEIgLgmIAAgDQAAgPgLgEIgBgDQgLgfgigIQAMAZALAZIAAADQAFAIACALIAAAEQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgKgHgOAIQAEBiApgOIAAgBIAEAAIAAAlIAAAEIgDAAIgEADIAAAEIgEgBQgNgCgKgEIgDgBQgNgDgKgIIgBgDQgEgEgIAAIgCAAgAB2niIAAADQAAAaACAbIACAAQAGAKADAPQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAPALADIAEABQAGAMAUgBIAEAAQALgEAHgIQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgEQAQgQAKgWIAAgDIACAAQAFgcgWANIAAADIAAAFIAAACIgEABIgDAAIgEAAIAAgDQAWhSgwgQIAAgEIAAgHQAGgHADgMIACAAIADgBQAKgRgNgIIgEAAQgSAHgIAPIAAAEQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgJANgHAQIAAADIAAAEQgCAOgFAJIgCAAQAAAQgGAHgADCp9QANBCAcAzIAAgEQAJhigzgSIABADgAEbCAIAAgCIACACIgCAAgAghkZQgBgPgEgKQAGgNABgSIAAgDQAUgVAggFIAAAEIAAADQADAPAIALIAAAEQABAVgFAQQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQgYAQgggKIAAAEQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBgAAglvIgKAAIANgBIAAABIgDAAgAE5m1IAAgbIAEAAIAAAEQADASgHAIIAAgDgAkZmyIgBgeQAGAJgDASIAAADgAgEqiQBSgEARgiIABgEQA3AAAtAKQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQgYALggAEIgEAAIAAgEQAJgUgUAJQACAIAEAEIABADIAAACQhEAKhFAGIAAgDgAi1wOQAOgCAGgMIACgBQAQACAagFIAEgBQAQgFAZgBIAAgBIAEAAIBKAAIADAAQAPAAAPgCQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIAGgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBIAWAAIAEAAQAuAHA3gDIAEAAQAIAFAPgBIADAAQAYAKgRAPIgDABIAAgCQgKgIgUADIgEAAIAAgCQh4gCh3AAIgDAAQgLAHgTgDIAAADIgEAAIgeAAIAAAEIAAAEIgEAAIgXAAIAAADIgDABQgHADgEAAQgJAAABgLg");
	this.shape_442.setTransform(249.6318,342.175);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#A09F9F").s().p("AiDQ7QAJAGARgBIAAACIgEABIgIABQgMAAgCgJgACCH9IgDAAIgIAAIgDAAIgiAAIAAgDQAfgDATAGgAAAxAIAAgDIAlAAIADAAIAAABQgYABgQAEIAAgDg");
	this.shape_443.setTransform(238.275,344.9235);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#B3B3B2").s().p("ADIGuQgFgKABgPQAFAKABANIAAADIgCgBgABaCDIAAgDQAGgHAAgQIACAAIAAAEQADAQgHAGIgEAAgAjKjGIAAgDIAAgxQAIAVgFAfgAigmqIAAgFIAeAAIAEAAIAAADIgaACIgEABIgEACIAAgDg");
	this.shape_444.setTransform(252.4,281.05);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#C3C3C3").s().p("AiOLgQASACAQADIADAAIAAADIgDAAIgEABQgSAAgMgJgACLgIQgOgBgMABIAAgEIAAgBIABAAIAKAAIADAAQAIAAAHACIAAADIgDAAgAhZrZIAAgEQASABgKgJQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAEAAIACABQAIASgVAAIAAgEg");
	this.shape_445.setTransform(240.45,306.755);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#B2B2B1").s().p("AgBAYIAAgDIAAgsQAGARgDAbIAAADIgDAAg");
	this.shape_446.setTransform(232.395,229.85);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#C8C8C7").s().p("AiRREIAAgEIAAgEQADgQgHgHIAAgDIAEAAIAEAAIAAAeIAAAEIgEAAgAESOmIAAgEIAAgWIAEAAIAEAAIgBAEIgHAaIAAgEgAkTwpQgIgIADgSIAEAAQgDAQAFAIQABAAAAAAQAAABAAAAQAAAAABABQAAAAAAABIgDgBg");
	this.shape_447.setTransform(258.7821,332.425);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#A4A3A3").s().p("AmFO5IgEAAIAAgEIAAhSIAEAAQAAApACApIACAAIAAAEIgEAAgAGGO1IAAgEIAAhOIAEAAIAABOIAAAEIgEAAgAmJMmIAAgDIAAhxIAEAAIAEAAIAAAEIgEAAIAABtIAAADIgEAAgAiRFZQAJgEAOAAIADAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgZAFIAAgDgAknFRIAAgDQAFgJAKgGIAEgBQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIgSAUIAAgEgAjfAWQgIgIgEgLQALAFADALIABADIgDAAgAiCgeIAWgDIAEAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgIAFgHAAQgGAAgEgEgAhVhDIAAghQAGAOgFAWIgBABIAAgEgAA8qxQAQgFAWAAIADABIAAAEIgDAAIgEAAIgiADIAAgDgAATu4IBSAAIAEAAIAAACQgrACgrAAIAAgEg");
	this.shape_448.setTransform(250.175,309.5625);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#AFAEAE").s().p("AhUSyQAKAFARAAIAAACIgEAAIgKABQgLAAgCgIgABCNgQg0gGg8ACIAAgDQA+gDA1AIIAAACIgDAAgAjEBuIAAgEIAPgGIAEgBIgBACIgSANIAAgEgACllpQgCgbAAgaIAEAAQgBAYABAZIAAAEgACynWQAHgQAJgNQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAIgBADQgGASgMAMIAAgDgAhmrWIAAgDIAAhaQAHAqgFAzgAAYy5IAqAAIADAAIAAACIgtABIAAgDg");
	this.shape_449.setTransform(245.125,335.6964);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#B8B8B7").s().p("AiAS2IAwAAIAEAAIAAADIgEABIgPAAQgTAAgOgEgAE2QUIAAgOQAGgCgCgKIgBgEIAFAAIAAAEQAAATgIALIAAgEgAlgQYQgEgQgBgSQAIALgBATIAAAEIgCAAgAFkCqQgCgPgHgLQANAEgCASIAAAFQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAgAhMy5IAbAAIADAAIAAACQgPACgPAAIAAgEg");
	this.shape_450.setTransform(252.233,336.0347);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#989898").s().p("AhKTXQgLgFgUACIAAgCQgZgBgQgIIAAgCQgQgFgSgBIgDAAIgBgBQgOgEgQgCIAAgCQgNABgFgHQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgMgFgOAAIAAgCQgzgLgUgoQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAHgMgMgNIAAgEQgBgPgKgEIgBgDQgFgOgHgMIAAgFQABgOgHgIIgDAAQgCgSgHgMIAAgEQABgSgIgMIgBgDQgGgRAAgZIgBgDIgHgXIAAgDQAAgcgIgSIAAgDQADgSgGgIQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQgCgPAAgPIAAgDIgHgiIAAgEQACgdgFgTIAAgFQACgdgGgTIAAgEIAAgEIAAi7IAAgEQAGgZgCgjIAAgDQAFgRgCgZIAAgEIACAAQACgQgEgKQAGABgBgJIgBgDQAHgFgDgOIgBgEQANgDgEgTIgBgEIAAgEIAAgPIAEAAQAKgUACgdIAAgDQAFgEAAgLIACAAQAHgIAAgPIAAgEQAHgIAEgKIABgEIAAgEIAAgHIAuhKQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAKgFAEgKIABgDIAAgEQATgNALgUIAAgDQAJgIAGgMIAAgDIAAgEIAAgDIAHgMIAAgDQALgSAEgYIABgEIAAgDQAGgBAAgKIABAAQAJgJgBgRIAAgFQAGgbgDgkIAAgEQAHAHACALIACABIAABDIAAAEIgCAAQAAAWgJAMIAAAEIgCAAQABAJgGACIAAALIAAAEIgCAAQgCAQgHAKIAAAEIAAADQACAJgGgBIgBABQgEAKgHAEIAAAIIAAADQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAQgIAZgTAOIAAAFIAAADIgDABQgLAFgFAJIAAAEIAAAEIgBADQgOARgMAVIgBAAQAAAIgGgBIAAAMIAAAEIAAADQgEAVgKANIgDAAQABAKgGABIAAALIAAAEIgBAEQgGAcgJAcIgBAAQgDAXgGASIAAAbIAAAEQgCANAJADIAAACQAFAKAOACIADAAQAFAIALADIADAAQAEANATgCIADAAQAIAGALABIAEAAQABAMASgDIADgBQAJAGASgCIAEgBQARAIAYAAIAEAAQAKAHAUgBIAAACQAOAGAXgCIAEgBQBAAHBKgFIAAgCQASABATgCIAAgCIAAgEQAUADAKgGIAEgBQAWgBAXgEIAAgDIAAgDQAVABAOgIIACgBQALgGAQgDIAAgCIAAgDQANgCAMgEIABgCQAOgCAMgHIAAgCIAAgEQAagGAOgRIABgDQANAAAFgIIABgEIAAgDIAEgEIADAAQALgFAHgHIABgDIAAgEIAFAAIARgQQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAgDQACgIgGAAIAAgDQgCgggJgZIAAgEQACgQgKgGIgCgBQgCgEABgHIgBgCIgKgUIAAgDQABgTgNgEIAAgEIgHgPIgBgDQAAgQgOgDIgBgEQgEgHgGgEIgDgBQgegqgUgyIgBgEIgKgaIAAgEQgBgQgHgKIgCAAQgCgGAAgGIAAgDQgFgKgCgNIAAgDIAAhAQANgfgCAiIAAAEQAAAVACAUIACAAIAAAFQAAAPAFAKIACABQAHANAEARIABADQADANAGANQAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAIAHASIAAAEQAGAMAHAKIACABQAqAzAlA5IABADQABANAHAJIACABIAIATIAAADQAHALACAPQAAAAAAAAQAAAAAAAAQABABAAAAQABAAAAAAQALAQADAdIACAAQgBAWAJAOIACABIAGAhIACAAQAAAQACAOIABABQABATACASIABAAQABAVgBAUIAAAFQAHAZgDAiIAAAEQAKBigKBhIAAAEIAAAwIAAAFIgCAAQABAdgHATIAAAEIAAAeIAAAEIgDAAIAAAaIAAADQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQgFAPgEAPIAAAWIAAAEIgCAAQAAAQgFAHIAAAWIAAAEIgCAAQAAAPgGAHIgCAAQAAAOgGAFIAAATIAAAEIgCAAQgBASgIAMIAAADIAAAIIAAADQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIgNAYIAAAMIAAAEIgCAAQgMApgUAeIgDABQgPAPgXAGIAAAEIgEABQgKABgJAGIAAAEIAAACQgiAOgpAGIAAAEIgDAAIgiAAIAAAEIgEAAIgeAAIgDAAQgRAGgZgDIAAAEIgEAAIgeAAIAAAEIgDAAIg0AAIAAAEIAAADIgDAAIgYAAIAAAEIgDAAIgPAAIAAAEIgDgBgAgaSyQAlADAegGIADgBIAmgBIAAgCQAPAAAPgCIAAgCIAAgEQANAAANgCIAAgBQARgBANgFIAAgCIAAgEQAagDATgIIAEAAQAKgFAMgEQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAKgEAJgHIACAAQAJgHAOgDIABgCIAAgEIATAAIACAAQAJgLgBgTIAAgDQAKgXADgeIADAAQAHgLABgTIAAgEIAAgDIAFgUIABgDIAAgEQABgFgBgGIAFAAQAGgRABgYIAAgEQAGgHgDgQIAAgDIAIgaIAAgEIAAgEIAAgTIADgBIAAgCQAIgJgDgSIAAgDQAGgLgDgUIAAgDQAGgNgBgVIgCgEQALgXACghIAAgEIAAgDIAAhPIAAgEQAFgIgCgSIAAgEIAAgDQACgUgFgLIAAgDQACg4gHguIAAgEQADgbgGgRIgFAAIACgEQABgYgGgOQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgJgTgiArIgDABIgYAKIAAAEIAAAEIgCAAIAAADIgEABQgJAFgLACIAAADIAAAFIgBAAQgHAHgOgBIAAAFIgEAAIgSADIAAAEIAAAEIgDAAQgIAFgMgCIAAAEIgEAAIgWAEIAAAEIgBACQgUAHgYACIAAAEIgEAAIgaAAIAAAEIgEAAIgaAAIAAADIgEAAIgpAAIAAAEIAAAEIgDAAIhsAAIgMAAIgCgBIgBgBIACAAIgCgBIgGgBQgWgGgdACIAAgCQgPgBgPAAIAAgCQgRAAgKgGIgDAAQgQgDgSgBIgDgBQgMgFgSgBQAAgBgBAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQgJgFgQAAIAAgCQgugNgggaIgBgDIgHgEIgDAAIAAApIAAADIgFAAIAABxIAAAEIAAAPIAAAEIgDAAQAAARACAQIABABIAAADIAAAEIAABSIAAAEQADAdAHAbIACAAQAAATACATIACAAQAAARABAQIACABIAAAaIAAAEQAEARAFAQQAAAAABAAQAAAAAAAAQAAABABAAQAAAAABAAIAAAOIAAAEQAGAMgBASIABAAQACAYAEAVIACAAIALAmIAAADQACASAEAQIACAAIAAAEQAAAVAJAMIACABQAAAHADAHQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAQgBAWAKAOQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAQAYATAaAOIADABQADAMAUgEIADgBQAJAAAJADIABABQANAIAVAAIADAAQANAGASABIADAAQADANAUgFIAEAAQATAGAdgCIAEgBQAIAHATgDIADAAgAAiNoQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgHgMgHgJIAAgCQg0gIhAACIAAAEIAAAEQAAAGgHABIgDAAQgMgCgHgFIAAgEIAAgEIgBgCIgSgNQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgCgHAAgHIAFgDIADgBQAOAAALgFQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIACgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAOgQIAAgDQANgMAIgRIADAAQAJgIAFgMIAAgDIAAgEIAHgFIAAgCQAfgIgEAaIAAAEIgCAAQABAIgHgBIAAAFIAAADIgCABIgMAOIAAAEIAAADIgBAEQgEAHgHAFIAAADIAAAEIgDAAQAUANAogFIADAAIABAAQgEgYAAgdQARgDAFAKIACABIALAPQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAIAJAWQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAKAIADAOQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIAAAaIAAADIgEAAIAAAIIAAAEIgCABQgIAGgKAAIgBAAgAhHIaIgDAAIgQAAIAAgDIgIgTIAAgEQAUgFAZgBIAAgCIAmgBIAAgCQAaADARgJIABgCQAVgCANAFIADABIACAEQABAMgGADIAAAEIAAADIAAADQgDADgFACIgDAAQgaAGgigDIgCABQgSAEgWAAIgVgBgAAHiXIgEAAIglAAIgDAAIAAgCIgegBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQgJgGgPgDIgEgBIgIgGIAAgDIgWgJIgBgCQgMgFgGgMIAAgCQgHgDADgJQALgFANAEIADABQAEAIAOABIAAACQAIAJAPACIADAAQAoAYgXgmQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIAAgEQgCgMgGgHIAAgDQAAgNgDgKQAFgOABgTIABgEQAQgbAcgQIABgCIAdgGIAAgBQANgBAOABIADAAQAPADAMAHIACABQAeAU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EIgEAAIhmAAIgDAAIgWAAIgEAAIgbAAIAAADIgDAAIgEAAIgDAAIhKAAIAAAFIgFAAIgDAAIglAAIAAADIAAADIgEABQgaAGgQgCIgCAAQgGAMgOADIgEAAQgBAWAbgMgAiHkxQgdgIgMgZIgBgEQgEgFABgKIAEAAIAEAAQAKAIAMACIAEABQAFAOAVgEIABgCIAAgEIADgDIAEgBIACAAQAEgagGgPIAAgEQACgdgJgQIgDAAQgBgVgIgMIAAgFQADgQgOgCIgBgEQgKgZgMgYQAiAIALAeIABAEIAJAWIACAAIAKAmIAAADQAHAJAAASIABAAQAAASACATIACAAIAAAiIAAAEIgCAAQgCAKgIAEIAAAEIAAAEIgCABQgDABgCACIAAAEIgDAAIgXADIgEAAgACOlLIgBgCQgIgHgGgJQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgDgPgGgLIAAgEQgBgYABgZQAGgGgDgQIAAgEQAGgJABgNIABgEQAMgNAGgRIABgEIAAgEQAIgPASgGIAEgBQAEALgDAMIgBADIgDAAQgCAMgHAHIAAAIIAAADQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgCABIgCAAQABAIgHgBQAAAIAAAIIAAADIgBAAQAAAQgGAHIAAAWIAAAEQgBAZAJAQIADAAQAIAHAFgGIACgBQAOgHALgJQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIADgBIABgDQAOgPAAATIABADIgBAEQgJAWgQAQIAAADIgDABIgQAKIAAAEIgEAAIgEAAQgRAAgFgLg");
	this.shape_451.setTransform(250.25,337.125);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#C0C0BF").s().p("ABTHyIAPgKIADgBIAAADQgHAIgLAEIAAgEgAhknrIAAgEQAegGAhAAIAAACIgDAAQgiACgaAKIAAgEg");
	this.shape_452.setTransform(246.05,265.375);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#E2E2E1").s().p("AgBALIAAgZIACAAIABAEQACARgFAIIAAgEg");
	this.shape_453.setTransform(60.225,329.45);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#E6E5E5").s().p("AAAAPQgBgPAAgOQAGAIgDARIAAAEg");
	this.shape_454.setTransform(60.595,298.3);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#D8D8D7").s().p("AAAAaIgBgzIADAAIAAAwIAAADg");
	this.shape_455.setTransform(441.325,314.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#DEDEDD").s().p("Ay1XMIgmAAIAAgEIAmAAIAEAAIAAAEIgEAAgAV5kAIAAgEIAAg8IAEAAIAAA8IAAAEIgEAAgA183LIAbAAIADAAIAAACQgPACgPAAIAAgEg");
	this.shape_456.setTransform(301.025,337.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#E5E5E5").s().p("AgBAkIAAgFIAAhCIADAAIAABCIAAAFIgDAAg");
	this.shape_457.setTransform(441.325,302.275);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#F1F1F0").s().p("AgBAXIAAgEIAAgpIADAAIAAApIAAAEIgDAAg");
	this.shape_458.setTransform(441.325,284.775);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#F4F4F4").s().p("AAAAPIAAgEQgBgMABgNIACAAIAAAZIAAAEIgCAAg");
	this.shape_459.setTransform(441.3,276.525);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#F5F5F5").s().p("AgBAYIAAgDIAAgsIADAAIAAAsIAAADIgDAAg");
	this.shape_460.setTransform(441.325,272.575);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#F3F3F3").s().p("AgBBeIAAgEIAAgpIADAAIAAApIAAAEIgDAAgAgBgdIAAgDIAAg9IADAAIAAA9IAAADIgDAAg");
	this.shape_461.setTransform(441.325,273.15);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#EEEEEE").s().p("AAAJNIAAgEIAAgaQAGAJgCARIAAAEIgEAAgAgDkCIAAgDIAAgfIADAAIAAAfIAAADIgDAAgAgDouIAAgEQgBgNABgNIADAAIAAAaIAAAEIgDAAg");
	this.shape_462.setTransform(441.525,316.3);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#E9E8E8").s().p("AgBAUIAAgDIAAglIADAAIAAAlIAAADIgDAAg");
	this.shape_463.setTransform(441.325,255.35);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#EEEDED").s().p("AgOgBIAZAAIAEAAIAAABQgOACgPAAIAAgDg");
	this.shape_464.setTransform(369.85,188.175);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#E0E0DF").s().p("AgBAWIAAgEIAAgoIADAAIAAAoIAAAEIgDAAg");
	this.shape_465.setTransform(441.325,251.05);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#D2D2D2").s().p("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");
	this.shape_466.setTransform(250.6388,337.2149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_172},{t:this.shape_171,p:{x:439.5,y:250.625}},{t:this.shape_170,p:{x:439.5125,y:254.925}},{t:this.shape_169},{t:this.shape_168,p:{x:439.5,y:261.7}},{t:this.shape_167},{t:this.shape_166,p:{x:439.5,y:272.175}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79,p:{x:439.5,y:294.05}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:154.975,y:189.45}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:227.575,y:189.075}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:163.775,y:485.05}},{t:this.shape_3,p:{x:170.5,y:485.05}},{t:this.shape_2},{t:this.shape_1,p:{x:194.85,y:485.05}},{t:this.shape,p:{x:152.175,y:485.05}}]}).to({state:[{t:this.shape_313},{t:this.shape_312,p:{x:326.1,y:189.625}},{t:this.shape_171,p:{x:438.1,y:251.475}},{t:this.shape_170,p:{x:438.1,y:255.775}},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_166,p:{x:438.1,y:272.85}},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254,p:{x:438.475,y:377.25}},{t:this.shape_38,p:{x:227.65,y:190.35}},{t:this.shape_253},{t:this.shape_73,p:{x:155.55,y:190.725}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_1,p:{x:195.125,y:484.225}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_4,p:{x:164.3,y:484.225}},{t:this.shape,p:{x:152.775,y:484.225}}]},14).to({state:[{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_312,p:{x:328.2,y:188.575}},{t:this.shape_463},{t:this.shape_462},{t:this.shape_168,p:{x:441.325,y:262.1}},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_79,p:{x:441.325,y:294.575}},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_254,p:{x:441.7,y:378.025}},{t:this.shape_454},{t:this.shape_453},{t:this.shape_38,p:{x:228.775,y:189.325}},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_73,p:{x:156.025,y:189.725}},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_3,p:{x:171.575,y:486.075}},{t:this.shape_315},{t:this.shape_314},{t:this.shape,p:{x:153.2,y:486.075}},{t:this.shape_4,p:{x:164.85,y:486.075}}]},11).wait(18));

	// press_idn
	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#E0AA9A").s().p("AAAAFIAAgLIABAAIAAABQABAJgCADIAAgCg");
	this.shape_467.setTransform(168.7625,522.1);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#F4ECE8").s().p("AABAOQgBgNAAgOIABAAIAAAZIAAACg");
	this.shape_468.setTransform(227.25,548.65);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#E5B8AB").s().p("AAAAHIAAgBIAAgMIABAAIAAAMIAAABIgBAAg");
	this.shape_469.setTransform(227.25,546.55);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#D98872").s().p("AAAALIAAgBIAAgUIABAAIAAAUIAAABIgBAAg");
	this.shape_470.setTransform(227.25,544.725);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#E5BCB0").s().p("AAAgGIABAAIAAALIAAACIgBgNg");
	this.shape_471.setTransform(194.275,522.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#D56B4D").s().p("AoHD5QgGAAgEgHQghg4AChVIABgeQAIhbgEhhIAAgCIAAgBIABgNIAAgCQAAgyALgoQAJgIAMgDQArgOAmAAQA8AAArAlQAQANADAXQALBhhGAyIABABQBBBqA9BwIAAACQgDAbgQAQIgGACQgXgFgLgPQhLhng2h2IgCAAQgVAFgSAHQAEAwAHAyQANBhgtAwIgBAAQgFACgFAAQgDgEgEABgAnWi+IAAACQgIAygDA4QAAARAPgGQBMgbgIhOIgCAAQgSgQgeAAQgKAAgMACgAsXDoQgdhoAAh8IABglQADgjgBgnIAAgCQADgEgBgIIAAgBIAAgCQgBgzAMgoQAsgXArAAQArAAAqAXQAYANAEAaQAEAXABAVQgBBviDAVQgCAuAFAyQAKBcgdA4QgEAAgEACQgJADgHAAQgPAAgFgRgAroisIAAABQADA7AHA4IABgBQArgUAUgpIAAgBQADgWgKgUIgCAAQgUgMgcAAIgRABgAi4DnIgCAAQgbgIgJgcIgBAAQgFgigCgkIAAgCIAAgCIAAgaIAAgCIAAgMIAAgCIAAgVIAAgBIAAgrQAJh3AYhrQACgLAHgIQBVgaBkAIIAAABQADAIgCAUIAAACQgFAUgNANIAAABQg5AFg9ABIgCAAQgHAKgFAMIgBAAQgCBGgHBBIAAABQBEgJA/AGIACAAQAJAhgTAWIgBAAQgyAPhGAEIgCAAQgEA6APAxIAAACQA/gTBJAKIACAAIANALIAAACQACAHgBALIAAACIgNAfIgBAAQglAFggAMIgBABIgfABQgkAAgigDgAGxDhQhSgSgGhbQAEgNAIgJIABgCQAVgIAZAFIACAAQABAgARAaIAAABIANAIIAAACQAfgBARgMQAAgBABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQA1g9gwhIQgjgzgrgtQgbgcACg4QAnhOBZAAQAbAAAgAIQAXAEASAQQASANAMAWIABATQgBAggMATIgBAAQgQADgRABIgCAAQgUgGgIgSIgBAAIACgfIAAgCQgVgWglADIgCAAQgVARgNAZIAAACQABAaANAXIABACQB6AzgcCkQgSBphdAAQgUAAgXgEgACDDhQhSgSgGhbQAEgNAJgJIAAgCQAVgIAZAFIACAAQABAgARAaQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAMAIIAAACQAfgBARgMIACgBQA1g9gwhIQgjgzgrgtQgagcACg4QAmhOBaAAQAaAAAgAIQAXAEASAQQASANAMAWIABAUQAAAfgNATIgBAAQgPADgSABIgBAAQgUgGgJgSIgBAAIACgfIAAgCQgVgWgkADIgCAAQgVARgOAZIAAACQABAaANAXIABACQB6AzgcCkQgSBphdAAQgUAAgXgEgALPCuQgRgLgIgYIAAgWIAAgCQAYhHBJAZQATAGAGAWIAAAgIAAACQgSA5glAAQgTAAgXgOgALhhGQgdgTAAguQAOgbAegKIAAgCIAUAAIACAAQAjAKALAjIABAAIgBAaIAAACQgRAtgdAAQgRAAgUgOg");
	this.shape_472.setTransform(250.475,537.7795);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467}]}).wait(43));

	// ramune
	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#C4C9D8").s().p("AgNgBIAXAAIADAAIAAABQgIACgFAAQgHAAgGgDg");
	this.shape_473.setTransform(97.75,118.7714);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#98A1BF").s().p("AgNACQALgEAMgCIADAAIAAACQgNAEgNADIAAgDg");
	this.shape_474.setTransform(97.75,114.025);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#959FBD").s().p("AADALQgFgKgCgMQAHAIACAMIAAADIgCgBg");
	this.shape_475.setTransform(106.7,110.3);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#A6AEC8").s().p("AADAJQgEgJgDgJQAIAEABAMIAAADQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_476.setTransform(104.675,105.725);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#D8DCE5").s().p("AADAKQgGgHgBgMQAFAHAEAJIAAADIgCAAg");
	this.shape_477.setTransform(101.625,109.1);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#ADB4CB").s().p("AAYAJQgFgJgEgJQAKAEAAAMIAAADQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAgAgQAJIgJgSIAEAAQAGAGAAAKIAAADQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_478.setTransform(100.95,101.675);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#C5C9D9").s().p("AADAKQgEgKgDgJIADAAQAEAHACAJIAAADIgCAAg");
	this.shape_479.setTransform(100.275,105.375);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#BDC3D5").s().p("AAFAIQgKgEgCgMIAOAOQABAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAIgEAAg");
	this.shape_480.setTransform(116.2,101.5);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#D98973").s().p("AgLAAIATgDIAEAAIAAACQgFABgFAAIAAADIgDAAIgEABQgFAAgBgEg");
	this.shape_481.setTransform(167.3,130.4767);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#8F99BA").s().p("AAEAIIAAgCQgIgDgBgLQAKAFABALg");
	this.shape_482.setTransform(137.25,101.15);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#F9F6F5").s().p("AAIAEIAAgCQgJgCgKAAIAAgCQAPgDAHAGIABADIgEAAg");
	this.shape_483.setTransform(167.3,120.9171);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#F0DCD5").s().p("AAKACIgXAAIAAgDIAEAAIADAAQAJAAAKABIAAACIgDAAg");
	this.shape_484.setTransform(166.8,121.125);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#DA8E79").s().p("AAVAGQgPgLgdADIAAgEIAEAAIAWAAIAEAAIADAAQAGAGAHAEIABADIgDgBg");
	this.shape_485.setTransform(167.475,121.975);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#F6EEEB").s().p("AABAJQgFgEACgLIACgDIADAAIAAADIAAANIAAADIgCgBg");
	this.shape_486.setTransform(161.7089,124.35);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#DA8F7A").s().p("AAGAXQgCgMgIgEIgBgDQgCgEAAgGIAAgDIAAgOIADAAQACAbAJARIABADIgCgBg");
	this.shape_487.setTransform(162.9,126.025);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#E7C1B5").s().p("AgOAKIAAgDIAAgDIAAgEQAIgJASAAIADAAIAAABQgRACgJAKIAAADIAAADIgDAAg");
	this.shape_488.setTransform(163.575,122.65);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#A4ACC6").s().p("AADALQgFgJgCgNQAHAHACANIAAADIgCgBg");
	this.shape_489.setTransform(82.325,92.35);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#969FBD").s().p("AACALQgEgKgBgMQAHAHAAANIAAADIgCgBg");
	this.shape_490.setTransform(74.7,79.15);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#D4D7E2").s().p("AACAKQgFgIgBgLQAFAHADAJIABADIgDAAg");
	this.shape_491.setTransform(72.85,73.9);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#D0D3DF").s().p("AACAMQgEgLgBgMQAHAHAAANIAAADIgCAAg");
	this.shape_492.setTransform(67.95,56.8);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#A0A8C4").s().p("AACALQgEgKgBgMQAHAHAAANIAAADIgCgBg");
	this.shape_493.setTransform(70.65,66.275);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#7B87AD").s().p("AADAKIgHgTIADAAQAFAGABAKIAAADIgCAAg");
	this.shape_494.setTransform(73.525,65.425);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#A1A9C4").s().p("AADAJIgHgSIADAAQAEAHACAJIAAADIgCgBg");
	this.shape_495.setTransform(70.825,57.65);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#A9B0C9").s().p("AACALQgDgKgBgMQAFAHAAANIAAADIgBgBg");
	this.shape_496.setTransform(69.625,53.075);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#9BA5C1").s().p("AADAJIgHgSIADAAQAEAHACAJIAAADIgCgBg");
	this.shape_497.setTransform(84.7,57.65);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#9CA6C2").s().p("AADALQgFgJgCgNQAHAHACANIAAADIgCgBg");
	this.shape_498.setTransform(83.35,53.75);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#D2D6E1").s().p("AABALQgDgKAAgMQAFAHABANIAAADQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_499.setTransform(79.45,52.75);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#C1C6D7").s().p("AhpAmQgDgKgBgNQAGAHAAANIAAAEIgCgBgABWgjQAIgFAQADIAAACIgDAAIgNACQgFAAgDgCg");
	this.shape_500.setTransform(77.6,49.7069);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#808CB1").s().p("AAKACIgXAAIAAgDQANAAANABIABACIgEAAg");
	this.shape_501.setTransform(84.525,45.975);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#9FA8C3").s().p("AAqFXIgDgUQAJAHgEAQIgCABIAAgEgAEiEeQAIgEAMAAIADAAIAAADQgJADgHAAQgEAAgDgCgAjlg+QgEgLgBgNQAHAIAAANIAAADQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAgAkzlDQgEgKgBgNQAHAGAAAOIAAAEIgCgBg");
	this.shape_502.setTransform(98.225,77.8);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#C6CAD9").s().p("AAGAHIgNgPQALADAEAKIAAADIgCgBg");
	this.shape_503.setTransform(134.125,94.4);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#7783AB").s().p("AAFAIQgKgEgDgLQAIAGAHAHIABACIgDAAg");
	this.shape_504.setTransform(132.45,92.7);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#858FB4").s().p("AAAAaQAAgagBgYIADAAIAAAuIAAAEg");
	this.shape_505.setTransform(130.4,53.75);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#CBCFDD").s().p("AAFAHQgMgBAAgMQAGAGAJAFIAAACIgDAAg");
	this.shape_506.setTransform(128.7,92.875);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#949DBC").s().p("AAGAGQgKgDgEgJQAJAFAHAFIABADIgDgBg");
	this.shape_507.setTransform(112.45,75.925);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#7C88AE").s().p("AAbAdQgKgDgDgLQAKAEAGAHIABADIgEAAgAgQgLQgLgEgDgNIARAPIABACIgEAAg");
	this.shape_508.setTransform(109.25,89.625);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#C2C7D8").s().p("AADAKQgDgKgEgJIADAAQAFAGABAKIAAADIgCAAg");
	this.shape_509.setTransform(95.525,92.175);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#CCD0DD").s().p("AADAKQgEgKgDgJIADAAQAEAHACAJIAAADIgCAAg");
	this.shape_510.setTransform(94.175,87.775);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#AAB1CA").s().p("AgBAIQgCgIgDgHQAFAFAHACIABACIgEAAIgDAAIAAADIAAADg");
	this.shape_511.setTransform(97.725,84.225);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#D8DCE6").s().p("AAEALIgKgMIAAgDIAAgHIAMAUIABADIgDgBg");
	this.shape_512.setTransform(102.825,72.725);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#8D97B8").s().p("AgMgBIAWAAIAEAAIgBABIgMACQgIAAgFgDg");
	this.shape_513.setTransform(88.25,65.93);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#8791B4").s().p("AgEAHIAAgHQAEgDADgFIACgBIAAADQgEAJgFAHIAAgDg");
	this.shape_514.setTransform(96.9,57.65);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#C9CDDB").s().p("AgIADQAIgDAGgFIACgBIgBADQgEAHgLADIAAgEg");
	this.shape_515.setTransform(92.5,58.675);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#959EBD").s().p("AgEAMIAAgDIAHgXIACAAIAAADQgBAQgIAKIAAgDg");
	this.shape_516.setTransform(97.9,54.425);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#C7CCDB").s().p("AgBAKIAAgWIACAAIAAADQACAOgEAJIAAgEg");
	this.shape_517.setTransform(94.9017,53.6);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#828DB1").s().p("AgJAFIAQgMIADgBIAAADQgIAJgLAEIAAgDg");
	this.shape_518.setTransform(110.25,69.35);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#8A94B6").s().p("AgEAKIAAgHQAEgEADgLIACAAIAAADQgCAOgHAJIAAgEg");
	this.shape_519.setTransform(118.55,59);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#A1A8C4").s().p("AgBAKIAAgXIACAAIAAAEQADAPgFAHIAAgDg");
	this.shape_520.setTransform(113.8618,55.3);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#909ABA").s().p("AAAAOQgBgOAAgMQAFAHgDAQIAAADg");
	this.shape_521.setTransform(113.8618,51.2);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#B9BFD3").s().p("AAAAOQgBgOAAgMQAFAHgDAQIAAADg");
	this.shape_522.setTransform(119.6118,51.2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#A6AEC7").s().p("AiBCyQgCgOgDgKIADAAQAFAHgCANIAAAEgACGidQgDgMgGgIIAEAAQAHAFgBAMIAAAEIgBgBg");
	this.shape_523.setTransform(105.5309,63.225);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#7F8AAF").s().p("AgHgEIAPAHIAAACIgDAAIgBAAQgKAAgBgJg");
	this.shape_524.setTransform(109.075,32.4261);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#929CBB").s().p("Ah9BDQgFgKgDgKIADAAQAFAHACAKIAAAEQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAgACEgrQAAgPgFgJIADAAQAGAGgCAPIgBADg");
	this.shape_525.setTransform(85.075,55.625);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#7480A9").s().p("AAFAHQgKgDgDgKQAIAFAHAFIABADIgDAAg");
	this.shape_526.setTransform(95.55,44.425);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FCFCFC").s().p("AgYAwIAAgDQgCgKgFgHIgBgCQgFgFgBgKIAAgDQgCgMgIgIIAAgDIgYg5QAPAAAJgDIADgBIAYAAIAEAAIADAAQAFAEAOgEIAEAAQAIAFAPAAIAAACQAHAGAKAEIAEAAQARANADAcIAAADIgDAAIAAAXIAAADIgCAAQgBAWgLAJIgDAAQgGAGgIAEIAAADIgBADQgWATgPAAQgSAAgHgdg");
	this.shape_527.setTransform(87.725,53.8307);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#A8AFC7").s().p("AAHAFQgJgEgHgFQAMABAGAFIABADIgDAAg");
	this.shape_528.setTransform(91.975,47.325);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#BBC0D3").s().p("AgNgBQANAAANABIAAABIgDAAIgIABQgJAAgGgDg");
	this.shape_529.setTransform(88.95,41.9517);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FBFBFC").s().p("Ag4CFIgDgBQgfhqgkhjIgBgEQAYgvAygWIABgCQDpgNhFDdQgXBKhVAPIg8gQgAgFBwQAJAGARgEIAAgCQAqgaAZgqIABgDQAHgHADgKIAAgDIAAgEIAAgDQAJgKABgQIAAgEIAAgDIAAgOIABgDQACgOgGgGIgBgDQgGgTgKgQIgBgCQgHgHgJgEIAAgCQgHgCgDgDIgBgCQgKgGgNgCIgDAAIgHAAIAAgCQgNgBgOAAIgCAAQgTAEgZgBIgBACQgcAOgTAVIAKA2IAAAEQABAMAEALQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQANAjAOAjIAAADQABANAHAGIACABQAGAdAcgHg");
	this.shape_530.setTransform(87.4694,54.5613);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#AEB5CC").s().p("AgvBpQgHgGgBgNQAHAHADAKIAAADIgCgBgAA1hgQgOgCgHgHQANABAKAHIABACIgDgBg");
	this.shape_531.setTransform(88.075,52.75);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#99A2BF").s().p("AgZDgQAOAAAMACIAAACIgCABIgHAAQgKAAgHgFgAgBjkQANAAANACIAAABIgDAAIgJABQgJAAgFgEg");
	this.shape_532.setTransform(96.55,55.15);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#A2AAC5").s().p("AgNgBIAXAAIADAAIAAABQgNACgNAAIAAgDg");
	this.shape_533.setTransform(93.35,32.425);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FAFAFB").s().p("Ag9GbQhfhNgliFIgBgDQgCgNgIgHIgBgEQgnhYgYhoIAAgDQAAgNgHgIIgBgDIgFgYIgBgDQgBgKgGgHIAAgDQgEgHgCgKIgBgEQgBgJgFgHIgBgDQgGgFABgJIgBgEQgCgJgEgIIgBgDQgHgHAAgNIAAgEQAAgOgGgGIgBgDQgEgJgCgMIABgDQAAgNgIgEIAAgDQgDgIAAgJIAAgEQAAgOgHgGIAAgEQBahUCdgRIAEAAQAOAAANgBIAAgDIANAAIAEAAQAIAHAPgDIAEAAQB7AhAVCJIABADQgBANACAOIACAAIAAAKIAAADIgDAAIAAAYIAAADIgCAAQgZBkhSAoQBZhcgYifQgMhKg+gQQjHgxh6BsQA/ETBTD5QAnB0BYArQAKgEAEgKIAAgDQg4iQgUiyIACAAQAMgOAcABIADAAQChCFCUCTIACABQAvABAHgmIAAgEQiGiHiVh3IgBgDQCEBQBtBmIADABQAAAMANABIADAAIBFBDIACABQABALAJAEIABACIgBACQgjAYguAOIgDAAQgMAAgIAEIgDgBQhPg/hDhLIgBgDQgGgHgKgDIgBgDIgagYIgBgDIgQgOIgDgBQgtgrgugtIAAgBQgOgCgNAAIgDABQgJABgFAFIAAAEIgDAAQADAJACAOIABAAQAFAdAJAaIAAADIgDAAQADAKAFAJIACABQACAMAEAIIAAAEIgDAAQAFAIADAMIACAAQAMAlAPAiIAAADIgDAAIAJAUQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQAAAKAGAEIABACIgEAAQAEALAFAKIACAAQgBAJAEAFIAAADQABANAHAHIADAAIABAUIAAAEIgBABQgNAHgSACIgEABQgNABgKAFIAAAEIgDgBgAgIgPIAIgGIAAADIAAAHIAAADg");
	this.shape_534.setTransform(102.3,73.4);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#939DBC").s().p("AgLABQAHgEAMACIAEAAIgBABQgKADgFAAQgEAAgDgCg");
	this.shape_535.setTransform(88.425,29.0677);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#9DA6C2").s().p("Ah8BpQgDgNgGgHIAEAAQAHAEAAANIgBADgABrhlQAKgFAQAEIABABIgEABIgNABQgHAAgDgCg");
	this.shape_536.setTransform(80.975,39.0279);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#8691B4").s().p("AgOAAIAAgDQAQAAANAEIAAACIgDAAIgHABQgLAAgIgEg");
	this.shape_537.setTransform(96.875,28.9138);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#526395").s().p("AhhG9IgCgBQhsiphCjRIAAgEQAAgNgHgHIgBgDQgGgMgDgQIgBgDQgDgJgGgHIgBgDQgFgbgIgYIAAgDQAAgOgHgHIAAgDQgMgggIgkIAAgDQAAgOgHgHIAAgDIgDgRIAAgDQAAgOgHgHIAAgDQgPgvgFg6QBQhXCPgYIAEgBQAGADARgEIAAgCIARAAIAEAAQAGADARgDIAEAAIAGAAIAEAAQAKAFARgBIADgBQA5AEAoAVIABACQABALAMAAIADAAQA6AtAbBNIAAADIgDAAQAGAHACANIACAAQAAAMADAJIAAADQAAANACAOIACAAIAAAOIAAADIgEAAIAAAYIAAADIgDAAIAAADIAAAEIgCAAQgDALgFAGIAAAGIAAAEIgBADQgXAvgsAcIAAADIgDABIgRANIAAADIgBACQgIAIgMAEQAQAVAcANIAAACQAEAKAKADIADAAQBfBIBWBQQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQADAMALAEIADABIAOAQIADABIABACQAcAfAZAiIAAADQgHARgKAOIgDABQg4AahFAOIgBgCQg2gZghgsQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgQgOIgBgDIioigIAAgCQgIgDgFgFQADAHACAKIACAAQAUBPAaBKIAAADQADAKAFAJQAAABAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQACAKAEAHIABADQADAKAFAKQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQACANAHAIIABACQACANAGAKIACABIAAADQgIBChIACIgDAAIgYAAIgDAAIgLABQgOAAgJgEgAkdhJIACABIAGAYIAAADQABAMAEALQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAZBnAnBZIAAADQADANAFAKIADABQAmCEBeBNIADABQAOgEANgFIAAgCQASgCANgHIACgBIACAAQAEgRgIgHIgBgDQgDgKgHgHIAAgDQgEgFABgJIAAgDQgCgKgFgHIgBgCQgFgFgBgKIAAgDQgBgLgFgGIgBgDQgPgigLgmIAAgDQgBgLgGgGIgBgDQgEgJgCgMIAAgDQgCgKgFgHIAAgDQgIgagFgdIAAgDQABgNgFgHIAAgEQAFgFAJgBIADgBQAIAGAQgCIADAAQAuAsAuArIACABQADANALADIADABIAaAYIABADQAEAKAKADIADAAQBDBMBPA+IADABQAIAEAPgFIABgCQAtgPAjgYIABgCIACAAQgBgMgLgFIgDgBIhEhCIgBgCQgKgFgGgHIgDgBQhthmiEhQIgBgCIgLgUIAAgEIAAgDIAFgDQBTgoAYhjIACAAQAGgIgDgQIAAgDIAAgEIAAgKIAAgDQADgQgGgIIgBgDQgViIh7giIAAgBQgNgCgOAAIgDAAIgOAAIgDAAIgYAAIAAADIgDAAQieARhaBVIAAADQABANAEAKIACABQABAJACAIIABADIgEAAQAGAIADAMIABAAQADAMAEAJIAAADQABANAEAKIACABQAAANAGAIIABADIgEAAIAIATIADABQAAAKAFAEIABADIgDAAQADAKAFAJQAAABAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQACAKAEAHIABADIgEAAIAJAUgAiDhPIgYAAIAAgCQgcAHgGgdIAAgDQgDgKgHgHIAAgDQgOgjgNgkIAAgEQAAgNgHgHIAAgEIgKg2QATgVAcgOIABgCQAZABATgEIADAAQAIAFAQgCIADAAIAHAAIADAAQAHAIAOACIADAAQADADAHACIAAACQADAKALADIADAAQAKAQAGATIABADIgDAAQAFAIAAAPIABAAIAAAOIAAADIgCABIgIAXIAAADIAAAEIAAADIAAAEIgCAAQgDAGgFAEIAAAHIAAADIgBADQgZAqgqAaIgDAAgAiuiXIACABQAOA0AygrIABgCQALgDAFgIIABgDQALgJAAgVIACAAQAGgIgCgQIgBgDIAAgEQgDgbgRgNIgBgDQgGgHgNgBIAAgBQgPAAgJgFIAAgCQgPgEgJAGIgDAAIAAgCQgNgCgOAAIAAAEIgDAAQgKAEgOgBIAXA6IABADQACANAGAKIACABQAAAJAGAFIABADIgEAAIAIATg");
	this.shape_538.setTransform(102.475,73.7517);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FDFCFC").s().p("Ah+ApIABgDQAIgzAPgrIAAgEQATgXASgZIABgCQAfgRAxADIADAAQBWBGAWCEIABAEIgbAVIgBACQhrAMhfAIIgDABQgbgaAGg7gAgihkIgBACQg9AqgTBTIAAAEQgFAvAPAbIADAAQBtgCBogZIgBgDQgKhqhHg+IgDgBQgLgEgJgGIgEAAIgDAAQgSAAgPAEg");
	this.shape_539.setTransform(153.0119,41.0336);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#DA8C76").s().p("AgJABQAJgBAHgEIADAAIgBACIgCABIAAACIgDABQgEADgCAAQgEAAgDgEg");
	this.shape_540.setTransform(287.325,142.8135);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#ECD0C7").s().p("AgJgDIADAAQAGAGAHgFIADgBIgBADQgGAEgDAAQgGAAgDgHg");
	this.shape_541.setTransform(286.975,143.3219);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#EDD3CA").s().p("AACAKQgFgHgBgMQAFAAgBAHIACAAQAAAFADAEIAAADIgDAAg");
	this.shape_542.setTransform(285.45,141.9483);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#E9C9BF").s().p("AAAATQgBgCAAgEIAAgDIAAgdIADAAIAAAkIAAADIgCgBg");
	this.shape_543.setTransform(284.775,138.9);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#DFA594").s().p("AgDAUQgBgKAAgKIAAgCIAAgOIAGgDIADAAIgBACIgFAEIAAAeIAAADIgCAAg");
	this.shape_544.setTransform(274.95,128.075);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#F2E2DD").s().p("AgHAMQgCgKAAgJQAFgFALABIADAAIAAAEIgDAAIgEAAIgDAAIgGADIAAANIAAADg");
	this.shape_545.setTransform(275.125,126.8577);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#EAC8BE").s().p("AgNgBIAXAAIADAAIAAABQgNACgNAAIAAgDg");
	this.shape_546.setTransform(277.5,125.875);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#E1AD9E").s().p("AgJAdIAAgEQARgTAAglIACAAIAAADQABApgUATIAAgDg");
	this.shape_547.setTransform(289.3549,139.075);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#DD9A88").s().p("AgNAAIAAgCIAXAAIADAAIAAABQgPAAgLAEIAAgDg");
	this.shape_548.setTransform(280.9,130.775);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#F6EFED").s().p("AABAHQgEgDABgIIADgDIADAAIAAADIAAAJIAAADIgDgBg");
	this.shape_549.setTransform(284.5975,133.65);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#ECCFC7").s().p("AgBANIAAgDIAAgDIAAgUIADAAIAAAXIAAADIgDAAg");
	this.shape_550.setTransform(285.125,131.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#E1AC9D").s().p("AgNACIAXgGIADAAIAAACQgMAFgOACIAAgDg");
	this.shape_551.setTransform(280.2,125.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#E4B7AA").s().p("AAJADIgUgDIAAgCIAKAAIADAAQABAEAJAAIAAABIgDAAg");
	this.shape_552.setTransform(253.625,136.525);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#DB8F79").s().p("AiTApIgCAAQgBgDAAgEIAAgBQgJAAgBgFQARgEAAAOIAAADIgEAAgACagFIAAgYIgBgDQgHgIgJAIIAAgEIAAgDQAjgIgQAtIgCAAIAAgDg");
	this.shape_553.setTransform(269.9118,133.4209);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#F7F2F0").s().p("AAFAHQgMgBAAgMIADADIADABQABAGAIABIABACIgEAAg");
	this.shape_554.setTransform(256.7,141.275);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#E3B2A4").s().p("AAAAFIgBgCQgJgBgBgGIAEAAQAKAJAHgJIACAAIgBADQAAAGgIAAIgDAAg");
	this.shape_555.setTransform(257.7,141.4682);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#E5BCB0").s().p("AgBANIAAgDIAAgEIAAgTIADAAIAAAXIAAADIgDAAg");
	this.shape_556.setTransform(260.075,137.9);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#F2E1DC").s().p("AAAAOIAAgEIAAgMIAAgDIgDgEIAAgEQAKAFgEASIAAAEIgDAAg");
	this.shape_557.setTransform(259.9633,135.175);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#D87F67").s().p("AADAMQgKgFAEgUQAEAHAAANIABAAIADAEIABACIgDgBg");
	this.shape_558.setTransform(259.3467,133.5);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#F3E3DE").s().p("AAAAMIAAgCQgFgGADgLIAAgEQADAJACALIABADIgEAAg");
	this.shape_559.setTransform(258.5083,127.9);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#E2AEA0").s().p("AACAMIgCAAIAAgEQAAgLgEgIQAIAEgBAPIACAAIAAAEIgDAAg");
	this.shape_560.setTransform(257.7,125.875);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#DB907B").s().p("AAEANQgIgJgCgQQAGgBgBAIIABAAIAGAQIABADIgDgBg");
	this.shape_561.setTransform(255.825,120.5984);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#E7C1B6").s().p("AAFAMQAAgIgFABIAAgDIgGgNIADAAQAHAIACAMIABADg");
	this.shape_562.setTransform(255.175,118.75);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#EACCC3").s().p("AgJAHIAAgEQAHgFAJgDIADgBIAAACIgQALIgDAAg");
	this.shape_563.setTransform(289.35,120.625);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#DFA290").s().p("AgNADIAHgBIAAgCQAKAAAEgFIADgBIACAAIAAADQgKAHgQADIAAgEg");
	this.shape_564.setTransform(287.3,121.975);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#E3B2A3").s().p("AgOADQALgGAPgDIADAAIAAACIgdALIAAgEg");
	this.shape_565.setTransform(283.075,124.025);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#F8F5F4").s().p("AgLgDIADAAQAFAFALgCIAEAAIgBABQgGADgFAAQgIAAgDgHg");
	this.shape_566.setTransform(285.8,117.6059);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#EDD3CB").s().p("AiICSIgDgCIgBgDQgIgJACgTIADAAQAAAUAKALIAAADIgDgBgACQiPIgHAAIgDAAIgHAAIgDAAIgEAAIAAgDIAVAAIADAAIADAAIAAADIgDAAg");
	this.shape_567.setTransform(269.855,126.225);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#D6765B").s().p("AgBANIAAgCIAAgYQAFAKgEAQIgBAAg");
	this.shape_568.setTransform(285.13,110.45);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#D98B75").s().p("AAUACIgDAAIgEAAIgGAAIgEAAIgaAAIAAgDIAEAAIAnAAIAEAAIAAADIgEAAg");
	this.shape_569.setTransform(282.925,117.075);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#F3E6E1").s().p("AgQgCIADAAIAaAAIAEAAIgBACQgJADgHAAQgIAAgIgFg");
	this.shape_570.setTransform(281.9,117.5897);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#E2B1A2").s().p("AgNgBIAXAAIADAAIAAACIgDAAIgEAAIgGABQgIAAgFgDg");
	this.shape_571.setTransform(279.2,117.1118);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#D77E66").s().p("AAMACIgEAAIgWAAIAAgDQAOAAAPABIAAACIgDAAg");
	this.shape_572.setTransform(279.375,116.725);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#E0AB9B").s().p("AgLgDIATADIAEAAIAAADIgEAAIgEABQgKAAgFgHg");
	this.shape_573.setTransform(276.65,116.5613);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#D8826A").s().p("AgOADIAAgDQADAAADgBIABgCIATAAIADAAIAAADIgDAAQgGAEgKAAIgKgBg");
	this.shape_574.setTransform(275.625,112.5391);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#DD9E8B").s().p("AgNgBIAQAAIAEAAIADAAIAEAAIgBABQgNACgNAAIAAgDg");
	this.shape_575.setTransform(281.225,111.975);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#DFA593").s().p("AgEASIAAgDIAAgGQAFgJAAgPIAAgDQAGADgCALIAAADIgCAAQABAKgFADIAAADIAAADIgDAAg");
	this.shape_576.setTransform(290.5868,110.3);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#EFDAD2").s().p("AADAKQgCgHgCgDIAAgCIgDgHQAJADAAANIAAADIgCAAg");
	this.shape_577.setTransform(290.2011,107.425);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#DC9987").s().p("AgBANIAAgCIAAgEIAAgUIADAAIAAAYIAAACIgDAAg");
	this.shape_578.setTransform(284.775,110.45);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#F4EAE6").s().p("AgDAWIAAgDIAAgiQAFABAAgHIABAAIABADQABAIgFgBIAAAGIAAAEIAAAUIAAADIgDAAg");
	this.shape_579.setTransform(284.6411,109.3);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#EDD0C7").s().p("AgFAHQAFgDgGgFQADgFAGgCIAEAAIAAADIgBAEQgDAIgJABIABgBg");
	this.shape_580.setTransform(285.625,106.25);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#F1E0DA").s().p("AAFAEIgNAAIAAgEIAAgCQAMgDAEAGIABADIgEAAg");
	this.shape_581.setTransform(287.15,105.0153);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#D98871").s().p("ACQAzQgBgGgIACIgBgDIgCgDIAAgEQALABACAKIAAADgAiRguQAPgEATAAIADAAIAAAEIgDAAQgSAAgQADIAAgDg");
	this.shape_582.setTransform(299.85,121.6222);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#E8C6BA").s().p("AAEAJQgHgHgDgLQAHABABAIIABAAIADAEIABADIAAADIgDgBg");
	this.shape_583.setTransform(312.375,124.675);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#DA8D77").s().p("AjOAWIAAgDIAVgEIADAAIAAACIgUAFIgEAAgAC3gSQAMAAAIgDIADAAIAAACQgHAEgGAAQgFAAgFgDg");
	this.shape_584.setTransform(297.8,129.6);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#DD9A87").s().p("AgGAnQAAgHgDgDQAGgVABgZIAAgEIAAgDIAAgKQAIAAACgHIACAAIAAADQgBAIgJgBIAAAHIAAADIAAAEQAAAggGAbIAAgDg");
	this.shape_585.setTransform(291.375,129.575);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#ECD1C8").s().p("AgCAOIAAgEIAAgWIACAAIAEAAIAAADIgEAAIAAATIAAAEIgCAAg");
	this.shape_586.setTransform(295.45,125.35);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#DA8B75").s().p("AgHAMIAAgEQAJgGADgNIABgDIABAAQABAVgPAIIAAgDg");
	this.shape_587.setTransform(304.0008,133.675);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#DB8F7A").s().p("AAHANQgBgJgHgBIgCAAQABgIgFgBIAAgDIAAgEQAMAIADAPIAAAEIgBgBg");
	this.shape_588.setTransform(311.85,123.325);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#E5B7AA").s().p("AgJAHIAAgDQAKgEAGgIIADgBIAAADQgIAJgLAHIAAgDg");
	this.shape_589.setTransform(292.05,118.575);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#E0A796").s().p("AgGAHIAAgEQAJgCACgKIACAAIAAADQgDAMgKAEIAAgDg");
	this.shape_590.setTransform(298.475,118.925);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#DC937E").s().p("AgLAMIAAgEQALgJAKgNIACAAIgBADQgJAPgNALIAAgDg");
	this.shape_591.setTransform(296.625,121.475);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#E2AE9F").s().p("AgJAHIAAgDIAQgNIADAAIgBACIgCACIAAADIgDAAIgEACIAAAEIgBAAQgCAFgGABIAAgDg");
	this.shape_592.setTransform(294.425,124);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#DB9581").s().p("AACACQgBgFgIACIAAgDQAWgDgKALIgDABIAAgDg");
	this.shape_593.setTransform(293.8515,116.37);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#EBCFC6").s().p("AgCAFQAGgHgKAAIAAgDIADAAQAJgCAAAFIABADIgCAAQgDAFgFABIABgCg");
	this.shape_594.setTransform(293.425,116.8483);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#D6775C").s().p("AgMgBIACAAIAUAAIAEAAIAAACIgEAAIgJABQgIAAgFgDg");
	this.shape_595.setTransform(291.4,112.3618);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#EFD7D0").s().p("AALACIgEAAIgUAAIAAgDIAYAAIACAAIAAADIgCAAg");
	this.shape_596.setTransform(291.7,111.975);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#DFA291").s().p("AgGAGIAAgCIALgNIACAAIgBADQgEAKgIAGIAAgEg");
	this.shape_597.setTransform(299.825,116.9);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#F6F2F0").s().p("AAPACIghAAIAAgDIAhAAIAEAAIAAADIgEAAg");
	this.shape_598.setTransform(294.925,111.975);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#D7785F").s().p("AgTgBIAkAAIADAAIAAACIgDAAIgNABQgNAAgKgDg");
	this.shape_599.setTransform(294.775,112.7118);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#EFDBD4").s().p("AgDA9IgYAAIAAgDQAOgBANACIAAACIgDAAgAAagvQgCgJgLgBIgEAAIgaAAIAAgDIAhAAIADAAQALADgCANIgCABIAAgEg");
	this.shape_600.setTransform(298.5981,118.25);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#D98770").s().p("AAMACIgaAAIAAgDIAaAAIADAAIAAADIgDAAg");
	this.shape_601.setTransform(298.325,112.675);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#DA8E7A").s().p("AADAFQgCgHgHgCIAAgDQAKAAACAIIABAEIgBADIgDABIAAgEg");
	this.shape_602.setTransform(300.525,113.35);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#F9F8F7").s().p("AAQACIghAAIAAgDQARAAATABIAAACIgDAAg");
	this.shape_603.setTransform(298.65,111.975);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#E2AFA0").s().p("AkqA1QAAgOgFgHIgBgDQgFgJACgSIAEAAQABAYAFAUIAAADIAAAEgAEjgRIAAgEQANgJADgVIABAAIAAADQgBAYgQAKIAAgDg");
	this.shape_604.setTransform(289.3083,128.9);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#E0A898").s().p("AAGAFQgMAAgDgJIADAAQAGAFAKACIAAACIgEAAg");
	this.shape_605.setTransform(319.15,118.425);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#E1AA9A").s().p("AgIADIAAgDIAGgDIABgDIAGAAIADAAIAAACQgJAEgHAHIAAgEg");
	this.shape_606.setTransform(312.2,119.275);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#EDD4CD").s().p("AgEAEIgHAAIAAgEQAIgBAIgBIADAAIAEAAIgBABIgMABIAAAEIgDAAg");
	this.shape_607.setTransform(313.225,118.25);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#F6F0EE").s().p("AARAEIAAgCIgegCIAAAEIgDAAIgEAAIAAgEQAUgHAUAJIAAACIgDAAg");
	this.shape_608.setTransform(316.1,117.5421);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#E9C8BE").s().p("AgQABQAGAAAEgBIAAgBIAUgDIADAAIgBACQgNAGgTABIAAgEg");
	this.shape_609.setTransform(197.25,139.75);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#DE9E8C").s().p("Al9B1IAAgEQALAAAJgCIADgBIAAACIgXAIIAAgDgAFqh3QAJAFALADIABACIgEAAIgBAAQgNAAgDgKg");
	this.shape_610.setTransform(237.2,127.225);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#E5BAAD").s().p("AgTADQAKAAAJgCIAAgBIAAgCQANACAFgFIACgBQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgOALgYAAIAAgEg");
	this.shape_611.setTransform(195.575,134.5);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#E9C6BC").s().p("ApVAfIgKAAIgDAAIgKAAIAAgEIAXAAIAEAAIAAAEIgEAAgAJnALQAHgVgIgTIAEAAIABAAQAGAdgLAOIABgDg");
	this.shape_612.setTransform(258.7309,122.3);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#DD9C89").s().p("AD7AsIAAgEQAEgFAEgHIACgBIAAADIgBAEQgDAIgGAFIAAgDgAkEgeIAAgDQAJgFAGgHIACgBIAAADQgGALgLAGIAAgEg");
	this.shape_613.setTransform(233.825,136.2);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#E0A695").s().p("AgLAIIAAgDQAMgFAIgKIADgBIgBADQgJAMgNAIIAAgEg");
	this.shape_614.setTransform(206.575,134.675);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#F2E2DC").s().p("AgOAFQALgHAPgFIADAAIgBACQgGADgHABIAAADIgBABQgFAFgJAAIAAgDg");
	this.shape_615.setTransform(199.825,132.975);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#F7F2EF").s().p("AHQAPQAAgPgFgHIAAgEIAEgCIADgBIAAADIAAAXIAAADgAnRgBIAYAAIADAAIAAABQgNACgOAAIAAgDg");
	this.shape_616.setTransform(248.55,125.175);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#EACBC1").s().p("AAKACIgXAAIAAgCIAXAAIADAAIAAACIgDAAg");
	this.shape_617.setTransform(203.35,124.85);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#D57257").s().p("Al8BBIgDAAIgYAAIAAgEIAbAAIADAAIAAAEIgDAAgAFXg5IAAgDIAEAAIAUAAIADAAQAOAAANgCIABgCIAGAAIAEAAIAAACQgWAGgbAAIgQgBg");
	this.shape_618.setTransform(242.8,118.25);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#ECD2C9").s().p("AgIADIANgIIADgBIgBADQgFAHgKADIAAgEg");
	this.shape_619.setTransform(205.55,129.075);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#E7C2B6").s().p("AgGAFIAAgDQAHgCAEgGIACgBIgBADQgEAIgIAFIAAgEg");
	this.shape_620.setTransform(207.075,127.55);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#F5F0ED").s().p("AlJBCIgiAAIAAgDIADAAIAOAAIADAAQAJAAAIABIAAACIgDAAgAFog+IgDAAIgUAAIgEAAIAAgDIAbAAIAEAAIAAADIgEAAg");
	this.shape_621.setTransform(241.1,118.4);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#DB907A").s().p("AAFAHIgFAAIgBgCQgFgDgBgEIAAgEQAIAFAHAFIABADIgEAAg");
	this.shape_622.setTransform(190.65,139.575);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#ECD3CB").s().p("AgHAHIAAgDQAGgFAHgEIACgBIAAAEIgCABQgEAFgGADIgDAAg");
	this.shape_623.setTransform(190.325,136.175);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#E6BBAF").s().p("AABALQgDgGAAgJIACgEIAAgDIADAAIAAAQIAAADIAAAEIgCgBg");
	this.shape_624.setTransform(189.475,138.05);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#D56C4F").s().p("AJmBVQgvgXgbg8IAAgDIAAgUIADAAIAYAAIADAAQAgAiAcAoIABADIAAADQgDAOgKAGIAAAEIAAADIgEgBgAryAnQgCgGgHADIAAgEQgDgKgKgDIgBgEQgLgPgCgcIAAgDIAAgDQAJgLASgCIAAgBQAegDAPAMIADABQAFAPgCAWIAAADIAAAKIAAADIgCAAQgCAKgGAEIAAADIAAAEIgDAAIgEAAIgDAAIgVADIgBAAgALnAMQgHgBgDgCIgBgEIgDgDIAAgDQgCgJgLgBIgBgDIgDgDIAAgEQgEgQgNgIIAAgDIAAgLIADgDIABgDQAGgHAKgFIABgBIAAgEIANgCIAAgBIAEAAIAbAAIADAAIAEAAQADAKANAAIAEAAIAAADQAHAUgHAVIAAADIgCAAQgCAVgNAJIAAADIAAAEIgDAAQgJADgMAAIgDAAg");
	this.shape_625.setTransform(241.469,126.55);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#E9C7BD").s().p("AiCAUIAAgDQAHgEACgJIACgBIAAAEQgBAMgKAFIAAgEgAB/gTIgiAAIAAgEIAEAAIARAAIADAAIAKAAIADAAIAAAEIgDAAg");
	this.shape_626.setTransform(182.2,127.725);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#F2E4E0").s().p("AgCARIAAgKQAEgHgCgQIAAgDIACAAQAEAZgIAOIAAgDg");
	this.shape_627.setTransform(170.5223,126.025);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#F0DED8").s().p("AgYgBIAXAAIADAAIAUAAIADAAIAAACIgDAAIgQABQgQAAgOgDg");
	this.shape_628.setTransform(188.975,125.5618);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#DB9582").s().p("AAKACIgWAAIAAgDIAWAAIAEAAIAAADIgEAAg");
	this.shape_629.setTransform(187.8,125.175);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#E5BBAE").s().p("AgLADIAAgDQAHAAAFgBIAAgCIAIAAIADAAIgBADQgIAEgLAAIgDgBg");
	this.shape_630.setTransform(187.95,120.9523);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#F1E0DB").s().p("AgUAqQgOgLgEgTQAJAEACAMIACABQAAAJAGACIABACIgCAAgAAjgcIgBgCQgGgFgGgGQAOgBADALIAAADIgEAAg");
	this.shape_631.setTransform(166.3,125.5239);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#DD9C8A").s().p("AAAARQACgWgFgOIADAAQAFABgCAJIAAADIAAAEQACAPgFAHIAAgDg");
	this.shape_632.setTransform(170.2267,124.675);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#EBCEC5").s().p("AjbAxQAHgCACAFIABABQACAFAIgCIAEAAIAAACIgKABQgLAAgDgKgADIgzIgEAAIAAgEQAMAAAJgDIADAAIAAACQgHAEgKABIgDAAg");
	this.shape_633.setTransform(187.1,125.1676);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#DA8D78").s().p("AhfBTIAAgEQAKAAAJgBIABgCIAEAAIgCADQgFAEgJAAIgIAAgABChLQAKgBAHgEIAAgCIAKAAIADAAIAAADIgDABQgLAFgQABIAAgDg");
	this.shape_634.setTransform(200.8,127.5847);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#D6765C").s().p("AgVgBIAOAAIADAAIAXAAIADAAIAAABQgLACgJAAQgNAAgKgDg");
	this.shape_635.setTransform(202.5,120.4592);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#F5ECE9").s().p("AAMACIgQAAIgEAAIgGAAIAAgDIAaAAIADAAIAAADIgDAAg");
	this.shape_636.setTransform(205.225,119.775);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#DFA898").s().p("AAKACIgXAAIAAgDIANAAIADAAIAHAAIADAAIAAADIgDAAg");
	this.shape_637.setTransform(203.35,120.125);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#DD9E8C").s().p("AgrAbIgKAAIgDAAIgLAAIAAgDIAYAAIADAAIAAADIgDAAgABAgWIgYAAIAAgEIARAAIAEAAIADAAIADAAIAAAEIgDAAg");
	this.shape_638.setTransform(200.65,122.65);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#DB917C").s().p("AgSAAQAPgDASABIADAAIAAACIgDABIghADIAAgEg");
	this.shape_639.setTransform(205.9,114.8472);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#DC9986").s().p("AgLADIAAgDQALAAAIgCIAEAAIgBACQgIADgMAAIgCAAg");
	this.shape_640.setTransform(208.95,114.5273);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#E2B3A5").s().p("AAKACIgWAAIAAgDIAWAAIAEAAIAAADIgEAAg");
	this.shape_641.setTransform(197.6,120.125);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#DE9F8E").s().p("AAMACIgNAAIgDAAIgKAAIAAgDIADAAIAEAAIATAAIADAAIAAADIgDAAg");
	this.shape_642.setTransform(200.475,120.125);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#F1DDD7").s().p("AARACIgOAAIgDAAIgTAAIAAgDIAkAAIADAAIAAADIgDAAg");
	this.shape_643.setTransform(201.675,119.775);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#EED4CD").s().p("AAKACIgWAAIAAgDIAWAAIAEAAIAAADIgEAAg");
	this.shape_644.setTransform(194.9,120.125);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#DC9885").s().p("AgMAAIAWAAIAEAAIAAAAQgOABgMAAIAAgBg");
	this.shape_645.setTransform(194.9,120.45);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#DFA493").s().p("AnSB6IAAgDIARgHIADAAIgBACIgTALIAAgDgAgoB3IgDAAIgKAAIgEAAIgGAAIAAgEIAXAAIAEAAIAAAEIgEAAgAmjAKIADgDIABgEIgBgBQgIgCgIAAIAAgCIANgCIAAgCQATAGgQANIgDABIAAgEgAHQh5IglAAIAAgDIADAAIAiAAIADAAIAAADIgDAAg");
	this.shape_646.setTransform(250.075,124.675);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#F4ECE9").s().p("ABGAKIAAgXQAGAJgFARIgBAAIAAgDgAhIgNIAEAAIAbAAIADAAIARAAIAEAAIgBACQgNACgMAAQgQAAgNgEg");
	this.shape_647.setTransform(253.2964,137.9);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#E3B6A8").s().p("AAMACIgaAAIAAgDIADAAIAXAAIADAAIAAADIgDAAg");
	this.shape_648.setTransform(247.875,136.375);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#DEA493").s().p("AAMACIgHAAIgDAAIgQAAIAAgDIAaAAIADAAIAAADIgDAAg");
	this.shape_649.setTransform(250.925,136.375);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#F3E7E2").s().p("AkiBFIAbAAIADAAIAAAEIgDAAIgKAAQgLAAgGgEgAEShBIAAgEIAOgDIADAAIgBACIgGABIAAAEIAAACQgFABgFAAIAAgDg");
	this.shape_650.setTransform(257.525,129.2868);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#E7C0B4").s().p("AgXABIAAgDIAHAAIADAAIAXAAIAEAAQgBAFAHgCIAEAAIAAACQgWgDgZABg");
	this.shape_651.setTransform(233.825,136.45);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#E4B9AC").s().p("AgNgBIAEAAIATAAIADAAIAAACIgDAAIgIABQgJAAgGgDg");
	this.shape_652.setTransform(240.6,136.7517);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#DC9B88").s().p("AgVgBIAoAAIADAAIAAACIgDAAIgEAAIgaAAIgDAAIgEABQgDAAAAgDg");
	this.shape_653.setTransform(237.3983,136.4017);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#D98771").s().p("AARACIgOAAIgDAAIgTAAIAAgDIAkAAIADAAIAAADIgDAAg");
	this.shape_654.setTransform(241.625,136.375);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#D8836B").s().p("AhqAuIgXAAIAAgEQAOAAANACIAAACIgEAAgACBgZQgGgJgCgLIADAAIADAAQgDANAGAFIABADQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_655.setTransform(245.5,131.625);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#E8C5BA").s().p("Ag3AvQgGgBADgHQAJACAAgJIABAAIAAAEQAAAKgHADgAoKAaIAAgEIAAgRIAEgDIADgBIgBAEIgCAEIAAANIAAAEIgEAAgAHigsIAEAAQAQgDARgBIAEAAIAAACQgKACgKAAIAAACIgEABIgGABQgHAAgEgEg");
	this.shape_656.setTransform(236.7,121.8);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#E5BCAF").s().p("AAKACIgXAAIAAgDIAXAAIADAAIAAADIgDAAg");
	this.shape_657.setTransform(239.6,129.575);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#D98670").s().p("AD1BAQABgHgGABIAAgEIAAglIAEAAQgCAZAFATIAAADgAj2g/IADAAQAAAKAOgDIADgBIAAAEIgDAAIgIABQgKAAABgLg");
	this.shape_658.setTransform(260.9194,135.175);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#F0DED7").s().p("AmGAIIADAAQAPAGAXgCIADAAIAAADIgDAAIgYAAIgDAAIgHABQgHAAAAgIgAF6gPQAHgCABAGIACAAIACAEIABADIgDAAIgCAAQgJAAABgLg");
	this.shape_659.setTransform(275.6491,127.9171);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#E4B5A7").s().p("Ai9BQIAAgEQAJgJADgOIACAAIAAADQgCASgMAJIAAgDgACtg3QgEgEAAgGIAPgQIACgBIAEAAIgBACQgDABgDAAIAAAEIgCAAQABAJgGABIAAAHIAAADIgDAAg");
	this.shape_660.setTransform(255.825,120.45);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#D67459").s().p("AgOgBIAWAAIAEAAIADAAIAAABIgOACQgJAAgGgDg");
	this.shape_661.setTransform(249.575,130.28);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#D9856E").s().p("AAvAZIAAgCQgKgLAAgUQAJAMAEASIABADIgEAAgAgagVIgYAAIAAgEQAOAAANACIAAACIgDAAg");
	this.shape_662.setTransform(251.775,138.4);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#DC9683").s().p("AA4CdIAAgDIAAgHIAAgDIAAgKIAAgEIAAgKIADAAIAAAiIAAADIgDAAgAloBWIgXAAIAAgDQANAAANACIABABIgEAAgAF9gfIgbAAIAAgEIAeACIAAACIgDAAgABoiJQgJgQgaAAIAAgDIAOAAIADAAQALABAEAIIACABIADAHIABADIgDgBg");
	this.shape_663.setTransform(279.375,121.125);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#F0DCD6").s().p("ABkBbIgOAAIAAgBQgNgCgOAAIAAgDQAYgBARAEIADAAIAAADIgDAAgAm8AAIgNAAIgEAAIgHAAIAAgCIAYAAIAEAAIAAACIgEAAgAG9hUIgUAAIAAgDQAUgDAUAAIAEAAIAAADIgEAAIgRAAIAAADIgDAAg");
	this.shape_664.setTransform(235,120.625);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#F5EDEA").s().p("AgXBBIgXAAIAAgDQANAAAOABIAAACIgEAAgAAsg1IgBgCIgCgBIgBgCQgLgBgMAAIAAgEQAXgEAHAMIAAACIgDAAg");
	this.shape_665.setTransform(250.075,122.9234);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#DB927E").s().p("AicA5QAbABAUgHIAEAAIgBABQgEACgGAAIAAADIgDABQgJADgJAAQgKAAgJgEgAGwgrIgYAAIgCgBIgBgDIADAAQAOAAANACIAAACIgDAAgAmngsIgEgDIgBgCQgGgCAAgJQAKADADAKIABAEIgDgBg");
	this.shape_666.setTransform(207.2482,134.5439);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#E6BDB2").s().p("AAKACIgEAAIgTAAIAAgDIAXAAIADAAIAAADIgDAAg");
	this.shape_667.setTransform(246.7,129.575);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#F0DDD7").s().p("AAdA1IAAgCQgOgCgNAAIAAgDQATAEAEgLIAAgDQAFAFACAIIAAAEIgDAAgAp6gEIAEAAQABAIAMgCIAEAAIAAADIgEAAIgFABQgMAAAAgKgAJ2gVQgCgMAAgLQAFgBAAgGIACAAIAAADIgBADIgDADIAAALIAAADIAAAEIAAADg");
	this.shape_668.setTransform(247.875,124.85);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#D98872").s().p("AADAPQABgJgFgBIgBAAQgCgJAAgKQAIAJABARIAAADg");
	this.shape_669.setTransform(249.575,124.525);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#E4B6A9").s().p("AAEAQQgFgOgDgOIAAgEQAFABgBAKIACAAQADAGAAANIAAADIgBgBg");
	this.shape_670.setTransform(249.9,126.7);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#DE9D8B").s().p("AgHAKIAAgDQAHgIAGgLIACgBIAAAEQgFANgKAKIAAgEg");
	this.shape_671.setTransform(210.975,129.425);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#DFA492").s().p("AiWAKIAAgDQAKgBAHgCIADgBIAAADQgLADgJAFIAAgEgACTgGIgbAAIAAgCQgNABgEgFIAEAAIAsAEIAAACIgEAAg");
	this.shape_672.setTransform(216.4,136.85);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#F1DFD9").s().p("AELB/IAOAAIADAAIAHAAIADAAIAAACQgNABgOAAIAAgDgABpB1IAHAAIADAAQAEAGANgBIAAACIgDAAIgGAAQgNAAgFgHgAiGAPIgYAAIAAgDIAYAAIADAAIAAADIgDAAgAklh6QALgFANgCIADAAIgBACQgNAFgNADIAAgDg");
	this.shape_673.setTransform(215.2,123.825);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#EDD3CC").s().p("AgMgBIAWAAIAEAAIgBABQgNACgMAAIAAgDg");
	this.shape_674.setTransform(227.75,130.625);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#DC9783").s().p("AB1AgIAAgDIADAAQAOAAANgCIAAgCIAEAAIgBACQgJAFgOAAIgKAAgAh+gcIgYAAIAAgDIAYAAIADAAIAAADIgDAAg");
	this.shape_675.setTransform(214.375,127.9329);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#D77D64").s().p("ABrA6IgDAAIgHAAIAAgCQgMAAgCgIIAAgEIAAgGQAGAPAVADIAAACIgDAAgAhggxIgNAAIAAgEQAKgFARACIADAAIAAACIgNABIAAAEIgEAAg");
	this.shape_676.setTransform(216.05,129.7233);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#F4E9E5").s().p("ACOAhQAFAAAAAHIACAAQACAJAMAAIAAABIgEABIgCAAQgQAAABgSgAihAvIAAgDIAAgEIAUAAIADAAIAAACQgKACgKAAIAAADIgDAAgAiNgyIAKAAIADAAIALAAIADAAIAAACQgOABgNAAIAAgDg");
	this.shape_677.setTransform(209.45,130.4526);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#E6BEB1").s().p("AADAKQAAgHgEAAIgBgDIgCgGIAEgCIACgBQgBAFACAEIACAAIAAAHIAAADg");
	this.shape_678.setTransform(223.85,133.475);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#EED6CE").s().p("AgJACIAQgFIADgBIAAADIgDABQgGAEgKABIAAgDg");
	this.shape_679.setTransform(225.025,131.3);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#E2B0A1").s().p("ABFAdIAAgEIADgDIABgDQAFAAAAgHIABAAIAAADQAAANgKAEIAAgDgAk8gBIgDAAIgUAAIAAgDQANAAAOACIAAABIgEAAgAFSgIIgFgXQAJAFgCAPIAAAEIgCgBg");
	this.shape_680.setTransform(223.1863,125.525);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#F3E6E2").s().p("AgEAIIAAgGQAEgFADgHIACgBIgBADIgCAEIAAADIAAADIgBADIgFAHIAAgEg");
	this.shape_681.setTransform(229.95,128.575);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#DC9581").s().p("AgCALQACgLgDgMQAGADABAJIAAAEIgCAAQAAAIgFACIABgDg");
	this.shape_682.setTransform(214.2,120.95);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#D8846C").s().p("AgCAJIAAgNQAEAAAAgHIABAAIAAAEQgBALgEAIIAAgDg");
	this.shape_683.setTransform(213.5125,123.5);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#D56C4E").s().p("AGvC6IAAgDQgDgEAAgGIgBgDQgEgTABgaIAAgDIAAgiIACAAQARgtgkAIIAAADIAAAEIgDAAIgKAAIAAADIgEAAIgXAAIAAAEIAAADIgEAAIgUADIAAAEIgDgBQgOgEgHgMIAAgEIAAgeIAGgEIABgDIADAAIAEAAQANAAAOgCIAAgBQAPgCAMgGIAAgCIAegLIAAgCIAAgDIAEAAQAFAAAFgCIAAgCQAQgCALgJIAAgCIARgMIAAgCIAAgDIADAAIAEAAQAMgHAIgLIAAgDQAGgBADgFIACAAIACgBQAKgMgXADIAAADIgDAAIAAADIgDAAIgjAAIgDAAQgTAAgPAEIgDAAIgpAAIAAgCQgPgCgPAAIgEAAIgUgDIgBgCQgLgDgIgFIAAgEIAAgDIAAgHQAGgBgBgJIACAAQARADAKgGIADAAQAkACAcgHIAAgCIAHAAIADAAIAEAAIACAAQAEgSgGgJIgEAAIAAgEIAAgGQAGAAgBgHIgBgDQAKgCADgJIAAgDQAaAAAJAQIADABQADADACAHIABAAIAAADQAAAPgGAJIAAAHIAAADQAHAGARgCIADAAQAOAGAXgDIAEAAIAbAAIADAAQAHADACAHIABAEIAAADQACAJgFABIAAAEIgCAAIgMANIAAADIAAAEIgCAAQgCALgJACIAAAEIAAADIgCABQgKANgMAKIAAADIAAAEIgDAAIgSAMIAAAEIAAADIgBAAQgCAFgGgCIgCABQgDAHgJgBIAAAKIAAAEIAAADQAAAbgHAUQADAEAAAHIAAADIgDAAIAAARIAAADIgCAAQAAAngSATIAAADIAAAEIgDAAQgHAEgLACIgDAAgAoACfIgBgCQgHgHgJgEIAAgEIAAgRQAHgCAEgHIACgBQAQADAHgHIABgCQAZAAAOgMQABAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIADAAIADAAQAKAAAFgGIACgBQAXgIARgNIABgCIAAgEIAGgEIAAgDQALgDAFgHIABgDQAJgFAFgJIAAgDIAAgEIACAAIABgDIADgBQARgOgUgEIgDAAQgRgCgKAEIgEAAIgbAAIAAAEIgDAAIgYAAIAAADIgDAAIgYAAIgDAAIgYAAIAAADIgDAAIgRAAIAAgBQgNgCgOAAIgDAAIgYAAIgDAAQgMACgCgJIAAgCIAAgOIADgDIABgEQAHgCAGgEIADAAQAOAAAJgFIABgCIAOAAIADAAIAYAAIADAAQAOAAANgCIAAgBIAYAAIADAAIAKAAIAEAAQASAFAZgEIAAgBIAYAAIADAAQARgCALgFIADAAIAYAAIAEAAIACAAIAEAAQADAMgCAMIgBADIgCAAQAAAHgEAAIAAAMIAAAEIgCAAQgGANgHAKIAAAHIAAADIgCABQgFALgJAJIAAADIAAAEIgBACIgGAEIgCABQgGAIgJAFIAAADIAAAEIgCAAQgJAKgNAHIAAADIAAADIgDABIgRAGIAAADIAAAEIgDAAQgHADgKAAIAAAEIAAADIgEABQgIACgMAAIAAAEIAAADIgDAAIgVAEIgDAAQgTAGgZAAIgDAAg");
	this.shape_684.setTransform(242.85,124.325);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#D77D63").s().p("AAKACIgXAAIAAgDIAXAAIAEAAIAAADIgEAAg");
	this.shape_685.setTransform(211.825,119.425);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#EFD9D2").s().p("AAFAHQAAgJgGgEIgDAAIgDAAIAAgDQATgCgFAVIgCAAIAAgDg");
	this.shape_686.setTransform(214.0082,120.2667);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#F2E3DD").s().p("AAKACIgXAAIAAgCQANAAANAAIABACIgEAAg");
	this.shape_687.setTransform(211.825,119.1);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#DB917B").s().p("AgJACIAAgDQAJAAAHgDIADAAIAAACIgTAHIAAgDg");
	this.shape_688.setTransform(212.5,113.675);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#F6EFEC").s().p("AoACTIAHAAIADAAQATAJATgIIADgBIgBACQgNAFgLAAQgOAAgMgHgABKgBQgGgOgCgQIADAAIADAEIABADQAAAKACAKIABAAIAAADIgCAAgAH+iIIgYAAIAAgDQAGgDgBgLIACAAQgDATAXgEIAAACIgDAAg");
	this.shape_689.setTransform(241.775,125.5395);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#F2E4DF").s().p("AAAAUQgBgUAAgTIADAAIAAAkIAAADg");
	this.shape_690.setTransform(248.225,120.275);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#E3B4A6").s().p("AjdAdIAAgEIAAgkIAAgDIAHAAIADAAIAAACQgDABgEAAIAAAkIAAAEIgDAAgAC4gcIAiAAIAEAAIgBACQgSACgTAAIAAgEg");
	this.shape_691.setTransform(270.575,119.425);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#DE9F8D").s().p("AigBCIAAgHQAHgKAFgNIACAAIgBADQgDASgKAMIAAgDgACQgmIAAgHQAJgJAGgOIACAAIAAADQgHARgKANIAAgDg");
	this.shape_692.setTransform(227.9,121.125);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#E2AB9B").s().p("AgGAHQAHgGAEgKIACAAIAAADQgCANgLADIAAgDg");
	this.shape_693.setTransform(244.675,113.175);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#E8C4BA").s().p("AAOACIgeAAIAAgDIAHAAIADAAQALAAALABIABACIgDAAg");
	this.shape_694.setTransform(252.45,117.075);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#E3B0A1").s().p("AgGAKQAGgKAFgMIACAAIgBADQgBAPgLAIIAAgEg");
	this.shape_695.setTransform(238.925,124.35);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#DFA190").s().p("AgEAHIAAgEQAGgDABgJIACAAIAAADQgBAMgIAEIAAgDg");
	this.shape_696.setTransform(240.1,121.975);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#E6BDB1").s().p("AgGAIIAAgDIADgBIABgCQAFgDACgKIACAAIAAADQgCAPgLAFIAAgEg");
	this.shape_697.setTransform(241.275,119.775);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#DA8A73").s().p("AgGAJIAAgHIAKgMIADgBIgBAEIgDADIAAAEIgBAAQgCAIgGAEIAAgDg");
	this.shape_698.setTransform(241.625,118.75);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#E7C2B7").s().p("AgGAQIAAgLQAGAAgCgFIAAgEQAFgDACgKIACAAIgBACQgFATgHAPIAAgDg");
	this.shape_699.setTransform(232.475,123.15);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#F8F5F3").s().p("AEDBiQgCgSAAgTQAGAAgBgHIACAAIAAAHIAAADIgEAAIAAAfIAAADgAkHhQIAAgHQAFgDADgGIACgBIAAADIAAAEIgCAAQgBAKgHADIAAgDg");
	this.shape_700.setTransform(258.55,130.425);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#E6BEB2").s().p("ADLAPIAAgDIAAgDQAIgMAHgOQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAAAEQgHASgKAPIAAgEgAjDAMIgYAAIAAgDIAYAAIADAAIAAADIgDAAg");
	this.shape_701.setTransform(212.85,119.425);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#E6BDB0").s().p("AC+BTIgBgCQgFgDACgJQAGANAPAEIADAAIADAAIAAAEIgDAAIgCAAQgNAAgFgHgAjUg+IAAgDQAJgKAGgNIACgBIgBADQgEASgMAKIAAgEg");
	this.shape_702.setTransform(256.175,123.1766);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#ECCFC6").s().p("AgIANIAAgHQAIgJAGgMIACgBIgBADQgGAQgJAOIAAgEg");
	this.shape_703.setTransform(237.4,112.5);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#F6F0ED").s().p("ACpB2QAGAIAOgBIAEAAIAAACQgHACgEAAQgLAAgCgLgAjAhvIAAgHQAEgGAGgDIADgBIAAAEIgCAAQgEAJgHAHIAAgDg");
	this.shape_704.setTransform(258.2,119.6233);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#E6BEB3").s().p("AgHAMIAAgHIACgBIABgDQAGgGAEgIIACgBIAAADQgGAPgJALIAAgDg");
	this.shape_705.setTransform(239.4,108.6);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#E3B1A2").s().p("AjpB1QAHgCAGgDIABgCQAKgIAOgFIADAAIgBACQgRANgXAIIAAgDgADghjQAGgHACgNIACAAIAAADQABARgLAEIAAgEg");
	this.shape_706.setTransform(223.3337,121.125);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#D56B4E").s().p("ACVCtIgBgDQgDgSgJgNIAAgDQgBgOgQAEIgEAAIgKAAIgEAAIgbAAIAAgCQgNgCgOAAIAAAEIgDAAIgEAAIgXAAIgEAAIgkAAIgDAAIgpAAIAAgCQgNgCgOAAIAAAEIgDAAIgHAAIAAgCIgsgFIAAgCQgVgDgGgPIgCgBQgCgFABgFIAAgDIAAgDQALgBAGgFIADgBQAVACAMgHIABgCIAAgDIAAgEIAGgHIABgDQAJgEABgNIAAgDQAGgEABgKIAAgDQAIgOAEgTIABgDQAKgPAHgTIAAgEIAAgDQAMgKAFgRIAAgDQAKgOAGgRIABgDIAAgEIADAAIAAgDQAKgLAHgQIAAgDQAVgWAkAOIADABQAEAJgBAOIAAAEIgBAAQgCANgHAHIAAAEIAAACIgDABIAAADIgCABQgDALgJAFIAAAEIgBAAQgHAOgJAJIAAAHIAAADIgCABIgKANIAAAHIAAADIgBADIgDABIAAADIAAADIgCABQgBAJgHAEIAAADIAAAEIgCAAQgEAMgHAKIAAAEIgCAAQgEAPgIAIIAAAEIAAADIgDAAIgEAAQgBAPASgEIAEgBIAXAAIAEAAIAWAAIAEAAIANAAIAEAAIAUAAIADAAIABADIADABQALAGATgEIABgCIgBgEQgBgIgGgFIAAgEQAAgMgCgIIgBgDQgBgSgJgIIAAgDIgEgEIAAgEIAAglQAEAAADgBIAAgCQAFgEAJgBIAAgCIAfAAIADAAIADABIABACIAFAOIABADQACARAJAKIADAAIAAAEIAFAWIACABQADAIAAAMIAAADQACALAGAJQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAQgDARAGAKIABADQgEAVAKAFIAEABIAAAOIAAADIAAAUIAAAEIgCAAQgEAIgEAFIAAAEIAAADIgDABQgDAFgFAAQgEAAgGgGg");
	this.shape_707.setTransform(241.95,123.6309);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#E0AA9A").s().p("AAAAKQAAgNgDgKIADADIADABIAAADQADAOgGAFIAAgDg");
	this.shape_708.setTransform(246.7368,107.75);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#F5ECE8").s().p("AF5BFIAAgDIAAgCQgKgCgHgGQASgDADANIAAADIgEAAgAljg4IgFgCIAAgCQgLgDgJgFQAVgDAGANIABADIgDgBg");
	this.shape_709.setTransform(282.4,112.3048);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#E0A999").s().p("AgeAFIAAgDQAMgMAZACIADABQAJAFALACIAAACIgCgBQgjgNgXAVIAAgEg");
	this.shape_710.setTransform(243.3,106.2112);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#FDFCFD").s().p("AjciMIAAgEQAIhuAbhcIACgBQBghRCWAlIADAAQCJDKARE4QAGBygLBqQgsgBgoAEIgEAAQgIi3g3iHIgBgEQhFgYg0AlIgDABQg0C0BLCVIABADQgeAOgbARIgBADQiLjFAOlbgAiZlYIAAAEQgsBggKCDQgCCZAZCCQAYB+BSBGQANgegLgfQgahTgDhgQgCiHCSAEIADABQAPAIAQAHQAeA1AFBGQALCDBFBAQAmhLgKiAQgZk9iUi+IgEAAQgcgEgZAAQhUAAg3Apg");
	this.shape_711.setTransform(156.4108,58.9331);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#A7AFC8").s().p("AAAANQgBgNAAgNIADAAIAAAXIAAADIgCAAg");
	this.shape_712.setTransform(187.275,59.35);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#D9866F").s().p("AAAAPQgBgPAAgOQAFAJgDARIAAADIgBAAg");
	this.shape_713.setTransform(194.7618,66.275);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#7D88AF").s().p("AAAAOQgBgOAAgNIADAAIAAAYIAAADg");
	this.shape_714.setTransform(206.925,48.15);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#949EBD").s().p("AAAARQgBgRAAgQIADAAIAAAdIAAAEIgCAAg");
	this.shape_715.setTransform(269.875,59.35);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#AAB1C9").s().p("AgBAMIAAgaQAFALgEASIgBAAIAAgDg");
	this.shape_716.setTransform(265.48,34.475);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#838EB2").s().p("AAAAWQgBgWAAgVIADAAIAAAoIAAADg");
	this.shape_717.setTransform(377.2,96.75);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#848FB3").s().p("AAAAWQgBgWAAgVQAFAQgDAYIAAADIgBAAg");
	this.shape_718.setTransform(341.0118,88.65);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#DDDFE7").s().p("AAAAUIgBgnQAFAOgDAWIAAADg");
	this.shape_719.setTransform(344.0618,76.625);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#B1B8CE").s().p("ARgBJIAAgDIAAgmQAGAQgEAZIgCAAgAxjgwIAAgYIADAAIAAAEQADAQgGAHIAAgDg");
	this.shape_720.setTransform(231.805,61.525);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#808CB0").s().p("AAAANQgBgNAAgMQAEAHgCAPIAAAEIgBgBg");
	this.shape_721.setTransform(355.2517,53.6);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#D56B4D").s().p("AqXG2QAGgHALgCIAAgCQAOgDANgFIAAgCQCSgeCLANIADAAQgCAjggAGIgDAAIgDAAQgIADgJAAIAAAEIAAADIgEAAIgKAAIgDABQgJADgMAAIgDgBQgTAAgPAEIAAADQgrAIguAMQgYAGgTAAQg3AAgNgxgA58ECQhTj6hAkSQB7hsDHAyQA/AQALBJQAYCghYBaIgHADIAAADIgHAHIAHAHIALAMIADABIAAADQCWB3CGCIIAAADQgHAmgvgBIgDgBQiTiTiiiFIgDAAQgcgBgNAPIgBAAQAUCxA4CQIgBAEQgDAJgKAEQhZgrgmh0gA6SklIAAACQgyAWgYAvIAAAEQAkBkAgBqIADABIA9APQBUgOAXhKQBCjRjNAAIgaAAgAW+F7IgBgCQhJgCgqgfIgDgBQgOgbgDgmIAAgDQArkmCHjNQANgUAMgWQCRAUB7A6IADAAQgJAggcAOIAAACQg2gBgigVIgBgCQgvABgkANIgBAAIgCABQhXAjgJBwIAAADQBgARA7AqIAAACQgCAQgSACIAAACQhKgUhLAGIgDABQg5A8gHBtIgBADQBvANBOAuQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQACA1ghAiIgDABQgOACgNAAQgoAAglgNgAxkBEQgZiBACiaQAKiCAshhIAAgDQBHg1B6AQIAEAAQCUC+AZE8QAKCAgmBMQhFhAgLiEQgFhEgeg2QgQgHgPgJIgDAAQiTgEACCHQADBfAaBTQALAggNAeQhShGgYh/gAwOmHIgBADQgSAYgTAYIAAADQgPAsgIAzIgBADQgGA8AbAZIADAAQBfgJBsgLIABgDIAbgVIgBgDQgWiGhWhFIgDgBIgNAAQgpAAgbAOgAQkDqQhHhcgHiaQgFhigQhEQgIgKgPAIIAAACQhqCcgVDvIgCABQgkgqAMhbIAAgDQArj/BNjgIACgBQBFgVAiAwIACAAQAMDbAbDIIACAAQBrguAohzIACAAQAVhqAwhQIACAAQAdAigRA/QglCFguBwQgrBqhEBNQgIAJgRAAIgGgBgAoqgIIAAgEIAAgDQACgSgGgJIAAgEQgIhbAChmQAMh1AfhjIABgEQBJgxBZAtIADABQAjCgA+CXQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAZgLAQgTIADgBICXj4IABgCQAMgHAPgFIAAgCIBXADIADAAQAyB6gpCmQgsCyhHCbQgDAFgFADQgegEgVgMIgDgBQA+jeAejqQABgKgIgDQgSgMgXAOIgDABQhICGhpBmIgDABQh5hchCiUIgCAAQhVCkA3DbQAUBOgiAxQhGhEgBiXgADchMIAAicQADhqAehQIABgDQAigIAhAJIABACQgRB6gSCWQgUCiB+AqQDFgsAOjiQAFhPAYg7QAlgFAaAXIABACQgWEZiwCxQgkAkg1AUQi+gkAAjgg");
	this.shape_722.setTransform(250.425,69.0521);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#4F6093").s().p("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");
	this.shape_723.setTransform(284.1,65.4856);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FDFDFD").s().p("AOqF9IgDgBIAAhRIAAgEQApkoCOjFQAQgWAOgZQCZAkCUArIAAACQgIAsgbArIgCABQhZgYhogKIgCAAQAjgNAwgBIABADQAhAVA3AAIAAgCQAcgNAIggIgCgBQh7g5iRgUQgNAWgNAUQiGDLgsEoIAAADQAEAmANAaIAEABQAqAgBJABIABACQAxASA3gGIACgBQAigigCg1QAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQhOguhvgNIABgEQAHhsA4g9IAEAAQBLgGBKAUIAAgCQARgDADgQIgBgCQg6gphggSIAAgDQAJhvBXgjQhCAtgDBbIAAADQBAAdBUAKIAAACQgCArgWApIgDAAQhCgVhWgTIgEAAQg9A3AVBaIAAAEQBfAVBpAfIAAACQgVBHggA6IgBADIgdAAQiZAAhghGgAK9EuIhLgUQgnhPAEh1QAEh+ghhUIgCABQhXCqgJD4IgDAAQgmgFgogCIAAgDIAAhsQAdk1BjjvIABgDQBIAKA7gKIAEAAQAQBqABCKIAAADQAAAOACANIABAAIAAAEQgFBhAZBDIADAAQCMiEAijvIAAACQAmAOArAIIgdBxQhCETiRDBIgEAAgAJDiJQAQBEAEBhQAICbBGBcQAXACAJgLQBEhMArhrQAuhvAkiGQARg/gcgiIgDABQgvBQgVBpIgCABQgoByhsAvIgBAAQgbjJgMjaIgDgBQghgvhFAVIgCAAQhNDggrEAIAAADQgNBaAlAqIABAAQAWjxBpiaIABgCQAGgEAGAAQAGAAAFAGgAvKhnIAAgEQAHi5AmicIACgBQBwgCBeABIAAABQAhCdApCUIABAEQATgIANgPIACgBQBGiMBTh/IACgBQBUAJBWgIIADgBQAaE0hsD9QgYA6gaA5QhAgBg2AIIgEAAQBdjeALkMIgCAAQhNCBhVB2IAAADIhHAKIgEAAQhWhrg6iKIgCgBQhAD0BKDzIAAADQgsAGglAOIgDAAQhOidgDjngAuHmiIAAADQgfBkgNB1QgCBlAJBcIAAADQAAAPABAPIADAAIAAADQABCZBFBDQAjgxgUhNQg4jcBVikIADABQBCCTB5BcIADAAQBohmBIiHIAEAAQAXgPARAMQAJAEgCAJQgdDrg+DeIADAAQAVANAeAEQAFgEADgFQBHiaAtizQApimgyh5IgDAAIhYgEIgBACQgPAFgMAHIAAADIiXD4IgDAAQgQATgZALQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQg9iXgjifIgDgBQgrgWgnAAQgqAAgnAagAi5gkIAAgDIAAgDIAAgfIAAgDIAAhVQALiBAdhvIABgEIB5ARIAEAAQhWCqAtDUQAJApAkAUQAiAGAqABIAEAAQCphugOkXIAAgDQA8AJA6ANIABACQghEmidC5Qg1A+hgAUQi2g3gDjsgAiAl9IAAADQgeBQgDBrIAACbQAADgC9AkQA0gTAlglQCwiwAWkZIgBgDQgbgWgkAEQgYA7gGBQQgODhjEAtQh9gqATijQASiVASh6IgBgCQgSgFgTAAQgPAAgQADgA2oirQANhhBFgpIADgBQBIAaAGBdIAAADQhtgBg1Abg");
	this.shape_724.setTransform(288.65,65.0242);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473}]}).wait(43));

	// wit
	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("rgba(253,253,253,0.498)").s().p("A3/MkIAA5HMAv/AAAIAAZHg");
	this.shape_725.setTransform(326.125,647.125);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("rgba(253,253,253,0.498)").s().p("EgjbAMdIAA2aIZXAAIAAWagAMkLyIAA4OIW4AAIAAYOg");
	this.shape_726.setTransform(237,639.15);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("rgba(253,253,253,0.498)").s().p("A3iMAIAA3/MAvFAAAIAAX/g");
	this.shape_727.setTransform(169.625,646.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_725}]}).to({state:[{t:this.shape_726}]},14).to({state:[{t:this.shape_727}]},11).wait(18));

	// B
	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FBFCFC").s().p("AADAYQgSgMgFgXIAGgHIABgDQAQgGANAFIADABIAAADQAHAbgUAQIgDgBg");
	this.shape_728.setTransform(280.6141,681.5185);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#82B6C4").s().p("AgOAlIAAgDQgMgYgIgaQAigIAdgMIADAAIgBACQgGAGgDAJQgEAfAQAMIABADIgDABQgOAJgXAAIgJAAg");
	this.shape_729.setTransform(202.95,693.1154);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#84B9C6").s().p("AgDAEIgGAAIAAgDQAfgKgTAMIgDABIgDAAg");
	this.shape_730.setTransform(211.2039,687.6404);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#FAFBFB").s().p("AgMgDQAugLglAVIgDABQgFAAgBgLg");
	this.shape_731.setTransform(208.4918,674.3964);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#7DAEBF").s().p("AgfAZQgZgNgMgaQAfACAQgLIADgBQAcAbA4ACIADAAIAAACQgoAKg5AIIgDAAg");
	this.shape_732.setTransform(208.35,698.325);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#CBCFDD").s().p("AgfgBIA8AAIADAAIAAABIg/ACIAAgDg");
	this.shape_733.setTransform(237.625,706.4);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#7FB2C1").s().p("AhyApIgEgDIAAgEQAVgCATgEIADAAQAFgIAQgFIADgBIgBADQgUAWgnACIgDAAgAgsAHIAAgDQAbgJAdgGIAEgBIAAgDQAKgKAGAEIAAADIgCAAQgCAIgMgCIgBACQgdALgeAKIAAgEgAAggMQAVgJAagEIAEAAIgBACQgfAMgPAAIgEgBgABnggIAAgDQAVgKgHAHIAAADIgCAAQgCAEgFAAIgFgBg");
	this.shape_734.setTransform(236.5625,689.3015);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#7FB1C1").s().p("AgCAKQABgDgLgBQAWgfACAZIABAAIgBACQgFAIgKACIABgCg");
	this.shape_735.setTransform(253.275,681.4391);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#7FB2C2").s().p("AgEAFIAAgDQAEgCADgHIACAAIAAADQgBAKgIACIAAgDg");
	this.shape_736.setTransform(255.8,679.125);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#81B5C4").s().p("AhtBqQgPgIgQgIIgEAAIgbAAIAAgBQgdgLgYgPIAAgCIAAgEQAegHAbgJIADgBQAWAcAPgZIAAgDQAcgMAggKIABgBQAyAeA/gNIAEAAQBkg3BIhVIACgBIAAADIgDAEIAAAHIAAADIgBADQgJAUgDAYIAAAEIgCAAQgDAHgFADIAAADIAAADIgCAAQABAIgGgBIAAAEIAAACIgCAAQgBgYgYAgQAMABgBABIgBADIgBADQgVAggZgEIABgDQAHgHgVAKIAAADIgDAAQgGAHgMAAIgDAAQgaAEgVAJIAAgEIAAgCIgBgDQgGgEgKAJIAAAEIgDABQgdAFgcALIAAADIAAADIAAAEQAAAFgGgFIgEABQgQAEgEAIIgDAAQgUAFgVACIAAADIgCgBg");
	this.shape_737.setTransform(235.425,682.35);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#8BBEC7").s().p("AhZg5IgBgDQALgfAggLIABgBQBRALAyAtIACABQAHAygGAyIgBADQgPAUgLAYIAAADQheg+g4hjg");
	this.shape_738.setTransform(232.0815,646.025);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#89BDC6").s().p("AhkDaQg5jPgijmQAbgJAiAyQAxBHA7A/QBjBnBzBZIgBABQggAJgcANIgCAAQgKgrgjgBQgBAbALAOIAAADIgDAAQgbAKgeAHIAAADIAAADIgEAAIgNgGIADgBQATgNggAKIAAAEIgEAAQgVADgPAKIgDABQgeAMgiAHIAAgDgAhnCDIAAADQAOAUAXAKIADAAQAkgFAigIIACgBQALghgRgXIgDgBQgSgGgQAAQgsAAgZAsgAgWAvQABAPAHgEQAZgPgMAAQgGAAgPAEg");
	this.shape_739.setTransform(209.525,669.2808);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#8CBFC9").s().p("Ag4gWIAAgDQA3gWA5ATIABADQgDAjgfAbIgDABQhAgFgMg3g");
	this.shape_740.setTransform(207.85,612.9669);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#8A94B7").s().p("AgMgBIAWAAIADAAIAAABIgMACQgIAAgFgDg");
	this.shape_741.setTransform(256.625,602.43);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#D56B4D").s().p("AjkCWQiOiygokZQAGgNABgSIAAgDQCLiRD/AeIADAAQCMBZhBC7QgIAVgMAaQgFAMAGAJQAFARAWABIAAACQDmgGBNCPQAcAzgCBNQhVDJjCBbIgDABQjPh/iVi7gAhkBoIAAADQBlC4CxBtQAhgfAcgkQAdgkALgsQA8jnjag7IgEAAIg5gDIgCAAQhkAyg6BegAlQlJIABADQAqCtBfB4IAEAAQAeAIAiAFQBZgjAmhYQAuhqg0heQgUgiglgNQg8gUgyAAQhkAAg8BRg");
	this.shape_742.setTransform(222.3039,629.5679);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#CACACB").s().p("AoQGlQE9gSFCgLQD8gJBUirQAXguADg9QASkogUkgQApBgALCHQATD3guDcQgdCHh7AoQjEA9jtAVQg3AEg0AAQi4AAiUg7g");
	this.shape_743.setTransform(263.0631,668.7871);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#74A0B6").s().p("AmeDGIAAgDIArgJIABgCQAkAMAmgSIADAAQAPgBAGAGIADABQAOgGATAAIAEAAQBBgiBMgPIAAgCQANAEALgDIADgBQAbgIASgSIACgBQAmgPApg/IABgCQAegsAygYIAAgCQAOgHADgKIAAgEIAigTIADgBQAYgHARANIADABQBmg/BDhAIADgBIABAAQACAxgKAnIgDAAQg7Avg4AiIAAADIgDgBQgNgFgRAGIgDABQgoAZgjAOIgBACQgOAJgIAPIgDABQgZAWgNABIgCAAQgHAOgIANIgDAAQgTAMgLAOIAAAEIAAADIgEABIhxATQANAZApgEIACAAIAAACIgxASIAAgCQhMAYhMACIAAAJIAAAEIgDAAQgoAFgnAAQhEAAhBgPg");
	this.shape_744.setTransform(253.716,683.443);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#7099B2").s().p("AlbDcIAAgJQBMgCBLgYIAAACIAygSIABgCQDOgQChhCQAagKgEgaQibAeirAvIgDAAIAAgDIAAgEQAMgOATgMIADAAQAIgNAHgOIACAAQANgBAXgWIADgBQAIgPAPgJIABgDQAjgOAngYIADgBIgBADIgGAHQAGAXASAMIADABQAVgQgHgbIAAgDIAAgDQA4giA7gvIACAAQAFBOARBBIACABQAdhBgMhoIgHhCQANgGAKgIIABgDQAQgCAOgEIADgBIAAAEQgICSABB6QgRBQhPAUQkLBClFAJIAAgEg");
	this.shape_745.setTransform(268.575,681.825);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#76A4B8").s().p("AgcAPIAAgNQAcgRAZgDIAEAAIAAAKIAAAEIgDABQgPADgPACIgBADQgKAIgNAFIAAgDg");
	this.shape_746.setTransform(300.525,659.95);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#B8D2DA").s().p("AgBAYIAAgEIAAgrQAFAUgEAbg");
	this.shape_747.setTransform(303.58,646.325);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#7CACBC").s().p("AgZBXQgGgZAAggQAKgsgDg7IgBgDQAkATATghIACAAIAAARIAAADIAAAsIAAAEIAABZIAAADIgEAAQgaADgbASIAAgEg");
	this.shape_748.setTransform(300.2,651.05);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#7BABBC").s().p("Al/EfQglgGgbgRQA6gIAogKIAAgCQA9AEAugOIAEAAQAIgagSgPIAAgDQAogCAUgWIAAgDQAHAGAAgGIAAgDQAfgKAegMIAAgCQAMACACgIIACAAIAAADIAAADQAQACAjgNIAAgCQALAAAHgGIACgBQAKADACgGIACAAQAYAEAVggIAAgDQALgCAGgIIABgDIAAgDIAAgEQAFABAAgIIACAAQAIgCACgLIAAgDIAAgEQADgYAJgTIABgDQAMgMAKgOQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQASAAAtgVQAWgKgWgGQAOgCAOACIACAAQAhgdAWgEQANAEAogtQAhgkAjgSQAngnAkgsQAAAAAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAAAEQADAWgHAPQAABBAHA4IABADIgDABQhDBAhmA+IgDgBQgRgMgYAHIgDABIgiASIAAAEQgEAKgNAHIAAACQgyAYgeAtIgBACQgpA/gnAPIgCABQgSASgaAIIgEABQgKADgNgEIAAACQhMAPhCAiIgDAAQgTAAgOAGIgDgBQgGgGgPABIgDAAQgnASgjgMIgBACIgrAJIAAADIgEgBg");
	this.shape_749.setTransform(250.25,674.425);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#83B8C6").s().p("AgxAaIAAgDQAxgzAvgIIADgBQgYAcgaAaQgUAVgNAAQgLAAgFgMg");
	this.shape_750.setTransform(280.9,646.7362);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#4F6093").s().p("AlOKYIgvgJQgdgngpgcQgogbgMgyQhFkRgOk/QA9BpgFCqQgKEvCpB5QCGAFCRgCIAEAAIA/gCIAAgBQFcAXDjhuQArgVAcglQAlkmgJlLQgDiAhBg9QhEhAh8gMQh1gLh+AHIgDAAIgYAAIgDAAQhOAEgngIQAuglBiAAICeAAQDmgBBiB4QAhAoAGBDQAUEfgSEpQgDA9gXAuQhUCrj8AJQlCALk9ASIgDAAgAmzBSQiQi+hMj+QgPgygIg1QALgWAGgTIAAgDQCZjBEvAwQA4AJAlAjQBwBog3ClQgHAUgNAOQE/gIAaEwIABAEQhWD4jcBzQgUAKgRAQQjYhqiTjCgAnopgQiFAqgdCKQAdCJA1BxQA3ByBGBfQCPDCDhBuQCthTBlifQBEhrg9htQg8hriPgRQhNgKg+gNQATgWAOgbQAuhagohqQgshziSgEIgWgBQheAAhVAbgAkUgfIgBgDQAfh7CWAMQA8AEAqAjQAqAjAYA2QACCvhtBBIgDABQiNhqhhiVgAjzgcIABADQBVBvBtBXQA7glAHhXQAIhZg9glQg2ghgrAAQhFAAgqBSgAoKnVIgBgDIAKgXIABgEQB9hTB5BYQBXBAg3BxQgpBWhWAqQiBhbggi9gAnpnOIABAEQAxB6BLBkIAAgCQBWgcAVhbIAAgEQgFgkgCgfIgCgBQgzg8hGAAQgvAAg3AbgAmil5QgFgHgCgKQBJgcA9AdQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQgUAcg1AEIgJAAQgiAAgMgSg");
	this.shape_751.setTransform(243.3583,644.464);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#81B4C3").s().p("Ai4ClIAAgHIADgEIAAgCIAAgEIAAgDQBFg7AihfIABAAQAkAIAbg+IABgDQAIACABgGIACAAQANAcAkglQAagbAZgcIADAAQAbACAYgOIADgBQAJgNAOgGIADgBQgCAgAGAZIAAADQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgkAsgoAnQgiASghAjQgoAtgMgEQgXAEggAdIgDAAQgNgCgOACQAVAGgVAKQgtAVgTAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgKAOgLAMIAAgDg");
	this.shape_752.setTransform(276.175,656.425);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#84B8C6").s().p("AiBBXIAAgDIAAgEQAMgOAHgTIACAAQASgRAWAAIADAAIgBADQgYA3geAAIgJgBgAAxglIgBgCIgCgFQAvgFAfglIADgBQgBAJADAFIAAADIgCABQgPAGgJANIgDABQgVANgYAAIgGgBg");
	this.shape_753.setTransform(281.35,646.7009);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#82B7C3").s().p("AgZBRIAAgEIgGhTQAbARgFgeIgCAAQAPgYgEgKIgBgDQANABgGgMIgBgDQALgHAHgJIACgBQAHBIAABPIAAADIgCABQgMAUgSAAQgLAAgOgHg");
	this.shape_754.setTransform(300.2016,635.2406);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#84BAC5").s().p("AADAGQgFgBgDgFQAGAAADgFIACgBIAAAJIAAAEIgDgBg");
	this.shape_755.setTransform(302.05,625.475);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#89BDC7").s().p("AABCbQAIlEk+gVIAPghIACgBQD2gHDkAbQCCAQgDCVIgCABQgDAFgIABQAEAFAGABIADABIAAADIgCABQgGAJgMAHIABADQAHAKgOgBIAAADQAFAKgPAYIABABQAGAegcgRIAAgEQAPhmgtgcIAACkIAAADIgCABQggAmguAFIACAEIABADIgDAAIgEAAQguAIgzA0IAAAEIgCAAQgBAFgIgCIgDAAQgWABgRAQQAMggABgngAg7iZIAAADQAkA/AvA0QAQgSgIgjQgShIgrAAQgOAAgQAHgAA6grQAcAPgdgSIABADg");
	this.shape_756.setTransform(271.7524,628.7696);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FDFDFD").s().p("AjnJNIgEAAQg3gCgdgcIgBgDQgQgMAEggQADgJAGgGIABgCQAPgKAWgEIADAAIAHAAIADAAIAOAGIADABQAZAOAcALIABACIAbAAIADAAQARAHAOAJIADABIAEADIADAAIAAADQARAPgHAaIgEAAQgjALgsAAIgcgBgABiI1IBygTIADgBIADAAQCsgvCbgeQAEAagaAKQihBCjPAQIgEAAIgLAAQggAAgKgVgAjCHQIgBgCQgLgPACgaQAjABAKAqIACAAIgBADQgHAMgIAAQgKAAgLgPgAmIGrIgBgDQAjg8BGAWIADABQAQAYgLAhIgCAAQgiAIglAFIgDABQgXgLgNgUgAJEHGQgRhCgFhOQALgngCgxIgCAAIAAgDQgIg4ABhBQAGgPgCgWIAAgEIAAgDQgGgZACgfIgBgDQgCgFAAgJIAAgDIAAilQAtAbgPBoIAAADIAHBTIAAAEIAAADQADA7gKAtQAAAgAHAaIAAADIAAAOIAAADIAHBCQAMBogdBCIgCgBgAmKBMQhGhfg3hyQg1hwgdiJQAdiLCFgpQBfgeBqADQCSAFAsByQAoBrguBZQgOAbgTAXQA+ANBNAJQCPARA8BsQA9BrhEBsQhlCfitBTQjhhtiPjDgAo0m+IAAADQgCARgFANQAoEZCOCyQCUC7DQB/IADgBQDChaBVjKQABhMgbgzQhOiPjkAGIAAgCQgWgBgFgSQgHgIAGgMQALgaAIgWQBCi6iNhZIgEAAQgsgFgoAAQjCAAhzB4gAkFADIAAgDQA5hcBlgzIADAAIA5ADIAEAAQDZA7g8DmQgMAtgcAkQgcAjghAfQixhthli4gAjkAKIABADQBhCWCMBqIADAAQBuhBgCixQgYg0gqgjQgrgjg7gFIgZgBQiAAAgcBvgAjBAUIgBgDQBEiGCLBVQA+AkgIBaQgHBXg8AmQhshYhVhvgAhvgpQggALgLAeIABADQA4BkBfA+IAAgDQAKgYAPgUIABgDQAGgygHgzIgCgBQgxgshSgLIgBABgAlkiIIgDgBQhgh3gqiuIAAgDQBYh5C1A8QAmANAUAjQA1BegvBpQgnBYhZAkQgigGgegHgAnPnFIgBADIgKAYIABADQAgC8CBBcQBWgqAphXQA3hxhXg/Qg/gtg/AAQg8AAg8AogAERkGIAAgDQBFgcAXBeQAIAjgQARQgwgzgkhAgAGHibIgBgCIAPAJIgOgHgAm3mdIgBgDQCKhDBVBkIACABQACAeAFAlIAAADQgVBbhWAcIAAACQhLhjgxh7gAlqknIAAADQAMA5BBAEIADgBQAfgaADglIgBgCQgbgJgbAAQgeAAgdALgAl4ldQACAKAFAHQAOAVApgDQA1gEAUgbQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQgfgOgiAAQghAAgkANg");
	this.shape_757.setTransform(238.4883,639.9114);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#7FB2C1").s().p("AhyApIgEgDIAAgEQAVgCATgEIADAAQAFgIAQgFIADgBIgBADQgUAWgnACIgDAAgAgsAHIAAgDQAbgJAdgGIAEgBIgBACQgdALgeAKIAAgEgAAQgMIAAgDQAKgKAGAEIAAADIgCAAQgCAHgIAAIgEgBgAAggMQAVgJAagEIAEAAIgBACQgfAMgPAAIgEgBgABnggIAAgDQAVgKgHAHIAAADIgCAAQgCAEgFAAIgFgBg");
	this.shape_758.setTransform(236.5625,689.3015);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728}]}).to({state:[{t:this.shape_751},{t:this.shape_757},{t:this.shape_742},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_750},{t:this.shape_748},{t:this.shape_741},{t:this.shape_749},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_758},{t:this.shape_744},{t:this.shape_728},{t:this.shape_745},{t:this.shape_747},{t:this.shape_746},{t:this.shape_743},{t:this.shape_740},{t:this.shape_738},{t:this.shape_739},{t:this.shape_731},{t:this.shape_729},{t:this.shape_730},{t:this.shape_733},{t:this.shape_732}]},14).wait(29));

	// F
	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#727FA8").s().p("AAAANQgBgNAAgMQAEAHgCAPIAAADg");
	this.shape_759.setTransform(450.0017,653.95);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#79A8BA").s().p("AgbBYQgHgYgBgcQAIgbgBgiIAAgDQAYgWAJgUIABgBQAKgLARgFIADAAIAAADQgEA3gGA0IAAAUIAAADIgCABIgxAmIAAADIgCAAg");
	this.shape_760.setTransform(443.925,649.075);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#81B3C2").s().p("AgeBqQgFgygBg2QAEgcACgeIAAgDIA+gwIACgBQAGBKgGBRIAAADIgCABQgRAEgKAMIgBAAQgJAUgZAWIAAgDg");
	this.shape_761.setTransform(444.05,635.225);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#9CB1C6").s().p("AgNgBIAYAAIAEAAIAAABQgIACgHAAQgHAAgGgDg");
	this.shape_762.setTransform(380.85,703.0092);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#CACACA").s().p("AlGHHQifgLhShRQCfA+DjggQAfgEAhAAQAOAGAVgFIABgBQFQANC3iPQBahHgGikQgJjvgFjzQAIgGACAIQBDDogYEsQgYEnkUA0QjJAnjSAAQhXAAhZgHg");
	this.shape_763.setTransform(401.6012,668.533);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FBFBFB").s().p("AgRgBIAgAAIADAAIgBABQgJACgHAAQgKAAgIgDg");
	this.shape_764.setTransform(391.625,707.5714);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#6689A9").s().p("AiUAOIAAgDIAAgEQANADAIgGIABgDQCCgWCKAHIgCAAQAOAJgHAFIgDABQgoALggABIAAABIgDAAIgeAAIgDAAIgaAAIgDABQglACgmAAQgpAAgngDg");
	this.shape_765.setTransform(378.3808,701.4499);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#739DB5").s().p("AgnAVQgBgOgLgLIBAgQIAEAAQALAPAWAGIACABIAAABIhaASg");
	this.shape_766.setTransform(350.7,695.525);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#81B5C3").s().p("AgjAfQgGgXgJgSQAfgLAegIIAEgBIgBADIgFAHQADAfAjAAIAEAAIgBACQghAGgQAJIAAgCQgNgCgVAHIgCAAg");
	this.shape_767.setTransform(345.65,685.4);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#83B8C5").s().p("AAAAEIgDgBIgEgDIAAgCQALgDAEAEIAAABIgBABQgBADgEAAIgCAAg");
	this.shape_768.setTransform(352.825,680.6375);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#E2EBED").s().p("AAAAUQgBgUAAgTQAFAOgCAVIgBAEg");
	this.shape_769.setTransform(339.175,678.7);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#8D97B9").s().p("AAAAPIgBgdQAFAJgDAQIAAAEg");
	this.shape_770.setTransform(331.3618,660.325);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#FCFDFD").s().p("AgFAQIgCgBQgFgNgIgJIgBgDQAugggEA5IAAAEQgGADgGAAQgIAAgGgGg");
	this.shape_771.setTransform(351.2123,672.3046);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#B4D3D8").s().p("AAAATQAAgTgBgTIACAAIAAAjIAAADg");
	this.shape_772.setTransform(337.2,659.5);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#CACEDC").s().p("AgBAMIAAgZIACAAIAAADQADAQgFAJIAAgDg");
	this.shape_773.setTransform(330.7118,642.05);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#FCFCFC").s().p("AgRgMIgBgDQA3gQgcAyIgBABQgXgGgCgag");
	this.shape_774.setTransform(421.6556,675.134);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#6B8FAC").s().p("AAYArIAAgBQAggBAogLIADgBQAIgFgPgKIACAAQiJgHiDAXIgBADQgIAHgNgDIAAADIAAADIgEAAQg4gIgzgOIAAgEQC0gbC7gTIAAgCQAgACAigIIADAAQAWAEALgBIADAAQARgIAfgFIAEAAQAPAFAXgFIAEAAQARAKAdAGIADAAIgBADIgGAEIgCABQgTAMgLgHIgDABQgMAKgSAIQgLgDgnAJQgoALgFAMIAAACQggANgtgCIAAADIgEABIgLABQgPAAgKgFg");
	this.shape_775.setTransform(383.15,698.5017);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#75A1B7").s().p("AhjAQIBcgQIADAAQARAHgEgJIACAAQAPADAIgFIAAACQAKACAKAAQhAAQhPAAIgKAAgABhgPIACAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgHADIAGgEg");
	this.shape_776.setTransform(375,689.8277);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#7099B2").s().p("AhPD0QAuACAggNIAAgCQAEgMAogLQAngJALADQASgJAMgJIADgBQALAGATgMIACAAIgBABIgGAFQBsAOBSg4QAogcAbglQAfgugUgxQgTBchMAhQhOAihRAdIgEAAQgcgGgRgKIgEAAQgXAFgQgFIgDAAQgfAGgSAIIgDAAQgKAAgVgEIgEAAQghAIgggCIAAACQi8ATi0AdIAAADIgEgBQgegKgWgSIBbgSIAAgCQBNAgA/geIABgCQgTgggugGIAAgCIAMgBIAAgBIAEAAQBUABBFgSQAUAAASgLIAHgEQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAjAAAogKIADAAQAOgNATAGIADAAQAigRAUAAIAAACQAdgLAOgZIADAAQAlghAggWIACAAQAQgbANgQIABgDQAQgOATgNQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAggCAVgYIgBAAQAVgNAZAGIADAAQAsgVAigeIADgBIAIByIACAAQAcgvgJhTIAAgDIAAgEIAyglIADgBQAAAUAEAUQAeCLgvBxQgPAmgfAXQi8CMlDABIAAgEgAA2BYQgBALAFACQBPAZBAg5IADAAQAMgBARgCIADgCQAQgQgJgZIAAgCQg0gKgaAfIgEAAQhCALgpAjgADfgvIABACQACAcAYAFIABAAQAVgngbAAQgIAAgOAEg");
	this.shape_777.setTransform(397.4725,678.4);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#76A1B7").s().p("Al1CnIgEgGQAHgEAJAHIADABIAAACIgNABIgCgBgAicCBIAAgDQA7gCAzgaQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAXAAIADAAQAbgRAbgCIAEAAQAGgZAXgHIADgBQAGgSALADIAAgBQARgbAcgdIAAABQAHgDAkgmIADgBQAfgKApgfIADgBQAUgEATADIADABQAogaAkgdIADgBQAFADgCAKIAAADIgDABQgjAegsAWIgDAAQgYgHgWANIACAAQgVAZghABQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgSANgRAPIAAACQgOAQgPAaIgDABQggAWglAhIgCAAQgPAZgdALIAAgCQgSAAgkASIgDgBQgSgFgPAMIgDABQgnAJgkAAIAAgDg");
	this.shape_778.setTransform(400.6286,674.975);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#88BCC6").s().p("AhqDDQgLgMgBgWIABgDQACgWgHgOIAAgDQgJhKgHhLIAAgDIAAgkIAAgDQAGg/gGg9QCBCvCSCaIABACIgDAAQg9AGgyAUIAAgCQgEgFgMAEIAAADIgDAAQgcACgRAOIgDABQggAIgeALIgBgCgAgVBDIABACQAIAKAFAOIACABQALAJAPgHIAAgDQADgmgTAAQgJAAgRAMg");
	this.shape_779.setTransform(351.2,664.575);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#78A6B9").s().p("AnHDVQgKgKgFgOIBFgTIADAAQADAPAJALIABADIgEAAIhBAQIgBgCgAkGCzIgCgBQgKgGgHAEIgCgBQgOgNgRgJQAWgCASgHIADgBQAJAFAGgFIABgDQALgEAPgBIAAgCQAGAIAOgBIADAAICCgaIAEAAQAIgLAPgFIACAAQARgGAdACIADAAQAvgaAlgBIAAABQAegOASgZIABgDQASAAAUgOQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgWAHAAIADAAQAmhZBfghIABgCQAYgDAMAJIADAAQA0gaAOgVQgOAKALgOIACgBIAogfIACgBQgDAkAJAXIABADIgDABQgkAdgnAZIgEAAQgTgEgUAEIgCABQgqAggfAKIgCAAQgkAmgHAEIAAgCQgcAdgSAbIAAACQgLgDgFASIgDAAQgXAHgHAZIgDAAQgbADgdARIgDAAIgWAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgyAZg7ACIAAADIAAAEIgDAAIgFAEQgSAMgUAAQgJAAgLgDIAAgCQgIAGgPgEIgBAAQADAKgSgHIgDAAIhbAQIgEAAg");
	this.shape_780.setTransform(390.975,673.525);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#7EB0C0").s().p("AnOEjQgLgPgEgWQAVgHAOACIAAACQAQgJAhgGIAAgBQAtgOgZgnIAAgDQAHADABgGIACAAQAcAHA5gaIADAAQAGAOAbgOIACAAQAqAsBFgCIAEAAQBMgzA9hCIACAAQASgHAYAAIAEAAQAggUAVgfIACgBQAVgkAugdIABgCQAKgaAYgdIACgBQAPAGALgHIAAgCQA+g0A0gvIAAgCQAGgYAMAUIACABQAdgkANgCIAAACQANAFAIgfIACAAQARgDAOgUIACAAIAAADQACALgGACQAKBXgKBMIAAADIgCABIgoAgIgCABQgLAOAOgKQgOAUg0AbIgDgBQgMgIgYACIgBACQhfAhgmBYIgDAAQgHABAAAWQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQgUAOgSAAIgBADQgSAageAOIAAgCQglACgvAaIgEAAQgcgDgRAGIgCABQgPAFgIALIgEAAIiCAaIgDAAQgOAAgGgHIAAACQgPAAgLAFIAAgEQABg+g8gDQAIAwAiAWIABACIgDAAQgSAHgWADIgDgBQgMgHgRgCIgDAAQgaAHgXAJIAAAHIAAADIgDAAIhFATIgBgCg");
	this.shape_781.setTransform(390.0625,663.075);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#83B8C6").s().p("AmmD5QAxgTA+gGIADAAQAHAAACADIABADIgDABQgaANgHgOIgDABQgsAUgbAAQgHAAgHgCgAgsCYQAOgNAHgTIACgBQAigMACgbIgBAAIAOgTIACAAQgEgJAKgJIABgCQAXgHAJgWIAAgEQAWgHAogTIAAgCQgdgKAkAAIADAAIAKgnIAAgDQANgLAJgTIABgDQAagOAXgRIADgBQAbggAggaIADgBQgRAcgaAUIgDABQgIAQgHAHIACAAQAWgOAZgcIACgBQBFgrA3goIAAACQgLAMAOADIAAgCIAOgMIADgBIAAADQACAOgGAGIAAADIAAADIgCABQgOATgRADIgBABQgJAfgMgGIAAgCQgOACgcAkIgDgBQgLgTgGAXIgBADQgzAug+A0IgBADQgKAGgPgFIgDABQgXAbgKAaIgBACQguAdgVAlIgDABQgVAgggATIgCAAQgYABgTAGIAAgDg");
	this.shape_782.setTransform(395.9017,655.7254);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#8ABDC7").s().p("Ag9EMQAEgegOgPQhihghyhRIAEAAQBygjgEiJIgBAAQgxhLhKgxIgCABQhhAHgvA2IgBAAQgMgtgNgqQDMgTDygLQCSgICcAHQBgAEAmA7QAfA1ASBBIAAADIgCABIg/AwIABgEQAEhagzgRQAaAvgIBQIgBAAIgDABIgOAMIAAACQgOgDALgMIAAgCQg3AohFAqIgCABQgYAcgXAOIgBAAQAGgHAIgQIADgBQAagUARgbIgDABQggAZgbAgIgDABQgWARgbAOIAAADQgKATgNALIAAADIgKAnIgDAAQgjAAAcAKIAAACQgoAUgWAHIABgCQAQgQgDgiIgDAAQgLgNgVgDIgBgDQgpg+hZgQIAAgEQgFgZgIgXIAAACQgRALgGAWQA1BOBXAsIABACQgRAwAeAaIADABIgBACQgKAJAFAJIgDAAIgOATIABAAQgBAbgjAMQAHgUACgWgAiljzQABAVAJAPIACABQAYASAaARIAAADQAGA1ANAqIAAABQAygrgihJIgCAAQgoglg3gVIAAADg");
	this.shape_783.setTransform(400.9,636.6241);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#4F6093").s().p("Am+JgIgBgCQiFiTAAkZIAAgDQADgRgGgJIgBgDQgFhJgBhNQAGgIgCgRIAAgEIAAgDIAAhLQAQAaAOAdIACAAQgVFOBpDlQAYA0A8ASQCfAxDQgIQCigHCQgOQEXgdAfkFQAIhGAAhLIAAgxIABgDQACgQgGgHIAAgDQALixgbibQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIg8hqQhCgdhUgDQlEgKkoAhQhDAHgdgYQETgxFHgGQC6gEBwBBQAMAGAJAOQAqA2AHBZQAFDxAJDxQAHCjhbBHQi3CPlRgNIgDAAIggAAQggAAggAFQhMALhFAAQiHAAhpgqgAnTAmQiAjFgmkaQgEgZgFgUQB0h/DlgQQCwgMCmgIQAoBZgwBTIgCABQjWAejKArIAAACQACArgCAzIAAAEQATAqASAtIACABQBNgjBDguIADgBQBSA9AyBdIABADQhLBFhYA5IgDABQBxBkCABUIADABQgfCIiAA3IgDABQjCiCh/jEgApYnmQAAAmAGAkQAfDbBYCkQByDUDNB3IADgBQBWgcAshIIgDgBQiXhUhhiLIABgCQBLhJBeg0IgBgDQgig8gygtIgCABQhSA5hfAbIgBgDQhJhqApiVIADAAQCrg8DpACIAAgDQAdg0AAhCQgzgEg4gBIgVAAQlBAAi6CBg");
	this.shape_784.setTransform(389.5718,643.9668);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#D56B4D").s().p("AiyBkQhhifgVjuQAGgKADgNIABgDQCOhlDugJQBpgEBhAAQABAQgEAdIAAAEQgLAXgOATIgBADQjjgGi0A3IgDAAQgmDIBlBpIADAAQBSgvBWguIADAAQAYArAbAnQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQhQAzhKA5IgBACQBDCgCZBcIAAADQgbAtgwAaIgDAAQi8iHh7jLg");
	this.shape_785.setTransform(361.1531,628.375);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#FDFDFD").s().p("AknIuIgDgBQgVgGgMgQIgBgCQgIgLgEgQIAAgDIAAgHQAXgJAagHIADAAQASACAMAHIADABQARAJANAMIADABIAEAGIACABIAAABQAuAHATAfIAAACQgfAPgiAAQgkAAgngRgAEPI4IAGgEIABgCIAFgFIABgCQBRgeBOgiQBMghAThcQAVAyggAtQgaAmgoAbQhBAthSAAQgVAAgWgDgACyHmQgGgCABgLQAqgjBCgKIADAAQAbggAzAKIABACQAIAZgQARIgCABQgRACgNABIgDAAQgsAog0AAQgWAAgYgIgAjZHgIAAgCQgigWgIgwQA7ADgBA+IAAAEIAAACQgDADgEAAQgEAAgFgCgAleHTQgkgBgDggIAFgHIABgDQARgOAdgCIADAAIAEADIADAAIAAADQAYAngsAOIgDAAgAmzALQhXijggjbQgFgkAAgmQC/iFFRAEQA3ABA0AEQAABCgdA0IgBADQjogCirA8IgDAAQgpCVBJBqIABADQBfgbBRg5IADgBQAxAtAjA8IABADQhfA0hKBIIgBACQBgCMCXBUIADABQgrBIhXAcIgDABQjNh3hyjVgAiUokQjwAJiOBlIAAADQgEANgFAKQAVDuBgCgQB8DKC9CHIADAAQAvgaAcgtIAAgDQiZhchFifIABgCQBLg5BRgzQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQgbgngYgrIgDAAQhXAuhTAwIgCAAQhlhqAmjIIADAAQC1g3DhAGIABgDQAPgTALgXIAAgEQADgdAAgQQhhAAhoAEgAIZE6IgIhzIAAgDQACgKgFgDIgBgDQgJgXADgkIAAgDQAJhMgJhWQAFgCgBgLIgBgDIAAgEIAAgDQAGgGgCgNIAAgDIABgBQAIhQgagvQAzASgFBaIAAADIAAADQgDAegEAdQABA2AGAxIAAAEIAAADQABAjgIAbQABAcAHAYIACAAIAAADQAJBUgdAvgACKDHQgegbAQgvIAAgCQhXgtg0hNQAGgVAPgMIABgCQAHAXAGAZIAAADQBYAQAqA/IABACQAVADAMANIACABQAEAigQAQIgBACIAAADQgJAWgXAHIgDAAgABFhqQgNgpgGg1IAAgEQgagQgYgTIgBAAQgJgPgBgVIAAgEQA2AWAoAkIACABQAiBIgyAsg");
	this.shape_786.setTransform(385.508,639.8744);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759}]}).wait(43));

	// M
	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#78A5B9").s().p("AggBPIAAgKIANgqIABgDQAeglABglIAAgDQAEgUAMgIIAEgBIAAADQgEAVgGASIADA2IAAADIgCABQgGAQgLAMIAAgBQgPAOgYAYIAAgEg");
	this.shape_787.setTransform(156.65,648.075);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#7BABBC").s().p("AgcAGIAAgDQAcgFAdgDIAAACIgDAAQgZAJgXAAIgGAAg");
	this.shape_788.setTransform(79.175,695.3337);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#8BB1C3").s().p("AAMACIgZAAIAAgDQANAAAOABIAAACIgCAAg");
	this.shape_789.setTransform(96.85,703.175);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#6E95B0").s().p("Aj2A/IAAgDQAbAAAWgIIAAgCQAggEASgIQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQALAIACgIIAAgDQATACAOgFIACAAQAWgKAVADIADAAQAYgOAZgKIACAAQALAEALgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAYADAGgQIACAAIAAABIBrgLQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAsgZAogMIgBACQgtAwhOAOIAAABQiTA8jQAAIgOAAg");
	this.shape_790.setTransform(126.825,697.3281);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#7199B2").s().p("AnhEBQBRgCBOgQIAEgBQBsAJB6gpIADgBQAYgMAYgJIAEgBQAXABAqgZQAVgMgQAKQAEAEAjgKIADgBQAXgXAdgNIAAgDQAegEAYgMQAwgWAXguIgBAAIAAgDIAAgDQARgSAEACIABACQABAHAkgiQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAKgOAMgNQAZgdAjgbIACAAQAIAjAVghIABgCQgCg1gSg0IAAgCQAXgZAQgNIAAABQALgMAGgQIACgBIAAAEQgICXAWCSIgCAAQgMA1ggAfIgCAAQgDgbAPgMIAAgDQgCgZALgKIAAgEQgLgUgIgYIgBACQgoAug5AcQgQAIgQAFIAAADIgVAUQgmAmgwAbIAAAUIAAADIgCABQgGAQgYgEQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgLAEgLgFIgDAAQgZAMgYANIgDAAQgVgDgWAKIgCABQgOAEgTgCIAAADQgCAIgKgIQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAABQgSAHggAFIAAABQgWAJgbgBIAAADIgCAAQgQgDgUAAIAAgBQgPgCgOAAIAAADIgEAAQhRAVhNAAQhNAAhJgVg");
	this.shape_791.setTransform(112.425,677.6);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#79A8BB").s().p("Ag+AYIgFgDIgDgDIgPgWQA8gBA4gSIACAAQAOAVAkACIADAAIgBAAQhWARg6AEIAAADIgDAAg");
	this.shape_792.setTransform(65.7,698.625);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#76A3B8").s().p("AmkELQgZgHgSgPIAAgEQA6gDBYgSIAAgBQATgCABgVIAAgDQAaACAdgMIADAAQAfAGAogRQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIADAAIADAAIBHgMIADgBQA8gWA2gdQA1gcAyghIADgBQAcgCArghQBuhVBChxIAAgDQAIgRANgKQAJgIAMgDIADgBQALgQAKgTIACgBIgBAEQgDAXgGAWQALA+APA6IAAAEIgDAAQgiAbgaAdQgMAOgJANQgBAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAABQgkAhgBgGIAAgCQgEgDgSASIAAADIAAADIgDgBQgKgIgQAAIgDAAQgfAPgjAOIAAACQgOARgSANIAAADQgDAIgDAGIgDAGQgDANAPgDIAEgBIgBADQgcAOgYAXIgCAAQgkALgDgFQAQgKgVAMQgsAagWgCIgEABQgZAKgXALIgDABQh5AphtgJIgEABQhOAQhQADIgDgBg");
	this.shape_793.setTransform(106.075,676.575);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#7BACBC").s().p("AmIFXQAmgNAhgCIAAACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQgeAOgYAAQgIAAgIgCgAiYEOIAAACIALgHQBCglA7gfIADAAQCNhgBLiDIAAgDQAOgRAHAUIACABQhBBwhvBVQgrAigbABIgCABQgyAhg1AcQg3Adg8AXIgDABIhHAMQBYggBKgcgADhgjQgHgJACgSQAPgHANgJQAagTASgZIACgBIAAAMIAAAEIgCABQgKASgLARIgDAAQgLAEgJAHQgOALgIAQIgBgCgAFNhoQgHhUgQhKQAHgTAAgYIAAgDQAYgLAKgRIABgBQAKgBANgFIADgBQAaBAgSBFIgBAEIgDAAQgNAJgEAUIAAADQgBAlgfAmIAAgEg");
	this.shape_794.setTransform(121.4224,660.6016);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#FCFDFD").s().p("AgNgHQAxAIgoAHIgBAAQgIAAAAgPg");
	this.shape_795.setTransform(92.5067,673.66);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#7FB1C0").s().p("AnOFlIgDgEIgDgGQgGgLAAgQIAAgDQAmgCAlgQQABAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAQAkAEAwgTIADgBQBCAJBUglIADgBQANAAAPgDQAagEAegKIAAABQCAhCB4hbIABgCQASAGALgCIADAAQAvhqgFidIAAgDQAQgQANgCIAAACQAaghARgIQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQALgIgHgJIgBgDQAGgUAFgIQAYAHgEgeIACAAQAcgNAFgJIACgBQAFAMAPgCIADAAQADgXAGgGQAHgHALARQADAFAFABQgEBxAYBVIAAADIgCABQgSAZgaATQgNAJgPAHQgCASAHAJIABACIAAAEIgCgBQgHgUgOARIAAADQhLCDiOBgIgDAAQg7AfhCAlIgLAHIAAgCQhJAchYAgIgEAAIgDAAIAAgCQghACgmANIAAgCQgeADgdAGIAAgDQgMgNgOgKIgDAAQgagCgTAIQgCAPAEAIIAAADIgCAAQg5ASg8ABIgBgCg");
	this.shape_796.setTransform(103.325,662.2082);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#85B9C6").s().p("Ak9F9QgDglgOgVIAAgDIAAgDQAUgDATgEQAdgFAagIIADAAIAJANQANAQAFgQIACgQIAAgDQAbgHAYgLQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACAAQAmADAfAKIABAAQACARAJAJQAIAHAJADIACgBIAIgJQAPgWgZgOIgBAAQAbhGAUhfIgBgCQhLg9hNg4QBCAeBJAXIAEABQBWgfA5g9IACgBQgTijAJilIAAgDQA+C2gKDvIAAADQBMA2BaAnIACABIgBACQh4BbiABCIAAgBQgeAKgaAEQgPADgOAAIgCABQhTAlhCgJIgDABQgxATgjgEQgBAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAABQglAQgnACIAAADIgBAAgAAuC3QAogGgxgKQgBASAKgCg");
	this.shape_797.setTransform(87.45,656.125);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#82B6C3").s().p("AgZAqQAAgmgJgaIAsgWIADAAQANAYAJAbIAAADIgDAAQgNAFgJABIgCABQgJASgYAKIAAgDg");
	this.shape_798.setTransform(155.7,625.175);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#A0A5B7").s().p("AAAANQgBgNAAgMQAEAHgCAOIAAAEg");
	this.shape_799.setTransform(165.9517,666.7);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#D0D3DF").s().p("AAAASQgBgSAAgRQAFAMgDAUIAAADg");
	this.shape_800.setTransform(162.0618,636.35);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#8891AC").s().p("AAAAQQgBgQAAgPQAEALgCARIAAADg");
	this.shape_801.setTransform(165.9517,636.175);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#CACACA").s().p("AlRHDIhFgIQhygQgzhGIACgBQABAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQEEBNFDgmQC8gWCRg8QBwguAph5QAHgFAFgJIABgDIAAiRIAAgDIAAgDQACgQgGgHIAAgDQAAgzgDgyQAFhTAChVIAAgEIAAgDQACgSgGgLIAAgDQABg1gEgwQA2CiAJDZQARFejZBpQhSAohvATQg/ALg/AHQhgAKhhAAQhiAAhigKg");
	this.shape_802.setTransform(114.6368,670.275);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#87BCC7").s().p("AhNBZIgBgNQgHhXgQhNQBTBRB4AqIAAACQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQgXAMgbAGQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQgOgHgPAFIAAAHIAAADIgCABQgZAIgdAEQgTAEgVADIAAADIAAADIgCAAg");
	this.shape_803.setTransform(61.475,679.5);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#90BFC9").s().p("AgWgNQAZAJATAOIAAADIAAABQgXgLgVgQg");
	this.shape_804.setTransform(77.85,635.95);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#B5BCD1").s().p("AAAANQgBgMAAgNIADAAIAAAWIAAADg");
	this.shape_805.setTransform(82.875,636.5);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#ECD1C9").s().p("AgBAKIAAgWIACAAIAAADQACAOgEAIIAAgDg");
	this.shape_806.setTransform(84.5517,618.05);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#8CBFC8").s().p("AiBg8IgBgCQA6gsBtALIAEAAQAdgPAmgGIAAgBIAXDoIAAADQiWhFhuhtgAhyg+IABACQAoAQAbAeIADAAQAMgCAOgBIACAAQALgiAZgSIgEAAQgZgFgaAAQgpAAgnAMg");
	this.shape_807.setTransform(66.05,621.775);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#D46B4D").s().p("AgXHGQhrgxhNhNQihihhYjqQATgsAjgfIAAgDQANgCAHgHIADAAQBuA1BWBMQBzBmCYAyQAhhugXiIIAAgDQAFgHgCgQIAAgDIAAgDQACiBAShyIACgBQBChMCFAVQAjBJAYBWQBHD/AJEuQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgEAQgKAJIgDgBQgjgWglgWIAAgDQALkohsjRIgDgBQgPgHgVgCIgCABQgOALgRAHQgNAwgEA1QgMCugQCVQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgMAMgPAKIgDAAIgkAAIgBgCQichMidg9IgCAAQgTAIgIAVIABADQBfCtCgBtIADAAQAUABAJAMIgBAEQgHAqgYAZIgLABQgFAAgEgBg");
	this.shape_808.setTransform(74.975,631.621);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#4F6093").s().p("Al1JUIgDgBQhGhFgahyQgWhcAGh4QARAOAOAPIACABQADBlAYBRQAQA2AZAsIADAFIAEAGIAPAXIACAEQAQATAYALQBaAoB+gFQFAgLEAhJQCMgoBAh4QgJjkAGjXIAAgDIAAgEQACgUgGgMQAIhmgig8QgphMhZgcQhcgdiNATIgBgCQgGgQgDgVQCRgUBiAaQCbAqAlCgIAAADQAEAwgBA1IAAADQAAAQACAQIACAAIAAAEQgCBUgFBTQADAyAAAzIAAADQAAANACANIACAAIAAADIAACSIgBADQgFAJgHAFQgpB5hwAuQiRA8i8AWQhrAMhlAAQjKAAitgzgAnaDCQijifhHj8QAwheBeguIABgCQBeAVA4A7QBeBjB+BDQAUARAZALIAAgCQAQAEgDgOQgikIAvjeQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAQB3hQCwAWQBEDGAuDlQAtDeg7DPIAAABQhVgfhKgtIAAgDQAJkRhUjFIgBABQgzCwAaDHIgCABQgvAkg1AfIgDgBQiXgxh9g5IABACQBvB+CNBgIAAADQgTBGgeA8Qi+gxh5h1gApJlIQg9AxgkBLQBeDlCdClQBhBmCYAwQAYgxATg2IACgBQjFhhhQjCIACAAQCKBRC6AzIADABIBBguIADAAQgejpBPiuIACAAQBJAsAOB0QADAkAJArQAcCDgUCDQAyAhA9AWIADABQAujXg4jVQgxi5g3iyQiIgLhrAxIgCABQgWDgAFDsIAAADIgDAAQAAAOACAMIABAAIAAAJQhcgHhNg+QiHhrifhSIgBACgAnMlOQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAIgKALgKIAAgCQCMggB7ABIAAABQgZAlhCAAQhlgCg5AuQgTgLgNgPg");
	this.shape_809.setTransform(95.225,645.9671);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#89BDC7").s().p("AhxCoQgbibgfiYQAeglBCAHQBIAGBDAMIA1AJQAoAcAPA1IAAADIgDABIgtAWIgDgBQgKgrghgFQADANAFANIACAAIADBHIAAADQgFgBgDgFQgMgQgHAGQgGAGgDAXIgDAAQgPACgFgMIgCABQgFAJgbANIgCAAQAEAegYgHQgFAIgFAUIAAADQAHAJgLAIQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAQgRAIgaAhIAAgCQgNACgQAQIAAgDg");
	this.shape_810.setTransform(139.8,626.5259);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#FDFDFD").s().p("AirI5QgjgCgOgVIAAgDQgFgIACgPQATgIAbACIADAAQAOAKALANIABADIAAADIAAADQgBAVgTACIgDAAgAFIHOIADgHQADgGADgHIAAgDQASgOAOgQIAAgCQAjgOAfgPIADgBQAQABAKAIIADABIABAAQgXAugwAWQgXALgeAFIgEAAIgFABQgJAAACgKgAkKHHIgJgNIAAgDIAAgHQAPgGAOAIQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAABIAAADIgDAQQgCAIgEAAQgFAAgHgIgAmGDpQieilhdjkQAjhLA9gxIABgCQCgBRCGBrQBOA+BcAHIAAgIIAAgDIAAgXIAAgDQgFjsAVjhIADAAQBqgyCJALQA3CzAwC4QA5DVgvDXIgDgBQg9gWgxghQAUiEgciCQgJgrgEgjQgNh0hJgtIgCAAQhPCvAcDpIgCAAIhAAtIgEAAQi6gziKhRIgCAAQBRDCDFBhIgCAAQgTA3gZAxQiXgwhhhngAo0j1IAAADQgjAfgTAsQBYDqChChQBNBNBrAxQAHADANgDQAZgZAHgqIABgEQgJgMgUgBIgEAAQighthfisIgBgDQAIgVATgIIACAAQCdA8CdBMIABACIAkAAIADAAQAPgKAMgMQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAPiUAMivQAEg1ANgwQARgHAOgLIACgBQAVACAPAHIADABQBsDRgLEoIAAADQAlAWAjAWIADABQAKgJAEgQQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQgJkuhHj/QgYhWgjhJQiFgVhBBMIgCABQgSBygCCBIAAADIgDAAIAAAXIAAADIAAADQAXCJghBtQiZgxhzhnQhWhMhug1IgDAAQgHAHgNACgAJlD+IAAgEQgPg5gLg+QAGgWADgYIABgDIAAgEIAAgMIgBgDQgXhUAEhxIAAgDIgDhIIgCAAQgFgNgDgNQAhAFALArIACABQAKAagBAnIAAADIAAADQAAAYgGATQAQBJAGBUIAAAEIAAADIgNAqIAAAKIAAADIABADQARA0ACA0IAAADQgLAQgHAAQgHAAgEgTgAltkDIgBgCQBCgTBDAMIAEABQgaASgMAhIgBABQgOAAgMACIgDABQgcgegogRg");
	this.shape_811.setTransform(91.175,641.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787}]}).wait(43));

	// achtergrond
	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#FFFFFF").s().p("EgpjA7yMAAAhREMAAAgmfMBSbAAAIArAAMAAAB3jg");
	this.shape_812.setTransform(251.5,372.5);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("rgba(0,204,204,0)").s().p("EgpUATmMAAAgnLMBSpAAAIAAAsMhSaAAAMAAAAmfg");
	this.shape_813.setTransform(248.55,110.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_813},{t:this.shape_812}]}).wait(43));

	// ramune
	this.instance = new lib.merknaam("synched",0);
	this.instance.setTransform(238.3,88.95,1,1,0,0,0,164.1,61.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43));

	// gezichtje
	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("#000000").ss(22,1,1).p("AnwrcIA1JKAIEqVIg1JuAsfDvQLUOaNHsdQASgSASgS");
	this.shape_814.setTransform(241.825,383.2871);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f().s("#000000").ss(22,1,1).p("Ar8mLIJNgBAC6l4IJhCOAsfEbQK1CoG5hQQG7hQAWBR");
	this.shape_815.setTransform(241.825,378.8685);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#000000").ss(22,1,1).p("Ar8mOQE0iJEZCIAC6l7QE+goEjC2AsfEYQK1ERG6h8QG6h8AWBA");
	this.shape_816.setTransform(241.825,379.1639);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f().s("#000000").ss(22,1,1).p("Ar8mRQFCkQELEPAC6l+QFLiXEWElAsfEWQK1F4G6inQG6ioAWAw");
	this.shape_817.setTransform(241.825,379.4412);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#000000").ss(22,1,1).p("Ar8mUQFPmYD+GXAC6mBQFYkFEJGTAsfETQK1HhG6jUQG6jTAWAf");
	this.shape_818.setTransform(241.825,379.7173);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f().s("#000000").ss(22,1,1).p("Ar8mWQFdogDwIfAC6mDQFll1D8IDAsfEQQK1JJG6j/QG6j/AWAO");
	this.shape_819.setTransform(241.825,379.9955);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("#000000").ss(22,1,1).p("Ar8mZQFqqoDjKnAC6mGQFynkDvJyAsfENQK1KyG5krQG7ksAWgC");
	this.shape_820.setTransform(241.825,380.2827);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f().s("#000000").ss(22,1,1).p("AqsjvIHBl9AE8pQIFxH5AlvD5QFuJKDDlRQDElRgBCx");
	this.shape_821.setTransform(240.825,382.2555);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("#000000").ss(22,1,1).p("Aqsi+QEZifCojeAE8ofQCTEDDeD2AlvErQFzG5DBkPQDBkPgBC+");
	this.shape_822.setTransform(240.825,377.342);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f().s("#000000").ss(22,1,1).p("AqsiNQFRiABwj9AE8nuQBtEJEEDvAlvFcQF6EoC+jMQC+jNgCDK");
	this.shape_823.setTransform(240.825,372.4487);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("#000000").ss(22,1,1).p("AqshiQGIhhA5kcAE8nDQBGEPErDpAlvGHQGBCYC7iKQC6iKgCDV");
	this.shape_824.setTransform(240.825,368.125);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f().s("#000000").ss(22,1,1).p("AqshiQHAhCABk7AE8nDQAgEWFRDiAlvGHQGIAHC3hIQC4hHgDDh");
	this.shape_825.setTransform(240.825,368.125);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#000000").ss(22,1,1).p("AqshiQH4gjg3laAE8nDQgGEcF3DcAlvGHQGOiJC1gGQC0gFgDDt");
	this.shape_826.setTransform(240.825,368.125);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f().s("#000000").ss(22,1,1).p("AqshiQHhgwgglNAE8nDQAKEZFnDfAlvGHQGLhNC2ghQC2ghgDDo");
	this.shape_827.setTransform(240.825,368.125);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("#000000").ss(22,1,1).p("AqshiQHKg9gJlAAE8nDQAaEXFXDhAlvGHQGJgRC3g9QC3g8gDDj");
	this.shape_828.setTransform(240.825,368.125);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f().s("#000000").ss(22,1,1).p("AqshiQGyhKAPkzAE8nDQAqEUFHDkAlvGHQGGArC4hYQC5hYgDDe");
	this.shape_829.setTransform(240.825,368.125);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#000000").ss(22,1,1).p("AqshiQGbhXAmkmAE8nDQA6ERE3DnAlvGHQGDBoC6h0QC5h0gCDZ");
	this.shape_830.setTransform(240.825,368.125);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f().s("#000000").ss(22,1,1).p("AqshiQGEhkA9kZAE8nDQBKEPEnDpAlvGHQGACkC7iQQC7iPgCDU");
	this.shape_831.setTransform(240.825,368.125);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("#000000").ss(22,1,1).p("Aqsh1QFthwBUkNAE8nWQBaEMEXDsAlvF0QF+DgC8irQC8irgCDP");
	this.shape_832.setTransform(240.825,370.0387);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f().s("#000000").ss(22,1,1).p("AqsiJQFVh9BskAAE8nqQBpEKEIDuAlvFgQF7EcC9jHQC+jHgCDL");
	this.shape_833.setTransform(240.825,372.0452);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#000000").ss(22,1,1).p("AqsidQE+iLCDjyAE8n+QB5EHD4DyAlvFLQF4FZC/jjQC/jigCDF");
	this.shape_834.setTransform(240.825,374.0673);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f().s("#000000").ss(22,1,1).p("AqsiyQEniXCajmAE8oTQCJEFDoD0AlvE3QF1GVDAj+QDAj/gBDB");
	this.shape_835.setTransform(240.825,376.12);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#000000").ss(22,1,1).p("AqsjGQEPilCyjYAE8onQCZEBDYD4AlvEiQFyHRDCkZQDBkagBC7");
	this.shape_836.setTransform(240.825,378.1576);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f().s("#000000").ss(22,1,1).p("AqsjbQD4ixDJjMAE8o8QCpD/DID6AlvEOQFwINDCk1QDDk2gBC3");
	this.shape_837.setTransform(240.825,380.2109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_814}]}).to({state:[{t:this.shape_815}]},14).to({state:[{t:this.shape_816}]},1).to({state:[{t:this.shape_817}]},1).to({state:[{t:this.shape_818}]},1).to({state:[{t:this.shape_819}]},1).to({state:[{t:this.shape_820}]},1).to({state:[{t:this.shape_819}]},1).to({state:[{t:this.shape_818}]},1).to({state:[{t:this.shape_817}]},1).to({state:[{t:this.shape_816}]},1).to({state:[{t:this.shape_815}]},1).to({state:[{t:this.shape_821}]},1).to({state:[{t:this.shape_822}]},1).to({state:[{t:this.shape_823}]},1).to({state:[{t:this.shape_824}]},1).to({state:[{t:this.shape_825}]},1).to({state:[{t:this.shape_826}]},1).to({state:[{t:this.shape_827}]},1).to({state:[{t:this.shape_828}]},1).to({state:[{t:this.shape_829}]},1).to({state:[{t:this.shape_830}]},1).to({state:[{t:this.shape_831}]},1).to({state:[{t:this.shape_832}]},1).to({state:[{t:this.shape_833}]},1).to({state:[{t:this.shape_834}]},1).to({state:[{t:this.shape_835}]},1).to({state:[{t:this.shape_836}]},1).to({state:[{t:this.shape_837}]},1).to({state:[{t:this.shape_821}]},1).wait(1));

	// rand
	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#FFFFFF").s().p("AATAnIgTgdIgSAdIgRAAIAcgnIgbgmIASAAIARAbIASgbIAQAAIgbAmIAcAng");
	this.shape_838.setTransform(265.025,731.625);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#FFFFFF").s().p("AgbAdQgDgGAAgKIAAg0IANAAIAAAzQABAGABAEQAEAHAJAAQAMAAAFgNQADgGAAgLIAAgmIANAAIAABNIgNAAIABgLQgCAEgEADQgIAGgJAAQgRAAgGgLg");
	this.shape_839.setTransform(257.1,731.725);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#FFFFFF").s().p("AgdAjQgHgGAAgKQAAgLAHgHQAHgEAKgCIAVgDQAFAAABgDIAAgGQABgGgFgDQgFgDgIAAQgKAAgEAFQgDADgBAGIgMAAQAAgOAJgGQAKgFALgBQAOAAAIAGQAJAFAAAMIAAAsIAAADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIACAAIACgBIAAAKIgFABIgEAAQgHABgDgFQgCgDAAgFQgEAGgIAEQgGAEgJAAQgLAAgHgHgAAJABIgHACIgIABQgGABgEACQgGADAAAIQAAAGAEADQAEAEAGgBQAHABAFgEQALgFAAgNIAAgJIgGABg");
	this.shape_840.setTransform(249.05,731.65);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#FFFFFF").s().p("AgYAeQgJgLAAgRQAAgUAKgLQAKgMAPAAQANABAIAFQAJAHACAQIgOAAQgBgIgDgEQgFgFgJAAQgLAAgGAMQgEAJABAKQAAAMAEAIQAGAIAJAAQAIAAAFgFQAFgFABgJIAOAAQgDAQgJAHQgIAIgOAAQgOAAgKgMg");
	this.shape_841.setTransform(241.05,731.65);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgLAPAAQAJAAAHADQAIAEAEAGQAEAHABAHQACAGAAALIg4AAQAAALAFAIQAFAHAKAAQALAAAGgHQADgEACgFIANAAQgBAEgDAFQgDAGgDADQgGAGgJACQgFACgFgBQgOABgKgLgAAWgGQgBgIgDgGQgFgJgNAAQgIAAgGAHQgGAGAAAKIAqAAIAAAAg");
	this.shape_842.setTransform(233.025,731.7);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#FFFFFF").s().p("AgrA2IAAhrIArAAQAVAAAMAQQALAOAAAWQAAAQgGAOQgMAZgaAAgAgcApIAZAAQAGAAAFgBQAJgDAEgIQAFgHACgKIABgLQAAgTgIgLQgHgLgRAAIgZAAg");
	this.shape_843.setTransform(223.75,730.175);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#FFFFFF").s().p("AgeAtQgQgPAAgeQAAgYAMgPQAOgRAWAAQAVAAALALQALALABANIgOAAQgCgKgIgGQgHgGgMAAQgPAAgKALQgJALAAAWQAAATAIAMQAJAMAQAAQAQAAAIgNQAFgGACgLIAOAAQgCARgKAMQgNAOgVAAQgSAAgNgMg");
	this.shape_844.setTransform(212.725,730.175);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#FFFFFF").s().p("AgVAxQgJgHAAgRIAAgHIAOAAIAAAHQAAAJAEAEQADAFAJAAQALAAADgIQADgFgBgOIAAhGIAPAAIAABKQAAAOgEAHQgHAOgVAAQgMAAgIgGg");
	this.shape_845.setTransform(203.2,730.325);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#000000").s().p("EgmqAEsIAApXIBiAAIAAFwICAAAIAAAVMBHqAAAIAAkUICJAAIAAHmg");
	this.shape_846.setTransform(247.475,716.925);

	this.instance_1 = new lib.templateMupi();
	this.instance_1.setTransform(494,734.2,0.9942,1.0039,0,0,0,248,364.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838}]}).wait(43));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(231.1,358.6,286.4,396.5);
// library properties:
lib.properties = {
	id: '1196D7906F9C934BB2969EC3201F8465',
	width: 494,
	height: 746,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1196D7906F9C934BB2969EC3201F8465'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;