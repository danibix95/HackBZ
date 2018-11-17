
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

function generatePicture(image, id, description) {
    const picturesSpace = 6;
    let boxPos = `-3 2.5 ${-7 - picturesSpace*Math.floor(id/2)}`;
    let planePos = `-2.9 2.5 ${-7 - picturesSpace*Math.floor(id/2)}`;
    let planeRot = "0 90 0";
    let textPos = `-2.8 0.5 ${-5 - picturesSpace*Math.floor(id/2)}`;
    let lightPos = `-2 3 ${-7 - picturesSpace*Math.floor(id/2)}`;
    if (id % 2 === 0) {
        boxPos = boxPos.slice(1);
        planePos = planePos.slice(1);
        planeRot = "0 -90 0";
        textPos = `2.8 0.5 ${-9 - picturesSpace*Math.floor(id/2)}`;
        lightPos = lightPos.slice(1);
    }
    let box = document.createElement("a-box");
    box.setAttribute("position", boxPos);
    box.setAttribute("rotation", "0 90 0");
    box.setAttribute("width", "4.2");
    box.setAttribute("height", "3.6");
    box.setAttribute("depth", "0.1");
    box.setAttribute("src", "../textures/Wood05_col.jpg");

    let plane = document.createElement("a-plane");
    plane.setAttribute("position", planePos);
    plane.setAttribute("rotation", planeRot);
    plane.setAttribute("width", "4");
    plane.setAttribute("height", "3");
    plane.setAttribute("src", image);
    plane.setAttribute("event-set__enter",  `_event: mouseenter; _target: #picture_text${id}; visible: true`);
    plane.setAttribute("event-set__leave",  `_event: mouseleave; _target: #picture_text${id}; visible: false`);

    let text = document.createElement("a-text");
    text.setAttribute("id", `picture_text${id}`);
    text.setAttribute("value", description);
    text.setAttribute("align", "left");
    // text.setAttribute("color", "#FFF");
    text.setAttribute("visible", "false");
    text.setAttribute("position", textPos);
    text.setAttribute("rotation", planeRot);
    text.setAttribute("width", "2");
    text.setAttribute("wrapCount", "7");

    let pictureLigth = document.createElement("a-entity");
    pictureLigth.setAttribute("light", "type: spot; angle: 180; intensity: 0.1");
    pictureLigth.setAttribute("position", lightPos);
    pictureLigth.setAttribute("castShadow", "true");
    pictureLigth.setAttribute("shadowCameraVisible", "true");


    document.getElementById("scene").appendChild(box);
    document.getElementById("scene").appendChild(plane);
    document.getElementById("scene").appendChild(text);
    document.getElementById("scene").appendChild(pictureLigth);
}

function generateCorridor(segments) {
    for (let i = 0; i < segments; i++ ) {
        let corridor = document.createElement("a-plane");
        corridor.setAttribute("position", `0 0 ${-2-4*i}`);
        corridor.setAttribute("rotation", "-90 0 90");
        corridor.setAttribute("width", "4");
        corridor.setAttribute("height", "4");
        corridor.setAttribute("material", "shader: standard; src: ../textures/WoodFloor16_col.jpg; normalMap: ../textures/WoodFloor16_nrm.jpg");

        document.getElementById("scene").appendChild(corridor);
    }
}

function createGallery() {
    generateCorridor(7);
    let id = 0;
    for (let img of BrunicoPictures) generatePicture(img.imageURL, id++, img.description);
}

window.onload = createGallery;