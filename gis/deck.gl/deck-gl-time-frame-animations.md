# Deck GL Time Frame Animations

##

### Introduction

In my previous article, I covered a few different examples of using DeckGL with static data. In this article, I will demonstrate creating an animated visualization of NYC Taxi trip data.

### The Data

We will use a pre-formatted version of the NYC Taxi Trip data from the VisGL team. A single record in the dataset contains three fields: `vendor`, `path`, and `timestamps`.

```json
jsonCopy code{
  "vendor": 0,
  "path": [
    [-74.20986, 40.81773],
    [-74.20987, 40.81765],
    ...
  ],
  "timestamps": [1191, 1193.803, ...]
}
```

### Analysis of the Data

* The `vendor` field will be used for color differentiation.
* The `path` and `timestamp` fields are crucial for the TripsLayer to know which point to draw based on the map's current time.

### Trips Layer

We'll use the TripsLayer from DeckGL, defined as follows:

```javascript
javascriptCopy codenew TripsLayer({
  id: 'trips',
  data: '/data/detailed-trips.json',
  getPath: d => d.path,
  getTimestamps: d => d.timestamps,
  getColor: d => (d.vendor === 0 ? [253, 128, 93] : [23, 184, 190]),
  opacity: 0.5,
  widthMinPixels: 3,
  rounded: true,
  trailLength: 150,
  currentTime: 0,
})
```

### Animate Trips

To automate the stepping through time, we can use a `setInterval` or `window.requestAnimationFrame`.

#### Using `setInterval`

```javascript
javascriptCopy codeconst [time, setTime] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setTime(t => (t + step) % loopLength);
  }, intervalMS);
  return () => clearInterval(interval);
}, []);
```

#### Using `window.requestAnimationFrame`

This method provides smoother animations and is more efficient for complex visualizations.

```javascript
javascriptCopy codeconst [animation] = useState({});
const animate = () => {
  setTime(t => (t + step) % loopLength);
  animation.id = window.requestAnimationFrame(animate);
};
useEffect(() => {
  if (!running) {
    window.cancelAnimationFrame(animation.id);
    return;
  }
  animation.id = window.requestAnimationFrame(animate);
  return () => window.cancelAnimationFrame(animation.id);
}, [running]);
```

### React Component Implementation

```javascript
javascriptCopy codeimport React, { useState, useEffect } from 'react';
// ... other imports ...

const DeckGLTripsAnimateMap = ({ running }) => {
  // ... component logic ...
  
  return (
    // ... JSX ...
  );
}

export default DeckGLTripsAnimateMap;
```

\
