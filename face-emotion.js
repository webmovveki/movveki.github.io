const emotions = [ "angry", "disgust", "fear", "happy", "neutral", "sad", "surprise" ];
let emotionModel = null;
(async () => {

    // Load Face Landmarks Detection
    model = await faceLandmarksDetection.load(
        faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
    );
    // Load Emotion Detection
    emotionModel = await tf.loadLayersModel( 'web/model/facemo.json' );

})();
async function predictEmotion( points ) {
    let result = tf.tidy( () => {
        const xs = tf.stack( [ tf.tensor1d( points ) ] );
        return emotionModel.predict( xs );
    });
    let prediction = await result.data();
    result.dispose();
    // Get the index of the maximum value
    let id = prediction.indexOf( Math.max( ...prediction ) );
    return emotions[ id ];
}
async function trackFace() {

    let points = null;
    faces.forEach( face => {

        // Add just the nose, cheeks, eyes, eyebrows & mouth
        const features = [
            "noseTip",
            "leftCheek",
            "rightCheek",
            "leftEyeLower1", "leftEyeUpper1",
            "rightEyeLower1", "rightEyeUpper1",
            "leftEyebrowLower", //"leftEyebrowUpper",
            "rightEyebrowLower", //"rightEyebrowUpper",
            "lipsLowerInner", //"lipsLowerOuter",
            "lipsUpperInner", //"lipsUpperOuter",
        ];
        points = [];
        features.forEach( feature => {
            face.annotations[ feature ].forEach( x => {
                points.push( ( x[ 0 ] - x1 ) / bWidth );
                points.push( ( x[ 1 ] - y1 ) / bHeight );
            });
        });
    });

    if( points ) {
        let emotion = await predictEmotion( points );
        setText( `Detected: ${emotion}` );
    }
    else {
        setText( "No Face" );
    }

    requestAnimationFrame( trackFace );
}