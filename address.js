function AddressCtrl($scope) {
  $scope.contactList = [
    {
      firstName: "Joe", lastName: "Fitzsimmons", streetAddress: "121 Main Street", city: "Hoboken", state: "NJ", zip: "08901", phoneNum: "201-212-2129", email: "joefitz@gmail.com"
    },{
      firstName: "Donna", lastName: "Jackson", streetAddress: "80 First Avenue", city: "New York", state: "NY", zip: "10016", phoneNum: "212-989-9896", email: "donnajax@yahoo.com"
    },{
      firstName: "Jenny", lastName: "Sinhouse", streetAddress: "22 City Lane", city: "Stanford", state: "CT", zip: "90452", phoneNum: "551-565-6362", email: "jenny.sinhouse@gmail.com"
    }
  ];

  $scope.getContactInfo = function(properties){
    var listLength = $scope.getContactListLength();
    var propLength = properties.length;
    var propertyName = "";
    for(var i = 0; i < listLength; i++){
      for(var n = 0; n < propLength; n++){
        propertyName = properties[n];
        if($scope.contactList[i][propertyName] == $scope.searchInput){
          return $scope.contactList[i];
        }
      }
    }
  }

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

  $scope.getContactListLength = function() {
    return $scope.contactList.length;
  }

  $scope.searchInput = "";

  $scope.message = "";

  $scope.getMessageLength = function() {
    return $scope.message.length;
  }
}