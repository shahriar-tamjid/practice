package main

import "fmt"

func main () {
	age := 11

	if age >= 18 {
		fmt.Println("person is an adult")
	} else if age >= 12 && age < 18 {
		fmt.Println("person is a teenager")
	} else {
		fmt.Println("person is under aged")
	}

	var user string
	var hasPermission bool

	user = "admin"
	hasPermission = true

	if user == "admin" || hasPermission {
		fmt.Println("permission granted")
	}

	// we can directly declare and use variable inside a if-else block
	// that variable will only be available inside the if-else block
	if age := 19; age >= 18 {
		fmt.Println("person is an adult", age)
	} else if age >= 12 && age < 18 {
		fmt.Println("person is a teenager", age)
	} else {
		fmt.Println("person is underaged")
	}

	// go does not have ternary operator, for such operations we need to use if-else block
}