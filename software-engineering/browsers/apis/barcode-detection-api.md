# Barcode Detection API

[https://htmlpreview.github.io/?https://gist.githubusercontent.com/derac/9dfa8884bb04df59ac498d3bac4a93da/raw/25f660ba8486774a8ac281f8442e8b58b1afbaaf/index.html](https://htmlpreview.github.io/?https://gist.githubusercontent.com/derac/9dfa8884bb04df59ac498d3bac4a93da/raw/25f660ba8486774a8ac281f8442e8b58b1afbaaf/index.html)

{% code title="" overflow="wrap" lineNumbers="true" fullWidth="true" %}
```html
<html>
<head>
    <base href="https://gist.githubusercontent.com/derac/9dfa8884bb04df59ac498d3bac4a93da/raw/25f660ba8486774a8ac281f8442e8b58b1afbaaf/index.html">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script>
        // WICG Shape Detection API
        // - https://wicg.github.io/shape-detection-api/
        try {
            const start = document.getElementById("start");
            const video = document.getElementById("video");
            const result = document.getElementById("result");
            const canvas = document.getElementById("videoCanvas");

            const ctx = canvas.getContext('2d');
            const bd = new BarcodeDetector();

            (async () => {
                // It works on chrome on Android (chrome://flags Experimental Web Platform features)
                //NOTE: Not implemented yet: chrome canary 84 on macos
                result.textContent = (await BarcodeDetector.getSupportedFormats()).join("\n");
            })().catch(err => {
                result.textContent = err;
            });

            const capture = async () => {
                try {
                    const barcodes = await bd.detect(video);
                    const log = barcodes.map(({ format, rawValue }) => `- ${format}: ${rawValue}`).join("\n");
                    canvas.width = video.videoWidth / 2;
                    canvas.height = video.videoHeight / 2;
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    if (log) {
                        result.textContent = log;
                        barcodes.forEach(({ cornerPoints, boundingBox }) => {
                            let topLeft = cornerPoints[0]
                            ctx.rect(topLeft.x / 2, topLeft.y / 2, boundingBox.width / 2, boundingBox.height / 2);
                            ctx.lineWidth = "3";
                            ctx.strokeStyle = "red";
                            ctx.stroke();
                        });
                    }
                    requestAnimationFrame(capture);
                } catch (err) {
                    console.error(err);
                }
            };

            video.addEventListener("play", () => capture());

            start.addEventListener("click", () => {
                start.disabled = true;
                (async () => {
                    const media = await navigator.mediaDevices.getUserMedia(
                        {
                            auido: false, video: {
                                //NOTE: crash on android  chrome when specified the size
                                //width: {ideal: 800}, height: {ideal: 800},
                                facingMode: "environment"
                            }
                        });
                    //console.log(media);
                    video.srcObject = media;
                    video.autoplay = true;
                })().catch(console.error);
            }, { once: true });
        } catch (err) {
            document.getElementById("result").textContent = err;
        }
    </script>
</head>
<body>
BarcodeDetector demo: <button id="start" disabled="">start</button>
<div>
    <video id="video" style="display: none" autoplay=""></video>
    <canvas id="videoCanvas" width="320" height="240"></canvas>
</div>
<pre id="result">- ean_13: 6933719610083</pre>
</body>
</html>

```
{% endcode %}
