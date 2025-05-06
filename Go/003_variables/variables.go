package main

import "fmt"

func main() {
	var name string = "Golang"

	fmt.Println(name)

	// go can automatically assign types to variables
	// this is called "infer"
	var str = "Shahriar Tamjid"
	var isAdult = true
	var age int = 23

	fmt.Println(str)
	fmt.Println(age)
	fmt.Println(isAdult)

	// shorthand syntax
	slogan := "Hala Madrid!"

	fmt.Println(slogan)

	// float values
	var pi float32 = 3.1416

	pi2 := 3.1415926535

	fmt.Println(pi)
	fmt.Println(pi2)
}