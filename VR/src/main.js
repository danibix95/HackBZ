/* Virtual Tour Data */

// Note: before this concept, we explored different ideas and the we also tried to directly download
// images from url provided by the open data portal.
// However, we encountered some issues with CORS requests related to the server of images provider.
// This is the reason why we chose to retrieved locally the images and their description.

// Future work: move these data to external json file and try to adopt the direct download solution

const BrunicoPictures = [
    {
        imageURL: "../imgs/brunico_B1855.jpeg",
        description: "Brunico, sul Ponte Rienza con la torre Kälberskopf (sulla sinistra) e la Cassa di Risparmio (sulla destra), 1910, Fotografa/o: Werth, Josef, Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B1855, CC BY 4.0"
    },
    {
        imageURL: "../imgs/brunico_B3209.jpeg",
        description: "Veduta di Rio di Pusteria con la Cima di Terento e la chiesa parrocchiale, 1910, Fotografa/o: Sandbichler, Anna, Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B3209, CC BY 4.0"
    },
    {
        imageURL: "../imgs/brunico_B1884.jpeg",
        description: "Brunico, veduta della Chiesa con Convento delle Orsoline e Porta delle Orsoline, 1905, Fotografa/o: Just, Hermann, Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B1884, CC BY 4.0"
    },
    {
        imageURL: "../imgs/brunico_B3744.jpeg",
        description: "La Caffetteria Ebner e l'Albergo Emma a Villabassa, 1902, Fotografa/o: Stengel & Co., Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B3744, CC BY 4.0"
    },
    {
        imageURL: "../imgs/brunico_B1645.jpeg",
        description: "Vista di Brunico sulla Rienza in Val Pusteria, 1910, Fotografa/o: Werth, Josef, Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B1645, CC BY 4.0"
    },
    {
        imageURL: "../imgs/brunico_B4114.jpeg",
        description: "Grandhotel Misurina verso le Tre Cime di Lavaredo, 1906, Fotografa/o: Stengel & Co., Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B4114, CC BY 4.0"
    },
    {
        imageURL: "../imgs/brunico_B2036.jpeg",
        description: "Teodone, veduta da Brunico con sguardo verso il Sasso Nero, 1910, Fotografa/o: Gerstenberger & Müller, Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B2036, CC BY 4.0"
    },
    {
        imageURL: "../imgs/brunico_B2418.jpeg",
        description: "Veduta di Bressanone verso Varna, 1900, Fotografa/o: Sconosciuto, Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B2418, CC BY 4.0"
    }
];

const GagglPictures = [
    {
        imageURL: "../imgs/gaggl_L3085.jpeg",
        description: "Gita estiva a piedi lungo il sentiero Sajat presso Prägraten am Großvenediger, 1976, Fotografa/o: Gaggl-Meirer, Lisl, Collezione Lisl Gaggl-Meirer, Archivio Tirolese per la documentazione e l’arte fotografica, L3085, CC BY 4.0"
    },
    {
        imageURL: "../imgs/gaggl_L3086.jpeg",
        description: "Sguardo lungo la strada sul Felbertauern, 1976, Fotografa/o: Gaggl-Meirer, Lisl, Collezione Lisl Gaggl-Meirer, Archivio Tirolese per la documentazione e l’arte fotografica, L3086, CC BY 4.0"
    },
    {
        imageURL: "../imgs/gaggl_L3087.jpeg",
        description: "Il Lago “Schwarzsee” lungo il sentiero ”St. Pöltner Ostweg”, 1976, Fotografa/o: Gaggl-Meirer, Lisl, Collezione Lisl Gaggl-Meirer, Archivio Tirolese per la documentazione e l’arte fotografica, L3087, CC BY 4.0"
    },
    {
        imageURL: "../imgs/gaggl_L3088.jpeg",
        description: "Il Picco dei Tre Signori con il fiume Isel, 1983, Fotografa/o: Gaggl-Meirer, Lisl, Collezione Lisl Gaggl-Meirer, Archivio Tirolese per la documentazione e l’arte fotografica, L3088, CC BY 4.0"
    },
    {
        imageURL: "../imgs/gaggl_L3070.jpeg",
        description: "Castello di Bruck, Lienz, 1980, Fotografa/o: Gaggl-Meirer, Lisl, Collezione Lisl Gaggl-Meirer, Archivio Tirolese per la documentazione e l’arte fotografica, L3070, CC BY 4.0"
    },
    {
        imageURL: "../imgs/gaggl_L3089.jpeg",
        description: "L’alba a Bannberg, 1984, Fotografa/o: Gaggl-Meirer, Lisl, Collezione Lisl Gaggl-Meirer, Archivio Tirolese per la documentazione e l’arte fotografica, L3089, CC BY 4.0"
    },
];

/* ========================================== */

function generatePicturesBrunico(image, id, description) {
    const picturesSpace = 6;
    const textX = 2.9;
    const textY = 1.4;
    let boxPos = `-3 2.8 ${-7 - picturesSpace*Math.floor(id/2)}`;
    let planePos = `-2.9 3.2 ${-7 - picturesSpace*Math.floor(id/2)}`;
    let planeRot = "0 90 0";
    let textPos = `-${textX} ${textY} ${-5 - picturesSpace*Math.floor(id/2)}`;
    let lightPos = `-2 5 ${-7 - picturesSpace*Math.floor(id/2)}`;
    if (id % 2 === 0) {
        boxPos = boxPos.slice(1);
        planePos = planePos.slice(1);
        planeRot = `0 -90 0`;
        textPos = `${textX} ${textY} ${-9 - picturesSpace*Math.floor(id/2)}`;
        lightPos = lightPos.slice(1);
    }
    let box = document.createElement("a-box");
    box.setAttribute("position", boxPos);
    box.setAttribute("rotation", `0 90 0`);
    box.setAttribute("width", "4.2");
    box.setAttribute("height", "4");
    box.setAttribute("depth", "0.1");
    box.setAttribute("src", "../textures/Wood05_col.jpg");

    let plane = document.createElement("a-plane");
    plane.setAttribute("position", planePos);
    plane.setAttribute("rotation", planeRot);
    plane.setAttribute("width", "4");
    plane.setAttribute("height", "3");
    plane.setAttribute("src", image);
    // plane.setAttribute("event-set__enter",  `_event: mouseenter; _target: #picture_text_a_${id}; visible: true`);
    // plane.setAttribute("event-set__leave",  `_event: mouseleave; _target: #picture_text_a_${id}; visible: false`);

    let text = document.createElement("a-text");
    text.setAttribute("id", `picture_text_a_${id}`);
    text.setAttribute("value", description);
    text.setAttribute("align", "left");
    text.setAttribute("color", "#202020");
    text.setAttribute("visible", "true");
    text.setAttribute("position", textPos);
    text.setAttribute("rotation", planeRot);
    text.setAttribute("width", "2");
    text.setAttribute("wrapCount", "7");

    let pictureLigth = document.createElement("a-entity");
    pictureLigth.setAttribute("light", "type: spot; range:60; intensity: 0.1");
    // pictureLigth.setAttribute("light", "type: point; intensity: 0.1; color:#F00");
    // if(id%2==0)
    // pictureLigth.setAttribute("light", "type: point; intensity: 0.1; color:#00F");
    pictureLigth.setAttribute("position", lightPos);
    pictureLigth.setAttribute("rotation", `-130 -90 -180`);
    if (id % 2 === 0)
        pictureLigth.setAttribute("rotation", `-130 90 -180`);
    pictureLigth.setAttribute("castShadow", "true");
    pictureLigth.setAttribute("penumbra", "0.170");
    pictureLigth.setAttribute("shadowCameraVisible", "true");


    document.getElementById("scene").appendChild(box);
    document.getElementById("scene").appendChild(plane);
    document.getElementById("scene").appendChild(text);
    document.getElementById("scene").appendChild(pictureLigth);
}

function generatePicturesGaggl(image, id, description) {
    const picturesSpace = 6;
    const textZ = 2.9;
    const textY = 1.4;
    let boxPos = `${7 + picturesSpace*Math.floor(id/2)} 2.8 3`;
    let planePos = `${7 + picturesSpace*Math.floor(id/2)} 3.2 2.9`;
    let planeRot = "0 180 0";
    let textPos = `${9 + picturesSpace*Math.floor(id/2)} ${textY} ${textZ}`;
    let lightPos = `${7 + picturesSpace*Math.floor(id/2)} 5 2`;
    if (id % 2 !== 0) {
        boxPos = `${7 + picturesSpace*Math.floor(id/2)} 2.8 -3`;
        planePos = `${7 + picturesSpace*Math.floor(id/2)} 3.2 -2.9`;
        planeRot = `0 0 0`;
        textPos = `${5 + picturesSpace*Math.floor(id/2)} ${textY} -${textZ}`;
        lightPos = `${7 + picturesSpace*Math.floor(id/2)} 5 -2`;
    }
    let box = document.createElement("a-box");
    box.setAttribute("position", boxPos);
    box.setAttribute("rotation", `0 0 0`);
    box.setAttribute("width", "4.2");
    box.setAttribute("height", "4");
    box.setAttribute("depth", "0.1");
    box.setAttribute("src", "../textures/Wood05_col.jpg");

    let plane = document.createElement("a-plane");
    plane.setAttribute("position", planePos);
    plane.setAttribute("rotation", planeRot);
    plane.setAttribute("width", "4");
    plane.setAttribute("height", "3");
    plane.setAttribute("src", image);
    // plane.setAttribute("event-set__enter",  `_event: mouseenter; _target: #picture_text_b_${id}; visible: true`);
    // plane.setAttribute("event-set__leave",  `_event: mouseleave; _target: #picture_text_b_${id}; visible: false`);

    let text = document.createElement("a-text");
    text.setAttribute("id", `picture_text_b_${id}`);
    text.setAttribute("value", description);
    text.setAttribute("align", "left");
    text.setAttribute("color", "#202020");
    text.setAttribute("visible", "true");
    text.setAttribute("position", textPos);
    text.setAttribute("rotation", planeRot);
    text.setAttribute("width", "2");
    text.setAttribute("wrapCount", "7");

    let pictureLigth = document.createElement("a-entity");
    pictureLigth.setAttribute("light", "type: spot; range:60; intensity: 0.1");
    // pictureLigth.setAttribute("light", "type: point; intensity: 0.1; color:#F00");
    // if(id%2==0)
    // pictureLigth.setAttribute("light", "type: point; intensity: 0.1; color:#00F");
    pictureLigth.setAttribute("position", lightPos);
    pictureLigth.setAttribute("rotation", `-130 0 -180`);
    if (id % 2 === 0)
        pictureLigth.setAttribute("rotation", `-130 180 -180`);
    pictureLigth.setAttribute("castShadow", "true");
    pictureLigth.setAttribute("penumbra", "0.170");
    pictureLigth.setAttribute("shadowCameraVisible", "true");


    document.getElementById("scene").appendChild(box);
    document.getElementById("scene").appendChild(plane);
    document.getElementById("scene").appendChild(text);
    document.getElementById("scene").appendChild(pictureLigth);
}

function generateCorridor(segments, posSelect, rotation) {
    for (let i = 0; i < segments; i++ ) {
    let pos = posSelect ? `0 0 ${-2-4*i}` : `${2+4*i} 0 0`;
        let corridor = document.createElement("a-plane");
        corridor.setAttribute("position",  pos);
        corridor.setAttribute("rotation", `-90 0 ${rotation}`);
        corridor.setAttribute("width", "4");
        corridor.setAttribute("height", "4");
        corridor.setAttribute("material", "shader: standard; src: ../textures/WoodFloor16_col.jpg; normalMap: ../textures/WoodFloor16_nrm.jpg");

        document.getElementById("scene").appendChild(corridor);
    }
}

// <a-plane position="2 0 0" rotation="-90 0 0" width="4" height="4" color="skyblue"></a-plane>
//     <a-plane position="6 0 0" rotation="-90 0 0" width="4" height="4" color="skyblue"></a-plane>

function createGallery() {
    generateCorridor(7, true, 90);
    generateCorridor(6, false, 180);
    let id = 0;
    for (let img of BrunicoPictures) generatePicturesBrunico(img.imageURL, id++, img.description);
    id = 0;
    for (let img of GagglPictures) generatePicturesGaggl(img.imageURL, id++, img.description);
}

window.onload = createGallery;