
$(document).ready(function() {
    var seconds = 30;
    // var answersList = [];
    var answer1 =""; 
    var answer2 =""; 
    var answer3 =""; 
    var score = 0;
    $("#timer").html("<h4>Time Remaining: " + seconds + " seconds.</h4>");
    console.log(seconds);
    run();
    $("input[type='radio']").click(function() {
    var correctAns = ["Theodore Roosevelt", "John F. Kennedy", "Herbert Hoover"];

    console.log(this);
    //Loop over all questions
    $(".main-section").each(function(){
    var questionId = $(this).attr("id");
    var answer0 = $("input[name='answer']:checked", $(this)).val();
    console.log(answer0);
    var answer1 = $("input[name='answer']:checked", $(this)).val();
    console.log(answer1);
    var answer2 = $("input[name='answer']:checked", $(this)).val();
    console.log(answer2);
    // score();
    // function score(){
      for (var i = 0; i < correctAns.lenght; i++)
      {
        if (correctAns[0] == answer0)

        {
          console.log(answer0);
          score ++;
        }
          else {
            return false;
          }
        
    
        if (correctAns[1] == answer1)
        {
          console.log(answer1);
          score ++;
        }
          else {
            return false;
          }
        
        if (correctAns[2] == answer2)
        {
          score ++;
          console.log(answer2);
            // to display the score and the correctAns[].
            $("#result").html("Your score is : " + score);
            $("#correctAnswers").html("The correct answers are: " + correctAns.join(", "));
        }
      }
    // }
      });
    });
 });

// function score(){
//       for (var i = 0; i < correctAns.lenght; i++)
//       {
//         if (correctAns[0] == answer0)

//         {
//           console.log(answer0);
//           score ++;
//         }
//           else {
//             return false;
//           }
        
    
//         if (correctAns[1] == answer1)
//         {
//           console.log(answer1);
//           score ++;
//         }
//           else {
//             return false;
//           }
        
//         if (correctAns[2] == answer2)
//         {
//           score ++;
//           console.log(answer2);
//             // to display the score and the correctAns[].
//             $("#result").html("Your score is : " + score);
//             $("#correctAnswers").html("The correct answers are: " + correctAns.join(", "));
//         }
//       }
//     }



function run(){
    intervalId = setInterval(decrement, 1000);
}

   //  The decrement function.
function decrement() {
    var seconds = 30;
    // $("#timer").append("<h4>Time Remaining: " + seconds + " seconds.</h4>"); 
    $("#timer").html("<h4>Time Remaining: " + seconds + " seconds.</h4>");
    // to decrement seconds and display on page
    for (seconds = 30; seconds <= 0; seconds--){
    $("#timer.h4").html("<h4 Time Remaining in Seconds: >" + seconds + " seconds</h4>");
    console.log(seconds);
    return seconds;
    }
}
