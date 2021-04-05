class Game {
    constructor(){

    }

    start(){

        if(gameState === 0){
            form = new Form();
            form.display();
      
        }

        if(gameState === 1){
            formpage2 = new Formpage2();
            formpage2.display();  
            form.hide();
        }

    }

    play(){
        form.hide();
       formpage2.display();
    }

    update(state){
        gameState:state;
        
    }
}