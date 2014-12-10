
/* ===== PSEUDO-CODE for a number guessing game =====
 *
 * GOAL: CREATING A NUMBER-GUESSING GAME
 *
 * NOTE: There are two players:
 *       --> 1st player determines the number to be guessed;
 *       --> 2nd player tries to guess the number the 1st player chose.
 *
 *       pseudo-code to come...
 * */

// =============================================== GENERAL SETTINGS ===================================================

    // ===== VARIABLES, ARRAYS AND OBJECTS STATEMENTS =====

        /* Creating undefined variables */

        var playerName;                 // To prompt players to enter their name, and later store it in an array (playerID).
        var confirmPlayersIdentity;     // To know whether it's the 1st player or the 2nd player who's currently playing.
        var playerNumberInput;          // To prompt players to choose a number from 1 to 100, and later store it in an array (playersChosenNumber).
        var playerNumberInputOk;        // To test whether 1st player's input number is in range.
        var counter;                    // To create a counter to be used in a loop.


        /* Creating an empty array to store players' ID, and assigning it to the variable (playerID) */

        var playerID = [];


        /* Creating an empty array to store each player's chose number for later use in STEP 3,
         * by assigning it to a new variable (playersChosenNumber) */

        var playersChosenNumber = [];


        /* Creating an empty array to store each number chosen by the 2nd player, at each try.  */

        var player2GuessedNumbers = [];


        /* Creating an object to store message strings intended to the players, for later use in a shorten version of
         * this JavaScript file */

        var messagesToPlayer = {
        "welcomeEnterName": "WELCOME TO THE NUMBER-GUESSING GAME! Please enter your name.",
        "confirmPlayersID": "If you are the FIRST PLAYER, type: 1. \n\nIf you are the SECOND PLAYER, type: 2.",
        "chooseANumber": ": Choose a number from 1 to 100, enter it here, and keep it for yourself.",
        "guessWhatNumber": ": Guess WHAT NUMBER the first player chose! Enter a number from 1 to 100 here.",
        "congratulationsWinner": "CONGRATULATIONS! YOUR GUESS WAS RIGHT AND YOU WON THE GAME!",
        "guessIsLower": "Your guess is LOWER than the number chosen by the first player. You have ",
        "guessIsHigher": "Your guess is HIGHER than the number chosen by the first player. You have ",
        "turnsLeft": " TURN(S) LEFT after this turn. LIST OF THE NUMBERS YOU TRIED: ",
        "tryAgain": " Click OK to try again.",
        "gameOverThankYou": "GAME OVER! THANK YOU FOR YOUR PARTICIPATION! \n\nHERE'S THE LIST OF THE NUMBERS YOU TRIED: ",
        "firstPlayerNumberWas": " \n\nFIRST PLAYER'S NUMBER WAS: ",
        "errorNumberNotInRange": "ERROR! The number you chose is NOT between 1 and 100! Click OK to enter a number BETWEEN 1 AND 100.",
        "errorPlayerIdentity": "ERROR! INVALID OPTION! You must enter \n\nEITHER: \n\n1  --> If you are the FIRST player \n(i.e. the one choosing the number to be guessed by the other player). \n\nOR: \n\n2  --> If you're the SECOND player \n(i.e. the one guessing what number the first player chose). \n\nClick OK to try again."
        };


    // ==== REUSABLE CODE - FUNCTIONS STATEMENTS ======================================================================


        /* Asking players to enter their name and store it in an array (playerID). */

        function enterPlayerName () {

            /* Asking the 1st player to enter his/her name. */

            playerName = prompt(messagesToPlayer["welcomeEnterName"]);

            console.log(playerName);
            // --> Just to make sure the value returned is okay.

            /* Pushing players' name (playerName) to LAST index position of the array (playerID),
             * for later use in some messages to players (messagesToPlayer), in order to convey some warmth
             * to the game (i.e. by personalizing it at least a tiny bit). */

            playerID.push(playerName);

            console.log(playerID);
            // --> Just to make sure the array is working fine and stores the right value at the right index position.


            /* Determining who's currently playing at various stages of the game,
             * --> so that the right message gets delivered to the right player at the right time
             * --> but mainly to be able to create proper conditional expressions,
             *     in order to avoid repeating myself as much as possible. */

            confirmPlayersIdentity = +prompt (messagesToPlayer["confirmPlayersID"]);

            console.log("This is player " + confirmPlayersIdentity + ".");
            // --> Just to make sure the value returned is okay.
        }

        // ===========================================================================================================


        /* Asking 1st player (playerID[0]) to CHOOSE a number to be guessed by the 2nd player.
         * OR, if it is second player's turn:
         * Asking 2nd player (playerID[1]) to GUESS what number the 1st player chose.
         * AND
         * Store each of these numbers in an array (playersChosenNumber) */

        function enterPlayerNumber () {

            /* Delivering proper PROMPT message to the right player. */

            if (confirmPlayersIdentity === 1) {

                /* Prompting 1st player to CHOOSE a number from 1 to 100, and convert that string to a number. */

                playerNumberInput = +prompt (playerID[0] + messagesToPlayer["chooseANumber"]);

                console.log ("This is " + playerID[0] + " INPUT number: " + playerNumberInput);
                // --> Just to make sure the value returned is okay.


            } else if (confirmPlayersIdentity === 2) {

                /* Prompting 2nd player to GUESS a number from 1 to 100, and convert that string to a number. */

                playerNumberInput = +prompt (playerID[1] + messagesToPlayer["guessWhatNumber"]);

                console.log ("This is " + playerID[1] + " INPUT number: " + playerNumberInput);
                // --> Just to make sure the value returned is okay.
            }


            // ===== TESTING WHETHER PLAYERS' INPUT NUMBER IS IN RANGE ===============================================

                playerNumberInputOk = isNumberInRange(1, 100, playerNumberInput);

                console.log ("VALUE RETURNED: " + playerNumberInputOk + ": (TRUE --> no WHILE loop; FALSE --> WHILE loop begins here");
                // --> Just to make sure the function is working fine and returning a TRUE or FALSE value.


                    /* If player's input number is NOT IN RANGE, this WHILE loop will keep running
                     * until the player enters a number in range. */

                    while (playerNumberInputOk !== true) {

                        alert (messagesToPlayer["errorNumberNotInRange"]);

                        if (confirmPlayersIdentity === 1) {

                            /* Prompting 1st player to CHOOSE a number from 1 to 100, and convert that string to a number. */

                            playerNumberInput = +prompt (playerID[0] + messagesToPlayer["chooseANumber"]);

                            //console.log (playerNumberInput);
                            // --> Just to make sure the value returned is now okay.

                        } else if (confirmPlayersIdentity === 2) {

                            /* Prompting 2nd player to GUESS a number from 1 to 100, and convert that string to a number. */

                            playerNumberInput = +prompt (playerID[1] + messagesToPlayer["guessWhatNumber"]);

                            //console.log (playerNumberInput);
                            // --> Just to make sure the value returned is now okay.

                        }

                        playerNumberInputOk = isNumberInRange(1, 100, playerNumberInput);

                        console.log ("VALUE RETURNED: " + playerNumberInputOk + " (TRUE --> END OF WHILE loop, number is NOW IN RANGE.)");
                        // --> Just to make sure the returned value is now TRUE.
                    }


                if (confirmPlayersIdentity === 2) {

                    playersChosenNumber[1] = playerNumberInput;

                    console.log(playersChosenNumber);
                    // --> Just to make sure the array is working fine before coding further. */


                    /* === STORING 2ND PLAYER'S INPUT NUMBERS =========================================================
                     * --> To provide the 2nd player with a list of all his/her guesses */


                    /* Pushing 2nd player's chosen number (playerNumberInput) to LAST index position in
                     * array (player2GuessedNumbers). */

                    player2GuessedNumbers.push(playerNumberInput);

                    console.log(player2GuessedNumbers);
                    // --> Just to make sure the array is working fine before coding further. */

                } else if (confirmPlayersIdentity === 1) {

                    playersChosenNumber[0] = playerNumberInput;

                    console.log(playersChosenNumber);
                    // --> Just to make sure the array is working fine before coding further. */
                }

        }

        // ===========================================================================================================

            /* Testing the number entered by the 1st player is in range (i.e. between 1 and 100).
             * NOTE: Value returned will be either TRUE or FALSE. */

            function isNumberInRange (minValue, maxValue, playerNumberInput) {
                /*var inRange = playerNumberInput >= minValue && playerNumberInput <= maxValue;
                 return inRange;*/
                return playerNumberInput >= minValue && playerNumberInput <= maxValue;
            }


// ==== STEP 1 - 1ST PLAYER'S TURN ====================================================================================


    /* Asking the 1st player to enter his/her name and storing it in array (playerID). */

    enterPlayerName();


    /* Prompting 1st player to CHOOSE a number from 1 to 100, and convert that string to a number. */

    enterPlayerNumber();


// ==== STEP 2 - 2nd PLAYER'S TURN - ENCAPSULATING THIS IN A FOR LOOP IN ORDER TO COUNT THE NUMBER OF TURNS ===========


    for (counter = 1; counter <= 5; counter = counter + 1) {

        if (counter == 1) {


            // ==== 2ND PLAYER'S TURN ====================================================================

            /* Asking the 2nd player to enter his/her name and storing it in array (playerID). */

            enterPlayerName();


            /* Prompting 2nd player to GUESS a number from 1 to 100, and convert that string to a number. */

            enterPlayerNumber();


        } else {


            // ==== STEP 3 - COMPARING THE NUMBERS CHOSEN BY THE PLAYERS ==============================================


            // Testing whether the number guessed by the 2nd player matches the number chosen by the 1st player.

            if (playersChosenNumber[1] < playersChosenNumber[0]) {

                alert(messagesToPlayer["guessIsLower"] + (5 - counter) + messagesToPlayer["turnsLeft"] + player2GuessedNumbers.join(", ") + messagesToPlayer["tryAgain"]);
                enterPlayerNumber();

                console.log(player2GuessedNumbers);
                // --> Just to what are the value stored in the array (player2GuessedNumbers) at this stage of the
                // game before coding further. */

            } else if (playersChosenNumber[1] > playersChosenNumber[0]) {

                alert(messagesToPlayer["guessIsHigher"] + (5 - counter) + messagesToPlayer["turnsLeft"] + player2GuessedNumbers.join(", ") + messagesToPlayer["tryAgain"]);
                enterPlayerNumber();

                console.log(player2GuessedNumbers);
                // --> Just to what are the value stored in the array (player2GuessedNumbers) at this stage of the
                // game before coding further. */

            }

            if (playersChosenNumber[1] === playersChosenNumber[0]) {

                alert(messagesToPlayer["congratulationsWinner"]);

                /* To exit the loop if the 2nd player has the right answer*/

                break;

            }

        }
    }

// ==== STEP 4 - END OF THE GAME ======================================================================================

    /* Thanking the players and letting them know the game is over. Displaying first player's chosen number. */

    alert(messagesToPlayer["gameOverThankYou"] + player2GuessedNumbers.join(", ") + messagesToPlayer["firstPlayerNumberWas"] + playersChosenNumber[0]);