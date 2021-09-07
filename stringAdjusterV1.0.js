function stringAdjust(cityName) {
    /* String Adjuster V1.0 : 
    This function is a string adjuster made for adjusting uneven Strings and to make City names : X Y to "X+Y", specially designed for the weather API query in Javascript. It capitalises the First character and if the string has a space in between, it capitalises the Second character as Well and replaces the space with a '+' sign to fit the query. The '+' sign can also be replaced with '%20' as this works evenly well in the query



    Examples    : str = "Anurag" (returns the string as Anurag as it is) [Case 1]
                : str = "anurag" (returns the string as Anurag) [Case 2]
                : str = "aNURAG" (returns the string as Anurag) [Case 3]
                : str = "anurag rawat" (returns the string as Anurag+Rawat) [Case 4]
                : str = "aNURAG rAWAT" (returns the string as Anurag+Rawat) [Case 5]

    This is the URL example :

    "https://api.openweathermap.org/data/2.5/weather?q=[CityName]&appid=[APP ID];

    Which will be corrected with :

    "https://api.openweathermap.org/data/2.5/weather?q="Anurag+Rawat"&appid=[APP ID]; 
    
    */


    var str = cityName; //name of the city

    var strToInsert = "+"; //Sign to insert (Can be changed to '%20')

    indexPos = str.indexOf(' ');  //Getting the index for the space character

    var capitalWihoutSpace = str.slice(0, 1).toUpperCase() + str.slice(1, str.length).toLowerCase(); //This capitalises the string which contains no space

    if (str.indexOf(' ') >= 0) {
        var capitaliseOne = str.slice(0, 1).toUpperCase() + str.slice(1, indexPos).toLowerCase(); 
        
        var capitaliseTwo = capitaliseOne + " " + str.slice(indexPos + 1, indexPos + 2).toUpperCase();
        
        var capitaliseThree = capitaliseTwo + str.slice(indexPos + 2, str.length).toLowerCase(); //Final Capitalised String
        
        var newstring = capitaliseThree.slice(0, indexPos) + strToInsert + capitaliseThree.slice(indexPos + 1, str.length); //Logic for Inserting Space
        
        console.log(newstring);
        
        return newstring;

    }
    else {
        console.log(capitalWihoutSpace);
        return capitalWihoutSpace;
    }
    console.log(indexat); //Displays where the space is present in the string
}


var cityname = "new delHI";
var adjustedString = stringAdjust(cityname);
