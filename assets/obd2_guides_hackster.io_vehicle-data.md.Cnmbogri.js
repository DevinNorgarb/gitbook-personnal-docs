import{_ as a,o as n,c as p,ag as e}from"./chunks/framework.DXGyWiRo.js";const t="/assets/background_hhDloUVGP0.md13WI0E.jpg",l="/assets/background_hhDloUVGP0.md13WI0E.jpg",O=JSON.parse('{"title":"VEHICLE DATA","description":"","frontmatter":{},"headers":[],"relativePath":"obd2/guides/hackster.io/vehicle-data.md","filePath":"obd2/guides/hackster.io/vehicle-data.md"}'),i={name:"obd2/guides/hackster.io/vehicle-data.md"};function c(r,s,_,u,o,A){return n(),p("div",null,[...s[0]||(s[0]=[e('<h1 id="vehicle-data" tabindex="-1">VEHICLE DATA <a class="header-anchor" href="#vehicle-data" aria-label="Permalink to &quot;VEHICLE DATA&quot;">​</a></h1><p><a href="https://www.hackster.io/bxmas13/vehicle-metrics-9c9ae5" target="_blank" rel="noreferrer">https://www.hackster.io/bxmas13/vehicle-metrics-9c9ae5</a></p><figure><img src="'+t+`" alt=""><figcaption></figcaption></figure><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><h2 id="vehicle-metrics" tabindex="-1">Vehicle Metrics <a class="header-anchor" href="#vehicle-metrics" aria-label="Permalink to &quot;Vehicle Metrics&quot;">​</a></h2><p>Gather in-vehicle sensor data (temperature, force, etc. ) to help compare with data sent by vehicle sensors.</p><p><a href="https://www.hackster.io/projects?difficulty=intermediate" target="_blank" rel="noreferrer">Intermediate</a>Work in progress10 hours970<img src="https://hackster.imgix.net/uploads/attachments/783952/background_hB6NwJcsv7.jpg?auto=compress%2Cformat&amp;w=900&amp;h=675&amp;fit=min" alt="Vehicle Metrics"></p><h3 id="things-used-in-this-project" tabindex="-1">Things used in this project <a class="header-anchor" href="#things-used-in-this-project" aria-label="Permalink to &quot;Things used in this project&quot;">​</a></h3><table tabindex="0"><thead><tr><th><h4>Software apps and online services</h4></th><th></th><th></th><th></th></tr></thead><tbody><tr><td></td><td>6c9e5be88b7448179360cda17cdbf012</td><td></td><td></td></tr><tr><td>Atmosphereiot.com</td><td></td><td></td><td></td></tr><tr><td>As the main programming IDE</td><td></td><td></td><td></td></tr><tr><td><img src="https://hackster.imgix.net/uploads/attachments/479128/10.png?auto=compress%2Cformat&amp;w=48&amp;h=48&amp;fit=fill&amp;bg=ffffff" alt="Windows 10"></td><td>f1784141eb0a4e6bab93aa92c0f23cb7</td><td></td><td></td></tr><tr><td><a href="https://www.hackster.io/microsoft/products/windows-10?ref=project-9c9ae5" target="_blank" rel="noreferrer">Microsoft Windows 10</a></td><td></td><td></td><td></td></tr><tr><td>Base PC operating system</td><td></td><td></td><td></td></tr><tr><td><h4>Hand tools and fabrication machines</h4></td><td></td><td></td><td></td></tr><tr><td><img src="https://hackster.imgix.net/uploads/image/file/79855/3Drag.jpg?auto=compress%2Cformat&amp;w=48&amp;h=48&amp;fit=fill&amp;bg=ffffff" alt="3D Printer (generic)"></td><td>9515b99826cc4bdcb73dd58af9ff8c7c</td><td></td><td></td></tr><tr><td>3D Printer (generic)</td><td></td><td></td><td></td></tr><tr><td>To make dashboard holder for the NXP Rapid IOT</td><td></td><td></td><td></td></tr><tr><td><img src="https://hackster.imgix.net/uploads/image/file/79853/09507-01.jpg?auto=compress%2Cformat&amp;w=48&amp;h=48&amp;fit=fill&amp;bg=ffffff" alt="Soldering iron (generic)"></td><td>f3a31600248b40159b5b806463cd030f</td><td></td><td></td></tr><tr><td>Soldering iron (generic)</td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></tbody></table><h3 id="story" tabindex="-1">Story <a class="header-anchor" href="#story" aria-label="Permalink to &quot;Story&quot;">​</a></h3><h4 id="the-goal" tabindex="-1">The Goal <a href="#toc-the-goal-0" id="toc-the-goal-0"></a> <a class="header-anchor" href="#the-goal" aria-label="Permalink to &quot;The Goal &lt;a href=&quot;#toc-the-goal-0&quot; id=&quot;toc-the-goal-0&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>My goal was to collect the sensor data from the NXP device and compare it with data sent from the OBDII connector using a Bluetooth OBDII reader.</p><h4 id="my-hopes-and-dreams-sort-of" tabindex="-1">My Hopes and Dreams...sort of <a href="#toc-my-hopes-and-dreams---sort-of-1" id="toc-my-hopes-and-dreams---sort-of-1"></a> <a class="header-anchor" href="#my-hopes-and-dreams-sort-of" aria-label="Permalink to &quot;My Hopes and Dreams...sort of &lt;a href=&quot;#toc-my-hopes-and-dreams---sort-of-1&quot; id=&quot;toc-my-hopes-and-dreams---sort-of-1&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>Initially I had high hopes for this project where I would be able to quickly connect to my vehicles(2005 GMC Yukon XL) Entertainment and Serial (E&amp;C) bus.</p><p>With a proper connection I would have been able to tap into the radio, CD changer, remote cassette player, OnStar module, and HVAC system associated with my vehicle. My main goal was to read the interior sensor data from the HVAC system.</p><h4 id="crushed-hopes" tabindex="-1">Crushed Hopes <a href="#toc-crushed-hopes-2" id="toc-crushed-hopes-2"></a> <a class="header-anchor" href="#crushed-hopes" aria-label="Permalink to &quot;Crushed Hopes &lt;a href=&quot;#toc-crushed-hopes-2&quot; id=&quot;toc-crushed-hopes-2&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>I was able to find a treasure trove of valuable information on <a href="http://stuartschmitt.com/e_and_c_bus/" target="_blank" rel="noreferrer">Stuart Schmitt&#39;s website</a>. With most of the hard work already completed by Stuart I set out to emulate his work and get an Arduino pulling &quot;comfort&quot; data from the E&amp;C bus.</p><p>Try as I might I was never able to reliably gather &quot;comfort&quot; data from the E&amp;C bus. My initial thoughts on why I was having so much trouble were that the GMC microcontroller in charge of the E&amp;C bus was dying and sending intermittent data.However it could just as well be &quot;User Error&quot; that I was never able to identify and fix.</p><h4 id="plan-b" tabindex="-1">Plan B <a href="#toc-plan-b-3" id="toc-plan-b-3"></a> <a class="header-anchor" href="#plan-b" aria-label="Permalink to &quot;Plan B &lt;a href=&quot;#toc-plan-b-3&quot; id=&quot;toc-plan-b-3&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>After the right cross and upper cut I received from my hubris I decided to pull what information I could from the CAN bus and use that as my basis for comparison.With the limited data I was receiving from the CAN bus I set to work on the NXP IOT device.</p><p>I have to admit I was a bit hesitant and afraid to learn a new IDE and potentially new programming language. Thankfully my fears were unfounded as the Atmosphere IoT platform was amazing and fairly easy to learn.</p><p>In just a couple of hours I was able to create a tolerable looking app which I used on my Samsung S5 phone.</p><h4 id="breakdown" tabindex="-1">Breakdown <a href="#toc-breakdown-4" id="toc-breakdown-4"></a> <a class="header-anchor" href="#breakdown" aria-label="Permalink to &quot;Breakdown &lt;a href=&quot;#toc-breakdown-4&quot; id=&quot;toc-breakdown-4&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>With Plan B my only option, for now, here is what I finally came up with for data collection.</p><ul><li>Using Torque app and a cheap knockoff ELM327 OBDII bluetooth reader I was able to log, through the Torque app, the vehicle interior sensor data.</li><li>Using the Atmosphere IoT IDE I was able to quickly create code that would poll the Rapid IoT sensors, in 5 second intervals, and save that data to the cloud.</li><li>When I finished driving for the day I could take the logs created by Torque and the logs from the Rapid IoT device, which was saved to the cloud, and compare the data side by side.</li></ul><h4 id="conclusion" tabindex="-1">Conclusion <a href="#toc-conclusion-5" id="toc-conclusion-5"></a> <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion &lt;a href=&quot;#toc-conclusion-5&quot; id=&quot;toc-conclusion-5&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>I learned three things during the development of this project.</p><p>1. The Mikrobus connector on the back of the Rapid IoT device is pain to work with when you don&#39;t have money for The Hexiwear Docking Station.</p><p>2. Using the Atmosphere IoT IDE was a life, and time, saver. Being able to drag and drop components and functions made software development so much easier and enjoyable.</p><p>3. Filtering and sorting data must be an art form because it took me quite a few attempts to do it successfully. Note: proper time stamps and time settings are crucial when comparing from two separate devices.</p><h3 id="schematics" tabindex="-1">Schematics <a class="header-anchor" href="#schematics" aria-label="Permalink to &quot;Schematics&quot;">​</a></h3><h4 id="background-used-for-vehicle-data-app" tabindex="-1">Background used for Vehicle Data app <a class="header-anchor" href="#background-used-for-vehicle-data-app" aria-label="Permalink to &quot;Background used for Vehicle Data app&quot;">​</a></h4><p>Add the image as a background in your app.<img src="https://hackster.imgix.net/uploads/attachments/784082/background_hhDloUVGP0.jpg" alt=""></p><h3 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h3><h4 id="sensor-data-for-vehicle-interior" tabindex="-1">Sensor Data for Vehicle Interior <a class="header-anchor" href="#sensor-data-for-vehicle-interior" aria-label="Permalink to &quot;Sensor Data for Vehicle Interior&quot;">​</a></h4><p>C/C++Using the Temp., Humidity, Air Quality, Acceleration, Gyroscope and Pressure sensors, poll and log the data via Cloud storage/database.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## include &quot;callbacks.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//HEADER START</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//HEADER END</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void ATMO_Setup() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t Interval_trigger(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t Interval_setup(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_INTERVAL_Handle_t intervalHandle;</span></span>
<span class="line"><span>    ATMO_INTERVAL_AddAbilityInterval(</span></span>
<span class="line"><span>		ATMO_PROPERTY(Interval, instance), </span></span>
<span class="line"><span>		ATMO_ABILITY(Interval, interval), </span></span>
<span class="line"><span>		ATMO_PROPERTY(Interval, time), </span></span>
<span class="line"><span>		&amp;intervalHandle</span></span>
<span class="line"><span>	);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t Interval_interval(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t ENS210TemperatureHumidity_trigger(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t ENS210TemperatureHumidity_setup(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_ENS210_Config_t config;</span></span>
<span class="line"><span>	config.address = ATMO_PROPERTY(ENS210TemperatureHumidity, i2cAddress);</span></span>
<span class="line"><span>	config.i2cDriverInstance = ATMO_PROPERTY(ENS210TemperatureHumidity, i2cInstance);</span></span>
<span class="line"><span>	config.tempCalibrationOffset = ATMO_PROPERTY(ENS210TemperatureHumidity, tempCalibrationOffset);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ( ATMO_ENS210_Init(&amp;config) == ATMO_ENS210_Status_Success ) ? ATMO_Status_Success : ATMO_Status_Fail;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t ENS210TemperatureHumidity_setEnabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>ATMO_ENS210_SetEnabled(true);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t ENS210TemperatureHumidity_setDisabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>ATMO_ENS210_SetEnabled(false);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t ENS210TemperatureHumidity_setEnabledDisabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>bool enabled = false;</span></span>
<span class="line"><span>ATMO_GetBool(in, &amp;enabled);</span></span>
<span class="line"><span>ATMO_ENS210_SetEnabled(enabled);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t ENS210TemperatureHumidity_readTemperature(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>    float tempC;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(ATMO_ENS210_GetTemperatureFloat(&amp;tempC) == ATMO_ENS210_Status_Success)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ATMO_CreateValueFloat(out, tempC);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t ENS210TemperatureHumidity_readHumidity(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>    float humidityPct;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(ATMO_ENS210_GetHumidityFloat(&amp;humidityPct) == ATMO_ENS210_Status_Success)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ATMO_CreateValueFloat(out, humidityPct);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t CCS811AirQuality_trigger(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t CCS811AirQuality_setup(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_CCS811_Config_t config;</span></span>
<span class="line"><span>	config.operatingMode = ATMO_PROPERTY(CCS811AirQuality, operatingMode);</span></span>
<span class="line"><span>	config.address = ATMO_PROPERTY(CCS811AirQuality, i2cAddress);</span></span>
<span class="line"><span>	config.i2cDriverInstance = ATMO_PROPERTY(CCS811AirQuality, i2cInstance);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ( ATMO_CCS811_Init(&amp;config) == ATMO_CCS811_Status_Success ) ? ATMO_Status_Success : ATMO_Status_Fail;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t CCS811AirQuality_setEnabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>ATMO_CCS811_SetEnabled(true);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t CCS811AirQuality_setDisabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>ATMO_CCS811_SetEnabled(false);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t CCS811AirQuality_setEnabledDisabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>bool enabled = false;</span></span>
<span class="line"><span>ATMO_GetBool(in, &amp;enabled);</span></span>
<span class="line"><span>ATMO_CCS811_SetEnabled(enabled);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t CCS811AirQuality_readTVOC(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>    uint16_t tvoc;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(ATMO_CCS811_GetTVOC(&amp;tvoc) == ATMO_CCS811_Status_Success)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ATMO_CreateValueUnsignedInt(out, (unsigned int)tvoc);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t CCS811AirQuality_readCO2(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>    uint16_t co2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(ATMO_CCS811_GetCO2(&amp;co2) == ATMO_CCS811_Status_Success)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ATMO_CreateValueInt(out, (int)co2);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_trigger(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_setup(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_FXOS8700_Config_t config;</span></span>
<span class="line"><span>	config.address = ATMO_PROPERTY(FXOS8700AccelerometerMagnetometer, i2cAddress);</span></span>
<span class="line"><span>	config.i2cDriverInstance = ATMO_PROPERTY(FXOS8700AccelerometerMagnetometer, i2cInstance);</span></span>
<span class="line"><span>	config.gpioDriverInstance = ATMO_PROPERTY(FXOS8700AccelerometerMagnetometer, gpioInstance);</span></span>
<span class="line"><span>	config.int1En = ATMO_PROPERTY(FXOS8700AccelerometerMagnetometer, interrupt1Enabled);</span></span>
<span class="line"><span>    config.int2En = ATMO_PROPERTY(FXOS8700AccelerometerMagnetometer, interrupt2Enabled);</span></span>
<span class="line"><span>    config.int1Pin = ATMO_PROPERTY(FXOS8700AccelerometerMagnetometer, interrupt1Gpio);</span></span>
<span class="line"><span>    config.int2Pin = ATMO_PROPERTY(FXOS8700AccelerometerMagnetometer, interrupt2Gpio);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    switch(ATMO_PROPERTY(FXOS8700AccelerometerMagnetometer, motionDetectType))</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        case FXOS8700_NoDetect:</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            config.freefallEnabled = false;</span></span>
<span class="line"><span>            config.motionEnabled = false;</span></span>
<span class="line"><span>            config.tapDetectionEnabled = false;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        case FXOS8700_FreefallDetect:</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            config.freefallEnabled = true;</span></span>
<span class="line"><span>            config.motionEnabled = false;</span></span>
<span class="line"><span>            config.tapDetectionEnabled = false;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        case FXOS8700_MotionDetect:</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            config.freefallEnabled = false;</span></span>
<span class="line"><span>            config.motionEnabled = true;</span></span>
<span class="line"><span>            config.tapDetectionEnabled = false;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        case FXOS8700_TapDetect:</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            config.freefallEnabled = false;</span></span>
<span class="line"><span>            config.motionEnabled = false;</span></span>
<span class="line"><span>            config.tapDetectionEnabled = true;</span></span>
<span class="line"><span>            break; </span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            config.freefallEnabled = false;</span></span>
<span class="line"><span>            config.motionEnabled = false;  </span></span>
<span class="line"><span>            config.tapDetectionEnabled = false;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ATMO_FXOS8700_SetMotionDetectedAbilityHandle(ATMO_ABILITY(FXOS8700AccelerometerMagnetometer, detectMotion));</span></span>
<span class="line"><span>    ATMO_FXOS8700_SetFreefallDetectedAbilityHandle(ATMO_ABILITY(FXOS8700AccelerometerMagnetometer, detectFreefall));</span></span>
<span class="line"><span>    ATMO_FXOS8700_SetTapDetectedAbilityHandle(ATMO_ABILITY(FXOS8700AccelerometerMagnetometer, detectTap));</span></span>
<span class="line"><span>	ATMO_FXOS8700_Init(&amp;config);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_setEnabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>ATMO_FXOS8700_SetEnabled(true);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_setDisabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>ATMO_FXOS8700_SetEnabled(false);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_setEnabledDisabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>bool enabled = false;</span></span>
<span class="line"><span>ATMO_GetBool(in, &amp;enabled);</span></span>
<span class="line"><span>ATMO_FXOS8700_SetEnabled(enabled);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_getAccelData(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>    ATMO_3dFloatVector_t data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if( ATMO_FXOS8700_GetAccelData(&amp;data) != ATMO_FXOS8700_Status_Success )</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>        return ATMO_Status_Fail;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ATMO_CreateValue3dVectorFloat(out, &amp;data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_getAccelX(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_3dFloatVector_t data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if(ATMO_FXOS8700_GetAccelData(&amp;data) != ATMO_FXOS8700_Status_Success)</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>		return ATMO_Status_Fail;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_CreateValueFloat(out, data.x);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_getAccelY(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_3dFloatVector_t data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if(ATMO_FXOS8700_GetAccelData(&amp;data) != ATMO_FXOS8700_Status_Success)</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>		return ATMO_Status_Fail;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_CreateValueFloat(out, data.y);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_getAccelZ(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_3dFloatVector_t data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if(ATMO_FXOS8700_GetAccelData(&amp;data) != ATMO_FXOS8700_Status_Success)</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>		return ATMO_Status_Fail;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_CreateValueFloat(out, data.z);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_getMagData(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>    ATMO_3dFloatVector_t data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if( ATMO_FXOS8700_GetMagData(&amp;data) != ATMO_FXOS8700_Status_Success )</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>        return ATMO_Status_Fail;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ATMO_CreateValue3dVectorFloat(out, &amp;data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_getMagX(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_3dFloatVector_t data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if(ATMO_FXOS8700_GetMagData(&amp;data) != ATMO_FXOS8700_Status_Success)</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>		return ATMO_Status_Fail;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_CreateValueFloat(out, data.x);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_getMagY(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_3dFloatVector_t data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if(ATMO_FXOS8700_GetMagData(&amp;data) != ATMO_FXOS8700_Status_Success)</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>		return ATMO_Status_Fail;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_CreateValueFloat(out, data.y);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_getMagZ(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_3dFloatVector_t data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if(ATMO_FXOS8700_GetMagData(&amp;data) != ATMO_FXOS8700_Status_Success)</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>		return ATMO_Status_Fail;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_CreateValueFloat(out, data.z);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_detectTap(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_detectMotion(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_detectFreefall(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_enableFreefallDetection(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>if(ATMO_FXOS8700_EnableFreefallDetection() == ATMO_FXOS8700_Status_Success)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return ATMO_Status_Fail;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_enableMotionDetection(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>if(ATMO_FXOS8700_EnableMotionDetection() == ATMO_FXOS8700_Status_Success)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return ATMO_Status_Fail;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_enableTapDetection(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>if(ATMO_FXOS8700_EnableTapDetection() == ATMO_FXOS8700_Status_Success)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return ATMO_Status_Fail;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXOS8700AccelerometerMagnetometer_disableDetection(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>if(ATMO_FXOS8700_DisableAllDetection() == ATMO_FXOS8700_Status_Success)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return ATMO_Status_Fail;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXAS21002Gyroscope_trigger(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXAS21002Gyroscope_setup(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_FXAS21002_Config_t config;</span></span>
<span class="line"><span>	config.address = ATMO_PROPERTY(FXAS21002Gyroscope, i2cAddress);</span></span>
<span class="line"><span>	config.i2cDriverInstance = ATMO_PROPERTY(FXAS21002Gyroscope, i2cInstance);</span></span>
<span class="line"><span>	config.samplingRate = ATMO_PROPERTY(FXAS21002Gyroscope, samplingRate);</span></span>
<span class="line"><span>	ATMO_FXAS21002_Init(&amp;config);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXAS21002Gyroscope_setEnabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>ATMO_FXAS21002_SetEnabled(true);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXAS21002Gyroscope_setDisabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>ATMO_FXAS21002_SetEnabled(false);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXAS21002Gyroscope_setEnabledDisabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>bool enabled = false;</span></span>
<span class="line"><span>ATMO_GetBool(in, &amp;enabled);</span></span>
<span class="line"><span>ATMO_FXAS21002_SetEnabled(enabled);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXAS21002Gyroscope_getSensorData(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_FXAS21002_SensorData_t data;</span></span>
<span class="line"><span>	ATMO_3dFloatVector_t atmoVec;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if(ATMO_FXAS21002_GetSensorData(&amp;data) != ATMO_FXAS21002_Status_Success)</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>		return ATMO_Status_Fail;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	atmoVec.x = data.X;</span></span>
<span class="line"><span>	atmoVec.y = data.Y;</span></span>
<span class="line"><span>	atmoVec.z = data.Z;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_CreateValue3dVectorFloat(out, &amp;atmoVec);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXAS21002Gyroscope_getDpsX(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_FXAS21002_SensorData_t data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if(ATMO_FXAS21002_GetSensorData(&amp;data) != ATMO_FXAS21002_Status_Success)</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>		return ATMO_Status_Fail;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_CreateValueFloat(out, data.X);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXAS21002Gyroscope_getDpsY(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_FXAS21002_SensorData_t data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if(ATMO_FXAS21002_GetSensorData(&amp;data) != ATMO_FXAS21002_Status_Success)</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>		return ATMO_Status_Fail;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_CreateValueFloat(out, data.Y);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t FXAS21002Gyroscope_getDpsZ(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_FXAS21002_SensorData_t data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if(ATMO_FXAS21002_GetSensorData(&amp;data) != ATMO_FXAS21002_Status_Success)</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>		return ATMO_Status_Fail;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_CreateValueFloat(out, data.Z);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t MPL3115Pressure_trigger(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t MPL3115Pressure_setup(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	ATMO_MPL3115_Config_t config;</span></span>
<span class="line"><span>	config.address = ATMO_PROPERTY(MPL3115Pressure, i2cAddress);</span></span>
<span class="line"><span>	config.i2cDriverInstance = ATMO_PROPERTY(MPL3115Pressure, i2cInstance);</span></span>
<span class="line"><span>	config.MPLsettings.mode = MPL_MODE_PRESSURE;</span></span>
<span class="line"><span>	config.MPLsettings.oversample = MPL_OS_0;			// oversampling = 1</span></span>
<span class="line"><span>	config.MPLsettings.autoAcquisitionTime = MPL_ST_0;	// Auto acquisition time = 1s</span></span>
<span class="line"><span>	config.MPLsettings.pressureOffset = ATMO_PROPERTY(MPL3115Pressure, pressureOffset);	// Offset pressure correction = 4*-128 = -512Pa (8 bits signed integer)</span></span>
<span class="line"><span>	config.MPLsettings.altitudeOffset = ATMO_PROPERTY(MPL3115Pressure, altitudeOffset);	// Offset altitude correction = 128m (signed 8 bits integer)</span></span>
<span class="line"><span>	config.MPLsettings.tempOffset = ATMO_PROPERTY(MPL3115Pressure, tempOffset);			// Offset temperature correction -8°C (0.0625°C/LSB)</span></span>
<span class="line"><span>	config.MPLsettings.fifoMode = FIFO_DISABLED;		// FIFO mode disabled</span></span>
<span class="line"><span>	config.MPLsettings.fifoWatermark = 5;				// 6 bits to set the number of FIFO samples required to trigger a watermark interrupt.</span></span>
<span class="line"><span>	config.MPLsettings.fifoINTpin = FIFO_INT1;			// set pin INT1 as output for FIFO interrupt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ( ATMO_MPL3115_Init(&amp;config) == ATMO_MPL3115_Status_Success ) ? ATMO_Status_Success : ATMO_Status_Fail;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t MPL3115Pressure_setEnabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>ATMO_MPL3115_SetEnabled(true);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t MPL3115Pressure_setDisabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>ATMO_MPL3115_SetEnabled(false);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t MPL3115Pressure_setEnabledDisabled(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>bool enabled = false;</span></span>
<span class="line"><span>ATMO_GetBool(in, &amp;enabled);</span></span>
<span class="line"><span>ATMO_MPL3115_SetEnabled(enabled);</span></span>
<span class="line"><span>return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t MPL3115Pressure_readAltitude(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>    uint32_t altitudeMeters;</span></span>
<span class="line"><span>    if(ATMO_MPL3115_GetAltitude(&amp;altitudeMeters) != ATMO_MPL3115_Status_Success)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>        return ATMO_Status_Fail;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ATMO_CreateValueInt(out, (int)altitudeMeters);</span></span>
<span class="line"><span>    return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t MPL3115Pressure_readPressure(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>    uint32_t pressurePa;</span></span>
<span class="line"><span>    if(ATMO_MPL3115_GetPressure(&amp;pressurePa) != ATMO_MPL3115_Status_Success)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>        return ATMO_Status_Fail;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ATMO_CreateValueInt(out, (int)pressurePa);</span></span>
<span class="line"><span>    return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t MPL3115Pressure_readPressureKpa(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>    uint32_t pressurePa;</span></span>
<span class="line"><span>    if(ATMO_MPL3115_GetPressure(&amp;pressurePa) != ATMO_MPL3115_Status_Success)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ATMO_CreateValueVoid(out);</span></span>
<span class="line"><span>        return ATMO_Status_Fail;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ATMO_CreateValueInt(out, (int)(pressurePa/1000));</span></span>
<span class="line"><span>    return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t TempCharacteristic_trigger(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t TempCharacteristic_setup(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSAddService(</span></span>
<span class="line"><span>		ATMO_PROPERTY(TempCharacteristic, instance),</span></span>
<span class="line"><span>		&amp;ATMO_VARIABLE(TempCharacteristic, bleServiceHandle), </span></span>
<span class="line"><span>		ATMO_PROPERTY(TempCharacteristic, bleServiceUuid));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	uint8_t property = 0;</span></span>
<span class="line"><span>	uint8_t permission = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(TempCharacteristic, read) ? ATMO_BLE_Property_Read : 0;</span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(TempCharacteristic, write) ? ATMO_BLE_Property_Write : 0;</span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(TempCharacteristic, notify) ? ATMO_BLE_Property_Notify : 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	permission |= ATMO_PROPERTY(TempCharacteristic, read) ? ATMO_BLE_Permission_Read : 0;</span></span>
<span class="line"><span>	permission |= ATMO_PROPERTY(TempCharacteristic, write) ? ATMO_BLE_Permission_Write : 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_DATATYPE types[3] = {ATMO_PROPERTY(TempCharacteristic, writeDataType), ATMO_PROPERTY(TempCharacteristic, readDataType), ATMO_PROPERTY(TempCharacteristic, notifyDataType)};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSAddCharacteristic(</span></span>
<span class="line"><span>		ATMO_PROPERTY(TempCharacteristic, instance),</span></span>
<span class="line"><span>		&amp;ATMO_VARIABLE(TempCharacteristic, bleCharacteristicHandle), </span></span>
<span class="line"><span>		ATMO_VARIABLE(TempCharacteristic, bleServiceHandle), </span></span>
<span class="line"><span>		ATMO_PROPERTY(TempCharacteristic, bleCharacteristicUuid), </span></span>
<span class="line"><span>		property, permission, ATMO_GetMaxValueSize(3, 64, types));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSRegisterCharacteristicAbilityHandle(</span></span>
<span class="line"><span>		ATMO_PROPERTY(TempCharacteristic, instance),</span></span>
<span class="line"><span>		ATMO_VARIABLE(TempCharacteristic, bleCharacteristicHandle), </span></span>
<span class="line"><span>		ATMO_BLE_Characteristic_Written, </span></span>
<span class="line"><span>		ATMO_ABILITY(TempCharacteristic, written));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t TempCharacteristic_setValue(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Convert to the desired write data type</span></span>
<span class="line"><span>	ATMO_Value_t convertedValue;</span></span>
<span class="line"><span>	ATMO_InitValue(&amp;convertedValue);</span></span>
<span class="line"><span>	ATMO_CreateValueConverted(&amp;convertedValue, ATMO_PROPERTY(TempCharacteristic, readDataType), in);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSSetCharacteristic(</span></span>
<span class="line"><span>		ATMO_PROPERTY(TempCharacteristic, instance),</span></span>
<span class="line"><span>		ATMO_VARIABLE(TempCharacteristic, bleCharacteristicHandle),</span></span>
<span class="line"><span>		convertedValue.size, </span></span>
<span class="line"><span>		(uint8_t *)convertedValue.data,</span></span>
<span class="line"><span>		NULL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_FreeValue(&amp;convertedValue);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t TempCharacteristic_written(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_CreateValueConverted(out, ATMO_PROPERTY(TempCharacteristic, writeDataType), in);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t TempCharacteristic_subscibed(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t TempCharacteristic_unsubscribed(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t AirCharacteristic_trigger(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t AirCharacteristic_setup(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSAddService(</span></span>
<span class="line"><span>		ATMO_PROPERTY(AirCharacteristic, instance),</span></span>
<span class="line"><span>		&amp;ATMO_VARIABLE(AirCharacteristic, bleServiceHandle), </span></span>
<span class="line"><span>		ATMO_PROPERTY(AirCharacteristic, bleServiceUuid));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	uint8_t property = 0;</span></span>
<span class="line"><span>	uint8_t permission = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(AirCharacteristic, read) ? ATMO_BLE_Property_Read : 0;</span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(AirCharacteristic, write) ? ATMO_BLE_Property_Write : 0;</span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(AirCharacteristic, notify) ? ATMO_BLE_Property_Notify : 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	permission |= ATMO_PROPERTY(AirCharacteristic, read) ? ATMO_BLE_Permission_Read : 0;</span></span>
<span class="line"><span>	permission |= ATMO_PROPERTY(AirCharacteristic, write) ? ATMO_BLE_Permission_Write : 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_DATATYPE types[3] = {ATMO_PROPERTY(AirCharacteristic, writeDataType), ATMO_PROPERTY(AirCharacteristic, readDataType), ATMO_PROPERTY(AirCharacteristic, notifyDataType)};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSAddCharacteristic(</span></span>
<span class="line"><span>		ATMO_PROPERTY(AirCharacteristic, instance),</span></span>
<span class="line"><span>		&amp;ATMO_VARIABLE(AirCharacteristic, bleCharacteristicHandle), </span></span>
<span class="line"><span>		ATMO_VARIABLE(AirCharacteristic, bleServiceHandle), </span></span>
<span class="line"><span>		ATMO_PROPERTY(AirCharacteristic, bleCharacteristicUuid), </span></span>
<span class="line"><span>		property, permission, ATMO_GetMaxValueSize(3, 64, types));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSRegisterCharacteristicAbilityHandle(</span></span>
<span class="line"><span>		ATMO_PROPERTY(AirCharacteristic, instance),</span></span>
<span class="line"><span>		ATMO_VARIABLE(AirCharacteristic, bleCharacteristicHandle), </span></span>
<span class="line"><span>		ATMO_BLE_Characteristic_Written, </span></span>
<span class="line"><span>		ATMO_ABILITY(AirCharacteristic, written));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t AirCharacteristic_setValue(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Convert to the desired write data type</span></span>
<span class="line"><span>	ATMO_Value_t convertedValue;</span></span>
<span class="line"><span>	ATMO_InitValue(&amp;convertedValue);</span></span>
<span class="line"><span>	ATMO_CreateValueConverted(&amp;convertedValue, ATMO_PROPERTY(AirCharacteristic, readDataType), in);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSSetCharacteristic(</span></span>
<span class="line"><span>		ATMO_PROPERTY(AirCharacteristic, instance),</span></span>
<span class="line"><span>		ATMO_VARIABLE(AirCharacteristic, bleCharacteristicHandle),</span></span>
<span class="line"><span>		convertedValue.size, </span></span>
<span class="line"><span>		(uint8_t *)convertedValue.data,</span></span>
<span class="line"><span>		NULL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_FreeValue(&amp;convertedValue);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t AirCharacteristic_written(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_CreateValueConverted(out, ATMO_PROPERTY(AirCharacteristic, writeDataType), in);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t AirCharacteristic_subscibed(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t AirCharacteristic_unsubscribed(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t AccelCharacteristic_trigger(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t AccelCharacteristic_setup(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSAddService(</span></span>
<span class="line"><span>		ATMO_PROPERTY(AccelCharacteristic, instance),</span></span>
<span class="line"><span>		&amp;ATMO_VARIABLE(AccelCharacteristic, bleServiceHandle), </span></span>
<span class="line"><span>		ATMO_PROPERTY(AccelCharacteristic, bleServiceUuid));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	uint8_t property = 0;</span></span>
<span class="line"><span>	uint8_t permission = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(AccelCharacteristic, read) ? ATMO_BLE_Property_Read : 0;</span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(AccelCharacteristic, write) ? ATMO_BLE_Property_Write : 0;</span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(AccelCharacteristic, notify) ? ATMO_BLE_Property_Notify : 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	permission |= ATMO_PROPERTY(AccelCharacteristic, read) ? ATMO_BLE_Permission_Read : 0;</span></span>
<span class="line"><span>	permission |= ATMO_PROPERTY(AccelCharacteristic, write) ? ATMO_BLE_Permission_Write : 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_DATATYPE types[3] = {ATMO_PROPERTY(AccelCharacteristic, writeDataType), ATMO_PROPERTY(AccelCharacteristic, readDataType), ATMO_PROPERTY(AccelCharacteristic, notifyDataType)};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSAddCharacteristic(</span></span>
<span class="line"><span>		ATMO_PROPERTY(AccelCharacteristic, instance),</span></span>
<span class="line"><span>		&amp;ATMO_VARIABLE(AccelCharacteristic, bleCharacteristicHandle), </span></span>
<span class="line"><span>		ATMO_VARIABLE(AccelCharacteristic, bleServiceHandle), </span></span>
<span class="line"><span>		ATMO_PROPERTY(AccelCharacteristic, bleCharacteristicUuid), </span></span>
<span class="line"><span>		property, permission, ATMO_GetMaxValueSize(3, 64, types));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSRegisterCharacteristicAbilityHandle(</span></span>
<span class="line"><span>		ATMO_PROPERTY(AccelCharacteristic, instance),</span></span>
<span class="line"><span>		ATMO_VARIABLE(AccelCharacteristic, bleCharacteristicHandle), </span></span>
<span class="line"><span>		ATMO_BLE_Characteristic_Written, </span></span>
<span class="line"><span>		ATMO_ABILITY(AccelCharacteristic, written));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t AccelCharacteristic_setValue(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Convert to the desired write data type</span></span>
<span class="line"><span>	ATMO_Value_t convertedValue;</span></span>
<span class="line"><span>	ATMO_InitValue(&amp;convertedValue);</span></span>
<span class="line"><span>	ATMO_CreateValueConverted(&amp;convertedValue, ATMO_PROPERTY(AccelCharacteristic, readDataType), in);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSSetCharacteristic(</span></span>
<span class="line"><span>		ATMO_PROPERTY(AccelCharacteristic, instance),</span></span>
<span class="line"><span>		ATMO_VARIABLE(AccelCharacteristic, bleCharacteristicHandle),</span></span>
<span class="line"><span>		convertedValue.size, </span></span>
<span class="line"><span>		(uint8_t *)convertedValue.data,</span></span>
<span class="line"><span>		NULL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_FreeValue(&amp;convertedValue);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t AccelCharacteristic_written(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_CreateValueConverted(out, ATMO_PROPERTY(AccelCharacteristic, writeDataType), in);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t AccelCharacteristic_subscibed(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t AccelCharacteristic_unsubscribed(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t GyroCharacteristic_trigger(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t GyroCharacteristic_setup(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSAddService(</span></span>
<span class="line"><span>		ATMO_PROPERTY(GyroCharacteristic, instance),</span></span>
<span class="line"><span>		&amp;ATMO_VARIABLE(GyroCharacteristic, bleServiceHandle), </span></span>
<span class="line"><span>		ATMO_PROPERTY(GyroCharacteristic, bleServiceUuid));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	uint8_t property = 0;</span></span>
<span class="line"><span>	uint8_t permission = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(GyroCharacteristic, read) ? ATMO_BLE_Property_Read : 0;</span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(GyroCharacteristic, write) ? ATMO_BLE_Property_Write : 0;</span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(GyroCharacteristic, notify) ? ATMO_BLE_Property_Notify : 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	permission |= ATMO_PROPERTY(GyroCharacteristic, read) ? ATMO_BLE_Permission_Read : 0;</span></span>
<span class="line"><span>	permission |= ATMO_PROPERTY(GyroCharacteristic, write) ? ATMO_BLE_Permission_Write : 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_DATATYPE types[3] = {ATMO_PROPERTY(GyroCharacteristic, writeDataType), ATMO_PROPERTY(GyroCharacteristic, readDataType), ATMO_PROPERTY(GyroCharacteristic, notifyDataType)};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSAddCharacteristic(</span></span>
<span class="line"><span>		ATMO_PROPERTY(GyroCharacteristic, instance),</span></span>
<span class="line"><span>		&amp;ATMO_VARIABLE(GyroCharacteristic, bleCharacteristicHandle), </span></span>
<span class="line"><span>		ATMO_VARIABLE(GyroCharacteristic, bleServiceHandle), </span></span>
<span class="line"><span>		ATMO_PROPERTY(GyroCharacteristic, bleCharacteristicUuid), </span></span>
<span class="line"><span>		property, permission, ATMO_GetMaxValueSize(3, 64, types));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSRegisterCharacteristicAbilityHandle(</span></span>
<span class="line"><span>		ATMO_PROPERTY(GyroCharacteristic, instance),</span></span>
<span class="line"><span>		ATMO_VARIABLE(GyroCharacteristic, bleCharacteristicHandle), </span></span>
<span class="line"><span>		ATMO_BLE_Characteristic_Written, </span></span>
<span class="line"><span>		ATMO_ABILITY(GyroCharacteristic, written));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t GyroCharacteristic_setValue(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Convert to the desired write data type</span></span>
<span class="line"><span>	ATMO_Value_t convertedValue;</span></span>
<span class="line"><span>	ATMO_InitValue(&amp;convertedValue);</span></span>
<span class="line"><span>	ATMO_CreateValueConverted(&amp;convertedValue, ATMO_PROPERTY(GyroCharacteristic, readDataType), in);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSSetCharacteristic(</span></span>
<span class="line"><span>		ATMO_PROPERTY(GyroCharacteristic, instance),</span></span>
<span class="line"><span>		ATMO_VARIABLE(GyroCharacteristic, bleCharacteristicHandle),</span></span>
<span class="line"><span>		convertedValue.size, </span></span>
<span class="line"><span>		(uint8_t *)convertedValue.data,</span></span>
<span class="line"><span>		NULL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_FreeValue(&amp;convertedValue);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t GyroCharacteristic_written(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_CreateValueConverted(out, ATMO_PROPERTY(GyroCharacteristic, writeDataType), in);</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t GyroCharacteristic_subscibed(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t GyroCharacteristic_unsubscribed(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t PressureCharacteristic_trigger(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t PressureCharacteristic_setup(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSAddService(</span></span>
<span class="line"><span>		ATMO_PROPERTY(PressureCharacteristic, instance),</span></span>
<span class="line"><span>		&amp;ATMO_VARIABLE(PressureCharacteristic, bleServiceHandle), </span></span>
<span class="line"><span>		ATMO_PROPERTY(PressureCharacteristic, bleServiceUuid));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	uint8_t property = 0;</span></span>
<span class="line"><span>	uint8_t permission = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(PressureCharacteristic, read) ? ATMO_BLE_Property_Read : 0;</span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(PressureCharacteristic, write) ? ATMO_BLE_Property_Write : 0;</span></span>
<span class="line"><span>	property |= ATMO_PROPERTY(PressureCharacteristic, notify) ? ATMO_BLE_Property_Notify : 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	permission |= ATMO_PROPERTY(PressureCharacteristic, read) ? ATMO_BLE_Permission_Read : 0;</span></span>
<span class="line"><span>	permission |= ATMO_PROPERTY(PressureCharacteristic, write) ? ATMO_BLE_Permission_Write : 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_DATATYPE types[3] = {ATMO_PROPERTY(PressureCharacteristic, writeDataType), ATMO_PROPERTY(PressureCharacteristic, readDataType), ATMO_PROPERTY(PressureCharacteristic, notifyDataType)};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSAddCharacteristic(</span></span>
<span class="line"><span>		ATMO_PROPERTY(PressureCharacteristic, instance),</span></span>
<span class="line"><span>		&amp;ATMO_VARIABLE(PressureCharacteristic, bleCharacteristicHandle), </span></span>
<span class="line"><span>		ATMO_VARIABLE(PressureCharacteristic, bleServiceHandle), </span></span>
<span class="line"><span>		ATMO_PROPERTY(PressureCharacteristic, bleCharacteristicUuid), </span></span>
<span class="line"><span>		property, permission, ATMO_GetMaxValueSize(3, 64, types));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSRegisterCharacteristicAbilityHandle(</span></span>
<span class="line"><span>		ATMO_PROPERTY(PressureCharacteristic, instance),</span></span>
<span class="line"><span>		ATMO_VARIABLE(PressureCharacteristic, bleCharacteristicHandle), </span></span>
<span class="line"><span>		ATMO_BLE_Characteristic_Written, </span></span>
<span class="line"><span>		ATMO_ABILITY(PressureCharacteristic, written));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return ATMO_Status_Success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>ATMO_Status_t PressureCharacteristic_setValue(ATMO_Value_t *in, ATMO_Value_t *out) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// Convert to the desired write data type</span></span>
<span class="line"><span>	ATMO_Value_t convertedValue;</span></span>
<span class="line"><span>	ATMO_InitValue(&amp;convertedValue);</span></span>
<span class="line"><span>	ATMO_CreateValueConverted(&amp;convertedValue, ATMO_PROPERTY(PressureCharacteristic, readDataType), in);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_BLE_GATTSSetCharacteristic(</span></span>
<span class="line"><span>		ATMO_PROPERTY(PressureCharacteristic, instance),</span></span>
<span class="line"><span>		ATMO_VARIABLE(PressureCharacteristic, bleCharacteristicHandle),</span></span>
<span class="line"><span>		convertedValue.size, </span></span>
<span class="line"><span>		(uint8_t *)convertedValue.data,</span></span>
<span class="line"><span>		NULL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ATMO_FreeValue(&amp;convertedValue);</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This file has been truncated, please download it to see its full contents.</span></span></code></pre></div><p><br><img src="`+l+'" alt=""></p>',38)])])}const M=a(i,[["render",c]]);export{O as __pageData,M as default};
