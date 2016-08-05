function moo() {
  var xp = 100;
  var intro = alert(" Wellcome to BATMAN VS JOKER. You wake up on the rooftop of the Ace Chemicals Building. Your blood dripping through your batsuit and your hands tied to a wooden chair. Thats when see that same vile smile in front of you. His green hair swerving in the gusty wind. He is laughing as he watches you suffer. You realize it's him, you realize it's Joker. You have started of with a 100 xp");
  var q1 = prompt("Choose a or b a:You cut the rope you are tied with to the chair b:You wait for him to approach you and then you headbutt him");
  if (q1 === "a") {
    xp = xp + 10;
    alert("You gained 10 xp. You have chosen wisely");

    var q2 = prompt("choose a or b a:You grab the chair and run up to knock the joker out b:You throw down a smoke bomb");
    if (q2 === "a") {
      xp = xp - 50;
      alert("Harley Quinn ambushes you and fights you with her hammer. You lose 50 xp.");
    } else {
      alert("You have confused the joker. You gain 10 xp");
      xp = xp + 10;

      var q31 = prompt("choose a or b. a:You go ahead and try to ruin all of jokers work. b:You try to find Joker and disarm him.");
      if (q31 === "a") {
        xp = xp - 50;
        alert("Harley Quinn ambushes you and fights you with her hammer. You lose 50 xp");
      } else {
        xp = 0;
        alert("Joker uses his heat sensors to find you and backstabs you. You die !");
      }
        var q4 = prompt("choose a or b. a: you fight her back. b: You hold her hostage and threaten joker.");

        if (q4 === "b") {
          xp = xp + 10;
          alert("While you are holding her hostage you press a button to alert nightwing. You knock out Harley and Nightwing knocks out Joker. Congratulations you WIN !!!");
        } else {
          xp = 0;
          alert("You decide to fight her and then joker sneaks up on you and backstabs you. You die !");
        }
      
    }

    var q3 = prompt("Choose a or b a:You fight her back b:You dodge her moves and decide to hold her hostage to threaten joker.");
    if (q3 === "b") {
      xp = xp + 50;
      alert("You send a distress call for Robin who shows up through the window and takes down the Joker while You knock out Harley.");
      alert("Congratulations you win the game. Your end result is " + xp + " xp");
    }
  } else {
    alert("He blocks your headbutt and knocks you out. YOU lose 50 xp");
    xp = xp - 50;

    var q21 = prompt("You wake up hanging by the side of the building. Choose a or b a:You try to cut the rope b:You swerve front and back.");

    if (q21 === "b") {
      xp = xp + 10;
      alert("You gained 10 xp. you have chosen wisely");

      var q32 = prompt("choose a or b. a:He comes up to you with a knife and you disarm him. b:He comes up to you with a knife and you punch him.");

      if (q32 === a) {
        xp = xp + 10;
        alert("You disarm him and then beat knock him out. Congratulations! You win !");
      } else {
        xp = 0;
        alert("He dodges it and stabs you in the chest. You die !");
      } //end of else
    } //end of if 32

   else {
    xp = 0;
    alarm("It triggers an alarm which drops you from the top of the building. You die!");
  }

  }
}