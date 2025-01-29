package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/Dan0Silva/ankiu/backend/src/config"
	"github.com/Dan0Silva/ankiu/backend/src/router"
)

func main() {
	config.LoadEnvirolment()

	routes := router.Generate()

	fmt.Printf("\n _> API running on port: %s\n\n", config.Port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", config.Port), routes))
}
