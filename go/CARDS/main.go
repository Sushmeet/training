package main

import (
	"fmt"
)

// two types of packages
// executable and reusable pacakges
// package main ---> means we are making an executable package.
// reusable package --> means we are making a reusable package.
func main() {
	// var card string = "hello sushi"
	var card = "hello"
	card2 := "jojo"
	card2 = "balle"

	name := getName()

	cardArray := []string{"Ace of diamonds", getName()}
	fmt.Println(cardArray)
	cardArray = append(cardArray,"jesus")
	fmt.Println(cardArray)

	for i, card := range cardArray {
		fmt.Println(i, card);
	}


	fmt.Println(card)
	fmt.Println(card2)
	fmt.Println(name)
	fmt.Println(getName())
}

func getName() string {
	return "sushi"
}
