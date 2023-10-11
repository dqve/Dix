	// HTML elements
	
	var meterEl = document.getElementById('meter'),
		levelEl = document.querySelector('#meter > span'),
		showPer = document.getElementById('db-level'),
		textPer = document.querySelector('#db-level > span');


	
	
	// Decibel Meter
	
	var meter = DecibelMeter.create('meter');
	
	// listen for audio sources to be ready
	
	meter.on('ready', function (meter, sources) {
		var mic = sources[0]; // select first mic
		meter.connect(mic); // connect to mic
	});
	
	// adjust displayed level when audio sampled
	
	meter.on('sample', function (dB, percent, level) {
		levelEl.style.height = (percent * 100) + '%';
	});
	
	// change element class when meter starts listening
	
	meter.on('listen', function (meter) {
		meterEl.classList.add('active');
	});
	
	// change element class when meter stops listening
	
	meter.on('stop-listening', function (meter) {
		meterEl.classList.remove('active');
		levelEl.style.height = 0;
	});
	
	// clicking the meter element will toggle listening
	
	meterEl.addEventListener('click', function (e) {
		if (meter.listening)
			meter.stopListening();
		else
			meter.listen();
	});

	const level = document.getElementById('db-mini')

	// meter.on('sample', (dB, percent, value, deb) => level.textContent = `${deb} dB`)

	// meter.on('sample', (dB, percent, value, deb) => textPer.textContent = `${dB} dB`)

	// showPer
	// textPer

	const mini = document.getElementById('db-level')

	
	meter.on('sample', (dB, percent, value, deci) => mini.textContent = `${deci} dB`)