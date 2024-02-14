# Accelerated Shape Detection in Images



## Accelerated Shape Detection in Images <a href="#title" id="title"></a>

[Draft Community Group Report](https://www.w3.org/standards/types#CG-DRAFT), 30 January 2023

This version:[https://wicg.github.io/shape-detection-api](https://wicg.github.io/shape-detection-api)Issue Tracking:[GitHub](https://github.com/wicg/shape-detection-api/issues/)Editors:[Miguel Casas-Sanchez](mailto:mcasas@google.com) ([Google LLC](https://www.google.com/))[Reilly Grant](mailto:reillyg@google.com) ([Google LLC](https://www.google.com/))Translations (non-normative):[简体中文](https://wicg.github.io/shape-detection-api/index-zh-cn.html)Participate:[Join the W3C Community Group](https://www.w3.org/community/wicg/)[Fix the text through GitHub](https://github.com/WICG/shape-detection-api)

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2023 the Contributors to the Accelerated Shape Detection in Images Specification, published by the [Web Platform Incubator Community Group](https://www.w3.org/community/wicg/) under the [W3C Community Contributor License Agreement (CLA)](https://www.w3.org/community/about/agreements/cla/). A human-readable [summary](http://www.w3.org/community/about/agreements/cla-deed/) is available.

***

### Summary <a href="#abstract" id="abstract"></a>

This document describes an API providing access to accelerated shape detectors (e.g. human faces) for still images and/or live image feeds.

### Status of this document <a href="#status" id="status"></a>



This specification was published by the [Web Platform Incubator Community Group](https://www.w3.org/community/wicg/). It is not a W3C Standard nor is it on the W3C Standards Track. Please note that under the [W3C Community Contributor License Agreement (CLA)](https://www.w3.org/community/about/agreements/cla/) there is a limited opt-out and other conditions apply. Learn more about [W3C Community and Business Groups](http://www.w3.org/community/).

### table of contents <a href="#contents" id="contents"></a>

1. [1Introduction](https://wicg.github.io/shape-detection-api/#introduction)
   1. [1.1Shape detection use cases](https://wicg.github.io/shape-detection-api/#use-cases)
2. [2Shape Detection API](https://wicg.github.io/shape-detection-api/#api)
   1. [2.1Image sources for detection](https://wicg.github.io/shape-detection-api/#image-sources-for-detection)
   2. [2.2Face Detection API](https://wicg.github.io/shape-detection-api/#face-detection-api)
      1. [2.2.1`FaceDetectorOptions`](https://wicg.github.io/shape-detection-api/#facedetectoroptions-section)
      2. [2.2.2`DetectedFace`](https://wicg.github.io/shape-detection-api/#detectedface-section)
   3. [2.3Barcode Detection API](https://wicg.github.io/shape-detection-api/#barcode-detection-api)
      1. [2.3.1`BarcodeDetectorOptions`](https://wicg.github.io/shape-detection-api/#barcodedetectoroptions-section)
      2. [2.3.2`DetectedBarcode`](https://wicg.github.io/shape-detection-api/#detectedbarcode-section)
      3. [2.3.3`BarcodeFormat`](https://wicg.github.io/shape-detection-api/#barcodeformat-section)
3. [3Security and Privacy Considerations](https://wicg.github.io/shape-detection-api/#security-and-privacy-considerations)
4. [4Examples](https://wicg.github.io/shape-detection-api/#examples)
   1. [4.1Platform support for a given detector](https://wicg.github.io/shape-detection-api/#example-feature-detection)
   2. [4.2Face Detection](https://wicg.github.io/shape-detection-api/#example-face-detection)
   3. [4.3Barcode Detection](https://wicg.github.io/shape-detection-api/#example-barcode-detection)
5. [Conformance](https://wicg.github.io/shape-detection-api/#w3c-conformance)
   1. [Document conventions](https://wicg.github.io/shape-detection-api/#w3c-conventions)
   2. [Conformant Algorithms](https://wicg.github.io/shape-detection-api/#w3c-conformant-algorithms)
6. [Index](https://wicg.github.io/shape-detection-api/#index)
   1. [Terms defined by this specification](https://wicg.github.io/shape-detection-api/#index-defined-here)
   2. [Terms defined by reference](https://wicg.github.io/shape-detection-api/#index-defined-elsewhere)
7. [References](https://wicg.github.io/shape-detection-api/#references)
   1. [Normative References](https://wicg.github.io/shape-detection-api/#normative)
   2. [Informative References](https://wicg.github.io/shape-detection-api/#informative)
8. [IDL Index](https://wicg.github.io/shape-detection-api/#idl-index)

### 1. Introduction

Photos and images constitute the largest chunk of the Web, and many include recognisable features, such as human faces or barcordes/QR codes. Detecting these features is computationally expensive, but would lead to interesting use cases e.g. face tagging, or web URL redirection. While hardware manufacturers have been supporting these features for a long time, Web Apps do not yet have access to these hardware capabilities, which makes the use of computationally demanding libraries necessary.

Text Detection, despite being an interesting field, is not considered stable enough across neither computing platforms nor character sets to be standarized in the context of this document. For reference a sister informative specification is kept in [\[TEXT-DETECTION-API\]](https://wicg.github.io/shape-detection-api/#biblio-text-detection-api).

#### 1.1. Shape detection use cases

Please see the [Readme/Explainer](https://github.com/WICG/shape-detection-api/blob/master/README.md) in the repository.

### 2. Shape Detection API

Individual browsers MAY provide Detectors indicating the availability of hardware providing accelerated operation.

#### 2.1. Image sources for detection

This section is inspired by [HTML Canvas 2D Context § image-sources-for-2d-rendering-contexts](https://www.w3.org/html/wg/drafts/2dcontext/html5\_canvas\_CR/#image-sources-for-2d-rendering-contexts).

[`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) allows objects implementing any of a number of interfaces to be used as image sources for the detection process.

* When an [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) object represents an [`HTMLImageElement`](https://html.spec.whatwg.org/multipage/embedded-content.html#htmlimageelement), the element’s image must be used as the source image. Specifically, when an [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) object represents an animated image in an [`HTMLImageElement`](https://html.spec.whatwg.org/multipage/embedded-content.html#htmlimageelement), the user agent must use the default image of the animation (the one that the format defines is to be used when animation is not supported or is disabled), or, if there is no such image, the first frame of the animation.
* When an [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) object represents an [`HTMLVideoElement`](https://html.spec.whatwg.org/multipage/media.html#htmlvideoelement), then the frame at the current playback position when the method with the argument is invoked must be used as the source image when processing the image, and the source image’s dimensions must be the [intrinsic dimensions](https://drafts.csswg.org/css2/conform.html#intrinsic) of the media resource (i.e. after any aspect-ratio correction has been applied).
* When an [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) object represents an [`HTMLCanvasElement`](https://html.spec.whatwg.org/multipage/canvas.html#htmlcanvaselement), the element’s bitmap must be used as the source image.

When the UA is required to use a given type of [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) as input argument for the `detect()` method of whichever detector, it MUST run these steps:

* If any [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) have an effective script origin ([origin](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin)) which is not the same as the Document’s effective script origin, then reject the Promise with a new [`DOMException`](https://webidl.spec.whatwg.org/#idl-DOMException) whose name is [`SecurityError`](https://webidl.spec.whatwg.org/#securityerror).
* If the [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) is an [`HTMLImageElement`](https://html.spec.whatwg.org/multipage/embedded-content.html#htmlimageelement) object that is in the `Broken` ([HTML Standard §img-error](https://html.spec.whatwg.org/multipage/#img-error)) state, then reject the Promise with a new [`DOMException`](https://webidl.spec.whatwg.org/#idl-DOMException) whose name is [`InvalidStateError`](https://webidl.spec.whatwg.org/#invalidstateerror), and abort any further steps.
* If the [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) is an [`HTMLImageElement`](https://html.spec.whatwg.org/multipage/embedded-content.html#htmlimageelement) object that is not fully decodable then reject the Promise with a new [`DOMException`](https://webidl.spec.whatwg.org/#idl-DOMException) whose name is [`InvalidStateError`](https://webidl.spec.whatwg.org/#invalidstateerror), and abort any further steps
* If the [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) is an [`HTMLVideoElement`](https://html.spec.whatwg.org/multipage/media.html#htmlvideoelement) object whose [`readyState`](https://html.spec.whatwg.org/multipage/media.html#dom-media-readystate) attribute is either [`HAVE_NOTHING`](https://html.spec.whatwg.org/multipage/media.html#dom-media-have\_nothing) or [`HAVE_METADATA`](https://html.spec.whatwg.org/multipage/media.html#dom-media-have\_metadata) then reject the Promise with a new [`DOMException`](https://webidl.spec.whatwg.org/#idl-DOMException) whose name is [`InvalidStateError`](https://webidl.spec.whatwg.org/#invalidstateerror), and abort any further steps.
* If the [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) argument is an [`HTMLCanvasElement`](https://html.spec.whatwg.org/multipage/canvas.html#htmlcanvaselement) whose bitmap’s `origin-clean` ([HTML Standard §concept-canvas-origin-clean](https://html.spec.whatwg.org/multipage/#concept-canvas-origin-clean)) flag is false, then reject the Promise with a new [`DOMException`](https://webidl.spec.whatwg.org/#idl-DOMException) whose name is [`SecurityError`](https://webidl.spec.whatwg.org/#securityerror), and abort any further steps.

Note that if the [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) is an object with either a horizontal dimension or a vertical dimension equal to zero, then the Promise will be simply resolved with an empty sequence of detected objects.

#### 2.2. Face Detection API

[`FaceDetector`](https://wicg.github.io/shape-detection-api/#facedetector) represents an underlying accelerated platform’s component for detection of human faces in images. It can be created with an optional Dictionary of [`FaceDetectorOptions`](https://wicg.github.io/shape-detection-api/#dictdef-facedetectoroptions). It provides a single [`detect()`](https://wicg.github.io/shape-detection-api/#dom-facedetector-detect) operation on an [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) which result is a Promise. This method MUST reject this promise in the cases detailed in [§ 2.1 Image sources for detection](https://wicg.github.io/shape-detection-api/#image-sources-for-detection); otherwise it MAY queue a task that utilizes the OS/Platform resources to resolve the Promise with a Sequence of [`DetectedFace`](https://wicg.github.io/shape-detection-api/#dictdef-detectedface)s, each one essentially consisting on and delimited by a [`boundingBox`](https://wicg.github.io/shape-detection-api/#dom-detectedface-boundingbox).

Example implementations of face detection are e.g. [Android FaceDetector](https://developer.android.com/reference/android/media/FaceDetector.html) (or the [Google Play Services vision library](https://developers.google.com/android/reference/com/google/android/gms/vision/face/Face)), Apple’s [CIFaceFeature](https://developer.apple.com/reference/coreimage/cifacefeature?language=objc) / [VNDetectFaceLandmarksRequest](https://developer.apple.com/documentation/vision/vndetectfacelandmarksrequest?language=objc) or [Windows 10 FaceDetector](https://msdn.microsoft.com/library/windows/apps/windows.media.faceanalysis.facedetector.aspx).

```
[=(Window,Worker),
 ]
interface FaceDetector {
  (optional  faceDetectorOptions = {});
  <<>> ( image);
};
```

`FaceDetector(optional FaceDetectorOptions faceDetectorOptions)`Constructs a new [`FaceDetector`](https://wicg.github.io/shape-detection-api/#facedetector) with the optional faceDetectorOptions.Detectors may potentially allocate and hold significant resources. Where possible, reuse the same [`FaceDetector`](https://wicg.github.io/shape-detection-api/#facedetector) for several detections.`detect(ImageBitmapSource image)`Tries to detect human faces in the [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) image. The detected faces, if any, are returned as a sequence of [`DetectedFace`](https://wicg.github.io/shape-detection-api/#dictdef-detectedface)s.

**2.2.1.** [**`FaceDetectorOptions`**](https://wicg.github.io/shape-detection-api/#dictdef-facedetectoroptions)

```
dictionary FaceDetectorOptions {
   ;
   ;
};
```

`maxDetectedFaces`, of type [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short)Hint to the UA to try and limit the amount of detected faces on the scene to this maximum number.`fastMode`, of type [boolean](https://webidl.spec.whatwg.org/#idl-boolean)Hint to the UA to try and prioritise speed over accuracy by e.g. operating on a reduced scale or looking for large features.

**2.2.2.** [**`DetectedFace`**](https://wicg.github.io/shape-detection-api/#dictdef-detectedface)

```
dictionary DetectedFace {
  required  ;
  required <>? ;
};
```

`boundingBox`, of type [DOMRectReadOnly](https://drafts.fxtf.org/geometry-1/#domrectreadonly)A rectangle indicating the position and extent of a detected feature aligned to the image axes.`landmarks`, of type FrozenArray<[Landmark](https://wicg.github.io/shape-detection-api/#dictdef-landmark)>, nullableA series of features of interest related to the detected feature.

```
dictionary Landmark {
  required <> ;
   ;
};
```

`locations`, of type FrozenArray<[Point2D](https://w3c.github.io/mediacapture-image/#dictdef-point2d)>A point in the center of the detected landmark, or a [sequence](https://webidl.spec.whatwg.org/#idl-sequence) of points defining the vertices of a simple polygon surrounding the landmark in either a clockwise or counter-clockwise direction.`type`, of type [LandmarkType](https://wicg.github.io/shape-detection-api/#enumdef-landmarktype)Type of the landmark, if known.

```
enum LandmarkType {
  ,
  ,
  
};
```

`mouth`The landmark is identified as a human mouth.`eye`The landmark is identified as a human eye.`nose`The landmark is identified as a human nose.Consider adding attributes such as, e.g.:

```
[SameObject] readonly attribute unsigned long id;
```

to [`DetectedFace`](https://wicg.github.io/shape-detection-api/#dictdef-detectedface).

#### 2.3. Barcode Detection API

⚠MDN

[`BarcodeDetector`](https://wicg.github.io/shape-detection-api/#barcodedetector) represents an underlying accelerated platform’s component for detection of linear or two-dimensional barcodes in images. It provides a single [`detect()`](https://wicg.github.io/shape-detection-api/#dom-barcodedetector-detect) operation on an [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) which result is a Promise. This method MUST reject this Promise in the cases detailed in [§ 2.1 Image sources for detection](https://wicg.github.io/shape-detection-api/#image-sources-for-detection); otherwise it MAY queue a task using the OS/Platform resources to resolve the Promise with a sequence of [`DetectedBarcode`](https://wicg.github.io/shape-detection-api/#dictdef-detectedbarcode)s, each one essentially consisting on and delimited by a [`boundingBox`](https://wicg.github.io/shape-detection-api/#dom-detectedbarcode-boundingbox) and a series of [`Point2D`](https://w3c.github.io/mediacapture-image/#dictdef-point2d)s, and possibly a [`rawValue`](https://wicg.github.io/shape-detection-api/#dom-detectedbarcode-rawvalue) decoded [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString).

Example implementations of Barcode/QR code detection are e.g. [Google Play Services](https://developers.google.com/android/reference/com/google/android/gms/vision/barcode/package-summary) or Apple’s [CIQRCodeFeature](https://developer.apple.com/reference/coreimage/ciqrcodefeature?language=objc) / [VNDetectBarcodesRequest](https://developer.apple.com/documentation/vision/vndetectbarcodesrequest?language=objc).

```
[=(Window,Worker),
 ]
interface BarcodeDetector {
  (optional  barcodeDetectorOptions = {});
  static <<>> ();

  <<>> ( image);
};
```

⚠MDN`BarcodeDetector(optional BarcodeDetectorOptions barcodeDetectorOptions)`Constructs a new [`BarcodeDetector`](https://wicg.github.io/shape-detection-api/#barcodedetector) with barcodeDetectorOptions.

* If barcodeDetectorOptions.[`formats`](https://wicg.github.io/shape-detection-api/#dom-barcodedetectoroptions-formats) is present and empty, then throw a new [`TypeError`](https://webidl.spec.whatwg.org/#exceptiondef-typeerror).
* If barcodeDetectorOptions.[`formats`](https://wicg.github.io/shape-detection-api/#dom-barcodedetectoroptions-formats) is present and contains [`unknown`](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-unknown), then throw a new [`TypeError`](https://webidl.spec.whatwg.org/#exceptiondef-typeerror).

Detectors may potentially allocate and hold significant resources. Where possible, reuse the same [`BarcodeDetector`](https://wicg.github.io/shape-detection-api/#barcodedetector) for several detections.⚠MDN`getSupportedFormats()`This method, when invoked, MUST return a new [`Promise`](https://webidl.spec.whatwg.org/#idl-promise) promise and run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):

1. Let supportedFormats be a new [`Array`](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array-objects).
2. If the UA does not support barcode detection, resolve promise with supportedFormats and abort these steps.
3. Enumerate the [`BarcodeFormat`](https://wicg.github.io/shape-detection-api/#enumdef-barcodeformat)s that the UA understands as potentially detectable in images. Add these to supportedFormats.The UA cannot give a definitive answer as to whether a given barcode format will _always_ be recognized on an image due to e.g. positioning of the symbols or encoding errors. If a given barcode symbology is not in supportedFormats array, however, it should not be detectable whatsoever.
4. Resolve promise with supportedFormats.

The list of supported [`BarcodeFormat`](https://wicg.github.io/shape-detection-api/#enumdef-barcodeformat)s is platform dependent, some examples are the ones supported by [Google Play Services](https://developers.google.com/android/reference/com/google/android/gms/vision/barcode/BarcodeDetector.Builder.html#setBarcodeFormats\(int\)) and [Apple’s QICRCodeFeature](https://developer.apple.com/documentation/coreimage/ciqrcodefeature?preferredLanguage=occ#overview).⚠MDN`detect(ImageBitmapSource image)`Tries to detect barcodes in the [`ImageBitmapSource`](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#imagebitmapsource) image.

**2.3.1.** [**`BarcodeDetectorOptions`**](https://wicg.github.io/shape-detection-api/#dictdef-barcodedetectoroptions)

```
dictionary BarcodeDetectorOptions {
  <> ;
};
```

`formats`, of type sequence<[BarcodeFormat](https://wicg.github.io/shape-detection-api/#enumdef-barcodeformat)>A series of [`BarcodeFormat`](https://wicg.github.io/shape-detection-api/#enumdef-barcodeformat)s to search for in the subsequent [`detect()`](https://wicg.github.io/shape-detection-api/#dom-barcodedetector-detect) calls. If not present then the UA SHOULD search for all supported formats.Limiting the search to a particular subset of supported formats is likely to provide better performance.

**2.3.2.** [**`DetectedBarcode`**](https://wicg.github.io/shape-detection-api/#dictdef-detectedbarcode)

```
dictionary DetectedBarcode {
  required  ;
  required  ;
  required  ;
  required <> ;
};
```

`boundingBox`, of type [DOMRectReadOnly](https://drafts.fxtf.org/geometry-1/#domrectreadonly)A rectangle indicating the position and extent of a detected feature aligned to the image`rawValue`, of type [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)String decoded from the barcode. This value might be multiline.`format`, of type [BarcodeFormat](https://wicg.github.io/shape-detection-api/#enumdef-barcodeformat)Detect [`BarcodeFormat`](https://wicg.github.io/shape-detection-api/#enumdef-barcodeformat).`cornerPoints`, of type FrozenArray<[Point2D](https://w3c.github.io/mediacapture-image/#dictdef-point2d)>A [sequence](https://webidl.spec.whatwg.org/#idl-sequence) of corner points of the detected barcode, in clockwise direction and starting with top-left. This is not necessarily a square due to possible perspective distortions.

**2.3.3.** [**`BarcodeFormat`**](https://wicg.github.io/shape-detection-api/#enumdef-barcodeformat)

```
enum BarcodeFormat {
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  
};
```

`aztec`This entry represents a square two-dimensional matrix following [\[iso24778\]](https://wicg.github.io/shape-detection-api/#biblio-iso24778) and with a square bullseye pattern at their centre, thus resembling an Aztec pyramid. Does not require a surrounding blank zone.`code_128`Code 128 is a linear (one-dimensional), bidirectionally-decodable, self-checking barcode following [\[iso15417\]](https://wicg.github.io/shape-detection-api/#biblio-iso15417) and able to encode all 128 characters of ASCII (hence the naming).`code_39`This part talks about the Code 39 barcode. It is a discrete and variable-length barcode type. [\[iso16388\]](https://wicg.github.io/shape-detection-api/#biblio-iso16388)`code_93`Code 93 is a linear, continuous symbology with a variable length following [\[bc5\]](https://wicg.github.io/shape-detection-api/#biblio-bc5). It offers a larger information density than [Code 128](https://wicg.github.io/shape-detection-api/#code-128) and the visually similar [Code 39](https://wicg.github.io/shape-detection-api/#code-39). Code 93 is used primarily by Canada Post to encode supplementary delivery information.`codabar`Codabar is a linear barcode symbology developed in 1972 by Pitney Bowes Corp. (`data_matrix`Data Matrix is an orientation-independent two-dimensional barcode composed of black and white modules arranged in either a square or rectangular pattern following [\[iso16022\]](https://wicg.github.io/shape-detection-api/#biblio-iso16022).`ean_13`EAN-13 is a linear barcode based on the [UPC-A](https://wicg.github.io/shape-detection-api/#upc-a) standard and defined in [\[iso15420\]](https://wicg.github.io/shape-detection-api/#biblio-iso15420). It was originally developed by the International Article Numbering Association (EAN) in Europe as a superset of the original 12-digit Universal Product Code (UPC) system developed in the United States ([UPC-A](https://wicg.github.io/shape-detection-api/#upc-a) codes are represented in EAN-13 with the first character set to 0).`ean_8`EAN-8 is a linear barcode defined in [\[iso15420\]](https://wicg.github.io/shape-detection-api/#biblio-iso15420) and derived from [EAN-13](https://wicg.github.io/shape-detection-api/#ean-13).`itf`ITF14 barcode is the GS1 implementation of an Interleaved 2 of 5 bar code to encode a Global Trade Item Number. It is continuous, self-checking, bidirectionally decodable and it will always encode 14 digits. was once used in the package delivery industry but replaced by [Code 128](https://wicg.github.io/shape-detection-api/#code-128). [\[bc2\]](https://wicg.github.io/shape-detection-api/#biblio-bc2)`pdf417`PDF417 refers to a continuous two-dimensional barcode symbology format with multiple rows and columns, bi-directionally decodable and according to the Standard [\[iso15438\]](https://wicg.github.io/shape-detection-api/#biblio-iso15438).`qr_code`QR Code is a two-dimensional barcode respecting the Standard [\[iso18004\]](https://wicg.github.io/shape-detection-api/#biblio-iso18004). The information encoded can be text, URL or other data.`unknown`This value is used by the platform to signify that it does not know or specify which barcode format is being detected or supported.`upc_a`UPC-A is one of the most common linear barcode types and is widely applied to retail in the United States. Define in [\[iso15420\]](https://wicg.github.io/shape-detection-api/#biblio-iso15420), it represents digits by strips of bars and spaces, each digit being associated to a unique pattern of 2 bars and 2 spaces, both of variable width. UPC-A can encode 12 digits that are uniquely assigned to each trade item, and it’ss technically a subset of [EAN-13](https://wicg.github.io/shape-detection-api/#ean-13) (UPC-A codes are represented in [EAN-13](https://wicg.github.io/shape-detection-api/#ean-13) with the first character set to 0).`upc_e`UPC-E Barcode is a variation of [UPC-A](https://wicg.github.io/shape-detection-api/#upc-a) defined in [\[iso15420\]](https://wicg.github.io/shape-detection-api/#biblio-iso15420), compressing out unnecessary zeros for a more compact barcode.

### 3. Security and Privacy Considerations

_This section is non-normative._

This interface reveals information about the contents of an image source. It is critical for implementations to ensure that it cannot be used to bypass protections that would otherwise protect an image source from inspection. [§ 2.1 Image sources for detection](https://wicg.github.io/shape-detection-api/#image-sources-for-detection) describes the algorithm to accomplish this.

By providing high-performance shape detection capabilities this interface allows developers to run image analysis tasks on the local device. This offers a privacy advantage over offloading computation to a remote system. Developers should consider the results returned by this interface as privacy sensitive as the original image from which they were derived.

### 4. Examples

_This section is non-normative._

Slightly modified/extended versions of these examples (and more) can be found in e.g. [this codepen collection](https://codepen.io/collection/DwWVJj/).

#### 4.1. Platform support for a given detector

The following example can also be found in e.g. [this codepen](https://codepen.io/miguelao/pen/PbYpMv?editors=0010) with minimal modifications.

```
if (window.FaceDetector == undefined) {
  console.error('Face Detection not supported on this platform');
}
if (window.BarcodeDetector == undefined) {
  console.error('Barcode Detection not supported on this platform');
}
```

#### 4.2. Face Detection

The following example can also be found in e.g. [this codepen](https://codepen.io/miguelao/pen/ORYbbm?editors=0010) (or [this one](https://codepen.io/miguelao/pen/PmJWro), with landmarks overlay).

```
let faceDetector = new FaceDetector({fastMode: true, maxDetectedFaces: 1});
// Assuming |theImage| is e.g. a &lt;img> content, or a Blob.

faceDetector.detect(theImage)
.then(detectedFaces => {
  for (const face of detectedFaces) {
    console.log(
        ' Face @ (${face.boundingBox.x}, ${face.boundingBox.y}),' +
        ' size ${face.boundingBox.width}x${face.boundingBox.height}');
  }
}).catch(() => {
  console.error("Face Detection failed, boo.");
})
```

#### 4.3. Barcode Detection

The following example can also be found in e.g. [this codepen](https://codepen.io/miguelao/pen/wgrYjZ?editors=0010).

```
let barcodeDetector = new BarcodeDetector();
// Assuming |theImage| is e.g. a &lt;img> content, or a Blob.

barcodeDetector.detect(theImage)
.then(detectedCodes => {
  for (const barcode of detectedCodes) {
    console.log(' Barcode ${barcode.rawValue}' +
        ' @ (${barcode.boundingBox.x}, ${barcode.boundingBox.y}) with size' +
        ' ${barcode.boundingBox.width}x${barcode.boundingBox.height}');
  }
}).catch(() => {
  console.error("Barcode Detection failed, boo.");
})
```

### Conformance

#### Document conventions

Conformance requirements are expressed with a combination of descriptive assertions and RFC 2119 terminology. The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in the normative parts of this document are to be interpreted as described in RFC 2119. However, for readability, these words do not appear in all uppercase letters in this specification.

All of the text of this specification is normative except sections explicitly marked as non-normative, examples, and notes. [\[RFC2119\]](https://wicg.github.io/shape-detection-api/#biblio-rfc2119)

Examples in this specification are introduced with the words “for example” or are set apart from the normative text with `class="example"`, like this:

This is an example of an informative example.

Informative notes begin with the word “Note” and are set apart from the normative text with `class="note"`, like this:

Note, this is an informative note.

#### Conformant Algorithms

Requirements phrased in the imperative as part of algorithms (such as "strip any leading space characters" or "return false and abort these steps") are to be interpreted with the meaning of the key word ("must", "should", "may", etc) used in introducing the algorithm.

Conformance requirements phrased as algorithms or specific steps can be implemented in any manner, so long as the end result is equivalent. In particular, the algorithms defined in this specification are intended to be easy to understand and are not intended to be performant. Implementers are encouraged to optimize.

### Index

#### Terms defined by this specification

* ["aztec"](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-aztec), in § 2.3.3
* [aztec](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-aztec), in § 2.3.3
* [BarcodeDetector](https://wicg.github.io/shape-detection-api/#barcodedetector), in § 2.3
* [BarcodeDetector()](https://wicg.github.io/shape-detection-api/#dom-barcodedetector-barcodedetector), in § 2.3
* [BarcodeDetector(barcodeDetectorOptions)](https://wicg.github.io/shape-detection-api/#dom-barcodedetector-barcodedetector), in § 2.3
* [BarcodeDetectorOptions](https://wicg.github.io/shape-detection-api/#dictdef-barcodedetectoroptions), in § 2.3.1
* [BarcodeFormat](https://wicg.github.io/shape-detection-api/#enumdef-barcodeformat), in § 2.3.3
* boundingBox
  * [dict-member for DetectedBarcode](https://wicg.github.io/shape-detection-api/#dom-detectedbarcode-boundingbox), in § 2.3.2
  * [dict-member for DetectedFace](https://wicg.github.io/shape-detection-api/#dom-detectedface-boundingbox), in § 2.2.2
* ["codabar"](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-codabar), in § 2.3.3
* [codabar](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-codabar), in § 2.3.3
* ["code\_128"](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-code\_128), in § 2.3.3
* [Code 128](https://wicg.github.io/shape-detection-api/#code-128), in § 2.3.3
* [code\_128](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-code\_128), in § 2.3.3
* ["code\_39"](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-code\_39), in § 2.3.3
* [Code 39](https://wicg.github.io/shape-detection-api/#code-39), in § 2.3.3
* [code\_39](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-code\_39), in § 2.3.3
* ["code\_93"](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-code\_93), in § 2.3.3
* [code\_93](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-code\_93), in § 2.3.3
* constructor()
  * [constructor for BarcodeDetector](https://wicg.github.io/shape-detection-api/#dom-barcodedetector-barcodedetector), in § 2.3
  * [constructor for FaceDetector](https://wicg.github.io/shape-detection-api/#dom-facedetector-facedetector), in § 2.2
* [constructor(barcodeDetectorOptions)](https://wicg.github.io/shape-detection-api/#dom-barcodedetector-barcodedetector), in § 2.3
* [constructor(faceDetectorOptions)](https://wicg.github.io/shape-detection-api/#dom-facedetector-facedetector), in § 2.2
* [cornerPoints](https://wicg.github.io/shape-detection-api/#dom-detectedbarcode-cornerpoints), in § 2.3.2
* ["data\_matrix"](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-data\_matrix), in § 2.3.3
* [data\_matrix](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-data\_matrix), in § 2.3.3
* [DetectedBarcode](https://wicg.github.io/shape-detection-api/#dictdef-detectedbarcode), in § 2.3.2
* [DetectedFace](https://wicg.github.io/shape-detection-api/#dictdef-detectedface), in § 2.2.2
* detect(image)
  * [method for BarcodeDetector](https://wicg.github.io/shape-detection-api/#dom-barcodedetector-detect), in § 2.3
  * [method for FaceDetector](https://wicg.github.io/shape-detection-api/#dom-facedetector-detect), in § 2.2
* ["ean\_13"](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-ean\_13), in § 2.3.3
* [EAN-13](https://wicg.github.io/shape-detection-api/#ean-13), in § 2.3.3
* [ean\_13](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-ean\_13), in § 2.3.3
* ["ean\_8"](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-ean\_8), in § 2.3.3
* [ean\_8](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-ean\_8), in § 2.3.3
* ["eye"](https://wicg.github.io/shape-detection-api/#dom-landmarktype-eye), in § 2.2.2
* [eye](https://wicg.github.io/shape-detection-api/#dom-landmarktype-eye), in § 2.2.2
* [FaceDetector](https://wicg.github.io/shape-detection-api/#facedetector), in § 2.2
* [FaceDetector()](https://wicg.github.io/shape-detection-api/#dom-facedetector-facedetector), in § 2.2
* [FaceDetector(faceDetectorOptions)](https://wicg.github.io/shape-detection-api/#dom-facedetector-facedetector), in § 2.2
* [FaceDetectorOptions](https://wicg.github.io/shape-detection-api/#dictdef-facedetectoroptions), in § 2.2.1
* [fastMode](https://wicg.github.io/shape-detection-api/#dom-facedetectoroptions-fastmode), in § 2.2.1
* [format](https://wicg.github.io/shape-detection-api/#dom-detectedbarcode-format), in § 2.3.2
* [formats](https://wicg.github.io/shape-detection-api/#dom-barcodedetectoroptions-formats), in § 2.3.1
* [getSupportedFormats()](https://wicg.github.io/shape-detection-api/#dom-barcodedetector-getsupportedformats), in § 2.3
* ["itf"](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-itf), in § 2.3.3
* [itf](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-itf), in § 2.3.3
* [Landmark](https://wicg.github.io/shape-detection-api/#dictdef-landmark), in § 2.2.2
* [landmarks](https://wicg.github.io/shape-detection-api/#dom-detectedface-landmarks), in § 2.2.2
* [LandmarkType](https://wicg.github.io/shape-detection-api/#enumdef-landmarktype), in § 2.2.2
* [locations](https://wicg.github.io/shape-detection-api/#dom-landmark-locations), in § 2.2.2
* [maxDetectedFaces](https://wicg.github.io/shape-detection-api/#dom-facedetectoroptions-maxdetectedfaces), in § 2.2.1
* ["mouth"](https://wicg.github.io/shape-detection-api/#dom-landmarktype-mouth), in § 2.2.2
* [mouth](https://wicg.github.io/shape-detection-api/#dom-landmarktype-mouth), in § 2.2.2
* ["nose"](https://wicg.github.io/shape-detection-api/#dom-landmarktype-nose), in § 2.2.2
* [nose](https://wicg.github.io/shape-detection-api/#dom-landmarktype-nose), in § 2.2.2
* ["pdf417"](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-pdf417), in § 2.3.3
* [pdf417](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-pdf417), in § 2.3.3
* ["qr\_code"](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-qr\_code), in § 2.3.3
* [qr\_code](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-qr\_code), in § 2.3.3
* [rawValue](https://wicg.github.io/shape-detection-api/#dom-detectedbarcode-rawvalue), in § 2.3.2
* [type](https://wicg.github.io/shape-detection-api/#dom-landmark-type), in § 2.2.2
* ["unknown"](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-unknown), in § 2.3.3
* [unknown](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-unknown), in § 2.3.3
* ["upc\_a"](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-upc\_a), in § 2.3.3
* [UPC-A](https://wicg.github.io/shape-detection-api/#upc-a), in § 2.3.3
* [upc\_a](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-upc\_a), in § 2.3.3
* ["upc\_e"](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-upc\_e), in § 2.3.3
* [upc\_e](https://wicg.github.io/shape-detection-api/#dom-barcodeformat-upc\_e), in § 2.3.3

#### Terms defined by reference

* \[ECMASCRIPT] defines the following terms:
  * Array
* \[GEOMETRY-1] defines the following terms:
  * DOMRectReadOnly
* \[HTML] defines the following terms:
  * HAVE\_METADATA
  * HAVE\_NOTHING
  * HTMLCanvasElement
  * HTMLImageElement
  * HTMLVideoElement
  * ImageBitmapSource
  * in parallel
  * origin
  * readyState
* \[IMAGE-CAPTURE] defines the following terms:
  * Point2D
* \[WEBIDL] defines the following terms:
  * DOMException
  * DOMString
  * Exposed
  * FrozenArray
  * InvalidStateError
  * Promise
  * SecureContext
  * SecurityError
  * TypeError
  * boolean
  * sequence
  * unsigned short

### References

#### Normative References

\[ECMASCRIPT][_ECMAScript Language Specification_](https://tc39.es/ecma262/multipage/). URL: [https://tc39.es/ecma262/multipage/](https://tc39.es/ecma262/multipage/)\[GEOMETRY-1]Simon Pieters; Chris Harrelson. [_Geometry Interfaces Module Level 1_](https://drafts.fxtf.org/geometry/). URL: [https://drafts.fxtf.org/geometry/](https://drafts.fxtf.org/geometry/)\[HTML]Anne van Kesteren; et al. [_HTML Standard_](https://html.spec.whatwg.org/multipage/). Living Standard. URL: [https://html.spec.whatwg.org/multipage/](https://html.spec.whatwg.org/multipage/)\[IMAGE-CAPTURE]Miguel Casas-sanchez; Rijubrata Bhaumik. [_MediaStream Image Capture_](https://w3c.github.io/mediacapture-image/). URL: [https://w3c.github.io/mediacapture-image/](https://w3c.github.io/mediacapture-image/)\[RFC2119]S. Bradner. [_Key words for use in RFCs to Indicate Requirement Levels_](https://datatracker.ietf.org/doc/html/rfc2119). March 1997. Best Current Practice. URL: [https://datatracker.ietf.org/doc/html/rfc2119](https://datatracker.ietf.org/doc/html/rfc2119)\[WEBIDL]Edgar Chen; Timothy Gu. [_Web IDL Standard_](https://webidl.spec.whatwg.org/). Living Standard. URL: [https://webidl.spec.whatwg.org/](https://webidl.spec.whatwg.org/)

#### Informative References

\[2DCONTEXT]Rik Cabanier; et al. [_HTML Canvas 2D Context_](https://www.w3.org/html/wg/drafts/2dcontext/html5\_canvas\_CR/). URL: [https://www.w3.org/html/wg/drafts/2dcontext/html5\_canvas\_CR/](https://www.w3.org/html/wg/drafts/2dcontext/html5\_canvas\_CR/)\[BC2]_ANSI/AIM-BC2, Uniform Symbol Specification - Interleaved 2 of 5_. 1995.\[BC5]_ANSI/AIM-BC5, Uniform Symbol Specification - Code 93_. 1995.\[ISO15417][_Information technology -- Automatic identification and data capture techniques -- Code 128 bar code symbology specification_](https://www.iso.org/standard/43896.html). June 2007. URL: [https://www.iso.org/standard/43896.html](https://www.iso.org/standard/43896.html)\[ISO15420][_Information technology -- Automatic identification and data capture techniques -- EAN/UPC bar code symbology specification_](https://www.iso.org/standard/46143.html). Decemver 2009. URL: [https://www.iso.org/standard/46143.html](https://www.iso.org/standard/46143.html)\[ISO15438][_Information technology -- Automatic identification and data capture techniques -- PDF417 bar code symbology specification_](https://www.iso.org/standard/65502.html). September 2015. URL: [https://www.iso.org/standard/65502.html](https://www.iso.org/standard/65502.html)\[ISO16022][_Information technology -- Automatic identification and data capture techniques -- Data Matrix bar code symbology specification_](https://www.iso.org/standard/44230.html). September 2009. URL: [https://www.iso.org/standard/44230.html](https://www.iso.org/standard/44230.html)\[ISO16388][_nformation technology -- Automatic identification and data capture techniques -- Code 39 bar code symbology specification_](https://www.iso.org/standard/43897.html). May 2007. URL: [https://www.iso.org/standard/43897.html](https://www.iso.org/standard/43897.html)\[ISO18004][_Information technology -- Automatic identification and data capture techniques -- QR Code bar code symbology specification_](https://www.iso.org/standard/62021.html). February 2015. URL: [https://www.iso.org/standard/62021.html](https://www.iso.org/standard/62021.html)\[ISO24778][_Information technology -- Automatic identification and data capture techniques -- Aztec Code bar code symbology specification_](https://www.iso.org/standard/62021.html). February 2008. URL: [https://www.iso.org/standard/62021.html](https://www.iso.org/standard/62021.html)\[TEXT-DETECTION-API][_Accelerated Text Detection in Images_](https://wicg.github.io/shape-detection-api/text.html). cg-draft. URL: [https://wicg.github.io/shape-detection-api/text.html](https://wicg.github.io/shape-detection-api/text.html)

### IDL Index

```
[=(Window,Worker),
 ]
interface  {
  (optional   = {});
  <<>> ( );
};

dictionary  {
   ;
   ;
};

dictionary  {
  required  ;
  required <>? ;
};

dictionary  {
  required <> ;
   ;
};

enum  {
  ,
  ,
  
};

[=(Window,Worker),
 ]
interface  {
  (optional   = {});
  static <<>> ();

  <<>> ( );
};

dictionary  {
  <> ;
};

dictionary  {
  required  ;
  required  ;
  required  ;
  required <> ;
};

enum  {
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  
};
```

