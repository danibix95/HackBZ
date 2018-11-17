
const pictures = [
    {
        imageURL: "../imgs/brunico_1.jpeg",
        description: "Brunico, sul Ponte Rienza con la torre Kälberskopf (sulla sinistra) e la Cassa di Risparmio (sulla destra), 1910, Fotografa/o: Werth, Josef, Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B1855, CC BY 4.0"
    },
    {
        imageURL: "../imgs/brunico_2.jpeg",
        description: "Brunico, sul Ponte Rienza con la torre Kälberskopf (sulla sinistra) e la Cassa di Risparmio (sulla destra), 1910, Fotografa/o: Werth, Josef, Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B1855, CC BY 4.0"
    },
    {
        imageURL: "../imgs/brunico_1.jpeg",
        description: "Brunico, sul Ponte Rienza con la torre Kälberskopf (sulla sinistra) e la Cassa di Risparmio (sulla destra), 1910, Fotografa/o: Werth, Josef, Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B1855, CC BY 4.0"
    },
    {
        imageURL: "../imgs/brunico_2.jpeg",
        description: "Brunico, sul Ponte Rienza con la torre Kälberskopf (sulla sinistra) e la Cassa di Risparmio (sulla destra), 1910, Fotografa/o: Werth, Josef, Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B1855, CC BY 4.0"
    },
    {
        imageURL: "../imgs/brunico_1.jpeg",
        description: "Brunico, sul Ponte Rienza con la torre Kälberskopf (sulla sinistra) e la Cassa di Risparmio (sulla destra), 1910, Fotografa/o: Werth, Josef, Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B1855, CC BY 4.0"
    },
    {
        imageURL: "../imgs/brunico_2.jpeg",
        description: "Brunico, sul Ponte Rienza con la torre Kälberskopf (sulla sinistra) e la Cassa di Risparmio (sulla destra), 1910, Fotografa/o: Werth, Josef, Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B1855, CC BY 4.0"
    },
    {
        imageURL: "../imgs/brunico_1.jpeg",
        description: "Brunico, sul Ponte Rienza con la torre Kälberskopf (sulla sinistra) e la Cassa di Risparmio (sulla destra), 1910, Fotografa/o: Werth, Josef, Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B1855, CC BY 4.0"
    },
    {
        imageURL: "../imgs/brunico_2.jpeg",
        description: "Brunico, sul Ponte Rienza con la torre Kälberskopf (sulla sinistra) e la Cassa di Risparmio (sulla destra), 1910, Fotografa/o: Werth, Josef, Collezione Monika Weissteiner, Archivio storico di Brunico, Città di Brunico, B1855, CC BY 4.0"
    }
];


function generatePicture(image, id, description) {
    const picturesSpace = 6;
    const textX = 2.7
    const textY = 1.3
    let boxPos = `-3 2.5 ${-7 - picturesSpace*Math.floor(id/2)}`;
    let planePos = `-2.9 2.5 ${-7 - picturesSpace*Math.floor(id/2)}`;
    let planeRot = "0 90 0";
    let textPos = `-${textX} ${textY} ${-5 - picturesSpace*Math.floor(id/2)}`;
    let lightPos = `-2 5 ${-7 - picturesSpace*Math.floor(id/2)}`;
    if (id % 2 === 0) {
        boxPos = boxPos.slice(1);
        planePos = planePos.slice(1);
        planeRot = "0 -90 0";
        textPos = `${textX} ${textY} ${-9 - picturesSpace*Math.floor(id/2)}`;
        lightPos = lightPos.slice(1);
    }
    let box = document.createElement("a-box");
    box.setAttribute("position", boxPos);
    box.setAttribute("rotation", "0 90 0");
    box.setAttribute("width", "4.2");
    box.setAttribute("height", "3.6");
    box.setAttribute("depth", "0.1");
    box.setAttribute("src", "../textures/Wood05_col.jpg");

    // <a-box position=  ="4.2" ="4.2" depth="0.1" src="../textures/Wood05_col.jpg"></a-box>
    // <a-plane position="-2.9 2.5 -7" rotation="0 90 0" width="4" height="3" src="../imgs/brunico_1.jpeg"></a-plane>

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
    pictureLigth.setAttribute("light", "type: spot; range:60; intensity: 0.1");
    // pictureLigth.setAttribute("light", "type: point; intensity: 0.1; color:#F00");
    // if(id%2==0)
    // pictureLigth.setAttribute("light", "type: point; intensity: 0.1; color:#00F");
    pictureLigth.setAttribute("position", lightPos);
    pictureLigth.setAttribute("rotation", "-130 -90 -180");
    if (id%2==0)
        pictureLigth.setAttribute("rotation", "-130 90 -180");
    pictureLigth.setAttribute("castShadow", "true");
    pictureLigth.setAttribute("penumbra", "0.170");
    pictureLigth.setAttribute("shadowCameraVisible", "true");


    document.getElementById("scene").appendChild(box);
    document.getElementById("scene").appendChild(plane);
    document.getElementById("scene").appendChild(text);
    document.getElementById("scene").appendChild(pictureLigth);
}

function createGallery() {
    let id = 0;
    for (let img of pictures) generatePicture(img.imageURL, id++, img.description);
}

window.onload = createGallery;