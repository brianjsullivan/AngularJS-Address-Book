function AddressCtrl($scope) {
  $scope.contactList = [
    {
      firstName: "Joe", lastName: "Fitzsimmons", streetAddress: "121 Main Street", city: "Hoboken", state: "NJ", zip: "08901", phoneNum: "201-212-2129", email: "joefitz@gmail.com"
    },{
      firstName: "Donna", lastName: "Jackson", streetAddress: "80 First Avenue", city: "New York", state: "NY", zip: "10016", phoneNum: "212-989-9896", email: "donnajax@yahoo.com"
    },{
      firstName: "Jenny", lastName: "Sinhouse", streetAddress: "22 City Lane", city: "Stanford", state: "CT", zip: "90452", phoneNum: "551-565-6362", email: "jenny.sinhouse@gmail.com"
    },{
      firstName: "Bert", lastName: "Walters", streetAddress: "22 New View", city: "Pittsburgh", state: "PA", zip: "30565", phoneNum: "675-548-3258", email: "bert.p.walters@me.com"
    },{
      firstName: "Muhammed", lastName: "Omar", streetAddress: "599 Fountain Place", city: "Burlington", state: "VT", zip: "13565", phoneNum: "353-984-1425", email: "moomar91@gmail.com"
    },{
      firstName: "Sol", lastName: "De La Playa", streetAddress: "6 Union Street", city: "Richmond", state: "VA", zip: "59669", phoneNum: "621-854-1244", email: "delasol63@aol.com"
    },{
      firstName: "Sit", lastName: "Singh", streetAddress: "1490 Brown Avenue", city: "San Antonio", state: "TX", zip: "36202", phoneNum: "313-5620-0251", email: "s.singh@about.me"
    }
  ];

  $scope.getContactInfo = function(properties){
    var listLength = $scope.getContactListLength();
    var propLength = properties.length;
    var propertyName = "";
    for(var i = 0; i < listLength; i++){
      for(var n = 0; n < propLength; n++){
        propertyName = properties[n];
        if($scope.contactList[i][propertyName].toLowerCase() == $scope.searchInput.toLowerCase()){
          return $scope.contactList[i];
        }
      }
    }
  }

  $scope.matchSearchToContacts = function(){
    console.log("Running matchSearchToContacts");
    $scope.matchedContacts = [];
    var queryLength = $scope.searchInput.length;

    if(queryLength==0 || queryLength==null || queryLength=='undefined'){
      if(queryLength == 0){
        return "Please enter a search term";
      }else{
        return "An error ocurred";
      }
    }
    console.log("Before statement block");
    var contactsLength = $scope.getContactListLength();
    var properties = ["firstName","lastName","streetAddress","city","state","zip","phoneNum","email"];
    var subStringLength = 0;
    var searchNewContact = false;
    var currentSubString = "";
    var propertyName = "";

    var countContactLoop = 0;
    var countPropLoop = 0;
    var countSubLoop = 0;
    console.log("After statement block");

    for(var i=0; i<contactsLength; i++){
      searchNewContact = false;
      countContactLoop++;

      for(var n=0; n<properties.length; n++){
        propertyName = properties[n];
        subStringLength = propertyName.length - queryLength;
        countPropLoop++;

        for(var x=0; x<=subStringLength; x++){
          countSubLoop++;
          
          if(!searchNewContact){
            currentSubString = $scope.contactList[i][propertyName].substr(x,x+queryLength);

            if(currentSubString.toLowerCase() == $scope.searchInput.toLowerCase()){
              console.log("Contact loop ran: "+countContactLoop+", Property loop ran: "+countPropLoop+", SubString Loop ran: "+countSubLoop);
              console.log("Hit on "+propertyName+" of "+$scope.contactList[i].firstName+" with: '"+currentSubString+"'");
              console.log("");
              $scope.matchedContacts.push($scope.contactList[i]);
              searchNewContact = true;

            }
          }
        }
      }
      console.log("*^*^* matchedContacts length = "+$scope.matchedContacts.length+"*^*^*");
    }
    if($scope.matchedContacts.length>0){
      return $scope.matchedContacts;
    }else{
      return "Search yielded no results";
    }
  }

  $scope.groomSearchResults = function(){
    $scope.allResults = [];
    var matchedContacts = $scope.matchSearchToContacts();
    if($scope.matchedContacts.length > 0){
    var lineOne = "";
    var lineTwo = "";
    var lineThree = "";
    var lineFour = "";
    var thisResult = [];

    for(var i=0;i<matchedContacts.length; i++){
      lineOne = "";
      lineTwo = "";
      lineThree = "";
      lineFour = "";

      lineOne += matchedContacts[i]["firstName"];
      lineOne += " ";
      lineOne += matchedContacts[i]["lastName"];

      lineTwo += matchedContacts[i]["streetAddress"];

      lineThree += matchedContacts[i]["city"];
      lineThree += ", ";
      lineThree += matchedContacts[i]["state"];
      lineThree += " ";
      lineThree += matchedContacts[i]["zip"];

      lineFour += matchedContacts[i]["phoneNum"];
      lineFour += " - ";
      lineFour += matchedContacts[i]["email"];

      thisResult = [lineOne,lineTwo,lineThree,lineFour];
      $scope.allResults.push(thisResult);
    }

    return $scope.allResults;
  }else{
    return "Please enter a search term";
  }
}

  $scope.allResults = [];

  $scope.showContactInfo = function(properties){
    //var contactInfoString = "";
    //var contactInfoArray = [];
    var thisContact = $scope.getContactInfo(properties);

    if(typeof(thisContact) === 'object'){

      return thisContact;

      /*contactInfoArray.push(thisContact.lastName);
      contactInfoArray.push(thisContact.firstName);
      contactInfoArray.push(thisContact.streetAddress);
      contactInfoArray.push(thisContact.city);
      contactInfoArray.push(thisContact.state);
      contactInfoArray.push(thisContact.zip);
      contactInfoArray.push(thisContact.phoneNum);
      contactInfoArray.push(thisContact.email);

      return contactInfoArray;*/

      /*contactInfoString += thisContact.lastName+", "+thisContact.firstName+"<br>";
      contactInfoString += "<br>";
      contactInfoString += thisContact.streetAddress+"<br>";
      contactInfoString += thisContact.city+", "+thisContact.state+" "+thisContact.zip+"<br>";
      contactInfoString += "<br>";
      contactInfoString += thisContact.phoneNum+" | "+thisContact.email;

      return contactInfoString;*/

    }else{ return "Nothing to see here"; }

  }

  $scope.getBasicContactList = function() {
    var listLength = $scope.getContactListLength();
    var basicListString = "";
    var thisContact;

    for(var i = 0; i < listLength; i++){
      thisContact = $scope.contactList[i];

      basicListString += thisContact.firstName+" "+thisContact.lastName+"<br>";
      basicListString += "<br>";
    }

    return basicListString;
  }

  $scope.matchedContacts = [];

  $scope.getContactListLength = function() {
    return $scope.contactList.length;
  }

  $scope.searchInput = "";
}