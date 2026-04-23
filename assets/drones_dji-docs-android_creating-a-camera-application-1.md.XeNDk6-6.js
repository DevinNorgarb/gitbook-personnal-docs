import{_ as a,o as s,c as e,ag as p}from"./chunks/framework.DXGyWiRo.js";const h=JSON.parse('{"title":"Creating a Camera Application","description":"","frontmatter":{},"headers":[],"relativePath":"drones/dji-docs-android/creating-a-camera-application-1.md","filePath":"drones/dji-docs-android/creating-a-camera-application-1.md"}'),t={name:"drones/dji-docs-android/creating-a-camera-application-1.md"};function i(o,n,l,r,c,d){return s(),e("div",null,[...n[0]||(n[0]=[p(`<h1 id="creating-a-camera-application" tabindex="-1">Creating a Camera Application <a class="header-anchor" href="#creating-a-camera-application" aria-label="Permalink to &quot;Creating a Camera Application&quot;">​</a></h1><ul><li>Preparation</li><li>Setting up your Programming Environment <ul><li>Android Studio</li></ul></li><li>Configure the Project&#39;s AndroidManifest File</li><li>Implement the Stopping Recording Function</li></ul><p><em>If you come across any mistakes or bugs in this tutorial, please let us know using a Github issue or a post on the DJI forum, or commenting in the Gitbook. Please feel free to send us Github pull request and help us fix any issues. However, all pull requests related to document must follow the</em> <a href="https://github.com/dji-sdk/Mobile-SDK-Tutorial/issues/19" target="_blank" rel="noreferrer"><em>document style</em></a></p><hr><p>This tutorial uses Phantom 3 Professional as an example. You can download the final project for this tutorial from this Github page. We <strong>strongly</strong> recommend that you download the final project code and have it open as reference as you work through this tutorial.</p><p>You can download the entire project for this tutorial from this <a href="https://github.com/DJI-Mobile-SDK/Android-FPVDemo" target="_blank" rel="noreferrer">Github Page</a>.</p><h2 id="preparation" tabindex="-1">Preparation <a href="#preparation" id="preparation"></a> <a class="header-anchor" href="#preparation" aria-label="Permalink to &quot;Preparation &lt;a href=&quot;#preparation&quot; id=&quot;preparation&quot;&gt;&lt;/a&gt;&quot;">​</a></h2><p>(1) Download the Mobile SDK for Android from the following URL: <a href="https://developer.dji.com/mobile-sdk/downloads" target="_blank" rel="noreferrer">https://developer.dji.com/mobile-sdk/downloads</a></p><p>(2) Update the firmware of the product (Phantom 3 Series, Inspire 1, Inspire Pro, M100, OSMO) through the URL: <a href="https://developer.dji.com/mobile-sdk/downloads/" target="_blank" rel="noreferrer">https://developer.dji.com/mobile-sdk/downloads/</a> (<em>Refer to &quot;How to Update the Firmware&quot;:</em> <a href="http://www.dji.com/product/phantom-3-pro/info#downloads" target="_blank" rel="noreferrer"><em>http://www.dji.com/product/phantom-3-pro/info#downloads</em></a> <em>for instructions on updating the Phantom 3 Professional&#39;s firmware.</em>)</p><p>(3) Set up an Android development environment (if you do not yet have one). Throughout this tutorial we will be using Android Studio 1.5.1, which you can download here: <a href="http://developer.android.com/sdk/index.html" target="_blank" rel="noreferrer">http://developer.android.com/sdk/index.html</a>.</p><h3 id="setting-up-your-programming-environment" tabindex="-1">Setting up your Programming Environment <a href="#setting-up-your-programming-environment" id="setting-up-your-programming-environment"></a> <a class="header-anchor" href="#setting-up-your-programming-environment" aria-label="Permalink to &quot;Setting up your Programming Environment &lt;a href=&quot;#setting-up-your-programming-environment&quot; id=&quot;setting-up-your-programming-environment&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><h4 id="android-studio" tabindex="-1">Android Studio <a href="#android-studio" id="android-studio"></a> <a class="header-anchor" href="#android-studio" aria-label="Permalink to &quot;Android Studio &lt;a href=&quot;#android-studio&quot; id=&quot;android-studio&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>(1) Start a new Android Studio Project. Give the application and company domain any name you like, click next. Set the minimum SDK version as API 19 (recommended) and click next. Select &quot;Empty Activity&quot; and click next. As you reach the &#39;Customize the Activity&#39; page, you should name your activity &#39;FPVTutorialActivity&#39;. The layout name should automatically fill out with &#39;activity_fpvtutorial&#39;. Press &#39;Finish&#39;.</p><p>(2) Unzip the SDK package downloaded from the DJI website. Go to File -&gt; New -&gt; Import Module. In the &#39;Source Directory&#39; field, find the DJI-SDK-LIB folder location. Press Finish.</p><p>(3) Next, right click on the &#39;app&#39; module in the file directory to the left, and click &#39;Open Module Settings&#39;. Navigate to the &#39;Dependencies&#39; tab. Press the green plus sign, click &#39;Module Dependency&#39;, and select &#39;:DJI-SDK-LIB&#39;. Press &#39;OK&#39; to confirm. After Gradle finishes rebuilding, your environment will be ready!</p><h3 id="configure-the-project-s-androidmanifest-file" tabindex="-1">Configure the Project&#39;s AndroidManifest File <a href="#configure-the-projects-androidmanifest-file" id="configure-the-projects-androidmanifest-file"></a> <a class="header-anchor" href="#configure-the-project-s-androidmanifest-file" aria-label="Permalink to &quot;Configure the Project&#39;s AndroidManifest File &lt;a href=&quot;#configure-the-projects-androidmanifest-file&quot; id=&quot;configure-the-projects-androidmanifest-file&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>You need to configure your project&#39;s AndroidManifest file by adding the following permissions and features for DJI SDK V3.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;!-- DJI SDK permissions --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;uses-permission android:name=&quot;android.permission.VIBRATE&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-permission android:name=&quot;android.permission.INTERNET&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-permission android:name=&quot;android.permission.ACCESS_WIFI_STATE&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-permission android:name=&quot;android.permission.WAKE_LOCK&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-permission android:name=&quot;android.permission.ACCESS_COARSE_LOCATION&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-permission android:name=&quot;android.permission.ACCESS_NETWORK_STATE&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-permission android:name=&quot;android.permission.ACCESS_FINE_LOCATION&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-permission android:name=&quot;android.permission.CHANGE_WIFI_STATE&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-permission android:name=&quot;android.permission.MOUNT_UNMOUNT_FILESYSTEMS&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-permission android:name=&quot;android.permission.WRITE_EXTERNAL_STORAGE&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-permission android:name=&quot;android.permission.READ_EXTERNAL_STORAGE&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-permission android:name=&quot;android.permission.SYSTEM_ALERT_WINDOW&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-permission android:name=&quot;android.permission.READ_PHONE_STATE&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-feature android:name=&quot;android.hardware.camera&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-feature android:name=&quot;android.hardware.camera.autofocus&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-feature</span></span>
<span class="line"><span>    android:name=&quot;android.hardware.usb.host&quot;</span></span>
<span class="line"><span>    android:required=&quot;false&quot; /&gt;</span></span>
<span class="line"><span>&lt;uses-feature</span></span>
<span class="line"><span>    android:name=&quot;android.hardware.usb.accessory&quot;</span></span>
<span class="line"><span>    android:required=&quot;true&quot; /&gt;</span></span>
<span class="line"><span>&lt;!-- DJI SDK --&gt;</span></span></code></pre></div><p>DJI SDK V3 uses USB Accessory method to connect a Remote Controller with a mobile device. Please add the following codes under tag <strong>application</strong> to support this feature, especially pay attention to tag , and <strong>intent-filter</strong>, within the tag <strong>activity</strong> for <strong>dji.sdk.SDKManager.DJIAoaControllerActivity</strong>.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>    &lt;application</span></span>
<span class="line"><span>        android:name=&quot;com.dji.fpvtutorial.FPVTutorialApplication&quot;</span></span>
<span class="line"><span>        android:allowBackup=&quot;true&quot;</span></span>
<span class="line"><span>        android:icon=&quot;@mipmap/ic_launcher&quot;</span></span>
<span class="line"><span>        android:label=&quot;@string/app_name&quot;</span></span>
<span class="line"><span>        android:supportsRtl=&quot;true&quot;</span></span>
<span class="line"><span>        android:theme=&quot;@style/AppTheme&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- DJI SDK API Key--&gt;</span></span>
<span class="line"><span>        &lt;uses-library android:name=&quot;com.android.future.usb.accessory&quot; /&gt;</span></span>
<span class="line"><span>        &lt;meta-data</span></span>
<span class="line"><span>            android:name=&quot;com.dji.sdk.API_KEY&quot;</span></span>
<span class="line"><span>            android:value=&quot;&quot; /&gt;</span></span>
<span class="line"><span>        &lt;activity</span></span>
<span class="line"><span>            android:name=&quot;dji.sdk.SDKManager.DJIAoaControllerActivity&quot;</span></span>
<span class="line"><span>            android:theme=&quot;@android:style/Theme.Translucent&quot; &gt;</span></span>
<span class="line"><span>            &lt;intent-filter&gt;</span></span>
<span class="line"><span>                &lt;action android:name=&quot;android.hardware.usb.action.USB_ACCESSORY_ATTACHED&quot; /&gt;</span></span>
<span class="line"><span>            &lt;/intent-filter&gt;</span></span>
<span class="line"><span>            &lt;meta-data</span></span>
<span class="line"><span>                android:name=&quot;android.hardware.usb.action.USB_ACCESSORY_ATTACHED&quot;</span></span>
<span class="line"><span>                android:resource=&quot;@xml/accessory_filter&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/activity&gt;</span></span>
<span class="line"><span>        &lt;!-- DJI SDK --&gt;</span></span>
<span class="line"><span>        &lt;activity android:name=&quot;.FPVTutorialActivity&quot;</span></span>
<span class="line"><span>            android:theme=&quot;@android:style/Theme.NoTitleBar.Fullscreen&quot;&gt;</span></span>
<span class="line"><span>            &lt;intent-filter&gt;</span></span>
<span class="line"><span>                &lt;action android:name=&quot;android.intent.action.MAIN&quot; /&gt;</span></span>
<span class="line"><span>                &lt;category android:name=&quot;android.intent.category.LAUNCHER&quot; /&gt;</span></span>
<span class="line"><span>            &lt;/intent-filter&gt;</span></span>
<span class="line"><span>        &lt;/activity&gt;</span></span>
<span class="line"><span>    &lt;/application&gt;</span></span></code></pre></div><p>The above code shows where to add the API Key for registration. The API Key can be applied as follows:</p><p>Register for an account at <a href="https://developer.dji.com/register" target="_blank" rel="noreferrer">https://developer.dji.com/register</a>. Once registered, click on your name in the upper right corner. Click on &#39;Mobile SDK&#39;, then &#39;Create APP&#39; and fill out the creation form. Type in your project&#39;s package name in the &#39;Identification Code&#39; field.</p><p>Fill in the <strong>android:value</strong> field with the APP KEY that you have applied for from <a href="http://developer.dji.com/en/user/apps" target="_blank" rel="noreferrer">http://developer.dji.com/en/user/apps</a>.</p><h3 id="write-code-for-showing-video" tabindex="-1">Write Code for Showing Video <a href="#write-code-for-showing-video" id="write-code-for-showing-video"></a> <a class="header-anchor" href="#write-code-for-showing-video" aria-label="Permalink to &quot;Write Code for Showing Video &lt;a href=&quot;#write-code-for-showing-video&quot; id=&quot;write-code-for-showing-video&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><h4 id="_1-initiate-dji-sdk" tabindex="-1">(1) Initiate DJI SDK <a href="#id-1-initiate-dji-sdk" id="id-1-initiate-dji-sdk"></a> <a class="header-anchor" href="#_1-initiate-dji-sdk" aria-label="Permalink to &quot;(1) Initiate DJI SDK &lt;a href=&quot;#id-1-initiate-dji-sdk&quot; id=&quot;id-1-initiate-dji-sdk&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>DJI SDK V3 uses class <strong>DJISDKManager</strong> to manage the SDK&#39;s initiation, activation, and connection or disconnection to DJI&#39;s product.</p><p>Before using DJI SDK V3, developers first need to initiate it by using function <strong>initSDKManager</strong> of class <strong>DJISDKManager</strong>. Interface <strong>DJISDKManagerCallback</strong> is used to listen to the SDK registration result and the connected product changing. An example code snippet is as follows, we recommend developers to implement these codes in the application of Android, which will be active when the mobile app is not closed.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public void onCreate() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    super.onCreate();</span></span>
<span class="line"><span>    mHandler = new Handler(Looper.getMainLooper());</span></span>
<span class="line"><span>    //This is used to start SDK services and initiate SDK.</span></span>
<span class="line"><span>    DJISDKManager.getInstance().initSDKManager(this, mDJISDKManagerCallback); </span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * When starting SDK services, an instance of interface DJISDKManager.DJISDKManagerCallback will be used to listen to </span></span>
<span class="line"><span> * the SDK Registration result and the product changing.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private DJISDKManager.DJISDKManagerCallback mDJISDKManagerCallback = new DJISDKManager.DJISDKManagerCallback() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //Listens to the SDK registration result</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void onGetRegisteredResult(DJISDKError error) {</span></span>
<span class="line"><span>        if(error == DJISDKError.REGISTRATION_SUCCESS) {</span></span>
<span class="line"><span>            DJISDKManager.getInstance().startConnectionToProduct();</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            Handler handler = new Handler(Looper.getMainLooper());</span></span>
<span class="line"><span>            handler.post(new Runnable() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                @Override</span></span>
<span class="line"><span>                public void run() {</span></span>
<span class="line"><span>                    Toast.makeText(getApplicationContext(), &quot;register sdk fails, check network is available&quot;, Toast.LENGTH_LONG).show();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        Log.e(&quot;TAG&quot;, error.toString());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //Listens to the connected product changing, including two parts, component changing or product connection changing.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void onProductChanged(DJIBaseProduct oldProduct, DJIBaseProduct newProduct) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        mProduct = newProduct;</span></span>
<span class="line"><span>        if(mProduct != null) {</span></span>
<span class="line"><span>            mProduct.setDJIBaseProductListener(mDJIBaseProductListener);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        notifyStatusChange();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private DJIBaseProductListener mDJIBaseProductListener = new DJIBaseProductListener() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void onComponentChange(DJIComponentKey key, DJIBaseComponent oldComponent, DJIBaseComponent newComponent) {</span></span>
<span class="line"><span>        if(newComponent != null) {</span></span>
<span class="line"><span>            newComponent.setDJIComponentListener(mDJIComponentListener);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        notifyStatusChange();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void onProductConnectivityChanged(boolean isConnected) {</span></span>
<span class="line"><span>        notifyStatusChange();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private DJIComponentListener mDJIComponentListener = new DJIComponentListener() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void onComponentConnectivityChanged(boolean isConnected) {</span></span>
<span class="line"><span>        notifyStatusChange();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>In the implementation of the Interface <strong>DJISDKManagerCallback</strong>, when the registration succeeds, call function <strong>startConnectionToProduct()</strong> to start connection with product; set the callback <strong>DJIBaseProductListener</strong> to listen to the connected product changing.</p><h4 id="_2-obtain-or-initiate-the-djibaseproduct-object" tabindex="-1">(2) Obtain or initiate the DJIBaseProduct object <a href="#id-2-obtain-or-initiate-the-djibaseproduct-object" id="id-2-obtain-or-initiate-the-djibaseproduct-object"></a> <a class="header-anchor" href="#_2-obtain-or-initiate-the-djibaseproduct-object" aria-label="Permalink to &quot;(2) Obtain or initiate the DJIBaseProduct object &lt;a href=&quot;#id-2-obtain-or-initiate-the-djibaseproduct-object&quot; id=&quot;id-2-obtain-or-initiate-the-djibaseproduct-object&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>DJI SDK V3 uses an instance of the class <strong>DJIBaseProduct</strong> to represent a DJI product. We recommend to use the following code to obtain or initiate the instance of DJIBaseProduct.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * This function is used to get the instance of DJIBaseProduct.</span></span>
<span class="line"><span> * If no product is connected, it returns null.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public static synchronized DJIBaseProduct getProductInstance() {</span></span>
<span class="line"><span>    if (null == mProduct) {</span></span>
<span class="line"><span>        mProduct = DJISDKManager.getInstance().getDJIProduct();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return mProduct;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>When an instance of DJIBaseProduct is obtained or initiated, and is not null, the corresponding modules (DJICamera, DJIRemoteController, etc.) can be accessed by using <strong>DJIBaseProduct.getXXX()</strong> methods, e.g., <strong>mProduct.getCamera()</strong> to obtain an instance of the camera module.</p><h4 id="_3-show-the-video-view-received-from-the-camera" tabindex="-1">(3) Show the video view received from the camera <a href="#id-3-show-the-video-view-received-from-the-camera" id="id-3-show-the-video-view-received-from-the-camera"></a> <a class="header-anchor" href="#_3-show-the-video-view-received-from-the-camera" aria-label="Permalink to &quot;(3) Show the video view received from the camera &lt;a href=&quot;#id-3-show-the-video-view-received-from-the-camera&quot; id=&quot;id-3-show-the-video-view-received-from-the-camera&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>Developers need to implement the interface for receiving the raw video data (H.264 format) and the size of the data. DJI SDK V3 provides <strong>DJICodecManager</strong> for decoding the raw data. In the following sample code snippet, the raw video is put into an instance of <strong>DJICodecManager</strong>. After implementing the interface, use function <strong>setDJICameraReceivedVideoDataCallback</strong> to set it as the interface of DJICamera.</p><p>If developers want to show it on the screen of mobile devices, please add a TextureView as the UI for presenting the video. We recommend developers to refer to Google Developer&#39;s official documentation on TextureView to learn more about it <a href="http://developer.android.com/intl/ko/reference/android/view/TextureView.html" target="_blank" rel="noreferrer">http://developer.android.com/intl/ko/reference/android/view/TextureView.html</a>.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>protected CameraReceivedVideoDataCallback mReceivedVideoDataCallBack = null;</span></span>
<span class="line"><span>protected DJIOnReceivedVideoCallback mOnReceivedVideoCallback = null;</span></span>
<span class="line"><span>private DJIBaseProduct mProduct = null;</span></span>
<span class="line"><span>private DJICamera mCamera = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Codec for video live view</span></span>
<span class="line"><span>protected DJICodecManager mCodecManager = null;</span></span>
<span class="line"><span>protected TextView mConnectStatusTextView;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//Video Preview</span></span>
<span class="line"><span>protected TextureView mVideoSurface = null;  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>protected void onCreate(Bundle savedInstanceState) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    super.onCreate(savedInstanceState);</span></span>
<span class="line"><span>    setContentView(R.layout.activity_fpv);</span></span>
<span class="line"><span>    initUI();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // The callback for receiving the raw H264 video data for camera live view</span></span>
<span class="line"><span>    mReceivedVideoDataCallBack = new CameraReceivedVideoDataCallback() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public void onResult(byte[] videoBuffer, int size) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if(mCodecManager != null){</span></span>
<span class="line"><span>                // Send the raw H264 video data to codec manager for decoding</span></span>
<span class="line"><span>                mCodecManager.sendDataToDecoder(videoBuffer, size);</span></span>
<span class="line"><span>            }else {</span></span>
<span class="line"><span>                Log.e(TAG, &quot;mCodecManager is null&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // The callback for receiving the raw video data from Airlink</span></span>
<span class="line"><span>    mOnReceivedVideoCallback = new DJIOnReceivedVideoCallback() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public void onResult(byte[] videoBuffer, int size) {</span></span>
<span class="line"><span>            if(mCodecManager != null){</span></span>
<span class="line"><span>                // Send the raw H264 video data to codec manager for decoding</span></span>
<span class="line"><span>                mCodecManager.sendDataToDecoder(videoBuffer, size);</span></span>
<span class="line"><span>            } </span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    ...        </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>The folowing is the definition of the Interface <strong>CameraReceivedVideoDataCallback</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>public interface CameraReceivedVideoDataCallback {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** </span></span>
<span class="line"><span>     * void onResult(byte[] videoBuffer, int size) - the receive video data callback.</span></span>
<span class="line"><span>     * </span></span>
<span class="line"><span>     * @param videoBuffer The receive video data</span></span>
<span class="line"><span>     * @param size The size of video data</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void onResult(byte[] videoBuffer, int size);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>DJI SDK V3 provides a class <strong>DJICodecManager</strong> for hardware decoding the raw video data and showing the video in the TextureView.</p><p>We need to implement the interface <strong>SurfaceTextureListener</strong> and set it as the listener of the TextureView. <strong>SurfaceTextureListener</strong> can listen to when the surface texture is available, when it is destroyed, when its size is changed, when it is updated. The TextureView can initiate an instance of <strong>DJICodecManager</strong> when the surface texture is available.</p><p>By putting the received video data from the Interface <strong>CameraReceivedVideoDataCallback</strong> to an instance of <strong>DJICodecManager</strong>, it can show the video on the screen.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public void onSurfaceTextureAvailable(SurfaceTexture surface, int width, int height) {</span></span>
<span class="line"><span>    Log.e(TAG,&quot;onSurfaceTextureAvailable&quot;);</span></span>
<span class="line"><span>    if (mCodecManager == null) {</span></span>
<span class="line"><span>        Log.e(TAG, &quot;mCodecManager is null 2&quot;);</span></span>
<span class="line"><span>        mCodecManager = new DJICodecManager(this, surface, width, height);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public void onSurfaceTextureSizeChanged(SurfaceTexture surface, int width, int height) {</span></span>
<span class="line"><span>    Log.e(TAG,&quot;onSurfaceTextureSizeChanged&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public boolean onSurfaceTextureDestroyed(SurfaceTexture surface) {</span></span>
<span class="line"><span>    Log.e(TAG,&quot;onSurfaceTextureDestroyed&quot;);</span></span>
<span class="line"><span>    if (mCodecManager != null) {</span></span>
<span class="line"><span>        mCodecManager.cleanSurface();</span></span>
<span class="line"><span>        mCodecManager = null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public void onSurfaceTextureUpdated(SurfaceTexture surface) {</span></span>
<span class="line"><span>    Log.e(TAG,&quot;onSurfaceTextureUpdated&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>The interface <strong>CameraReceivedVideoDataCallback</strong> is set to the camera module for receiving the video data from the camera:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public void onResume() {</span></span>
<span class="line"><span>    Log.e(TAG, &quot;onResume&quot;);</span></span>
<span class="line"><span>    super.onResume();</span></span>
<span class="line"><span>    initPreviewer();</span></span>
<span class="line"><span>    updateTitleBar();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(mVideoSurface == null) {</span></span>
<span class="line"><span>        Log.e(TAG, &quot;mVideoSurface is null&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void initPreviewer() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        mProduct = FPVTutorialApplication.getProductInstance();</span></span>
<span class="line"><span>    } catch (Exception exception) {</span></span>
<span class="line"><span>        mProduct = null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (null == mProduct || !mProduct.isConnected()) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        mCamera = null;</span></span>
<span class="line"><span>        showToast(getString(R.string.disconnected));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (null != mVideoSurface) {</span></span>
<span class="line"><span>            mVideoSurface.setSurfaceTextureListener(this);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (!mProduct.getModel().equals(Model.UnknownAircraft)) {</span></span>
<span class="line"><span>            mCamera = mProduct.getCamera();</span></span>
<span class="line"><span>            if (mCamera != null){</span></span>
<span class="line"><span>                // Set the callback</span></span>
<span class="line"><span>                mCamera.setDJICameraReceivedVideoDataCallback(mReceivedVideoDataCallBack);   </span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            if (null != mProduct.getAirLink()) {</span></span>
<span class="line"><span>                if (null != mProduct.getAirLink().getLBAirLink()) {</span></span>
<span class="line"><span>                    // Set the callback</span></span>
<span class="line"><span>                    mProduct.getAirLink().getLBAirLink().setDJIOnReceivedVideoCallback(mOnReceivedVideoCallback);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_4-automatically-detect-the-type-of-connected-product" tabindex="-1">(4) Automatically Detect the Type of Connected Product <a href="#id-4-automatically-detect-the-type-of-connected-product" id="id-4-automatically-detect-the-type-of-connected-product"></a> <a class="header-anchor" href="#_4-automatically-detect-the-type-of-connected-product" aria-label="Permalink to &quot;(4) Automatically Detect the Type of Connected Product &lt;a href=&quot;#id-4-automatically-detect-the-type-of-connected-product&quot; id=&quot;id-4-automatically-detect-the-type-of-connected-product&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><p>DJI SDK V3 can automatically detect the type of connected product and use a broadcast receiver to announce it. The connected product changing is listened to by the function <strong>onProductChanged</strong> in the interface <strong>DJISDKManagerCallback</strong>, and interface <strong>DJIComponentListener</strong> listens to the changing of component (Camera, Remote Controller, etc.):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public void onCreate() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    super.onCreate();</span></span>
<span class="line"><span>    mHandler = new Handler(Looper.getMainLooper());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //This is used to start SDK services and initiate SDK.</span></span>
<span class="line"><span>    DJISDKManager.getInstance().initSDKManager(this, mDJISDKManagerCallback); </span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * When starting SDK services, an instance of interface DJISDKManager.DJISDKManagerCallback will be used to listen to </span></span>
<span class="line"><span> * the SDK Registration result and the product changing.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private DJISDKManager.DJISDKManagerCallback mDJISDKManagerCallback = new DJISDKManager.DJISDKManagerCallback() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //Listens to the SDK registration result</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void onGetRegisteredResult(DJISDKError error) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if(error == DJISDKError.REGISTRATION_SUCCESS) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            DJISDKManager.getInstance().startConnectionToProduct();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            Handler handler = new Handler(Looper.getMainLooper());</span></span>
<span class="line"><span>            handler.post(new Runnable() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                @Override</span></span>
<span class="line"><span>                public void run() {</span></span>
<span class="line"><span>                    Toast.makeText(getApplicationContext(), &quot;register sdk fails, check network is available&quot;, Toast.LENGTH_LONG).show();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Log.e(&quot;TAG&quot;, error.toString());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //Listens to the connected product changing, including two parts, component changing or product connection changing.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void onProductChanged(DJIBaseProduct oldProduct, DJIBaseProduct newProduct) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        mProduct = newProduct;</span></span>
<span class="line"><span>        if(mProduct != null) {</span></span>
<span class="line"><span>            mProduct.setDJIBaseProductListener(mDJIBaseProductListener);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        notifyStatusChange();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private DJIBaseProductListener mDJIBaseProductListener = new DJIBaseProductListener() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void onComponentChange(DJIComponentKey key, DJIBaseComponent oldComponent, DJIBaseComponent newComponent) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if(newComponent != null) {</span></span>
<span class="line"><span>            newComponent.setDJIComponentListener(mDJIComponentListener);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        notifyStatusChange();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void onProductConnectivityChanged(boolean isConnected) {</span></span>
<span class="line"><span>        notifyStatusChange();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private DJIComponentListener mDJIComponentListener = new DJIComponentListener() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void onComponentConnectivityChanged(boolean isConnected) {</span></span>
<span class="line"><span>        notifyStatusChange();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void notifyStatusChange() {</span></span>
<span class="line"><span>    mHandler.removeCallbacks(updateRunnable);</span></span>
<span class="line"><span>    mHandler.postDelayed(updateRunnable, 500);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private Runnable updateRunnable = new Runnable() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        Intent intent = new Intent(FLAG_CONNECTION_CHANGE);  </span></span>
<span class="line"><span>        sendBroadcast(intent);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span></code></pre></div><p>To listen to the changing product, please register a broadcast receiver,</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>// Register the broadcast receiver for receiving the device connection&#39;s changes.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>IntentFilter filter = new IntentFilter();  </span></span>
<span class="line"><span>filter.addAction(FPVTutorialApplication.FLAG_CONNECTION_CHANGE);</span></span>
<span class="line"><span>registerReceiver(mReceiver, filter);</span></span></code></pre></div><p>The above is an example for the explanation of the usage of DJI SDK V3&#39;s APIs in showing video. We recommend developers to review the source code of the FPV tutorial project for a better understanding of the usage of DJI SDK V3&#39;s APIs.</p><h3 id="connecting-to-your-aircraft" tabindex="-1">Connecting to your Aircraft <a href="#connecting-to-your-aircraft" id="connecting-to-your-aircraft"></a> <a class="header-anchor" href="#connecting-to-your-aircraft" aria-label="Permalink to &quot;Connecting to your Aircraft &lt;a href=&quot;#connecting-to-your-aircraft&quot; id=&quot;connecting-to-your-aircraft&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>After you have built and run the project successfully, you can now connect your mobile device to an aircraft to check the FPV. Follow the appropriate instructions for your specific aircraft model:</p><h4 id="_1-connecting-to-a-dji-inspire-1-or-phantom-3-professional-advanced" tabindex="-1">1. Connecting to a DJI Inspire 1 or Phantom 3 Professional/Advanced: <a href="#id-1-connecting-to-a-dji-inspire-1-or-phantom-3-professionaladvanced" id="id-1-connecting-to-a-dji-inspire-1-or-phantom-3-professionaladvanced"></a> <a class="header-anchor" href="#_1-connecting-to-a-dji-inspire-1-or-phantom-3-professional-advanced" aria-label="Permalink to &quot;1. Connecting to a DJI Inspire 1 or Phantom 3 Professional/Advanced: &lt;a href=&quot;#id-1-connecting-to-a-dji-inspire-1-or-phantom-3-professionaladvanced&quot; id=&quot;id-1-connecting-to-a-dji-inspire-1-or-phantom-3-professionaladvanced&quot;&gt;&lt;/a&gt;&quot;">​</a></h4><ol><li>Turn on your remote controller, then turn on your aircraft</li><li>Connect your mobile device to the remote controller using a USB cable. Tap your own app&#39;s icon when the message window &quot;Choose an app for the USB device&quot; pops up.</li><li>Tap &quot;OK&quot; when the message window prompts &quot;Allow the app to access the USB accessory&quot;.</li><li>Tap &quot;OK&quot; when the activation alert displays.</li><li>You are ready to use the FPV View app.</li></ol><h3 id="checking-your-results" tabindex="-1">Checking your results <a href="#checking-your-results" id="checking-your-results"></a> <a class="header-anchor" href="#checking-your-results" aria-label="Permalink to &quot;Checking your results &lt;a href=&quot;#checking-your-results&quot; id=&quot;checking-your-results&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>If you can see the live video stream in the app, congratulations! You&#39;ve succesfully implemented a First Person View!</p><h3 id="implementing-the-capture-function" tabindex="-1">Implementing the Capture Function <a href="#implementing-the-capture-function" id="implementing-the-capture-function"></a> <a class="header-anchor" href="#implementing-the-capture-function" aria-label="Permalink to &quot;Implementing the Capture Function &lt;a href=&quot;#implementing-the-capture-function&quot; id=&quot;implementing-the-capture-function&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>The <strong>private void captureAction()</strong> function is used to take photos. In our source code, we implement a &quot;Capture&quot; button which calls this function whenever pressed.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>// function for taking photo</span></span>
<span class="line"><span>private void captureAction(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    CameraMode cameraMode = CameraMode.ShootPhoto;</span></span>
<span class="line"><span>   mCamera = mProduct.getCamera();</span></span>
<span class="line"><span>    mCamera.setCameraMode(cameraMode, new DJICompletionCallback(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public void onResult(DJIError error)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            if (error == null) {</span></span>
<span class="line"><span>                CameraShootPhotoMode photoMode = CameraShootPhotoMode.Single; // Set the camera capture mode as Single mode</span></span>
<span class="line"><span>                mCamera.startShootPhoto(photoMode, new DJICompletionCallback(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    @Override</span></span>
<span class="line"><span>                    public void onResult(DJIError error)</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        if (error == null) {</span></span>
<span class="line"><span>                            showToast(&quot;take photo: success&quot;);</span></span>
<span class="line"><span>                        }else {</span></span>
<span class="line"><span>                            showToast(error.getDescription());</span></span>
<span class="line"><span>                        }              </span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                }); // Execute the startShootPhoto API</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>               showToast(error.getDescription());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>That was a lot of code we just threw at you, so let&#39;s break it down.</p><p>The first thing we need to do is define a CameraMode enum, which we will use to set the mode of the camera onboard our DJI Drone.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CameraMode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cameraMode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CameraMode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ShootPhoto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>The reason we defined this enum &#39;cameraMode&#39; was so that we could pass it as a parameter for the <strong>setCameraMode()</strong> function that we are about to call. <strong>setCameraMode()</strong> sets the mode of the DJI drone&#39;s camera (Capture Mode, Playback Mode, Record Mode etc.). <strong>setCameraMode()</strong> takes in two parameters:</p><p><strong>setCameraMode(CameraMode mode, final DJICompletionCallback callback)</strong></p><p>The first parameter, a CameraMode enum, tells the function what mode to set the camera to. In this case, we tell it to set the camera to Capture Mode.</p><p>The second parameter is a callback function, which is run after <strong>setCameraMode()</strong> attempts to set the camera mode. The callback function is reproduced, in brief, below.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>new DJICompletionCallback(){</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public void onResult(DJIError error)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            if (error == null) {</span></span>
<span class="line"><span>                showToast(&quot;take photo: success&quot;);</span></span>
<span class="line"><span>            }else {</span></span>
<span class="line"><span>                showToast(error.getDescription());</span></span>
<span class="line"><span>            }              </span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span> }</span></span></code></pre></div><p>The callback function takes in a confirmation signal from the drone, in the form of a DJIError object &#39;error&#39;. If the error code given by &#39;error&#39; is null, then the code to take the photo executed successfully. Else, a handler will show an appropriate error message depending on the error code.</p><p>Within the callback function we have code to tell the drone to take a photo.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>    if (error == null) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        CameraShootPhotoMode photoMode = CameraShootPhotoMode.Single; // Set the camera capture mode as Single mode</span></span>
<span class="line"><span>        mCamera.startShootPhoto(photoMode, new DJICompletionCallback(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void onResult(DJIError error)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                if (error == null) {</span></span>
<span class="line"><span>                    showToast(&quot;take photo: success&quot;);</span></span>
<span class="line"><span>                }else {</span></span>
<span class="line"><span>                    showToast(error.getDescription());</span></span>
<span class="line"><span>                }              </span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }); // Execute the startShootPhoto API</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>       showToast(error.getDescription());</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>If this code looks familiar, it&#39;s because it follows a structure almost identical to the larger function it is a part of! First we create a CameraShootPhotoMode enum called &#39;photoMode&#39;. When the drone takes a photo, this enum instructs the drone whether it should take a single photo, a burst of photos, or a continuous stream of photos. For this example we&#39;ll be taking a single photo at a time.</p><p>The <strong>startShootPhoto()</strong> method tells the drone&#39;s camera to take a photo. Just like the <strong>setCameraMode()</strong> function, it takes in an enum and a callback function. We&#39;ve just gone over the enum variable it takes in.</p><p>The callback function uses a handler to display a message giving an error code and an error description after the drone&#39;s camera attempts to take a photo. If a photo has successfully been taken, this message will confirm it.</p><p>And that&#39;s it! Add a &quot;Capture&quot; button into your app which calls this method, and give it a go!</p><h3 id="implement-the-recording-function" tabindex="-1">Implement the Recording Function <a href="#implement-the-recording-function" id="implement-the-recording-function"></a> <a class="header-anchor" href="#implement-the-recording-function" aria-label="Permalink to &quot;Implement the Recording Function &lt;a href=&quot;#implement-the-recording-function&quot; id=&quot;implement-the-recording-function&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>The <strong>recordAction()</strong> method is almost identical to the <strong>captureAction()</strong> method we just implemented, with just a few key differences! Take a quick look at the code below:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>// function for starting recording</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private void recordAction(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    CameraMode cameraMode = CameraMode.RecordVideo;</span></span>
<span class="line"><span>    mCamera = mProduct.getCamera();</span></span>
<span class="line"><span>    mCamera.setCameraMode(cameraMode, new DJICompletionCallback(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public void onResult(DJIError error)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            if (error == null) {</span></span>
<span class="line"><span>                mCamera.startRecordVideo(new DJICompletionCallback(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    @Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    public void onResult(DJIError error)</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        if (error == null) {</span></span>
<span class="line"><span>                            showToast(&quot;Record video: success&quot;);</span></span>
<span class="line"><span>                            handlerTimer.postDelayed(runnable, TIME); // Start the timer for recording</span></span>
<span class="line"><span>                        }else {</span></span>
<span class="line"><span>                            showToast(error.getDescription());</span></span>
<span class="line"><span>                        }              </span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                }); // Execute the startShootPhoto API</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>               showToast(error.getDescription());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Notice that the cameraMode enum has been set as <strong>RecordVideo</strong> because this time we want the camera to record.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>// Set the cameraMode as Camera_Record_Mode.</span></span>
<span class="line"><span>CameraMode cameraMode = CameraMode.RecordVideo;</span></span></code></pre></div><p>Additionally, within our callback function, we call <strong>startRecordVideo()</strong> instead of <strong>startShootPhoto()</strong>. <strong>startRecordVideo()</strong> only takes in one parameter, a callback function. It does not take in an enum as <strong>startShootPhoto()</strong> does, as there is only one recording mode.</p><h3 id="implement-the-stopping-recording-function" tabindex="-1">Implement the Stopping Recording Function <a href="#implement-the-stopping-recording-function" id="implement-the-stopping-recording-function"></a> <a class="header-anchor" href="#implement-the-stopping-recording-function" aria-label="Permalink to &quot;Implement the Stopping Recording Function &lt;a href=&quot;#implement-the-stopping-recording-function&quot; id=&quot;implement-the-stopping-recording-function&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>Once the camera starts recording, we need some way to tell it to stop! That&#39;s where <strong>stopRecord()</strong> comes in. The code below should look quite familiar to you by now:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>// function for stopping recording</span></span>
<span class="line"><span>private void stopRecord(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    mCamera = mProduct.getCamera();</span></span>
<span class="line"><span>    mCamera.stopRecordVideo(new DJICompletionCallback(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void onResult(DJIError error)</span></span>
<span class="line"><span>    {    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if(error == null) {</span></span>
<span class="line"><span>            showToast(&quot;Stop recording: success&quot;);</span></span>
<span class="line"><span>        }else {</span></span>
<span class="line"><span>            showToast(error.getDescription());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        handlerTimer.removeCallbacks(runnable); // Start the timer for recording</span></span>
<span class="line"><span>        i = 0; // Reset the timer for recording</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>You can now add a &#39;Record&#39; and &#39;Stop Recording&#39; button to your app, and have them call <strong>recordAction()</strong> and <strong>stopRecord()</strong> respectively. Build and run the project, and it should look something like the screenshot below:</p><p>Congratulations! Your Aerial First Person View Android app is complete, capable of viewing your DJI Drone&#39;s video feed, as well as remotely taking picture and videos!</p><h3 id="viewing-your-images" tabindex="-1">Viewing your Images <a href="#viewing-your-images" id="viewing-your-images"></a> <a class="header-anchor" href="#viewing-your-images" aria-label="Permalink to &quot;Viewing your Images &lt;a href=&quot;#viewing-your-images&quot; id=&quot;viewing-your-images&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>Unfortunately, this tutorial does not include guidance on viewing photos and videos onboard your DJI Drone&#39;s SD card. However, if you would like to see the pictures and videos you took through your brand new app, you can download DJI GO App, found here:</p><p><a href="https://play.google.com/store/apps/details?id=dji.pilot&amp;hl=en" target="_blank" rel="noreferrer">https://play.google.com/store/apps/details?id=dji.pilot&amp;hl=en</a></p><p>Alternatively, you can search for the app in the Google Play Store under the name &#39;DJI GO&#39;.</p><h3 id="summary" tabindex="-1">Summary <a href="#summary" id="summary"></a> <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary &lt;a href=&quot;#summary&quot; id=&quot;summary&quot;&gt;&lt;/a&gt;&quot;">​</a></h3><p>You’ve come a long way in this tutorial: you’ve learned how to use the DJI Mobile SDK to show the FPV view of the aircraft&#39;s camera and control the camera of a DJI platform. These features, <strong>Capture</strong> and <strong>Record</strong> are the most basic and common features in a typical drone mobile app. However, if you want to create a drone app that is more fancy, you still have a long way to go. More advanced features would include previewing the photo and video in the SD Card, showing the OSD of the aircraft and so on.</p><p>Hope you enjoyed this tutorial, stay tuned for our next one!</p>`,93)])])}const g=a(t,[["render",i]]);export{h as __pageData,g as default};
