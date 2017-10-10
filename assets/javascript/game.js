$(document).ready(function() {
    
     // Objects within an object containing the four fighters of the game
      var fighters = {
        scorpion: {
          health: 180,
          attack: 15,
          counterAttack: 20,
          img: "assets/images/scorpion.png",
          name: "Scorpion",
        },
        subzero: {
          health: 160,
          attack: 18,
          counterAttack: 7,
          img: "assets/images/subzero.png",
          name: "Sub-Zero",
        },
        raiden: {
          health: 200,
          attack: 20,
          counterAttack: 8,
          img: "assets/images/raiden.png",
          name: "Raiden",
        },
        goro: {
          health: 220,
          attack: 25,
          counterAttack: 10,
          img: "assets/images/goro.png",
          name: "Goro",
        }
      };
    
      // Global Variables
      var charSelected = false;
      var opponentsLeft = 3;
      var opponentSelected = false;
      var myChar;
      var opponentChar;
    
      // Restarts the game
      function restartGame() {
        document.location.reload(true);
      }
    
      //Reset Button on click runs restartGame function
      $('#resetButton').on('click', function() {
          restartGame();
      });
    
    
    
      // Display the images in their containers
      $(".scorpion").html("<img src=" + fighters.scorpion.img + ">");
      $(".sub-zero").html("<img src=" + fighters.subzero.img + ">");
      $(".raiden").html("<img src=" + fighters.raiden.img + ">");
      $(".goro").html("<img src=" + fighters.goro.img + ">");
    
      // Function click to sort fighters as the players chosen fighter or the opponent
      function chooseChar() {
        $('.scorpion').on('click', function() {
          if (charSelected === false) {
            charSelected = true;
            $('.chosenChar').append(this);
            myChar = fighters.scorpion;
            $('#chosen').html(myChar.name);
            /*console.log(myChar);*/
            $('#instructions').html("Now choose your opponent!");
          }
          else if (charSelected === true && opponentSelected === false) {
            opponentSelected = true;
            $('.chosenOpp').append(this);
            opponentChar = fighters.scorpion;
            $('#opp').html(opponentChar.name);
            /*console.log(opponentChar);*/
            $('#instructions').html("Press FIGHT to begin combat!");
          }
          else {
            alert("Oops! You must defeat the current opponent before you can select another!");
          }
        });
    
        $('.sub-zero').on('click', function() {
          if (charSelected === false) {
            charSelected = true;
            $('.chosenChar').append(this);
            myChar = fighters.subzero;
            $('#chosen').html(myChar.name);
            /*console.log(myChar);*/
            $('#instructions').html("Now choose your opponent!");
          }
          else if (charSelected === true && opponentSelected === false) {
            opponentSelected = true;
            $('.chosenOpp').append(this);
            opponentChar = fighters.subzero;
            $('#opp').html(opponentChar.name);
            /*console.log(opponentChar);*/
            $('#instructions').html("Press FIGHT to begin combat!");
          }
          else {
            alert("Oops! You must defeat the current opponent before you can select another!");
          }
        });
    
        $('.raiden').on('click', function() {
          if (charSelected === false) {
            charSelected = true;
            $('.chosenChar').append(this);
            myChar = fighters.raiden;
            $('#chosen').html(myChar.name);
            /*console.log(myChar);*/
            $('#instructions').html("Now choose your opponent!");
          }
          else if (charSelected === true && opponentSelected === false) {
            opponentSelected = true;
            $('.chosenOpp').append(this);
            opponentChar = fighters.raiden;
            $('#opp').html(opponentChar.name);
            /*console.log(opponentChar);*/
            $('#instructions').html("Press Fight to begin combat!");
          }
          else {
            alert("Oops! You must defeat the current opponent before you can select another");
          }
        });
    
        $('.goro').on('click', function () {
          if (charSelected === false) {
            charSelected = true;
            $('.chosenChar').append(this);
            myChar = fighters.goro;
            $('#chosen').html(myChar.name);
            /*console.log(myChar);*/
            $('#instructions').html("Now choose your opponent!");
          }
          else if (charSelected === true && opponentSelected === false) {
            opponentSelected = true;
            $('.chosenOpp').append(this);
            opponentChar = fighters.goro;
            $('#opp').html(opponentChar.name);
            /*console.log(opponentChar);*/
            $('#instructions').html("Press Fight to begin combat!");
          }
          else {
            alert("Oops! You must defeat the current opponent before you can select another!");
          }
        });
    
      }
    
      chooseChar();
    
      // On click function for the attack button.
      $('#attackButton').on('click', function() {
        if (opponentSelected === true && myChar.health > 0 && opponentChar.health > 0) {
        opponentChar.health = opponentChar.health - myChar.attack;
        myChar.health = myChar.health - opponentChar.counterAttack;
        $('.myChar-health').html('<p>Health: ' +  myChar.health + '</p>');
        $('.opponent-health').html('<p>Health: ' +  opponentChar.health + '</p>');
        $('.battle-details').html('<p>You attacked ' + opponentChar.name + ' for ' + myChar.attack + ' damage</p>' + '<br>' + '<p>' + opponentChar.name + ' attacked you for ' + opponentChar.counterAttack + ' damage</p>');
        //Character attack gets 10 percent stronger each click
        myChar.attack = Math.round(myChar.attack * 1.1);
        }
        else {
          alert("Oops! Please select a new opponent before attacking!");
        }
    
        //Alert dead when players fighter health is below 0
        if (myChar.health <= 0 && opponentChar.health > 0) {  
           
          alert("DEFEATED! Click Restart to play again!");
              
        }
       
    
        if (myChar.health <= 0) {
          alert("DEFEATED! Click Restart to play again!");
         
        }
        
    
        //Alert when both fighters kill each other at the same time
        if (myChar.health <= 0 && opponentChar.health <= 0) {
          
          alert("You Killed your opponent but you were also DEFEATED! Click Restart to play again!");
          
         
        }
        
        //When player defeats enemy, reduce opponents left count by 1, removes character from the opponent div, alerts player to select another opponent
        if (opponentSelected === true && opponentChar.health <= 0){
          opponentsLeft--;
    
          opponentSelected = false;
          $('.chosenOpp').empty();
          $('.opponent-health').empty();
          $('.battle-details').empty(); 
         
          alert("Victory! You defeated " + opponentChar.name + "! Now select another fighter to battle");
          $('#instructions').html("Select a new opponent");
          
        }
    
        if (opponentsLeft === 0) {     
          
          alert("WINNER! YOU HAVE DEFEATED ALL OF THE FIGHTERS!");
          $('#instructions').html("Press Restart to play again!");
        
    
        }
      });
    
    });