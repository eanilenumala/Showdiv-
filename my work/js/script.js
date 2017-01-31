$(document).ready(function() {
       //function for first container
        $("#hidden").show();
        $("#hidden1").hide();
        $("#hidden2").hide();
        $("#hidden3").hide();
        $("#hidden4").hide();
        $("#hidden5").hide();
        $("#hidden6").hide();
        $("#hidden7").hide();
        $('#showdiv1').click(function() {
                $('.div').toggle("slide");
                $("#hidden").hide();
                $("#hidden1").show();
                $("#hidden2").hide();
                $("#hidden3").hide();
                $("#hidden4").hide();
                $("#hidden5").hide();
                $("#hidden6").hide();
                $("#hidden7").hide();
                document.getElementById("audioPlayer1").src='audio/3_1.mp3';
                document.getElementById("audioPlayer1").play(0);
                
        });
        $('#showdiv2').click(function() {
                $('.div').toggle("slide");
                $("#hidden").hide();
                $("#hidden2").show();
                $("#hidden1").hide();
                $("#hidden3").hide();
                $("#hidden4").hide();
                $("#hidden5").hide();
                $("#hidden6").hide();
                $("#hidden7").hide();
                document.getElementById("audioPlayer1").src='audio/3_2.mp3';
                document.getElementById("audioPlayer1").play(0);
                
        });
        $('#showdiv3').click(function() {
                $('.div').toggle("slide");
                $("#hidden").hide();
                $("#hidden3").show();
                $("#hidden2").hide();
                $("#hidden1").hide();
                $("#hidden4").hide();
                $("#hidden5").hide();
                $("#hidden6").hide();
                $("#hidden7").hide();
                document.getElementById("audioPlayer1").src='audio/3_3.mp3';
                document.getElementById("audioPlayer1").play(0);
                
        });
        $('#showdiv4').click(function() {
                $('.div').toggle("slide");
                $("#hidden").hide();
                $("#hidden4").show();
                $("#hidden2").hide();
                $("#hidden3").hide();
                $("#hidden1").hide();
                $("#hidden5").hide();
                $("#hidden6").hide();
                $("#hidden7").hide();
               document.getElementById("audioPlayer1").src='audio/3_4.mp3';
                document.getElementById("audioPlayer1").play(0);
                
        });
        $('#showdiv5').click(function() {
                $('.div').toggle("slide");
                $("#hidden").hide();
                $("#hidden5").show();
                $("#hidden2").hide();
                $("#hidden3").hide();
                $("#hidden4").hide();
                $("#hidden1").hide();
                $("#hidden6").hide();
                $("#hidden7").hide();
               document.getElementById("audioPlayer1").src='audio/3_5.mp3';
                document.getElementById("audioPlayer1").play(0);
                
        });
        $('#showdiv6').click(function() {
                $('.div').toggle("slide");
                $("#hidden").hide();
                $("#hidden6").show();
                $("#hidden2").hide();
                $("#hidden3").hide();
                $("#hidden4").hide();
                $("#hidden5").hide();
                $("#hidden1").hide();
                $("#hidden7").hide();
                document.getElementById("audioPlayer1").src='audio/3_6.mp3';
                document.getElementById("audioPlayer1").play(0);
                
        });
        $('#showdiv7').click(function() {
                $('.div').toggle("slide");
                $("#hidden").hide();
                $("#hidden7").show();
                $("#hidden2").hide();
                $("#hidden3").hide();
                $("#hidden4").hide();
                $("#hidden5").hide();
                $("#hidden6").hide();
                $("#hidden1").hide();
                document.getElementById("audioPlayer1").src='audio/3_7.mp3';
                document.getElementById("audioPlayer1").play(0);
                 
        });
        
        
    });

