## Untitled Reality

This is [Alberto](https://github.com/albertoxamin)'s and [mine](https://github.com/danibix95) project we developed at the Vertical Innovation Hacktathon 2018 in Bozen. We focused on a tasks based on the Lichtbild Argento vivo open dataset, eploring what opportunities can provide Augumented Reality and Virtual Reality applied to those open data.

## AR Instagram & Facebook Filters
To use the filters on your device you should download [Spark AR Studio](https://sparkar.com/ar-studio) and open `time_machine.arproj` then press `Play` to view the effect on a sample video.
If you want to use it on your face, click `Video` and choose your webcam.
If you want to test it on your smartphone press `Mirror`


## Virtual Tour
In order to run the Virtual Tour locally, it is necessary to start a simple web server that serve the project page, `index.html`.
Accordingly, it is possible to exploit `python` to achieve this goal. Indeed, open a terminal in the `VR` folder and run the follwing command:

    python3 -m http.server

Then, oper your browser and visit the following link: (http://localhost:8000/src/index.html)

If you feel tired or you don't know where to start, you can enjoy a running demo at this [link](https://danibix95.github.io/HackBZ/VR/src/index.html).

**Note:** all the historical images are provided under Creative Commons licence (see each specific case) by Lichtbild Argento vivo project. Its portal can be found [here](https://www.lichtbild-argentovivo.eu/it/banca-dati-fotografica/archivi.html)
