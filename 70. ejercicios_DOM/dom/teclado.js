const d = document;
let x = 0,
    y = 0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        // el siguiente metodo regresa un objeto con la informacion de un componente como su altura y ancho y que tan separado esta de los top, left, right y bottom y su posicion en x y y 
        $limitsBall = $ball.getBoundingClientRect(),
        $limitsStage = $stage.getBoundingClientRect();

    console.log(e.keyCode);
    console.log(e.key);

    
    // segun sea el caso de e.keyCode, el codigo de cada tecla, flechas
    switch(e.keyCode){
        case 37:
            if($limitsBall.left > $limitsStage.left){
                e.preventDefault();
                x--;
            }
            break;
        case 38:
            if($limitsBall.top > $limitsStage.top){ 
                e.preventDefault();
                y--;
            }
            break;
        case 39:
            if($limitsBall.right < $limitsStage.right){ 
                e.preventDefault();
                x++;
            }
            break;
        case 40:
            if($limitsBall.bottom < $limitsStage.bottom){ 
                e.preventDefault();
                y++;
            }
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
    
}

export function shortcuts (e){
    /*
    // evento
    console.log(e);
    // tipo de evento
    console.log(e.type);
    // tecla presionada
    console.log(e.key);
    // codigo de la tecla
    console.log(e.keyCode);
    // si es que presiona ctrl (boolean)
    console.log(`Ctrl: ${e.ctrlKey}`);
    // si es que presiona alt (boolean)
    console.log(`Alt: ${e.altKey}`);
    // si es que presiona shift (boolean)
    console.log(`Shift: ${e.shiftKey}`);
    */

    // lanzar una alerta si Alt + A
    if(e.key === 'a' && e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }
    if(e.key === 'c' && e.altKey){
        confirm("Haz lanzado una confirmacion con el teclado");
    }
    if(e.key === 'p' && e.altKey){
        prompt("Haz lanzado un prompt con el teclado");
    }
}