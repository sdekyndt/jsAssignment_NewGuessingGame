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


        /* Creating an array to store message strings intended to the players */

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

            playerNumberInput = +prompt (playerID[1] + messageToPlayer[3]);


            // ===== TESTING WHETHER 2ND PLAYER'S INPUT NUMBER IS IN RANGE =====

            /* Checking if 2nd player's number input is in range */

            player2NumberOk = isNumberInRange(1, 100, playerNumberInput);


            /* If 2nd player's number input is NOT in range, this loop will keep running until the player
             * enters a number in range */

            while (player2NumberOk !== true) {
                alert (messageToPlayer[10]);
                playerNumberInput = +prompt (playerID[1] + messageToPlayer[3]);
                player2NumberOk = isNumberInRange(1, 100, playerNumberInput);
            }


            /* If 2nd player's number input is in range, the player receives a confirmation that the number he/she just chose has
             * been stored, and to check if that number matches the number chosen by the 1st player. */

            if (player2NumberOk == true) {
                alert (messageToPlayer[4]);
            }


            /* Assigning 2nd player's chosen number (playerNumberInput) to the SECOND index position of the
             * array (playerChosenNumber), for later comparison to occur in step 3 below. */

            playerChosenNumber[1] = playerNumberInput;


            // ===== STORING 2ND PLAYER'S INPUT NUMBERS, TO PROVIDE THE 2ND PLAYER WITH A LIST OF ALL HIS/HER GUESSES =====

            /* Pushing 2nd player's chosen number (playerNumberInput) to LAST index position in
             * array (player2GuessedNumbers). */

            player2GuessedNumbers.push(playerNumberInput);

        }

// ==== STEP 1 - 1ST PLAYER'S TURN ====================================================================================

    /* Asking the 1st player to enter his/her name. */

    playerName = prompt(messageToPlayer[0]);


    /* Assigning 1st player's name (playerName) to the FIRST index position of the array (playerID),
     * for later use in some messages to players, in order to convey some warmth to the game
     * (i.e. by personalizing it a little bit). */

    playerID[0] = playerName;


    /* Prompting 1st player to choose a number from 1 to 100, and convert that string to a number. */

    playerNumberInput = +prompt (playerID[0] + messageToPlayer[1]);


    // ===== TESTING WHETHER 1ST PLAYER'S INPUT NUMBER IS IN RANGE =====

        /* Checking if 1st player's number input is in range */

        player1NumberOk = isNumberInRange(1, 100, playerNumberInput);


        /* If 1st player's number input is NOT in range, this loop will keep running until the player enters a number
         * in range */

        while (player1NumberOk !== true) {
            alert (messageToPlayer[10]);
            playerNumberInput = +prompt (playerID[0] + messageToPlayer[1]);
            player1NumberOk = isNumberInRange(1, 100, playerNumberInput);
        }

        /* If 1st player's number input is in range, the player receives a confirmation that the number he/she just
         * chose has been stored, and that the 2nd player will now try to guess what that number is. */

        if (player1NumberOk == true) {
            alert (messageToPlayer[2]);
        }


    /* Assigning 1st player's chosen number (playerNumberInput) to the FIRST index position of the
     * array (playerChosenNumber), for later comparison to occur in step 3 below. */

    playerChosenNumber[0] = playerNumberInput;


// ==== STEP 2 - 2nd PLAYER'S TURN - ENCAPSULATING IT IN A FOR LOOP IN ORDER TO COUNT THE NUMBER OF TURNS ============


for (counter = 1; counter <= 5; counter = counter + 1) {

    if (counter == 1) {


            // ==== SUB-STEP 2 - 2nd PLAYER'S TURN ========================================================================

                /* Asking the 2nd player to enter his/her name. */

                playerName = prompt(messageToPlayer[0]);


                /* Assigning 2nd player's name (playerName) to the SECOND index position of the array (playerID) */

                playerID[1] = playerName;


                /* Initializing function (player2Turns) */
                playPlayer2 = player2Turns();


    } else {

            // ==== STEP 3 - COMPARING THE NUMBERS CHOSEN BY THE PLAYERS ==============================================


                // Testing whether the number guessed by the 2nd player matches the number chosen by the 1st player.

                if (playerChosenNumber[1] < playerChosenNumber[0]) {
                    alert(messageToPlayer[6] + (5 - counter) + messageToPlayer[8] + player2GuessedNumbers.join("\n") + messageToPlayer[9]);
                    playPlayer2 = player2Turns();


                } else if (playerChosenNumber[1] > playerChosenNumber[0]) {
                    alert(messageToPlayer[7] + (5 - counter) + messageToPlayer[8] + player2GuessedNumbers.join("\n") + messageToPlayer[9]);
                    playPlayer2 = player2Turns();

                }

        if (playerChosenNumber[1] === playerChosenNumber[0]) {
            alert(messageToPlayer[5]);

            /* To exit the loop if the 2nd player has the right answer*/
            break;

        }

    }
}

/* Thanking the players and letting them know the game is over. Displaying first player's chosen number. */

alert(messageToPlayer[11] + player2GuessedNumbers.join("\n") + messageToPlayer[12] + playerChosenNumber[0]);