package router

import (
	"net/http"

	"github.com/gorilla/mux"
)

func loginFunc(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("testing"))
}

func Generate() *mux.Router {
	newRouter := mux.NewRouter()

	newRouter.HandleFunc("/login", loginFunc)

	return newRouter
}
