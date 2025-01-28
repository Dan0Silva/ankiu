package router

import (
	"github.com/Dan0Silva/ankiu/backend/src/router/routes"
	"github.com/gorilla/mux"
)


func Generate() *mux.Router {
	newRouter := mux.NewRouter()
	routes.GenerateRoutes(newRouter)

	return newRouter
}
