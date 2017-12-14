document.getElementById("play").addEventListener("click", function() {

    var event = document.getElementById("event");
    var task = document.getElementById("task");
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");
    var option4 = document.getElementById("option4");
    var choice = document.getElementById("choice").value;

    task.innerText = "You enter a dark room with two doors. Do you go through door #1 or door #2?";
    
    var door = prompt("> ");

        if (door == "1") {
            task.innerText = "There's a giant bear here eating a cheese cake. What do you do?";
    
            option1.innerText = "1. Take the cake.";
            option2.innerText = "2. Scream at the bear.";
            
            var bear = prompt("> ");

            if (bear == "1") {
                event.innerText = "The bear eats your face off. Good job!";
                task.innerText = "";
                
                option1.innerText = "";
                option2.innerText = "";
                option3.innerText = "";
                option4.innerText = "";
            }
            else if (bear == "2") {
                event.innerText = "The bear runs off terrified. Good job!";
    
                task.innerText = "Do you want to chase the bear?";
                option1.innerText = "1. Yes!";
                option2.innerText = "2. No!";
                option3.innerText = "";
                option4.innerText = "";
                
                var chase = prompt("> ");
    
                if (chase == "1") {
                    event.innerText = "The bear outruns you. You are now lost in the woods!";
    
                    task.innerText = "Do you..";
                    option1.innerText = "1. Look for food.";
                    option2.innerText = "2. Look for shelter.";
                    option3.innerText = "";
                    option4.innerText = "";
    
                    var looking = prompt("> ");
    
                    if (looking == "1") {
                        event.innerText = "You found some blueberries. Good job!";
    
                        task.innerText = "Do you..";
                        option1.innerText = "1. Eat all the blueberries.";
                        option2.innerText = "2. Go look for shelter.";
                        option3.innerText = "";
                        option4.innerText = "";
    
                        var afterEat = prompt("> ");
    
                        if (afterEat == "1") {
                            event.innerText = "Night fell and it got too cold. You died. Good job!";
                            task.innerText = "";
                            
                            option1.innerText = "";
                            option2.innerText = "";
                            option3.innerText = "";
                            option4.innerText = "";
                        }
                        else if (afterEat == "2") {
                            event.innerText = "You found a cave and stored all your food. Good job!";
    
                            task.innerText = "Do you..";
                            option1.innerText = "1. Go to sleep.";
                            option2.innerText = "2. Go find wood for a fire.";
                            option3.innerText = "3. Eat the food and sleep.";
                            option4.innerText = "4. Eat, find wood for fire, then sleep.";
    
                            var afterCave = prompt("> ");
    
                            switch (afterCave) {
                                case("1") : 
                                    event.innerText = "You froze to death in the cold night. Good job!";
                                    task.innerText = "";
                                    
                                    option1.innerText = "";
                                    option2.innerText = "";
                                    option3.innerText = "";
                                    option4.innerText = "";
                                    break;
                                case("2") : 
                                    event.innerText = "You got killed by a snake. Good job!";
                                    task.innerText = "";
                                    
                                    option1.innerText = "";
                                    option2.innerText = "";
                                    option3.innerText = "";
                                    option4.innerText = "";
                                    break;
                                case("3") : 
                                    event.innerText = "You froze to death in the cold night. Good job!";
                                    task.innerText = "";
                                    
                                    option1.innerText = "";
                                    option2.innerText = "";
                                    option3.innerText = "";
                                    option4.innerText = "";
                                    break;
                                case("4") : 
                                    event.innerText = "You survived in a warm cave with a full stomach till the morning. Good job!";
                                    task.innerText = "";
                                    
                                    option1.innerText = "";
                                    option2.innerText = "";
                                    option3.innerText = "";
                                    option4.innerText = "";
                                    break;
                                default : 
                                    event.innerText = "You died. Good job!";
                                    task.innerText = "";
                                    
                                    option1.innerText = "";
                                    option2.innerText = "";
                                    option3.innerText = "";
                                    option4.innerText = "";
                                    break;
                            }
                        }
                        else {
                            event.innerText = "The blueberries rottened and the night got too cold. You died. Good job!";
                            task.innerText = "";
                            
                            option1.innerText = "";
                            option2.innerText = "";
                            option3.innerText = "";
                            option4.innerText = "";
                        }
                    }
                    else if (looking == "2") {
                        event.innerText = "You found a cave. Good job!";
    
                        task.innerText = "Do you..";
                        option1.innerText = "1. Go look for food.";
                        option2.innerText = "2. Go get wood for a fire.";
                        option3.innerText = "";
                        option4.innerText = "";
    
                        var afterShelter = prompt("> ");
    
                        if (afterShelter == "1") {
                            event.innerText = "You found food and got back to the cave. Good job!";
    
                            task.innerText = "Do you..";
                            option1.innerText = "1. Eat the food and go to sleep.";
                            option2.innerText = "2. Go find wood for a fire.";
                            option3.innerText = "3. Go to sleep.";
                            option4.innerText = "";
    
                            var afterFood = prompt("> ");
    
                            switch (afterFood) {
                                case ("1") : 
                                    event.innerText = "You successfully survived the night. Good job!";
                                    task.innerText = "";
                                    
                                    option1.innerText = "";
                                    option2.innerText = "";
                                    option3.innerText = "";
                                    option4.innerText = ""; 
                                    break;
                                case ("2") : 
                                    event.innerText = "You found wood for a fire and got back to the cave. Good job!";
                                    task.innerText = "";
                                    
                                    option1.innerText = "";
                                    option2.innerText = "";
                                    option3.innerText = "";
                                    option4.innerText = "";
                                    break;
                                case("3") :
                                    event.innerText = "You starved to death during the cold night. Good job!";
                                    task.innerText = "";
                                    
                                    option1.innerText = "";
                                    option2.innerText = "";
                                    option3.innerText = "";
                                    option4.innerText = "";
                                    break;
                                default : 
                                    event.innerText = "You froze to death. Good job!";
                                    task.innerText = "";
                                    
                                    option1.innerText = "";
                                    option2.innerText = "";
                                    option3.innerText = "";
                                    option4.innerText = "";
                                    break;
                            }
                        }
                        else if (afterShelter == "2") {
                            event.innerText = "You didn't manage to find wood before starving to death. Good job!";
                            task.innerText = "";
                            
                            option1.innerText = "";
                            option2.innerText = "";
                            option3.innerText = "";
                            option4.innerText = "";
                        }
                        else {
                            event.innerText = "You starved to death. Good job!";
                            task.innerText = "";
                            
                            option1.innerText = "";
                            option2.innerText = "";
                            option3.innerText = "";
                            option4.innerText = "";
                        }
                    }
                    else {
                        event.innerText = "The night came and it was too cold for your underfed body to survive. You died. Good job!";
                        task.innerText = "";
                        
                        option1.innerText = "";
                        option2.innerText = "";
                        option3.innerText = "";
                        option4.innerText = "";
                    }
                }
                else if (chase == "2") {
                    event.innerText = "You got the cheese cake! You won the game! :)";
                    task.innerText = "";
                    
                    option1.innerText = "";
                    option2.innerText = "";
                    option3.innerText = "";
                    option4.innerText = "";
                }
                else {
                    event.innerText = "Your indecisiveness got you killed. Good job!";
                    task.innerText = "";
                    
                    option1.innerText = "";
                    option2.innerText = "";
                    option3.innerText = "";
                    option4.innerText = "";
                }
            }
            else {
                event.innerText = `Well, doing ${bear} is probably better. Bear runs away.`;
                task.innerText = "";
                
                option1.innerText = "";
                option2.innerText = "";
                option3.innerText = "";
                option4.innerText = "";
            }
        }
    
        else if (door == "2") {
            event.innerText = "You stare into the endless abyss at Cthuhlu's retina.";
    
            option1.innerText = "1. Blueberries.";
            option2.innerText = "2. Yellow jacket clothespins.";
            option3.innerText = "3. Understanding revolvers yelling melodies.";
            option4.innerText = "";
    
            var insanity = prompt("> ");
    
            if (insanity == "1" || insanity == "2") {
                event.innerText = "Your body survives powered by a mind of jello. Good job!";
                task.innerText = "";
                
                option1.innerText = "";
                option2.innerText = "";
                option3.innerText = "";
                option4.innerText = "";
            }
    
            else {
                event.innerText = "The insanity rots your eyes into a pool of muck. Good job!";
                task.innerText = "";
                
                option1.innerText = "";
                option2.innerText = "";
                option3.innerText = "";
                option4.innerText = "";
            }
        }
    
        else {
            event.innerText = "You stumble around and fall down a hole and die. Good job!";
            task.innerText = "";
            
            option1.innerText = "";
            option2.innerText = "";
            option3.innerText = "";
            option4.innerText = "";
        }
})