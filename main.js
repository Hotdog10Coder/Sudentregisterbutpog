var name_of_the_student_array=[];
function submit(){
    var display_of_student_array=[];

    for (var j = 1; j<= 4;j++){
        var name_of_the_student= document.getElementById("name_of_the_student_"+j).value;
        console.log (name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);

    }
    console.log(display_of_student_array);
    var length_of_stud_array = name_of_the_student_array.length;
    console.log (length_of_stud_array);

    for ( var k = 0; k< length_of_stud_array;k++)
    {
        display_of_student_array.push("<h4> name--"+name_of_the_student_array[k]+"</h4>");
        console.log (display_of_student_array);
    }
    console.log (display_of_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_of_student_array;

    var Remove_commas =display_of_student_array.join(" ");
    console.log (Remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=Remove_commas;


    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}


function sorting ()
    {
name_of_the_student_array.sort();
console.log(name_of_the_student_array);

var display_student_array_sorting = [];
var length_of_stud_array = name_of_the_student_array.length;
    console.log (length_of_stud_array);

    for ( var k = 0; k< length_of_student_array;k++)
    {
        display_student_array_sorting.push("<h4> name--"+name_of_the_student_array[k]+"</h4>");
        console.log ( display_student_array_sorting);
    }

    var Remove_commas =display_student_array_sorting.join();
    console.log (Remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=Remove_commas;
    }



    function new_update (){
        document.getElementById("display_name_without_commas").innerHTML= "<h1>"+name_of_the_student_array+"</h1>"; 
    }
