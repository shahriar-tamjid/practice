package main

import "fmt"

// for -> only construct in go for looping
func main() {
	// while loop
	i := 1

	for i <= 3 {
		fmt.Println(i)
		i++
	}

	// infinite loop
	// for {
	// 	fmt.Println("This is infinite loop")
	// }

	// for loop
	for i := 0; i < 3; i++ {
		fmt.Println(i)
	}

	// break and continue
	for i := 0; i <= 3; i++ {
		// break

		if i == 2 {
			continue
		}

		fmt.Println(i)
	}

	// in version 1.22 range was introduced
	// range is the shorthand of writing logic in for loop
	// range follows "<" condition
	for i := range 3 {
		fmt.Println("range")
		fmt.Println(i)
	}
}