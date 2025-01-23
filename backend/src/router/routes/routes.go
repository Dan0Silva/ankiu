package routes

import (
	"net/http"

	"github.com/gorilla/mux"
)

type Routes struct {
	Uri         string
	Method      string
	Function    func(w http.ResponseWriter, r *http.Request)
	RequireAuth bool
}

func GenerateRoutes(router *mux.Router) {
	allRoutes := []Routes{}

	// append other routes in allRoutes
	allRoutes = append(allRoutes, LoginRoutes...)

	// handleFunc in router, for each route in allRoutes
	for _, route := range allRoutes {
		router.HandleFunc(route.Uri, route.Function).Methods(route.Method)
	}
}
