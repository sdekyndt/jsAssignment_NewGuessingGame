
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

// =============================================== GENERAL SETTINGS ===============================================

    // ===== VARIABLES AND ARRAYS STATEMENTS =====

        /* Creating undefined variables */

        var playerName;             // To prompt players to enter their name, and later store it in an array (playerID).
        var playerNumberInput;      // To prompt players to choose a number from 1 to 100, and later store it in an array (playerChosenNumber).
        var player1NumberOk;        // To test whether 1st player's input number is in range.
        var player2NumberOk;        // To test whether 2nd player's input number is in range.
        var counter;                // To create a counter to be used in a loop.
        var playPlayer2;            // To initialize function (player2Turns).


        /* Creating an empty array to store players' ID, and assigning it to the variable (playerID) */

        var playerID = [];


        /* Creating an empty array to store each player's chose number for later use in STEP 3,
         * by assigning it to a new variable (playerChosenNumber) */

        var playerChosenNumber = [];


        /* Creating an empty array to store each number chosen by the 2nd player, at each try.  */

        var player2GuessedNumbers = [];


        /* Creating an array to store message strings intended to the players, for later use in a shorten version of
         * this JavaScript file */

        var messageToPlayer = [];
        messageToPlayer[0] = "WELCOME TO THE NUMBER-GUESSING GAME! Please enter your name.";
        messageToPlayer[1] = ": Choose a number from 1 to 100, enter it here, and keep it for yourself.";
        messageToPlayer[2] = "GREAT, GOT IT! Now click okay and let the second player try to guess which number you chose.";
        messageToPlayer[3] = ": Guess WHAT NUMBER the first player chose! Enter a number from 1 to 100 here.";
        messageToPlayer[4] = "GREAT, GOT IT! Now click okay to check if your guess matches the number chosen by the first player.";
        messageToPlayer[5] = "CONGRATULATIONS! YOUR GUESS WAS RIGHT AND YOU WON THE GAME!";
        messageToPlayer[6] = "Your guess is LOWER than the number chosen by the first player. You have ";
        messageToPlayer[7] = "Your guess is HIGHER than the number chosen by the first player. You have ";
        messageToPlayer[8] = " TURN(S) LEFT after this turn. LIST OF THE NUMBERS YOU TRIED: ";
        messageToPlayer[9] = " Click okay to try again.";
        messageToPlayer[10] = "ERROR! The number you chose is NOT between 1 and 100! Click okay to enter a number BETWEEN 1 AND 100.";
        messageToPlayer[11] = "GAME OVER! THANK YOU FOR YOUR PARTICIPATION! \nHERE'S THE LIST OF THE NUMBERS YOU TRIED: ";
        messageToPlayer[12] = " \nFIRST PLAYER'S NUMBER WAS: ";


    // ===== REUSABLE CODE - FUNCTIONS STATEMENTS =====

        /* Creating and defining a function (isNumberInRange) to ensure that the number entered by the 1st player
         * is in range (i.e. between 1 and 100).
         * NOTE: Value returned will be either TRUE or FALSE. */

        function isNumberInRange (minValue, maxValue, playerNumberInput) {
            /*var inRange = playerNumberInput >= minValue && playerNumberInput <= maxValue;
             return inRange;*/
            return playerNumberInput >= minValue && playerNumberInput <= maxValue;
        }


        /* Creating and defining a function (player2Turns) to handle 2nd player's turns in the FOR loop. */

        function player2Turns () {

            /* Prompting 2nd player to choose a number from 1 to 100, and convert that string to a number. */

            playerNumberInput = +prompt (playerID[1] + ": Guess WHAT NUMBER the first player chose! Enter a number from 1 to 100 here.");

            //console.log (playerNumberInput);
            // --> Just to make sure the value returned is okay before coding further.


            // ===== TESTING WHETHER 2ND PLAYER'S INPUT NUMBER IS IN RANGE =====

            /* Checking if 2nd player's number input is in range */

            player2NumberOk = isNumberInRange(1, 100, playerNumberInput);

            //console.log (isNumberInRange(1, 100, playerNumberInput));
            // --> Just to make sure the function is still working fine before coding further.

            /* If 2nd player's number input is NOT in range, this loop will keep running until the player
             * enters a number in range */

            while (player2NumberOk !== true) {
                alert ("ERROR! The number you chose is NOT between 1 and 100! Click okay to enter a number BETWEEN 1 AND 100.");
                playerNumberInput = +prompt (playerID[1] + ": Guess WHAT NUMBER the first player chose! Enter a number from 1 to 100 here.");
                player2NumberOk = isNumberInRange(1, 100, playerNumberInput);
            }

            /* If 2nd player's number input is in range, the player receives a confirmation that the number he/she just chose has
             * been stored, and to check if that number matches the number chosen by the 1st player. */

            if (player2NumberOk == true) {
                alert ("GREAT, GOT IT! Now click okay to check if your guess matches the number chosen by the first player.");
            }


            /* Assigning 2nd player's chosen number (playerNumberInput) to the SECOND index position of the
             * array (playerChosenNumber), for later comparison to occur in step 3 below. */

            playerChosenNumber[1] = playerNumberInput;

            //console.log(playerChosenNumber);
            // --> Just to make sure the array is still working fine before coding further. */


            // ===== STORING 2ND PLAYER'S INPUT NUMBERS, TO PROVIDE THE 2ND PLAYER WITH A LIST OF ALL HIS/HER GUESSES =====

            /* Pushing 2nd player's chosen number (playerNumberInput) to LAST index position in
             * array (player2GuessedNumbers). */

            player2GuessedNumbers.push(playerNumberInput);

            //console.log(player2GuessedNumbers);
            // --> Just to make sure the array is working fine before coding further. */
        }

// ==== STEP 1 - 1ST PLAYER'S TURN ====================================================================================

    /* Asking the 1st player to enter his/her name. */

    playerName = prompt("WELCOME TO THE NUMBER-GUESSING GAME! Please enter your name.");

    //console.log(playerName);
    // --> Just to make sure the value returned is okay before coding further.

    /* Assigning 1st player's name (playerName) to the FIRST index position of the array (playerID),
     * for later use in some messages to players, in order to convey some warmth to the game
     * (i.e. by personalizing it a little bit). */

    playerID[0] = playerName;

    //console.log(playerID);
    // --> Just to make sure the array is working fine before coding further.


    /* Prompting 1st player to choose a number from 1 to 100, and convert that string to a number. */

    playerNumberInput = +prompt (playerID[0] + ": Choose a number from 1 to 100, enter it here, and keep it for yourself.");

    //console.log (playerNumberInput);
    // --> Just to make sure the value returned is okay before coding further.


    // ===== TESTING WHETHER 1ST PLAYER'S INPUT NUMBER IS IN RANGE =====

        /* Checking if 1st player's number input is in range */

        player1NumberOk = isNumberInRange(1, 100, playerNumberInput);

        //console.log (isNumberInRange(1, 100, playerNumberInput));
        // --> Just to make sure the function is working fine before coding further.


        /* If 1st player's number input is NOT in range, this loop will keep running until the player enters a number
         * in range */

        while (player1NumberOk !== true) {
            alert ("ERROR! The number you chose is NOT between 1 and 100! Click okay to enter a number BETWEEN 1 AND 100.");
            playerNumberInput = +prompt (playerID[0] + ": Choose a number from 1 to 100, enter it here, and keep it for yourself.");
            player1NumberOk = isNumberInRange(1, 100, playerNumberInput);
        }

        /* If 1st player's number input is in range, the player receives a confirmation that the number he/she just
         * chose has been stored, and that the 2nd player will now try to guess what that number is. */

        if (player1NumberOk == true) {
            alert ("GREAT, GOT IT! Now click okay and let the second player try to guess which number you chose.");
        }


    /* Assigning 1st player's chosen number (playerNumberInput) to the FIRST index position of the
     * array (playerChosenNumber), for later comparison to occur in step 3 below. */

    playerChosenNumber[0] = playerNumberInput;

    //console.log(playerChosenNumber);
    // --> Just to make sure the array is working fine before coding further. */


// ==== STEP 2 - 2nd PLAYER'S TURN - ENCAPSULATING IT IN A FOR LOOP IN ORDER TO COUNT THE NUMBER OF TURNS ============


for (counter = 1; counter <= 5; counter = counter + 1) {

    if (counter == 1) {


            // ==== SUB-STEP 2 - 2nd PLAYER'S TURN ========================================================================

                /* Asking the 2nd player to enter his/her name. */

                playerName = prompt("WELCOME TO THE NUMBER-GUESSING GAME! Please enter your name.");

                //console.log(playerName);
                // --> Just to make sure the value returned is okay before coding further.

                /* Assigning 2nd player's name (playerName) to the SECOND index position of the array (playerID) */

                playerID[1] = playerName;

                //console.log(playerID);
                // --> Just to make sure the array is still working fine before coding further.

                /* Initializing function (player2Turns) */
                playPlayer2 = player2Turns();

                //console.log(player2GuessedNumbers);
                // --> Just to what are the value stored in the array (player2GuessedNumbers) at this stage of the
                // game before coding further. */


    } else {

            // ==== STEP 3 - COMPARING THE NUMBERS CHOSEN BY THE PLAYERS ==============================================


                // Testing whether the number guessed by the 2nd player matches the number chosen by the 1st player.

                if (playerChosenNumber[1] < playerChosenNumber[0]) {
                    alert("Your guess is LOWER than the number chosen by the first player. You have " + (5 - counter) + " TURN(S) LEFT after this turn. LIST OF THE NUMBERS YOU TRIED: " + player2GuessedNumbers.join("\n") + " Click OK to try again.");
                    playPlayer2 = player2Turns();

                    //console.log(player2GuessedNumbers);
                    // --> Just to what are the value stored in the array (player2GuessedNumbers) at this stage of the
                    // game before coding further. */

                } else if (playerChosenNumber[1] > playerChosenNumber[0]) {
                    alert("Your guess is LOWER than the number chosen by the first player. You have " + (5 - counter) + " TURN(S) LEFT after this turn. LIST OF THE NUMBERS YOU TRIED: " + player2GuessedNumbers.join("\n") + " Click OK to try again.");
                    playPlayer2 = player2Turns();

                    //console.log(player2GuessedNumbers);
                    // --> Just to what are the value stored in the array (player2GuessedNumbers) at this stage of the
                    // game before coding further. */

                }

        if (playerChosenNumber[1] === playerChosenNumber[0]) {
            alert("CONGRATULATIONS! YOUR GUESS WAS RIGHT AND YOU WON THE GAME!");

            /* To exit the loop if the 2nd player has the right answer*/
            break;

        }

    }
}

/* Thanking the players and letting them know the game is over. Displaying first player's chosen number. */

alert("GAME OVER! THANK YOU FOR YOUR PARTICIPATION! \nHERE'S THE LIST OF THE NUMBERS YOU TRIED: " + player2GuessedNumbers.join("\n") + " \nFIRST PLAYER'S NUMBER WAS: " + playerChosenNumber[0]);