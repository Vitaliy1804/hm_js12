
draw.onclick= function(){

    document.getElementById("draw").remove();

    let diameterCircule = document.createElement("input");
    diameterCircule.className = "diametr-circle";
    document.body.appendChild(diameterCircule);
    diameterCircule.setAttribute('placeholder','Введите диаметр круга в px');

    let colorCircule = document.createElement("input");
    colorCircule.className = "color-circle";
    colorCircule.setAttribute('placeholder','Введите цвет круга');

    document.body.appendChild(colorCircule);

    let btndraw = document.createElement('button');
    btndraw.innerHTML = "Нарисовать круг";
    btndraw.className = "btndraw";
    document.body.appendChild(btndraw);

    btndraw.onclick = function () {

        let circle = `<div id = "circle" style = "margin: 20px auto;
    border-radius: 50%;

    background-color: ${colorCircule.value};
    height: ${diameterCircule.value + "px"};
    width: ${diameterCircule.value + "px"}">
    </div>`;
        document.body.innerHTML = circle;
    }
}

