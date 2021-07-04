// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

function factoryClassMate(name, nationality, gender, note){
    return {
        name: name,
        nationality: nationality,
        gender: gender,
        note: note
    }
}

var classMates = [];
classMates.push(factoryClassMate('Lina', 'Tunisian', 'Male', 'Loves dogs'));
classMates.push(factoryClassMate('Maher', 'Tunisian', 'Male', 'so smart'));
classMates.push(factoryClassMate('Fatima', 'Libyan', 'Female', 'my bff'));

function displayFriend(friend){
    return `Name: ${friend.name}, Nationality: ${friend.nationality}, Gender: ${friend.gender}, ${friend.note}`;
}

function addFriend(mate){
    classMates.push(mate);
    return `added ${displayFriend(mate)} successfully.`;
}

function nbOfMale(){
    for(var i = 0; i < classMates.length; i++){
        var count = 0;
        if(classMates[i].gender === 'Male'){
            ++count;
        }
    }
    return count;
}

function searchMates(query){
    for(var i = 0; i < classMates.length; i++){
        for(var key in classMates[i]){
            if(query.toLowerCase().includes(classMates[i][key].toLowerCase())){
                return classMates[i];
            }
        }
    }
    return 'cant find any result.'
}