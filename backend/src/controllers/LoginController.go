package controllers

import "net/http"

func Login(w http.ResponseWriter, h *http.Request) {
	w.Write([]byte("testing"))
}
