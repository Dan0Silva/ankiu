package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/Dan0Silva/ankiu/backend/src/router"
)

func main() {
	port := 5000

	routes := router.Generate()

	fmt.Printf("\n _> API running on port: %d\n\n", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), routes))
}
