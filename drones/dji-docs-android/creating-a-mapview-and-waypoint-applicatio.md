# Creating a MapView and Waypoint Applicatio

> Note：This Tutorial and Sample Project is developed based on DJI Android SDK v2.4, an update version for Android SDK v3.1.1 will be published soon.

### Creating a MapView and Waypoint Application <a href="#creating-a-mapview-and-waypoint-application" id="creating-a-mapview-and-waypoint-application"></a>

* [Using the DJI PC Simulator](broken-reference)
  * [1. Introduction](broken-reference)
  * [2. Install and setup DJI PC Simulator](broken-reference)
  * [3. How to use DJI PC Simulator](broken-reference)
* [Upgrade the Aircraft's Firmware](broken-reference)
* [Setup the Map View](broken-reference)
  * [1. Create a map view](broken-reference)
  * [2. Locate the Aircraft](broken-reference)
  * [3. Add and clear the waypoints](broken-reference)
* [Configure the Navigation Task](broken-reference)
* [Upload the Task to the Aircraft](broken-reference)
* [Start and Stop the DJIGroundStationTask](broken-reference)
* [Summary](broken-reference)

_If you come across any mistakes or bugs in this tutorial, please let us know using a Github issue, a post on the DJI forum, or commenting in the Gitbook. Please feel free to send us Github pull request and help us fix any issues. However, all pull requests related to document must follow the_ [_document style_](https://github.com/dji-sdk/Mobile-SDK-Tutorial/issues/19)

***

In this tutorial, you will learn how to setup the DJI PC Simulator, update the firmware of Inspire 1, Phantom 3 Professional and Phantom 3 to its beta version, and how to test the GroundStation API with DJI PC Simulator. Also, you will get in touch with the basic process of using DJI GroundStation's Waypoint feature. So let's get started!

You can download the demo project for this tutorial from: [https://github.com/DJI-Mobile-SDK/Android-GSDemo-GoogleMap.git](https://github.com/DJI-Mobile-SDK/Android-GSDemo-GoogleMap.git)

### Using the DJI PC Simulator <a href="#using-the-dji-pc-simulator" id="using-the-dji-pc-simulator"></a>

#### 1. Introduction <a href="#id-1-introduction" id="id-1-introduction"></a>

The DJI PC Simulator is a flight simulator dedicated for SDK developers. The simulator creates a virtual 3D environment and transfer the flight data to the PC via the UDP protocol for data analysis purpose.

**Supported Operating Systems**: Windows 7, Windows 8 and Windows 8.1

**Supported DJI Platforms**: Matrice 100, Inspire 1, Phantom 3 Professional and Advanced

#### 2. Install and setup DJI PC Simulator <a href="#id-2-install-and-setup-dji-pc-simulator" id="id-2-install-and-setup-dji-pc-simulator"></a>

Download the DJI PC Simulator installation files and WIN Driver from : [https://developer.dji.com/mobile-sdk/downloads](https://developer.dji.com/mobile-sdk/downloads)

* DJI PC Simulator Installer & User Manual V1.0
* WIN Driver Installer

You must install the WIN driver before installing the simulator. For Mac users, it is recommended to run the simulator in a virtual environment(e.g. VMWare or Parallels Desktop). Double click the DJI\_WIN\_Driver\_Installer.exe to install the windows driver. If the window prompts the following message **"Please power on MC and connect it to PC via USB!"** , ignore it and click "YES" to follow the on-screen instruction and complete the installation.

Finally, double click the **DJISimulator-Installer.exe** file and follow the on-screen instruction to complete the installation.

#### 3. How to use DJI PC Simulator <a href="#id-3-how-to-use-dji-pc-simulator" id="id-3-how-to-use-dji-pc-simulator"></a>

**1.** The Simulator Config window will display upon the launching of the DJI PC Simulator. Set appropriate Latitude and Longitude values as the home point. The "SN" denotes the connected aircraft's serial number.

***

**Note**:

* Ensure the home point is set outside of the No Fly Zone.
* Select "Show Log Window" under the "Log Settings" tag to show the flight lot as shown below:

***

**2**. Connect the aircraft to your PC via a Micro USB cable, and then power on the aircraft and the remote controller. Click Display Simulator. You can see the screenshot as below:

***

**Note**:

* DO NOT launch the DJI Pilot app when the DJI PC Simulator is running.
* Remove the propeller from the aircraft when using the DJI PC Simulator.

***

**3**. Start using the simulator by clicking Start Simulation button. You can use the remote controller to change the course of the aircraft or bring it back with the Return-to-Home function. Enable API Control to allow control from a mobile or onboard device. World X, Y, Z represents the North-South, East- West, and Up-Down axes (take the North, East and Up directions as positive).

**4**. Left-click, hold on and drag to change the view angle. Scroll to zoom in and zoom out.

**5**. Click Stop Simulation to stop the simulation. Close the simulator, and power off the aircraft and the remote controller after use.

**Important**: If you want to stop midway through the GroundStation Waypoint Mission, you should click **Stop Simulation** firstly, otherwise the simulator may run the previous groundstation mission when you start it again, it may be confused.

For more info about DJI PC Simulator, please check the **DJI PC Simulator user manual.pdf** file, which you download along with the simulator.--- **Note**:

### Upgrade the Aircraft's Firmware <a href="#upgrade-the-aircrafts-firmware" id="upgrade-the-aircrafts-firmware"></a>

Download and update the aircraft's firmware to its beta version before attempting to use the DJI Mobile SDK API.

Choose and download one of the following firmware from : [https://developer.dji.com/mobile-sdk/downloads](https://developer.dji.com/mobile-sdk/downloads) :

* Phantom 3 Professional Firmware
* Inspire 1 Firmware

It is not required to update Remote Controller's firmware. Place the **bin** file in the SD card and insert it to the Micro USB port on the camera, and restart the aircraft and then the update process will start automatically. It may take 10 \~ 30 minutes to finish.

Verify the result via the beeping pattern from the gimbals or the blinking pattern of the camera status indicator. Refer to the table below for the beeping pattern:

* Upgrading: B B B B...
* Upgrade Success: B BB...
* Upgrade Failed: B...
* Critical Error: D D D...

Also, you can check the firmware upgrade status by checking the **txt** file generated during the upgrade process.

### Setup the Map View <a href="#setup-the-map-view" id="setup-the-map-view"></a>

#### 1. Create a map view <a href="#id-1-create-a-map-view" id="id-1-create-a-map-view"></a>

Use map view to display waypoints and show the flight route of the aircraft when the flight task is being executed. We take Google map for an example.

Follow the setup guides in Google's official documentation [https://developers.google.com/maps/documentation/android/config](https://developers.google.com/maps/documentation/android/config). to add a Google map in your Android application.

(1) Install the Android SDK.

Installed the Android SDK through the **Android SDK Manager**. Enter the **Android SDK Manager** by clicking "Window" from the menu, then clicking "Android SDK Manager".

(2) Install and set up the Google Play services SDK by referring to the setup guide presented in: [https://developers.google.com/android/guides/setup](https://developers.google.com/android/guides/setup)

**The Google Maps Android API** is included in the Google Play services SDK. Install the Google Play services SDK by **Android SDK Manager**&#x20;

After the Google Play services SDK is installed, locate the library project under the ADT path "xxx/\\/extras/google/google\_play\_services/libproject/google-play-services\_lib". Copy the library project to the location where you store your Android app projects.

Import the library project into your Eclipse workspace. Click **File>Import**, then select **Android>Existing Android Code into Workspace**, and access the copy of the library project to import it.

Add Google Play services library reference to your project by right clicking **Package Explorer**, then Click **Properties>Android**. Click **Add...** to add **google-play-services\_lib**.

After Google Play services library is added as a dependency for your project. Open **manifest** file for your app and add the following tag as a child of the **\\** element:

```
    <meta-data android:name="com.google.android.gms.version"
        android:value="@integer/google_play_services_version" />
```

You can now start using the Google Play services APIs to develop your project.

(3) Obtain API key by referring to : [https://developers.google.com/maps/documentation/android/signup](https://developers.google.com/maps/documentation/android/signup)

1.Obtain App Certificate.

Obtain the **SHA-1 fingerprint** of the debug certificate or release certificate by using the command **keytool**. Use the **SHA-1 fingerprint** for the debug certificate. When using Eclipse with ADT, you can obtain the **SHA-1 fingerprint** by selecting **Window>Preferences>Android>Build**.

2.Register a project in the Google Developers Console and add the Google Maps Android API v2 as a service for the project.

Login the Google Developer console [https://console.developers.google.com](https://console.developers.google.com/). Select existing or create a project. Expand **APIs & auth** on the sidebar. Then select **APIs**. Select **Enabled APIs** link in the API section to browse all of the enabled APIs. Ensure the Android API is among the list of enabled APIs. If you have not enabled it, select the API from the list of APIs, then select the Enable API button to enable the Android API. The only API you need is the **Google Maps Android API**.

3.Create an Android API key

Click the project. In the sidebar on the left, select **Credentials**. If your project doesn't already have a **Key for Android applications**, create an API key by clicking **Create New Key** and then **Android key**. In the resulting dialog, enter your app's SHA-1 fingerprint, then a semicolon(;) then your app's package name. The Google Developers Console displays a section titled **Key for Android applications** followed by your API key.&#x20;

4.Add the API key to your application

In AndroidManifest.xml, add the following element as a child of \ element,

```
    <meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="API_KEY" />
```

Substitute your API key for API\_KEY in the value attribute.

(4) Add the required settings to your application's manifest.

1.Specify Android permissions: specify the permissions your application needs, by adding **\\** elements as children of the \ element in **AndroidManifest.xml**.

```
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
```

For the details of description on the permissions, refer to [https://developers.google.com/maps/documentation/android/config](https://developers.google.com/maps/documentation/android/config).

1. Requirement for OpenGL ES version 2

```
    <uses-feature android:glEsVersion="0x00020000" android:required="true" />
```

After the above configurations are done, now you can use the following codes to load Google map.

First, add the following xml codes in the app's layout where you want to load the map(In our demo, it is **activity\_gsdemo.xml**):

```
    ...
    <fragment
        android:id="@+id/map"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        class="com.google.android.gms.maps.SupportMapFragment" />
    ...
```

Second, add the following codes in your Activity.

```
    import android.os.Bundle;
    import android.support.v4.app.FragmentActivity;
    import com.google.android.gms.maps.CameraUpdateFactory;
    import com.google.android.gms.maps.GoogleMap;
    import com.google.android.gms.maps.OnMapReadyCallback;
    import com.google.android.gms.maps.SupportMapFragment;
    import com.google.android.gms.maps.model.LatLng;
    import com.google.android.gms.maps.model.MarkerOptions;

    ...

    public class GSDemoActivity extends FragmentActivity implements OnMapClickListener, OnMapReadyCallback{
        private GoogleMap aMap;

        ...

        @Override
        protected void onCreate(Bundle savedInstanceState){
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_gsdemo);
            SupportMapFragment mapFragment=(SupportMapFragment) getSupportFragmentManager().findFragmentById(R.id.map);
            mapFragment.getMapAsync(this);

        ...

        }

        ...

        @Override
        public void onMapReady(GoogleMap googleMap){
            if(aMap == null){
                aMap = googleMap;
                ...
            }

            LatLng Shenzhen = new LatLng(22.5500, 114.1000);
            googleMap.addMarker(new MarkerOptions().position(Shenzhen).title("Marker in Shenzhen"));
            googleMap.moveCamera(CameraUpdateFactory.newLatLng(Shenzhen));
        }

        ...

    }
```

**Note:** As class can only extend one parent class, hence, GSDemoActivity can not extend DemoBaseActivity as it has already extended FragmentActivity. Here we add **ServiceManager.getInstance().pauseService(false);** in GSDemoActivity's callback **onResume**, and add **ServiceManager.getInstance().pauseService(true);** in GSDemoActivity's callback **onPause**.

```
     @Override
    protected void onResume(){
        super.onResume();
        DJIDrone.getDjiMC().startUpdateTimer(1000); // Start the update timer for MC to update info
        ServiceManager.getInstance().pauseService(false);
    }

    @Override
    protected void onPause(){
        super.onPause();
        DJIDrone.getDjiMC().stopUpdateTimer(); // Stop the update timer for MC to update info
        ServiceManager.getInstance().pauseService(true);
    }
```

Now you can see your app loading a Google map by following the instructions to enable developer options on your Android device, connect your device to the computer through USB cable, build and run your app. The loading of the Google map will require your Android device having installed the Google Play service.&#x20;

#### 2. Locate the Aircraft <a href="#id-2-locate-the-aircraft" id="id-2-locate-the-aircraft"></a>

When Google map is successfully loaded. You can then use a marker on the map to show the loacation of the aircraft based on the coordinates provided by **droneLocationLatitude**, **droneLocationLongitude** in **DJIMainControllerSystemState**. Implement **private void updateDroneLocation()** function to update the location of the aircraft.

Implement **public interface DJIMcuUpdateStateCallBack** interface to obtain the location of the aircraft. We set up this interface in MainController module of DJI SDK using **public void setMcuUpdateStateCallBack(DJIMcuUpdateStateCallBack mCallBack)**. Then we update the marker that shows the aircraft's location on the map. Code example are listed as below:

```
    // Update the drone location based on states from MCU.
    private void updateDroneLocation(){
        // Set the McuUpdateSateCallBack
        mMcuUpdateStateCallBack = new DJIMcuUpdateStateCallBack(){

            @Override
            public void onResult(DJIMainControllerSystemState state) {
                droneLocationLat = state.droneLocationLatitude;
                droneLocationLng = state.droneLocationLongitude;
                Log.e(TAG, "drone lat "+state.droneLocationLatitude);
                Log.e(TAG, "drone lat "+state.homeLocationLatitude);
                Log.e(TAG, "drone lat "+state.droneLocationLongitude);
                Log.e(TAG, "drone lat "+state.homeLocationLongitude);
            }     
        };
        Log.e(TAG,"setMcuUpdateState");
        DJIDrone.getDjiMC().setMcuUpdateStateCallBack(mMcuUpdateStateCallBack);

        // The following codes show the aircraft location on the map using a marker
        LatLng pos = new LatLng(droneLocationLat, droneLocationLng);
        //Create MarkerOptions object
        final MarkerOptions markerOptions = new MarkerOptions();
        markerOptions.position(pos);
        markerOptions.icon(BitmapDescriptorFactory.fromResource(R.drawable.aircraft));

        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (droneMarker != null) {
                    droneMarker.remove();
                }

                droneMarker = aMap.addMarker(markerOptions);
            }
          });
    }
```

We will call this function after initiating the SDK APIs and calling **DJIDrone.connectToDrone()**. Please note that when calling the SDK APIs for the aircraft's modules are only possible after the activation is completed. We call the above function after the **checkPermission** returns 0:

```
    new Thread(){
            public void run() {
                try {
                    DJIDrone.checkPermission(getApplicationContext(), new DJIGerneralListener() {

                        @Override
                        public void onGetPermissionResult(int result) {
                            // TODO Auto-generated method stub
                            if (result == 0) {
                                handler.sendMessage(handler.obtainMessage(SHOWDIALOG, DJIError.getCheckPermissionErrorDescription(result)));
                                updateDroneLocation(); // Obtain the drone's lat and lng from MCU.
                            } else {
                                handler.sendMessage(handler.obtainMessage(SHOWDIALOG, getString(R.string.demo_activation_error)+DJIError.getCheckPermissionErrorDescription(result)+"\n"+getString(R.string.demo_activation_error_code)+result));

                            }
                        }
                    });
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }.start();
```

To update the Main Controller system state, we still need to call the **public boolean startUpdateTimer(int interval)** in the callback **onResume**. We can pause timer for updating by calling **public boolean stopUpdateTimer()** in the callback **onPause**.

```
    @Override
    protected void onResume(){
        super.onResume();
        DJIDrone.getDjiMC().startUpdateTimer(1000); // Start the update timer for MC to update info
        ServiceManager.getInstance().pauseService(false);
    }

    @Override
    protected void onPause(){
        super.onPause();
        DJIDrone.getDjiMC().stopUpdateTimer(); // Stop the update timer for MC to update info
        ServiceManager.getInstance().pauseService(true);
    }
```

When we open the app, the function **updateDroneLocation()** will be called after the key activation.

Meanwhile, we implement a button "Locate" on UI. When users click the button, the function **updateDroneLocation()** will be called again.

To implement the button "Locate", first, add a Button view in the **activity\_gsdemo.xml**

```

    ...

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal">

        <Button
            android:id="@+id/locate"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="Locate"
            android:layout_weight="1"/>

    ...

    </LinearLayout>

    ...
```

Second, add **OnClickListener** Interface in the activity(**GSDemoActivity** in the demo example). The activity implements the interface **public class GSDemoActivity extends ... implements OnClickListener ...**, and implements the code for the method **public void onClick(View v)**,

```
    @Override
    public void onClick(View v) {
        switch(v.getId()){
            case R.id.locate:{
                updateDroneLocation();
                cameraUpdate(); //
                break;
            }
            ...
            default:
                break; 
        }    

    }
```

Third, register the "Locate" button in the activity

```
    private Button locate;

    ...

    @Override
    protected void onCreate(Bundle savedInstanceState){
        ...
        locate = (Button) findViewById(R.id.locate);
        ...
        locate.setOnClickListener(this);
        ... 
    }
```

Build and run the app to check the location function. Connect to aircraft to the computer through a USB cable and Launch the DJI PC simulator:

Click the "locate" button, the following GUI prompt to show the location of the aircraft in the map.

#### 3. Add and clear the waypoints <a href="#id-3-add-and-clear-the-waypoints" id="id-3-add-and-clear-the-waypoints"></a>

It is critical to enable user to add waypoints in Ground Station intuitively. We will then demonstrate how to add waypoints on the map. Place a "Add" button. Whenever we click button "add", a switch variable "isAdd" will turn into "true", and the text of the button shown as "Exit". We have now entered waypoints adding mode: Click and add the desirable location in the map as a waypoint. A marker will be displayed on the map to shows that a new waypoint has been added. Click "Exit" button to exit waypoint adding mode when you have placed all the desirable waypoints in the map. The listener for clicking map is shown as follows:

```
     @Override
    public void onMapClick(LatLng point) {
        if (isAdd == true){
            markWaypoint(point);
            DJIGroundStationWaypoint mDJIGroundStationWaypoint = new DJIGroundStationWaypoint(point.latitude, point.longitude);
            mGroundStationTask.addWaypoint(mDJIGroundStationWaypoint);
            //Add waypoints to Waypoint arraylist;
        }else{
            // Do not add waypoint;
        }

    }
```

When we click on the map, the codes within the **public void onMapClick(LatLng point)** will be executed. an instance of **DJIGroundStationWaypoint** will be created and added to **mGroundStationTask**.

We add the "clear" button to clear all the added waypoints. All the markers on the map will be erased and all waypoints will be removed from **mGroundStationTask**.

```
     @Override
    public void onClick(View v) {
        // TODO Auto-generated method stub
        switch (v.getId()) {

              ...

            case R.id.clear:{
                runOnUiThread(new Runnable(){
                    @Override
                    public void run() {
                        aMap.clear();
                    }

                });            
                mGroundStationTask.RemoveAllWaypoint(); // Remove all the waypoints added to the task
                break;
            }

              ...

        }
    }
```

### Configure the Navigation Task <a href="#configure-the-navigation-task" id="configure-the-navigation-task"></a>

As you see, the project's code structure was simple and not robust. In order to develop it further in this tutorial, it will need to be re-factored and we will need to add more UI elements.

Here, as a simple example, we just show how to configure the waypoints. Users can developer their own codes to set up the waypoint sequentially.

We first add a new button "Config". When users click the button, a new configuration dialog will be popped up.

We use a dialog to load the configuration setting view. The settings include the altitude of waypoints, whether to repeat the task, the horizontal speed of the aircraft during the task, the action after the task finished, the heading of the aircraft during the task (altitude and speed is a field of class **DJIGroundStationWaypoint**. Here we set all the waypoints' altitude or speed the same as a simple example. Users can also set different values for different waypoints' altitude or speed). We do not show the codes for the dialog here. When users click "Finish" after inputting a value or selecting an option for each item, the following function will be called to set the fields of **DJIGroundStationTask** and **DJIGroundStationWaypoint**:

```
        private void configGroundStationTask(){
        mGroundStationTask.isLoop = repeatGSTask;
        mGroundStationTask.finishAction=actionAfterFinishTask;
        mGroundStationTask.movingMode = heading;
        for (int i=0; i<mGroundStationTask.wayPointCount; i++){
            mGroundStationTask.getWaypointAtIndex(i).speed = speedGSTask;
            mGroundStationTask.getWaypointAtIndex(i).altitude = altitude;
        }
    }
```

### Upload the Task to the Aircraft <a href="#upload-the-task-to-the-aircraft" id="upload-the-task-to-the-aircraft"></a>

We have configured the **DJIGroundStationTask**. However, the task is currently stored on the mobile device. We need to upload the task to the aircraft before imitate the task. Click "Upload" button to upload the task to aircraft. The following function will be executed when "Upload" button is clicked:

```
       private void uploadGroundStationTask(){
        DJIDrone.getDjiGroundStation().openGroundStation(new DJIGroundStationExecuteCallBack(){

            @Override
            public void onResult(GroundStationResult result) {
                // TODO Auto-generated method stub
                String ResultsString = "return code =" + result.toString();
                handler.sendMessage(handler.obtainMessage(SHOWTOAST, ResultsString));

                if (result == GroundStationResult.GS_Result_Success) {
                    DJIDrone.getDjiGroundStation().uploadGroundStationTask(mGroundStationTask, new DJIGroundStationExecuteCallBack(){

                        @Override
                        public void onResult(GroundStationResult result) {
                            // TODO Auto-generated method stub
                            String ResultsString = "return code =" + result.toString();
                            handler.sendMessage(handler.obtainMessage(SHOWTOAST, ResultsString));
                        }

                    });
                }
            }

        });
    }
```

We first need to call **public void openGroundStation(final DJIGroundStationExecuteCallBack mCallBack)** to initialized the Ground Station function, and when the Ground Station function is initialized successfully (the callback returns **GroundStationResult.GS\_Result\_Success**), then the function **public void uploadGroundStationTask(final DJIGroundStationTask task, final DJIGroundStationExecuteCallBack mCallBack)** will be executed.

**Important:** It is possible that you will come across **GroundStationResult.GS\_Result\_Rc\_Control\_Mode\_Error** when using the Ground Station. The root cause is that the flight mode switch on the remote contorller is not set to the "F" position. You will then need to toggle the switch to "F" position and upload the waypoints agin before using the Ground Station.

If the flight mode switch is at "F" position when the aircraft is powered on, the user must toggle back and forth between F and another position and then have an uploading of waypoints.

When all waypoints are uploaded successfully , the DJI PC Simulator log will prompt "received mission length xx from app".

### Start and Stop the DJIGroundStationTask <a href="#start-and-stop-the-djigroundstationtask" id="start-and-stop-the-djigroundstationtask"></a>

After uploading the task to the aircraft, execute the **DJIGroundStationTask**. When the "Start" button is clicked, the following codes will be executed, in which the function **public void startGroundStationTask(final DJIGroundStationExecuteCallBack mCallBack)** will be called.

```
        private void startGroundStationTask(){
        DJIDrone.getDjiGroundStation().startGroundStationTask(new DJIGroundStationExecuteCallBack(){

            @Override
            public void onResult(GroundStationResult result) {
                // TODO Auto-generated method stub
                String ResultsString = "return code =" + result.toString();
                handler.sendMessage(handler.obtainMessage(SHOWTOAST, ResultsString));
            }
        });
    }
```

The DJIGroundStationTask can be stopped during execution by calling function **public void pauseGroundStationTask(final DJIGroundStationExecuteCallBack mCallBack)** to pause the task, after the pausing the task, use **public void closeGroundStation(final DJIGroundStationExecuteCallBack mCallBack)** to close the Ground Station function.

```
        private void stopGroundStationTask(){
        DJIDrone.getDjiGroundStation().pauseGroundStationTask(new DJIGroundStationExecuteCallBack(){

            @Override
            public void onResult(GroundStationResult result) {
                // TODO Auto-generated method stub
                String ResultsString = "return code =" + result.toString();
                handler.sendMessage(handler.obtainMessage(SHOWTOAST, ResultsString));

                DJIDrone.getDjiGroundStation().closeGroundStation(new DJIGroundStationExecuteCallBack(){

                    @Override
                    public void onResult(GroundStationResult result) {
                        // TODO Auto-generated method stub
                        String ResultsString = "return code =" + result.toString();
                        handler.sendMessage(handler.obtainMessage(SHOWTOAST, ResultsString));
                    }

                });
            }
        });
        mGroundStationTask.RemoveAllWaypoint();
    }
```

### Summary <a href="#summary" id="summary"></a>

In this tutorial, You have mastered how to setup and use the DJI PC Simulator to test your Ground Station app, how to upgrade your firmware to the developer version, and how to use the DJI Mobile SDK to create a simple MapView, modify annotations of map view, checking the aircraft on the map view by simulate the GPS data from DJI PC Simulator, etc. That covers much of the ground.

Moreover, you have learned how to configure both **DJIGroundStationWaypoint** and **DJIGroundStationTask**. Moreover, you have now mastered how to manipulate waypoints and task by using **DJIGroundStationTask** and **DJIInspireGroundStation**.

Congratulations! Now that you have finished the demo project, you can build on what you've learned and start to build your own ground station application. You can improve the way waypoints that are added(such as drawing a line on the map and generating waypoints automatically), play around with the properties of a waypoint (such as heading, horizontal speed, etc.), and adding more functionality. In order to make a cool ground station application, you still have a long way to go. Good luck and hope you that enjoy this.
