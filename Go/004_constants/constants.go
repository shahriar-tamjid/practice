package main

import "fmt"

// the structure is similar to c
// we always need a main() for entry point
// we can decalre variables, constants, other functions outside the main()

const age int = 23

func main() {
	fmt.Println(age)

	// using multiple constants
	const (
		port = 5000
		host = "localhost"
	)

	fmt.Println(port, host)
}
