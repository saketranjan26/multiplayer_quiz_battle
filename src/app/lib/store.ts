interface Quiz{
    id:string;
    players:string[];
}

class GameManager {
    private quizes: Quiz[] = [];

    public addGame(quiz:Quiz){
        const game = this.quizes.push(quiz)
        if(game){
            console.log("quiz added") 
            return true
        }else{
            console.log("error in adding quiz")
            return false 
        }
    }

    // add deleteGame method so that only live quiz is saved in BE
    // the method will be called when the author of quiz ends it. 

   

    public addPlayer(quizId:string, player:string){
        console.log("this is list of quizes",this.quizes)
        const quiz = this.quizes.find(quiz => quiz.id === quizId);
        if(quiz){
            quiz.players.push(player)
            console.log("player is added",quiz.players)
            return true
        }else{
            console.log("player not added")
            return false
        }
    }

    public removePlayer(quizId: string, player: string) {
        const quiz = this.quizes.find(quiz => quiz.id === quizId);
        if (quiz) {
            const index = quiz.players.indexOf(player);
            if (index > -1) {
                quiz.players.splice(index, 1);
                console.log("player removed successfully")
            }
        }
    }

    public getPlayers(id:string){
        console.log("getPlayers called",id)
        const quizess = this.quizes;
        console.log("from this quiz will be find",quizess)
        const quiz = this.quizes.find(quiz => quiz.id === id);
        if(quiz){
            console.log("quiz found and this is players list",quiz.players)
            return quiz.players
        }else{
            console.log("quiz not found")
            return []
        }
    }
}



export const gameManager = new GameManager();