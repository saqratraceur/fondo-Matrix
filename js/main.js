let elemento = document.getElementById('matrix')
////en cuantas dimensiones o contextos vamos a trabajar
let ctx = elemento.getContext('2d')
let width = document.body.clientWidth
let height = document.body.clientHeight

elemento.width = width
elemento.height = height

//crearemos una variable llamada posicion y va ser igual a 
//ser un Arrar y va a almacenar 300 elementos, le aumentaremos el metodo join, 
//y le pasaremos la variable 0 para que vaya agregando desde el inicio
let posicion = Array(300).join(0).split('')

//creamos nuestra función de matrix
function initMatrix(){
    //ctx para empezamos a dibujar, fillStyle va a ser igual a un color, y le pondremos lso valosres rba, y va rellenar con el color
    //0, 20, 1 y en cuestion de transparencia sera 0.5
    ctx.fillStyle = "rgba(0, 30, 1, 0.5)"
    //decimos que fillRect y como parametros  0, 0, width, height
    ctx.fillRect(0, 0, width, height)
    //Color de nuestra fuente
    ctx.fillStyle = "#37CC05"
    ///definir directamente la fuente  con ctx.font y le pasamos el tamaño de la fuente  y el tipo de fuente
    ctx.font = "11pt arial"

    //usamos la variable posicion y usamos map que es un array, y le pasamos una funcion  que tiene dos parametros y, index
    posicion.map(function(y, index){
        //l declaramos texto, va a ser igual  a una  cadena de caracteres, 
        let texto = String.fromCharCode(1e2 + Math.random() * 30)
        let x = (index * 15) + 15

        matrix.getContext('2d').fillText(texto, x, y)
        if(y > 100 + Math.random() * 1e5){
            posicion[index] = 0
        }else{
            posicion[index] = y + 15
        }
    })
}

//declarar un set interavl y como parametros le vamos a psar  initMatrix, y 50 milicegundos
setInterval(initMatrix, 50)