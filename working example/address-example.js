function AddressBookController($scope) {
	$scope.contacts = [{
		firstName: 'dave',
		lastName: 'jameson',
		number: '0546655837'
	}, {
		firstName: 'larisa',
		lastName: 'dorfman',
		number: '050923423'
	}, {
		firstName: 'john',
		lastName: 'oxford',
		number: '0529346353'
	}];
	$scope.addContact = function() {
		$scope.errorMsg = '';
		if ($scope.firstName && $scope.lastName && $scope.number) {
			$scope.contacts.push({
				firstName: $scope.firstName,
				lastName: $scope.lastName,
				number: $scope.number
			});
			$scope.firstName = '';
			$scope.lastName = '';
			$scope.number = '';
		}else{
			$scope.errorMsg = "Please fill out all fields";
		}
	};
}