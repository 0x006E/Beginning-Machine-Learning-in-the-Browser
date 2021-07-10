const image = document.getElementById('image');

const result = document.getElementById('result');

const probability = document.getElementById('probability');

document.getElementById('getval').addEventListener('change', readURL, true);

function readURL() {
    var file = document.getElementById("getval").files[0];
    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            image
                .src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}

ml5.imageClassifier('MobileNet')

    .then(classifier => classifier.classify(image))

    .then(results => {
        
        result.innerText = results[0].label;
        probability.innerText = results[0].confidence.toFixed(4);

    });



